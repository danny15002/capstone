var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;

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
  </Route>
)

$(function () {
  React.render( <Router>{routes}</Router>, document.getElementById("dashboard"));
});
