(function(root) {
  'use strict';
  var _currentUser;
  var _currentFriends = [];

  var setCurrentUser = function (user) {
    _currentUser = user;
  }

  var setCurrentFriends = function (friends) {
    if (friends === undefined) {_currentFriends = []}
    else {_currentFriends = friends}
  }

  UserStore = root.UserStore = $.extend({}, EventEmitter.prototype, {

    currentUser: function () {
      return _currentUser;
    },
    currentFriends: function () {
      return _currentFriends.slice(0);
    },

    addChangeListener: function (changeEvent, callback) {
      this.on(changeEvent, callback);
    },
    removeChangeListener: function (changeEvent, callback) {
      this.on(changeEvent, callback);
    },
    dispatcherID: friendzDispatcher.register( function(payload) {
      switch(payload.actionType) {
        case FriendzConstants.CURRENT_USER_RECEIVED:
          setCurrentUser(payload.user);
          UserStore.emit(FriendzConstants.CURRENT_USER_RECEIVED);
        case FriendzConstants.FRIENDS_RECEIVED:
          setCurrentFriends(payload.friends);
          UserStore.emit(FriendzConstants.FRIENDS_RECEIVED);
      }
    })
  });
}(this));
