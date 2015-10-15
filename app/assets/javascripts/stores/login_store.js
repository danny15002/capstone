(function(root) {
  'use strict';
  var _jwt = null;
  var _user = null;

  LoginStore = root.LoginStore = $.extend({}, EventEmitter.prototype, {
    user: function () {
      return _user;
    },

    jwt: function () {
      return _jwt;
    },

    isLoggedIn: function () {
      return !!_user;
    },
    addChangeListener: function (changeEvent, callback) {
      this.on(changeEvent, callback);
    },
    removeChangeListener: function (changeEvent, callback) {
      this.on(changeEvent, callback);
    },
    dispatcherID: friendzDispatcher.register( function(payload) {
      switch(payload.actionType) {
        case FriendzConstants.LOGIN_USER:
          // We get the JWT from the action and save it locally.
          _jwt = payload.jwt;
          // Then we decode it to get the user information.
          _user = jwt_decode(_jwt);
          // And we emit a change to all components that are listening.
          // This method is implemented in the `BaseStore`.
          this.emitChange();
          break;
        default:
          break;
      };
    })
  });
}(this));
