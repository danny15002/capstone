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
    var id = parseInt(nextProps.params.userId)
    debugger
    if (id === undefined){
      id = LoginStore.user().id
    }
    ApiUtil.fetchPictures(id);
  },
  getPictures: function () {
    this.setState({profilePicUrl: UserStore.userProfPic()})
  },
  render: function () {
    return (
      <div className={"profile"}>
        <img className={"prof-pic"}
          src={this.state.profilePicUrl}
          alt={"profile picture"}/>
        <a href={"#/Friends"} className={"Friends"}>Friends</a>
        <PostStatusForm />
      </div>
    )
  }
})
