var MessageIndex = React.createClass( {

  getInitialState: function () {
    return {messages: {}}
  },
  componentDidMount: function () {
    UserStore.addChangeListener(FriendzConstants.MESSAGES_RECEIVED, this.getUser);
    ApiUtil.fetchMessages();
  },
  getMessages: function () {
    this.setState({messages: MessageStore.getMessages()})
  },
  render: function () {
    return (
      <div classname={"message-index"}>

      </div>
    )
  }
})
