var Profile = React.createClass ({
  getInitialState: function () {
    return {profilePicUrl: "", friends: []}
  },
  componentDidMount: function () {
    UserStore.addChangeListener(FriendzConstants.PICTURES_RECEIVED, this.getPictures);
    LoginStore.addChangeListener(FriendzConstants.MY_FRIENDS_RECEIVED, this.getFriends);
    LoginStore.addChangeListener(FriendzConstants.FRIEND_DELETED, this.fetchFriends);
    LoginStore.addChangeListener(FriendzConstants.FRIEND_ADDED, this.fetchFriends);
    ApiUtil.fetchPictures(this.props.params.userId);
    ApiUtil.fetch({url: "api/friendships", data: {}, constant: FriendzConstants.MY_FRIENDS_RECEIVED});
  },
  componentWillUnmount: function () {
    UserStore.removeChangeListener(FriendzConstants.PICTURES_RECEIVED, this.getPictures);
    LoginStore.removeChangeListener(FriendzConstants.MY_FRIENDS_RECEIVED, this.getFriends);
    LoginStore.removeChangeListener(FriendzConstants.FRIEND_DELETED, this.fetchFriends);
    LoginStore.removeChangeListener(FriendzConstants.FRIEND_ADDED, this.fetchFriends);
  },
  componentWillReceiveProps: function (nextProps) {
    var id = nextProps.params.userId;
    if (id === undefined){
      id = LoginStore.user().id;
    } else {
      id = parseInt(id);
    }
    ApiUtil.fetchPictures(id);
  },
  getPictures: function () {
    this.setState({profilePicUrl: UserStore.userProfPic()})
  },
  getFriends: function () {
    this.setState({friends: LoginStore.getMyFriends()})
  },
  fetchFriends: function () {
    ApiUtil.fetch({url: "api/friendships", data: {}, constant: FriendzConstants.MY_FRIENDS_RECEIVED});
  },
  friendText: function (id) {
    var text="";
    var request;

    if (LoginStore.user().id !== parseInt(id)){
      if (this.state.friends.some(function (friend) {
        return parseInt(friend.friend_id) === parseInt(id)
      })) {
        text = "Unfriend";
        friendship_id = LoginStore.getFriendShipId(parseInt(id));
        request = {url: "api/friendships/" + friendship_id,
                   method: "DELETE",
                   data: {},
                   constant: FriendzConstants.FRIEND_DELETED};
      } else {
        text="Add Friend";
        request = {url: "api/friendships/",
                   method: "POST",
                   data: {friendship: {user_id: LoginStore.user().id,
                                       friend_id: id}},
                   constant: FriendzConstants.FRIEND_ADDED};
      }
    }
    return {text: text, request: request}
  },
  handleClick: function (request) {
    return function () {
      console.log(request);
      ApiUtil.request(request);
    }
  },
  render: function () {
    var id;
    if (this.props.params.userId === undefined) {
      id = LoginStore.user().id;
    } else {
      id = this.props.params.userId
    }

    var friendObject = this.friendText(id)

    return (
      <div className={"profile"}>
        <div style={{margin: "36px 36px"}}>
          <div className={"profile-menu"}>
            <a href={"#/User/" + id + "/Friends"} className={"Friends"}>Friends</a>
            <a href={"#/User/" + id + "/Pictures"} className={"Pictures"}>Pictures</a>
            <a href={"#/Messages/" + id} className={"Messages"}>Messages</a>
            <div onClick={this.handleClick(friendObject.request)}>
              {friendObject.text}
            </div>
          </div>
          <img className={"prof-pic"}
            src={this.state.profilePicUrl}
            alt={"profile picture"}/>
          <PostStatusForm userId={id}/>
        </div>
        <WallActivity userId={id} />
      </div>
    )
  }
})
