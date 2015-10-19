var FriendList = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {friends: UserStore.currentFriends()}
  },
  componentDidMount: function () {
    UserStore.addChangeListener(FriendzConstants.FRIENDS_RECEIVED, this.getFriends);
    ApiUtil.fetchFriends(this.props.params.userId);
  },
  componentWillUnmount: function () {
    UserStore.removeChangeListener(FriendzConstants.FRIENDS_RECEIVED, this.getFriends);
  },
  getFriends: function () {
    this.setState({friends: UserStore.currentFriends()})
  },

  handleClick: function (event) {
    // console.log($(event.target).context.id);
    var selected = $(event.target).context.id;
    if (selected === undefined) {
      selected = LoginStore.user().id
    }
    this.history.pushState(null,"User/"+ selected)
  },

  render: function () {

    return (
      <div>
        <div onClick={this.handleClick} className="friend-list">
          {this.state.friends.map(function (friend){
            return (
              <div id={friend.id} key={friend.id} selected={false} className={"nav nav-friend"}>
                {friend.name}
              </div>
            )
          })}
        </div>
        {this.props.childrens}
      </div>
    );
  }
});
