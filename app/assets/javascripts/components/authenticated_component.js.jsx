var AuthenticatedComponent = React.createClass({
  mixins: [ ReactRouter.History ],
  getInitialState: function () {
    return({userLoggedIn: LoginStore.isLoggedIn(),
           user: LoginStore.user(),
           jwt: LoginStore.jwt()});
  },
  componentWillMount: function () {
    console.log("transisiton");
    if (!LoginStore.isLoggedIn()) {
        this.history.pushState(null,"login")
      }
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
    debugger
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
