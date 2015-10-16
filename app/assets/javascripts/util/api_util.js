ApiUtil = {
  fetchCurrentUser: function () {
    $.ajax({
      url: 'session',
      method: 'get',
      success: function (user) {
        ApiActions.receiveCurrentUser(user);
      }
    });
  },
  fetchMessages: function (type, id) {
    var data;
    if (id === undefined) {
      data = {public: type}
    } else {
      data = {public:type, user_id: id}
    }
    $.ajax({
      url: '/api/messages',
      method: 'get',
      data: data,
      success: function (messages) {
        ApiActions.receiveMessages(messages);
      }
    });
  },
  fetchFriends: function () {
    $.ajax({
      url: 'users',
      method: 'get',
      success: function (friends) {
        ApiActions.receiveFriends(friends);
      }
    })
  },
  createMessage: function (message) {
    console.log("createMessage")
    $.ajax({
      url: 'api/messages',
      method: 'post',
      data: {message: message},
      success: function (friends) {
        ApiActions.createMessage(friends);
      }
    })
  },
  fetchEvents: function () {
    $.ajax({
      url: 'api/events',
      method: 'get',
      success: function (events) {
        ApiActions.receiveEvents(events);
      }
    })
  },
  signup: function (user) {
    $.ajax({
      url: "users",
      method: 'POST',
      type: 'json',
      data: {user: user},
      success: function(response) {
        var jwt = response.id_token;
        ApiActions.signupUser(jwt);
      },
      error: function (response) {
        ApiActions.signupError(JSON.parse(response.responseText));
      }
    })
  },
  login: function (username, password) {
    var user = {username: username, password: password};
    $.ajax({
      url: "session",
      method: 'POST',
      type: 'json',
      data: {user: user},
      success: function(response) {
        // We get a JWT back.
        var jwt = response.id_token;
        // // We trigger the LoginAction with that JWT.
        ApiActions.loginUser(jwt);
      },
      error: function (response) {
        ApiActions.loginError(JSON.parse(response.responseText));
      }
    })
  },
  logout: function () {
    $.ajax({
      url: "session",
      method: 'DELETE',
      success: function (response) {
        ApiActions.logout();
      }
    })
  }

}
