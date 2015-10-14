var UserList = React.createClass({
  getInitialState: function () {
    return {friends: UserStore.currentFriends()}
  },
  componentDidMount: function () {
    UserStore.addChangeListener(FriendzConstants.FRIENDS_RECEIVED, this.getFriends);
    ApiUtil.fetchFriends();
  },
  getFriends: function () {
    this.setState({friends: UserStore.currentFriends()})
  },
  render: function () {
    return (
      <div className="bar user-list">
        {this.state.friends.map(function (friend){
          return (
            <div key={friend.id} selected={false} className={"nav-friend"}>
              <div className={"nav"}>{friend.name}</div>
            </div>
          )
        })}
      </div>
    );
  }
});
