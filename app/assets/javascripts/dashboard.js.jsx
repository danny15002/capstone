var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;

var Dashboard = React.createClass({
  getInitialState: function () {
    return {currentUser: ""};
  },
  componentDidMount: function () {
    
  },
  render: function () {
    return (
      <div className={"dashboard"}>

      </div>
    )
  }
});

var routes = (
  <Route path="/" component={MessageIndex}>

  </Route>
)

$(function () {
  React.render( <Router>{routes}</Router>, document.getElementById("dashboard"));
});
