var Comment = React.createClass({
  subComments: function (comments) {
    return <SubCommentList comments={comments} />
  },
  render: function () {
    var message = this.props.message;
    var subComments=<div></div>;
    if (message.comments) {
      if (message.comments.length > 0) {
        subComments = this.subComments(message.comments);
      }
    }

    return (
      <div className={this.props.className + " comment"}>
        {message.body}
        {subComments}
      </div>
    )
  }
});
