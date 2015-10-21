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
    UserStore.addChangeListener(FriendzConstants.PICTURE_UPLOADED, this.updatePictures);
    MessageStore.addChangeListener(FriendzConstants.STATUS_POSTED, this.updatePictures);
    ApiUtil.fetchPictures(this.props.params.userId);
  },
  componentWillUnmount: function () {
    UserStore.removeChangeListener(FriendzConstants.PICTURES_RECEIVED, this.getPictures);
    UserStore.removeChangeListener(FriendzConstants.PICTURE_UPLOADED, this.updatePictures);
    MessageStore.removeChangeListener(FriendzConstants.STATUS_POSTED, this.updatePictures);
  },
  getPictures: function () {
    this.setState({pictures: UserStore.getPictures()})
  },
  updatePictures: function () {
    ApiUtil.fetchPictures();
  },
  upload: function(event) {
    cloudinary.openUploadWidget({ cloud_name: 'danny15002', upload_preset: 'dflg7sxq'},
      function(error, result) {
        console.log(result);
        this.setState({picUrl: result[0].secure_url});
      }.bind(this));
  },
  submitForm: function () {
    var picture = {
      user_id: LoginStore.user().id,
      pic_url: this.state.picUrl
    };
    ApiUtil.uploadPicture(picture);
  },
  render: function () {
    var source;
    var picture;
    var comments = [];
    var id;
    if (this.state.pictures.length === 0) {
      source = "";
      id = "";
    } else {
      picture = this.state.pictures[this.state.currentPicIdx]
      source = picture.pic_url
      comments = picture.comments;
      id = picture.id;
    }

    return (
      <div className={"pic-viewer"}>
        {this.leftArrow()}
        <div className={"pic-container"}>
          <img className={"picture"}
            src={source}
            alt={"profile picture"}/>
        </div>
        {this.rightArrow()}
        <a onClick={this.upload} id="upload_widget_opener">Upload multiple images</a>
        <button onClick={this.submitForm}>Upload Photo(s)</button>
        <ul>
          {comments.map(function (comment) {
              return (<li>
                <Comment key={comment.id} message={comment} level={2}/>
              </li>)
          })}
        </ul>
        <CommentForm id={id} commentableType={"Picture"} />

      </div>
    )
  }
})
