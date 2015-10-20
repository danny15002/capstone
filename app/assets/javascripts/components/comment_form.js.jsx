var CommentForm = React.createClass({
  getInitialState: function () {
    return {formStyle: "none" }
  },
  componentWillReceiveProps: function (nextProps) {
  },
  showForm: function () {
    if (this.state.formStyle === "none") {
      this.setState({formStyle: ""});
    } else {
      this.setState({formStyle: "none"});
    }
  },
  render: function () {
    return(
      <div>
        <div onClick={this.showForm}>add comment</div>
        <textarea style={{display: this.state.formStyle}} placeholder={"Leave a comment."}>

        </textarea>
      </div>
    )
  }
});
