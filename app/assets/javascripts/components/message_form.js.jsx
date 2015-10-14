var MessageForm = React.createClass( {
  getInitialState: function () {
    return {recipientId: undefined}
  },
  componentDidMount: function () {
    var userId = parseInt(this.props.params.userId)
    this.setState({recipientId: userId});
  },
  componentWillReceiveProps: function (nextProps) {
    var userId = parseInt(nextProps.params.userId)
    this.setState({recipientId: userId});
  },

  render: function () {
    if (this.state.recipientId === undefined) {
      return <div></div>
    }

    return (
      <div className={"message-form"}>
        <Conversation params={this.props.params}/>
        Message for: {UserStore.getFriendById(this.state.recipientId).name}
        <textarea className={"message-text"}></textarea>
      </div>)
  }
})
