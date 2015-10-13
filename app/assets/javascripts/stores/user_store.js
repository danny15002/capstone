(function(root) {
  'use strict';
  var _currentUser;

  var setCurrentUser = function (user) {
    _currentUser = user;
  }

  UserStore = root.UserStore = $.extend({}, EventEmitter.prototype, {

    currentUser: function () {
      return _currentUser;
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
      }
    })
  });
}(this));
