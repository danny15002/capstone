var Comment = React.createClass({
  subComments: function (comments, key) {
    return <SubCommentList key={key} comments={comments} level={this.props.level + 1} />
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
        {message.body}
        {subComments}
        {form}
      </div>
    )
  }
});
