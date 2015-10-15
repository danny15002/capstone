var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var Redirect = ReactRouter.Redirect;
var Lifecycle = ReactRouter.Lifecycle;

var App = React.createClass({
  mixins: [ ReactRouter.History],
  statics: {willTransitionTo: function (nextState, replaceState) {
    if (!LoginStore.isLoggedIn()) {
      replaceState({ nextPathname: nextState.location.pathname }, '/login')
    }
  }},
  render: function () {
    return (
      <div >
        <AuthenticatedComponent>
          <LeftBar />
          <RightBar />
          {this.props.children}
        </AuthenticatedComponent>
      </div>)
  }
})

var routes = (
  <Router>
    <Route path="login" component={Login}/>
    <Route path="/" onEnter={App.willTransitionTo} component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="Messages" component={UserList}>
        <Route path=":userId" component={ MessageForm} />
      </Route>
      <Route path="Events" component={EventList}>
        <Route path="new" component={EventForm} />
      </Route>
      <Route path="Pictures"/>
      <Route path="Location"/>
    </Route>
  </Router>
)

$(function () {
  React.render( routes, document.getElementById("dashboard"));
});
