var WallActivity = React.createClass( {
  getInitialState: function () {
    return {messages: []}
  },
  componentDidMount: function () {
    MessageStore.addChangeListener(FriendzConstants.MESSAGES_RECEIVED, this.getMessages);
    MessageStore.addChangeListener(FriendzConstants.COMMENT_CREATED, this.fetchMessages);
    MessageStore.addChangeListener(FriendzConstants.STATUS_POSTED, this.updatePosts);
    var id;
    if (this.props.userId !== undefined) {
      id = parseInt(this.props.userId);
    }
    ApiUtil.fetchMessages(true, id);
  },
  componentWillUnmount: function () {
    MessageStore.removeChangeListener(FriendzConstants.MESSAGES_RECEIVED, this.getMessages);
    MessageStore.removeChangeListener(FriendzConstants.COMMENT_CREATED, this.fetchMessages);
    MessageStore.removeChangeListener(FriendzConstants.STATUS_POSTED, this.updatePosts);
  },
  componentWillReceiveProps: function (nextProps) {
    ApiUtil.fetchMessages(true, nextProps.userId);
  },
  updatePosts: function () {
    var id;
    if (this.props.userId !== undefined) {
      id = parseInt(this.props.userId);
    }
    ApiUtil.fetchMessages(true, id);
  },
  getMessages: function () {
    this.setState({messages: MessageStore.getMessages()})
  },
  fetchMessages: function () {
    var id;
    if (this.props.userId !== undefined) {
      id = parseInt(this.props.userId);
    }
    ApiUtil.fetchMessages(true, id);
  },
  render: function () {
    return (
      <div className="friend-activity">
        <ul>
          {this.state.messages.map(function (message, idx) {
            return (<li>
              <Comment className={""} key={idx} message={message} level={1}/>
            </li>)
          })}
        </ul>
      </div>
    )
  }
});
