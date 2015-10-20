var Profile = React.createClass ({
  getInitialState: function () {
    return {profilePicUrl: ""}
  },
  componentDidMount: function () {
    UserStore.addChangeListener(FriendzConstants.PICTURES_RECEIVED, this.getPictures);
    ApiUtil.fetchPictures(this.props.params.userId);
  },
  componentWillUnmount: function () {
    UserStore.removeChangeListener(FriendzConstants.PICTURES_RECEIVED, this.getPictures);
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
  render: function () {
    var id;
    if (this.props.params.userId === undefined) {
      id = LoginStore.user().id;
    } else {
      id = this.props.params.userId
    }
    return (
      <div className={"profile"}>
        <img className={"prof-pic"}
          src={this.state.profilePicUrl}
          alt={"profile picture"}/>
        <a href={"#/User/" + id + "/Friends"} className={"Friends"}>Friends</a>
        <a href={"#/User/" + id + "/Pictures"} className={"Pictures"}>Pictures</a>
        <a href={"#/Messages/" + id} className={"Messages"}>Messages</a>
        <PostStatusForm userId={id}/>
        <WallActivity userId={id} />
      </div>
    )
  }
})
