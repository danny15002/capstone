var PostStatusForm = React.createClass ({
  getInitialState: function () {
    return {value: undefined}
  },
  componentDidMount: function () {
    MessageStore.addChangeListener(FriendzConstants.MESSAGE_SENT, this.updatePosts);
  },
  componentWillUnmount: function () {
    MessageStore.removeChangeListener(FriendzConstants.MESSAGE_SENT, this.updatePosts);
  },
  updatePosts: function () {
    console.log("fetchingMessages")
    ApiUtil.fetchMessages(true);
  },
  handleChange: function(event) {
    // TODO handle at back end, reject empty string.
    this.setState({value: event.target.value});
  },
  submitForm: function() {
    var id = LoginStore.user().id
    var message = {to_id: id,
                 from_id: id,
                 body: this.state.value,
                 public: true};
    ApiUtil.createMessage(message);
    this.setState({value: ""})
  },

  render: function () {
    var value = this.state.value

    return (
      <div className={"status-form"}>
        <textarea
          onChange={this.handleChange}
          className={"status-text"}
          placeholder={"Let your friends know what's up."}
          value={value}>
        </textarea>
        <br></br>
        <br></br>
        <button className={"status-button"} onClick={this.submitForm}>Post Status</button>
      </div>)
  }
})
