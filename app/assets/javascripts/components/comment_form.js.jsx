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
  submitForm: function () {

  },
  render: function () {
    return(
      <div>
        <div onClick={this.showForm}>{this.state.subText}</div>
        <div style={{display: this.state.formStyle}}>
          <textarea placeholder={"Leave a comment."}/>
          <button className={"comment-button"} onClick={this.submitForm}>Submit Comment</button>
        </div>
      </div>
    )
  }
});
