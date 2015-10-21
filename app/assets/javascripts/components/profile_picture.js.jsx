var ProfilePicture = React.createClass({

  render: function () {
    return (
      <img className={"prof-pic"}
        src={this.props.source}
        alt={"profile picture"}
        style={{height: "50px", width: "50px"}}/>
    )
  }
})
