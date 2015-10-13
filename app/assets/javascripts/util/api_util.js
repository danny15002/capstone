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
  fetchMessages: function () {
    $.ajax({
      url: 'api/messages',
      method: 'get',
      success: function (messages) {
        ApiActions.receiveMessages(messages);
      }
    });
  }
}
