var FriendActivity = React.createClass( {
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
      <div className="friend-activity">
        <ul>
          {this.state.messages.map(function (message, idx) {
            return (<li>
              <Comment className={""} key={idx} message={message}/>
            </li>)
          })}
        </ul>
      </div>
    )
  }
})
