var Profile = React.createClass ({
  getInitialState: function () {
    return {profilePicUrl: ""}
  },
  componentDidMount: function () {
    UserStore.addChangeListener(FriendzConstants.PICTURES_RECEIVED, this.getPictures);
    ApiUtil.fetchPictures(true);
  },
  componentWillUnmount: function () {
    UserStore.removeChangeListener(FriendzConstants.PICTURES_RECEIVED, this.getPictures);
  },
  getPictures: function () {
    this.setState({profilePicUrl: UserStore.userPictures()})
  },
  render: function () {
    return (
      <div className={"profile"}>
        <img className={"prof-pic"}
          src={this.state.profilePicUrl}
          alt={"profile picture"}/>
      </div>
    )
  }
})
