(function(root) {
  'use strict';
  var _events = [];

  var setEvents = function (events) {
    _events = events;
  }

  EventStore = root.EventStore = $.extend({}, EventEmitter.prototype, {

    myEvents: function () {
      return _events.slice(0);
    },

    addChangeListener: function (changeEvent, callback) {
      this.on(changeEvent, callback);
    },
    removeChangeListener: function (changeEvent, callback) {
      this.on(changeEvent, callback);
    },
    dispatcherID: friendzDispatcher.register( function(payload) {
      switch(payload.actionType) {
        case FriendzConstants.EVENTS_RECEIVED:
          setEvents(payload.events);
          EventStore.emit(FriendzConstants.EVENTS_RECEIVED);
        // case FriendzConstants.EVENT_CREATED:
        //   EventStore.emit(FriendzConstants.EVENT_CREATED);
      }
    })
  });
}(this));
