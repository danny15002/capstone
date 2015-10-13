var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <h1>Friendz</h1>
        </header>
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
  </Route>
)

$(function () {
  React.render( <Router>{routes}</Router>, document.getElementById("dashboard"));
});
