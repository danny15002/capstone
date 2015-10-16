var LeftBar = React.createClass ({
  mixins: [ReactRouter.History],

  handleClick: function (event) {
    var selected = $(event.target).context.innerText;
    switch(selected) {
      case "Messages":
        this.history.pushState(null, "/" + selected)
        $(event.target).addClass("selected");
        break;
      case "Events":
        this.history.pushState(null, "/" + selected)
        break;
      case "Pictures":
        this.history.pushState(null, "/" + selected)
        break;
      case "Location":
        this.history.pushState(null, "/" + selected)
        break;
      default:
        break;
    }
  },

  render: function () {
    return (
      <div onClick={this.handleClick} className={"bar left-bar"}>
        <div selected={false} className={"nav nav-messages"}><div>Messages</div></div>
        <div selected={false} className={"nav nav-events"}><div>Events</div></div>
        <div selected={false} className={"nav nav-pictures"}><div>Pictures</div></div>
        <div selected={false} className={"nav nav-location"}><div>Location</div></div>
      </div>
    )
  }
})

var RightBar = React.createClass ({
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
    var selected = $(event.target).context.innerText;
    switch(selected) {
      case "Home":
        this.history.pushState(null, "/");
        break;
      case "Events":
        this.history.pushState(null, "/" + selected);
        break;
      case "Pictures":
        this.history.pushState(null, "/" + selected);
        break;
      case "Location":
        this.history.pushState(null, "/" + selected);
        break;
      case "Logout":
        ApiUtil.logout();
        break;
      default:
        break;
    }
  },

  render: function () {
    return (
      <div onClick={this.handleClick} className={"bar right-bar"}>
        <div selected={false} className={"nav nav-messages"}><div>Home</div></div>
        <div selected={false} className={"nav nav-events"}><div>Profile</div></div>
        <div selected={false} className={"nav nav-pictures"}><div>Account</div></div>
        <div selected={false} className={"nav nav-location"}><div>Share Location</div></div>
        <div selected={false} className={"nav nav-location"}><div>Logout</div></div>
      </div>
    )
  }
})
