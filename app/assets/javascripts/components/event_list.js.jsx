var EventList = React.createClass({
  getInitialState: function () {
    return {myEvents: EventStore.myEvents()}
  },
  componentDidMount: function () {
    EventStore.addChangeListener(FriendzConstants.EVENTS_RECEIVED, this.getEvents);
    ApiUtil.fetchEvents();
  },
  componentWillUnmount: function () {
    EventStore.removeChangeListener(FriendzConstants.EVENTS_RECEIVED, this.getEvents);
  },
  getEvents: function () {
    this.setState({myEvents: EventStore.myEvents()})
  },
  mixins: [ReactRouter.History],

  handleClick: function (event) {
    var selected = $(event.target).context.id;
    this.history.pushState(null,"Events/"+ selected)
  },

  render: function () {
    return (
      <div>
        <div onClick={this.handleClick} className="bar user-list">
          <div id={"new"} className={"nav nav-friend"}>Create Event</div>
          {this.state.myEvents.map(function (event){
            return (
              <div id={event.id} key={event.id} selected={false} className={"nav nav-friend"}>
                {event.title}
              </div>
            )
          })}

        </div>
        {this.props.children || <div>Welcome to Your Events</div>}
      </div>
    );
  }
});
