var LeftBar = React.createClass ({
  mixins: [ReactRouter.History],

  handleClick: function (event) {
    var selected = $(event.target).context.innerText;
    console.log($(event.target))
    var i = 0;
    switch(selected) {
      case "Messages":
        this.history.pushState(null, "/" + selected)
        for (i = 0; i < 4; i ++ ) {
          $($(event.currentTarget).children()[i]).addClass("nav")
          $($(event.currentTarget).children()[i]).removeClass("selected")
        }
        $(event.target).addClass("selected");
        break;
      case "Events":
        this.history.pushState(null, "/" + selected)
        for (i = 0; i < 4; i ++ ) {
          $($(event.currentTarget).children()[i]).addClass("nav")
          $($(event.currentTarget).children()[i]).removeClass("selected")
        }
        $(event.target).addClass("selected");
        break;
      case "Pictures":
        this.history.pushState(null, "/" + selected)
        for (i = 0; i < 4; i ++ ) {
          $($(event.currentTarget).children()[i]).addClass("nav")
          $($(event.currentTarget).children()[i]).removeClass("selected")
        }
        $(event.target).addClass("selected");
        break;
      case "Location":
        this.history.pushState(null, "/" + selected)
        for (i = 0; i < 4; i ++ ) {
          $($(event.currentTarget).children()[i]).addClass("nav")
          $($(event.currentTarget).children()[i]).removeClass("selected")
        }
        $(event.target).addClass("selected");
        $(event.target).addClass("selected");
        break;
      default:
        for (i = 0; i < 4; i ++ ) {
          $($(event.currentTarget).children()[i]).addClass("nav")
          $($(event.currentTarget).children()[i]).removeClass("selected")
        }
        break;
    }
  },

  render: function () {
    return (
      <div onClick={this.handleClick} className={"bar left-bar"}>
        <div className={"nav nav-messages"}>Messages</div>
        <div className={"nav nav-events"}>Events</div>
        <div className={"nav nav-pictures"}>Pictures</div>
        <div className={"nav nav-location"}>Location</div>
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
        <div className={"nav nav-messages"}><div>Home</div></div>
        <div className={"nav nav-events"}><div>Profile</div></div>
        <div className={"nav nav-pictures"}><div>Account</div></div>
        <div className={"nav nav-location"}><div>Share Location</div></div>
        <div className={"nav nav-location"}><div>Logout</div></div>
      </div>
    )
  }
})
