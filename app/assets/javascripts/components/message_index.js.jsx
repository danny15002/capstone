var MessageIndex = React.createClass( {
  getInitialState: function () {
    return {messages: []}
  },
  componentDidMount: function () {
    MessageStore.addChangeListener(FriendzConstants.MESSAGES_RECEIVED, this.getMessages);
    ApiUtil.fetchMessages(true);
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
            return (
              <li key={message.id} className={"message"}>
                <div>
                  <div className={"msg-sender"}>{message.sender_name}</div>
                  <div className={"msg-created"}>{message.created_at}</div>
                </div>
                <br></br>
                <br></br>
                <p className={"msg-body"}>{message.body}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
})
