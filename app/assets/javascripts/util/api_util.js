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
      url: 'api/messages',
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
  login: function (username, password) {
    return when(request({
      url: "sessions/create",
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {username: username, password: password}
    }))
    .then(function(response) {
        // We get a JWT back.
        var jwt = response.id_token;
        // We trigger the LoginAction with that JWT.
        LoginActions.loginUser(jwt);
        return true;
    });
  }

}
