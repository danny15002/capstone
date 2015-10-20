var NewsFeed = React.createClass( {
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
      <div className="news-feed">
        <PostStatusForm className={""}/>
      </div>
    )
  }
})
