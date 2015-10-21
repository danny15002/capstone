var Profile = React.createClass ({
  getInitialState: function () {
    return {profilePicUrl: "", friends: []}
  },
  componentDidMount: function () {
    UserStore.addChangeListener(FriendzConstants.PICTURES_RECEIVED, this.getPictures);
    LoginStore.addChangeListener(FriendzConstants.MY_FRIENDS_RECEIVED, this.getFriends);
    ApiUtil.fetchPictures(this.props.params.userId);
    ApiUtil.fetch({url: "users", data: {}, constant: FriendzConstants.MY_FRIENDS_RECEIVED});
  },
  componentWillUnmount: function () {
    UserStore.removeChangeListener(FriendzConstants.PICTURES_RECEIVED, this.getPictures);
    LoginStore.removeChangeListener(FriendzConstants.MY_FRIENDS_RECEIVED, this.getFriends);
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
  friendText: function (id) {
    var text="";
    var request;

    if (LoginStore.user().id !== id){
      if (this.state.friends.some(function (friend) {
        return parseInt(friend.id) === parseInt(id)
      })) {
        text = "Unfriend";
        friendship_id = getFriendShipId(id);
        request = {url: "api/friends/" + friendship_id,
                   method: "DELETE",
                   data: {},
                   constant: FriendzConstants.FRIEND_DELETED};
      } else {
        text="Add Friend";
        request = {url: "api/friends/",
                   method: "POST",
                   data: {requester_id: LoginStore.user().id,
                          accepter_id: id},
                   constant: FriendzConstants.FRIEND_ADDED};
      }
    }
    return {text: text, request: request}
  },
  handleClick: function (request) {
    return function () {
      console.log(request);
      // ApiUtil.request(request);
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
        <img className={"prof-pic"}
          src={this.state.profilePicUrl}
          alt={"profile picture"}/>
        <a href={"#/User/" + id + "/Friends"} className={"Friends"}>Friends</a>
        <a href={"#/User/" + id + "/Pictures"} className={"Pictures"}>Pictures</a>
        <a href={"#/Messages/" + id} className={"Messages"}>Messages</a>
        <div onClick={this.handleClick(friendObject.request)}>
          {friendObject.text}
        </div>
        <PostStatusForm userId={id}/>
        <WallActivity userId={id} />
      </div>
    )
  }
})
