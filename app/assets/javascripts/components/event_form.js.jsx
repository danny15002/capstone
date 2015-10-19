var EventForm = React.createClass( {
  getInitialState: function () {
    return {title: "", description: "", date: "", location: "", value: ""}
  },
  componentDidMount: function () {
    EventStore.addChangeListener(FriendzConstants.EVENT_CREATED, this.sendEvent);
    ApiUtil.fetchEvents();
  },
  componentWillUnmount: function () {
    EventStore.removeChangeListener(FriendzConstants.EVENT_CREATED, this.sendEvent);
  },
  sendEvent: function () {
    ApiUtil.fetchEvents();
  },
  handleTitle: function(event) {
    this.setState({title: event.target.value});
  },
  handleDescription: function(event) {
    this.setState({description: event.target.value});
  },
  handleDate: function(event) {
    this.setState({date: event.target.value});
  },
  handleLocation: function(event) {
    this.setState({location: event.target.value});
  },
  submitForm: function() {
    var creator_id = LoginStore.user().id
    var myEvent = {creator_id: creator_id,
                   title: this.state.title,
                   description: this.state.description,
                   date: this.state.date,
                   location: this.state.location};

    ApiUtil.createEvent(myEvent);
    this.setState({title: "", description: "", date: "", location: "", value: ""})
  },

  render: function () {

    return (
      <div className={"message-form event-form"}>
        <h3>Create an Event</h3>
        <br></br>
        <br></br>
        <input type="text"
               value={this.state.title}
               placeholder={"Give your event a snazzy title"}
               onChange={this.handleTitle}/>
             <br></br>
             <br></br>
        <div className={"event-middle"}>
        <input type="date"
               value={this.state.date}
               onChange={this.handleDate}/>
               <br></br>
               <br></br>
        <input type="text"
               placeholder={"Where's it going to be?"}
               value={this.state.location}
               onChange={this.handleLocation}/>
               <br></br>
               <br></br>
        </div>
        <textarea type="text"
                  value={this.state.description}
                  placeholder={"Give an enticing description"}
                  onChange={this.handleDescription}/>
                  <br></br>
                  <br></br>
        <button className={"createEvent"} onClick={this.submitForm}>Create Event</button>
      </div>)
  }
})
