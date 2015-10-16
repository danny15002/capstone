ApiActions = {
  receiveCurrentUser: function (user) {
    var payload = {
      actionType: FriendzConstants.CURRENT_USER_RECEIVED,
      user: user
    }
    friendzDispatcher.dispatch(payload);
  },
  receiveMessages: function (messages) {
    var payload = {
      actionType: FriendzConstants.MESSAGES_RECEIVED,
      messages: messages
    }
    friendzDispatcher.dispatch(payload);
  },
  receiveFriends: function (friends) {
    var payload ={
      actionType: FriendzConstants.FRIENDS_RECEIVED,
      friends: friends
    }
    friendzDispatcher.dispatch(payload);
  },
  createMessage: function (message) {
    var payload ={
      actionType: FriendzConstants.MESSAGE_SENT,
      message: message
    }
    friendzDispatcher.dispatch(payload);
  },
  receiveEvents: function (events) {
    var payload = {
      actionType: FriendzConstants.EVENTS_RECEIVED,
      events: events
    }
    friendzDispatcher.dispatch(payload);
  },
  loginUser: function (jwt) {
    // Go to the Home page once the user is logged in
    //RouterContainer.get().transitionTo(‘/‘); // TODO: PUT THIS IN A CALLBACK
    // We save the JWT in localStorage to keep the user authenticated. We’ll learn more about this later.
    localStorage.setItem('jwt', jwt);
    // Send the action to all stores through the Dispatcher
    friendzDispatcher.dispatch({
      actionType: FriendzConstants.LOGIN_USER,
      jwt: jwt
    });
  },
  loginError: function (error) {
    friendzDispatcher.dispatch({
      actionType: FriendzConstants.FAILED_LOGIN,
      error: error.error
    });
  },
  logout: function () {
    friendzDispatcher.dispatch({
      actionType: FriendzConstants.LOGOUT
    });
  }
}
