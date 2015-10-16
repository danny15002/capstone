
var Login = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],
  statics: {willTransitionTo: function (nextState, replaceState) {
    if (LoginStore.isLoggedIn()) {
      replaceState({ nextPathname: nextState.location.pathname }, '/');
    }
  }},
  getInitialState: function () {
    return {username: "", password: "", errors: ""};
  },
  componentDidMount: function () {
    LoginStore.addChangeListener(FriendzConstants.LOGIN_USER, this.transitionUser);
    LoginStore.addChangeListener(FriendzConstants.FAILED_LOGIN, this.handleError);
  },
  componentWillUnmount: function () {
    LoginStore.removeChangeListener(FriendzConstants.LOGIN_USER, this.transitionUser);
    LoginStore.removeChangeListener(FriendzConstants.FAILED_LOGIN, this.handleError);
  },
  transitionUser: function () {
    this.history.pushState(null, "/");
  },
  handleError: function () {
    this.setState({errors: LoginStore.getError()});
  },
  login: function (event) {
    event.preventDefault();
    ApiUtil.login(this.state.username, this.state.password);
  },
  render() {
    return (
      <div className={"credentials-form"} >
        <h1> Friendz! </h1>
        <h4> Go ahead and log in! </h4>
        <h4> {this.state.errors} </h4>
        <form role={"form"} className={"form-group"}>
        <div className="input-group input-group-md" >
          <input type="text" className={"form-control"} valueLink={this.linkState('username')} placeholder={"Username"} />
          <input type="password" className={"form-control"} valueLink={this.linkState('password')} placeholder={"Password"} />
          <button type="submit" className={"form-control"} onClick={this.login}>Submit</button>
        </div>
      </form>
    </div>
    );
  }

});
