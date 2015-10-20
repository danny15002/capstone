var Comment = React.createClass({

  render: function () {
    return (
      <div className={this.props.className + " comment"}>
        {this.props.value}
      </div>
    )
  }
});
