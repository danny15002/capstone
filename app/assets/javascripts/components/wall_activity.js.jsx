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
<<<<<<< HEAD
    } else {
      id = LoginStore.user().id
    }
    ApiUtil.request({url: "api/messages/" + id, data: {user_id: id, public: true}, constant: FriendzConstants.MESSAGES_RECEIVED});
=======
    }
    ApiUtil.fetchMessages(true, id);
>>>>>>> 38f886d2d6c348d183e3ee7da574b6c8aef68f94
  },
  componentWillUnmount: function () {
    MessageStore.removeChangeListener(FriendzConstants.MESSAGES_RECEIVED, this.getMessages);
    MessageStore.removeChangeListener(FriendzConstants.COMMENT_CREATED, this.fetchMessages);
    MessageStore.removeChangeListener(FriendzConstants.STATUS_POSTED, this.updatePosts);
  },
  componentWillReceiveProps: function (nextProps) {
<<<<<<< HEAD
    if (nextProps.userId !== undefined) {
      id = parseInt(nextProps.userId);
    } else {
      id = LoginStore.user().id
    }
    console.log(1)
    ApiUtil.request({url: "api/messages/" + id, data: {user_id: id, public: true}, constant: FriendzConstants.MESSAGES_RECEIVED});
=======
    ApiUtil.fetchMessages(true, nextProps.userId);
>>>>>>> 38f886d2d6c348d183e3ee7da574b6c8aef68f94
  },
  updatePosts: function () {
    var id;
    if (this.props.userId !== undefined) {
      id = parseInt(this.props.userId);
<<<<<<< HEAD
    } else {
      id = LoginStore.user().id
    }
    console.log(2)
    ApiUtil.request({url: "api/messages/" + id, data: {user_id: id, public: true}, constant: FriendzConstants.MESSAGES_RECEIVED});

=======
    }
    ApiUtil.fetchMessages(true, id);
>>>>>>> 38f886d2d6c348d183e3ee7da574b6c8aef68f94
  },
  getMessages: function () {
    this.setState({messages: MessageStore.getMessages()})
  },
  fetchMessages: function () {
    var id;
    if (this.props.userId !== undefined) {
      id = parseInt(this.props.userId);
<<<<<<< HEAD
    } else {
      id = LoginStore.user().id
    }
    console.log(3)

    ApiUtil.request({url: "api/messages/" + id, data: {user_id: id, public: true}, constant: FriendzConstants.MESSAGES_RECEIVED});
=======
    }
    ApiUtil.fetchMessages(true, id);
>>>>>>> 38f886d2d6c348d183e3ee7da574b6c8aef68f94
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
