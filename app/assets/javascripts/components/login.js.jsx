
var Login = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],
  statics: {willTransitionTo: function (nextState, replaceState) {
    if (LoginStore.isLoggedIn()) {
      replaceState({ nextPathname: nextState.location.pathname }, '/')
    }
  }},
  getInitialState: function () {
    console.log(localStorage);
    return {username: "", password: ""};
  },
  componentDidMount: function () {
    LoginStore.addChangeListener(FriendzConstants.LOGIN_USER, this.transitionUser);
  },
  componentWillUnmount: function () {
    LoginStore.removeChangeListener(FriendzConstants.LOGIN_USER, this.transitionUser);
  },
  transitionUser: function () {
    this.history.pushState(null, "/")
  },
  login: function (event) {
    event.preventDefault();
    ApiUtil.login(this.state.username, this.state.password)
  },
  render() {
    return (
      <div>
        <form role={"form"} className={"form-group"}>
        <div className="input-group input-group-md">
          <input type="text" className={"form-control"} valueLink={this.linkState('username')} placeholder={"Username"} />
          <input type="password" className={"form-control"} valueLink={this.linkState('password')} placeholder={"Password"} />
        </div>
        <button type="submit" onClick={this.login}>Submit</button>
      </form>
    </div>
    );
  }

});
