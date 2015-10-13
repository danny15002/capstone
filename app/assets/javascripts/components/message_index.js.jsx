var MessageIndex = React.createClass( {

  getInitialState: function () {
    return {messages: []}
  },
  componentDidMount: function () {
    MessageStore.addChangeListener(FriendzConstants.MESSAGES_RECEIVED, this.getMessages);
    ApiUtil.fetchMessages();
  },
  getMessages: function () {
    this.setState({messages: MessageStore.getMessages()})
  },
  render: function () {
    return (
      <div className={"message-index"}>
        <ul>
          {this.state.messages.map( function (message) {
            console.log(message);
            return (
              <Message key={message.id}>
                <p>{message.from_id} {message.created_at}</p>
                <p>{message.body}</p>
              </Message>)
          })}

        </ul>
      </div>
    )
  }
})
