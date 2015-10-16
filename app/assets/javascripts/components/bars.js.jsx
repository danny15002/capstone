var LeftBar = React.createClass ({
  mixins: [ReactRouter.History],

  handleClick: function (event) {
    var selected = $(event.target).context.innerText;
    var i = 0;
    switch(selected) {
      case "Messages":
        this.history.pushState(null, "/" + selected)
        break;
      case "Events":
        this.history.pushState(null, "/" + selected)
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
        <div className={"nav nav-messages"}>Messages</div>
        <div className={"nav nav-events"}>Events</div>
        <div className={"nav nav-pictures"}>Pictures</div>
        <div className={"nav nav-locations"}>Locations</div>
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
    // LoginStore.removeChangeListener(friendzDispatcher.LOGOUT, this.logout);
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
          <input type={"text"} className={"nav-search"} placeholder={"Find a Friend"}/>
          <a href={"#/"} className={"nav-messages"}>Home</a>
          <a href={"#/Profile"} className={"nav-events"}>Profile</a>
          <a href={"#/Account"} className={"nav-pictures"}>Account</a>
          <a onClick={this.handleClick} className={"nav-location"}>Logout</a>
        </div>
      </div>
    )
  }
})
