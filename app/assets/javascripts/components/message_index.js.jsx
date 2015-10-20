var MessageIndex = React.createClass( {
  getInitialState: function () {
    return {messages: [], formStyle: "none" }
  },
  componentDidMount: function () {
    var id;
    MessageStore.addChangeListener(FriendzConstants.MESSAGES_RECEIVED, this.getMessages);
    if (this.props.userId !== undefined) {
      id = parseInt(this.props.userId);
    }
    ApiUtil.fetchMessages(true, id);
  },
  componentWillUnmount: function () {
    MessageStore.removeChangeListener(FriendzConstants.MESSAGES_RECEIVED, this.getMessages);
  },
  getMessages: function () {
    this.setState({messages: MessageStore.getMessages()})
  },

  render: function () {
    return (
      <div className={"message-index"}>
        <div className={"nf-status-form"}>
          <PostStatusForm />
        </div>
        <ul>
          {this.state.messages.map( function (message) {
            var comments = <ul></ul>
            if (message.comments !== undefined) {
              comments = (
                <ul>
                  {message.comments.map(function (comment) {
                    return (
                      <li key={comment.id}>
                        <Comment
                          value={comment.body}
                          className={"post-comment"}/>
                      </li>
                    )
                  })}
                </ul>
              )
            }
            return (
              <li key={message.id} className={"message"}>
                <div>
                  <div className={"msg-sender"}>
                    {message.sender_name + " -> " + message.recipient_name}
                  </div>
                  <div className={"msg-created"}>{message.created_at}</div>
                </div>
                <br></br>
                <br></br>
                <p className={"msg-body"}>{message.body}</p>
                <div>likes</div>
                <CommentForm/>
                {comments}
              </li>
            )
          }.bind(this))}
        </ul>
      </div>
    )
  }
})
