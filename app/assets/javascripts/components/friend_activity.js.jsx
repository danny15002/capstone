var FriendActivity = React.createClass( {
  getInitialState: function () {
    return {messages: []}
  },
  componentDidMount: function () {
    MessageStore.addChangeListener(FriendzConstants.MESSAGES_RECEIVED, this.getMessages);
    MessageStore.addChangeListener(FriendzConstants.STATUS_POSTED, this.fetchMessages);
    MessageStore.addChangeListener(FriendzConstants.COMMENT_LIKED, this.fetchMessages);
    MessageStore.addChangeListener(FriendzConstants.COMMENT_UNLIKED, this.fetchMessages);
    request = {url: "api/messages",
               method: "GET",
               data: {public: true},
               constant: FriendzConstants.MESSAGES_RECEIVED};
    ApiUtil.request(request)
  },
  componentWillUnmount: function () {
    MessageStore.removeChangeListener(FriendzConstants.MESSAGES_RECEIVED, this.getMessages);
    MessageStore.removeChangeListener(FriendzConstants.STATUS_POSTED, this.fetchMessages);
    MessageStore.removeChangeListener(FriendzConstants.COMMENT_LIKED, this.fetchMessages);
    MessageStore.removeChangeListener(FriendzConstants.COMMENT_UNLIKED, this.fetchMessages);
  },
  getMessages: function () {
    this.setState({messages: MessageStore.getMessages()})
  },
  fetchMessages: function () {
    request = {url: "api/messages/",
               method: "GET",
               data: {public: true},
               constant: FriendzConstants.MESSAGES_RECEIVED};
    ApiUtil.request(request);
  },

  render: function () {
    return (
      <div className="friend-activity">
        <ul>
          {this.state.messages.map(function (message, idx) {
            return (<li>
              <Comment className={""} key={message.id} message={message} level={1}/>
            </li>)
          })}
        </ul>
      </div>
    )
  }
})
