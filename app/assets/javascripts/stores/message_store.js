(function(root) {
  'use strict';
  var _messages = [];

  var setMessages = function (messages) {
    _messages = messages;
  }

  MessageStore = root.MessageStore = $.extend({}, EventEmitter.prototype, {

    getMessages: function () {
      return _messages.slice(0);
    },
    addChangeListener: function (changeEvent, callback) {
      this.on(changeEvent, callback);
    },
    removeChangeListener: function (changeEvent, callback) {
      this.removeListener(changeEvent, callback);
    },
    dispatcherID: friendzDispatcher.register( function(payload) {
      switch(payload.actionType) {
        case FriendzConstants.MESSAGES_RECEIVED:
<<<<<<< HEAD
        
=======
>>>>>>> 38f886d2d6c348d183e3ee7da574b6c8aef68f94
          setMessages(payload.messages);
          MessageStore.emit(FriendzConstants.MESSAGES_RECEIVED);
          break;
        case FriendzConstants.MESSAGE_SENT:
          MessageStore.emit(FriendzConstants.MESSAGE_SENT);
          break;
        case FriendzConstants.STATUS_POSTED:
          MessageStore.emit(FriendzConstants.STATUS_POSTED);
          break;
        case FriendzConstants.COMMENT_CREATED:
          MessageStore.emit(FriendzConstants.COMMENT_CREATED);
          break;
        default:
      }
    })
  });
}(this));
