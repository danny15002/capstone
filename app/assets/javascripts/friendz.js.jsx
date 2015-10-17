var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var Redirect = ReactRouter.Redirect;
var Lifecycle = ReactRouter.Lifecycle;

var App = React.createClass({
  render: function () {
    return (
      <div >
        <AuthenticatedComponent>
          <TopBar />
          <div className={"container"}>
          <LeftBar />
          {this.props.children}
          </div>
        </AuthenticatedComponent>
      </div>)
  }
})

var routes = (
  <Router>
    <Route path="login" onEnter={Login.willTransitionTo} component={Login}/>
    <Route path="signup" onEnter={SignUp.willTransitionTo} component={SignUp}/>
    <Route path="/" onEnter={AuthenticatedComponent.willTransitionTo} component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="Messages" component={UserList}>
        <Route path=":userId" component={ MessageForm} />
      </Route>
      <Route path="Events" component={EventList}>
        <Route path="new" component={EventForm} />
        <Route path=":eventId" component={Event} />
      </Route>
      <Route path="Pictures"/>
      <Route path="Profile" component={Profile}/>
      <Route path="Account" component={Account}/>
      <Route path="Locations" component={Locations}/>
    </Route>
  </Router>
)

$(function () {
  React.render( routes, document.getElementById("dashboard"));
});
