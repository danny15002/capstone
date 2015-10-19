var PictureCommentForm = React.createClass ({
  getInitialState: function () {
    return {value: undefined}
  },
  componentDidMount: function () {
    MessageStore.addChangeListener(FriendzConstants.STATUS_POSTED, this.updatePosts);
  },
  componentWillUnmount: function () {
    MessageStore.removeChangeListener(FriendzConstants.STATUS_POSTED, this.updatePosts);
  },
  componentWillReceiveProps(nextProps) {
    this.props.className += nextProps.className
  },
  updatePosts: function () {
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
    ApiUtil.createMessage(message, FriendzConstants.STATUS_POSTED);
    this.setState({value: ""})
  },

  render: function () {
    var value = this.state.value

    return (
      <div className={this.props.className + " status-form"}>
        <textarea
          onChange={this.handleChange}
          className={"status-text"}
          placeholder={"Tell me how much you love my photo."}
          value={value}>
        </textarea>
        <br></br>
        <br></br>
        <button className={"status-button"} onClick={this.submitForm}>Post Comment</button>
      </div>)
  }
})
