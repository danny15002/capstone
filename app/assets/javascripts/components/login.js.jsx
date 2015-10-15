
var Login = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],
  getInitialState: function () {
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
        <form role={"form"}>
        <div className="form-group">
          <input type="text" valueLink={this.linkState('username')} placeholder={"Username"} />
          <input type="password" valueLink={this.linkState('password')} placeholder={"Password"} />
        </div>
        <button type="submit" onClick={this.login}>Submit</button>
      </form>
    </div>
    );
  }

});
