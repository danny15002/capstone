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
    <Route path="Messages" component={UserList}></Route>
    <Route path="Messages/:userId" components={{userList: UserList, message: MessageForm}} />
    <Route path="Events"/>
    <Route path="Pictures"/>
    <Route path="Location"/>
  </Route>
)

$(function () {
  React.render( <Router>{routes}</Router>, document.getElementById("dashboard"));
});
