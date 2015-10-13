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
      this.on(changeEvent, callback);
    },
    dispatcherID: friendzDispatcher.register( function(payload) {
      switch(payload.actionType) {
        case FriendzConstants.MESSAGES_RECEIVED:
          setMessages(payload.messages);
          MessageStore.emit(FriendzConstants.MESSAGES_RECEIVED);
      }
    })
  });
}(this));
