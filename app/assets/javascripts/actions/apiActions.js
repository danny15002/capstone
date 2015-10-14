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
  }
}
