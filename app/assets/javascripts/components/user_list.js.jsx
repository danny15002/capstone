var UserList = React.createClass({
  getInitialState: function () {
    return {friends: UserStore.currentFriends()}
  },
  componentDidMount: function () {
    UserStore.addChangeListener(FriendzConstants.FRIENDS_RECEIVED, this.getFriends);
    ApiUtil.fetchFriends();

  },
  componentWillUnmount: function () {
    UserStore.removeChangeListener(FriendzConstants.FRIENDS_RECEIVED, this.getFriends);

  },
  getFriends: function () {
    this.setState({friends: UserStore.currentFriends()})
  },
  mixins: [ReactRouter.History],

  handleClick: function (event) {
    // console.log($(event.target).context.id);
    var selected = $(event.target).context.id;
    this.history.pushState(null,"Messages/"+ selected)

  },

  render: function () {
    return (
      <div>
        <div onClick={this.handleClick} className="bar user-list">
          {this.state.friends.map(function (friend){
            return (
              <div id={friend.id} key={friend.id} selected={false} className={"nav nav-friend"}>
                {friend.name}
              </div>
            )
          })}

        </div>
        {this.props.children || <div>Welcome to Your Inbox</div>}
      </div>
    );
  }
});
