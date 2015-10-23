var LeftBar = React.createClass ({
  mixins: [ReactRouter.History],

<<<<<<< HEAD
  render: function () {
    return (
      <div className={"bar left-bar"}>
        <a href={"#/Messages"}>
          <div className={"nav nav-messages"}>
            <span className={"glyphicon glyphicon-envelope"}></span> Messages
          </div>
        </a>
        <a href={"#/Events"}>
          <div className={"nav nav-events"}>
            <span className={"glyphicon glyphicon-calendar"}></span> Events
          </div>
        </a>
        <a href={"#/Pictures"}>
          <div className={"nav nav-pictures"}>
            <span className={"glyphicon glyphicon-picture"}></span> Pictures
          </div>
        </a>
        <a href={"#/Locations"}>
          <div className={"nav nav-locations"}>
            <span className={"glyphicon glyphicon-globe"}></span> Locations
          </div>
        </a>
        <a href={"#/Requests"}>
          <div className={"nav nav-requests"}>
            <span className={"glyphicon glyphicon-user"}></span> Friend Requests
          </div>
        </a>
        <a href={"#/Notifications"}>
          <div className={"nav nav-notifications"}>
            <span className={"glyphicon glyphicon-flag"}></span> Notifications
          </div>
        </a>
=======
  handleClick: function (event) {
    var selected = $(event.target).context.innerText;
    console.log(selected)
    var i = 0;
    switch(selected) {
      case "Messages":
        this.history.pushState(null, "/" + selected)
        break;
      case "Events":
        this.history.pushState(null, "/" + "Events")
        break;
      case "Pictures":
        this.history.pushState(null, "/" + selected)
        break;
      case "Locations":
        this.history.pushState(null, "/" + selected)
        break;
      default:
        break;
    }
  },

  render: function () {
    return (
      <div onClick={this.handleClick} className={"bar left-bar"}>
        <div className={"nav nav-messages"}><span className={"glyphicon glyphicon-message"}></span>Messages</div>
        <div className={"nav nav-events"}>Events</div>
        <div className={"nav nav-pictures"}>Pictures</div>
        <div className={"nav nav-locations"}>Locations</div>
>>>>>>> 38f886d2d6c348d183e3ee7da574b6c8aef68f94
      </div>
    )
  }
})

var TopBar = React.createClass ({
  mixins: [ReactRouter.History],
  componentDidMount: function () {
    LoginStore.addChangeListener(FriendzConstants.LOGOUT, this.logoutUser);
  },
  componentWillUnmount: function () {
<<<<<<< HEAD
    LoginStore.removeChangeListener(friendzDispatcher.LOGOUT, this.logoutUser);
=======
    // LoginStore.removeChangeListener(friendzDispatcher.LOGOUT, this.logout);
>>>>>>> 38f886d2d6c348d183e3ee7da574b6c8aef68f94
  },
  logoutUser: function () {
    this.history.pushState(null, "/login")
  },
  handleClick: function (event) {
    ApiUtil.logout();
  },

  render: function () {
    return (
      <div className={"top-excess"}>
        <div className={"bar top-bar"}>
          <OmniSearch />
          <a href={"#/"} className={"nav-messages"}>Home</a>
          <a href={"#/Profile"} className={"nav-events"}>Profile</a>
<<<<<<< HEAD
          
=======
          <a href={"#/Requests"} className={"nav-events"}>Requests</a>
          <a href={"#/Notifications"} className={"nav-events"}>Notifications</a>
>>>>>>> 38f886d2d6c348d183e3ee7da574b6c8aef68f94
          <a href={"#/Account"} className={"nav-pictures"}>Account</a>
          <a onClick={this.handleClick} className={"nav-location"}>Logout</a>
        </div>
      </div>
    )
  }
})
