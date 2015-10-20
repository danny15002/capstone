var SubCommentList = React.createClass({
  getInitialState: function () {

    return {formStyle: "none",subText: "view replies" }
  },
  showSubComments: function () {
    if (this.state.formStyle === "none") {
      this.setState({formStyle: "", subText: "hide replies"});
    } else {
      this.setState({formStyle: "none", subText: "view replies"});
    }
  },
  render: function () {
    return(
      <div>
        <div onClick={this.showSubComments}>{this.state.subText}</div>
          <ul style={{display: this.state.formStyle}}>
            {this.props.comments.map(function (comment, idx) {
              return (<li>
                <Comment className={""} key={idx} message={comment} level={this.props.level}/>
              </li>)
            }.bind(this))}
          </ul>

      </div>
    )
  }
})
