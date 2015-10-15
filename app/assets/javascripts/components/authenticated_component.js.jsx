var AuthenticatedComponent = React.createClass({
  getInitialState: function () {
    return({userLoggedIn: LoginStore.isLoggedIn(),
           user: LoginStore.user(),
           jwt: LoginStore.jwt()});
  },
  componentDidMount: function () {
    LoginStore.addChangeListener(friendzDispatcher.LOGIN_USER, this.onChange);
  },
  onChange: function () {
    this.setState({userLoggedIn: LoginStore.isLoggedIn(),
                   user: LoginStore.user(),
                   jwt: LoginStore.jwt()});
  },
  componentWillUnmount() {
    LoginStore.removeChangeListener(friendzDispatcher.LOGIN_USER, this.onChange);
  },
  render() {
    return (
    <div
      user={this.state.user}
      jwt={this.state.jwt}
      userLoggedIn={this.state.userLoggedIn}>
      rendered
      {this.props.children}
    </div>
    );
  }

})
