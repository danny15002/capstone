
var Login = React.createClass({
  getInitialState: function () {
    return {username: "", password: ""};
  },
  componentDidMount: function () {
    UserStore.addChangeListener(FriendzConstants.LOGIN_USER, this.transitionUser);
  },
  componentWillUnmount: function () {
    UserStore.removeChangeListener(FriendzConstants.LOGIN_USER, this.transitionUser);
  },
  transitionUser: function () {
    RouterContainer.get().transitionTo("/");
  },
  login: function (event) {
    event.preventDefault();
    ApiUtil.login(this.state.username, this.state.password)
      .catch(function(err) {
        alert("Error logging in.", err);
      });
  },
  render() {
    return (
      <div>
        <form role={"form"}>
        <div className="form-group">
          <input type="text" valueLink={this.linkState('user')}placeholder={"Username"} />
          <input type="password" valueLink={this.linkState('password')} placeholder={"Password"} />
        </div>
        <button type="submit" onClick={this.login.bind(this)}>Submit</button>
      </form>
    </div>
    );
  }

});
