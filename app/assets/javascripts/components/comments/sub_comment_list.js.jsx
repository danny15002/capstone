var SubCommentList = React.createClass({
  render: function () {
    var replyFunction = "";
    if (this.props.replyFunction) {
      replyFunction = this.props.replyFunction
    }
    return(
      <div className={"comment-list"}>
          <ul>
            {this.props.comments.map(function (comment, idx) {
              return (<li>
                <Comment
                  className={""}
                  key={idx}
                  message={comment}
                  level={this.props.level}
                  replyFunction={replyFunction}
                  />
              </li>)
            }.bind(this))}
          </ul>
      </div>
    )
  }
})
