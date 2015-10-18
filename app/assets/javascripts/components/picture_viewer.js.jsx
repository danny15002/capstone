var PictureViewer = React.createClass({
  rightArrow: function () {
    return (
      <div onClick={this.handleRight} style={{float: "right", background: "red", width: "10%"}}>
        Next
      </div>
    )
  },
  handleRight: function () {
    var idx = (this.state.currentPicIdx + 1) % this.state.pictures.length
    this.setState({currentPicIdx: idx})
  },
  leftArrow: function () {
    return (
      <div onClick={this.handleLeft} style={{float: "left", background: "blue", width: "10%"}}>
        Previous
      </div>
    )
  },
  handleLeft: function () {
    var idx = (this.state.currentPicIdx - 1 + this.state.pictures.length) % this.state.pictures.length
    this.setState({currentPicIdx: idx})
  },
  getInitialState: function () {
    return {currentPicIdx: 0, pictures: UserStore.getPictures()}
  },
  componentDidMount: function () {
    UserStore.addChangeListener(FriendzConstants.PICTURES_RECEIVED, this.getPictures);
    ApiUtil.fetchPictures();
  },
  componentWillUnmount: function () {
    UserStore.removeChangeListener(FriendzConstants.PICTURES_RECEIVED, this.getPictures);
  },
  getPictures: function () {
    this.setState({pictures: UserStore.getPictures()})
  },
  render: function () {
    var source;
    if (this.state.pictures.length === 0) {
      source = ""
    } else {
      source = this.state.pictures[this.state.currentPicIdx].pic_url
    }

    return (
      <div className={"pic-viewer"}>
        {this.leftArrow()}
        <img className={"picture"}
          src={source}
          alt={"profile picture"}
          style={{float: "left",width: "80%"}}/>
        {this.rightArrow()}
      </div>
    )
  }
})
