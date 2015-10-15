var Dashboard = React.createClass({
  getInitialState: function () {
    return {currentUser: ""};
  },
  componentDidMount: function () {
    LoginStore.addChangeListener(FriendzConstants.CURRENT_USER_RECEIVED, this.getUser);
    ApiUtil.fetchCurrentUser();
  },
  componentWillUnmount: function () {
    LoginStore.removeChangeListener(FriendzConstants.CURRENT_USER_RECEIVED, this.getUser);

  },
  getUser: function (user) {
    this.setState({currentUser: UserStore.currentUser()})
  },
  render: function () {
    return (
      <div className={"dashboard"}>
        <MessageIndex/>
      </div>
    )
  }
});
