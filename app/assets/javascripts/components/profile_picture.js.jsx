var ProfilePicture = React.createClass({

  render: function () {
    return (
      <img className={"prof-pic"}
        src={this.props.source}
        alt={"profile picture"}
<<<<<<< HEAD
        style={this.props.style}/>
=======
        style={{height: "50px", width: "50px"}}/>
>>>>>>> 38f886d2d6c348d183e3ee7da574b6c8aef68f94
    )
  }
})
