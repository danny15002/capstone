var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var Redirect = ReactRouter.Redirect;

var App = React.createClass({
  render: function () {
    return (
      <div >
        <LeftBar />
        <RightBar />
        {this.props.children}
      </div>)
  }
})

var routes = (
  <Route path="/" component={App}>
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
)

$(function () {
  React.render( <Router>{routes}</Router>, document.getElementById("dashboard"));
});
