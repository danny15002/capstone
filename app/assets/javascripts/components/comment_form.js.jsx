var CommentForm = React.createClass({
  getInitialState: function () {
    return {formStyle: "none", subText: "add comment" }
  },
  componentWillReceiveProps: function (nextProps) {
  },
  showForm: function () {
    if (this.state.formStyle === "none") {
      this.setState({formStyle: "",subText: "hide comment box"});
    } else {
      this.setState({formStyle: "none", subText: "add comment"});
    }
  },
  handleChange: function (event) {
    this.setState({value: event.target.value})
  },
  submitForm: function () {
    var comment = {
      body: this.state.value,
      commentable_id: this.props.id,
      commentable_type: this.props.commentableType,
      user_id: LoginStore.user().id
    };
    ApiUtil.create({url: "api/comments",
                    data: {comment: comment},
                    constant: FriendzConstants.STATUS_POSTED})
    this.setState({value: ""})
  },
  render: function () {
    return(
      <div>
        <div onClick={this.showForm}>{this.state.subText}</div>
        <div style={{display: this.state.formStyle}}>
          <textarea placeholder={"Leave a comment."} onChange={this.handleChange} value={this.state.value}/>
          <button className={"comment-button"} onClick={this.submitForm}>Submit</button>
        </div>
      </div>
    )
  }
});
