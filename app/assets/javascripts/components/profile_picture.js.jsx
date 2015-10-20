var ProfilePicture = React.createClass({
  getInitialState: function () {
    var source = "";
    if (this.props.source) {
      source = this.props.source
    }
    return {source: source}
  },
  componentDidMount: function () {
  },
  render: function () {
    return (
      <img className={"prof-pic"}
        src={this.state.source}
        alt={"profile picture"}
        style={{height: "50px", width: "50px"}}/>
    )
  }
})
