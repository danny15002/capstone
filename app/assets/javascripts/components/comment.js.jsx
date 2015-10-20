var Comment = React.createClass({
  subComments: function (comments, key) {
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
          {message.author} -> {message.recipient}
        </div>
      );
    }

    return heading;
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

    return (
      <div className={this.props.className + " comment"}>
        <div className={"heading"}>
          <ProfilePicture source={message.prof_pic}/>
          {this.heading(message)}
          <div className={"time"}>{message.created_at}</div>
          <br></br>
          <div className={"comment-body"}>
            {message.body}
          </div>
        </div>
        {subComments}
        {form}
      </div>
    )
  }
});
