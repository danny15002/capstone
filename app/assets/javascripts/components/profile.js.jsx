var Profile = React.createClass ({
  getInitialState: function () {
<<<<<<< HEAD
    return {id: this.props.params.userId, friends: [], user: {profPic: ""}}
  },
  componentDidMount: function () {
    LoginStore.addChangeListener(FriendzConstants.MY_FRIENDS_RECEIVED, this.getFriends);
    LoginStore.addChangeListener(FriendzConstants.FRIEND_DELETED, this.fetchFriends);
    LoginStore.addChangeListener(FriendzConstants.FRIEND_ADDED, this.fetchFriends);
    UserStore.addChangeListener(FriendzConstants.USER_RECEIVED, this.setUser);
    var id = this.props.params.userId
    if (id === undefined){
      id = LoginStore.user().id;
    } else {
      id = parseInt(id);
    }
    this.setState({id: id});
    ApiUtil.fetch({url: "users/" + id, data: {id: id}, constant: FriendzConstants.USER_RECEIVED})
    ApiUtil.fetch({url: "api/friendships", data: {}, constant: FriendzConstants.MY_FRIENDS_RECEIVED});
  },
  componentWillUnmount: function () {
    LoginStore.removeChangeListener(FriendzConstants.MY_FRIENDS_RECEIVED, this.getFriends);
    LoginStore.removeChangeListener(FriendzConstants.FRIEND_DELETED, this.fetchFriends);
    LoginStore.removeChangeListener(FriendzConstants.FRIEND_ADDED, this.fetchFriends);
    UserStore.removeChangeListener(FriendzConstants.USER_RECEIVED, this.setUser);
=======

    return {id: this.props.params.userId, friends: []}
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
>>>>>>> 38f886d2d6c348d183e3ee7da574b6c8aef68f94
  },
  componentWillReceiveProps: function (nextProps) {
    var id = nextProps.params.userId;
    if (id === undefined){
      id = LoginStore.user().id;
    } else {
      id = parseInt(id);
    }
<<<<<<< HEAD
    this.setState({id: id});
    ApiUtil.fetchPictures(id);
    ApiUtil.fetch({url: "users/" + this.state.id, data: {id: this.state.id}, constant: FriendzConstants.USER_RECEIVED})

=======
    ApiUtil.fetchPictures(id);
    this.setState({id: id});
  },
  getPictures: function () {
    this.setState({profilePicUrl: UserStore.userProfPic()})
>>>>>>> 38f886d2d6c348d183e3ee7da574b6c8aef68f94
  },
  getFriends: function () {
    this.setState({friends: LoginStore.getMyFriends()})
  },
  fetchFriends: function () {
    ApiUtil.fetch({url: "api/friendships", data: {}, constant: FriendzConstants.MY_FRIENDS_RECEIVED});
  },
<<<<<<< HEAD
  setUser: function () {
    this.setState({user: UserStore.getProfileUser()[0]})
  },
=======
>>>>>>> 38f886d2d6c348d183e3ee7da574b6c8aef68f94
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
      ApiUtil.request(request);
    }
  },
  render: function () {
    var id;
    if (this.props.params.userId === undefined) {
      id = LoginStore.user().id;
      message_id = ""
    } else {
      id = this.props.params.userId
      message_id = id
    }

<<<<<<< HEAD
    var source = this.state.user.profPic
    var friendObject = this.friendText(id)
    var picsize = 200;
=======
    var friendObject = this.friendText(id)

>>>>>>> 38f886d2d6c348d183e3ee7da574b6c8aef68f94
    return (
      <div className={"profile"}>
        <div style={{margin: "36px 36px"}}>
          <div className={"profile-menu"}>
            <a href={"#/User/" + id + "/Friends"} className={"Friends"}>Friends</a>
            <a href={"#/User/" + id + "/Pictures"} className={"Pictures"}>Pictures</a>
            <a href={"#/Messages/" + message_id} className={"Messages"}>Messages</a>
            <div onClick={this.handleClick(friendObject.request)}>
              {friendObject.text}
            </div>
          </div>
<<<<<<< HEAD
          <ProfilePicture source={source} style={{height: picsize + "px", width: picsize + "px"}}/>
=======
          <img className={"prof-pic"}
            src={this.state.profilePicUrl}
            alt={"profile picture"}/>
>>>>>>> 38f886d2d6c348d183e3ee7da574b6c8aef68f94
          <PostStatusForm userId={this.state.id}/>
        </div>
        <WallActivity userId={this.state.id} />
      </div>
    )
  }
})
