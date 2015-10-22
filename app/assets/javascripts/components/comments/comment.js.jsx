var Comment = React.createClass({
  getInitialState: function () {
    this.formText = "Reply"
    this.subText = "View Replies"
    return {formStyle: "none", subStyle: "none"}
  },
  subComments: function (comments, key) {
    if (this.props.level === 2) {

      return (
       <SubCommentList
        key={key}
        comments={comments}
        level={this.props.level + 1}
        replyFunction={this.handleReply}
        />
      )
    }
    return <SubCommentList key={key} comments={comments} level={this.props.level + 1} />
  },
  heading: function (message) {
    var heading = (
      <div className={"author"}>
        {message.author}
      </div>
    );

    if (message.recipient && (message.recipient !== message.author)) {
      heading = (
        <div className={"author"}>
          {message.author} <span style={{color: "red"}} className={"glyphicon glyphicon-triangle-right"}></span> {message.recipient}
        </div>
      );
    }

    return heading;
  },
  handleLike: function () {

  },

  handleReply: function () {
    if (this.state.formStyle === "none") {
      this.setState({formStyle: "" })
    }
    if (this.state.formStyle === "") {
      this.setState({formStyle: "none" })

    }
  },

  handleViewReplies: function () {
    if (this.state.subStyle === "none") {
      this.setState({subStyle:""})
      this.subText = "Hide Replies"
    }
    if (this.state.subStyle === "") {
      this.setState({subStyle: "none"})
      this.subText = "View Replies"
    }
  },

  commentMenu: function () {
    if (this.props.level <=2 ) {
      return (
        <div className={"comment-menu"}>
          <div onClick={this.handleLike} style={{paddingRight: "5px"}}>
            <span className={"glyphicon glyphicon-thumbs-up"}></span> Like
          </div>
          <div onClick={this.handleReply} style={{paddingRight: "5px"}}>
            {this.formText}
          </div>
          <div onClick={this.handleViewReplies}>
            {this.subText}
          </div>
        </div>
      )
    }

    return (
      <div className={"comment-menu"}>
        <div onClick={this.handleLike} style={{paddingRight: "5px"}}>
          <span className={"glyphicon glyphicon-thumbs-up"}></span> Like
        </div>
        <div onClick={this.props.replyFunction} style={{paddingRight: "5px"}}>
          {this.formText}
        </div>
      </div>
    )


  },

  render: function () {
    var message = this.props.message;
    var subComments=<div></div>;
    if (message.comments) {
      if (message.comments.length > 0) {
        subComments = this.subComments(message.comments, message.id);
      }
    }
    var form = <div></div>;
    if (this.props.level <= 2) {
      form = <CommentForm id={message.id} commentableType={message.type}/>
    }

    var picsize = 120
    if (this.props.level > 1) {
      picsize = 90;
    }

    return (
      <div className={this.props.className + " comment"}>
        <div className="main-comment">
          <ProfilePicture source={message.prof_pic} style={{height: picsize + "px", width: picsize + "px"}}/>

          <div style={{height: picsize + "px", width: "calc( 100% - " + picsize + "px )"}} className="comment-body">
            <div className={"comment-header"}>
              <div style={{float: "left"}}>{this.heading(message)}</div>
              <div style={{float: "right"}} className={"time"}>{message.created_at}</div>
            </div>
            <div style={{overflowY: "scroll", paddingTop: "5px", height: (picsize - 40) + "px"}}>
              {message.body}
            </div>
            <br></br>

            {this.commentMenu()}

          </div>
        </div>
        <div style={{display: this.state.subStyle}}>
          {subComments}
        </div>
        <div style={{display: this.state.formStyle}}>
          {form}
        </div>
      </div>
    )
  }
});

//
//
