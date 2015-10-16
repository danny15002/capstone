var Event = React.createClass({
  getInitialState: function () {
    displayEvent = {title: "", description: "", date: "", location: ""}
    return {displayEvent: displayEvent}
  },
  componentDidMount: function () {
    this.setState({displayEvent: EventStore.findById(parseInt(this.props.params.eventId))});
  },
  componentWillReceiveProps: function (nextProps) {
    this.setState({displayEvent: EventStore.findById(parseInt(nextProps.params.eventId))});
  },
  render: function () {
    return (
      <div>
        <h2> {this.state.displayEvent.title} </h2>
        <h3> Hosted by: {this.state.displayEvent.creator}</h3>
        <p> {this.state.displayEvent.date}</p>
        <p> {this.state.displayEvent.location}</p>
        <p> {this.state.displayEvent.description}</p>
      </div>
    )
  }
})
