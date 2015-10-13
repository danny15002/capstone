ApiUtil = {
  fetchCurrentUser: function () {
    $.ajax({
      url: 'session',
      method: 'get',
      success: function (user) {
        ApiActions.receiveCurrentUser(user);
      }
    });
  }
}
