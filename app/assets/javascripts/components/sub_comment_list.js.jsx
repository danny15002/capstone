var SubCommentList = React.createClass({
  getInitialState: function () {
    return {formStyle: "none" }
  },
  showSubComments: function () {
    if (this.state.formStyle === "none") {
      this.setState({formStyle: ""});
    } else {
      this.setState({formStyle: "none"});
    }
  },
  render: function () {
    return(
      <div>
        <div onClick={this.showSubComments}>view replies</div>
          <ul style={{display: this.state.formStyle}}>
            {this.props.comments.map(function (comment, idx) {
              return (<li>
                <Comment className={""} key={idx} message={comment}/>
              </li>)
            })}
          </ul>
      </div>
    )
  }
})
