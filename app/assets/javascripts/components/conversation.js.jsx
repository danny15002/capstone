var Conversation = React.createClass( {
  getInitialState: function () {
    return {messages: []}
  },
  componentDidMount: function () {
    MessageStore.addChangeListener(FriendzConstants.MESSAGES_RECEIVED, this.getMessages);
    var id = this.props.params.userId;
    ApiUtil.fetchMessages(false, id);
  },
  componentWillUnmount: function () {
    MessageStore.removeChangeListener(FriendzConstants.MESSAGES_RECEIVED, this.getMessages);
  },
  componentWillReceiveProps: function (nextProps) {
    var id = parseInt(nextProps.params.userId)
    ApiUtil.fetchMessages(false, id);
  },
  getMessages: function () {
    this.setState({messages: MessageStore.getMessages()})
  },
  render: function () {
    if (MessageStore.getMessages().length === 0) {
      return (
        <div className={"conversation"}>
          <div> No messages here. Why dont you send a Message!</div>
        </div>
      )
    }
    return (
      <div className={"conversation"}>
        <ul>
          {this.state.messages.map( function (message, idx) {
            return (
              <li key={message.id} className={"message"}>
                <div>
                  <div className={"msg-sender"}>Sent By: {message.author}</div>
                  <div className={"msg-created"}>{message.created_at}</div>
                </div>
                <br></br>
                <div className={"msg-sender"}>Sent To: {message.recipient}</div>
                <br></br>
                <br></br>
                <p className={"msg-body"}>{message.body}</p>
              </li>
            )
          }.bind(this))}
        </ul>
      </div>
    )
  }
})
