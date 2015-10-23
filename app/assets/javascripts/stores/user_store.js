(function(root) {
  'use strict';
  var _currentUser;
  var _currentFriends = [];
  var _userPics = [];
  var _users = [];
<<<<<<< HEAD
  var _profileUser = {};
=======
>>>>>>> 38f886d2d6c348d183e3ee7da574b6c8aef68f94

  var setCurrentUser = function (user) {
    _currentUser = user;
  }
  var setUserPics = function (pictures) {
    _userPics = pictures;
  }
  var setCurrentFriends = function (friends) {
    if (friends === undefined) {_currentFriends = []}
    else {_currentFriends = friends}
  }
  var setUsers = function (users) {
    _users = users;
  }
<<<<<<< HEAD
  var setProfileUser = function (user) {
    _profileUser = user;
  }
=======
>>>>>>> 38f886d2d6c348d183e3ee7da574b6c8aef68f94

  UserStore = root.UserStore = $.extend({}, EventEmitter.prototype, {

    currentUser: function () {
      return _currentUser;
    },
    currentFriends: function () {
      return _currentFriends.slice(0);
    },
    userProfPic: function () {
      return _userPics[0].pic_url;
    },
    getPictures: function () {
      return _userPics.slice(0);
    },
    getFriendById: function (id) {
      for (var i = 0; i < _currentFriends.length; i++) {
        if (id === _currentFriends[i].friend_id) {
          return _currentFriends[i];
        }
      }
    },
    getUsers: function () {
      return _users;
    },
<<<<<<< HEAD
    getProfileUser: function () {
      return _profileUser;
    },
=======
>>>>>>> 38f886d2d6c348d183e3ee7da574b6c8aef68f94
    addChangeListener: function (changeEvent, callback) {
      this.on(changeEvent, callback);
    },
    removeChangeListener: function (changeEvent, callback) {
      this.removeListener(changeEvent, callback);
    },
    dispatcherID: friendzDispatcher.register( function(payload) {
      switch(payload.actionType) {
        case FriendzConstants.CURRENT_USER_RECEIVED:
          setCurrentUser(payload.user);
          UserStore.emit(FriendzConstants.CURRENT_USER_RECEIVED);
          break;
        case FriendzConstants.FRIENDS_RECEIVED:
          setCurrentFriends(payload.response);
          UserStore.emit(FriendzConstants.FRIENDS_RECEIVED);
          break;
        case FriendzConstants.PICTURES_RECEIVED:
          setUserPics(payload.pictures);
          UserStore.emit(FriendzConstants.PICTURES_RECEIVED);
          break;
        case FriendzConstants.PICTURE_UPLOADED:
          UserStore.emit(FriendzConstants.PICTURE_UPLOADED)
<<<<<<< HEAD
          break;
=======
>>>>>>> 38f886d2d6c348d183e3ee7da574b6c8aef68f94
        case FriendzConstants.USERS_RECEIVED:
          setUsers(payload.response)
          UserStore.emit(FriendzConstants.USERS_RECEIVED)
          break;
<<<<<<< HEAD
        case FriendzConstants.USER_RECEIVED:
          setProfileUser(payload.response)
          UserStore.emit(FriendzConstants.USER_RECEIVED)
          break;
=======
>>>>>>> 38f886d2d6c348d183e3ee7da574b6c8aef68f94
      }
    })
  });
}(this));
