window["FlvPlayer"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/events/events.js":
/*!*****************************************************************************************!*\
  !*** /Users/leonardo/Documents/front-end/player/xgplayer/node_modules/events/events.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};

var ReflectOwnKeys;
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function () {
    return defaultMaxListeners;
  },
  set: function (arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function () {

  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = type === 'error';

  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0) er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined) return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
};

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = this._events;
  if (events === undefined) return this;

  list = events[type];
  if (list === undefined) return this;

  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = Object.create(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;

    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }

    if (position < 0) return this;

    if (position === 0) list.shift();else {
      spliceOne(list, position);
    }

    if (list.length === 1) events[type] = list[0];

    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
  }

  return this;
};

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;

  events = this._events;
  if (events === undefined) return this;

  // not listening for removeListener, no need to emit
  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
    }
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    var keys = Object.keys(events);
    var key;
    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }

  listeners = events[type];

  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners !== undefined) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }

  return this;
};

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined) return [];

  var evlistener = events[type];
  if (evlistener === undefined) return [];

  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i) copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

/***/ }),

/***/ "../xgplayer-buffer/index.js":
/*!***********************************!*\
  !*** ../xgplayer-buffer/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  Track: __webpack_require__(/*! ./src/track */ "../xgplayer-buffer/src/track.js").default,
  Tracks: __webpack_require__(/*! ./src/track */ "../xgplayer-buffer/src/track.js").Tracks,
  AudioTrack: __webpack_require__(/*! ./src/track */ "../xgplayer-buffer/src/track.js").AudioTrack,
  VideoTrack: __webpack_require__(/*! ./src/track */ "../xgplayer-buffer/src/track.js").VideoTrack,

  XgBuffer: __webpack_require__(/*! ./src/buffer */ "../xgplayer-buffer/src/buffer.js").XgBuffer,
  RemuxBuffer: __webpack_require__(/*! ./src/buffer */ "../xgplayer-buffer/src/buffer.js").RemuxBuffer,

  PreSource: __webpack_require__(/*! ./src/presouce */ "../xgplayer-buffer/src/presouce.js").default
};

/***/ }),

/***/ "../xgplayer-buffer/src/buffer.js":
/*!****************************************!*\
  !*** ../xgplayer-buffer/src/buffer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class XgBuffer {
  /**
   * A buffer to store loaded data.
   *
   * @class LoaderBuffer
   * @param {number} length - Optional the buffer size
   */
  constructor(length) {
    this.length = length || 0;
    this.historyLen = length || 0;
    this.array = [];
    this.offset = 0;
  }

  /**
   * The function to push data.
   *
   * @param {number} data - The data to push into the buffer
   */
  push(data) {
    this.array.push(data);
    this.length += data.byteLength;
    this.historyLen += data.byteLength;
  }

  /**
   * The function to shift data.
   *
   * @param {number} length - The size of shift.
   */
  shift(length) {
    if (this.array.length < 1) {
      return new Uint8Array(0);
    }

    if (length === undefined) {
      return this._shiftBuffer();
    }
    if (this.offset + length === this.array[0].length) {
      let ret = this.array[0].slice(this.offset, this.offset + length);
      this.offset = 0;
      this.array.shift();
      this.length -= length;
      return ret;
    }

    if (this.offset + length < this.array[0].length) {
      let ret = this.array[0].slice(this.offset, this.offset + length);
      this.offset += length;
      this.length -= length;
      return ret;
    }

    let ret = new Uint8Array(length);
    let tmpoff = 0;
    while (this.array.length > 0 && length > 0) {
      if (this.offset + length < this.array[0].length) {
        let tmp = this.array[0].slice(this.offset, this.offset + length);
        ret.set(tmp, tmpoff);
        this.offset += length;
        this.length -= length;
        length = 0;
        break;
      } else {
        let templength = this.array[0].length - this.offset;
        ret.set(this.array[0].slice(this.offset, this.array[0].length), tmpoff);
        this.array.shift();
        this.offset = 0;
        tmpoff += templength;
        this.length -= templength;
        length -= templength;
      }
    }
    return ret;
  }

  /**
   * Function to clear the buffer.
   */
  clear() {
    this.array = [];
    this.length = 0;
    this.offset = 0;
  }

  destroy() {
    this.clear();
    this.historyLen = 0;
  }

  /**
   * Function to shift one unit8Array.
   */
  _shiftBuffer() {
    this.length -= this.array[0].length;
    this.offset = 0;
    return this.array.shift();
  }

  /**
   * Convert uint8 data to number.
   *
   * @param {number} start - the start postion.
   * @param {number} length - the length of data.
   */
  toInt(start, length) {
    let retInt = 0;
    let i = this.offset + start;
    while (i < this.offset + length + start) {
      if (i < this.array[0].length) {
        retInt = retInt * 256 + this.array[0][i];
      } else if (this.array[1]) {
        retInt = retInt * 256 + this.array[1][i - this.array[0].length];
      }

      i++;
    }
    return retInt;
  }
}

exports.XgBuffer = XgBuffer;
class RemuxBuffer {
  constructor() {
    this.video = [];
    this.audio = [];
  }

  destroy() {
    this.video = [];
    this.audio = [];
  }
}
exports.RemuxBuffer = RemuxBuffer;

/***/ }),

/***/ "../xgplayer-buffer/src/presouce.js":
/*!******************************************!*\
  !*** ../xgplayer-buffer/src/presouce.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class Source {
  constructor() {
    this.mimetype = '';
    this.init = null;
    this.data = [];
  }
}

class PreSource {
  constructor() {
    this.sources = {};
  }

  getSource(source) {
    return this.sources[source];
  }

  createSource(name) {
    this.sources[name] = new Source();
    return this.sources[name];
  }

  clear() {
    this.sources = {};
  }

  destroy() {
    this.sources = {};
  }
}

exports.default = PreSource;

/***/ }),

/***/ "../xgplayer-buffer/src/track.js":
/*!***************************************!*\
  !*** ../xgplayer-buffer/src/track.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class Track {
  /**
   * The constructor.
   */
  constructor() {
    this.id = -1;
    this.sequenceNumber = 0;
    this.samples = [];
    this.droppedSamples = [];
    this.length = 0;
  }

  /**
   * Reset the track.
   */
  reset() {
    this.sequenceNumber = 0;
    this.samples = [];
    this.length = 0;
  }
  /**
   * destroy the track.
   */
  distroy() {
    this.reset();
    this.id = -1;
  }
}

exports.default = Track;
class AudioTrack extends Track {
  /**
   * The constructor for audio track.
   */
  constructor() {
    super();
    this.TAG = 'AudioTrack';
    this.type = 'audio';
  }
}

exports.AudioTrack = AudioTrack;
class VideoTrack extends Track {
  /**
   * The constructor for video track.
   */
  constructor() {
    super();
    this.TAG = 'VideoTrack';
    this.type = 'video';
    this.dropped = 0;
  }
  /**
   * reset the video track.
   */
  reset() {
    this.sequenceNumber = 0;
    this.samples = [];
    this.length = 0;
    this.dropped = 0;
  }
}

exports.VideoTrack = VideoTrack;
class Tracks {
  constructor() {
    this.audioTrack = null;
    this.videoTrack = null;
  }

  destroy() {
    this.audioTrack = null;
    this.videoTrack = null;
  }
}
exports.Tracks = Tracks;

/***/ }),

/***/ "../xgplayer-codec/index.js":
/*!**********************************!*\
  !*** ../xgplayer-codec/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  Nalunit: __webpack_require__(/*! ./src/h264/nalunit */ "../xgplayer-codec/src/h264/nalunit/index.js").default,
  SpsParser: __webpack_require__(/*! ./src/h264/nalunit/sps */ "../xgplayer-codec/src/h264/nalunit/sps.js").default,

  Compatibility: __webpack_require__(/*! ./src/compatibility */ "../xgplayer-codec/src/compatibility.js").default
};

/***/ }),

/***/ "../xgplayer-codec/src/aac/aac-helper.js":
/*!***********************************************!*\
  !*** ../xgplayer-codec/src/aac/aac-helper.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class AAC {

  static getSilentFrame(codec, channelCount) {
    if (codec === 'mp4a.40.2') {
      // handle LC-AAC
      if (channelCount === 1) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x23, 0x80]);
      } else if (channelCount === 2) {
        return new Uint8Array([0x21, 0x00, 0x49, 0x90, 0x02, 0x19, 0x00, 0x23, 0x80]);
      } else if (channelCount === 3) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x8e]);
      } else if (channelCount === 4) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x80, 0x2c, 0x80, 0x08, 0x02, 0x38]);
      } else if (channelCount === 5) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x38]);
      } else if (channelCount === 6) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x00, 0xb2, 0x00, 0x20, 0x08, 0xe0]);
      }
    } else {
      // handle HE-AAC (mp4a.40.5 / mp4a.40.29)
      if (channelCount === 1) {
        // ffmpeg -y -f lavfi -i "aevalsrc=0:d=0.05" -c:a libfdk_aac -profile:a aac_he -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
        return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x4e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x1c, 0x6, 0xf1, 0xc1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e]);
      } else if (channelCount === 2) {
        // ffmpeg -y -f lavfi -i "aevalsrc=0|0:d=0.05" -c:a libfdk_aac -profile:a aac_he_v2 -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
        return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x5e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x0, 0x95, 0x0, 0x6, 0xf1, 0xa1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e]);
      } else if (channelCount === 3) {
        // ffmpeg -y -f lavfi -i "aevalsrc=0|0|0:d=0.05" -c:a libfdk_aac -profile:a aac_he_v2 -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
        return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x5e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x0, 0x95, 0x0, 0x6, 0xf1, 0xa1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e]);
      }
    }
    return null;
  }

}

exports.default = AAC;

/***/ }),

/***/ "../xgplayer-codec/src/compatibility.js":
/*!**********************************************!*\
  !*** ../xgplayer-codec/src/compatibility.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

var _aacHelper = __webpack_require__(/*! ./aac/aac-helper */ "../xgplayer-codec/src/aac/aac-helper.js");

var _aacHelper2 = _interopRequireDefault(_aacHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { REMUX_EVENTS, DEMUX_EVENTS } = _xgplayerUtils.EVENTS;

class Compatibility {
  constructor() {
    this.nextAudioDts = 0; // 模拟下一段音频数据的dts
    this.nextVideoDts = 0; // 模拟下一段视频数据的dts

    this.lastAudioSamplesLen = 0; // 上一段音频数据的长度
    this.lastVideoSamplesLen = 0; // 上一段视频数据的长度

    this.lastVideoDts = undefined; // 上一段音频数据的长度
    this.lastAudioDts = undefined; // 上一段视频数据的长度

    this.allAudioSamplesCount = 0; // 音频总数据量(原始帧)
    this.allVideoSamplesCount = 0; // 视频总数据量(原始帧)

    this._firstAudioSample = null;
    this._firstVideoSample = null;

    this.filledAudioSamples = []; // 补充音频帧（）
    this.filledVideoSamples = []; // 补充视频帧（）

    this._videoLargeGap = 0;
    this._audioLargeGap = 0;
  }

  init() {
    this.before(REMUX_EVENTS.REMUX_MEDIA, this.doFix.bind(this));
  }

  reset() {
    this.nextAudioDts = null; // 估算下一段音频数据的dts
    this.nextVideoDts = null; // 估算下一段视频数据的dts

    this.lastAudioSamplesLen = 0; // 上一段音频数据的长度
    this.lastVideoSamplesLen = 0; // 上一段视频数据的长度

    this.lastVideoDts = undefined; // 上一段音频数据的长度
    this.lastAudioDts = undefined; // 上一段视频数据的长度

    // this.allAudioSamplesCount = 0 // 音频总数据量(原始帧)
    // this.allVideoSamplesCount = 0 // 视频总数据量(原始帧)

    // this._firstAudioSample = null
    // this._firstVideoSample = null

    this.filledAudioSamples = []; // 补充音频帧（）
    this.filledVideoSamples = []; // 补充视频帧（）
  }

  doFix() {
    const { isFirstAudioSamples, isFirstVideoSamples } = this.getFirstSample();

    // this.removeInvalidSamples()

    this.recordSamplesCount();

    if (this._firstVideoSample) {
      this.fixRefSampleDuration(this.videoTrack.meta, this.videoTrack.samples);
    }
    if (this._firstAudioSample) {
      this.fixRefSampleDuration(this.audioTrack.meta, this.audioTrack.samples);
    }

    const { changed: videoChanged, changedIdx: videoChangedIdx } = Compatibility.detactChangeStream(this.videoTrack.samples);
    if (videoChanged && !isFirstAudioSamples) {
      this.fixChangeStreamVideo(videoChangedIdx);
    } else {
      this.doFixVideo(isFirstVideoSamples);
    }

    const { changed: audioChanged, changedIdx: audioChangedIdx } = Compatibility.detactChangeStream(this.audioTrack.samples);
    if (audioChanged) {
      this.fixChangeStreamAudio(audioChangedIdx);
    } else {
      this.doFixAudio(isFirstAudioSamples);
    }

    // this.removeInvalidSamples()
  }

  doFixVideo(first, streamChangeStart) {
    let { samples: videoSamples, meta } = this.videoTrack;

    if (meta.frameRate && meta.frameRate.fixed === false) {
      return;
    }

    if (!videoSamples || !videoSamples.length || !this._firstVideoSample) {
      return;
    }

    // console.log(`video lastSample, ${videoSamples[videoSamples.length - 1].dts}`)

    const firstSample = videoSamples[0];

    const samplesLen = videoSamples.length;

    // step0.修复hls流出现巨大gap，需要强制重定位的问题
    if (this._videoLargeGap > 0) {
      Compatibility.doFixLargeGap(videoSamples, this._videoLargeGap);
    }

    if (firstSample.dts !== this._firstVideoSample.dts && (streamChangeStart || Compatibility.detectLargeGap(this.nextVideoDts, firstSample))) {
      if (streamChangeStart) {
        this.nextVideoDts = streamChangeStart; // FIX: Hls中途切codec，在如果直接seek到后面的点会导致largeGap计算失败
      }

      this._videoLargeGap = this.nextVideoDts - firstSample.dts;
      Compatibility.doFixLargeGap(videoSamples, this._videoLargeGap);
    }

    const firstDts = firstSample.dts;

    // step1. 修复与audio首帧差距太大的问题
    if (first && this._firstAudioSample) {
      const videoFirstDts = this._firstVideoSample.dts;
      const audioFirstDts = this._firstAudioSample.dts;
      const gap = videoFirstDts - audioFirstDts;
      if (gap > 2 * meta.refSampleDuration) {
        const fillCount = Math.floor(gap / meta.refSampleDuration);

        for (let i = 0; i < fillCount; i++) {
          const clonedFirstSample = Object.assign({}, firstSample); // 视频头部帧缺失需要复制第一帧
          // 重新计算sample的dts和pts
          clonedFirstSample.dts = videoFirstDts - (i + 1) * meta.refSampleDuration;
          clonedFirstSample.pts = clonedFirstSample.dts + clonedFirstSample.cts;

          videoSamples.unshift(clonedFirstSample);

          this.filledVideoSamples.push({
            dts: clonedFirstSample.dts,
            size: clonedFirstSample.data.byteLength
          });
        }
      }
    }

    let gap;
    // step2. 修复samples段之间的间距问题、
    if (this.nextVideoDts) {
      // step1. 处理samples段之间的丢帧情况
      // 当发现duration差距大于2帧时进行补帧
      gap = firstDts - this.nextVideoDts;
      const absGap = Math.abs(gap);
      if (gap > 2 * meta.refSampleDuration) {
        const fillFrameCount = Math.floor(gap / meta.refSampleDuration);

        for (let i = 0; i < fillFrameCount; i++) {
          const clonedSample = Object.assign({}, videoSamples[0]);
          const computed = firstDts - (i + 1) * meta.refSampleDuration;

          clonedSample.dts = computed > this.nextVideoDts ? computed : this.nextVideoDts; // 补的第一帧一定要是nextVideoDts
          clonedSample.pts = clonedSample.dts + clonedSample.cts;

          this.videoTrack.samples.unshift(clonedSample);

          this.filledVideoSamples.push({
            dts: clonedSample.dts,
            size: clonedSample.data.byteLength
          });
        }
      } else if (absGap <= meta.refSampleDuration && absGap > 0) {
        // 当差距在+-一帧之间时将第一帧的dts强行定位到期望位置
        // console.log('重定位视频帧dts', videoSamples[0].dts, this.nextVideoDts)
        videoSamples[0].dts = this.nextVideoDts;
        videoSamples[0].originDts = videoSamples[0].dts;
        videoSamples[0].cts = videoSamples[0].cts !== undefined ? videoSamples[0].cts : videoSamples[0].pts - videoSamples[0].dts;
        videoSamples[0].pts = videoSamples[0].dts + videoSamples[0].cts;
      } else if (gap < 0) {
        // 出现大的gap
        Compatibility.doFixLargeGap(videoSamples, -1 * gap);
      }
    }
    const lastDts = videoSamples[videoSamples.length - 1].dts;

    const lastSampleDuration = videoSamples.length >= 2 ? lastDts - videoSamples[videoSamples.length - 2].dts : meta.refSampleDuration;

    this.lastVideoSamplesLen = samplesLen;
    this.nextVideoDts = lastDts + lastSampleDuration;
    this.lastVideoDts = lastDts;

    // step2. 修复sample段之内的间距问题
    // step3. 修复samples段内部的dts异常问题
    for (let i = 0, len = videoSamples.length; i < len; i++) {
      const current = videoSamples[i];
      const next = videoSamples[i + 1];

      if (!next) {
        break;
      }

      const duration = next.dts - current.dts;

      if (duration > 2 * meta.refSampleDuration) {
        // 两帧之间间隔太大，需要补空白帧
        let fillFrameCount = Math.floor(duration / meta.refSampleDuration);

        let fillFrameIdx = 0;
        while (fillFrameIdx < fillFrameCount) {
          const fillFrame = Object.assign({}, next);
          fillFrame.dts = current.dts + (fillFrameIdx + 1) * meta.refSampleDuration;
          fillFrame.pts = fillFrame.dts + fillFrame.cts;
          if (fillFrame < next.dts) {
            videoSamples.splice(i, 0, fillFrame);

            this.filledVideoSamples.push({
              dts: fillFrame.dts,
              size: fillFrame.data.byteLength
            });
          }

          fillFrameIdx++;
          i++;
        }
      }
    }

    this.videoTrack.samples = videoSamples;
  }

  doFixAudio(first, streamChangeStart) {
    let { samples: audioSamples, meta } = this.audioTrack;

    if (!audioSamples || !audioSamples.length) {
      return;
    }
    // console.log(`audio lastSample, ${audioSamples[audioSamples.length - 1].dts}`)

    const samplesLen = audioSamples.length;
    const silentFrame = _aacHelper2.default.getSilentFrame(meta.codec, meta.channelCount);

    const firstSample = this._firstAudioSample;

    const _firstSample = audioSamples[0];
    // 对audioSamples按照dts做排序
    // audioSamples = Compatibility.sortAudioSamples(audioSamples)
    if (this._audioLargeGap > 0) {
      Compatibility.doFixLargeGap(audioSamples, this._audioLargeGap);
    }

    if (_firstSample.dts !== this._firstAudioSample.dts && (streamChangeStart || Compatibility.detectLargeGap(this.nextAudioDts, _firstSample))) {
      if (streamChangeStart) {
        this.nextAudioDts = streamChangeStart; // FIX: Hls中途切codec，在如果直接seek到后面的点会导致largeGap计算失败
      }
      this._audioLargeGap = this.nextAudioDts - _firstSample.dts;
      Compatibility.doFixLargeGap(audioSamples, this._audioLargeGap);
    }
    // step0. 首帧与video首帧间距大的问题
    if (this._firstVideoSample && first) {
      const videoFirstPts = this._firstVideoSample.pts ? this._firstVideoSample.pts : this._firstVideoSample.dts + this._firstVideoSample.cts;

      if (firstSample.dts - videoFirstPts > meta.refSampleDuration) {
        const silentSampleCount = Math.floor((firstSample.dts - videoFirstPts) / meta.refSampleDuration);

        for (let i = 0; i < silentSampleCount; i++) {
          const silentSample = {
            data: silentFrame,
            datasize: silentFrame.byteLength,
            dts: firstSample.dts - (i + 1) * meta.refSampleDuration,
            filtered: 0
          };

          audioSamples.unshift(silentSample);

          this.filledAudioSamples.push({
            dts: silentSample.dts,
            size: silentSample.data.byteLength
          });
        }
      }
    }

    let gap;
    const firstDts = audioSamples[0].dts;

    if (this.nextAudioDts) {
      // step1. 处理samples段之间的丢帧情况
      // 当发现duration差距大于1帧时进行补帧
      gap = firstDts - this.nextAudioDts;
      const absGap = Math.abs(gap);

      if (absGap > meta.refSampleDuration && samplesLen === 1 && this.lastAudioSamplesLen === 1) {
        meta.refSampleDurationFixed = undefined;
      }

      if (gap > 2 * meta.refSampleDuration) {
        if (samplesLen === 1 && this.lastAudioSamplesLen === 1) {
          // 如果sample的length一直是1，而且一直不符合refSampleDuration，需要动态修改refSampleDuration
          meta.refSampleDurationFixed = meta.refSampleDurationFixed !== undefined ? meta.refSampleDurationFixed + gap : meta.refSampleDuration + gap;
        } else {
          const silentFrameCount = Math.floor(gap / meta.refSampleDuration);

          for (let i = 0; i < silentFrameCount; i++) {
            const computed = firstDts - (i + 1) * meta.refSampleDuration;
            const silentSample = Object.assign({}, audioSamples[0], {
              dts: computed > this.nextAudioDts ? computed : this.nextAudioDts
            });

            this.filledAudioSamples.push({
              dts: silentSample.dts,
              size: silentSample.data.byteLength
            });
            this.audioTrack.samples.unshift(silentSample);
          }
        }
      } else if (absGap <= meta.refSampleDuration && absGap > 0) {
        // 当差距比较小的时候将音频帧重定位
        // console.log('重定位音频帧dts', audioSamples[0].dts, this.nextAudioDts)
        audioSamples[0].dts = this.nextAudioDts;
        audioSamples[0].pts = this.nextAudioDts;
      } else if (gap < 0) {
        Compatibility.doFixLargeGap(audioSamples, -1 * gap);
      }
    }
    const lastDts = audioSamples[audioSamples.length - 1].dts;
    const lastSampleDuration = audioSamples.length >= 2 ? lastDts - audioSamples[audioSamples.length - 2].dts : meta.refSampleDuration;

    this.lastAudioSamplesLen = samplesLen;
    this.nextAudioDts = meta.refSampleDurationFixed ? lastDts + meta.refSampleDurationFixed : lastDts + lastSampleDuration;
    this.lastAudioDts = lastDts;

    // step3. 修复samples段内部的dts异常问题
    for (let i = 0, len = audioSamples.length; i < len; i++) {
      const current = audioSamples[i];
      const next = audioSamples[i + 1];

      if (!next) {
        break;
      }

      const duration = next.dts - current.dts;
      audioSamples[i].duration = duration;
      /*
      if (duration > (2 * meta.refSampleDuration)) {
        // 两帧之间间隔太大，需要补空白帧
        /**
        let silentFrameCount = Math.floor(duration / meta.refSampleDuration)
        let frameIdx = 0
         while (frameIdx < silentFrameCount) {
          const silentSample = {
            data: silentFrame,
            datasize: silentFrame.byteLength,
            dts: current.dts + (frameIdx + 1) * meta.refSampleDuration,
            filtered: 0,
            isSilent: true
          }
           audioSamples.splice(i, 0, silentSample)
           this.filledAudioSamples.push({
            dts: silentSample.dts,
            size: silentSample.data.byteLength
          })
           frameIdx++
          i++ // 不对静音帧做比较
        }
      } */
    }

    this.audioTrack.samples = Compatibility.sortAudioSamples(audioSamples);
  }

  fixChangeStreamVideo(changeIdx) {
    const { samples, meta } = this.videoTrack;
    const prevDts = changeIdx === 0 ? this.getStreamChangeStart(samples[0]) : samples[changeIdx - 1].dts;
    const curDts = samples[changeIdx].dts;
    const isContinue = Math.abs(prevDts - curDts) <= 2 * meta.refSampleDuration;

    if (isContinue) {
      if (!samples[changeIdx].options) {
        samples[changeIdx].options = {
          isContinue: true
        };
      } else {
        samples[changeIdx].options.isContinue = true;
      }
      return this.doFixVideo(false);
    }

    const firstPartSamples = samples.slice(0, changeIdx);
    const secondPartSamples = samples.slice(changeIdx);
    const firstSample = samples[0];

    const changeSample = secondPartSamples[0];
    const firstPartDuration = changeSample.dts - firstSample.dts;
    const streamChangeStart = firstSample.options && firstSample.options.start + firstPartDuration ? firstSample.options.start : null;

    this.videoTrack.samples = samples.slice(0, changeIdx);

    this.doFixVideo(false);

    this.videoTrack.samples = samples.slice(changeIdx);

    this.doFixVideo(false, streamChangeStart);

    this.videoTrack.samples = firstPartSamples.concat(secondPartSamples);
  }

  fixChangeStreamAudio(changeIdx) {
    const { samples, meta } = this.audioTrack;

    const prevDts = changeIdx === 0 ? this.getStreamChangeStart(samples[0]) : samples[changeIdx - 1].dts;
    const curDts = samples[changeIdx].dts;
    const isContinue = Math.abs(prevDts - curDts) <= 2 * meta.refSampleDuration;

    if (isContinue) {
      if (!samples[changeIdx].options) {
        samples[changeIdx].options = {
          isContinue: true
        };
      } else {
        samples[changeIdx].options.isContinue = true;
      }
      return this.doFixAudio(false);
    }

    const firstPartSamples = samples.slice(0, changeIdx);
    const secondPartSamples = samples.slice(changeIdx);
    const firstSample = samples[0];

    const changeSample = secondPartSamples[0];
    const firstPartDuration = changeSample.dts - firstSample.dts;
    const streamChangeStart = firstSample.options && firstSample.options.start + firstPartDuration ? firstSample.options.start : null;

    this.audioTrack.samples = firstPartSamples;

    this.doFixAudio(false);

    this.audioTrack.samples = secondPartSamples;

    this.doFixAudio(false, streamChangeStart);

    this.audioTrack.samples = firstPartSamples.concat(secondPartSamples);
  }

  getFirstSample() {
    // 获取video和audio的首帧数据
    let { samples: videoSamples } = this.videoTrack;
    let { samples: audioSamples } = this.audioTrack;

    let isFirstVideoSamples = false;
    let isFirstAudioSamples = false;

    if (!this._firstVideoSample && videoSamples.length) {
      this._firstVideoSample = Compatibility.findFirstVideoSample(videoSamples);
      isFirstVideoSamples = true;
    }

    if (!this._firstAudioSample && audioSamples.length) {
      this._firstAudioSample = Compatibility.findFirstAudioSample(audioSamples); // 寻找dts最小的帧作为首个音频帧
      isFirstAudioSamples = true;
    }

    return {
      isFirstVideoSamples,
      isFirstAudioSamples
    };
  }

  /**
   * 在没有refSampleDuration的问题流中，
   */
  fixRefSampleDuration(meta, samples) {
    const isVideo = meta.type === 'video';
    const allSamplesCount = isVideo ? this.allVideoSamplesCount : this.allAudioSamplesCount;
    const firstDts = isVideo ? this._firstVideoSample.dts : this._firstAudioSample.dts;
    const filledSamplesCount = isVideo ? this.filledVideoSamples.length : this.filledAudioSamples.length;

    if (!meta.refSampleDuration || meta.refSampleDuration <= 0 || Number.isNaN(meta.refSampleDuration)) {
      if (samples.length >= 1) {
        const lastDts = samples[samples.length - 1].dts;

        meta.refSampleDuration = Math.floor((lastDts - firstDts) / (allSamplesCount + filledSamplesCount - 1)); // 将refSampleDuration重置为计算后的平均值
      }
    } else if (meta.refSampleDuration) {
      if (samples.length >= 5) {
        const lastDts = samples[samples.length - 1].dts;
        const firstDts = samples[0].dts;
        const durationAvg = (lastDts - firstDts) / (samples.length - 1);

        meta.refSampleDuration = Math.floor(Math.abs(meta.refSampleDuration - durationAvg) <= 5 ? meta.refSampleDuration : durationAvg); // 将refSampleDuration重置为计算后的平均值
      }
    }
  }

  /**
   * 记录截止目前一共播放了多少帧
   */
  recordSamplesCount() {
    const { audioTrack, videoTrack } = this;

    this.allAudioSamplesCount += audioTrack.samples.length;
    this.allVideoSamplesCount += videoTrack.samples.length;
  }

  /**
   * 去除不合法的帧（倒退、重复帧）
   */
  removeInvalidSamples() {
    const { _firstVideoSample, _firstAudioSample } = this;

    this.audioTrack.samples = this.audioTrack.samples.filter(sample => {
      return sample.dts >= _firstAudioSample.dts && (this.lastAudioDts === undefined || sample.dts > this.lastAudioDts);
    });

    this.videoTrack.samples = this.videoTrack.samples.filter(sample => {
      return sample.dts >= _firstVideoSample.dts && (this.lastVideoDts === undefined || sample.dts > this.lastVideoDts);
    });
  }

  getStreamChangeStart(sample) {
    if (sample.options && sample.options.start) {
      return sample.options.start - this.dtsBase;
    }
    return Infinity;
  }

  static sortAudioSamples(samples) {
    if (samples.length === 1) {
      return samples;
    }

    return samples.sort((a, b) => {
      return a.dts - b.dts;
    });
  }

  /**
   * 寻找dts最小的sample
   * @param samples
   */
  static findFirstAudioSample(samples) {
    if (!samples || samples.length === 0) {
      return null;
    }

    return Compatibility.sortAudioSamples(samples)[0];
  }

  static findFirstVideoSample(samples) {
    if (!samples.length) {
      return null;
    }

    const sorted = samples.sort((a, b) => {
      return a.dts - b.dts;
    });

    for (let i = 0, len = sorted.length; i < len; i++) {
      if (sorted[i].isKeyframe) {
        return sorted[i];
      }
    }
  }

  static detectLargeGap(nextDts, firstSample) {
    if (nextDts === null) {
      return;
    }
    const curDts = firstSample.dts || 0;
    const cond1 = nextDts - curDts >= 1000 || curDts - nextDts >= 1000; // fix hls流出现大量流dts间距问题
    const cond2 = firstSample.options && firstSample.options.discontinue;

    return cond1 || cond2;
  }

  static doFixLargeGap(samples, gap) {
    for (let i = 0, len = samples.length; i < len; i++) {
      const sample = samples[i];
      sample.dts += gap;
      if (sample.pts) {
        sample.pts += gap;
      }
    }
  }

  /**
   * 中途换流
   */
  static detactChangeStream(samples) {
    let changed = false;
    let changedIdx = -1;
    for (let i = 0, len = samples.length; i < len; i++) {
      if (samples[i].options && samples[i].options.meta) {
        changed = true;
        changedIdx = i;
        break;
      }
    }

    return {
      changed,
      changedIdx
    };
  }

  get tracks() {
    return this._context.getInstance('TRACKS');
  }

  get audioTrack() {
    if (this.tracks) {
      return this.tracks.audioTrack;
    }
    return null;
  }

  get videoTrack() {
    if (this.tracks) {
      return this.tracks.videoTrack;
    }
    return null;
  }

  get dtsBase() {
    const remuxer = this._context.getInstance('MP4_REMUXER');
    if (remuxer) {
      return remuxer._dtsBase;
    }
    return 0;
  }
}
exports.default = Compatibility;

/***/ }),

/***/ "../xgplayer-codec/src/h264/nalunit/golomb.js":
/*!****************************************************!*\
  !*** ../xgplayer-codec/src/h264/nalunit/golomb.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class Golomb {
  constructor(uint8array) {
    this.TAG = 'Golomb';
    this._buffer = uint8array;
    this._bufferIndex = 0;
    this._totalBytes = uint8array.byteLength;
    this._totalBits = uint8array.byteLength * 8;
    this._currentWord = 0;
    this._currentWordBitsLeft = 0;
  }

  destroy() {
    this._buffer = null;
  }

  _fillCurrentWord() {
    let bufferBytesLeft = this._totalBytes - this._bufferIndex;
    if (bufferBytesLeft <= 0) {
      // TODO 异常处理
    }

    let bytesRead = Math.min(4, bufferBytesLeft);
    let word = new Uint8Array(4);
    word.set(this._buffer.subarray(this._bufferIndex, this._bufferIndex + bytesRead));
    this._currentWord = new DataView(word.buffer).getUint32(0);

    this._bufferIndex += bytesRead;
    this._currentWordBitsLeft = bytesRead * 8;
  }

  readBits(size) {
    let bits = Math.min(this._currentWordBitsLeft, size); // :uint
    let valu = this._currentWord >>> 32 - bits;
    if (size > 32) {
      throw new Error('Cannot read more than 32 bits at a time');
    }
    this._currentWordBitsLeft -= bits;
    if (this._currentWordBitsLeft > 0) {
      this._currentWord <<= bits;
    } else if (this._totalBytes - this._bufferIndex > 0) {
      this._fillCurrentWord();
    }

    bits = size - bits;
    if (bits > 0 && this._currentWordBitsLeft) {
      return valu << bits | this.readBits(bits);
    } else {
      return valu;
    }
  }

  readBool() {
    return this.readBits(1) === 1;
  }

  readByte() {
    return this.readBits(8);
  }

  _skipLeadingZero() {
    let zeroCount;
    for (zeroCount = 0; zeroCount < this._currentWordBitsLeft; zeroCount++) {
      if ((this._currentWord & 0x80000000 >>> zeroCount) !== 0) {
        this._currentWord <<= zeroCount;
        this._currentWordBitsLeft -= zeroCount;
        return zeroCount;
      }
    }
    this._fillCurrentWord();
    return zeroCount + this._skipLeadingZero();
  }

  readUEG() {
    // unsigned exponential golomb
    let leadingZeros = this._skipLeadingZero();
    return this.readBits(leadingZeros + 1) - 1;
  }

  readSEG() {
    // signed exponential golomb
    let value = this.readUEG();
    if (value & 0x01) {
      return value + 1 >>> 1;
    } else {
      return -1 * (value >>> 1);
    }
  }
}

exports.default = Golomb;

/***/ }),

/***/ "../xgplayer-codec/src/h264/nalunit/index.js":
/*!***************************************************!*\
  !*** ../xgplayer-codec/src/h264/nalunit/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sps = __webpack_require__(/*! ./sps */ "../xgplayer-codec/src/h264/nalunit/sps.js");

var _sps2 = _interopRequireDefault(_sps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Nalunit {
  static getNalunits(buffer) {
    if (buffer.length - buffer.position < 4) {
      return [];
    }

    let buf = buffer.dataview;
    let position = buffer.position;
    if (buf.getInt32(position) === 1 || buf.getInt16(position) === 0 && buf.getInt8(position + 2) === 1) {
      return Nalunit.getAnnexbNals(buffer);
    } else {
      return Nalunit.getAvccNals(buffer);
    }
  }

  static getAnnexbNals(buffer) {
    let nals = [];
    let position = Nalunit.getHeaderPositionAnnexB(buffer);
    let start = position.pos;
    let end = start;
    while (start < buffer.length - 4) {
      let header = buffer.buffer.slice(start, start + position.headerLength);
      if (position.pos === buffer.position) {
        buffer.skip(position.headerLength);
      }
      position = Nalunit.getHeaderPositionAnnexB(buffer);
      end = position.pos;
      let body = new Uint8Array(buffer.buffer.slice(start + header.byteLength, end));
      let unit = { header, body };
      Nalunit.analyseNal(unit);
      nals.push(unit);
      buffer.skip(end - buffer.position);
      start = end;
    }
    return nals;
  }

  static getAvccNals(buffer) {
    let nals = [];
    while (buffer.position < buffer.length - 4) {
      let length = buffer.dataview.getInt32(buffer.position);
      if (buffer.length - buffer.position >= length) {
        let header = buffer.buffer.slice(buffer.position, buffer.position + 4);
        buffer.skip(4);
        let body = buffer.buffer.slice(buffer.position, buffer.position + length);
        buffer.skip(length);
        let unit = { header, body };
        Nalunit.analyseNal(unit);
        nals.push(unit);
      } else {
        break;
      }
    }
    return nals;
  }

  static analyseNal(unit) {
    let type = unit.body[0] & 0x1f;
    switch (type) {
      case 1:
        // NDR
        unit.ndr = true;
        break;
      case 5:
        // IDR
        unit.idr = true;
        break;
      case 6:
        // SEI
        break;
      case 7:
        // SPS
        unit.sps = _sps2.default.parseSPS(unit.body);
        break;
      case 8:
        // PPS
        unit.pps = true;
        break;
      case 9:
        // AUD
        break;
      default:
        break;
    }
  }

  static getHeaderPositionAnnexB(buffer) {
    // seperate
    let pos = buffer.position;
    let headerLength = 0;
    while (headerLength !== 3 && headerLength !== 4 && pos < buffer.length - 4) {
      if (buffer.dataview.getInt16(pos) === 0) {
        if (buffer.dataview.getInt16(pos + 2) === 1) {
          // 0x000001
          headerLength = 4;
        } else if (buffer.dataview.getInt8(pos + 2) === 1) {
          headerLength = 3;
        } else {
          pos++;
        }
      } else {
        pos++;
      }
    }

    if (pos === buffer.length - 4) {
      if (buffer.dataview.getInt16(pos) === 0) {
        if (buffer.dataview.getInt16(pos + 2) === 1) {
          // 0x000001
          headerLength = 4;
        }
      } else {
        pos++;
        if (buffer.dataview.getInt16(pos) === 0 && buffer.dataview.getInt8(pos) === 1) {
          // 0x0000001
          headerLength = 3;
        } else {
          pos = buffer.length;
        }
      }
    }
    return { pos, headerLength };
  }

  static getAvcc(sps, pps) {
    let ret = new Uint8Array(sps.byteLength + pps.byteLength + 11);
    ret[0] = 0x01;
    ret[1] = sps[1];
    ret[2] = sps[2];
    ret[3] = sps[3];
    ret[4] = 255;
    ret[5] = 225;

    let offset = 6;

    ret.set(new Uint8Array([sps.byteLength >>> 8 & 0xff, sps.byteLength & 0xff]), offset);
    offset += 2;
    ret.set(sps, offset);
    offset += sps.byteLength;

    ret[offset] = 1;
    offset++;

    ret.set(new Uint8Array([pps.byteLength >>> 8 & 0xff, pps.byteLength & 0xff]), offset);
    offset += 2;
    ret.set(pps, offset);
    return ret;
  }
}

exports.default = Nalunit;

/***/ }),

/***/ "../xgplayer-codec/src/h264/nalunit/sps.js":
/*!*************************************************!*\
  !*** ../xgplayer-codec/src/h264/nalunit/sps.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _golomb = __webpack_require__(/*! ./golomb */ "../xgplayer-codec/src/h264/nalunit/golomb.js");

var _golomb2 = _interopRequireDefault(_golomb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SPSParser {
  static _ebsp2rbsp(uint8array) {
    let src = uint8array;
    let srcLength = src.byteLength;
    let dst = new Uint8Array(srcLength);
    let dstIdx = 0;

    for (let i = 0; i < srcLength; i++) {
      if (i >= 2) {
        if (src[i] === 0x03 && src[i - 1] === 0x00 && src[i - 2] === 0x00) {
          continue;
        }
      }
      dst[dstIdx] = src[i];
      dstIdx++;
    }

    return new Uint8Array(dst.buffer, 0, dstIdx);
  }

  static parseSPS(uint8array) {
    let rbsp = SPSParser._ebsp2rbsp(uint8array);
    let gb = new _golomb2.default(rbsp);

    gb.readByte();
    let profileIdc = gb.readByte();
    gb.readByte();
    let levelIdc = gb.readByte();
    gb.readUEG();

    let profile_string = SPSParser.getProfileString(profileIdc);
    let level_string = SPSParser.getLevelString(levelIdc);
    let chroma_format_idc = 1;
    let chroma_format = 420;
    let chroma_format_table = [0, 420, 422, 444];
    let bit_depth = 8;

    if (profileIdc === 100 || profileIdc === 110 || profileIdc === 122 || profileIdc === 244 || profileIdc === 44 || profileIdc === 83 || profileIdc === 86 || profileIdc === 118 || profileIdc === 128 || profileIdc === 138 || profileIdc === 144) {
      chroma_format_idc = gb.readUEG();
      if (chroma_format_idc === 3) {
        gb.readBits(1);
      }
      if (chroma_format_idc <= 3) {
        chroma_format = chroma_format_table[chroma_format_idc];
      }

      bit_depth = gb.readUEG() + 8;
      gb.readUEG();
      gb.readBits(1);
      if (gb.readBool()) {
        let scaling_list_count = chroma_format_idc !== 3 ? 8 : 12;
        for (let i = 0; i < scaling_list_count; i++) {
          if (gb.readBool()) {
            if (i < 6) {
              SPSParser._skipScalingList(gb, 16);
            } else {
              SPSParser._skipScalingList(gb, 64);
            }
          }
        }
      }
    }
    gb.readUEG();
    let pic_order_cnt_type = gb.readUEG();
    if (pic_order_cnt_type === 0) {
      gb.readUEG();
    } else if (pic_order_cnt_type === 1) {
      gb.readBits(1);
      gb.readSEG();
      gb.readSEG();
      let num_ref_frames_in_pic_order_cnt_cycle = gb.readUEG();
      for (let i = 0; i < num_ref_frames_in_pic_order_cnt_cycle; i++) {
        gb.readSEG();
      }
    }
    gb.readUEG();
    gb.readBits(1);

    let pic_width_in_mbs_minus1 = gb.readUEG();
    let pic_height_in_map_units_minus1 = gb.readUEG();

    let frame_mbs_only_flag = gb.readBits(1);
    if (frame_mbs_only_flag === 0) {
      gb.readBits(1);
    }
    gb.readBits(1);

    let frame_crop_left_offset = 0;
    let frame_crop_right_offset = 0;
    let frame_crop_top_offset = 0;
    let frame_crop_bottom_offset = 0;

    let frame_cropping_flag = gb.readBool();
    if (frame_cropping_flag) {
      frame_crop_left_offset = gb.readUEG();
      frame_crop_right_offset = gb.readUEG();
      frame_crop_top_offset = gb.readUEG();
      frame_crop_bottom_offset = gb.readUEG();
    }

    let par_width = 1,
        par_height = 1;
    let fps = 0,
        fps_fixed = true,
        fps_num = 0,
        fps_den = 0;

    let vui_parameters_present_flag = gb.readBool();
    if (vui_parameters_present_flag) {
      if (gb.readBool()) {
        // aspect_ratio_info_present_flag
        let aspect_ratio_idc = gb.readByte();
        let par_w_table = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2];
        let par_h_table = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];

        if (aspect_ratio_idc > 0 && aspect_ratio_idc < 16) {
          par_width = par_w_table[aspect_ratio_idc - 1];
          par_height = par_h_table[aspect_ratio_idc - 1];
        } else if (aspect_ratio_idc === 255) {
          par_width = gb.readByte() << 8 | gb.readByte();
          par_height = gb.readByte() << 8 | gb.readByte();
        }
      }

      if (gb.readBool()) {
        gb.readBool();
      }
      if (gb.readBool()) {
        gb.readBits(4);
        if (gb.readBool()) {
          gb.readBits(24);
        }
      }
      if (gb.readBool()) {
        gb.readUEG();
        gb.readUEG();
      }
      if (gb.readBool()) {
        let num_units_in_tick = gb.readBits(32);
        let time_scale = gb.readBits(32);
        fps_fixed = gb.readBool();

        fps_num = time_scale;
        fps_den = num_units_in_tick * 2;
        fps = fps_num / fps_den;
      }
    }

    let parScale = 1;
    if (par_width !== 1 || par_height !== 1) {
      parScale = par_width / par_height;
    }

    let crop_unit_x = 0,
        crop_unit_y = 0;
    if (chroma_format_idc === 0) {
      crop_unit_x = 1;
      crop_unit_y = 2 - frame_mbs_only_flag;
    } else {
      let sub_wc = chroma_format_idc === 3 ? 1 : 2;
      let sub_hc = chroma_format_idc === 1 ? 2 : 1;
      crop_unit_x = sub_wc;
      crop_unit_y = sub_hc * (2 - frame_mbs_only_flag);
    }

    let codec_width = (pic_width_in_mbs_minus1 + 1) * 16;
    let codec_height = (2 - frame_mbs_only_flag) * ((pic_height_in_map_units_minus1 + 1) * 16);

    codec_width -= (frame_crop_left_offset + frame_crop_right_offset) * crop_unit_x;
    codec_height -= (frame_crop_top_offset + frame_crop_bottom_offset) * crop_unit_y;

    let present_width = Math.ceil(codec_width * parScale);

    gb.destroy();
    gb = null;

    return {
      profile_string: profile_string,
      level_string: level_string,
      bit_depth: bit_depth,
      chroma_format: chroma_format,
      chroma_format_string: SPSParser.getChromaFormatString(chroma_format),

      frame_rate: {
        fixed: fps_fixed,
        fps: fps,
        fps_den: fps_den,
        fps_num: fps_num
      },

      par_ratio: {
        width: par_width,
        height: par_height
      },

      codec_size: {
        width: codec_width,
        height: codec_height
      },

      present_size: {
        width: present_width,
        height: codec_height
      }
    };
  }

  static _skipScalingList(gb, count) {
    let last_scale = 8,
        next_scale = 8;
    let delta_scale = 0;
    for (let i = 0; i < count; i++) {
      if (next_scale !== 0) {
        delta_scale = gb.readSEG();
        next_scale = (last_scale + delta_scale + 256) % 256;
      }
      last_scale = next_scale === 0 ? last_scale : next_scale;
    }
  }

  static getProfileString(profileIdc) {
    switch (profileIdc) {
      case 66:
        return 'Baseline';
      case 77:
        return 'Main';
      case 88:
        return 'Extended';
      case 100:
        return 'High';
      case 110:
        return 'High10';
      case 122:
        return 'High422';
      case 244:
        return 'High444';
      default:
        return 'Unknown';
    }
  }

  static getLevelString(levelIdc) {
    return (levelIdc / 10).toFixed(1);
  }

  static getChromaFormatString(chroma) {
    switch (chroma) {
      case 420:
        return '4:2:0';
      case 422:
        return '4:2:2';
      case 444:
        return '4:4:4';
      default:
        return 'Unknown';
    }
  }

  static toVideoMeta(spsConfig) {
    let meta = {};
    if (spsConfig && spsConfig.codec_size) {
      meta.codecWidth = spsConfig.codec_size.width;
      meta.codecHeight = spsConfig.codec_size.height;
      meta.presentWidth = spsConfig.present_size.width;
      meta.presentHeight = spsConfig.present_size.height;
    }

    meta.profile = spsConfig.profile_string;
    meta.level = spsConfig.level_string;
    meta.bitDepth = spsConfig.bit_depth;
    meta.chromaFormat = spsConfig.chroma_format;

    meta.parRatio = {
      width: spsConfig.par_ratio.width,
      height: spsConfig.par_ratio.height
    };

    meta.frameRate = spsConfig.frame_rate;

    let fpsDen = meta.frameRate.fps_den;
    let fpsNum = meta.frameRate.fps_num;
    meta.refSampleDuration = Math.floor(meta.timescale * (fpsDen / fpsNum));
    return meta;
  }
} /* eslint-disable camelcase  */
/* eslint-disable one-var  */
exports.default = SPSParser;

/***/ }),

/***/ "../xgplayer-demux/index.js":
/*!**********************************!*\
  !*** ../xgplayer-demux/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  // HLS
  M3U8Parser: __webpack_require__(/*! ./src/hls/demuxer/m3u8parser */ "../xgplayer-demux/src/hls/demuxer/m3u8parser.js").default,
  TsDemuxer: __webpack_require__(/*! ./src/hls/demuxer/ts */ "../xgplayer-demux/src/hls/demuxer/ts.js").default,
  Playlist: __webpack_require__(/*! ./src/hls/playlist */ "../xgplayer-demux/src/hls/playlist.js").default,
  FlvDemuxer: __webpack_require__(/*! ./src/flv/index */ "../xgplayer-demux/src/flv/index.js").default
};

/***/ }),

/***/ "../xgplayer-demux/src/flv/amf-parser.js":
/*!***********************************************!*\
  !*** ../xgplayer-demux/src/flv/amf-parser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

const DATA_TYPES = {
  NUMBER: 0,
  BOOLEAN: 1,
  STRING: 2,
  OBJECT: 3,
  MIX_ARRAY: 8,
  OBJECT_END: 9,
  STRICT_ARRAY: 10,
  DATE: 11,
  LONE_STRING: 12

  /**
   * meta信息解析
   */
};class AMFParser {
  constructor() {
    this.offset = 0;
    this.readOffset = this.offset;
  }

  resolve(meta, size) {
    if (size < 3) {
      throw new Error('not enough data for metainfo');
    }
    const metaData = {};
    const name = this.parseValue(meta);
    const value = this.parseValue(meta, size - name.bodySize);
    metaData[name.data] = value.data;

    this.resetStatus();
    return metaData;
  }

  resetStatus() {
    this.offset = 0;
    this.readOffset = this.offset;
  }

  parseString(buffer) {
    const dv = new DataView(buffer, this.readOffset);
    const strLen = dv.getUint16(0, !_xgplayerUtils.isLe);
    let str = '';
    if (strLen > 0) {
      str = _xgplayerUtils.UTF8.decode(new Uint8Array(buffer, this.readOffset + 2, strLen));
    } else {
      str = '';
    }
    let size = strLen + 2;
    this.readOffset += size;
    return {
      data: str,
      bodySize: strLen + 2
    };
  }

  parseDate(buffer, size) {
    const dv = new DataView(buffer, this.readOffset, size);
    let ts = dv.getFloat64(0, !_xgplayerUtils.isLe);
    const timeOffset = dv.getInt16(8, !_xgplayerUtils.isLe);
    ts += timeOffset * 60 * 1000;

    this.readOffset += 10;
    return {
      data: new Date(ts),
      bodySize: 10
    };
  }

  parseObject(buffer, size) {
    const name = this.parseString(buffer, size);
    const value = this.parseValue(buffer, size - name.bodySize);
    return {
      data: {
        name: name.data,
        value: value.data
      },
      bodySize: name.bodySize + value.bodySize,
      isObjEnd: value.isObjEnd
    };
  }

  parseLongString(buffer) {
    const dv = new DataView(buffer, this.readOffset);
    const strLen = dv.getUint32(0, !_xgplayerUtils.isLe);
    let str = '';
    if (strLen > 0) {
      str = _xgplayerUtils.UTF8.decode(new Uint8Array(buffer, this.readOffset + 2, strLen));
    } else {
      str = '';
    }
    // const size = strLen + 4;
    this.readOffset += strLen + 4;
    return {
      data: str,
      bodySize: strLen + 4
    };
  }

  /**
   * 解析meta中的变量
   */
  parseValue(data, size) {
    let buffer = new ArrayBuffer();
    if (data instanceof ArrayBuffer) {
      buffer = data;
    } else {
      buffer = data.buffer;
    }
    const {
      NUMBER,
      BOOLEAN,
      STRING,
      OBJECT,
      MIX_ARRAY,
      OBJECT_END,
      STRICT_ARRAY,
      DATE,
      LONE_STRING
    } = DATA_TYPES;
    const dataView = new DataView(buffer, this.readOffset, size);
    let isObjEnd = false;
    const type = dataView.getUint8(0);
    let offset = 1;
    this.readOffset += 1;
    let value = null;

    switch (type) {
      case NUMBER:
        {
          value = dataView.getFloat64(1, !_xgplayerUtils.isLe);
          this.readOffset += 8;
          offset += 8;
          break;
        }
      case BOOLEAN:
        {
          const boolNum = dataView.getUint8(1);
          value = !!boolNum;
          this.readOffset += 1;
          offset += 1;
          break;
        }
      case STRING:
        {
          const str = this.parseString(buffer);
          value = str.data;
          offset += str.bodySize;
          break;
        }
      case OBJECT:
        {
          value = {};
          let objEndSize = 0;
          if (dataView.getUint32(size - 4, !_xgplayerUtils.isLe) & 0x00FFFFFF) {
            objEndSize = 3;
          }
          // this.readOffset += offset - 1;
          while (offset < size - 4) {
            const amfObj = this.parseObject(buffer, size - offset - objEndSize);
            if (amfObj.isObjectEnd) {
              break;
            }
            value[amfObj.data.name] = amfObj.data.value;
            offset += amfObj.bodySize;
          }
          if (offset <= size - 3) {
            const mark = dataView.getUint32(offset - 1, !_xgplayerUtils.isLe) & 0x00FFFFFF;
            if (mark === 9) {
              this.readOffset += 3;
              offset += 3;
            }
          }
          break;
        }
      case MIX_ARRAY:
        {
          value = {};
          offset += 4;
          this.readOffset += 4;
          let objEndSize = 0;
          if ((dataView.getUint32(size - 4, !_xgplayerUtils.isLe) & 0x00FFFFFF) === 9) {
            objEndSize = 3;
          }

          while (offset < size - 8) {
            const amfVar = this.parseObject(buffer, size - offset - objEndSize);
            if (amfVar.isObjectEnd) {
              break;
            }
            value[amfVar.data.name] = amfVar.data.value;
            offset += amfVar.bodySize;
          }
          if (offset <= size - 3) {
            const marker = dataView.getUint32(offset - 1, !_xgplayerUtils.isLe) & 0x00FFFFFF;
            if (marker === 9) {
              offset += 3;
              this.readOffset += 3;
            }
          }
          break;
        }

      case OBJECT_END:
        {
          value = null;
          isObjEnd = true;
          break;
        }

      case STRICT_ARRAY:
        {
          value = [];
          const arrLength = dataView.getUint32(1, !_xgplayerUtils.isLe);
          offset += 4;
          this.readOffset += 4;
          for (let i = 0; i < arrLength; i++) {
            const script = this.parseValue(buffer, size - offset);
            value.push(script.data);
            offset += script.bodySize;
          }
          break;
        }

      case DATE:
        {
          const date = this.parseDate(buffer, size - 1);
          value = date.data;
          offset += date.bodySize;
          break;
        }

      case LONE_STRING:
        {
          const longStr = this.parseLongString(buffer, size - 1);
          value = longStr.data;
          offset += longStr.bodySize;
          break;
        }

      default:
        {
          offset = size;
        }
    }

    return {
      data: value,
      bodySize: offset,
      isObjEnd: isObjEnd
    };
  }
}
exports.default = AMFParser;

/***/ }),

/***/ "../xgplayer-demux/src/flv/index.js":
/*!******************************************!*\
  !*** ../xgplayer-demux/src/flv/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

var _xgplayerCodec = __webpack_require__(/*! xgplayer-codec */ "../xgplayer-codec/index.js");

var _xgplayerBuffer = __webpack_require__(/*! xgplayer-buffer */ "../xgplayer-buffer/index.js");

var _amfParser = __webpack_require__(/*! ./amf-parser */ "../xgplayer-demux/src/flv/amf-parser.js");

var _amfParser2 = _interopRequireDefault(_amfParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEMUX_EVENTS = _xgplayerUtils.EVENTS.DEMUX_EVENTS;

class FlvDemuxer {
  constructor() {
    this._firstFragmentLoaded = false;
    this._trackNum = 0;
    this._hasScript = false;
  }

  init() {
    this.on(DEMUX_EVENTS.DEMUX_START, this.doParseFlv.bind(this));
  }

  /**
   * if the flv head is valid
   * @param data
   * @returns {boolean}
   */
  static isFlvFile(data) {
    return !(data[0] !== 0x46 || data[1] !== 0x4C || data[2] !== 0x56 || data[3] !== 0x01);
  }

  /**
   * If the stream has audio or video.
   * @param {number} streamFlag - Data from the stream which is define whether the audio / video track is exist.
   */
  static getPlayType(streamFlag) {
    const result = {
      hasVideo: false,
      hasAudio: false
    };

    if (streamFlag & 0x01 > 0) {
      result.hasVideo = true;
    }

    if (streamFlag & 0x04 > 0) {
      result.hasAudio = true;
    }

    return result;
  }

  doParseFlv() {
    if (!this._firstFragmentLoaded) {
      if (this.loaderBuffer.length < 13) {
        return;
      }
      const header = this.loaderBuffer.shift(13);
      this.parseFlvHeader(header);
      this.doParseFlv(); // 递归调用，继续解析flv流
    } else {
      if (this.loaderBuffer.length < 11) {
        return;
      }
      let chunk;

      let loopMax = 100000; // 防止死循环产生
      do {
        chunk = this._parseFlvTag();
      } while (chunk && loopMax-- > 0);

      this.emit(DEMUX_EVENTS.DEMUX_COMPLETE);
    }
  }

  parseFlvHeader(header) {
    if (!FlvDemuxer.isFlvFile(header)) {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, new Error('invalid flv file'));
      this.doParseFlv();
    } else {
      this._firstFragmentLoaded = true;
      const playType = FlvDemuxer.getPlayType(header[4]);

      if (playType.hasVideo) {
        this.initVideoTrack();
      }

      if (playType.hasAudio) {
        this.initAudioTrack();
      }
    }
    this.doParseFlv();
  }

  /**
   * init default video track configs
   */
  initVideoTrack() {
    this._trackNum++;
    let videoTrack = new _xgplayerBuffer.VideoTrack();
    videoTrack.meta = new _xgplayerUtils.VideoTrackMeta();
    videoTrack.id = videoTrack.meta.id = this._trackNum;

    this.tracks.videoTrack = videoTrack;
  }

  /**
   * init default audio track configs
   */
  initAudioTrack() {
    this._trackNum++;
    let audioTrack = new _xgplayerBuffer.AudioTrack();
    audioTrack.meta = new _xgplayerUtils.AudioTrackMeta();
    audioTrack.id = audioTrack.meta.id = this._trackNum;

    this.tracks.audioTrack = audioTrack;
  }

  /**
   * Package the data as the following data structure
   * {
   *    data: Uint8Array. the Stream data.
   *    info: The first byte info of the Tag.
   *    tagType: 8、9、18
   *    timeStamp: the timestemp
   * }
   */
  _parseFlvTag() {
    if (this.loaderBuffer.length < 11) {
      return null;
    }
    let chunk = this._parseFlvTagHeader();
    if (chunk) {
      this._processChunk(chunk);
    }
    return chunk;
  }

  /**
   * Parse the 11 byte tag Header
   */
  _parseFlvTagHeader() {
    let offset = 0;
    let chunk = {};

    let tagType = this.loaderBuffer.toInt(offset, 1);
    offset += 1;

    // 2 bit FMS reserved, 1 bit filtered, 5 bit tag type
    chunk.filtered = (tagType & 32) >>> 5;
    chunk.tagType = tagType & 31;

    // 3 Byte datasize
    chunk.datasize = this.loaderBuffer.toInt(offset, 3);
    offset += 3;

    if (chunk.tagType !== 8 && chunk.tagType !== 9 && chunk.tagType !== 11 && chunk.tagType !== 18 || this.loaderBuffer.toInt(8, 3) !== 0) {
      if (this.loaderBuffer && this.loaderBuffer.length > 0) {
        this.loaderBuffer.shift(1);
      }
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error('tagType ' + chunk.tagType), false);
      return null;
    }

    if (this.loaderBuffer.length < chunk.datasize + 15) {
      return null;
    }

    // read the data.
    this.loaderBuffer.shift(4);

    // 3 Byte timestamp
    let timestamp = this.loaderBuffer.toInt(0, 3);
    this.loaderBuffer.shift(3);

    // 1 Byte timestampExt
    let timestampExt = this.loaderBuffer.shift(1)[0];
    if (timestampExt > 0) {
      timestamp += timestampExt * 0x1000000;
    }

    chunk.dts = timestamp;

    // streamId
    this.loaderBuffer.shift(3);
    return chunk;
  }

  _processChunk(chunk) {
    switch (chunk.tagType) {
      case 18:
        this._parseScriptData(chunk);
        break;
      case 8:
        this._parseAACData(chunk);
        break;
      case 9:
        this._parseHevcData(chunk);
        break;
      case 11:
        // for some CDN that did not process the currect RTMP messages
        this.loaderBuffer.shift(3);
        break;
      default:
        this.loaderBuffer.shift(1);
    }
  }

  /**
   * parse flv script data
   * @param chunk
   * @private
   */
  _parseScriptData(chunk) {
    let audioTrack = this.tracks.audioTrack;
    let videoTrack = this.tracks.videoTrack;

    let data = this.loaderBuffer.shift(chunk.datasize);

    const info = new _amfParser2.default().resolve(data, data.length);

    const onMetaData = this._context.onMetaData = info ? info.onMetaData : undefined;

    // fill mediaInfo
    this._context.mediaInfo.duration = onMetaData.duration;
    this._context.mediaInfo.hasVideo = onMetaData.hasVideo;
    this._context.mediaInfo.hsaAudio = onMetaData.hasAudio;

    let validate = this._datasizeValidator(chunk.datasize);
    if (validate) {
      this.emit(DEMUX_EVENTS.MEDIA_INFO);
      this._hasScript = true;
    }

    // Edit default meta.
    if (audioTrack && !audioTrack.hasSpecificConfig) {
      let meta = audioTrack.meta;
      if (onMetaData.audiosamplerate) {
        meta.sampleRate = onMetaData.audiosamplerate;
      }

      if (onMetaData.audiochannels) {
        meta.channelCount = onMetaData.audiochannels;
      }

      switch (onMetaData.audiosamplerate) {
        case 44100:
          meta.sampleRateIndex = 4;
          break;
        case 22050:
          meta.sampleRateIndex = 7;
          break;
        case 11025:
          meta.sampleRateIndex = 10;
          break;
      }
    }
    if (videoTrack && !videoTrack.hasSpecificConfig) {
      let meta = videoTrack.meta;
      if (typeof onMetaData.framerate === 'number') {
        let fpsNum = Math.floor(onMetaData.framerate * 1000);
        if (fpsNum > 0) {
          let fps = fpsNum / 1000;
          if (!meta.frameRate) {
            meta.frameRate = {};
          }
          meta.frameRate.fixed = true;
          meta.frameRate.fps = fps;
          meta.frameRate.fps_num = fpsNum;
          meta.frameRate.fps_den = 1000;
        }
      }
    }
  }

  _aacSequenceHeaderParser(data) {
    let ret = {};
    ret.hasSpecificConfig = true;
    ret.objectType = data[1] >>> 3;
    ret.sampleRateIndex = (data[1] & 7) << 1 | data[2] >>> 7;
    ret.audiosamplerate = this._switchAudioSampleRate(ret.sampleRateIndex);
    ret.channelCount = (data[2] & 120) >>> 3;
    ret.frameLength = (data[2] & 4) >>> 2;
    ret.dependsOnCoreCoder = (data[2] & 2) >>> 1;
    ret.extensionFlagIndex = data[2] & 1;

    ret.codec = `mp4a.40.${ret.objectType}`;
    let userAgent = window.navigator.userAgent.toLowerCase();
    let extensionSamplingIndex;

    let config;
    let samplingIndex = ret.sampleRateIndex;

    if (userAgent.indexOf('firefox') !== -1) {
      // firefox: use SBR (HE-AAC) if freq less than 24kHz
      if (ret.sampleRateIndex >= 6) {
        ret.objectType = 5;
        config = new Array(4);
        extensionSamplingIndex = samplingIndex - 3;
      } else {
        // use LC-AAC
        ret.objectType = 2;
        config = new Array(2);
        extensionSamplingIndex = samplingIndex;
      }
    } else if (userAgent.indexOf('android') !== -1 || _xgplayerUtils.sniffer.browser === 'safari') {
      // android: always use LC-AAC
      ret.objectType = 2;
      config = new Array(2);
      extensionSamplingIndex = samplingIndex;
    } else {
      // for other browsers, e.g. chrome...
      // Always use HE-AAC to make it easier to switch aac codec profile
      ret.objectType = 5;
      extensionSamplingIndex = ret.sampleRateIndex;
      config = new Array(4);

      if (ret.sampleRateIndex >= 6) {
        extensionSamplingIndex = ret.sampleRateIndex - 3;
      } else if (ret.channelCount === 1) {
        // Mono channel
        ret.objectType = 2;
        config = new Array(2);
        extensionSamplingIndex = ret.sampleRateIndex;
      }
    }

    config[0] = ret.objectType << 3;
    config[0] |= (ret.sampleRateIndex & 0x0F) >>> 1;
    config[1] = (ret.sampleRateIndex & 0x0F) << 7;
    config[1] |= (ret.channelCount & 0x0F) << 3;
    if (ret.objectType === 5) {
      config[1] |= (extensionSamplingIndex & 0x0F) >>> 1;
      config[2] = (extensionSamplingIndex & 0x01) << 7;
      // extended audio object type: force to 2 (LC-AAC)
      config[2] |= 2 << 2;
      config[3] = 0;
    }
    ret.config = config;
    return ret;
  }

  _parseAACData(chunk) {
    let track = this.tracks.audioTrack;
    if (!track) {
      return;
    }

    let meta = track.meta;

    if (!meta) {
      track.meta = new _xgplayerUtils.AudioTrackMeta();
      meta = track.meta;
    }

    let info = this.loaderBuffer.shift(1)[0];

    chunk.data = this.loaderBuffer.shift(chunk.datasize - 1);

    let format = (info & 240) >>> 4;

    track.format = format;

    if (format !== 10) {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, new Error(`invalid audio format: ${format}`));
    }

    if (format === 10 && !this._hasAudioSequence) {
      meta.sampleRate = this._switchAudioSamplingFrequency(info);
      meta.sampleRateIndex = (info & 12) >>> 2;
      meta.frameLenth = (info & 2) >>> 1;
      meta.channelCount = info & 1;
      meta.refSampleDuration = Math.floor(1024 / meta.audioSampleRate * meta.timescale);
    }

    let audioSampleRate = meta.audioSampleRate;
    let audioSampleRateIndex = meta.sampleRateIndex;
    let refSampleDuration = meta.refSampleDuration;

    delete chunk.tagType;
    let validate = this._datasizeValidator(chunk.datasize);

    if (chunk.data[0] === 0) {
      // AAC Sequence Header
      let aacHeader = this._aacSequenceHeaderParser(chunk.data);
      audioSampleRate = aacHeader.audiosamplerate || meta.audioSampleRate;
      audioSampleRateIndex = aacHeader.sampleRateIndex || meta.sampleRateIndex;
      refSampleDuration = Math.floor(1024 / audioSampleRate * meta.timescale);

      meta.channelCount = aacHeader.channelCount;
      meta.sampleRate = audioSampleRate;
      meta.sampleRateIndex = audioSampleRateIndex;
      meta.refSampleDuration = refSampleDuration;
      meta.duration = this._context.mediaInfo.duration * meta.timescale;
      meta.config = aacHeader.config;
      meta.objectType = aacHeader.objectType;

      const audioMedia = this._context.mediaInfo.audio;

      // fill audio media info
      audioMedia.codec = aacHeader.codec;
      audioMedia.channelCount = aacHeader.channelCount;
      audioMedia.sampleRate = audioSampleRate;
      audioMedia.sampleRateIndex = aacHeader.audioSampleRateIndex;

      if (this._hasScript && !this._hasAudioSequence) {
        this.emit(DEMUX_EVENTS.METADATA_PARSED, 'audio');
      } else if (this._hasScript && this._hasAudioSequence) {
        this.emit(DEMUX_EVENTS.METADATA_PARSED, 'audio');
        this.emit(DEMUX_EVENTS.AUDIO_METADATA_CHANGE);
        // this.emit(DEMUX_EVENTS.METADATA_PARSED, 'audio')
      }
      this._hasAudioSequence = true;

      this._metaChange = true;
    } else {
      if (this._metaChange) {
        chunk.options = {
          meta: track.meta
        };
        this._metaChange = false;
      }

      chunk.data = chunk.data.slice(1, chunk.data.length);
      track.samples.push(chunk);
    }
    if (!validate) {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error('TAG length error at ' + chunk.datasize), false);
      // this.logger.warn(this.TAG, error.message)
    }
  }

  /**
   * parse hevc/avc video data
   * @param chunk
   * @private
   */
  _parseHevcData(chunk) {
    // header
    let info = this.loaderBuffer.shift(1)[0];
    chunk.frameType = (info & 0xf0) >>> 4;
    chunk.isKeyframe = chunk.frameType === 1;
    // let tempCodecID = this.tracks.videoTrack.codecID
    let codecID = info & 0x0f;
    this.tracks.videoTrack.codecID = codecID;

    // hevc和avc的header解析方式一样
    chunk.avcPacketType = this.loaderBuffer.shift(1)[0];
    chunk.cts = this.loaderBuffer.toInt(0, 3);
    this.loaderBuffer.shift(3);

    // 12 for hevc, 7 for avc
    if (codecID === 12) {
      const data = this.loaderBuffer.shift(chunk.datasize - 5);
      chunk.data = data;

      if (Number.parseInt(chunk.avcPacketType) !== 0) {
        if (!this._datasizeValidator(chunk.datasize)) {
          this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error(`invalid video tag datasize: ${chunk.datasize}`), false);
        }
        let nalu = {};
        let r = 0;
        nalu.cts = chunk.cts;
        nalu.dts = chunk.dts;
        while (chunk.data.length > r) {
          let sizes = chunk.data.slice(Number.parseInt(r), 4 + r);
          nalu.size = sizes[3];
          nalu.size += sizes[2] * 256;
          nalu.size += sizes[1] * 256 * 256;
          nalu.size += sizes[0] * 256 * 256 * 256;
          r += 4;
          nalu.data = chunk.data.slice(Number.parseInt(r), nalu.size + r);
          r += nalu.size;
          this.tracks.videoTrack.samples.push(nalu);
          this.emit(DEMUX_EVENTS.METADATA_PARSED, 'video');
        }
      } else if (Number.parseInt(chunk.avcPacketType) === 0) {
        if (!this._datasizeValidator(chunk.datasize)) {
          this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error(`invalid video tag datasize: ${chunk.datasize}`), false);
        } else {
          this.emit(DEMUX_EVENTS.METADATA_PARSED, 'video');
        }
      }
    } else if (codecID === 7) {
      let data = this.loaderBuffer.shift(chunk.datasize - 5);
      if (data[4] === 0 && data[5] === 0 && data[6] === 0 && data[7] === 1) {
        let avcclength = 0;
        for (let i = 0; i < 4; i++) {
          avcclength = avcclength * 256 + data[i];
        }
        avcclength -= 4;
        data = data.slice(4, data.length);
        data[3] = avcclength % 256;
        avcclength = (avcclength - data[3]) / 256;
        data[2] = avcclength % 256;
        avcclength = (avcclength - data[2]) / 256;
        data[1] = avcclength % 256;
        data[0] = (avcclength - data[1]) / 256;
      }

      chunk.data = data;
      // If it is AVC sequece Header.
      if (chunk.avcPacketType === 0) {
        this._avcSequenceHeaderParser(chunk.data);
        let validate = this._datasizeValidator(chunk.datasize);
        if (validate) {
          if (this._hasScript && !this._hasVideoSequence) {
            this.emit(DEMUX_EVENTS.METADATA_PARSED, 'video');
          } else if (this._hasScript && this._hasVideoSequence) {
            this.emit(DEMUX_EVENTS.METADATA_PARSED, 'audio');
            this.emit(DEMUX_EVENTS.VIDEO_METADATA_CHANGE);
            // this.emit(DEMUX_EVENTS.METADATA_PARSED, 'video')
          }
          this._hasVideoSequence = true;
        }
        this._metaChange = true;
      } else {
        if (!this._datasizeValidator(chunk.datasize)) {
          this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error(`invalid video tag datasize: ${chunk.datasize}`), false);
          return;
        }
        if (this._metaChange) {
          chunk.options = {
            meta: Object.assign({}, this.tracks.videoTrack.meta)
          };
          this._metaChange = false;
        }
        this.tracks.videoTrack.samples.push(chunk);
        // this.emit(DEMUX_EVENTS.DEMUX_COMPLETE)
      }
    } else {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error(`video codeid is ${codecID}`), false);
      chunk.data = this.loaderBuffer.shift(chunk.datasize - 1);
      if (!this._datasizeValidator(chunk.datasize)) {
        this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error(`invalid video tag datasize: ${chunk.datasize}`), false);
      }
      this.tracks.videoTrack.samples.push(chunk);
      this.emit(DEMUX_EVENTS.DEMUX_COMPLETE);
    }
    delete chunk.tagType;
  }

  /**
   * parse avc metadata
   * @param data
   * @private
   */
  _avcSequenceHeaderParser(data) {
    let track = this.tracks.videoTrack;

    if (!track) {
      return;
    }

    let offset = 0;

    if (!track.meta) {
      track.meta = new _xgplayerUtils.VideoTrackMeta();
    }
    let meta = track.meta;

    meta.configurationVersion = data[0];
    meta.avcProfileIndication = data[1];
    meta.profileCompatibility = data[2];
    meta.avcLevelIndication = data[3] / 10;
    meta.nalUnitLength = (data[4] & 0x03) + 1;

    let numOfSps = data[5] & 0x1f;
    offset = 6;
    let config = {};

    // parse SPS
    for (let i = 0; i < numOfSps; i++) {
      let size = data[offset] * 255 + data[offset + 1];
      offset += 2;

      let sps = new Uint8Array(size);
      for (let j = 0; j < size; j++) {
        sps[j] = data[offset + j];
      }

      // codec string
      let codecString = 'avc1.';
      for (let j = 1; j < 4; j++) {
        let h = sps[j].toString(16);
        if (h.length < 2) {
          h = '0' + h;
        }
        codecString += h;
      }

      meta.codec = codecString;

      offset += size;
      this.tracks.videoTrack.meta.sps = sps;
      config = _xgplayerCodec.SpsParser.parseSPS(sps);
    }

    let numOfPps = data[offset];

    offset++;

    for (let i = 0; i < numOfPps; i++) {
      let size = data[offset] * 255 + data[offset + 1];
      offset += 2;
      let pps = new Uint8Array(size);
      for (let j = 0; j < size; j++) {
        pps[j] = data[offset + j];
      }
      offset += size;
      this.tracks.videoTrack.meta.pps = pps;
    }

    Object.assign(meta, _xgplayerCodec.SpsParser.toVideoMeta(config));

    // fill video media info
    const videoMedia = this._context.mediaInfo.video;

    videoMedia.codec = meta.codec;
    videoMedia.profile = meta.profile;
    videoMedia.level = meta.level;
    videoMedia.chromaFormat = meta.chromaFormat;
    videoMedia.frameRate = meta.frameRate;
    videoMedia.parRatio = meta.parRatio;
    videoMedia.width = videoMedia.width === meta.presentWidth ? videoMedia.width : meta.presentWidth;
    videoMedia.height = videoMedia.height === meta.presentHeight ? videoMedia.width : meta.presentHeight;

    meta.duration = this._context.mediaInfo.duration * meta.timescale;
    meta.avcc = new Uint8Array(data.length);
    meta.avcc.set(data);
    track.meta = meta;
  }

  /**
   * choose audio sample rate
   * @param samplingFrequencyIndex
   * @returns {number}
   * @private
   */
  _switchAudioSampleRate(samplingFrequencyIndex) {
    let samplingFrequencyList = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350];
    return samplingFrequencyList[samplingFrequencyIndex];
  }

  /**
   * choose audio sampling frequence
   * @param info
   * @returns {number}
   * @private
   */
  _switchAudioSamplingFrequency(info) {
    let samplingFrequencyIndex = (info & 12) >>> 2;
    let samplingFrequencyList = [5500, 11025, 22050, 44100, 48000];
    return samplingFrequencyList[samplingFrequencyIndex];
  }

  /**
   * choose audio channel count
   * @param info
   * @returns {number}
   * @private
   */
  _switchAudioChannel(info) {
    let sampleTrackNumIndex = info & 1;
    let sampleTrackNumList = [1, 2];
    return sampleTrackNumList[sampleTrackNumIndex];
  }

  /**
   * check datasize is valid use 4 Byte after current tag
   * @param datasize
   * @returns {boolean}
   * @private
   */
  _datasizeValidator(datasize) {
    let datasizeConfirm = this.loaderBuffer.toInt(0, 4);
    this.loaderBuffer.shift(4);
    return datasizeConfirm === datasize + 11;
  }

  get loaderBuffer() {
    const buffer = this._context.getInstance('LOADER_BUFFER');
    if (buffer) {
      return buffer;
    } else {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, new Error('找不到 loaderBuffer 实例'));
    }
  }

  get tracks() {
    return this._context.getInstance('TRACKS');
  }

  get logger() {
    return this._context.getInstance('LOGGER');
  }
}

exports.default = FlvDemuxer;

/***/ }),

/***/ "../xgplayer-demux/src/hls/demuxer/m3u8parser.js":
/*!*******************************************************!*\
  !*** ../xgplayer-demux/src/hls/demuxer/m3u8parser.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Reference: https://tools.ietf.org/html/rfc8216#section-4.3
 */
class M3U8Parser {
  static parse(text, baseurl = '') {
    let ret = {
      duration: 0
    };
    if (!text || !text.split) {
      return;
    }
    let refs = text.split(/\r|\n/);
    refs = refs.filter(ref => {
      return ref;
    });
    let ref = refs.shift();
    if (!ref.match('#EXTM3U')) {
      throw new Error(`Invalid m3u8 file: not "#EXTM3U"`);
      return null;
    }
    ref = refs.shift();
    while (ref) {
      let refm = ref.match(/#(.[A-Z|-]*):(.*)/);
      let refd = ref.match(/#(.[A-Z|-]*)/);
      if (refd && refm && refm.length > 2) {
        switch (refm[1]) {
          case 'EXT-X-VERSION':
            ret.version = parseInt(refm[2]);
            break;
          case 'EXT-X-MEDIA-SEQUENCE':
            ret.sequence = parseInt(refm[2]);
            break;
          case 'EXT-X-TARGETDURATION':
            ret.targetduration = parseFloat(refm[2]);
            break;
          case 'EXTINF':
            M3U8Parser.parseFrag(refm, refs, ret, baseurl);
            break;
          case 'EXT-X-KEY':
            M3U8Parser.parseDecrypt(refm[2], ret);
            break;
          default:
            break;
        }
      }if (refd && refd.length > 1) {
        switch (refd[1]) {
          case 'EXT-X-DISCONTINUITY':
            ref = refs.shift();
            let refm = ref.match(/#(.[A-Z|-]*):(.*)/);
            if (refm.length > 2 && refm[1] === 'EXTINF') {
              M3U8Parser.parseFrag(refm, refs, ret, baseurl, true);
            }
            break;
          default:
            break;
        }
      }
      ref = refs.shift();
    }
    return ret;
  }

  static parseFrag(refm, refs, ret, baseurl, discontinue) {
    if (!ret.frags) {
      ret.frags = [];
    }

    let freg = {
      start: ret.duration,
      duration: parseFloat(refm[2]) * 1000
    };

    ret.duration += freg.duration;
    let nextline = refs.shift();
    if (nextline.match(/#(.*):(.*)/)) {
      nextline = refs.shift();
    }
    if (nextline.length > 0 && nextline.charAt(0) === '/' && baseurl.match(/.*\/\/.*\.\w+/g)) {
      baseurl = baseurl.match(/.*\/\/.*\.\w+/g)[0];
    }
    if (nextline.match(/.*:\/\/.*/)) {
      freg.url = nextline;
    } else {
      freg.url = baseurl + nextline;
    }
    freg.discontinue = discontinue;
    ret.frags.push(freg);
  }

  static parseURL(url) {
    let baseurl = '';
    let urls = url.match(/(.*\/).*\.m3u8/);
    if (urls && urls.length > 0) {
      for (let i = 0; i < urls.length; i++) {
        if (urls[i].match(/.*\/$/g) && urls[i].length > baseurl.length) {
          baseurl = urls[i];
        }
      }
    }
    return baseurl;
  }

  static parseDecrypt(refm, ret) {
    ret.encrypt = {};
    let refs = refm.split(',');
    for (let i in refs) {
      let cmd = refs[i];
      if (cmd.match(/METHOD=(.*)/)) {
        ret.encrypt.method = cmd.match(/METHOD=(.*)/)[1];
      }
      if (cmd.match(/URI="(.*)"/)) {
        ret.encrypt.uri = cmd.match(/URI="(.*)"/)[1];
      }

      if (cmd.match(/IV=0x(.*)/)) {
        let iv = cmd.match(/IV=0x(.*)/)[1];
        let length = Math.ceil(iv.length / 2);
        ret.encrypt.ivb = new Uint8Array(length);
        for (let i = length - 1; i >= 0; i--) {
          let im = parseInt(iv.substr(i * 2, 2), 16);
          ret.encrypt.ivb[i] = im;
        }
        ret.encrypt.iv = iv;
      }
    };
  }
}

exports.default = M3U8Parser;

/***/ }),

/***/ "../xgplayer-demux/src/hls/demuxer/ts.js":
/*!***********************************************!*\
  !*** ../xgplayer-demux/src/hls/demuxer/ts.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerCodec = __webpack_require__(/*! xgplayer-codec */ "../xgplayer-codec/index.js");

var _xgplayerBuffer = __webpack_require__(/*! xgplayer-buffer */ "../xgplayer-buffer/index.js");

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

const DEMUX_EVENTS = _xgplayerUtils.EVENTS.DEMUX_EVENTS;
const StreamType = {
  0x01: ['video', 'MPEG-1'],
  0x02: ['video', 'MPEG-2'],
  0x1b: ['video', 'AVC.H264'],
  0xea: ['video', 'VC-1'],
  0x03: ['audio', 'MPEG-1'],
  0x04: ['audio', 'MPEG-2'],
  0x0f: ['audio', 'MPEG-2.AAC'],
  0x11: ['audio', 'MPEG-4.AAC'],
  0x80: ['audio', 'LPCM'],
  0x81: ['audio', 'AC3'],
  0x06: ['audio', 'AC3'],
  0x82: ['audio', 'DTS'],
  0x83: ['audio', 'Dolby TrueHD'],
  0x84: ['audio', 'AC3-Plus'],
  0x85: ['audio', 'DTS-HD'],
  0x86: ['audio', 'DTS-MA'],
  0xa1: ['audio', 'AC3-Plus-SEC'],
  0xa2: ['audio', 'DTS-HD-SEC']
};

class TsDemuxer {
  constructor(configs) {
    this.configs = Object.assign({}, configs);
    this.demuxing = false;
    this.pat = [];
    this.pmt = [];
    this._hasVideoMeta = false;
    this._hasAudioMeta = false;
  }

  init() {
    this.on(DEMUX_EVENTS.DEMUX_START, this.demux.bind(this));
  }

  demux(frag) {
    if (this.demuxing) {
      return;
    }

    let buffer = this.inputBuffer;
    let frags = { pat: [], pmt: [] };
    let peses = {};

    // Read TS segment
    while (buffer.length >= 188) {
      if (buffer.length >= 1 && buffer.array[0][buffer.offset] !== 71) {
        this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error(`Untrust sync code: ${buffer.array[0][buffer.offset]}, try to recover;`), false);
      }
      while (buffer.length >= 1 && buffer.array[0][buffer.offset] !== 71) {
        buffer.shift(1);
      }
      let buf = buffer.shift(188);
      // console.log(buf);
      let tsStream = new _xgplayerUtils.Stream(buf.buffer);
      let ts = {};
      TsDemuxer.read(tsStream, ts, frags);
      if (ts.pes) {
        if (!peses[ts.header.pid]) {
          peses[ts.header.pid] = [];
        }
        peses[ts.header.pid].push(ts.pes);
        ts.pes.ES.buffer = [ts.pes.ES.buffer];
      } else if (peses[ts.header.pid]) {
        peses[ts.header.pid][peses[ts.header.pid].length - 1].ES.buffer.push(ts.payload.stream);
      }
    }

    let AudioOptions = frag;
    let VideoOptions = frag;

    // Get Frames data
    for (let i = 0; i < Object.keys(peses).length; i++) {
      let epeses = peses[Object.keys(peses)[i]];
      for (let j = 0; j < epeses.length; j++) {
        epeses[j].id = Object.keys(peses)[i];
        epeses[j].ES.buffer = TsDemuxer.Merge(epeses[j].ES.buffer);
        if (epeses[j].type === 'audio') {
          this.pushAudioSample(epeses[j], AudioOptions);
          AudioOptions = {};
        } else if (epeses[j].type === 'video') {
          this.pushVideoSample(epeses[j], VideoOptions);
          VideoOptions = {};
        }
      }
    }

    if (this._hasAudioMeta) {
      this.emit(DEMUX_EVENTS.DEMUX_COMPLETE, 'audio');
    }
    if (this._hasVideoMeta) {
      this.emit(DEMUX_EVENTS.DEMUX_COMPLETE, 'video');
    }
  }

  pushAudioSample(pes, options) {
    let track;
    if (!this._tracks.audioTrack) {
      this._tracks.audioTrack = new _xgplayerBuffer.AudioTrack();
      track = this._tracks.audioTrack;
    } else {
      track = this._tracks.audioTrack;
    }
    let meta = new _xgplayerUtils.AudioTrackMeta({
      audioSampleRate: pes.ES.frequence,
      sampleRate: pes.ES.frequence,
      channelCount: pes.ES.channel,
      codec: 'mp4a.40.' + pes.ES.audioObjectType,
      config: pes.ES.audioConfig,
      id: 2,
      sampleRateIndex: pes.ES.frequencyIndex
    });
    meta.refSampleDuration = Math.floor(1024 / meta.audioSampleRate * meta.timescale);

    let metaEqual = TsDemuxer.compaireMeta(track.meta, meta, true);

    if (!this._hasAudioMeta || !metaEqual) {
      track.meta = meta;
      this._hasAudioMeta = true;
      this.emit(DEMUX_EVENTS.METADATA_PARSED, 'audio');
    }

    let data = new Uint8Array(pes.ES.buffer.buffer.slice(pes.ES.buffer.position, pes.ES.buffer.length));
    let dts = parseInt(pes.pts / 90);
    let pts = parseInt(pes.pts / 90);
    let sample = new _xgplayerUtils.AudioTrackSample({ dts, pts, data, options });
    track.samples.push(sample);
  }

  pushVideoSample(pes, options) {
    let nals = _xgplayerCodec.Nalunit.getNalunits(pes.ES.buffer);
    let track;
    let meta = new _xgplayerUtils.VideoTrackMeta();
    if (!this._tracks.videoTrack) {
      this._tracks.videoTrack = new _xgplayerBuffer.VideoTrack();
      track = this._tracks.videoTrack;
    } else {
      track = this._tracks.videoTrack;
    }
    let sampleLength = 0;
    let sps = false;
    let pps = false;
    for (let i = 0; i < nals.length; i++) {
      let nal = nals[i];
      if (nal.sps) {
        sps = nal;
        track.sps = nal.body;
        meta.chromaFormat = sps.sps.chroma_format;
        meta.codec = 'avc1.';
        for (var j = 1; j < 4; j++) {
          var h = sps.body[j].toString(16);
          if (h.length < 2) {
            h = '0' + h;
          }
          meta.codec += h;
        }
        meta.codecHeight = sps.sps.codec_size.height;
        meta.codecWidth = sps.sps.codec_size.width;
        meta.frameRate = sps.sps.frame_rate;
        meta.id = 1;
        meta.level = sps.sps.level_string;
        meta.presentHeight = sps.sps.present_size.height;
        meta.presentWidth = sps.sps.present_size.width;
        meta.profile = sps.sps.profile_string;
        meta.refSampleDuration = Math.floor(meta.timescale * (sps.sps.frame_rate.fps_den / sps.sps.frame_rate.fps_num));
        meta.sarRatio = sps.sps.sar_ratio ? sps.sps.sar_ratio : sps.sps.par_ratio;
      } else if (nal.pps) {
        track.pps = nal.body;
        pps = nal;
      } else {
        sampleLength += 4 + nal.body.byteLength;
      }
    }

    if (sps && pps) {
      meta.avcc = _xgplayerCodec.Nalunit.getAvcc(sps.body, pps.body);
      let metaEqual = TsDemuxer.compaireMeta(track.meta, meta, true);
      if (!this._hasVideoMeta || !metaEqual) {
        if (options) {
          options.meta = Object.assign({}, meta);
        } else {
          options = {
            meta: Object.assign({}, meta)
          };
        }
        track.meta = meta;
        this._hasVideoMeta = true;
        this.emit(DEMUX_EVENTS.METADATA_PARSED, 'video');
      }
    }

    let data = new Uint8Array(sampleLength);
    let offset = 0;
    let isKeyframe = false;
    for (let i = 0; i < nals.length; i++) {
      let nal = nals[i];
      let length = nal.body.byteLength;
      if (nal.idr) {
        isKeyframe = true;
      }
      if (!nal.pps && !nal.sps) {
        data.set(new Uint8Array([length >>> 24 & 0xff, length >>> 16 & 0xff, length >>> 8 & 0xff, length & 0xff]), offset);
        offset += 4;
        data.set(nal.body, offset);
        offset += length;
      }
    }
    let sample = new _xgplayerUtils.VideoTrackSample({
      dts: parseInt(pes.dts / 90),
      pts: parseInt(pes.pts / 90),
      cts: (pes.pts - pes.dts) / 90,
      originDts: pes.dts,
      isKeyframe,
      data,
      options
    });
    track.samples.push(sample);
  }

  destory() {
    this.off(DEMUX_EVENTS.DEMUX_START, this.demux);
    this.configs = {};
    this.demuxing = false;
    this.pat = [];
    this.pmt = [];
    this._hasVideoMeta = false;
    this._hasAudioMeta = false;
  }

  static compaireArray(a, b, type) {
    let al = 0;
    let bl = 0;
    if (type === 'Uint8Array') {
      al = a.byteLength;
      bl = b.byteLength;
    } else if (type === 'Array') {
      al = a.length;
      bl = b.length;
    }
    if (al !== bl) {
      return false;
    }

    for (let i = 0; i < al; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }

  static compaireMeta(a, b, ignoreDuration) {
    if (!a || !b) {
      return false;
    }

    for (let i = 0, k = Object.keys(a).length; i < k; i++) {
      let itema = a[Object.keys(a)[i]];
      let itemb = b[Object.keys(a)[i]];
      if (typeof itema !== 'object') {
        if (ignoreDuration && Object.keys(a)[i] !== 'duration' && Object.keys(a)[i] !== 'refSampleDuration' && Object.keys(a)[i] !== 'refSampleDurationFixed' && itema !== itemb) {
          return false;
        }
      } else if (itema.byteLength !== undefined) {
        if (itemb.byteLength === undefined) {
          return false;
        }
        if (!TsDemuxer.compaireArray(itema, itemb, 'Uint8Array')) {
          return false;
        }
      } else if (itema.length !== undefined) {
        if (itemb.length === undefined) {
          return false;
        }
        if (!TsDemuxer.compaireArray(itema, itemb, 'Array')) {
          return false;
        }
      } else {
        if (!TsDemuxer.compaireMeta(itema, itemb)) {
          return false;
        }
      }
    }
    return true;
  }

  static Merge(buffers) {
    let data;
    let length = 0;
    let offset = 0;
    for (let i = 0; i < buffers.length; i++) {
      length += buffers[i].length - buffers[i].position;
    }

    data = new Uint8Array(length);
    for (let i = 0; i < buffers.length; i++) {
      let buffer = buffers[i];
      data.set(new Uint8Array(buffer.buffer, buffer.position), offset);
      offset += buffer.length - buffer.position;
    }
    return new _xgplayerUtils.Stream(data.buffer);
  }

  static read(stream, ts, frags) {
    TsDemuxer.readHeader(stream, ts);
    TsDemuxer.readPayload(stream, ts, frags);
    if (ts.header.packet === 'MEDIA' && ts.header.payload === 1 && !ts.unknownPIDs) {
      ts.pes = TsDemuxer.PES(ts);
    }
  }

  static readPayload(stream, ts, frags) {
    let header = ts.header;
    let pid = header.pid;
    switch (pid) {
      case 0:
        TsDemuxer.PAT(stream, ts, frags);
        break;
      case 1:
        TsDemuxer.CAT(stream, ts, frags);
        break;
      case 2:
        TsDemuxer.TSDT(stream, ts, frags);
        break;
      case 0x1fff:
        break;
      default:
        // TODO: some的写法不太好，得改
        if (frags.pat.some(item => {
          return item.pid === pid;
        })) {
          TsDemuxer.PMT(stream, ts, frags);
        } else {
          let sts = frags.pmt ? frags.pmt.filter(item => item.pid === pid) : [];
          if (sts.length > 0) {
            TsDemuxer.Media(stream, ts, StreamType[sts[0].streamType][0]);
          } else {
            ts.unknownPIDs = true;
          };
        }
    }
  }

  static readHeader(stream, ts) {
    let header = {};
    header.sync = stream.readUint8();
    let next = stream.readUint16();
    header.error = next >>> 15;
    header.payload = next >>> 14 & 1;
    header.priority = next >>> 13 & 1;
    header.pid = next & 0x1fff;

    next = stream.readUint8();

    header.scrambling = next >> 6 & 0x3; // 是否加密，00表示不加密

    /**
     * 00 ISO/IEC未来使用保留
     * 01 没有调整字段，仅含有184B有效净荷
     * 02 没有有效净荷，仅含有183B调整字段
     * 03 0~182B调整字段后为有效净荷
     */
    header.adaptation = next >> 4 & 0x3;
    header.continuity = next & 15;
    header.packet = header.pid === 0 ? 'PAT' : 'MEDIA';
    ts.header = header;
  }

  static PAT(stream, ts, frags) {
    let ret = {};
    let next = stream.readUint8();
    stream.skip(next);
    next = stream.readUint8();
    ret.tabelID = next;
    next = stream.readUint16();
    ret.error = next >>> 7;
    ret.zero = next >>> 6 & 1;
    ret.sectionLength = next & 0xfff;
    ret.streamID = stream.readUint16();
    ret.current = stream.readUint8() & 1;
    ret.sectionNumber = stream.readUint8();
    ret.lastSectionNumber = stream.readUint8();
    let N = (ret.sectionLength - 9) / 4;
    let list = [];
    for (let i = 0; i < N; i++) {
      let programNumber = stream.readUint16();
      let pid = stream.readUint16() & 0x1fff;
      list.push({
        program: programNumber,
        pid,
        type: programNumber === 0 ? 'network' : 'mapPID'
      });
    }
    if (list.length > 0) {
      frags.pat = frags.pat.concat(list);
    }
    ret.list = list;
    ret.program = stream.readUint16();
    ret.pid = stream.readUint16() & 0x1fff;
    ts.payload = ret;
    // TODO CRC
  }

  static PMT(stream, ts, frags) {
    let ret = {};
    let header = ts.header;
    header.packet = 'PMT';
    let next = stream.readUint8();
    stream.skip(next);
    next = stream.readUint8();
    ret.tableID = next;
    next = stream.readUint16();
    ret.sectionLength = next & 0xfff;
    ret.program = stream.readUint16();
    ret.current = stream.readUint8() & 1;
    ret.order = stream.readUint8();
    ret.lastOrder = stream.readUint8();
    ret.PCR_PID = stream.readUint16() & 0x1fff;
    ret.programLength = stream.readUint16() & 0xfff;
    let N = (ret.sectionLength - 13) / 5;
    let list = [];
    for (let i = 0; i < N; i++) {
      list.push({
        streamType: stream.readUint8(),
        pid: stream.readUint16() & 0x1fff, // 0x07e5 视频，0x07e6
        es: stream.readUint16() & 0xfff
      });
    }
    ret.list = list;
    if (!this.pmt) {
      this.pmt = [];
    }
    frags.pmt = this.pmt.concat(list.map(item => {
      return {
        pid: item.pid,
        es: item.es,
        streamType: item.streamType,
        program: ret.program
      };
    }));
    ts.payload = ret;
  }

  static Media(stream, ts, type) {
    let header = ts.header;
    let payload = {};
    header.type = type;
    if (header.adaptation === 0x03) {
      payload.adaptationLength = stream.readUint8();
      if (payload.adaptationLength > 0) {
        let next = stream.readUint8();
        payload.discontinue = next >>> 7;
        payload.access = next >>> 6 & 0x01;
        payload.priority = next >>> 5 & 0x01;
        payload.PCR = next >>> 4 & 0x01;
        payload.OPCR = next >>> 3 & 0x01;
        payload.splicePoint = next >>> 2 & 0x01;
        payload.transportPrivate = next >>> 1 & 0x01;
        payload.adaptationField = next & 0x01;
        let _start = stream.position;
        if (payload.PCR === 1) {
          payload.programClockBase = stream.readUint32() << 1;
          next = stream.readUint16();
          payload.programClockBase |= next >>> 15;
          payload.programClockExtension = next & 0x1ff;
        }
        if (payload.OPCR === 1) {
          payload.originProgramClockBase = stream.readUint32() << 1;
          next = stream.readUint16();
          payload.originProgramClockBase += next >>> 15;
          payload.originProgramClockExtension = next & 0x1ff;
        }
        if (payload.splicePoint === 1) {
          payload.spliceCountdown = stream.readUint8();
        }
        if (payload.transportPrivate === 1) {
          let length = stream.readUint8();
          let transportPrivateData = [];
          for (let i = 0; i < length; i++) {
            transportPrivateData.push(stream.readUint8());
          }
        }
        if (payload.adaptationField === 1) {
          let length = stream.readUint8();
          let next = stream.readUint8();
          let start = stream.position;
          let ltw = next >>> 7;
          let piecewise = next >>> 6 & 0x1;
          let seamless = next >>> 5 & 0x1;
          if (ltw === 1) {
            next = stream.readUint16();
            payload.ltwValid = next >>> 15;
            payload.ltwOffset = next & 0xefff;
          }
          if (piecewise === 1) {
            next = stream.readUint24();
            payload.piecewiseRate = next & 0x3fffff;
          }
          if (seamless === 1) {
            next = stream.readInt8();
            payload.spliceType = next >>> 4;
            payload.dtsNextAU1 = next >>> 1 & 0x7;
            payload.marker1 = next & 0x1;
            next = stream.readUint16();
            payload.dtsNextAU2 = next >>> 1;
            payload.marker2 = next & 0x1;
            next = stream.readUint16();
            payload.dtsNextAU3 = next;
          }
          stream.skip(length - 1 - (stream.position - start));
        }
        let lastStuffing = payload.adaptationLength - 1 - (stream.position - _start);
        stream.skip(lastStuffing);
      }
    }
    payload.stream = new _xgplayerUtils.Stream(stream.buffer.slice(stream.position));
    ts.payload = payload;
  }

  static PES(ts) {
    let ret = {};
    let buffer = ts.payload.stream;

    let next = buffer.readUint24();
    if (next !== 1) {
      ret.ES = {};
      ret.ES.buffer = buffer;
    } else {
      let streamID = buffer.readUint8();
      if (streamID >= 0xe0 && streamID <= 0xef) {
        ret.type = 'video';
      }
      if (streamID >= 0xc0 && streamID <= 0xdf) {
        ret.type = 'audio';
      }
      let packetLength = buffer.readUint16();
      ret.packetLength = packetLength;
      if (ret.type === 'video' || ret.type === 'audio') {
        let next = buffer.readUint8();
        let first = next >>> 6;
        if (first !== 0x02) {
          throw new Error('error when parse pes header');
        }
        next = buffer.readUint8();
        ret.ptsDTSFlag = next >>> 6;
        ret.escrFlag = next >>> 5 & 0x01;
        ret.esRateFlag = next >>> 4 & 0x01;
        ret.dsmFlag = next >>> 3 & 0x01;
        ret.additionalFlag = next >>> 2 & 0x01;
        ret.crcFlag = next >>> 1 & 0x01;
        ret.extensionFlag = next & 0x01;
        ret.pesHeaderLength = buffer.readUint8();
        let N1 = ret.pesHeaderLength;

        if (ret.ptsDTSFlag === 2) {
          let pts = [];
          next = buffer.readUint8();
          pts.push(next >>> 1 & 0x07);
          next = buffer.readUint16();
          pts.push(next >>> 1);
          next = buffer.readUint16();
          pts.push(next >>> 1);
          ret.pts = pts[0] << 30 | pts[1] << 15 | pts[2];
          N1 -= 5;
          // 视频如果没有dts用pts
          if (ret.type === 'video') {
            ret.dts = ret.pts;
          }
        }
        if (ret.ptsDTSFlag === 3) {
          let pts = [];
          next = buffer.readUint8();
          pts.push(next >>> 1 & 0x07);
          next = buffer.readUint16();
          pts.push(next >>> 1);
          next = buffer.readUint16();
          pts.push(next >>> 1);
          ret.pts = pts[0] << 30 | pts[1] << 15 | pts[2];
          let dts = [];
          next = buffer.readUint8();
          dts.push(next >>> 1 & 0x07);
          next = buffer.readUint16();
          dts.push(next >>> 1);
          next = buffer.readUint16();
          dts.push(next >>> 1);
          ret.dts = dts[0] << 30 | dts[1] << 15 | dts[2];
          N1 -= 10;
        }
        if (ret.escrFlag === 1) {
          let escr = [];
          let ex = [];
          next = buffer.readUint8();
          escr.push(next >>> 3 & 0x07);
          escr.push(next & 0x03);
          next = buffer.readUint16();
          escr.push(next >>> 13);
          escr.push(next & 0x03);
          next = buffer.readUint16();
          escr.push(next >>> 13);
          ex.push(next & 0x03);
          next = buffer.readUint8();
          ex.push(next >>> 1);
          ret.escr = (escr[0] << 30 | escr[1] << 28 | escr[2] << 15 | escr[3] << 13 | escr[4]) * 300 + (ex[0] << 7 | ex[1]);
          N1 -= 6;
        }
        if (ret.esRateFlag === 1) {
          next = buffer.readUint24();
          ret.esRate = next >>> 1 & 0x3fffff;
          N1 -= 3;
        }
        if (ret.dsmFlag === 1) {
          throw new Error('not support DSM_trick_mode');
        }
        if (ret.additionalFlag === 1) {
          next = buffer.readUint8();
          ret.additionalCopyInfo = next & 0x7f;
          N1 -= 1;
        }
        if (ret.crcFlag === 1) {
          ret.pesCRC = buffer.readUint16();
          N1 -= 2;
        }
        if (ret.extensionFlag === 1) {
          throw new Error('not support extension');
        }
        if (N1 > 0) {
          buffer.skip(N1);
        }
        ret.ES = TsDemuxer.ES(buffer, ret.type);
      } else {
        throw new Error('format is not supported');
      }
    }
    return ret;
  }

  static ES(buffer, type) {
    let next;
    let ret = {};
    if (type === 'video') {
      next = buffer.readUint32();
      if (next !== 1) {
        buffer.back(4);
        next = buffer.readUint24();
        if (next !== 1) {
          throw new Error('h264 nal header parse failed');
        }
      }
      buffer.skip(2); // 09 F0
      // TODO readnalu
      ret.buffer = buffer;
    } else if (type === 'audio') {
      next = buffer.readUint16();
      // adts的同步字节，12位
      if (next >>> 4 !== 0xfff) {
        throw new Error('aac ES parse Error');
      }
      const fq = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350];
      ret.id = (next >>> 3 & 0x01) === 0 ? 'MPEG-4' : 'MPEG-2';
      ret.layer = next >>> 1 & 0x03;
      ret.absent = next & 0x01;
      next = buffer.readUint16();
      ret.audioObjectType = (next >>> 14 & 0x03) + 1;
      ret.profile = ret.audioObjectType - 1;
      ret.frequencyIndex = next >>> 10 & 0x0f;
      ret.frequence = fq[ret.frequencyIndex];
      ret.channel = next >>> 6 & 0x07;
      ret.frameLength = (next & 0x03) << 11 | buffer.readUint16() >>> 5;
      TsDemuxer.getAudioConfig(ret);
      buffer.skip(1);
      ret.buffer = buffer;
    } else {
      throw new Error(`ES ${type} is not supported`);
    }

    return ret;
  }

  static TSDT(stream, ts, frags) {
    // TODO
    ts.payload = {};
  }

  static CAT(stream, ts, frags) {
    let ret = {};
    ret.tableID = stream.readUint8();
    let next = stream.readUint16();
    ret.sectionIndicator = next >>> 7;
    ret.sectionLength = next & 0x0fff;
    stream.skip(2);
    next = stream.readUint8();
    ret.version = next >>> 3;
    ret.currentNextIndicator = next & 0x01;
    ret.sectionNumber = stream.readUint8();
    ret.lastSectionNumber = stream.readUint8();
    let N = (this.sectionLength - 9) / 4;
    let list = [];
    for (let i = 0; i < N; i++) {
      list.push({});
    }
    ret.crc32 = stream.readUint32();
    ts.payload = ret;
  }

  static getAudioConfig(ret) {
    let userAgent = navigator.userAgent.toLowerCase();
    let config;
    let extensionSampleIndex;
    if (/firefox/i.test(userAgent)) {
      if (ret.frequencyIndex >= 6) {
        ret.audioObjectType = 5;
        config = new Array(4);
        extensionSampleIndex = ret.frequencyIndex - 3;
      } else {
        ret.audioObjectType = 2;
        config = new Array(2);
        extensionSampleIndex = ret.frequencyIndex;
      }
    } else if (userAgent.indexOf('android') !== -1) {
      ret.audioObjectType = 2;
      config = new Array(2);
      extensionSampleIndex = ret.frequencyIndex;
    } else {
      ret.audioObjectType = 5;
      config = new Array(4);
      if (ret.frequencyIndex >= 6) {
        extensionSampleIndex = ret.frequencyIndex - 3;
      } else {
        if (ret.channel === 1) {
          ret.audioObjectType = 2;
          config = new Array(2);
        }
        extensionSampleIndex = ret.frequencyIndex;
      }
    }

    config[0] = ret.audioObjectType << 3;
    config[0] |= (ret.frequencyIndex & 0x0e) >> 1;
    config[1] = (ret.frequencyIndex & 0x01) << 7;
    config[1] |= ret.channel << 3;
    if (ret.audioObjectType === 5) {
      config[1] |= (extensionSampleIndex & 0x0e) >> 1;
      config[2] = (extensionSampleIndex & 0x01) << 7;
      config[2] |= 2 << 2;
      config[3] = 0;
    }
    ret.audioConfig = config;
  }

  get inputBuffer() {
    return this._context.getInstance(this.configs.inputbuffer);
  }

  get _tracks() {
    return this._context.getInstance('TRACKS');
  }
}

exports.default = TsDemuxer;

/***/ }),

/***/ "../xgplayer-demux/src/hls/playlist.js":
/*!*********************************************!*\
  !*** ../xgplayer-demux/src/hls/playlist.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class Playlist {
  constructor(configs) {
    this._baseURL = '';
    this._list = {};
    this._ts = {};
    this.version = 0;
    this.sequence = -1;
    this.targetduration = 0;
    this.duration = 0;
    this.fragLength = 0;
    this._lastget = undefined;
    this._audoclear = configs.autoclear || false;
  }

  get list() {
    return this._list;
  }

  set baseURL(baseURL) {
    if (this.baseURL !== baseURL) {
      this.clear();
      this._baseURL = baseURL;
    }
  }

  get baseURL() {
    return this._baseURL;
  }

  push(ts, duration, discontinue) {
    if (!this._ts[ts]) {
      this._ts[ts] = { duration: duration,
        downloaded: false,
        downloading: false,
        start: this.duration,
        discontinue: discontinue ? true : false
      };
      this._list[this.duration] = ts;
      this.duration += duration;
      this.fragLength += 1;
    }
  }

  deleteFrag(url) {
    if (this._ts[url]) {
      if (this._ts[url].start > this._lastget.time) {
        this._lastget = {
          duration: this._ts[url].duration,
          time: this._ts[url].start,
          downloaded: false,
          downloading: false,
          url: url
        };
      }
      delete this._list[this._ts[url].start];
      delete this._ts[url];
      this.fragLength -= 1;
    }
  }

  pushM3U8(data, deletepre) {
    // 常规信息替换
    if (!data) {
      throw new Error(`No m3u8 data received.`);
      return;
    }
    this.version = data.version;
    this.targetduration = data.targetduration;
    if (data.encrypt && !this.encrypt) {
      this.encrypt = data.encrypt;
    }
    // 新分片信息
    if (data.sequence > this.sequence) {
      this.sequence = data.sequence;
      let newfraglist = [];
      for (let i = 0; i < data.frags.length; i++) {
        let frag = data.frags[i];
        if (!this._ts[frag.url]) {
          newfraglist.push(frag.url);
          this.push(frag.url, frag.duration, frag.discontinue);
        }
      }

      if (newfraglist.length < 1) {
        throw new Error(`Can not read ts file list.`);
      }

      if (deletepre) {
        let tslist = this.getTsList();
        for (let i = 0; i < tslist.length; i++) {
          if (newfraglist.indexOf(tslist[i]) < 0) {
            this.deleteFrag(tslist[i]);
          }
        }
      }
    } else {
      throw new Error(`Old m3u8 file received, ${data.sequence}`);
    }
  }

  getTsList() {
    return Object.keys(this._ts);
  }

  downloaded(tsname, isloaded) {
    let ts = this._ts[tsname];
    if (ts) {
      ts.downloaded = isloaded;
    }
  }

  downloading(tsname, loading) {
    let ts = this._ts[tsname];
    if (ts) {
      ts.downloading = loading;
    }
  }

  getTsByName(name) {
    return this._ts[name];
  }

  getTs(time) {
    let timelist = Object.keys(this._list);
    let ts;

    if (time === undefined) {
      if (this._lastget) {
        time = this._lastget.time + this._lastget.duration;
      } else {
        time = 0;
      }
    }

    if (timelist.length < 1 || time >= this.duration) {
      return undefined;
    }
    timelist.sort((a, b) => {
      return parseFloat(a) - parseFloat(b);
    });
    for (let i = 0; i < timelist.length; i++) {
      if (time >= parseInt(timelist[i])) {
        let url = this._list[timelist[i]];
        let downloaded = this._ts[url].downloaded;
        let downloading = this._ts[url].downloading;
        ts = { url, downloaded, downloading, time: parseInt(timelist[i]), duration: parseInt(this._ts[url].duration) };
        if (this.autoclear) {
          delete this._ts[this._lastget.url];
          delete this._list[this._lastget.time];
        }
        this._lastget = ts;
      } else {
        break;
      }
    }
    return ts;
  }

  clear() {
    this._baseURL = '';
    this._list = {};
    this._ts = {};
    this.version = 0;
    this.sequence = -1;
    this.targetduration = 0;
    this.duration = 0;
  }

  clearDownloaded() {
    for (let i = 0, l = Object.keys(this._ts).length; i < l; i++) {
      let ts = this._ts[Object.keys(this._ts)[i]];
      ts.downloaded = false;
      ts.downloading = false;
    }
  }

  destroy() {
    this._baseURL = '';
    this._list = {};
    this._ts = {};
    this.version = 0;
    this.sequence = -1;
    this.targetduration = 0;
    this.duration = 0;
    this.fragLength = 0;
    this._lastget = undefined;
    this._audoclear = false;
  }
}

exports.default = Playlist;

/***/ }),

/***/ "../xgplayer-loader/index.js":
/*!***********************************!*\
  !*** ../xgplayer-loader/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  FetchLoader: __webpack_require__(/*! ./src/fetch-loader */ "../xgplayer-loader/src/fetch-loader.js").default
};

/***/ }),

/***/ "../xgplayer-loader/src/fetch-loader.js":
/*!**********************************************!*\
  !*** ../xgplayer-loader/src/fetch-loader.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

const LOADER_EVENTS = _xgplayerUtils.EVENTS.LOADER_EVENTS;
const READ_STREAM = 0;
const READ_TEXT = 1;
const READ_JSON = 2;
const READ_BUFFER = 3;
class FetchLoader {
  constructor(configs) {
    this.configs = Object.assign({}, configs);
    this.url = null;
    this.status = 0;
    this.error = null;
    this._reader = null;
    this._canceled = false;
    this._destroyed = false;
    this.readtype = this.configs.readtype;
    this.buffer = this.configs.buffer || 'LOADER_BUFFER';
    this._loaderTaskNo = 0;
  }

  init() {
    this.on(LOADER_EVENTS.LADER_START, this.load.bind(this));
  }

  static get type() {
    return 'loader';
  }

  load(url, opts) {
    let _this = this;
    this.url = url;
    this._canceled = false;

    // TODO: Add Ranges
    let params = this.getParams(opts);
    _this.loading = true;
    return fetch(this.url, params).then(function (response) {
      if (response.ok) {
        _this.status = response.status;
        return _this._onFetchResponse(response);
      }
      _this.loading = false;
      _this.emit(LOADER_EVENTS.LOADER_ERROR, _this.TAG, new Error(`invalid response.`));
    }).catch(function (error) {
      _this.loading = false;
      _this.emit(LOADER_EVENTS.LOADER_ERROR, _this.TAG, error);
      throw new Error(error.message);
    });
  }

  _onFetchResponse(response) {
    let _this = this;
    let buffer = this._context.getInstance(this.buffer);
    this._loaderTaskNo++;
    let taskno = this._loaderTaskNo;
    if (response.ok === true) {
      switch (this.readtype) {
        case READ_JSON:
          response.json().then(data => {
            _this.loading = false;
            if (!_this._canceled && !_this._destroyed) {
              if (buffer) {
                buffer.push(data);
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, buffer);
              } else {
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, data);
              }
            }
          });
          break;
        case READ_TEXT:
          response.text().then(data => {
            _this.loading = false;
            if (!_this._canceled && !_this._destroyed) {
              if (buffer) {
                buffer.push(data);
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, buffer);
              } else {
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, data);
              }
            }
          });
          break;
        case READ_BUFFER:
          response.arrayBuffer().then(data => {
            _this.loading = false;
            if (!_this._canceled && !_this._destroyed) {
              if (buffer) {
                buffer.push(new Uint8Array(data));
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, buffer);
              } else {
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, data);
              }
            }
          });
          break;
        case READ_STREAM:
        default:
          return this._onReader(response.body.getReader(), taskno);
      }
    }
  }

  _onReader(reader, taskno) {
    let buffer = this._context.getInstance(this.buffer);
    if (!buffer && this._reader || this._destroyed) {
      try {
        this._reader.cancel();
      } catch (e) {
        // DO NOTHING
      }
    }

    this._reader = reader;
    if (this.loading === false) {
      return;
    }

    let _this = this;
    // reader read function returns a Promise. get data when callback and has value.done when disconnected.
    // read方法返回一个Promise. 回调中可以获取到数据。当value.done存在时，说明链接断开。
    this._reader && this._reader.read().then(function (val) {
      if (val.done) {
        // TODO: 完成处理
        _this.loading = false;
        _this.status = 0;
        _this.emit(LOADER_EVENTS.LOADER_COMPLETE, buffer);
        return;
      }

      if (_this._canceled || _this._destroyed) {
        if (_this._reader) {
          try {
            _this._reader.cancel();
          } catch (e) {
            // DO NOTHING
          }
        }

        return;
      }
      buffer.push(val.value);
      _this.emit(LOADER_EVENTS.LOADER_DATALOADED, buffer);
      return _this._onReader(reader, taskno);
    }).catch(error => {
      _this.loading = false;
      _this.emit(LOADER_EVENTS.LOADER_ERROR, _this.TAG, error);
    });
  }

  getParams(opts) {
    let options = Object.assign({}, opts);
    let headers = new Headers();

    let params = {
      method: 'GET',
      headers: headers,
      mode: 'cors',
      cache: 'default'

      // add custmor headers
      // 添加自定义头
    };if (typeof this.configs.headers === 'object') {
      let configHeaders = this.configs.headers;
      for (let key in configHeaders) {
        if (configHeaders.hasOwnProperty(key)) {
          headers.append(key, configHeaders[key]);
        }
      }
    }

    if (typeof options.headers === 'object') {
      let optHeaders = options.headers;
      for (let key in optHeaders) {
        if (optHeaders.hasOwnProperty(key)) {
          headers.append(key, optHeaders[key]);
        }
      }
    }

    if (options.cors === false) {
      params.mode = 'same-origin';
    }

    // withCredentials is disabled by default
    // withCredentials 在默认情况下不被使用。
    if (options.withCredentials) {
      params.credentials = 'include';
    }

    // TODO: Add ranges;
    return params;
  }

  cancel() {
    if (this._reader) {
      try {
        this._reader.cancel();
      } catch (e) {
        // 防止failed: 200错误被打印到控制台上
      }
      this._reader = null;
      this.loading = false;
      this._canceled = true;
    }
  }

  destroy() {
    this._destroyed = true;
    this.cancel();
  }
}

exports.default = FetchLoader;

/***/ }),

/***/ "../xgplayer-remux/index.js":
/*!**********************************!*\
  !*** ../xgplayer-remux/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  Mp4Remuxer: __webpack_require__(/*! ./src/mp4 */ "../xgplayer-remux/src/mp4/index.js").default
};

/***/ }),

/***/ "../xgplayer-remux/src/mp4/fmp4.js":
/*!*****************************************!*\
  !*** ../xgplayer-remux/src/mp4/fmp4.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

// const UINT32_MAX = Math.pow(2, 32) - 1;
class Fmp4 {
  static size(value) {
    return _xgplayerUtils.Buffer.writeUint32(value);
  }
  static initBox(size, name, ...content) {
    const buffer = new _xgplayerUtils.Buffer();
    buffer.write(Fmp4.size(size), Fmp4.type(name), ...content);
    return buffer.buffer;
  }
  static extension(version, flag) {
    return new Uint8Array([version, flag >> 16 & 0xff, flag >> 8 & 0xff, flag & 0xff]);
  }
  static ftyp() {
    return Fmp4.initBox(24, 'ftyp', new Uint8Array([0x69, 0x73, 0x6F, 0x6D, // isom,
    0x0, 0x0, 0x00, 0x01, // minor_version: 0x01
    0x69, 0x73, 0x6F, 0x6D, // isom
    0x61, 0x76, 0x63, 0x31 // avc1
    ]));
  }
  static moov({ type, meta }) {
    let size = 8;
    let mvhd = Fmp4.mvhd(meta.duration, meta.timescale);
    let trak;

    if (type === 'video') {
      trak = Fmp4.videoTrak(meta);
    } else {
      trak = Fmp4.audioTrak(meta);
    }

    let mvex = Fmp4.mvex(meta.duration, meta.timescale || 1000, meta.id);
    [mvhd, trak, mvex].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'moov', mvhd, trak, mvex);
  }
  static mvhd(duration, timescale = 1000) {
    // duration *= timescale;
    let bytes = new Uint8Array([0x00, 0x00, 0x00, 0x00, // version(0) + flags     1位的box版本+3位flags   box版本，0或1，一般为0。（以下字节数均按version=0）
    0x00, 0x00, 0x00, 0x00, // creation_time    创建时间  （相对于UTC时间1904-01-01零点的秒数）
    0x00, 0x00, 0x00, 0x00, // modification_time   修改时间

    /**
           * timescale: 4 bytes文件媒体在1秒时间内的刻度值，可以理解为1秒长度
           */
    timescale >>> 24 & 0xFF, timescale >>> 16 & 0xFF, timescale >>> 8 & 0xFF, timescale & 0xFF,

    /**
           * duration: 4 bytes该track的时间长度，用duration和time scale值可以计算track时长，比如audio track的time scale = 8000,
           * duration = 560128，时长为70.016，video track的time scale = 600, duration = 42000，时长为70
           */
    duration >>> 24 & 0xFF, duration >>> 16 & 0xFF, duration >>> 8 & 0xFF, duration & 0xFF, 0x00, 0x01, 0x00, 0x00, // Preferred rate: 1.0   推荐播放速率，高16位和低16位分别为小数点整数部分和小数部分，即[16.16] 格式，该值为1.0（0x00010000）表示正常前向播放
    /**
           * PreferredVolume(1.0, 2bytes) + reserved(2bytes)
           * 与rate类似，[8.8] 格式，1.0（0x0100）表示最大音量
           */
    0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, //  reserved: 4 + 4 bytes保留位
    0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, // ----begin composition matrix----
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // 视频变换矩阵   线性代数
    0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00, // ----end composition matrix----
    0x00, 0x00, 0x00, 0x00, // ----begin pre_defined 6 * 4 bytes----
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // pre-defined 保留位
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // ----end pre_defined 6 * 4 bytes----
    0xFF, 0xFF, 0xFF, 0xFF // next_track_ID 下一个track使用的id号
    ]);
    return Fmp4.initBox(8 + bytes.length, 'mvhd', new Uint8Array(bytes));
  }
  static videoTrak(data) {
    let size = 8;

    let tkhd = Fmp4.tkhd({
      id: 1,
      duration: data.duration,
      timescale: data.timescale || 1000,
      width: data.presentWidth,
      height: data.presentHeight,
      type: 'video'
    });
    let mdia = Fmp4.mdia({
      type: 'video',
      timescale: data.timescale || 1000,
      duration: data.duration,
      avcc: data.avcc,
      parRatio: data.parRatio,
      width: data.presentWidth,
      height: data.presentHeight
    });
    [tkhd, mdia].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'trak', tkhd, mdia);
  }
  static audioTrak(data) {
    let size = 8;
    let tkhd = Fmp4.tkhd({
      id: 2,
      duration: data.duration,
      timescale: data.timescale || 1000,
      width: 0,
      height: 0,
      type: 'audio'
    });
    let mdia = Fmp4.mdia({
      type: 'audio',
      timescale: data.timescale || 1000,
      duration: data.duration,
      channelCount: data.channelCount,
      samplerate: data.sampleRate,
      config: data.config
    });
    [tkhd, mdia].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'trak', tkhd, mdia);
  }
  static tkhd(data) {
    let id = data.id;
    let duration = data.duration;
    let width = data.width;
    let height = data.height;
    let content = new Uint8Array([0x00, 0x00, 0x00, 0x07, // version(0) + flags 1位版本 box版本，0或1，一般为0。（以下字节数均按version=0）按位或操作结果值，预定义如下：
    // 0x000001 track_enabled，否则该track不被播放；
    // 0x000002 track_in_movie，表示该track在播放中被引用；
    // 0x000004 track_in_preview，表示该track在预览时被引用。
    // 一般该值为7，1+2+4 如果一个媒体所有track均未设置track_in_movie和track_in_preview，将被理解为所有track均设置了这两项；对于hint track，该值为0
    // hint track 这个特殊的track并不包含媒体数据，而是包含了一些将其他数据track打包成流媒体的指示信息。
    0x00, 0x00, 0x00, 0x00, // creation_time创建时间（相对于UTC时间1904-01-01零点的秒数）
    0x00, 0x00, 0x00, 0x00, // modification time 修改时间
    id >>> 24 & 0xFF, // track_ID: 4 bytes id号，不能重复且不能为0
    id >>> 16 & 0xFF, id >>> 8 & 0xFF, id & 0xFF, 0x00, 0x00, 0x00, 0x00, // reserved: 4 bytes    保留位
    duration >>> 24 & 0xFF, // duration: 4 bytes track的时间长度
    duration >>> 16 & 0xFF, duration >>> 8 & 0xFF, duration & 0xFF, 0x00, 0x00, 0x00, 0x00, // reserved: 2 * 4 bytes    保留位
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // layer(2bytes) + alternate_group(2bytes)  视频层，默认为0，值小的在上层.track分组信息，默认为0表示该track未与其他track有群组关系
    0x00, 0x00, 0x00, 0x00, // volume(2bytes) + reserved(2bytes)    [8.8] 格式，如果为音频track，1.0（0x0100）表示最大音量；否则为0   +保留位
    0x00, 0x01, 0x00, 0x00, // ----begin composition matrix----
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, // 视频变换矩阵
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00, // ----end composition matrix----
    width >>> 8 & 0xFF, // //宽度
    width & 0xFF, 0x00, 0x00, height >>> 8 & 0xFF, // 高度
    height & 0xFF, 0x00, 0x00]);
    return Fmp4.initBox(8 + content.byteLength, 'tkhd', content);
  }
  static edts(data) {
    let buffer = new _xgplayerUtils.Buffer();
    let duration = data.duration;
    let mediaTime = data.mediaTime;
    buffer.write(Fmp4.size(36), Fmp4.type('edts'));
    // elst
    buffer.write(Fmp4.size(28), Fmp4.type('elst'));
    buffer.write(new Uint8Array([0x00, 0x00, 0x00, 0x01, // entry count
    duration >> 24 & 0xff, duration >> 16 & 0xff, duration >> 8 & 0xff, duration & 0xff, mediaTime >> 24 & 0xff, mediaTime >> 16 & 0xff, mediaTime >> 8 & 0xff, mediaTime & 0xff, 0x00, 0x00, 0x00, 0x01 // media rate
    ]));
    return buffer.buffer;
  }
  static mdia(data) {
    let size = 8;
    let mdhd = Fmp4.mdhd(data.timescale, data.duration);
    let hdlr = Fmp4.hdlr(data.type);
    let minf = Fmp4.minf(data);
    [mdhd, hdlr, minf].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'mdia', mdhd, hdlr, minf);
  }
  static mdhd(timescale = 1000, duration) {
    let content = new Uint8Array([0x00, 0x00, 0x00, 0x00, // creation_time    创建时间
    0x00, 0x00, 0x00, 0x00, // modification_time修改时间
    timescale >>> 24 & 0xFF, // timescale: 4 bytes    文件媒体在1秒时间内的刻度值，可以理解为1秒长度
    timescale >>> 16 & 0xFF, timescale >>> 8 & 0xFF, timescale & 0xFF, duration >>> 24 & 0xFF, // duration: 4 bytes  track的时间长度
    duration >>> 16 & 0xFF, duration >>> 8 & 0xFF, duration & 0xFF, 0x55, 0xC4, // language: und (undetermined) 媒体语言码。最高位为0，后面15位为3个字符（见ISO 639-2/T标准中定义）
    0x00, 0x00 // pre_defined = 0
    ]);
    return Fmp4.initBox(12 + content.byteLength, 'mdhd', Fmp4.extension(0, 0), content);
  }
  static hdlr(type) {
    let value = [0x00, // version 0
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x00, // pre_defined
    0x76, 0x69, 0x64, 0x65, // handler_type: 'vide'
    0x00, 0x00, 0x00, 0x00, // reserved
    0x00, 0x00, 0x00, 0x00, // reserved
    0x00, 0x00, 0x00, 0x00, // reserved
    0x56, 0x69, 0x64, 0x65, 0x6f, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x00 // name: 'VideoHandler'
    ];
    if (type === 'audio') {
      value.splice(8, 4, ...[0x73, 0x6f, 0x75, 0x6e]);
      value.splice(24, 13, ...[0x53, 0x6f, 0x75, 0x6e, 0x64, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x00]);
    }
    return Fmp4.initBox(8 + value.length, 'hdlr', new Uint8Array(value));
  }
  static minf(data) {
    let size = 8;
    let vmhd = data.type === 'video' ? Fmp4.vmhd() : Fmp4.smhd();
    let dinf = Fmp4.dinf();
    let stbl = Fmp4.stbl(data);
    [vmhd, dinf, stbl].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'minf', vmhd, dinf, stbl);
  }
  static vmhd() {
    return Fmp4.initBox(20, 'vmhd', new Uint8Array([0x00, // version
    0x00, 0x00, 0x01, // flags
    0x00, 0x00, // graphicsmode
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00 // opcolor
    ]));
  }
  static smhd() {
    return Fmp4.initBox(16, 'smhd', new Uint8Array([0x00, // version
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, // balance
    0x00, 0x00 // reserved
    ]));
  }
  static dinf() {
    let buffer = new _xgplayerUtils.Buffer();
    let dref = [0x00, // version 0
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x01, // entry_count
    0x00, 0x00, 0x00, 0x0c, // entry_size
    0x75, 0x72, 0x6c, 0x20, // 'url' type
    0x00, // version 0
    0x00, 0x00, 0x01 // entry_flags
    ];
    buffer.write(Fmp4.size(36), Fmp4.type('dinf'), Fmp4.size(28), Fmp4.type('dref'), new Uint8Array(dref));
    return buffer.buffer;
  }
  static stbl(data) {
    let size = 8;
    let stsd = Fmp4.stsd(data);
    let stts = Fmp4.stts();
    let stsc = Fmp4.stsc();
    let stsz = Fmp4.stsz();
    let stco = Fmp4.stco();
    [stsd, stts, stsc, stsz, stco].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'stbl', stsd, stts, stsc, stsz, stco);
  }
  static stsd(data) {
    let content;
    if (data.type === 'audio') {
      // if (!data.isAAC && data.codec === 'mp4') {
      //     content = FMP4.mp3(data);
      // } else {
      //
      // }
      // 支持mp4a
      content = Fmp4.mp4a(data);
    } else {
      content = Fmp4.avc1(data);
    }
    return Fmp4.initBox(16 + content.byteLength, 'stsd', Fmp4.extension(0, 0), new Uint8Array([0x00, 0x00, 0x00, 0x01]), content);
  }
  static mp4a(data) {
    let content = new Uint8Array([0x00, 0x00, 0x00, // reserved
    0x00, 0x00, 0x00, // reserved
    0x00, 0x01, // data_reference_index
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // reserved
    0x00, data.channelCount, // channelcount
    0x00, 0x10, // sampleSize:16bits
    0x00, 0x00, 0x00, 0x00, // reserved2
    data.samplerate >> 8 & 0xff, data.samplerate & 0xff, //
    0x00, 0x00]);
    let esds = Fmp4.esds(data.config);
    return Fmp4.initBox(8 + content.byteLength + esds.byteLength, 'mp4a', content, esds);
  }
  static esds(config = [43, 146, 8, 0]) {
    const configlen = config.length;
    let buffer = new _xgplayerUtils.Buffer();
    let content = new Uint8Array([0x00, // version 0
    0x00, 0x00, 0x00, // flags

    0x03, // descriptor_type
    0x17 + configlen, // length
    0x00, 0x01, // es_id
    0x00, // stream_priority

    0x04, // descriptor_type
    0x0f + configlen, // length
    0x40, // codec : mpeg4_audio
    0x15, // stream_type
    0x00, 0x00, 0x00, // buffer_size
    0x00, 0x00, 0x00, 0x00, // maxBitrate
    0x00, 0x00, 0x00, 0x00, // avgBitrate

    0x05 // descriptor_type
    ].concat([configlen]).concat(config).concat([0x06, 0x01, 0x02]));
    buffer.write(Fmp4.size(8 + content.byteLength), Fmp4.type('esds'), content);
    return buffer.buffer;
  }
  static avc1(data) {
    let buffer = new _xgplayerUtils.Buffer();
    let size = 40; // 8(avc1)+8(avcc)+8(btrt)+16(pasp)
    // let sps = data.sps
    // let pps = data.pps
    let width = data.width;
    let height = data.height;
    let hSpacing = data.parRatio.height;
    let vSpacing = data.parRatio.width;
    // let avccBuffer = new Buffer()
    // avccBuffer.write(new Uint8Array([
    //   0x01, // version
    //   sps[1], // profile
    //   sps[2], // profile compatible
    //   sps[3], // level
    //   0xfc | 3,
    //   0xE0 | 1 // 目前只处理一个sps
    // ].concat([sps.length >>> 8 & 0xff, sps.length & 0xff])))
    // avccBuffer.write(sps, new Uint8Array([1, pps.length >>> 8 & 0xff, pps.length & 0xff]), pps)

    let avcc = data.avcc;
    let avc1 = new Uint8Array([0x00, 0x00, 0x00, // reserved
    0x00, 0x00, 0x00, // reserved
    0x00, 0x01, // data_reference_index
    0x00, 0x00, // pre_defined
    0x00, 0x00, // reserved
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // pre_defined
    width >> 8 & 0xff, width & 0xff, // width
    height >> 8 & 0xff, height & 0xff, // height
    0x00, 0x48, 0x00, 0x00, // horizresolution
    0x00, 0x48, 0x00, 0x00, // vertresolution
    0x00, 0x00, 0x00, 0x00, // reserved
    0x00, 0x01, // frame_count
    0x12, 0x64, 0x61, 0x69, 0x6C, // dailymotion/hls.js
    0x79, 0x6D, 0x6F, 0x74, 0x69, 0x6F, 0x6E, 0x2F, 0x68, 0x6C, 0x73, 0x2E, 0x6A, 0x73, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // compressorname
    0x00, 0x18, // depth = 24
    0x11, 0x11]); // pre_defined = -1
    let btrt = new Uint8Array([0x00, 0x1c, 0x9c, 0x80, // bufferSizeDB
    0x00, 0x2d, 0xc6, 0xc0, // maxBitrate
    0x00, 0x2d, 0xc6, 0xc0 // avgBitrate
    ]);
    let pasp = new Uint8Array([hSpacing >> 24, // hSpacing
    hSpacing >> 16 & 0xff, hSpacing >> 8 & 0xff, hSpacing & 0xff, vSpacing >> 24, // vSpacing
    vSpacing >> 16 & 0xff, vSpacing >> 8 & 0xff, vSpacing & 0xff]);

    buffer.write(Fmp4.size(size + avc1.byteLength + avcc.byteLength + btrt.byteLength), Fmp4.type('avc1'), avc1, Fmp4.size(8 + avcc.byteLength), Fmp4.type('avcC'), avcc, Fmp4.size(20), Fmp4.type('btrt'), btrt, Fmp4.size(16), Fmp4.type('pasp'), pasp);
    return buffer.buffer;
  }
  static stts() {
    let content = new Uint8Array([0x00, // version
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x00 // entry_count
    ]);
    return Fmp4.initBox(16, 'stts', content);
  }
  static stsc() {
    let content = new Uint8Array([0x00, // version
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x00 // entry_count
    ]);
    return Fmp4.initBox(16, 'stsc', content);
  }
  static stco() {
    let content = new Uint8Array([0x00, // version
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x00 // entry_count
    ]);
    return Fmp4.initBox(16, 'stco', content);
  }
  static stsz() {
    let content = new Uint8Array([0x00, // version
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x00, // sample_size
    0x00, 0x00, 0x00, 0x00 // sample_count
    ]);
    return Fmp4.initBox(20, 'stsz', content);
  }
  static mvex(duration, timescale = 1000, trackID) {
    let buffer = new _xgplayerUtils.Buffer();
    let mehd = _xgplayerUtils.Buffer.writeUint32(duration);
    buffer.write(Fmp4.size(56), Fmp4.type('mvex'), Fmp4.size(16), Fmp4.type('mehd'), Fmp4.extension(0, 0), mehd, Fmp4.trex(trackID));
    return buffer.buffer;
  }
  static trex(id) {
    let content = new Uint8Array([0x00, // version 0
    0x00, 0x00, 0x00, // flags
    id >> 24, id >> 16 & 0xff, id >> 8 & 0xff, id & 0xff, // track_ID
    0x00, 0x00, 0x00, 0x01, // default_sample_description_index
    0x00, 0x00, 0x00, 0x00, // default_sample_duration
    0x00, 0x00, 0x00, 0x00, // default_sample_size
    0x00, 0x01, 0x00, 0x01 // default_sample_flags
    ]);
    return Fmp4.initBox(8 + content.byteLength, 'trex', content);
  }
  static moof(data) {
    let size = 8;
    let mfhd = Fmp4.mfhd();
    let traf = Fmp4.traf(data);
    [mfhd, traf].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'moof', mfhd, traf);
  }
  static mfhd() {
    let content = _xgplayerUtils.Buffer.writeUint32(Fmp4.sequence);
    Fmp4.sequence += 1;
    return Fmp4.initBox(16, 'mfhd', Fmp4.extension(0, 0), content);
  }
  static traf(data) {
    let size = 8;
    let tfhd = Fmp4.tfhd(data.id);
    let tfdt = Fmp4.tfdt(data.time);
    let sdtp = Fmp4.sdtp(data);
    let trun = Fmp4.trun(data, sdtp.byteLength);

    [tfhd, tfdt, trun, sdtp].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'traf', tfhd, tfdt, trun, sdtp);
  }
  static tfhd(id) {
    let content = _xgplayerUtils.Buffer.writeUint32(id);
    return Fmp4.initBox(16, 'tfhd', Fmp4.extension(0, 0), content);
  }
  static tfdt(time) {
    // let upper = Math.floor(time / (UINT32_MAX + 1)),
    //     lower = Math.floor(time % (UINT32_MAX + 1));
    return Fmp4.initBox(16, 'tfdt', Fmp4.extension(0, 0), _xgplayerUtils.Buffer.writeUint32(time));
  }
  static trun(data, sdtpLength) {
    // let id = data.id;
    // let ceil = id === 1 ? 16 : 12;
    let buffer = new _xgplayerUtils.Buffer();
    let sampleCount = _xgplayerUtils.Buffer.writeUint32(data.samples.length);
    // mdat-header 8
    // moof-header 8
    // mfhd 16
    // traf-header 8
    // thhd 16
    // tfdt 20
    // trun-header 12
    // sampleCount 4
    // data-offset 4
    // samples.length
    let offset = _xgplayerUtils.Buffer.writeUint32(8 + 8 + 16 + 8 + 16 + 16 + 12 + 4 + 4 + 16 * data.samples.length + sdtpLength);
    buffer.write(Fmp4.size(20 + 16 * data.samples.length), Fmp4.type('trun'), new Uint8Array([0x00, 0x00, 0x0F, 0x01]), sampleCount, offset);

    // let size = buffer.buffer.byteLength
    // let writeOffset = 0
    // data.samples.forEach(() => {
    //   size += 16
    // })
    //
    // let trunBox = new Uint8Array(size)

    // trunBox.set(buffer.buffer, 0)

    data.samples.forEach(item => {
      const flags = item.flags;
      // console.log(item.type, item.dts, item.duration)

      buffer.write(new Uint8Array([item.duration >>> 24 & 0xFF, // sample_duration
      item.duration >>> 16 & 0xFF, item.duration >>> 8 & 0xFF, item.duration & 0xFF, item.size >>> 24 & 0xFF, // sample_size
      item.size >>> 16 & 0xFF, item.size >>> 8 & 0xFF, item.size & 0xFF, flags.isLeading << 2 | flags.dependsOn, // sample_flags
      flags.isDependedOn << 6 | flags.hasRedundancy << 4 | flags.isNonSync, 0x00, 0x00, // sample_degradation_priority
      item.cts >>> 24 & 0xFF, // sample_composition_time_offset
      item.cts >>> 16 & 0xFF, item.cts >>> 8 & 0xFF, item.cts & 0xFF]));
      // writeOffset += 16
      // buffer.write(Buffer.writeUint32(0));
    });
    return buffer.buffer;
  }
  static sdtp(data) {
    let buffer = new _xgplayerUtils.Buffer();
    buffer.write(Fmp4.size(12 + data.samples.length), Fmp4.type('sdtp'), Fmp4.extension(0, 0));
    data.samples.forEach(item => {
      const flags = item.flags;
      const num = flags.isLeading << 6 | // is_leading: 2 (bit)
      flags.dependsOn << 4 | // sample_depends_on
      flags.isDependedOn << 2 | // sample_is_depended_on
      flags.hasRedundancy; // sample_has_redundancy

      buffer.write(new Uint8Array([num]));
    });
    return buffer.buffer;
  }
  static mdat(data) {
    let buffer = new _xgplayerUtils.Buffer();
    let size = 8;
    data.samples.forEach(item => {
      size += item.size;
    });
    buffer.write(Fmp4.size(size), Fmp4.type('mdat'));
    let mdatBox = new Uint8Array(size);
    let offset = 0;
    mdatBox.set(buffer.buffer, offset);
    offset += 8;
    data.samples.forEach(item => {
      item.buffer.forEach(unit => {
        mdatBox.set(unit, offset);
        offset += unit.byteLength;
        // buffer.write(unit.data);
      });
    });
    return mdatBox;
  }
}
Fmp4.type = name => {
  return new Uint8Array([name.charCodeAt(0), name.charCodeAt(1), name.charCodeAt(2), name.charCodeAt(3)]);
};
Fmp4.sequence = 1;

exports.default = Fmp4;

/***/ }),

/***/ "../xgplayer-remux/src/mp4/index.js":
/*!******************************************!*\
  !*** ../xgplayer-remux/src/mp4/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

var _fmp = __webpack_require__(/*! ./fmp4 */ "../xgplayer-remux/src/mp4/fmp4.js");

var _fmp2 = _interopRequireDefault(_fmp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const REMUX_EVENTS = _xgplayerUtils.EVENTS.REMUX_EVENTS;

class Mp4Remuxer {
  constructor() {
    this._dtsBase = 0;
    this._isDtsBaseInited = false;

    this.isFirstVideo = true;
    this.isFirstAudio = true;

    this.videoAllDuration = 0;
    this.audioAllDuration = 0;
  }

  init() {
    this.on(REMUX_EVENTS.REMUX_MEDIA, this.remux.bind(this));
    this.on(REMUX_EVENTS.REMUX_METADATA, this.onMetaDataReady.bind(this));
    this.on(REMUX_EVENTS.DETECT_CHANGE_STREAM, this.resetDtsBase.bind(this));
  }

  destroy() {
    this._dtsBase = -1;
    this._dtsBaseInited = false;
  }

  reset() {
    this._dtsBase = 0;
    this._isDtsBaseInited = false;
  }

  remux() {
    const { audioTrack, videoTrack } = this._context.getInstance('TRACKS');
    !this._isDtsBaseInited && this.calcDtsBase(audioTrack, videoTrack);

    this._remuxVideo(videoTrack);
    this._remuxAudio(audioTrack);
  }

  resetDtsBase() {
    // for hls 中途切换 meta后seek
    this._dtsBase = 0;
    this._dtsBaseInited = false;
  }

  seek() {}

  onMetaDataReady(type) {
    let track;

    if (type === 'audio') {
      const { audioTrack } = this._context.getInstance('TRACKS');
      track = audioTrack;
    } else {
      const { videoTrack } = this._context.getInstance('TRACKS');
      track = videoTrack;
    }

    let presourcebuffer = this._context.getInstance('PRE_SOURCE_BUFFER');
    let source = presourcebuffer.getSource(type);
    if (!source) {
      source = presourcebuffer.createSource(type);
    }

    source.mimetype = track.meta.codec;
    source.init = this.remuxInitSegment(type, track.meta);
    // source.inited = false;

    // this.resetDtsBase()
    this.emit(REMUX_EVENTS.INIT_SEGMENT, type);
  }

  remuxInitSegment(type, meta) {
    let initSegment = new _xgplayerUtils.Buffer();
    let ftyp = _fmp2.default.ftyp();
    let moov = _fmp2.default.moov({ type, meta: meta });

    initSegment.write(ftyp, moov);
    return initSegment;
  }

  calcDtsBase(audioTrack, videoTrack) {
    if (!audioTrack.samples.length && !videoTrack.samples.length) {
      return;
    }

    let audioBase = Infinity;
    let videoBase = Infinity;

    if (audioTrack.samples && audioTrack.samples.length) {
      audioBase = audioTrack.samples[0].dts;
    }
    if (videoTrack.samples && videoTrack.samples.length) {
      videoBase = videoTrack.samples[0].dts;
    }

    this._dtsBase = Math.min(audioBase, videoBase);
    this._isDtsBaseInited = true;
  }

  _remuxVideo(videoTrack) {
    const track = videoTrack;

    if (!videoTrack.samples || !videoTrack.samples.length) {
      return;
    }

    let { samples } = track;
    let firstDts = -1;

    let initSegment = null;
    const mp4Samples = [];
    const mdatBox = {
      samples: []
    };

    while (samples.length) {
      const avcSample = samples.shift();

      const { isKeyframe, options } = avcSample;
      if (!this.isFirstAudio && options && options.meta) {
        initSegment = this.remuxInitSegment('video', options.meta);
        options.meta = null;
        samples.unshift(avcSample);
        if (!options.isContinue) {
          this.resetDtsBase();
        }
        break;
      }

      let dts = avcSample.dts - this._dtsBase;

      if (firstDts === -1) {
        firstDts = dts;
      }

      let cts;
      let pts;
      if (avcSample.pts !== undefined) {
        pts = avcSample.pts - this._dtsBase;
        cts = pts - dts;
      }
      if (avcSample.cts !== undefined) {
        pts = avcSample.cts + dts;
        cts = avcSample.cts;
      }

      let mdatSample = {
        buffer: [],
        size: 0
      };
      mdatBox.samples.push(mdatSample);
      mdatSample.buffer.push(avcSample.data);
      mdatSample.size += avcSample.data.byteLength;

      let sampleDuration = 0;
      if (samples.length >= 1) {
        const nextDts = samples[0].dts - this._dtsBase;
        sampleDuration = nextDts - dts;
      } else {
        if (mp4Samples.length >= 1) {
          // lastest sample, use second last duration
          sampleDuration = mp4Samples[mp4Samples.length - 1].duration;
        } else {
          // the only one sample, use reference duration
          sampleDuration = this.videoMeta.refSampleDuration;
        }
      }
      this.videoAllDuration += sampleDuration;
      // console.log(`dts ${dts}`, `pts ${pts}`, `cts: ${cts}`, `duration: ${sampleDuration}`, avcSample)
      mp4Samples.push({
        dts,
        cts,
        pts,
        data: avcSample.data,
        size: avcSample.data.byteLength,
        isKeyframe,
        duration: sampleDuration,
        flags: {
          isLeading: 0,
          dependsOn: isKeyframe ? 2 : 1,
          isDependedOn: isKeyframe ? 1 : 0,
          hasRedundancy: 0,
          isNonSync: isKeyframe ? 0 : 1
        },
        originDts: dts,
        type: 'video'
      });
    }

    let moofMdat = new _xgplayerUtils.Buffer();
    if (mp4Samples.length) {
      const moof = _fmp2.default.moof({
        id: track.meta.id,
        time: firstDts,
        samples: mp4Samples
      });
      const mdat = _fmp2.default.mdat(mdatBox);
      moofMdat.write(moof, mdat);

      this.writeToSource('video', moofMdat);
    }

    if (initSegment) {
      this.writeToSource('video', initSegment);

      if (samples.length) {
        // second part of stream change
        track.samples = samples;
        return this._remuxVideo(track);
      }
    }

    this.isFirstVideo = false;
    this.emit(REMUX_EVENTS.MEDIA_SEGMENT, 'video');

    const lastSample = mp4Samples[mp4Samples.length - 1];
    this._videoNextDts = lastSample.dts + lastSample.duration;
    track.samples = [];
    track.length = 0;
  }

  _remuxAudio(track) {
    const { samples } = track;
    let firstDts = -1;
    let mp4Samples = [];

    let initSegment = null;
    const mdatBox = {
      samples: []
    };
    if (!samples || !samples.length) {
      return;
    }
    let isFirstDtsInited = false;
    while (samples.length) {
      let sample = samples.shift();
      const { data, options } = sample;
      if (!this.isFirstAudio && options && options.meta) {
        initSegment = this.remuxInitSegment('audio', options.meta);
        options.meta = null;
        samples.unshift(sample);
        if (!options.isContinue) {
          this.resetDtsBase();
        }
        break;
      }

      let dts = sample.dts - this._dtsBase;
      const originDts = dts;
      if (!isFirstDtsInited) {
        firstDts = dts;
        isFirstDtsInited = true;
      }

      let sampleDuration = 0;

      if (this.audioMeta.refSampleDurationFixed) {
        sampleDuration = this.audioMeta.refSampleDurationFixed;
      } else if (samples.length >= 1) {
        const nextDts = samples[0].dts - this._dtsBase;
        sampleDuration = nextDts - dts;
      } else {
        if (mp4Samples.length >= 1) {
          // use second last sample duration
          sampleDuration = mp4Samples[mp4Samples.length - 1].duration;
        } else {
          // the only one sample, use reference sample duration
          sampleDuration = this.audioMeta.refSampleDuration;
        }
      }

      // console.log('remux audio ', dts)
      this.audioAllDuration += sampleDuration;
      const mp4Sample = {
        dts,
        pts: dts,
        cts: 0,
        size: data.byteLength,
        duration: sample.duration ? sample.duration : sampleDuration,
        flags: {
          isLeading: 0,
          dependsOn: 2,
          isDependedOn: 1,
          hasRedundancy: 0,
          isNonSync: 0
        },
        isKeyframe: true,
        originDts,
        type: 'audio'
      };

      let mdatSample = {
        buffer: [],
        size: 0
      };
      mdatSample.buffer.push(data);
      mdatSample.size += data.byteLength;

      mdatBox.samples.push(mdatSample);

      mp4Samples.push(mp4Sample);
    }

    const moofMdat = new _xgplayerUtils.Buffer();

    if (mp4Samples.length) {
      const moof = _fmp2.default.moof({
        id: track.meta.id,
        time: firstDts,
        samples: mp4Samples
      });
      const mdat = _fmp2.default.mdat(mdatBox);
      moofMdat.write(moof, mdat);

      this.writeToSource('audio', moofMdat);
    }

    if (initSegment) {
      this.writeToSource('audio', initSegment);
      if (samples.length) {
        // second part of stream change
        track.samples = samples;
        return this._remuxAudio(track);
      }
    }

    this.isFirstAudio = false;
    this.emit(REMUX_EVENTS.MEDIA_SEGMENT, 'audio', moofMdat);

    const lastSample = mp4Samples[mp4Samples.length - 1];
    this._videoNextDts = lastSample.dts + lastSample.duration;
    track.samples = [];
    track.length = 0;
  }

  writeToSource(type, buffer) {
    let presourcebuffer = this._context.getInstance('PRE_SOURCE_BUFFER');
    let source = presourcebuffer.getSource(type);
    if (!source) {
      source = presourcebuffer.createSource(type);
    }

    source.data.push(buffer);
  }

  initSilentAudio(dts, duration) {
    const unit = Mp4Remuxer.getSilentFrame(this.audioMeta.channelCount);
    return {
      dts,
      pts: dts,
      cts: 0,
      duration,
      unit,
      size: unit.byteLength,
      originDts: dts,
      type: 'video'
    };
  }

  get videoMeta() {
    return this._context.getInstance('TRACKS').videoTrack.meta;
  }
  get audioMeta() {
    return this._context.getInstance('TRACKS').audioTrack.meta;
  }

  static getSilentFrame(channelCount) {
    if (channelCount === 1) {
      return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x23, 0x80]);
    } else if (channelCount === 2) {
      return new Uint8Array([0x21, 0x00, 0x49, 0x90, 0x02, 0x19, 0x00, 0x23, 0x80]);
    } else if (channelCount === 3) {
      return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x8e]);
    } else if (channelCount === 4) {
      return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x80, 0x2c, 0x80, 0x08, 0x02, 0x38]);
    } else if (channelCount === 5) {
      return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x38]);
    } else if (channelCount === 6) {
      return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x00, 0xb2, 0x00, 0x20, 0x08, 0xe0]);
    }
    return null;
  }
}
exports.default = Mp4Remuxer;

/***/ }),

/***/ "../xgplayer-utils/index.js":
/*!**********************************!*\
  !*** ../xgplayer-utils/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  Context: __webpack_require__(/*! ./src/context */ "../xgplayer-utils/src/context.js").default,

  // Modules from constants
  EVENTS: __webpack_require__(/*! ./src/constants/events */ "../xgplayer-utils/src/constants/events.js").default,
  WORKER_COMMANDS: __webpack_require__(/*! ./src/constants/worker-commands */ "../xgplayer-utils/src/constants/worker-commands.js").default,

  // Modules from env
  sniffer: __webpack_require__(/*! ./src/env/sniffer */ "../xgplayer-utils/src/env/sniffer.js").default,
  isLe: __webpack_require__(/*! ./src/env/isle */ "../xgplayer-utils/src/env/isle.js").default,
  UTF8: __webpack_require__(/*! ./src/env/utf8 */ "../xgplayer-utils/src/env/utf8.js").default,
  PageVisibility: __webpack_require__(/*! ./src/env/PageVisibility */ "../xgplayer-utils/src/env/PageVisibility.js").default,

  // Models
  MediaInfo: __webpack_require__(/*! ./src/models/media-info */ "../xgplayer-utils/src/models/media-info.js").default,
  MediaSample: __webpack_require__(/*! ./src/models/media-sample */ "../xgplayer-utils/src/models/media-sample.js").default,
  MediaSegment: __webpack_require__(/*! ./src/models/media-segment */ "../xgplayer-utils/src/models/media-segment.js").default,
  MediaSegmentList: __webpack_require__(/*! ./src/models/media-segment-list */ "../xgplayer-utils/src/models/media-segment-list.js").default,
  AudioTrackMeta: __webpack_require__(/*! ./src/models/track-meta */ "../xgplayer-utils/src/models/track-meta.js").AudioTrackMeta,
  VideoTrackMeta: __webpack_require__(/*! ./src/models/track-meta */ "../xgplayer-utils/src/models/track-meta.js").VideoTrackMeta,
  AudioTrackSample: __webpack_require__(/*! ./src/models/track-sample */ "../xgplayer-utils/src/models/track-sample.js").AudioTrackSample,
  VideoTrackSample: __webpack_require__(/*! ./src/models/track-sample */ "../xgplayer-utils/src/models/track-sample.js").VideoTrackSample,

  // Modules from mse
  Mse: __webpack_require__(/*! ./src/mse/index */ "../xgplayer-utils/src/mse/index.js").default,

  // Modules from write
  Stream: __webpack_require__(/*! ./src/write/stream */ "../xgplayer-utils/src/write/stream.js").default,
  Buffer: __webpack_require__(/*! ./src/write/buffer */ "../xgplayer-utils/src/write/buffer.js").default,

  MobileVideo: __webpack_require__(/*! ./src/mobile/mobile-video */ "../xgplayer-utils/src/mobile/mobile-video.js"),
  // Crypto
  Crypto: __webpack_require__(/*! ./src/crypto */ "../xgplayer-utils/src/crypto/index.js").default
};

/***/ }),

/***/ "../xgplayer-utils/node_modules/concat-typed-array/lib/concat.js":
/*!***********************************************************************!*\
  !*** ../xgplayer-utils/node_modules/concat-typed-array/lib/concat.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (ResultConstructor) {
  var totalLength = 0;

  for (var _len = arguments.length, arrays = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arrays[_key - 1] = arguments[_key];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arrays[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var arr = _step.value;

      totalLength += arr.length;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var result = new ResultConstructor(totalLength);
  var offset = 0;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = arrays[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _arr = _step2.value;

      result.set(_arr, offset);
      offset += _arr.length;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return result;
};

/***/ }),

/***/ "../xgplayer-utils/node_modules/concat-typed-array/lib/index.js":
/*!**********************************************************************!*\
  !*** ../xgplayer-utils/node_modules/concat-typed-array/lib/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _concat = __webpack_require__(/*! ./concat */ "../xgplayer-utils/node_modules/concat-typed-array/lib/concat.js");

var _concat2 = _interopRequireDefault(_concat);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = _concat2.default;

/***/ }),

/***/ "../xgplayer-utils/node_modules/webworkify-webpack/index.js":
/*!******************************************************************!*\
  !*** ../xgplayer-utils/node_modules/webworkify-webpack/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function webpackBootstrapFunc(modules) {
  /******/ // The module cache
  /******/var installedModules = {};

  /******/ // The require function
  /******/function __webpack_require__(moduleId) {

    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId])
      /******/return installedModules[moduleId].exports;

    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };

    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    /******/ // Flag the module as loaded
    /******/module.l = true;

    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }

  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;

  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;

  /******/ // identity function for calling harmony imports with the correct context
  /******/__webpack_require__.i = function (value) {
    return value;
  };

  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };

  /******/ // define __esModule on exports
  /******/__webpack_require__.r = function (exports) {
    /******/Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };

  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };

  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };

  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "/";

  /******/ // on error function for async loading
  /******/__webpack_require__.oe = function (err) {
    console.error(err);throw err;
  };

  var f = __webpack_require__(__webpack_require__.s = ENTRY_MODULE);
  return f.default || f; // try to call default if defined to also support babel esmodule exports
}

var moduleNameReqExp = '[\\.|\\-|\\+|\\w|\/|@]+';
var dependencyRegExp = '\\(\\s*(\/\\*.*?\\*\/)?\\s*.*?(' + moduleNameReqExp + ').*?\\)'; // additional chars when output.pathinfo is true

// http://stackoverflow.com/a/2593661/130442
function quoteRegExp(str) {
  return (str + '').replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
}

function isNumeric(n) {
  return !isNaN(1 * n); // 1 * n converts integers, integers as string ("123"), 1e3 and "1e3" to integers and strings to NaN
}

function getModuleDependencies(sources, module, queueName) {
  var retval = {};
  retval[queueName] = [];

  var fnString = module.toString();
  var wrapperSignature = fnString.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
  if (!wrapperSignature) return retval;
  var webpackRequireName = wrapperSignature[1];

  // main bundle deps
  var re = new RegExp('(\\\\n|\\W)' + quoteRegExp(webpackRequireName) + dependencyRegExp, 'g');
  var match;
  while (match = re.exec(fnString)) {
    if (match[3] === 'dll-reference') continue;
    retval[queueName].push(match[3]);
  }

  // dll deps
  re = new RegExp('\\(' + quoteRegExp(webpackRequireName) + '\\("(dll-reference\\s(' + moduleNameReqExp + '))"\\)\\)' + dependencyRegExp, 'g');
  while (match = re.exec(fnString)) {
    if (!sources[match[2]]) {
      retval[queueName].push(match[1]);
      sources[match[2]] = __webpack_require__(match[1]).m;
    }
    retval[match[2]] = retval[match[2]] || [];
    retval[match[2]].push(match[4]);
  }

  // convert 1e3 back to 1000 - this can be important after uglify-js converted 1000 to 1e3
  var keys = Object.keys(retval);
  for (var i = 0; i < keys.length; i++) {
    for (var j = 0; j < retval[keys[i]].length; j++) {
      if (isNumeric(retval[keys[i]][j])) {
        retval[keys[i]][j] = 1 * retval[keys[i]][j];
      }
    }
  }

  return retval;
}

function hasValuesInQueues(queues) {
  var keys = Object.keys(queues);
  return keys.reduce(function (hasValues, key) {
    return hasValues || queues[key].length > 0;
  }, false);
}

function getRequiredModules(sources, moduleId) {
  var modulesQueue = {
    main: [moduleId]
  };
  var requiredModules = {
    main: []
  };
  var seenModules = {
    main: {}
  };

  while (hasValuesInQueues(modulesQueue)) {
    var queues = Object.keys(modulesQueue);
    for (var i = 0; i < queues.length; i++) {
      var queueName = queues[i];
      var queue = modulesQueue[queueName];
      var moduleToCheck = queue.pop();
      seenModules[queueName] = seenModules[queueName] || {};
      if (seenModules[queueName][moduleToCheck] || !sources[queueName][moduleToCheck]) continue;
      seenModules[queueName][moduleToCheck] = true;
      requiredModules[queueName] = requiredModules[queueName] || [];
      requiredModules[queueName].push(moduleToCheck);
      var newModules = getModuleDependencies(sources, sources[queueName][moduleToCheck], queueName);
      var newModulesKeys = Object.keys(newModules);
      for (var j = 0; j < newModulesKeys.length; j++) {
        modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]] || [];
        modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]].concat(newModules[newModulesKeys[j]]);
      }
    }
  }

  return requiredModules;
}

module.exports = function (moduleId, options) {
  options = options || {};
  var sources = {
    main: __webpack_require__.m
  };

  var requiredModules = options.all ? { main: Object.keys(sources.main) } : getRequiredModules(sources, moduleId);

  var src = '';

  Object.keys(requiredModules).filter(function (m) {
    return m !== 'main';
  }).forEach(function (module) {
    var entryModule = 0;
    while (requiredModules[module][entryModule]) {
      entryModule++;
    }
    requiredModules[module].push(entryModule);
    sources[module][entryModule] = '(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })';
    src = src + 'var ' + module + ' = (' + webpackBootstrapFunc.toString().replace('ENTRY_MODULE', JSON.stringify(entryModule)) + ')({' + requiredModules[module].map(function (id) {
      return '' + JSON.stringify(id) + ': ' + sources[module][id].toString();
    }).join(',') + '});\n';
  });

  src = src + 'new ((' + webpackBootstrapFunc.toString().replace('ENTRY_MODULE', JSON.stringify(moduleId)) + ')({' + requiredModules.main.map(function (id) {
    return '' + JSON.stringify(id) + ': ' + sources.main[id].toString();
  }).join(',') + '}))(self);';

  var blob = new window.Blob([src], { type: 'text/javascript' });
  if (options.bare) {
    return blob;
  }

  var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

  var workerUrl = URL.createObjectURL(blob);
  var worker = new window.Worker(workerUrl);
  worker.objectURL = workerUrl;

  return worker;
};

/***/ }),

/***/ "../xgplayer-utils/src/constants/events.js":
/*!*************************************************!*\
  !*** ../xgplayer-utils/src/constants/events.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const LOADER_EVENTS = {
  LADER_START: 'LOADER_START',
  LOADER_DATALOADED: 'LOADER_DATALOADED',
  LOADER_COMPLETE: 'LOADER_COMPLETE',
  LOADER_ERROR: 'LOADER_ERROR'
};

const DEMUX_EVENTS = {
  DEMUX_START: 'DEMUX_START',
  DEMUX_COMPLETE: 'DEMUX_COMPLETE',
  DEMUX_ERROR: 'DEMUX_ERROR',
  METADATA_PARSED: 'METADATA_PARSED',
  VIDEO_METADATA_CHANGE: 'VIDEO_METADATA_CHANGE',
  AUDIO_METADATA_CHANGE: 'AUDIO_METADATA_CHANGE',
  MEDIA_INFO: 'MEDIA_INFO'
};

const REMUX_EVENTS = {
  REMUX_METADATA: 'REMUX_METADATA',
  REMUX_MEDIA: 'REMUX_MEDIA',
  MEDIA_SEGMENT: 'MEDIA_SEGMENT',
  REMUX_ERROR: 'REMUX_ERROR',
  INIT_SEGMENT: 'INIT_SEGMENT',
  DETECT_CHANGE_STREAM: 'DETECT_CHANGE_STREAM'
};

const MSE_EVENTS = {
  SOURCE_UPDATE_END: 'SOURCE_UPDATE_END'

  // hls专有events
};const HLS_EVENTS = {
  RETRY_TIME_EXCEEDED: 'RETRY_TIME_EXCEEDED'
};

const CRYTO_EVENTS = {
  START_DECRYPT: 'START_DECRYPT',
  DECRYPTED: 'DECRYPTED'
};

const BROWSER_EVENTS = {
  VISIBILITY_CHANGE: 'VISIBILITY_CHANGE'
};

const ALLEVENTS = Object.assign({}, LOADER_EVENTS, DEMUX_EVENTS, REMUX_EVENTS, MSE_EVENTS, HLS_EVENTS, BROWSER_EVENTS);

const FlvAllowedEvents = [];
const HlsAllowedEvents = [];

for (let key in ALLEVENTS) {
  if (ALLEVENTS.hasOwnProperty(key)) {
    FlvAllowedEvents.push(ALLEVENTS[key]);
  }
}

for (let key in ALLEVENTS) {
  if (ALLEVENTS.hasOwnProperty(key)) {
    HlsAllowedEvents.push(ALLEVENTS[key]);
  }
}

exports.default = {
  ALLEVENTS,
  HLS_EVENTS,
  REMUX_EVENTS,
  DEMUX_EVENTS,
  MSE_EVENTS,
  LOADER_EVENTS,
  FlvAllowedEvents,
  HlsAllowedEvents,
  CRYTO_EVENTS,
  BROWSER_EVENTS
};

/***/ }),

/***/ "../xgplayer-utils/src/constants/worker-commands.js":
/*!**********************************************************!*\
  !*** ../xgplayer-utils/src/constants/worker-commands.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const CONTEXT_COMOMANDS = exports.CONTEXT_COMOMANDS = {
  ON: 'on',
  ONCE: 'once',
  OFF: 'off',
  EMIT: 'emit',
  DESTROY: 'destroy'
};

/***/ }),

/***/ "../xgplayer-utils/src/context.js":
/*!****************************************!*\
  !*** ../xgplayer-utils/src/context.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mediaInfo = __webpack_require__(/*! ./models/media-info */ "../xgplayer-utils/src/models/media-info.js");

var _mediaInfo2 = _interopRequireDefault(_mediaInfo);

var _events = __webpack_require__(/*! events */ "../../node_modules/events/events.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DIRECT_EMIT_FLAG = '__TO__';

class Context {
  constructor(allowedEvents = []) {
    this._emitter = new _events.EventEmitter();
    this._instanceMap = {}; // 所有的解码流程实例
    this._clsMap = {}; // 构造函数的map
    this._inited = false;
    this.mediaInfo = new _mediaInfo2.default();
    this.allowedEvents = allowedEvents;
    this._hooks = {}; // 注册在事件前/后的钩子，例如 before('DEMUX_COMPLETE')
  }

  /**
   * 从上下文中获取解码流程实例，如果没有实例，构造一个
   * @param tag
   * @param args
   * @returns {*}
   */
  getInstance(tag) {
    const instance = this._instanceMap[tag];
    if (instance) {
      return instance;
    } else {
      // throw new Error(`${tag}实例尚未初始化`)
      return null;
    }
  }

  /**
   * 初始化具体实例
   * @param tag
   * @param args
   */
  initInstance(tag, ...args) {
    if (this._clsMap[tag]) {
      const newInstance = new this._clsMap[tag](...args);
      this._instanceMap[tag] = newInstance;
      if (newInstance.init) {
        newInstance.init(); // TODO: lifecircle
      }
      return newInstance;
    } else {
      throw new Error(`${tag}未在context中注册`);
    }
  }

  /**
   * 避免大量的initInstance调用，初始化所有的组件
   * @param config
   */
  init(config) {
    if (this._inited) {
      return;
    }
    for (let tag in this._clsMap) {
      // if not inited, init an instance
      if (this._clsMap.hasOwnProperty(tag) && !this._instanceMap[tag]) {
        this.initInstance(tag, config);
      }
    }
    this._inited = true;
  }

  /**
   * 注册一个上下文流程，提供安全的事件发送机制
   * @param tag
   * @param cls
   */
  registry(tag, cls) {
    const emitter = this._emitter;
    const checkMessageName = this._isMessageNameValid.bind(this);
    const self = this;
    const enhanced = class extends cls {
      constructor(...args) {
        super(...args);
        this.listeners = {};
        this.onceListeners = {};
        this.TAG = tag;
        this._context = self;
      }

      on(messageName, callback) {
        checkMessageName(messageName);

        if (this.listeners[messageName]) {
          this.listeners[messageName].push(callback);
        } else {
          this.listeners[messageName] = [callback];
        }

        emitter.on(`${messageName}${DIRECT_EMIT_FLAG}${tag}`, callback); // 建立定向通信监听
        return emitter.on(messageName, callback);
      }

      /**
       * 在某个事件触发前执行
       * @param messageName
       * @param callback
       */
      before(messageName, callback) {
        checkMessageName(messageName);
        if (self._hooks[messageName]) {
          self._hooks[messageName].push(callback);
        } else {
          self._hooks[messageName] = [callback];
        }
      }

      once(messageName, callback) {
        checkMessageName(messageName);

        if (this.onceListeners[messageName]) {
          this.onceListeners[messageName].push(callback);
        } else {
          this.onceListeners[messageName] = [callback];
        }

        emitter.once(`${messageName}${DIRECT_EMIT_FLAG}${tag}`, callback);
        return emitter.once(messageName, callback);
      }

      emit(messageName, ...args) {
        checkMessageName(messageName);

        const beforeList = self._hooks ? self._hooks[messageName] : null;

        if (beforeList) {
          for (let i = 0, len = beforeList.length; i < len; i++) {
            const callback = beforeList[i];
            callback();
          }
        }
        return emitter.emit(messageName, ...args);
      }

      /**
       * 定向发送给某个组件单例的消息
       * @param messageName
       * @param args
       */
      emitTo(tag, messageName, ...args) {
        checkMessageName(messageName);

        return emitter.emit(`${messageName}${DIRECT_EMIT_FLAG}${tag}`, ...args);
      }

      off(messageName, callback) {
        checkMessageName(messageName);
        return emitter.off(messageName, callback);
      }

      removeListeners() {
        const hasOwn = Object.prototype.hasOwnProperty.bind(this.listeners);

        for (let messageName in this.listeners) {
          if (hasOwn(messageName)) {
            const callbacks = this.listeners[messageName] || [];
            for (let i = 0; i < callbacks.length; i++) {
              const callback = callbacks[i];
              emitter.off(messageName, callback);
              emitter.off(`${messageName}${DIRECT_EMIT_FLAG}${tag}`, callback);
            }
          }
        }

        for (let messageName in this.onceListeners) {
          if (hasOwn(messageName)) {
            const callbacks = this.onceListeners[messageName] || [];
            for (let i = 0; i < callbacks.length; i++) {
              const callback = callbacks[i];
              emitter.off(messageName, callback);
              emitter.off(`${messageName}${DIRECT_EMIT_FLAG}${tag}`, callback);
            }
          }
        }
      }

      /**
       * 在组件销毁时，默认将它注册的事件全部卸载，确保不会造成内存泄漏
       */
      destroy() {
        // step1 unlisten events
        this.removeListeners();
        this.listeners = {};

        // step2 release from context
        delete self._instanceMap[tag];
        if (super.destroy) {
          return super.destroy();
        }
      }
    };
    this._clsMap[tag] = enhanced;

    /**
     * get instance immediately
     * e.g const instance = context.registry(tag, Cls)(config)
     * */
    return (...args) => {
      return this.initInstance(tag, ...args);
    };
  }

  /**
   * 对存在的实例进行
   */
  destroyInstances() {
    Object.keys(this._instanceMap).forEach(tag => {
      if (this._instanceMap[tag].destroy) {
        this._instanceMap[tag].destroy();
      }
    });
  }

  /**
   * 编解码流程无需关注事件的解绑
   */
  destroy() {
    this._emitter = null;
    this.allowedEvents = [];
    this._clsMap = null;
    this._context = null;
    this._hooks = null;
    this.destroyInstances();
  }

  /**
   * 对信道进行收拢
   * @param messageName
   * @private
   */
  _isMessageNameValid(messageName) {
    if (!this.allowedEvents.indexOf(messageName) < 0) {
      throw new Error(`unregistered message name: ${messageName}`);
    }
  }
}

exports.default = Context;

/***/ }),

/***/ "../xgplayer-utils/src/crypto/index.js":
/*!*********************************************!*\
  !*** ../xgplayer-utils/src/crypto/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _events = __webpack_require__(/*! ../constants/events */ "../xgplayer-utils/src/constants/events.js");

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CRYTO_EVENTS = _events2.default.CRYTO_EVENTS;
class Crypto {
    constructor(config) {
        this.inputBuffer = config.inputbuffer;
        this.outputBuffer = config.outputbuffer;
        this.key = config.key;
        this.iv = config.iv;
        this.method = config.method;

        this.crypto = window.crypto || window.msCrypto;
    }

    init() {
        this.on(CRYTO_EVENTS.START_DECRYPT, this.decript.bind(this));
    }

    decript() {
        if (!this.aeskey) {
            let sbkey = this.crypto.subtle.importKey('raw', this.key.buffer, { name: 'AES-CBC' }, false, ['encrypt', 'decrypt']);
            sbkey.then(key => {
                this.aeskey = key;
                this.decriptData();
            });
        } else {
            this.decriptData();
        }
    }

    decriptData() {
        let inputbuffer = this._context.getInstance(this.inputBuffer);
        let outputbuffer = this._context.getInstance(this.outputBuffer);
        let data = inputbuffer.shift();
        if (data) {
            this.crypto.subtle.decrypt({ name: 'AES-CBC', iv: this.iv.buffer }, this.aeskey, data).then(res => {
                outputbuffer.push(new Uint8Array(res));
                this.emit(CRYTO_EVENTS.DECRYPTED);
                this.decriptData(data);
            });
        }
    }
}
exports.default = Crypto;

/***/ }),

/***/ "../xgplayer-utils/src/env/PageVisibility.js":
/*!***************************************************!*\
  !*** ../xgplayer-utils/src/env/PageVisibility.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = __webpack_require__(/*! ../constants/events */ "../xgplayer-utils/src/constants/events.js");

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BROWSER_EVENTS = _events2.default.BROWSER_EVENTS;

let hidden;
let visibilityChange;
if (typeof document.hidden !== 'undefined') {
  // Opera 12.10 and Firefox 18 and later support
  hidden = 'hidden';
  visibilityChange = 'visibilitychange';
} else if (typeof document.msHidden !== 'undefined') {
  hidden = 'msHidden';
  visibilityChange = 'msvisibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
  hidden = 'webkitHidden';
  visibilityChange = 'webkitvisibilitychange';
}

class PageVisibility {

  constructor() {
    this.callbacks = {
      onShow: [],
      onHidden: []
    };
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    this.init();
  }

  init() {
    document.addEventListener(visibilityChange, this.handleVisibilityChange, false);
  }

  handleVisibilityChange() {
    this.emit(BROWSER_EVENTS.VISIBILITY_CHANGE, document[hidden]);
  }

  destroy() {
    document.removeEventListener(visibilityChange, this.handleVisibilityChange);
  }

}

exports.default = PageVisibility;

/***/ }),

/***/ "../xgplayer-utils/src/env/isle.js":
/*!*****************************************!*\
  !*** ../xgplayer-utils/src/env/isle.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const le = function () {
  const buf = new ArrayBuffer(2);
  new DataView(buf).setInt16(0, 256, true); // little-endian write
  return new Int16Array(buf)[0] === 256; // platform-spec read, if equal then LE
}();

exports.default = le;

/***/ }),

/***/ "../xgplayer-utils/src/env/sniffer.js":
/*!********************************************!*\
  !*** ../xgplayer-utils/src/env/sniffer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const le = function () {
  const buf = new ArrayBuffer(2);
  new DataView(buf).setInt16(0, 256, true); // little-endian write
  return new Int16Array(buf)[0] === 256; // platform-spec read, if equal then LE
}();

const sniffer = {
  get device() {
    let r = sniffer.os;
    return r.isPc ? 'pc' : r.isTablet ? 'tablet' : 'mobile';
  },
  get browser() {
    let ua = navigator.userAgent.toLowerCase();
    let reg = {
      ie: /rv:([\d.]+)\) like gecko/,
      firfox: /firefox\/([\d.]+)/,
      chrome: /chrome\/([\d.]+)/,
      opera: /opera.([\d.]+)/,
      safari: /version\/([\d.]+).*safari/
    };
    return [].concat(Object.keys(reg).filter(key => reg[key].test(ua)))[0];
  },
  get os() {
    let ua = navigator.userAgent;
    let isWindowsPhone = /(?:Windows Phone)/.test(ua);
    let isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone;
    let isAndroid = /(?:Android)/.test(ua);
    let isFireFox = /(?:Firefox)/.test(ua);
    let isTablet = /(?:iPad|PlayBook)/.test(ua) || isAndroid && !/(?:Mobile)/.test(ua) || isFireFox && /(?:Tablet)/.test(ua);
    let isPhone = /(?:iPhone)/.test(ua) && !isTablet;
    let isPc = !isPhone && !isAndroid && !isSymbian;
    return {
      isTablet,
      isPhone,
      isAndroid,
      isPc,
      isSymbian,
      isWindowsPhone,
      isFireFox
    };
  },

  get isLe() {
    return le;
  }
};

exports.default = sniffer;

/***/ }),

/***/ "../xgplayer-utils/src/env/utf8.js":
/*!*****************************************!*\
  !*** ../xgplayer-utils/src/env/utf8.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class UTF8 {
  static decode(uint8array) {
    const out = [];
    const input = uint8array;
    let i = 0;
    const length = uint8array.length;

    while (i < length) {
      if (input[i] < 0x80) {
        out.push(String.fromCharCode(input[i]));
        ++i;
        continue;
      } else if (input[i] < 0xC0) {
        // fallthrough
      } else if (input[i] < 0xE0) {
        if (UTF8._checkContinuation(input, i, 1)) {
          const ucs4 = (input[i] & 0x1F) << 6 | input[i + 1] & 0x3F;
          if (ucs4 >= 0x80) {
            out.push(String.fromCharCode(ucs4 & 0xFFFF));
            i += 2;
            continue;
          }
        }
      } else if (input[i] < 0xF0) {
        if (UTF8._checkContinuation(input, i, 2)) {
          const ucs4 = (input[i] & 0xF) << 12 | (input[i + 1] & 0x3F) << 6 | input[i + 2] & 0x3F;
          if (ucs4 >= 0x800 && (ucs4 & 0xF800) !== 0xD800) {
            out.push(String.fromCharCode(ucs4 & 0xFFFF));
            i += 3;
            continue;
          }
        }
      } else if (input[i] < 0xF8) {
        if (UTF8._checkContinuation(input, i, 3)) {
          let ucs4 = (input[i] & 0x7) << 18 | (input[i + 1] & 0x3F) << 12 | (input[i + 2] & 0x3F) << 6 | input[i + 3] & 0x3F;
          if (ucs4 > 0x10000 && ucs4 < 0x110000) {
            ucs4 -= 0x10000;
            out.push(String.fromCharCode(ucs4 >>> 10 | 0xD800));
            out.push(String.fromCharCode(ucs4 & 0x3FF | 0xDC00));
            i += 4;
            continue;
          }
        }
      }
      out.push(String.fromCharCode(0xFFFD));
      ++i;
    }

    return out.join('');
  }

  static _checkContinuation(uint8array, start, checkLength) {
    let array = uint8array;
    if (start + checkLength < array.length) {
      while (checkLength--) {
        if ((array[++start] & 0xC0) !== 0x80) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }
}

exports.default = UTF8;

/***/ }),

/***/ "../xgplayer-utils/src/mobile/audio-context.js":
/*!*****************************************************!*\
  !*** ../xgplayer-utils/src/mobile/audio-context.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = __webpack_require__(/*! events */ "../../node_modules/events/events.js");

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AudioCtx extends _events2.default {
  constructor(config) {
    super();
    this.config = Object.assign({}, config);
    let AudioContext = window.AudioContext || window.webkitAudioContext;
    this.context = new AudioContext();
    this.gainNode = this.context.createGain();
    this.gainNode.connect(this.context.destination);
    this.meta = undefined;
    this.samples = [];
    this.preloadTime = this.config.preloadTime || 3;
    this.duration = 0;

    this._currentBuffer = undefined;
    this._nextBuffer = undefined;
    this._lastpts = undefined;
    this._preDecode = [];
    this._currentTime = 0;
    this._decoding = false;
    // 记录外部传输的状态
    this._played = false;
  }

  get currentTime() {
    return this._currentTime;
  }

  decodeAudio(audioTrack) {
    let { samples } = audioTrack;
    let data = samples;
    audioTrack.samples = [];
    this.setAudioData(data);
  }
  setAudioData(data) {
    for (let i = 0; i < data.length; i++) {
      data[i].pts = data[i].pts === undefined ? data[i].dts : data[i].pts;
      this._preDecode.push(data[i]);
    }
    if (this._preDecode.length > 0) {
      if (this._lastpts === undefined) {
        this._lastpts = this._preDecode[0].pts;
      }
      if ((this._preDecode[this._preDecode.length - 1].pts - this._lastpts) / 1000 > this.preloadTime) {
        this.decodeAAC();
      }
    }
  }

  decodeAAC() {
    if (this._decoding) {
      return;
    }
    this._decoding = true;
    let data = this._preDecode;
    let samples = [];
    let _this = this;
    let sample = data.shift();
    while (sample) {
      let sampleData = AudioCtx.getAACData(this.meta, sample);
      samples.push(sampleData);
      this._lastpts = sample.pts;
      sample = data.shift();
    }
    let buffer = AudioCtx.combileData(samples);
    try {
      this.context.decodeAudioData(buffer.buffer, function (buffer) {
        let audioSource = _this.context.createBufferSource();
        audioSource.buffer = buffer;
        audioSource.onended = _this.onSourceEnded.bind(_this);
        _this.samples.push({
          time: _this.duration,
          duration: buffer.duration,
          data: audioSource
        });

        _this.duration += buffer.duration;

        if (!_this._currentBuffer) {
          _this._currentBuffer = _this.getTimeBuffer(_this.currentTime);

          if (_this._played) {
            _this.play();
          }
        }

        if (!_this._nextBuffer && _this._currentBuffer) {
          _this._nextBuffer = _this.getTimeBuffer(_this.currentTime + _this._currentBuffer.duration);
        }
        _this._decoding = false;

        if ((_this._preDecode.length > 0 && _this._preDecode[_this._preDecode.length - 1].pts - _this._lastpts) / 1000 >= _this.preloadTime) {
          _this.decodeAAC();
        }
      });
    } catch (err) {
      console.error(err);
    }
  }

  onSourceEnded() {
    if (!this._nextBuffer || !this._played) {
      return;
    }
    let audioSource = this._nextBuffer.data;
    audioSource.start();
    audioSource.connect(this.gainNode);
    this._currentBuffer = this._nextBuffer;
    this._currentTime = this._currentBuffer.time;
    this._nextBuffer = this.getTimeBuffer(this.currentTime);
    if (this._currentBuffer) {
      this._nextBuffer = this.getTimeBuffer(this.currentTime + this._currentBuffer.duration);
    }
    this.emit('AUDIO_SOURCE_END');
  }

  play() {
    this._played = true;
    if (!this._currentBuffer) {
      return;
    }
    let audioSource = this._currentBuffer.data;
    audioSource.connect(this.gainNode);
    audioSource.start();
  }

  pause() {
    const audioCtx = this.context;
    if (audioCtx.state === 'running') {
      audioCtx.suspend();
    }
  }

  destroy() {
    this.context.close();
  }

  getTimeBuffer(time) {
    let ret;
    for (let i = 0; i < this.samples.length; i++) {
      let sample = this.samples[i];
      if (sample.time <= time && sample.time + sample.duration > time) {
        ret = sample;
        break;
      }
    }
    return ret;
  }

  setAudioMetaData(meta) {
    this.meta = meta;
  }

  static getAACData(meta, sample) {
    let buffer = new Uint8Array(sample.data.byteLength + 7);
    let adts = AudioCtx.getAdts(meta, sample.data);
    buffer.set(adts);
    buffer.set(sample.data, 7);
    return buffer;
  }

  static combileData(samples) {
    // get length
    let length = 0;
    for (let i = 0, k = samples.length; i < k; i++) {
      length += samples[i].byteLength;
    }

    let ret = new Uint8Array(length);
    let offset = 0;
    // combile data;
    for (let i = 0, k = samples.length; i < k; i++) {
      ret.set(samples[i], offset);
      offset += samples[i].byteLength;
    }
    return ret;
  }

  static getAdts(meta, data) {
    let adts = new Uint8Array(7);

    // 设置同步位 0xfff 12bit
    adts[0] = 0xff;
    adts[1] = 0xf0;

    // Object data (没什么人用MPEG-2了，HLS和FLV也全是MPEG-4，这里直接0)  1bit
    // Level always 00 2bit
    // CRC always 1 1bit
    adts[1] = adts[1] | 0x01;

    // profile 2bit
    adts[2] = 0xc0 & meta.objectType - 1 << 6;

    // sampleFrequencyIndex
    adts[2] = adts[2] | 0x3c & meta.sampleRateIndex << 2;

    // private bit 0 1bit
    // chanel configuration 3bit
    adts[2] = adts[2] | 0x01 & meta.channelCount >> 2;
    adts[3] = 0xc0 & meta.channelCount << 6;

    // original_copy: 0 1bit
    // home: 0 1bit

    // adts_variable_header()
    // copyrighted_id_bit 0 1bit
    // copyrighted_id_start 0 1bit

    // aac_frame_length 13bit;
    let aacframelength = data.byteLength + 7;

    adts[3] = adts[3] | 0x03 & aacframelength >> 11;
    adts[4] = 0xff & aacframelength >> 3;
    adts[5] = 0xe0 & aacframelength << 5;

    // adts_buffer_fullness 0x7ff 11bit
    adts[5] = adts[5] | 0x1f;
    adts[6] = 0xfc;

    // number_of_raw_data_blocks_in_frame 0 2bit;
    return adts;
  }
}

exports.default = AudioCtx;

/***/ }),

/***/ "../xgplayer-utils/src/mobile/mobile-video.js":
/*!****************************************************!*\
  !*** ../xgplayer-utils/src/mobile/mobile-video.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _videoContext = __webpack_require__(/*! ./video-context */ "../xgplayer-utils/src/mobile/video-context.js");

var _videoContext2 = _interopRequireDefault(_videoContext);

var _audioContext = __webpack_require__(/*! ./audio-context */ "../xgplayer-utils/src/mobile/audio-context.js");

var _audioContext2 = _interopRequireDefault(_audioContext);

var _ticker = __webpack_require__(/*! ./ticker */ "../xgplayer-utils/src/mobile/ticker.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 音画同步调和器
 */
class AVReconciler {
  constructor(props) {
    this.aCtx = props.aCtx;
    this.vCtx = props.vCtx;
    this.video = props.video;
    this.timeoutId = null;
    this.start = null;
  }

  doReconcile() {
    const vCurTime = (this.video.currentTime || 0) * 1000;
    const aCurTime = (this.aCtx.currentTime || 0) * 1000;

    const gap = vCurTime - aCurTime;
    if (this.timeoutId) {
      return;
    }
    if (gap > 200) {
      // audio delayed for more than 100ms
      this.video.start += gap;
      this.vCtx.pause();
      this.timeoutId = setTimeout(() => {
        this.vCtx.play();
        this.timeoutId = null;
      }, gap);
    } else if (gap < -120) {
      this.vCtx.currentTime = this.vCtx.currentTime + Math.abs(gap);
    }
  }

  destroy() {
    this.start = null;
    this.aCtx = null;
    this.vCtx = null;
  }
}

// eslint-disable-next-line no-undef
class MobileVideo extends HTMLElement {
  constructor(config) {
    super();
    this._canvas = document.createElement('canvas');
    this.handleAudioSourceEnd = this.handleAudioSourceEnd.bind(this);
    this.init(config);
    this.played = false;
    this._paused = true;
  }

  init(config) {
    this.vCtx = new _videoContext2.default({
      canvas: this._canvas
    });
    this.aCtx = new _audioContext2.default(config);
    this.ticker = new ((0, _ticker.getTicker)())();
    this.reconciler = new AVReconciler({
      vCtx: this.vCtx,
      aCtx: this.aCtx,
      video: this
    });
    this.vCtx.oncanplay = () => {
      if (!this.played) {
        this.appendChild(this._canvas);
      }
      this.dispatchEvent(new Event('canplay'));
    };

    this.ticker.start(() => {
      //
      if (!this.start) {
        this.start = Date.now();
      }
      this._currentTime = Date.now() - this.start;
      this.vCtx._onTimer(this._currentTime);
    });

    this.aCtx.on('AUDIO_SOURCE_END', this.handleAudioSourceEnd);
  }

  handleAudioSourceEnd() {
    this.reconciler.doReconcile();
    this.vCtx.cleanBuffer();
  }

  _cleanBuffer() {
    this.vCtx.cleanBuffer();
  }

  destroy() {
    this.aCtx.destroy();
    this.vCtx.destroy();
    this.ticker.stop();
    this.start = null;
    this.reconciler.destroy();
    this.aCtx = null;
    this.vCtx = null;
    this.ticker = null;
  }

  onDemuxComplete(videoTrack, audioTrack) {
    this.aCtx.decodeAudio(audioTrack);
    this.vCtx.decodeVideo(videoTrack);
  }

  setAudioMeta(meta) {
    this.aCtx.setAudioMetaData(meta);
  }

  setVideoMeta(meta) {
    this.vCtx.setVideoMetaData(meta);
  }

  get width() {
    return this.vCtx.width;
  }

  get height() {
    return this.vCtx.height;
  }

  get videoWidth() {
    return this.vCtx.videoWidth;
  }

  get videoHeight() {
    return this.vCtx.videoHeight;
  }

  get src() {
    return this.getAttribute('src');
  }

  set src(val) {
    // do nothing
  }

  get readyState() {
    return this.vCtx.readyState;
  }

  get seeking() {
    return this.vCtx.seeking;
  }

  get currentTime() {
    return this.aCtx.currentTime;
  }

  get duration() {
    return this.aCtx.duration;
  }

  get paused() {
    return this._paused;
  }

  get playbackRate() {
    if (this.hasAttribute('playbackRate')) {
      return this.getAttribute('playbackRate');
    } else {
      return 1.0;
    }
  }

  set playbackRate(val) {
    this.setAttribute('playbackrate', val);
    this.aCtx.playbackRate = val;
    this.vCtx.playbackRate = val;

    this.dispatchEvent(new Event('ratechange'));
  }

  get ended() {
    return this.aCtx.ended;
  }

  get autoplay() {
    if (this.hasAttribute('autoplay')) {
      return this.getAttribute('autoplay');
    } else {
      return false;
    }
  }

  play() {
    if (this.played) {
      this.destroy();
      this.init();
    }

    this.vCtx.play().then(() => {
      this.played = true;
      this.aCtx.play();
      this.dispatchEvent(new Event('play'));
      this._paused = false;
    });
  }

  pause() {
    this._paused = true;
    this.aCtx.pause();
    this.vCtx.pause();

    this.dispatchEvent(new Event('pause'));
  }

  get volume() {
    return this.aCtx.volume;
  }

  set volume(vol) {
    this.setAttribute('volume', vol);
    this.aCtx.volume = vol;
    this.vCtx.volume = vol;
  }

  get muted() {
    if (this.getAttribute('muted')) {
      return this.getAttribute('muted');
    } else if (this.getAttribute('volume')) {
      return Number.parseInt(this.getAttribute('volume')) === 0;
    } else {
      return false;
    }
  }

  set muted(val) {
    this.setAttribute('muted ', val);
    if (!val) {
      this.aCtx.muted = false;
      this.vCtx.muted = false;
    }
  }

  get error() {
    return this.vCtx.error;
  }

  get buffered() {
    return this.vCtx.buffered;
  }
}
// eslint-disable-next-line no-undef
customElements.define('mobile-video', MobileVideo);

/***/ }),

/***/ "../xgplayer-utils/src/mobile/sourcebuffer.js":
/*!****************************************************!*\
  !*** ../xgplayer-utils/src/mobile/sourcebuffer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class SourceBuffer {
  constructor(config) {
    this.config = Object.assign({}, config);
    this.type = this.config.type;
    this.buffer = [];
    this.currentGop = undefined;
    this._lastGet = undefined;
  }

  push(frame) {
    if (this.type === 'video') {
      if (frame.isKeyframe) {
        let currentGop = {
          samples: [],
          start: frame.dts,
          end: frame.dts,
          nextGop: undefined
        };
        if (this.currentGop) {
          this.currentGop.nextGop = currentGop;
        }
        this.currentGop = currentGop;
        this.buffer.push(this.currentGop);
      }

      if (this.currentGop) {
        this.currentGop.samples.push(frame);

        if (frame.dts < this.currentGop.start) {
          this.currentGop.start = frame.dts;
        }

        if (frame.dts > this.currentGop.end) {
          this.currentGop.end = frame.dts;
        }
      }
    }
  }

  get(time) {
    if (this.type === 'video') {
      if (this.buffer.length < 1) {
        return;
      }

      if (time === undefined) {
        let sample = this._getNext();
        return sample;
      }
    }
  }

  _getNext() {
    if (!this._lastGet) {
      let gop = this.buffer[0];
      if (gop.samples.length < 1) {
        return;
      }

      this._lastGet = {
        gop,
        index: 0
      };
      return gop.samples[0];
    } else {
      let gop = this._lastGet.gop;
      let sample = gop.samples[this._lastGet.index + 1];
      if (sample) {
        this._lastGet.index = this._lastGet.index + 1;
        return sample;
      } else {
        gop = gop.nextGop;
        if (!gop || gop.samples.length < 1) {
          return;
        }
        sample = gop.samples[0];
        this._lastGet = {
          gop,
          index: 0
        };
        return sample;
      }
    }
  }

  remove(start, end) {
    if (this.buffer.length < 0) {
      return;
    }

    let i = 0;
    let gop = this.buffer[0];
    while (gop) {
      if (gop.end < end && gop.start >= start) {
        this.buffer.splice(i, 1);
        gop = this.buffer[i];
      } else {
        i += 1;
        gop = this.buffer[i];
      }
    }
  }
}

exports.default = SourceBuffer;

/***/ }),

/***/ "../xgplayer-utils/src/mobile/ticker.js":
/*!**********************************************!*\
  !*** ../xgplayer-utils/src/mobile/ticker.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @author fuyuhao@bytedance.com
 */

class Ticker {
  constructor(options) {
    this.options = Object.assign({}, options || {}, {
      interval: 16
    });

    this.callbacks = [];
  }

  start(...callbacks) {
    this.callbacks = callbacks;
  }

  onTick() {
    for (let i = 0, len = this.callbacks.length; i < len; i++) {
      const callback = this.callbacks[i];
      callback();
    }
  }

  setInterval(interval) {
    this.options.interval = interval;
    return this;
  }
}

/**
 * ticker use requestAnimationFrame
 */
class RafTicker extends Ticker {
  constructor(props) {
    super(props);
    this.prev = null;
    this.timerId = null;
    this._subTimerId = null;

    this._tickFunc = RafTicker.getTickFunc();
    this.tick = this.tick.bind(this);
  }

  start(...callbacks) {
    super.start(...callbacks);
    this.tick();
  }

  tick(timestamp) {
    this.nextTick();
    this.onTick();
  }

  nextTick() {
    const { _tickFunc } = this;
    this.timerId = _tickFunc(this.tick);
  }

  stop() {
    if (this.timerId) {
      const cancelFunc = RafTicker.getCancelFunc();

      cancelFunc(this.timerId);
    }
  }

  static getTickFunc() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  }

  static getCancelFunc() {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame;
  }

  static isSupported() {
    return RafTicker.getTickFunc() !== undefined;
  }
}

/**
 * use setTimeout for browsers without raf support
 */
class TimeoutTicker extends Ticker {
  constructor(config) {
    super(config);
    this.timeoutId = null;
  }

  start(...callbacks) {
    super.nextTick(...callbacks);
    this.timeoutId = window.setInterval(() => {
      this.onTick();
    }, this.options.interval || 16);
  }

  stop() {
    if (this.timeoutId) {
      window.clearInterval(this.timeoutId);
    }
  }

}

/**
 * 返回Ticker构造函数
 * @returns {Ticker}
 */
const getTicker = exports.getTicker = () => {
  if (RafTicker.isSupported()) {
    return RafTicker;
  } else {
    return TimeoutTicker;
  }
};

/***/ }),

/***/ "../xgplayer-utils/src/mobile/video-context.js":
/*!*****************************************************!*\
  !*** ../xgplayer-utils/src/mobile/video-context.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webworkifyWebpack = __webpack_require__(/*! webworkify-webpack */ "../xgplayer-utils/node_modules/webworkify-webpack/index.js");

var _webworkifyWebpack2 = _interopRequireDefault(_webworkifyWebpack);

var _stream = __webpack_require__(/*! ../write/stream */ "../xgplayer-utils/src/write/stream.js");

var _stream2 = _interopRequireDefault(_stream);

var _nalunit = __webpack_require__(/*! ../../../xgplayer-codec/src/h264/nalunit */ "../xgplayer-codec/src/h264/nalunit/index.js");

var _nalunit2 = _interopRequireDefault(_nalunit);

var _yuvCanvas = __webpack_require__(/*! ./yuv-canvas */ "../xgplayer-utils/src/mobile/yuv-canvas.js");

var _yuvCanvas2 = _interopRequireDefault(_yuvCanvas);

var _sourcebuffer = __webpack_require__(/*! ./sourcebuffer */ "../xgplayer-utils/src/mobile/sourcebuffer.js");

var _sourcebuffer2 = _interopRequireDefault(_sourcebuffer);

var _TimeRanges = __webpack_require__(/*! ../models/TimeRanges */ "../xgplayer-utils/src/models/TimeRanges.js");

var _TimeRanges2 = _interopRequireDefault(_TimeRanges);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class VideoCanvas {
  constructor(config) {
    this.config = Object.assign({}, config);
    this.canvas = this.config.canvas ? this.config.canvas : document.createElement('canvas');
    this.source = new _sourcebuffer2.default({ type: 'video' });
    this.preloadTime = this.config.preloadTime || 3;
    this.oncanplay = undefined;
    this.onFirstFrame = undefined;
    this.meta = undefined;
    this.readyStatus = 0;
    this.paused = true;
    this.count = 0;
    this.currentTime = 0;
    this.lastPlayed = 0;

    this._decoderInited = false;
    this._avccpushed = false;
    this._decodedFrames = {};
    this._lastSampleDts = undefined;
    this._baseDts = undefined;
    this._lastRenderTime = null;
    this.playFinish = null;
  }

  pause() {
    this.paused = true;
  }

  initWasmWorker() {
    let _this = this;
    this.wasmworker = (0, _webworkifyWebpack2.default)(/*require.resolve*/(/*! ./worker.js */ "../xgplayer-utils/src/mobile/worker.js"));
    this.wasmworker.postMessage({
      msg: 'init',
      meta: this.meta
    });
    this.wasmworker.addEventListener('message', msg => {
      switch (msg.data.msg) {
        case 'DECODER_READY':
          _this._decoderInited = true;
          break;
        case 'DECODED':
          this._onDecoded(msg.data);
          break;
      }
    });
  }

  setVideoMetaData(meta) {
    this.meta = meta;
    if (!this._decoderInited) {
      this.initWasmWorker();
      return;
    }
    this._avccpushed = true;
    let data = new Uint8Array(meta.sps.byteLength + 4);
    data.set([0, 0, 0, 1]);
    data.set(meta.sps, 4);
    this.wasmworker.postMessage({
      msg: 'decode',
      data: data
    });

    data = new Uint8Array(meta.pps.byteLength + 4);
    data.set([0, 0, 0, 1]);
    data.set(meta.pps, 4);
    this.wasmworker.postMessage({
      msg: 'decode',
      data: data
    });

    if (!this.yuvCanvas) {
      let config = Object.assign({ meta, canvas: this.canvas }, this.config);
      this.yuvCanvas = new _yuvCanvas2.default(config);
    }
    this.readyStatus = 1;
  }

  decodeVideo(videoTrack) {
    if (!this._decoderInited) {
      return;
    }

    if (!this._avccpushed) {
      this.setVideoMetaData(this.meta);
    }
    let { samples } = videoTrack;
    let sample = samples.shift();

    while (sample) {
      if (!this._baseDts) {
        this._baseDts = sample.dts;
      }
      this.source.push(sample);
      sample = samples.shift();
    }

    this._preload();
  }

  _preload() {
    if (!this._lastSampleDts || this._lastSampleDts - this._baseDts < this.currentTime + this.preloadTime * 1000) {
      let sample = this.source.get();
      if (sample) {
        this._lastSampleDts = sample.dts;
        this._analyseNal(sample);
      }

      while (sample && this._lastSampleDts - this._baseDts < this.currentTime + this.preloadTime * 1000) {
        sample = this.source.get();
        if (sample) {
          this._analyseNal(sample);
          this._lastSampleDts = sample.dts;
        }
      }
    }
  }

  _analyseNal(sample) {
    let nals = _nalunit2.default.getAvccNals(new _stream2.default(sample.data.buffer));

    let length = 0;
    for (let i = 0; i < nals.length; i++) {
      let nal = nals[i];
      length += nal.body.byteLength + 4;
    }
    let offset = 0;
    let data = new Uint8Array(length);
    for (let i = 0; i < nals.length; i++) {
      let nal = nals[i];
      data.set([0, 0, 0, 1], offset);
      offset += 4;
      data.set(new Uint8Array(nal.body), offset);
      offset += nal.body.byteLength;
    }
    this.wasmworker.postMessage({
      msg: 'decode',
      data: data,
      info: {
        dts: sample.dts,
        pts: sample.pts ? sample.pts : sample.dts + sample.cts,
        key: sample.isKeyframe
      }
    });
  }

  _onDecoded(data) {
    let { dts } = data.info;
    console.log('decoded dts ', dts);
    this._decodedFrames[dts] = data;
  }

  play() {
    this.paused = false;
    return new Promise(resolve => {
      this.playFinish = resolve;
    });
  }

  _onTimer(currentTime) {
    if (this.paused) {
      return;
    }
    if (this.meta) {
      if (this.meta.frameRate && this.meta.frameRate.fixed && this.meta.frameRate.fps) {}
      let frameTimes = Object.keys(this._decodedFrames);
      if (frameTimes.length > 0) {
        this.currentTime = currentTime;
        let frameTime = -1;
        for (let i = 0; i < frameTimes.length && Number.parseInt(frameTimes[i]) - this._baseDts <= this.currentTime; i++) {
          frameTime = Number.parseInt(frameTimes[i - 1]);
        }

        let frame = this._decodedFrames[frameTime];
        if (frame) {
          if (this.oncanplay && this.readyStatus < 4) {
            this.oncanplay();
            this.readyStatus = 4;
          }
          console.log(frame.info.dts, ' ', currentTime);
          this.yuvCanvas.render(frame.buffer, frame.width, frame.height, frame.yLinesize, frame.uvLinesize);

          if (this.playFinish) {
            this.playFinish();
          }
        }

        for (let i = 0; i < frameTime; i++) {
          delete this._decodedFrames[i];
        }
      }
    }
    this._lastRenderTime = Date.now();
  }

  cleanBuffer() {
    if (this.currentTime > 1) {
      this.source.remove(0, this.currentTime - 1);
    }
  }

  destroy() {
    this.wasmworker = null;
    this.canvas = null;
    this.source = null;
    this._decoderInited = false;
  }

  get buffered() {
    const ranges = [];
    let currentRange = {
      start: null,
      end: null
    };
    for (let i = 0; i < this.source.buffer.length; i++) {
      const { start, end } = this.source.buffer[i];
      if (!currentRange.start) {
        currentRange.start = start;
      }
      if (!currentRange.end) {
        currentRange.end = end;
      }

      if (start - currentRange.end > 1000) {
        currentRange.start = currentRange.start / 1000;
        currentRange.end = currentRange.end / 1000;
        currentRange = {
          start,
          end
        };
      } else {
        currentRange.end = end;
      }
    }

    if (currentRange.start !== null && currentRange.end !== null) {
      currentRange.start = currentRange.start / 1000;
      currentRange.end = currentRange.end / 1000;
      ranges.push(currentRange);
    }

    return new _TimeRanges2.default(ranges);
  }
}
exports.default = VideoCanvas;

/***/ }),

/***/ "../xgplayer-utils/src/mobile/worker.js":
/*!**********************************************!*\
  !*** ../xgplayer-utils/src/mobile/worker.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const MAX_STREAM_BUFFER_LENGTH = 1024 * 1024;
var Decoder = function (self) {
  this.inited = false;
  this.self = self;
  this.meta = this.self.meta;
  this.infolist = {};
  self.par_broadwayOnBroadwayInited = this.broadwayOnBroadwayInited.bind(this);
  self.par_broadwayOnPictureDecoded = this.broadwayOnPictureDecoded.bind(this);
};

Decoder.prototype.toU8Array = function (ptr, length) {
  return this.self.HEAPU8.subarray(ptr, ptr + length);
};

Decoder.prototype.init = function () {
  Module._broadwayInit();
  this.streamBuffer = this.toU8Array(Module._broadwayCreateStream(MAX_STREAM_BUFFER_LENGTH), MAX_STREAM_BUFFER_LENGTH);
};

Decoder.prototype.broadwayOnPictureDecoded = function (offset, width, height, yLinesize, uvLinesize, infoid) {
  let info = Object.assign({}, this.infolist[infoid]);
  let yRowcount = height;
  let uvRowcount = height / 2;
  if (this.meta.chromaFormat === 444 || this.meta.chromaFormat === 422) {
    uvRowcount = height;
  }
  let data = this.toU8Array(offset, yLinesize * yRowcount + 2 * (uvLinesize * uvRowcount));
  this.infolist[infoid] = null;
  let datetemp = new Uint8Array(data.length);
  datetemp.set(data);
  let buffer = datetemp.buffer;
  this.self.postMessage({
    msg: 'DECODED',
    width,
    height,
    yLinesize,
    uvLinesize,
    info,
    buffer
  }, [buffer]);
};

Decoder.prototype.broadwayOnBroadwayInited = function () {
  this.inited = true;
  this.self.postMessage({ msg: 'DECODER_READY' });
};

Decoder.prototype.decode = function (data, info) {
  let time = parseInt(new Date().getTime());
  let infoid = time - Math.floor(time / 10e8) * 10e8;
  this.infolist[infoid] = info;
  this.streamBuffer.set(data);
  Module._broadwayPlayStream(data.length, infoid);
};

var decoder;

function onPostRun() {
  decoder = new Decoder(this);
  decoder.init();
}

function init(meta) {
  self.importScripts('https://sf1-vcloudcdn.pstatp.com/obj/ttfe/media/decoder/h264/decoder.js');
  addOnPostRun(onPostRun.bind(self));
}

module.exports = function (self) {
  self.addEventListener('message', function (e) {
    var data = e.data;
    if (!data.msg) {
      self.postMessage({
        msg: 'ERROR:invalid message'
      });
    } else {
      switch (data.msg) {
        case 'init':
          console.log(data);
          self.meta = data.meta;
          init();
          break;
        case 'decode':
          decoder.decode(data.data, data.info);
          break;
        default:
          break;
      }
    }
  }, false);
};

/***/ }),

/***/ "../xgplayer-utils/src/mobile/yuv-canvas.js":
/*!**************************************************!*\
  !*** ../xgplayer-utils/src/mobile/yuv-canvas.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class YUVCanvas {
  constructor(configs) {
    this.configs = Object.assign({}, configs);
    this.canvas = this.configs.canvas;
    this.meta = Object.assign({}, this.configs.meta);
    this.chroma = this.meta.chromaFormat;
    this.height = this.meta.presentHeight;
    this.width = this.meta.presentWidth;
    this.canvas.width = 1280;
    this.canvas.height = 720;
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this._initContextGL();
    if (this.contextGL) {
      this._initProgram();
      this._initBuffers();
      this._initTextures();
    };
  }

  _initContextGL() {
    var canvas = this.canvas;
    var gl = null;

    var validContextNames = ['webgl', 'experimental-webgl', 'moz-webgl', 'webkit-3d'];
    var nameIndex = 0;

    while (!gl && nameIndex < validContextNames.length) {
      var contextName = validContextNames[nameIndex];

      try {
        if (this.contextOptions) {
          gl = canvas.getContext(contextName, this.contextOptions);
        } else {
          gl = canvas.getContext(contextName);
        };
      } catch (e) {
        gl = null;
      }

      if (!gl || typeof gl.getParameter !== 'function') {
        gl = null;
      }

      ++nameIndex;
    };

    this.contextGL = gl;
  }

  _initProgram() {
    var gl = this.contextGL;

    // vertex shader is the same for all types
    var vertexShaderScript;
    var fragmentShaderScript;
    vertexShaderScript = ['attribute vec4 vertexPos;', 'attribute vec4 texturePos;', 'attribute vec4 uTexturePos;', 'attribute vec4 vTexturePos;', 'varying vec2 textureCoord;', 'varying vec2 uTextureCoord;', 'varying vec2 vTextureCoord;', 'void main()', '{', '  gl_Position = vertexPos;', '  textureCoord = texturePos.xy;', '  uTextureCoord = uTexturePos.xy;', '  vTextureCoord = vTexturePos.xy;', '}'].join('\n');

    fragmentShaderScript = ['precision highp float;', 'varying highp vec2 textureCoord;', 'varying highp vec2 uTextureCoord;', 'varying highp vec2 vTextureCoord;', 'uniform sampler2D ySampler;', 'uniform sampler2D uSampler;', 'uniform sampler2D vSampler;', 'uniform mat4 YUV2RGB;', 'void main(void) {', '  highp float y = texture2D(ySampler,  textureCoord).r;', '  highp float u = texture2D(uSampler,  uTextureCoord).r;', '  highp float v = texture2D(vSampler,  vTextureCoord).r;', '  gl_FragColor = vec4(y, u, v, 1) * YUV2RGB;', '}'].join('\n');

    var YUV2RGB = [1.16438, 0.00000, 1.59603, -0.87079, 1.16438, -0.39176, -0.81297, 0.52959, 1.16438, 2.01723, 0.00000, -1.08139, 0, 0, 0, 1];
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderScript);
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      console.log('Vertex shader failed to compile: ' + gl.getShaderInfoLog(vertexShader));
    }

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderScript);
    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      console.log('Fragment shader failed to compile: ' + gl.getShaderInfoLog(fragmentShader));
    }

    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.log('Program failed to compile: ' + gl.getProgramInfoLog(program));
    }

    gl.useProgram(program);

    var YUV2RGBRef = gl.getUniformLocation(program, 'YUV2RGB');
    gl.uniformMatrix4fv(YUV2RGBRef, false, YUV2RGB);

    this.shaderProgram = program;
  }

  _initBuffers() {
    var gl = this.contextGL;
    var program = this.shaderProgram;

    var vertexPosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 1, -1, 1, 1, -1, -1, -1]), gl.STATIC_DRAW);

    var vertexPosRef = gl.getAttribLocation(program, 'vertexPos');
    gl.enableVertexAttribArray(vertexPosRef);
    gl.vertexAttribPointer(vertexPosRef, 2, gl.FLOAT, false, 0, 0);

    var texturePosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]), gl.STATIC_DRAW);

    var texturePosRef = gl.getAttribLocation(program, 'texturePos');
    gl.enableVertexAttribArray(texturePosRef);
    gl.vertexAttribPointer(texturePosRef, 2, gl.FLOAT, false, 0, 0);

    this.texturePosBuffer = texturePosBuffer;

    var uTexturePosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, uTexturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]), gl.STATIC_DRAW);

    var uTexturePosRef = gl.getAttribLocation(program, 'uTexturePos');
    gl.enableVertexAttribArray(uTexturePosRef);
    gl.vertexAttribPointer(uTexturePosRef, 2, gl.FLOAT, false, 0, 0);

    this.uTexturePosBuffer = uTexturePosBuffer;

    var vTexturePosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vTexturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]), gl.STATIC_DRAW);

    var vTexturePosRef = gl.getAttribLocation(program, 'vTexturePos');
    gl.enableVertexAttribArray(vTexturePosRef);
    gl.vertexAttribPointer(vTexturePosRef, 2, gl.FLOAT, false, 0, 0);

    this.vTexturePosBuffer = vTexturePosBuffer;
  }

  _initTextures() {
    var gl = this.contextGL;
    var program = this.shaderProgram;
    var yTextureRef = this._initTexture();
    var ySamplerRef = gl.getUniformLocation(program, 'ySampler');
    gl.uniform1i(ySamplerRef, 0);
    this.yTextureRef = yTextureRef;

    var uTextureRef = this._initTexture();
    var uSamplerRef = gl.getUniformLocation(program, 'uSampler');
    gl.uniform1i(uSamplerRef, 1);
    this.uTextureRef = uTextureRef;

    var vTextureRef = this._initTexture();
    var vSamplerRef = gl.getUniformLocation(program, 'vSampler');
    gl.uniform1i(vSamplerRef, 2);
    this.vTextureRef = vTextureRef;
  }

  _initTexture() {
    var gl = this.contextGL;

    var textureRef = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, textureRef);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.bindTexture(gl.TEXTURE_2D, null);

    return textureRef;
  }

  _drawPictureGL(data, width, height, yLinesize, uvLinesize) {
    var ylen = yLinesize * height;
    var uvlen = uvLinesize * height / 2;
    if (this.chroma === 444 || this.chroma === 422) {
      uvlen *= 2;
    }
    data = new Uint8Array(data);
    let renderData = {
      yData: data.subarray(0, ylen),
      uData: data.subarray(ylen, ylen + uvlen),
      vData: data.subarray(ylen + uvlen, ylen + uvlen + uvlen)
    };
    this._drawPictureGL420(renderData, width, height, yLinesize, uvLinesize);
  }

  _drawPictureGL420(data, width, height, yLinesize, uvLinesize) {
    var gl = this.contextGL;
    var texturePosBuffer = this.texturePosBuffer;
    var uTexturePosBuffer = this.uTexturePosBuffer;
    var vTexturePosBuffer = this.vTexturePosBuffer;

    var yTextureRef = this.yTextureRef;
    var uTextureRef = this.uTextureRef;
    var vTextureRef = this.vTextureRef;

    var yData = data.yData;
    var uData = data.uData;
    var vData = data.vData;

    var yDataPerRow = yLinesize;
    var yRowCnt = height;

    var uDataPerRow = width / 2;
    var uRowCnt = height / 2;

    if (this.chroma === 422 || this.chroma === 444) {
      uRowCnt = height;
    }

    var vDataPerRow = uvLinesize;
    var vRowCnt = uRowCnt;

    let ratiow = this.canvas.width / this.width;
    let ratioh = this.canvas.height / this.height;
    let left = 0;
    let top = 0;
    let w = this.canvas.width;
    let h = this.canvas.height;
    if (ratiow < ratioh) {
      h = this.height * this.canvas.width / this.width;
      top = parseInt((this.canvas.height - this.height * this.canvas.width / this.width) / 2);
    } else {
      w = this.width * this.canvas.height / this.height;
      left = parseInt((this.canvas.width - this.width * this.canvas.height / this.height) / 2);
    }
    gl.viewport(left, top, w, h);

    var texturePosValues = new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]);
    gl.bindBuffer(gl.ARRAY_BUFFER, texturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, texturePosValues, gl.DYNAMIC_DRAW);

    var uTexturePosValues = new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]);
    gl.bindBuffer(gl.ARRAY_BUFFER, uTexturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, uTexturePosValues, gl.DYNAMIC_DRAW);

    var vTexturePosValues = new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]);
    gl.bindBuffer(gl.ARRAY_BUFFER, vTexturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vTexturePosValues, gl.DYNAMIC_DRAW);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, yTextureRef);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, yDataPerRow, yRowCnt, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, yData);

    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, uTextureRef);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, uDataPerRow, uRowCnt, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, uData);

    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, vTextureRef);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, vDataPerRow, vRowCnt, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, vData);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  _drawPictureRGB(data) {}

  render(data, width, height, yLinesize, uvLinesize) {
    var gl = this.contextGL;
    if (gl) {
      this._drawPictureGL(data, width, height, yLinesize, uvLinesize);
    } else {
      this._drawPictureRGB(data);
    }
  }
}

exports.default = YUVCanvas;

/***/ }),

/***/ "../xgplayer-utils/src/models/TimeRanges.js":
/*!**************************************************!*\
  !*** ../xgplayer-utils/src/models/TimeRanges.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class TimeRanges {
  constructor(ranges) {
    this.ranges = ranges || [];
  }

  start(idx) {
    return this.ranges[idx] ? this.ranges[idx].start : 0;
  }

  end(idx) {
    return this.ranges[idx] ? this.ranges[idx].end : 0;
  }

  add(range) {
    this.ranges.push(range);
  }

  get length() {
    return this.ranges.length;
  }
}
exports.default = TimeRanges;

/***/ }),

/***/ "../xgplayer-utils/src/models/media-info.js":
/*!**************************************************!*\
  !*** ../xgplayer-utils/src/models/media-info.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const isObjectFilled = obj => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === null) {
        return false;
      }
    }
  }
  return true;
};

class MediaInfo {
  constructor() {
    this.mimeType = null;
    this.duration = null;

    this.hasVideo = null;
    this.video = {
      codec: null,
      width: null,
      height: null,
      profile: null,
      level: null,
      frameRate: {
        fixed: true,
        fps: 25,
        fps_num: 25000,
        fps_den: 1000
      },
      chromaFormat: null,
      parRatio: {
        width: 1,
        height: 1
      }
    };

    this.hasAudio = null;

    this.audio = {
      codec: null,
      sampleRate: null,
      sampleRateIndex: null,
      channelCount: null
    };
  }

  isComplete() {
    return MediaInfo.isBaseInfoReady(this) && MediaInfo.isVideoReady(this) && MediaInfo.isAudioReady(this);
  }

  static isBaseInfoReady(mediaInfo) {
    return isObjectFilled(mediaInfo);
  }

  static isVideoReady(mediaInfo) {
    if (!mediaInfo.hasVideo) {
      return true;
    }

    return isObjectFilled(mediaInfo.video);
  }

  static isAudioReady(mediaInfo) {
    if (!mediaInfo.hasAudio) {
      return true;
    }

    return isObjectFilled(mediaInfo.video);
  }
}
exports.default = MediaInfo;

/***/ }),

/***/ "../xgplayer-utils/src/models/media-sample.js":
/*!****************************************************!*\
  !*** ../xgplayer-utils/src/models/media-sample.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class MediaSample {
  constructor(info) {
    let _default = MediaSample.getDefaultInf();

    if (!info || Object.prototype.toString.call(info) !== '[object Object]') {
      return _default;
    }
    let sample = Object.assign({}, _default, info);

    Object.entries(sample).forEach(([k, v]) => {
      this[k] = v;
    });
  }

  static getDefaultInf() {
    return {
      dts: null,
      pts: null,
      duration: null,
      position: null,
      isRAP: false, // is Random access point
      originDts: null
    };
  }
}
exports.default = MediaSample;

/***/ }),

/***/ "../xgplayer-utils/src/models/media-segment-list.js":
/*!**********************************************************!*\
  !*** ../xgplayer-utils/src/models/media-segment-list.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
class MediaSegmentList {

    constructor(type) {
        this._type = type;
        this._list = [];
        this._lastAppendLocation = -1; // cached last insert location
    }

    get type() {
        return this._type;
    }

    get length() {
        return this._list.length;
    }

    isEmpty() {
        return this._list.length === 0;
    }

    clear() {
        this._list = [];
        this._lastAppendLocation = -1;
    }

    _searchNearestSegmentBefore(beginDts) {
        let list = this._list;
        if (list.length === 0) {
            return -2;
        }
        let last = list.length - 1;
        let mid = 0;
        let lbound = 0;
        let ubound = last;

        let idx = 0;

        if (beginDts < list[0].originDts) {
            idx = -1;
            return idx;
        }

        while (lbound <= ubound) {
            mid = lbound + Math.floor((ubound - lbound) / 2);
            if (mid === last || beginDts > list[mid].lastSample.originDts && beginDts < list[mid + 1].originDts) {
                idx = mid;
                break;
            } else if (list[mid].originDts < beginDts) {
                lbound = mid + 1;
            } else {
                ubound = mid - 1;
            }
        }
        return idx;
    }

    _searchNearestSegmentAfter(beginDts) {
        return this._searchNearestSegmentBefore(beginDts) + 1;
    }

    append(segment) {
        let list = this._list;
        let lastAppendIdx = this._lastAppendLocation;
        let insertIdx = 0;

        if (lastAppendIdx !== -1 && lastAppendIdx < list.length && segment.originStartDts >= list[lastAppendIdx].lastSample.originDts && (lastAppendIdx === list.length - 1 || lastAppendIdx < list.length - 1 && segment.originStartDts < list[lastAppendIdx + 1].originStartDts)) {
            insertIdx = lastAppendIdx + 1; // use cached location idx
        } else {
            if (list.length > 0) {
                insertIdx = this._searchNearestSegmentBefore(segment.originStartDts) + 1;
            }
        }

        this._lastAppendLocation = insertIdx;
        this._list.splice(insertIdx, 0, segment);
    }

    getLastSegmentBefore(beginDts) {
        let idx = this._searchNearestSegmentBefore(beginDts);
        if (idx >= 0) {
            return this._list[idx];
        } else {
            // -1
            return null;
        }
    }

    getLastSampleBefore(beginDts) {
        let segment = this.getLastSegmentBefore(beginDts);
        if (segment !== null) {
            return segment.lastSample;
        } else {
            return null;
        }
    }

    getLastRAPBefore(beginDts) {
        let segmentIdx = this._searchNearestSegmentBefore(beginDts);
        let randomAccessPoints = this._list[segmentIdx].randomAccessPoints;
        while (randomAccessPoints.length === 0 && segmentIdx > 0) {
            segmentIdx--;
            randomAccessPoints = this._list[segmentIdx].randomAccessPoints;
        }
        if (randomAccessPoints.length > 0) {
            return randomAccessPoints[randomAccessPoints.length - 1];
        } else {
            return null;
        }
    }

}
exports.default = MediaSegmentList;

/***/ }),

/***/ "../xgplayer-utils/src/models/media-segment.js":
/*!*****************************************************!*\
  !*** ../xgplayer-utils/src/models/media-segment.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
class MediaSegment {
    constructor() {
        this.startDts = -1;
        this.endDts = -1;
        this.startPts = -1;
        this.endPts = -1;
        this.originStartDts = -1;
        this.originEndDts = -1;
        this.randomAccessPoints = [];
        this.firstSample = null;
        this.lastSample = null;
    }

    addRAP(sample) {
        sample.isRAP = true;
        this.randomAccessPoints.push(sample);
    }
}
exports.default = MediaSegment;

/***/ }),

/***/ "../xgplayer-utils/src/models/track-meta.js":
/*!**************************************************!*\
  !*** ../xgplayer-utils/src/models/track-meta.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class AudioTrackMeta {
  constructor(meta) {
    const _default = {
      sampleRate: 48000,
      channelCount: 2,
      codec: 'mp4a.40.2',
      config: [41, 401, 136, 0],
      duration: 0,
      id: 2,
      refSampleDuration: 21,
      sampleRateIndex: 3,
      timescale: 1000,
      type: 'audio'
    };
    if (meta) {
      return Object.assign({}, _default, meta);
    }
    return _default;
  }

  destroy() {
    this.init = null;
  }
}

exports.AudioTrackMeta = AudioTrackMeta;
class VideoTrackMeta {
  constructor(meta) {
    const _default = {
      avcc: null,
      sps: new Uint8Array(0),
      pps: new Uint8Array(0),
      chromaFormat: 420,
      codec: 'avc1.640020',
      codecHeight: 720,
      codecWidth: 1280,
      duration: 0,
      frameRate: {
        fixed: true,
        fps: 25,
        fps_num: 25000,
        fps_den: 1000
      },
      id: 1,
      level: '3.2',
      presentHeight: 720,
      presentWidth: 1280,
      profile: 'High',
      refSampleDuration: 40,
      parRatio: {
        height: 1,
        width: 1
      },
      timescale: 1000,
      type: 'video'
    };

    if (meta) {
      return Object.assign({}, _default, meta);
    }
    return _default;
  }

  destroy() {
    this.init = null;
    this.sps = null;
    this.pps = null;
  }
}
exports.VideoTrackMeta = VideoTrackMeta;

/***/ }),

/***/ "../xgplayer-utils/src/models/track-sample.js":
/*!****************************************************!*\
  !*** ../xgplayer-utils/src/models/track-sample.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class AudioTrackSample {
  constructor(info) {
    let _default = AudioTrackSample.getDefault();
    if (!info) {
      return _default;
    }
    let sample = Object.assign({}, _default, info);

    return sample;
  }

  static getDefault() {
    return {
      dts: null,
      pts: null,
      data: new Uint8Array()
    };
  }
}

exports.AudioTrackSample = AudioTrackSample;
class VideoTrackSample {
  constructor(info) {
    let _default = VideoTrackSample.getDefault();

    if (!info) {
      return _default;
    }
    let sample = Object.assign({}, _default, info);

    return sample;
  }

  static getDefault() {
    return {
      dts: null,
      pts: null,
      isKeyframe: false, // is Random access point
      originDts: null,
      data: new Uint8Array()
    };
  }
}
exports.VideoTrackSample = VideoTrackSample;

/***/ }),

/***/ "../xgplayer-utils/src/mse/index.js":
/*!******************************************!*\
  !*** ../xgplayer-utils/src/mse/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class MSE {
  constructor(configs) {
    this.configs = Object.assign({}, configs);
    this.container = this.configs.container;
    this.mediaSource = null;
    this.sourceBuffers = {};
    this.preloadTime = this.configs.preloadTime || 1;
    this.onSourceOpen = this.onSourceOpen.bind(this);
    this.onTimeUpdate = this.onTimeUpdate.bind(this);
    this.onUpdateEnd = this.onUpdateEnd.bind(this);
    this.onWaiting = this.onWaiting.bind(this);
  }

  init() {
    // eslint-disable-next-line no-undef
    this.mediaSource = new self.MediaSource();
    this.mediaSource.addEventListener('sourceopen', this.onSourceOpen);
    this.container.src = URL.createObjectURL(this.mediaSource);
    this.url = this.container.src;
    this.container.addEventListener('timeupdate', this.onTimeUpdate);
    this.container.addEventListener('waiting', this.onWaiting);
  }

  onTimeUpdate() {
    this.emit('TIME_UPDATE', this.container);
  }

  onWaiting() {
    this.emit('WAITING', this.container);
  }

  onSourceOpen() {
    this.addSourceBuffers();
  }

  onUpdateEnd() {
    this.emit('SOURCE_UPDATE_END');
    this.doAppend();
  }
  addSourceBuffers() {
    if (this.mediaSource.readyState !== 'open') {
      return;
    }
    let sources = this._context.getInstance('PRE_SOURCE_BUFFER');
    let tracks = this._context.getInstance('TRACKS');
    let track;

    sources = sources.sources;
    let add = false;
    for (let i = 0, k = Object.keys(sources).length; i < k; i++) {
      let type = Object.keys(sources)[i];
      if (type === 'audio') {
        track = tracks.audioTrack;
      } else if (type === 'video') {
        track = tracks.videoTrack;
        // return;
      }
      if (track) {
        let dur = type === 'audio' ? 21 : 40;
        if (track.meta && track.meta.refSampleDuration) dur = track.meta.refSampleDuration;
        if (sources[type].data.length >= this.preloadTime / dur) {
          add = true;
        }
      }
    }

    if (add) {
      if (Object.keys(this.sourceBuffers).length > 0) {
        return;
      }
      for (let i = 0, k = Object.keys(sources).length; i < k; i++) {
        let type = Object.keys(sources)[i];
        let source = sources[type];
        let mime = type === 'video' ? 'video/mp4;codecs=' + source.mimetype : 'audio/mp4;codecs=' + source.mimetype;
        let sourceBuffer = this.mediaSource.addSourceBuffer(mime);
        this.sourceBuffers[type] = sourceBuffer;
        sourceBuffer.addEventListener('updateend', this.onUpdateEnd);
        this.doAppend();
      }
    }
  }

  doAppend() {
    let sources = this._context.getInstance('PRE_SOURCE_BUFFER');
    if (sources) {
      for (let i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
        let type = Object.keys(this.sourceBuffers)[i];
        let sourceBuffer = this.sourceBuffers[type];
        if (!sourceBuffer.updating) {
          let source = sources.sources[type];
          if (source && !source.inited) {
            // console.log('append initial segment')
            sourceBuffer.appendBuffer(source.init.buffer.buffer);
            source.inited = true;
          } else if (source) {
            let data = source.data.shift();
            if (data) {
              sourceBuffer.appendBuffer(data.buffer.buffer);
            }
          }
        }
      }
    }
  }

  endOfStream() {
    const { readyState, activeSourceBuffers } = this.mediaSource;
    if (readyState === 'open' && activeSourceBuffers.length === 0) {
      try {
        this.mediaSource.endOfStream();
      } catch (e) {
        // log
      }
    }
  }

  remove(end, start = 0) {
    for (let i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
      let buffer = this.sourceBuffers[Object.keys(this.sourceBuffers)[i]];
      if (!buffer.updating) {
        // console.log(start, end)
        buffer.remove(start, end);
      }
    }
  }
  removeBuffers() {
    const taskList = [];
    for (let i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
      let buffer = this.sourceBuffers[Object.keys(this.sourceBuffers)[i]];
      buffer.removeEventListener('updateend', this.onUpdateEnd);

      let task;
      if (buffer.updating) {
        task = new Promise(resolve => {
          const doCleanBuffer = function () {
            let retryTime = 3;

            const clean = () => {
              if (!buffer.updating) {
                MSE.clearBuffer(buffer);
                resolve();
              } else if (retryTime > 0) {
                setTimeout(clean, 200);
                retryTime--;
              } else {
                resolve();
              }
            };

            setTimeout(clean, 200);
            buffer.removeEventListener('updateend', doCleanBuffer);
          };
          buffer.addEventListener('updateend', doCleanBuffer);
        });
      } else {
        MSE.clearBuffer(buffer);
        task = Promise.resolve();
      }

      taskList.push(task);
    }

    return Promise.all(taskList);
  }

  destroy() {
    return this.removeBuffers().then(() => {
      for (let i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
        let buffer = this.sourceBuffers[Object.keys(this.sourceBuffers)[i]];
        this.mediaSource.removeSourceBuffer(buffer);
        delete this.sourceBuffers[Object.keys(this.sourceBuffers)[i]];
      }

      this.container.removeEventListener('timeupdate', this.onTimeUpdate);
      this.container.removeEventListener('waiting', this.onWaiting);
      this.mediaSource.removeEventListener('sourceopen', this.onSourceOpen);

      this.endOfStream();
      window.URL.revokeObjectURL(this.url);

      this.url = null;
      this.configs = {};
      this.container = null;
      this.mediaSource = null;
      this.sourceBuffers = {};
      this.preloadTime = 1;
    });
  }

  static clearBuffer(buffer) {
    const buffered = buffer.buffered;
    let bEnd = 0.1;
    for (let i = 0, len = buffered.length; i < len; i++) {
      bEnd = buffered.end(i);
    }
    try {
      buffer.remove(0, bEnd);
    } catch (e) {
      // DO NOTHING
    }
  }
}
exports.default = MSE;

/***/ }),

/***/ "../xgplayer-utils/src/write/buffer.js":
/*!*********************************************!*\
  !*** ../xgplayer-utils/src/write/buffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _concatTypedArray = __webpack_require__(/*! concat-typed-array */ "../xgplayer-utils/node_modules/concat-typed-array/lib/index.js");

var _concatTypedArray2 = _interopRequireDefault(_concatTypedArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Buffer {
  constructor(buffer) {
    this.buffer = buffer || new Uint8Array(0);
  }

  write(...buffer) {
    buffer.forEach(item => {
      this.buffer = (0, _concatTypedArray2.default)(Uint8Array, this.buffer, item);
    });
  }

  static writeUint32(value) {
    return new Uint8Array([value >> 24, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff]);
  }

  static readAsInt(arr) {
    let temp = '';

    function padStart4Hex(hexNum) {
      let hexStr = hexNum.toString(16);
      return hexStr.padStart(2, '0');
    }

    arr.forEach(num => {
      temp += padStart4Hex(num);
    });
    return parseInt(temp, 16);
  }
}

exports.default = Buffer;

/***/ }),

/***/ "../xgplayer-utils/src/write/stream.js":
/*!*********************************************!*\
  !*** ../xgplayer-utils/src/write/stream.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class Stream {
  constructor(buffer) {
    if (buffer instanceof ArrayBuffer) {
      this.buffer = buffer;
      this.dataview = new DataView(buffer);
      this.dataview.position = 0;
    } else {
      throw new Error('data is invalid');
    }
  }

  get length() {
    return this.buffer.byteLength;
  }

  set position(value) {
    this.dataview.position = value;
  }

  get position() {
    return this.dataview.position;
  }

  back(count) {
    this.position -= count;
  }

  skip(count) {
    let loop = Math.floor(count / 4);
    let last = count % 4;
    for (let i = 0; i < loop; i++) {
      Stream.readByte(this.dataview, 4);
    }
    if (last > 0) {
      Stream.readByte(this.dataview, last);
    }
  }

  /**
   * [readByte 从DataView中读取数据]
   * @param  {DataView} buffer [DataView实例]
   * @param  {Number} size   [读取字节数]
   * @return {Number}        [整数]
   */
  static readByte(buffer, size, sign) {
    let res;
    switch (size) {
      case 1:
        if (sign) {
          res = buffer.getInt8(buffer.position);
        } else {
          res = buffer.getUint8(buffer.position);
        }
        break;
      case 2:
        if (sign) {
          res = buffer.getInt16(buffer.position);
        } else {
          res = buffer.getUint16(buffer.position);
        }
        break;
      case 3:
        if (sign) {
          throw new Error('not supported for readByte 3');
        } else {
          res = buffer.getUint8(buffer.position) << 16;
          res |= buffer.getUint8(buffer.position + 1) << 8;
          res |= buffer.getUint8(buffer.position + 2);
        }
        break;
      case 4:
        if (sign) {
          res = buffer.getInt32(buffer.position);
        } else {
          res = buffer.getUint32(buffer.position);
        }
        break;
      case 8:
        if (sign) {
          throw new Error('not supported for readBody 8');
        } else {
          res = buffer.getUint32(buffer.position) << 32;
          res |= buffer.getUint32(buffer.position + 4);
        }
        break;
      default:
        res = '';
    }
    buffer.position += size;
    return res;
  }

  readUint8() {
    return Stream.readByte(this.dataview, 1);
  }

  readUint16() {
    return Stream.readByte(this.dataview, 2);
  }

  readUint24() {
    return Stream.readByte(this.dataview, 3);
  }

  readUint32() {
    return Stream.readByte(this.dataview, 4);
  }

  readUint64() {
    return Stream.readByte(this.dataview, 8);
  }

  readInt8() {
    return Stream.readByte(this.dataview, 1, true);
  }
  readInt16() {
    return Stream.readByte(this.dataview, 2, true);
  }

  readInt32() {
    return Stream.readByte(this.dataview, 4, true);
  }

  writeUint32(value) {
    return new Uint8Array([value >>> 24 & 0xff, value >>> 16 & 0xff, value >>> 8 & 0xff, value & 0xff]);
  }
}

exports.default = Stream;

/***/ }),

/***/ "./src/flv-live-mobile.js":
/*!********************************!*\
  !*** ./src/flv-live-mobile.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerLoader = __webpack_require__(/*! xgplayer-loader */ "../xgplayer-loader/index.js");

var _xgplayerDemux = __webpack_require__(/*! xgplayer-demux */ "../xgplayer-demux/index.js");

var _xgplayerRemux = __webpack_require__(/*! xgplayer-remux */ "../xgplayer-remux/index.js");

var _xgplayerBuffer = __webpack_require__(/*! xgplayer-buffer */ "../xgplayer-buffer/index.js");

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

var _xgplayerCodec = __webpack_require__(/*! xgplayer-codec */ "../xgplayer-codec/index.js");

var _xgplayer = __webpack_require__(/*! xgplayer */ "xgplayer");

var _xgplayer2 = _interopRequireDefault(_xgplayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEMUX_EVENTS = _xgplayerUtils.EVENTS.DEMUX_EVENTS;
const LOADER_EVENTS = _xgplayerUtils.EVENTS.LOADER_EVENTS;
const BROWSER_EVENTS = _xgplayerUtils.EVENTS.BROWSER_EVENTS;

const Tag = 'FLVController';

class Logger {
  warn() {}
}

class FlvController {
  constructor(player) {
    this.TAG = Tag;
    this._player = player;

    this.video = this._player.video;
    this.state = {
      initSegmentArrived: false
    };
  }

  init() {
    this._context.registry('FETCH_LOADER', _xgplayerLoader.FetchLoader);
    this._context.registry('LOADER_BUFFER', _xgplayerBuffer.XgBuffer);
    this._context.registry('PRE_SOURCE_BUFFER', _xgplayerBuffer.PreSource);

    this._context.registry('FLV_DEMUXER', _xgplayerDemux.FlvDemuxer);

    this._context.registry('MP4_REMUXER', _xgplayerRemux.Mp4Remuxer);
    this._context.registry('TRACKS', _xgplayerBuffer.Tracks);

    this._context.registry('COMPATIBILITY', _xgplayerCodec.Compatibility);
    this._context.registry('PAGE_VISIBILITY', _xgplayerUtils.PageVisibility);

    this._context.registry('LOGGER', Logger);

    this.initListeners();
  }

  initListeners() {
    this.on(LOADER_EVENTS.LOADER_DATALOADED, this._handleLoaderDataLoaded.bind(this));
    this.on(LOADER_EVENTS.LOADER_ERROR, this._handleNetworkError.bind(this));

    this.on(DEMUX_EVENTS.MEDIA_INFO, this._handleMediaInfo.bind(this));
    this.on(DEMUX_EVENTS.METADATA_PARSED, this._handleMetadataParsed.bind(this));
    this.on(DEMUX_EVENTS.DEMUX_COMPLETE, this._handleDemuxComplete.bind(this));
    this.on(DEMUX_EVENTS.DEMUX_ERROR, this._handleDemuxError.bind(this));
  }

  _handleMediaInfo() {
    if (!this._context.mediaInfo) {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, new Error('failed to get mediainfo'));
    }
  }

  _handleLoaderDataLoaded() {
    this.emitTo('FLV_DEMUXER', DEMUX_EVENTS.DEMUX_START);
  }

  _handleMetadataParsed(type) {
    if (type === 'audio') {
      // 将音频meta信息交给audioContext，不走remux封装
      const { audioTrack } = this._context.getInstance('TRACKS');
      if (audioTrack && audioTrack.meta) {
        this._setMetaToAudio(audioTrack.meta);
      }
    } else {
      const { videoTrack } = this._context.getInstance('TRACKS');
      if (videoTrack && videoTrack.meta) {
        this._setMetaToVideo(videoTrack.meta);
      }
    }
  }

  _handleDemuxComplete() {
    if (this._player.video) {
      const { videoTrack, audioTrack } = this._context.getInstance('TRACKS');
      this._player.video.onDemuxComplete(videoTrack, audioTrack);
    }
  }

  _handleAppendInitSegment() {
    this.state.initSegmentArrived = true;
    //  this.mse.addSourceBuffers()
  }

  _handleNetworkError() {
    this._player.emit('error', new _xgplayer2.default.Errors('network', this._player.config.url));
  }

  _handleDemuxError() {
    this._player.emit('error', new _xgplayer2.default.Errors('parse', this._player.config.url));
  }

  _setMetaToAudio(audioMeta) {
    if (this._player.video) {
      this._player.video.setAudioMeta(audioMeta);
    }
  }

  _setMetaToVideo(videoMeta) {
    if (this._player.video) {
      this._player.video.setVideoMeta(videoMeta);
    }
  }

  seek() {
    if (!this.state.initSegmentArrived) {
      this.loadData();
    }
  }

  loadData() {
    this.emit(LOADER_EVENTS.LADER_START, this._player.config.url);
  }

  pause() {
    const loader = this._context.getInstance('FETCH_LOADER');

    if (loader) {
      loader.cancel();
    }
  }

  /**
   * 保证当前播放的视频以gop为单位
   * @param videoTrack
   */
  static resolveVideoGOP(videoTrack) {
    const { samples } = videoTrack;
    if (!samples.length) {
      return;
    }

    let firstIframeIdx = null;
    let lastIframeIdx = null;

    if (videoTrack.tempSamples && videoTrack.tempSamples.length) {
      // 将缓存帧放置到队列的头部
      samples.unshift.apply(samples, videoTrack.tempSamples);
    }

    // 寻找第一个I帧
    for (let i = 0, len = samples.length; i < len; i++) {
      const current = samples[i];
      if (current.isKeyframe) {
        firstIframeIdx = i;
        break;
      }
    }

    // 寻找最后一个I帧
    for (let i = samples.length - 1; i > 0; i++) {
      const current = samples[i];

      if (current.isKeyframe) {
        lastIframeIdx = i;
        break;
      }
    }

    if (firstIframeIdx !== 0) {
      samples.splice(0, firstIframeIdx - 1);
    }

    videoTrack.samples = samples.slice(0, lastIframeIdx);
    const rest = samples.slice(lastIframeIdx);
    if (videoTrack.tempSamples) {
      videoTrack.tempSamples.push.apply(videoTrack.tempSamples, rest);
    } else {
      // 将剩下的帧缓存，等待一个完整的gop
      videoTrack.tempSamples = rest;
    }
  }
}
exports.default = FlvController;

/***/ }),

/***/ "./src/mobile.js":
/*!***********************!*\
  !*** ./src/mobile.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _xgplayer = __webpack_require__(/*! xgplayer */ "xgplayer");

var _xgplayer2 = _interopRequireDefault(_xgplayer);

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

var _flvLiveMobile = __webpack_require__(/*! ./flv-live-mobile */ "./src/flv-live-mobile.js");

var _flvLiveMobile2 = _interopRequireDefault(_flvLiveMobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const flvAllowedEvents = _xgplayerUtils.EVENTS.FlvAllowedEvents;

class FlvPlayer extends _xgplayer2.default {
  constructor(config) {
    if (!config.mediaType) {
      config.mediaType = 'mobile-video';
    }
    super(config);
    this.context = new _xgplayerUtils.Context(flvAllowedEvents);
    this.initEvents();
  }

  start() {
    this.initFlv();
    this.context.init();
    this.flv.seek(0);
    super.start(this.config.url);
    this.play();
  }

  initFlvEvents(flv) {
    const player = this;
    flv.once(_xgplayerUtils.EVENTS.REMUX_EVENTS.INIT_SEGMENT, () => {
      _xgplayer2.default.util.addClass(player.root, 'xgplayer-is-live');
      if (!_xgplayer2.default.util.findDom(this.root, 'xg-live')) {
        const live = _xgplayer2.default.util.createDom('xg-live', '正在直播', {}, 'xgplayer-live');
        player.controls.appendChild(live);
      }
    });

    flv.once(_xgplayerUtils.EVENTS.LOADER_EVENTS.LOADER_COMPLETE, () => {
      // 直播完成，待播放器播完缓存后发送关闭事件
      if (!player.paused) {
        const timer = setInterval(() => {
          const end = player.getBufferedRange()[1];
          if (Math.abs(player.currentTime - end) < 0.5) {
            player.emit('ended');
            window.clearInterval(timer);
          }
        }, 200);
      }
    });
    flv.on(_xgplayerUtils.EVENTS.BROWSER_EVENTS.VISIBILITY_CHANGE, hidden => {
      if (hidden) {
        this.pause();
      } else {
        this.play();
      }
    });
  }

  initEvents() {
    this.on('timeupdate', () => {
      this.loadData();
    });

    this.on('seeking', () => {
      const time = this.currentTime;
      const range = this.getBufferedRange();
      if (time > range[1] || time < range[0]) {
        this.flv.seek(this.currentTime);
      }
    });
  }

  initFlv() {
    const flv = this.context.registry('FLV_CONTROLLER', _flvLiveMobile2.default)(this);
    this.initFlvEvents(flv);
    this.flv = flv;
  }

  play() {
    if (this._hasStart && this.paused) {
      this._destroy();
      this.context = new _xgplayerUtils.Context(flvAllowedEvents);
      const flv = this.context.registry('FLV_CONTROLLER', _flvLiveMobile2.default)(this);
      this.initFlvEvents(flv);
      this.flv = flv;
      this.context.init();
      this.loadData();
      super.start();
      super.play();
    } else {
      super.play();
    }
  }

  pause() {
    super.pause();
    if (this.flv) {
      this.flv.pause();
    }
  }

  loadData(time = this.currentTime) {
    if (this.flv) {
      this.flv.seek(time);
    }
  }
  destroy() {
    this._destroy();
    super.destroy();
  }

  _destroy() {
    this.context.destroy();
    this.flv = null;
    this.context = null;
  }

  get src() {
    return this.currentSrc;
  }

  set src(url) {
    this.player.config.url = url;
    if (!this.paused) {
      this.pause();
      this.once('pause', () => {
        this.start(url);
      });
      this.once('canplay', () => {
        this.play();
      });
    } else {
      this.start(url);
    }
    this.once('canplay', () => {
      this.currentTime = 0;
    });
  }
}

module.exports = FlvPlayer;

/***/ }),

/***/ 1:
/*!*****************************!*\
  !*** multi ./src/mobile.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/mobile.js */"./src/mobile.js");


/***/ }),

/***/ "xgplayer":
/*!*************************!*\
  !*** external "Player" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["Player"]; }());

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GbHZQbGF5ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy9Vc2Vycy9sZW9uYXJkby9Eb2N1bWVudHMvZnJvbnQtZW5kL3BsYXllci94Z3BsYXllci9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci1idWZmZXIvc3JjL2J1ZmZlci5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItYnVmZmVyL3NyYy9wcmVzb3VjZS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItYnVmZmVyL3NyYy90cmFjay5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItY29kZWMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLWNvZGVjL3NyYy9hYWMvYWFjLWhlbHBlci5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItY29kZWMvc3JjL2NvbXBhdGliaWxpdHkuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLWNvZGVjL3NyYy9oMjY0L25hbHVuaXQvZ29sb21iLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci1jb2RlYy9zcmMvaDI2NC9uYWx1bml0L2luZGV4LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci1jb2RlYy9zcmMvaDI2NC9uYWx1bml0L3Nwcy5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItZGVtdXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLWRlbXV4L3NyYy9mbHYvYW1mLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItZGVtdXgvc3JjL2Zsdi9pbmRleC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItZGVtdXgvc3JjL2hscy9kZW11eGVyL20zdThwYXJzZXIuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLWRlbXV4L3NyYy9obHMvZGVtdXhlci90cy5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItZGVtdXgvc3JjL2hscy9wbGF5bGlzdC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItbG9hZGVyL2luZGV4LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci1sb2FkZXIvc3JjL2ZldGNoLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItcmVtdXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXJlbXV4L3NyYy9tcDQvZm1wNC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItcmVtdXgvc3JjL21wNC9pbmRleC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL25vZGVfbW9kdWxlcy9jb25jYXQtdHlwZWQtYXJyYXkvbGliL2NvbmNhdC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvbm9kZV9tb2R1bGVzL2NvbmNhdC10eXBlZC1hcnJheS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL25vZGVfbW9kdWxlcy93ZWJ3b3JraWZ5LXdlYnBhY2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9jb25zdGFudHMvZXZlbnRzLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvY29uc3RhbnRzL3dvcmtlci1jb21tYW5kcy5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9jcnlwdG8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9lbnYvUGFnZVZpc2liaWxpdHkuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9lbnYvaXNsZS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL2Vudi9zbmlmZmVyLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvZW52L3V0ZjguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9tb2JpbGUvYXVkaW8tY29udGV4dC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL21vYmlsZS9tb2JpbGUtdmlkZW8uanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9tb2JpbGUvc291cmNlYnVmZmVyLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvbW9iaWxlL3RpY2tlci5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL21vYmlsZS92aWRlby1jb250ZXh0LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvbW9iaWxlL3dvcmtlci5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL21vYmlsZS95dXYtY2FudmFzLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvbW9kZWxzL1RpbWVSYW5nZXMuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9tb2RlbHMvbWVkaWEtaW5mby5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL21vZGVscy9tZWRpYS1zYW1wbGUuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9tb2RlbHMvbWVkaWEtc2VnbWVudC1saXN0LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvbW9kZWxzL21lZGlhLXNlZ21lbnQuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9tb2RlbHMvdHJhY2stbWV0YS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL21vZGVscy90cmFjay1zYW1wbGUuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9tc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy93cml0ZS9idWZmZXIuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy93cml0ZS9zdHJlYW0uanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4vc3JjL2Zsdi1saXZlLW1vYmlsZS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvbW9iaWxlLmpzIiwid2VicGFjazovL0ZsdlBsYXllci9leHRlcm5hbCBcIlBsYXllclwiIl0sIm5hbWVzIjpbIlIiLCJSZWZsZWN0IiwiUmVmbGVjdEFwcGx5IiwiYXBwbHkiLCJ0YXJnZXQiLCJyZWNlaXZlciIsImFyZ3MiLCJGdW5jdGlvbiIsInByb3RvdHlwZSIsImNhbGwiLCJSZWZsZWN0T3duS2V5cyIsIm93bktleXMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiY29uY2F0IiwiUHJvY2Vzc0VtaXRXYXJuaW5nIiwid2FybmluZyIsImNvbnNvbGUiLCJ3YXJuIiwiTnVtYmVySXNOYU4iLCJOdW1iZXIiLCJpc05hTiIsInZhbHVlIiwiRXZlbnRFbWl0dGVyIiwiaW5pdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfZXZlbnRzIiwidW5kZWZpbmVkIiwiX2V2ZW50c0NvdW50IiwiX21heExpc3RlbmVycyIsImRlZmF1bHRNYXhMaXN0ZW5lcnMiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJzZXQiLCJhcmciLCJSYW5nZUVycm9yIiwiZ2V0UHJvdG90eXBlT2YiLCJjcmVhdGUiLCJzZXRNYXhMaXN0ZW5lcnMiLCJuIiwiJGdldE1heExpc3RlbmVycyIsInRoYXQiLCJnZXRNYXhMaXN0ZW5lcnMiLCJlbWl0IiwidHlwZSIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwdXNoIiwiZG9FcnJvciIsImV2ZW50cyIsImVycm9yIiwiZXIiLCJFcnJvciIsImVyciIsIm1lc3NhZ2UiLCJjb250ZXh0IiwiaGFuZGxlciIsImxlbiIsImxpc3RlbmVycyIsImFycmF5Q2xvbmUiLCJfYWRkTGlzdGVuZXIiLCJsaXN0ZW5lciIsInByZXBlbmQiLCJtIiwiZXhpc3RpbmciLCJUeXBlRXJyb3IiLCJuZXdMaXN0ZW5lciIsInVuc2hpZnQiLCJ3YXJuZWQiLCJ3IiwiU3RyaW5nIiwibmFtZSIsImVtaXR0ZXIiLCJjb3VudCIsImFkZExpc3RlbmVyIiwib24iLCJwcmVwZW5kTGlzdGVuZXIiLCJvbmNlV3JhcHBlciIsImZpcmVkIiwicmVtb3ZlTGlzdGVuZXIiLCJ3cmFwRm4iLCJfb25jZVdyYXAiLCJzdGF0ZSIsIndyYXBwZWQiLCJiaW5kIiwib25jZSIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0IiwicG9zaXRpb24iLCJvcmlnaW5hbExpc3RlbmVyIiwic2hpZnQiLCJzcGxpY2VPbmUiLCJvZmYiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJrZXlzIiwia2V5IiwiX2xpc3RlbmVycyIsInVud3JhcCIsImV2bGlzdGVuZXIiLCJ1bndyYXBMaXN0ZW5lcnMiLCJyYXdMaXN0ZW5lcnMiLCJsaXN0ZW5lckNvdW50IiwiZXZlbnROYW1lcyIsImFyciIsImNvcHkiLCJBcnJheSIsImluZGV4IiwicG9wIiwicmV0IiwiVHJhY2siLCJyZXF1aXJlIiwiZGVmYXVsdCIsIlRyYWNrcyIsIkF1ZGlvVHJhY2siLCJWaWRlb1RyYWNrIiwiWGdCdWZmZXIiLCJSZW11eEJ1ZmZlciIsIlByZVNvdXJjZSIsImNvbnN0cnVjdG9yIiwiaGlzdG9yeUxlbiIsImFycmF5Iiwib2Zmc2V0IiwiZGF0YSIsImJ5dGVMZW5ndGgiLCJVaW50OEFycmF5IiwiX3NoaWZ0QnVmZmVyIiwic2xpY2UiLCJ0bXBvZmYiLCJ0bXAiLCJ0ZW1wbGVuZ3RoIiwiY2xlYXIiLCJkZXN0cm95IiwidG9JbnQiLCJzdGFydCIsInJldEludCIsInZpZGVvIiwiYXVkaW8iLCJTb3VyY2UiLCJtaW1ldHlwZSIsInNvdXJjZXMiLCJnZXRTb3VyY2UiLCJzb3VyY2UiLCJjcmVhdGVTb3VyY2UiLCJpZCIsInNlcXVlbmNlTnVtYmVyIiwic2FtcGxlcyIsImRyb3BwZWRTYW1wbGVzIiwicmVzZXQiLCJkaXN0cm95IiwiVEFHIiwiZHJvcHBlZCIsImF1ZGlvVHJhY2siLCJ2aWRlb1RyYWNrIiwiTmFsdW5pdCIsIlNwc1BhcnNlciIsIkNvbXBhdGliaWxpdHkiLCJBQUMiLCJnZXRTaWxlbnRGcmFtZSIsImNvZGVjIiwiY2hhbm5lbENvdW50IiwiUkVNVVhfRVZFTlRTIiwiREVNVVhfRVZFTlRTIiwiRVZFTlRTIiwibmV4dEF1ZGlvRHRzIiwibmV4dFZpZGVvRHRzIiwibGFzdEF1ZGlvU2FtcGxlc0xlbiIsImxhc3RWaWRlb1NhbXBsZXNMZW4iLCJsYXN0VmlkZW9EdHMiLCJsYXN0QXVkaW9EdHMiLCJhbGxBdWRpb1NhbXBsZXNDb3VudCIsImFsbFZpZGVvU2FtcGxlc0NvdW50IiwiX2ZpcnN0QXVkaW9TYW1wbGUiLCJfZmlyc3RWaWRlb1NhbXBsZSIsImZpbGxlZEF1ZGlvU2FtcGxlcyIsImZpbGxlZFZpZGVvU2FtcGxlcyIsIl92aWRlb0xhcmdlR2FwIiwiX2F1ZGlvTGFyZ2VHYXAiLCJiZWZvcmUiLCJSRU1VWF9NRURJQSIsImRvRml4IiwiaXNGaXJzdEF1ZGlvU2FtcGxlcyIsImlzRmlyc3RWaWRlb1NhbXBsZXMiLCJnZXRGaXJzdFNhbXBsZSIsInJlY29yZFNhbXBsZXNDb3VudCIsImZpeFJlZlNhbXBsZUR1cmF0aW9uIiwibWV0YSIsImNoYW5nZWQiLCJ2aWRlb0NoYW5nZWQiLCJjaGFuZ2VkSWR4IiwidmlkZW9DaGFuZ2VkSWR4IiwiZGV0YWN0Q2hhbmdlU3RyZWFtIiwiZml4Q2hhbmdlU3RyZWFtVmlkZW8iLCJkb0ZpeFZpZGVvIiwiYXVkaW9DaGFuZ2VkIiwiYXVkaW9DaGFuZ2VkSWR4IiwiZml4Q2hhbmdlU3RyZWFtQXVkaW8iLCJkb0ZpeEF1ZGlvIiwiZmlyc3QiLCJzdHJlYW1DaGFuZ2VTdGFydCIsInZpZGVvU2FtcGxlcyIsImZyYW1lUmF0ZSIsImZpeGVkIiwiZmlyc3RTYW1wbGUiLCJzYW1wbGVzTGVuIiwiZG9GaXhMYXJnZUdhcCIsImR0cyIsImRldGVjdExhcmdlR2FwIiwiZmlyc3REdHMiLCJ2aWRlb0ZpcnN0RHRzIiwiYXVkaW9GaXJzdER0cyIsImdhcCIsInJlZlNhbXBsZUR1cmF0aW9uIiwiZmlsbENvdW50IiwiTWF0aCIsImZsb29yIiwiY2xvbmVkRmlyc3RTYW1wbGUiLCJhc3NpZ24iLCJwdHMiLCJjdHMiLCJzaXplIiwiYWJzR2FwIiwiYWJzIiwiZmlsbEZyYW1lQ291bnQiLCJjbG9uZWRTYW1wbGUiLCJjb21wdXRlZCIsIm9yaWdpbkR0cyIsImxhc3REdHMiLCJsYXN0U2FtcGxlRHVyYXRpb24iLCJjdXJyZW50IiwibmV4dCIsImR1cmF0aW9uIiwiZmlsbEZyYW1lSWR4IiwiZmlsbEZyYW1lIiwic3BsaWNlIiwiYXVkaW9TYW1wbGVzIiwic2lsZW50RnJhbWUiLCJfZmlyc3RTYW1wbGUiLCJ2aWRlb0ZpcnN0UHRzIiwic2lsZW50U2FtcGxlQ291bnQiLCJzaWxlbnRTYW1wbGUiLCJkYXRhc2l6ZSIsImZpbHRlcmVkIiwicmVmU2FtcGxlRHVyYXRpb25GaXhlZCIsInNpbGVudEZyYW1lQ291bnQiLCJzb3J0QXVkaW9TYW1wbGVzIiwiY2hhbmdlSWR4IiwicHJldkR0cyIsImdldFN0cmVhbUNoYW5nZVN0YXJ0IiwiY3VyRHRzIiwiaXNDb250aW51ZSIsIm9wdGlvbnMiLCJmaXJzdFBhcnRTYW1wbGVzIiwic2Vjb25kUGFydFNhbXBsZXMiLCJjaGFuZ2VTYW1wbGUiLCJmaXJzdFBhcnREdXJhdGlvbiIsImZpbmRGaXJzdFZpZGVvU2FtcGxlIiwiZmluZEZpcnN0QXVkaW9TYW1wbGUiLCJpc1ZpZGVvIiwiYWxsU2FtcGxlc0NvdW50IiwiZmlsbGVkU2FtcGxlc0NvdW50IiwiZHVyYXRpb25BdmciLCJyZW1vdmVJbnZhbGlkU2FtcGxlcyIsImZpbHRlciIsInNhbXBsZSIsImR0c0Jhc2UiLCJJbmZpbml0eSIsInNvcnQiLCJhIiwiYiIsInNvcnRlZCIsImlzS2V5ZnJhbWUiLCJuZXh0RHRzIiwiY29uZDEiLCJjb25kMiIsImRpc2NvbnRpbnVlIiwidHJhY2tzIiwiX2NvbnRleHQiLCJnZXRJbnN0YW5jZSIsInJlbXV4ZXIiLCJfZHRzQmFzZSIsIkdvbG9tYiIsInVpbnQ4YXJyYXkiLCJfYnVmZmVyIiwiX2J1ZmZlckluZGV4IiwiX3RvdGFsQnl0ZXMiLCJfdG90YWxCaXRzIiwiX2N1cnJlbnRXb3JkIiwiX2N1cnJlbnRXb3JkQml0c0xlZnQiLCJfZmlsbEN1cnJlbnRXb3JkIiwiYnVmZmVyQnl0ZXNMZWZ0IiwiYnl0ZXNSZWFkIiwibWluIiwid29yZCIsInN1YmFycmF5IiwiRGF0YVZpZXciLCJidWZmZXIiLCJnZXRVaW50MzIiLCJyZWFkQml0cyIsImJpdHMiLCJ2YWx1IiwicmVhZEJvb2wiLCJyZWFkQnl0ZSIsIl9za2lwTGVhZGluZ1plcm8iLCJ6ZXJvQ291bnQiLCJyZWFkVUVHIiwibGVhZGluZ1plcm9zIiwicmVhZFNFRyIsImdldE5hbHVuaXRzIiwiYnVmIiwiZGF0YXZpZXciLCJnZXRJbnQzMiIsImdldEludDE2IiwiZ2V0SW50OCIsImdldEFubmV4Yk5hbHMiLCJnZXRBdmNjTmFscyIsIm5hbHMiLCJnZXRIZWFkZXJQb3NpdGlvbkFubmV4QiIsInBvcyIsImVuZCIsImhlYWRlciIsImhlYWRlckxlbmd0aCIsInNraXAiLCJib2R5IiwidW5pdCIsImFuYWx5c2VOYWwiLCJuZHIiLCJpZHIiLCJzcHMiLCJwYXJzZVNQUyIsInBwcyIsImdldEF2Y2MiLCJTUFNQYXJzZXIiLCJfZWJzcDJyYnNwIiwic3JjIiwic3JjTGVuZ3RoIiwiZHN0IiwiZHN0SWR4IiwicmJzcCIsImdiIiwicHJvZmlsZUlkYyIsImxldmVsSWRjIiwicHJvZmlsZV9zdHJpbmciLCJnZXRQcm9maWxlU3RyaW5nIiwibGV2ZWxfc3RyaW5nIiwiZ2V0TGV2ZWxTdHJpbmciLCJjaHJvbWFfZm9ybWF0X2lkYyIsImNocm9tYV9mb3JtYXQiLCJjaHJvbWFfZm9ybWF0X3RhYmxlIiwiYml0X2RlcHRoIiwic2NhbGluZ19saXN0X2NvdW50IiwiX3NraXBTY2FsaW5nTGlzdCIsInBpY19vcmRlcl9jbnRfdHlwZSIsIm51bV9yZWZfZnJhbWVzX2luX3BpY19vcmRlcl9jbnRfY3ljbGUiLCJwaWNfd2lkdGhfaW5fbWJzX21pbnVzMSIsInBpY19oZWlnaHRfaW5fbWFwX3VuaXRzX21pbnVzMSIsImZyYW1lX21ic19vbmx5X2ZsYWciLCJmcmFtZV9jcm9wX2xlZnRfb2Zmc2V0IiwiZnJhbWVfY3JvcF9yaWdodF9vZmZzZXQiLCJmcmFtZV9jcm9wX3RvcF9vZmZzZXQiLCJmcmFtZV9jcm9wX2JvdHRvbV9vZmZzZXQiLCJmcmFtZV9jcm9wcGluZ19mbGFnIiwicGFyX3dpZHRoIiwicGFyX2hlaWdodCIsImZwcyIsImZwc19maXhlZCIsImZwc19udW0iLCJmcHNfZGVuIiwidnVpX3BhcmFtZXRlcnNfcHJlc2VudF9mbGFnIiwiYXNwZWN0X3JhdGlvX2lkYyIsInBhcl93X3RhYmxlIiwicGFyX2hfdGFibGUiLCJudW1fdW5pdHNfaW5fdGljayIsInRpbWVfc2NhbGUiLCJwYXJTY2FsZSIsImNyb3BfdW5pdF94IiwiY3JvcF91bml0X3kiLCJzdWJfd2MiLCJzdWJfaGMiLCJjb2RlY193aWR0aCIsImNvZGVjX2hlaWdodCIsInByZXNlbnRfd2lkdGgiLCJjZWlsIiwiY2hyb21hX2Zvcm1hdF9zdHJpbmciLCJnZXRDaHJvbWFGb3JtYXRTdHJpbmciLCJmcmFtZV9yYXRlIiwicGFyX3JhdGlvIiwid2lkdGgiLCJoZWlnaHQiLCJjb2RlY19zaXplIiwicHJlc2VudF9zaXplIiwibGFzdF9zY2FsZSIsIm5leHRfc2NhbGUiLCJkZWx0YV9zY2FsZSIsInRvRml4ZWQiLCJjaHJvbWEiLCJ0b1ZpZGVvTWV0YSIsInNwc0NvbmZpZyIsImNvZGVjV2lkdGgiLCJjb2RlY0hlaWdodCIsInByZXNlbnRXaWR0aCIsInByZXNlbnRIZWlnaHQiLCJwcm9maWxlIiwibGV2ZWwiLCJiaXREZXB0aCIsImNocm9tYUZvcm1hdCIsInBhclJhdGlvIiwiZnBzRGVuIiwiZnBzTnVtIiwidGltZXNjYWxlIiwiTTNVOFBhcnNlciIsIlRzRGVtdXhlciIsIlBsYXlsaXN0IiwiRmx2RGVtdXhlciIsIkRBVEFfVFlQRVMiLCJOVU1CRVIiLCJCT09MRUFOIiwiU1RSSU5HIiwiT0JKRUNUIiwiTUlYX0FSUkFZIiwiT0JKRUNUX0VORCIsIlNUUklDVF9BUlJBWSIsIkRBVEUiLCJMT05FX1NUUklORyIsIkFNRlBhcnNlciIsInJlYWRPZmZzZXQiLCJyZXNvbHZlIiwibWV0YURhdGEiLCJwYXJzZVZhbHVlIiwiYm9keVNpemUiLCJyZXNldFN0YXR1cyIsInBhcnNlU3RyaW5nIiwiZHYiLCJzdHJMZW4iLCJnZXRVaW50MTYiLCJpc0xlIiwic3RyIiwiVVRGOCIsImRlY29kZSIsInBhcnNlRGF0ZSIsInRzIiwiZ2V0RmxvYXQ2NCIsInRpbWVPZmZzZXQiLCJEYXRlIiwicGFyc2VPYmplY3QiLCJpc09iakVuZCIsInBhcnNlTG9uZ1N0cmluZyIsIkFycmF5QnVmZmVyIiwiZGF0YVZpZXciLCJnZXRVaW50OCIsImJvb2xOdW0iLCJvYmpFbmRTaXplIiwiYW1mT2JqIiwiaXNPYmplY3RFbmQiLCJtYXJrIiwiYW1mVmFyIiwibWFya2VyIiwiYXJyTGVuZ3RoIiwic2NyaXB0IiwiZGF0ZSIsImxvbmdTdHIiLCJfZmlyc3RGcmFnbWVudExvYWRlZCIsIl90cmFja051bSIsIl9oYXNTY3JpcHQiLCJERU1VWF9TVEFSVCIsImRvUGFyc2VGbHYiLCJpc0ZsdkZpbGUiLCJnZXRQbGF5VHlwZSIsInN0cmVhbUZsYWciLCJyZXN1bHQiLCJoYXNWaWRlbyIsImhhc0F1ZGlvIiwibG9hZGVyQnVmZmVyIiwicGFyc2VGbHZIZWFkZXIiLCJjaHVuayIsImxvb3BNYXgiLCJfcGFyc2VGbHZUYWciLCJERU1VWF9DT01QTEVURSIsIkRFTVVYX0VSUk9SIiwicGxheVR5cGUiLCJpbml0VmlkZW9UcmFjayIsImluaXRBdWRpb1RyYWNrIiwiVmlkZW9UcmFja01ldGEiLCJBdWRpb1RyYWNrTWV0YSIsIl9wYXJzZUZsdlRhZ0hlYWRlciIsIl9wcm9jZXNzQ2h1bmsiLCJ0YWdUeXBlIiwidGltZXN0YW1wIiwidGltZXN0YW1wRXh0IiwiX3BhcnNlU2NyaXB0RGF0YSIsIl9wYXJzZUFBQ0RhdGEiLCJfcGFyc2VIZXZjRGF0YSIsImluZm8iLCJvbk1ldGFEYXRhIiwibWVkaWFJbmZvIiwiaHNhQXVkaW8iLCJ2YWxpZGF0ZSIsIl9kYXRhc2l6ZVZhbGlkYXRvciIsIk1FRElBX0lORk8iLCJoYXNTcGVjaWZpY0NvbmZpZyIsImF1ZGlvc2FtcGxlcmF0ZSIsInNhbXBsZVJhdGUiLCJhdWRpb2NoYW5uZWxzIiwic2FtcGxlUmF0ZUluZGV4IiwiZnJhbWVyYXRlIiwiX2FhY1NlcXVlbmNlSGVhZGVyUGFyc2VyIiwib2JqZWN0VHlwZSIsIl9zd2l0Y2hBdWRpb1NhbXBsZVJhdGUiLCJmcmFtZUxlbmd0aCIsImRlcGVuZHNPbkNvcmVDb2RlciIsImV4dGVuc2lvbkZsYWdJbmRleCIsInVzZXJBZ2VudCIsIndpbmRvdyIsIm5hdmlnYXRvciIsInRvTG93ZXJDYXNlIiwiZXh0ZW5zaW9uU2FtcGxpbmdJbmRleCIsImNvbmZpZyIsInNhbXBsaW5nSW5kZXgiLCJpbmRleE9mIiwic25pZmZlciIsImJyb3dzZXIiLCJ0cmFjayIsImZvcm1hdCIsIl9oYXNBdWRpb1NlcXVlbmNlIiwiX3N3aXRjaEF1ZGlvU2FtcGxpbmdGcmVxdWVuY3kiLCJmcmFtZUxlbnRoIiwiYXVkaW9TYW1wbGVSYXRlIiwiYXVkaW9TYW1wbGVSYXRlSW5kZXgiLCJhYWNIZWFkZXIiLCJhdWRpb01lZGlhIiwiTUVUQURBVEFfUEFSU0VEIiwiQVVESU9fTUVUQURBVEFfQ0hBTkdFIiwiX21ldGFDaGFuZ2UiLCJmcmFtZVR5cGUiLCJjb2RlY0lEIiwiYXZjUGFja2V0VHlwZSIsInBhcnNlSW50IiwibmFsdSIsInIiLCJzaXplcyIsImF2Y2NsZW5ndGgiLCJfYXZjU2VxdWVuY2VIZWFkZXJQYXJzZXIiLCJfaGFzVmlkZW9TZXF1ZW5jZSIsIlZJREVPX01FVEFEQVRBX0NIQU5HRSIsImNvbmZpZ3VyYXRpb25WZXJzaW9uIiwiYXZjUHJvZmlsZUluZGljYXRpb24iLCJwcm9maWxlQ29tcGF0aWJpbGl0eSIsImF2Y0xldmVsSW5kaWNhdGlvbiIsIm5hbFVuaXRMZW5ndGgiLCJudW1PZlNwcyIsImoiLCJjb2RlY1N0cmluZyIsImgiLCJ0b1N0cmluZyIsIm51bU9mUHBzIiwidmlkZW9NZWRpYSIsImF2Y2MiLCJzYW1wbGluZ0ZyZXF1ZW5jeUluZGV4Iiwic2FtcGxpbmdGcmVxdWVuY3lMaXN0IiwiX3N3aXRjaEF1ZGlvQ2hhbm5lbCIsInNhbXBsZVRyYWNrTnVtSW5kZXgiLCJzYW1wbGVUcmFja051bUxpc3QiLCJkYXRhc2l6ZUNvbmZpcm0iLCJsb2dnZXIiLCJwYXJzZSIsInRleHQiLCJiYXNldXJsIiwic3BsaXQiLCJyZWZzIiwicmVmIiwibWF0Y2giLCJyZWZtIiwicmVmZCIsInZlcnNpb24iLCJzZXF1ZW5jZSIsInRhcmdldGR1cmF0aW9uIiwicGFyc2VGbG9hdCIsInBhcnNlRnJhZyIsInBhcnNlRGVjcnlwdCIsImZyYWdzIiwiZnJlZyIsIm5leHRsaW5lIiwiY2hhckF0IiwidXJsIiwicGFyc2VVUkwiLCJ1cmxzIiwiZW5jcnlwdCIsImNtZCIsIm1ldGhvZCIsInVyaSIsIml2IiwiaXZiIiwiaW0iLCJzdWJzdHIiLCJTdHJlYW1UeXBlIiwiY29uZmlncyIsImRlbXV4aW5nIiwicGF0IiwicG10IiwiX2hhc1ZpZGVvTWV0YSIsIl9oYXNBdWRpb01ldGEiLCJkZW11eCIsImZyYWciLCJpbnB1dEJ1ZmZlciIsInBlc2VzIiwidHNTdHJlYW0iLCJTdHJlYW0iLCJyZWFkIiwicGVzIiwicGlkIiwiRVMiLCJwYXlsb2FkIiwic3RyZWFtIiwiQXVkaW9PcHRpb25zIiwiVmlkZW9PcHRpb25zIiwiZXBlc2VzIiwiTWVyZ2UiLCJwdXNoQXVkaW9TYW1wbGUiLCJwdXNoVmlkZW9TYW1wbGUiLCJfdHJhY2tzIiwiZnJlcXVlbmNlIiwiY2hhbm5lbCIsImF1ZGlvT2JqZWN0VHlwZSIsImF1ZGlvQ29uZmlnIiwiZnJlcXVlbmN5SW5kZXgiLCJtZXRhRXF1YWwiLCJjb21wYWlyZU1ldGEiLCJBdWRpb1RyYWNrU2FtcGxlIiwic2FtcGxlTGVuZ3RoIiwibmFsIiwic2FyUmF0aW8iLCJzYXJfcmF0aW8iLCJWaWRlb1RyYWNrU2FtcGxlIiwiZGVzdG9yeSIsImNvbXBhaXJlQXJyYXkiLCJhbCIsImJsIiwiaWdub3JlRHVyYXRpb24iLCJrIiwiaXRlbWEiLCJpdGVtYiIsImJ1ZmZlcnMiLCJyZWFkSGVhZGVyIiwicmVhZFBheWxvYWQiLCJwYWNrZXQiLCJ1bmtub3duUElEcyIsIlBFUyIsIlBBVCIsIkNBVCIsIlRTRFQiLCJzb21lIiwiaXRlbSIsIlBNVCIsInN0cyIsIk1lZGlhIiwic3RyZWFtVHlwZSIsInN5bmMiLCJyZWFkVWludDgiLCJyZWFkVWludDE2IiwicHJpb3JpdHkiLCJzY3JhbWJsaW5nIiwiYWRhcHRhdGlvbiIsImNvbnRpbnVpdHkiLCJ0YWJlbElEIiwiemVybyIsInNlY3Rpb25MZW5ndGgiLCJzdHJlYW1JRCIsInNlY3Rpb25OdW1iZXIiLCJsYXN0U2VjdGlvbk51bWJlciIsIk4iLCJwcm9ncmFtTnVtYmVyIiwicHJvZ3JhbSIsInRhYmxlSUQiLCJvcmRlciIsImxhc3RPcmRlciIsIlBDUl9QSUQiLCJwcm9ncmFtTGVuZ3RoIiwiZXMiLCJtYXAiLCJhZGFwdGF0aW9uTGVuZ3RoIiwiYWNjZXNzIiwiUENSIiwiT1BDUiIsInNwbGljZVBvaW50IiwidHJhbnNwb3J0UHJpdmF0ZSIsImFkYXB0YXRpb25GaWVsZCIsIl9zdGFydCIsInByb2dyYW1DbG9ja0Jhc2UiLCJyZWFkVWludDMyIiwicHJvZ3JhbUNsb2NrRXh0ZW5zaW9uIiwib3JpZ2luUHJvZ3JhbUNsb2NrQmFzZSIsIm9yaWdpblByb2dyYW1DbG9ja0V4dGVuc2lvbiIsInNwbGljZUNvdW50ZG93biIsInRyYW5zcG9ydFByaXZhdGVEYXRhIiwibHR3IiwicGllY2V3aXNlIiwic2VhbWxlc3MiLCJsdHdWYWxpZCIsImx0d09mZnNldCIsInJlYWRVaW50MjQiLCJwaWVjZXdpc2VSYXRlIiwicmVhZEludDgiLCJzcGxpY2VUeXBlIiwiZHRzTmV4dEFVMSIsIm1hcmtlcjEiLCJkdHNOZXh0QVUyIiwibWFya2VyMiIsImR0c05leHRBVTMiLCJsYXN0U3R1ZmZpbmciLCJwYWNrZXRMZW5ndGgiLCJwdHNEVFNGbGFnIiwiZXNjckZsYWciLCJlc1JhdGVGbGFnIiwiZHNtRmxhZyIsImFkZGl0aW9uYWxGbGFnIiwiY3JjRmxhZyIsImV4dGVuc2lvbkZsYWciLCJwZXNIZWFkZXJMZW5ndGgiLCJOMSIsImVzY3IiLCJleCIsImVzUmF0ZSIsImFkZGl0aW9uYWxDb3B5SW5mbyIsInBlc0NSQyIsImJhY2siLCJmcSIsImxheWVyIiwiYWJzZW50IiwiZ2V0QXVkaW9Db25maWciLCJzZWN0aW9uSW5kaWNhdG9yIiwiY3VycmVudE5leHRJbmRpY2F0b3IiLCJjcmMzMiIsImV4dGVuc2lvblNhbXBsZUluZGV4IiwidGVzdCIsImlucHV0YnVmZmVyIiwiX2Jhc2VVUkwiLCJfbGlzdCIsIl90cyIsImZyYWdMZW5ndGgiLCJfbGFzdGdldCIsIl9hdWRvY2xlYXIiLCJhdXRvY2xlYXIiLCJiYXNlVVJMIiwiZG93bmxvYWRlZCIsImRvd25sb2FkaW5nIiwiZGVsZXRlRnJhZyIsInRpbWUiLCJwdXNoTTNVOCIsImRlbGV0ZXByZSIsIm5ld2ZyYWdsaXN0IiwidHNsaXN0IiwiZ2V0VHNMaXN0IiwidHNuYW1lIiwiaXNsb2FkZWQiLCJsb2FkaW5nIiwiZ2V0VHNCeU5hbWUiLCJnZXRUcyIsInRpbWVsaXN0IiwiY2xlYXJEb3dubG9hZGVkIiwibCIsIkZldGNoTG9hZGVyIiwiTE9BREVSX0VWRU5UUyIsIlJFQURfU1RSRUFNIiwiUkVBRF9URVhUIiwiUkVBRF9KU09OIiwiUkVBRF9CVUZGRVIiLCJzdGF0dXMiLCJfcmVhZGVyIiwiX2NhbmNlbGVkIiwiX2Rlc3Ryb3llZCIsInJlYWR0eXBlIiwiX2xvYWRlclRhc2tObyIsIkxBREVSX1NUQVJUIiwibG9hZCIsIm9wdHMiLCJfdGhpcyIsInBhcmFtcyIsImdldFBhcmFtcyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJfb25GZXRjaFJlc3BvbnNlIiwiTE9BREVSX0VSUk9SIiwiY2F0Y2giLCJ0YXNrbm8iLCJqc29uIiwiTE9BREVSX0NPTVBMRVRFIiwiYXJyYXlCdWZmZXIiLCJfb25SZWFkZXIiLCJnZXRSZWFkZXIiLCJyZWFkZXIiLCJjYW5jZWwiLCJlIiwidmFsIiwiZG9uZSIsIkxPQURFUl9EQVRBTE9BREVEIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJtb2RlIiwiY2FjaGUiLCJjb25maWdIZWFkZXJzIiwiaGFzT3duUHJvcGVydHkiLCJhcHBlbmQiLCJvcHRIZWFkZXJzIiwiY29ycyIsIndpdGhDcmVkZW50aWFscyIsImNyZWRlbnRpYWxzIiwiTXA0UmVtdXhlciIsIkZtcDQiLCJCdWZmZXIiLCJ3cml0ZVVpbnQzMiIsImluaXRCb3giLCJjb250ZW50Iiwid3JpdGUiLCJleHRlbnNpb24iLCJmbGFnIiwiZnR5cCIsIm1vb3YiLCJtdmhkIiwidHJhayIsInZpZGVvVHJhayIsImF1ZGlvVHJhayIsIm12ZXgiLCJmb3JFYWNoIiwiYnl0ZXMiLCJ0a2hkIiwibWRpYSIsInNhbXBsZXJhdGUiLCJlZHRzIiwibWVkaWFUaW1lIiwibWRoZCIsImhkbHIiLCJtaW5mIiwidm1oZCIsInNtaGQiLCJkaW5mIiwic3RibCIsImRyZWYiLCJzdHNkIiwic3R0cyIsInN0c2MiLCJzdHN6Iiwic3RjbyIsIm1wNGEiLCJhdmMxIiwiZXNkcyIsImNvbmZpZ2xlbiIsImhTcGFjaW5nIiwidlNwYWNpbmciLCJidHJ0IiwicGFzcCIsInRyYWNrSUQiLCJtZWhkIiwidHJleCIsIm1vb2YiLCJtZmhkIiwidHJhZiIsInRmaGQiLCJ0ZmR0Iiwic2R0cCIsInRydW4iLCJzZHRwTGVuZ3RoIiwic2FtcGxlQ291bnQiLCJmbGFncyIsImlzTGVhZGluZyIsImRlcGVuZHNPbiIsImlzRGVwZW5kZWRPbiIsImhhc1JlZHVuZGFuY3kiLCJpc05vblN5bmMiLCJudW0iLCJtZGF0IiwibWRhdEJveCIsImNoYXJDb2RlQXQiLCJfaXNEdHNCYXNlSW5pdGVkIiwiaXNGaXJzdFZpZGVvIiwiaXNGaXJzdEF1ZGlvIiwidmlkZW9BbGxEdXJhdGlvbiIsImF1ZGlvQWxsRHVyYXRpb24iLCJyZW11eCIsIlJFTVVYX01FVEFEQVRBIiwib25NZXRhRGF0YVJlYWR5IiwiREVURUNUX0NIQU5HRV9TVFJFQU0iLCJyZXNldER0c0Jhc2UiLCJfZHRzQmFzZUluaXRlZCIsImNhbGNEdHNCYXNlIiwiX3JlbXV4VmlkZW8iLCJfcmVtdXhBdWRpbyIsInNlZWsiLCJwcmVzb3VyY2VidWZmZXIiLCJyZW11eEluaXRTZWdtZW50IiwiSU5JVF9TRUdNRU5UIiwiaW5pdFNlZ21lbnQiLCJhdWRpb0Jhc2UiLCJ2aWRlb0Jhc2UiLCJtcDRTYW1wbGVzIiwiYXZjU2FtcGxlIiwibWRhdFNhbXBsZSIsInNhbXBsZUR1cmF0aW9uIiwidmlkZW9NZXRhIiwibW9vZk1kYXQiLCJ3cml0ZVRvU291cmNlIiwiTUVESUFfU0VHTUVOVCIsImxhc3RTYW1wbGUiLCJfdmlkZW9OZXh0RHRzIiwiaXNGaXJzdER0c0luaXRlZCIsImF1ZGlvTWV0YSIsIm1wNFNhbXBsZSIsImluaXRTaWxlbnRBdWRpbyIsIkNvbnRleHQiLCJXT1JLRVJfQ09NTUFORFMiLCJQYWdlVmlzaWJpbGl0eSIsIk1lZGlhSW5mbyIsIk1lZGlhU2FtcGxlIiwiTWVkaWFTZWdtZW50IiwiTWVkaWFTZWdtZW50TGlzdCIsIk1zZSIsIk1vYmlsZVZpZGVvIiwiQ3J5cHRvIiwiUmVzdWx0Q29uc3RydWN0b3IiLCJ0b3RhbExlbmd0aCIsIl9sZW4iLCJhcnJheXMiLCJfa2V5IiwiX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiIsIl9kaWRJdGVyYXRvckVycm9yIiwiX2l0ZXJhdG9yRXJyb3IiLCJfaXRlcmF0b3IiLCJTeW1ib2wiLCJpdGVyYXRvciIsIl9zdGVwIiwicmV0dXJuIiwiX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIiLCJfZGlkSXRlcmF0b3JFcnJvcjIiLCJfaXRlcmF0b3JFcnJvcjIiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiX2FyciIsIl9jb25jYXQiLCJfY29uY2F0MiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJvYmoiLCJfX2VzTW9kdWxlIiwid2VicGFja0Jvb3RzdHJhcEZ1bmMiLCJtb2R1bGVzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImMiLCJkIiwiZ2V0dGVyIiwibyIsImNvbmZpZ3VyYWJsZSIsImdldERlZmF1bHQiLCJnZXRNb2R1bGVFeHBvcnRzIiwib2JqZWN0IiwicHJvcGVydHkiLCJwIiwib2UiLCJmIiwicyIsIkVOVFJZX01PRFVMRSIsIm1vZHVsZU5hbWVSZXFFeHAiLCJkZXBlbmRlbmN5UmVnRXhwIiwicXVvdGVSZWdFeHAiLCJyZXBsYWNlIiwiaXNOdW1lcmljIiwiZ2V0TW9kdWxlRGVwZW5kZW5jaWVzIiwicXVldWVOYW1lIiwicmV0dmFsIiwiZm5TdHJpbmciLCJ3cmFwcGVyU2lnbmF0dXJlIiwid2VicGFja1JlcXVpcmVOYW1lIiwicmUiLCJSZWdFeHAiLCJleGVjIiwiaGFzVmFsdWVzSW5RdWV1ZXMiLCJxdWV1ZXMiLCJyZWR1Y2UiLCJoYXNWYWx1ZXMiLCJnZXRSZXF1aXJlZE1vZHVsZXMiLCJtb2R1bGVzUXVldWUiLCJtYWluIiwicmVxdWlyZWRNb2R1bGVzIiwic2Vlbk1vZHVsZXMiLCJxdWV1ZSIsIm1vZHVsZVRvQ2hlY2siLCJuZXdNb2R1bGVzIiwibmV3TW9kdWxlc0tleXMiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiYWxsIiwiZW50cnlNb2R1bGUiLCJKU09OIiwic3RyaW5naWZ5Iiwiam9pbiIsImJsb2IiLCJCbG9iIiwiYmFyZSIsIlVSTCIsIndlYmtpdFVSTCIsIm1velVSTCIsIm1zVVJMIiwid29ya2VyVXJsIiwiY3JlYXRlT2JqZWN0VVJMIiwid29ya2VyIiwiV29ya2VyIiwib2JqZWN0VVJMIiwiUkVNVVhfRVJST1IiLCJNU0VfRVZFTlRTIiwiU09VUkNFX1VQREFURV9FTkQiLCJITFNfRVZFTlRTIiwiUkVUUllfVElNRV9FWENFRURFRCIsIkNSWVRPX0VWRU5UUyIsIlNUQVJUX0RFQ1JZUFQiLCJERUNSWVBURUQiLCJCUk9XU0VSX0VWRU5UUyIsIlZJU0lCSUxJVFlfQ0hBTkdFIiwiQUxMRVZFTlRTIiwiRmx2QWxsb3dlZEV2ZW50cyIsIkhsc0FsbG93ZWRFdmVudHMiLCJDT05URVhUX0NPTU9NQU5EUyIsIk9OIiwiT05DRSIsIk9GRiIsIkVNSVQiLCJERVNUUk9ZIiwiRElSRUNUX0VNSVRfRkxBRyIsImFsbG93ZWRFdmVudHMiLCJfZW1pdHRlciIsIl9pbnN0YW5jZU1hcCIsIl9jbHNNYXAiLCJfaW5pdGVkIiwiX2hvb2tzIiwidGFnIiwiaW5zdGFuY2UiLCJpbml0SW5zdGFuY2UiLCJuZXdJbnN0YW5jZSIsInJlZ2lzdHJ5IiwiY2xzIiwiY2hlY2tNZXNzYWdlTmFtZSIsIl9pc01lc3NhZ2VOYW1lVmFsaWQiLCJzZWxmIiwiZW5oYW5jZWQiLCJvbmNlTGlzdGVuZXJzIiwibWVzc2FnZU5hbWUiLCJjYWxsYmFjayIsImJlZm9yZUxpc3QiLCJlbWl0VG8iLCJyZW1vdmVMaXN0ZW5lcnMiLCJoYXNPd24iLCJjYWxsYmFja3MiLCJkZXN0cm95SW5zdGFuY2VzIiwib3V0cHV0QnVmZmVyIiwib3V0cHV0YnVmZmVyIiwiY3J5cHRvIiwibXNDcnlwdG8iLCJkZWNyaXB0IiwiYWVza2V5Iiwic2JrZXkiLCJzdWJ0bGUiLCJpbXBvcnRLZXkiLCJkZWNyaXB0RGF0YSIsImRlY3J5cHQiLCJyZXMiLCJFdmVudHMiLCJoaWRkZW4iLCJ2aXNpYmlsaXR5Q2hhbmdlIiwiZG9jdW1lbnQiLCJtc0hpZGRlbiIsIndlYmtpdEhpZGRlbiIsIm9uU2hvdyIsIm9uSGlkZGVuIiwiaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGUiLCJzZXRJbnQxNiIsIkludDE2QXJyYXkiLCJkZXZpY2UiLCJvcyIsImlzUGMiLCJpc1RhYmxldCIsInVhIiwicmVnIiwiaWUiLCJmaXJmb3giLCJjaHJvbWUiLCJvcGVyYSIsInNhZmFyaSIsImlzV2luZG93c1Bob25lIiwiaXNTeW1iaWFuIiwiaXNBbmRyb2lkIiwiaXNGaXJlRm94IiwiaXNQaG9uZSIsIm91dCIsImlucHV0IiwiZnJvbUNoYXJDb2RlIiwiX2NoZWNrQ29udGludWF0aW9uIiwidWNzNCIsImNoZWNrTGVuZ3RoIiwiQXVkaW9DdHgiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJnYWluTm9kZSIsImNyZWF0ZUdhaW4iLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJwcmVsb2FkVGltZSIsIl9jdXJyZW50QnVmZmVyIiwiX25leHRCdWZmZXIiLCJfbGFzdHB0cyIsIl9wcmVEZWNvZGUiLCJfY3VycmVudFRpbWUiLCJfZGVjb2RpbmciLCJfcGxheWVkIiwiY3VycmVudFRpbWUiLCJkZWNvZGVBdWRpbyIsInNldEF1ZGlvRGF0YSIsImRlY29kZUFBQyIsInNhbXBsZURhdGEiLCJnZXRBQUNEYXRhIiwiY29tYmlsZURhdGEiLCJkZWNvZGVBdWRpb0RhdGEiLCJhdWRpb1NvdXJjZSIsImNyZWF0ZUJ1ZmZlclNvdXJjZSIsIm9uZW5kZWQiLCJvblNvdXJjZUVuZGVkIiwiZ2V0VGltZUJ1ZmZlciIsInBsYXkiLCJwYXVzZSIsImF1ZGlvQ3R4Iiwic3VzcGVuZCIsImNsb3NlIiwic2V0QXVkaW9NZXRhRGF0YSIsImFkdHMiLCJnZXRBZHRzIiwiYWFjZnJhbWVsZW5ndGgiLCJBVlJlY29uY2lsZXIiLCJwcm9wcyIsImFDdHgiLCJ2Q3R4IiwidGltZW91dElkIiwiZG9SZWNvbmNpbGUiLCJ2Q3VyVGltZSIsImFDdXJUaW1lIiwic2V0VGltZW91dCIsIkhUTUxFbGVtZW50IiwiX2NhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJoYW5kbGVBdWRpb1NvdXJjZUVuZCIsInBsYXllZCIsIl9wYXVzZWQiLCJWaWRlb0N0eCIsImNhbnZhcyIsInRpY2tlciIsInJlY29uY2lsZXIiLCJvbmNhbnBsYXkiLCJhcHBlbmRDaGlsZCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsIm5vdyIsIl9vblRpbWVyIiwiY2xlYW5CdWZmZXIiLCJfY2xlYW5CdWZmZXIiLCJzdG9wIiwib25EZW11eENvbXBsZXRlIiwiZGVjb2RlVmlkZW8iLCJzZXRBdWRpb01ldGEiLCJzZXRWaWRlb01ldGEiLCJzZXRWaWRlb01ldGFEYXRhIiwidmlkZW9XaWR0aCIsInZpZGVvSGVpZ2h0IiwiZ2V0QXR0cmlidXRlIiwicmVhZHlTdGF0ZSIsInNlZWtpbmciLCJwYXVzZWQiLCJwbGF5YmFja1JhdGUiLCJoYXNBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJlbmRlZCIsImF1dG9wbGF5Iiwidm9sdW1lIiwidm9sIiwibXV0ZWQiLCJidWZmZXJlZCIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiU291cmNlQnVmZmVyIiwiY3VycmVudEdvcCIsIl9sYXN0R2V0IiwiZnJhbWUiLCJuZXh0R29wIiwiX2dldE5leHQiLCJnb3AiLCJyZW1vdmUiLCJUaWNrZXIiLCJpbnRlcnZhbCIsIm9uVGljayIsInNldEludGVydmFsIiwiUmFmVGlja2VyIiwicHJldiIsInRpbWVySWQiLCJfc3ViVGltZXJJZCIsIl90aWNrRnVuYyIsImdldFRpY2tGdW5jIiwidGljayIsIm5leHRUaWNrIiwiY2FuY2VsRnVuYyIsImdldENhbmNlbEZ1bmMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaXNTdXBwb3J0ZWQiLCJUaW1lb3V0VGlja2VyIiwiY2xlYXJJbnRlcnZhbCIsImdldFRpY2tlciIsIlZpZGVvQ2FudmFzIiwib25GaXJzdEZyYW1lIiwicmVhZHlTdGF0dXMiLCJsYXN0UGxheWVkIiwiX2RlY29kZXJJbml0ZWQiLCJfYXZjY3B1c2hlZCIsIl9kZWNvZGVkRnJhbWVzIiwiX2xhc3RTYW1wbGVEdHMiLCJfYmFzZUR0cyIsIl9sYXN0UmVuZGVyVGltZSIsInBsYXlGaW5pc2giLCJpbml0V2FzbVdvcmtlciIsIndhc213b3JrZXIiLCJwb3N0TWVzc2FnZSIsIm1zZyIsIl9vbkRlY29kZWQiLCJ5dXZDYW52YXMiLCJZVVZDYW52YXMiLCJfcHJlbG9hZCIsIl9hbmFseXNlTmFsIiwibG9nIiwiUHJvbWlzZSIsImZyYW1lVGltZXMiLCJmcmFtZVRpbWUiLCJyZW5kZXIiLCJ5TGluZXNpemUiLCJ1dkxpbmVzaXplIiwicmFuZ2VzIiwiY3VycmVudFJhbmdlIiwiVGltZVJhbmdlcyIsIk1BWF9TVFJFQU1fQlVGRkVSX0xFTkdUSCIsIkRlY29kZXIiLCJpbml0ZWQiLCJpbmZvbGlzdCIsInBhcl9icm9hZHdheU9uQnJvYWR3YXlJbml0ZWQiLCJicm9hZHdheU9uQnJvYWR3YXlJbml0ZWQiLCJwYXJfYnJvYWR3YXlPblBpY3R1cmVEZWNvZGVkIiwiYnJvYWR3YXlPblBpY3R1cmVEZWNvZGVkIiwidG9VOEFycmF5IiwicHRyIiwiSEVBUFU4IiwiTW9kdWxlIiwiX2Jyb2Fkd2F5SW5pdCIsInN0cmVhbUJ1ZmZlciIsIl9icm9hZHdheUNyZWF0ZVN0cmVhbSIsImluZm9pZCIsInlSb3djb3VudCIsInV2Um93Y291bnQiLCJkYXRldGVtcCIsImdldFRpbWUiLCJfYnJvYWR3YXlQbGF5U3RyZWFtIiwiZGVjb2RlciIsIm9uUG9zdFJ1biIsImltcG9ydFNjcmlwdHMiLCJhZGRPblBvc3RSdW4iLCJzdHlsZSIsIl9pbml0Q29udGV4dEdMIiwiY29udGV4dEdMIiwiX2luaXRQcm9ncmFtIiwiX2luaXRCdWZmZXJzIiwiX2luaXRUZXh0dXJlcyIsImdsIiwidmFsaWRDb250ZXh0TmFtZXMiLCJuYW1lSW5kZXgiLCJjb250ZXh0TmFtZSIsImNvbnRleHRPcHRpb25zIiwiZ2V0Q29udGV4dCIsImdldFBhcmFtZXRlciIsInZlcnRleFNoYWRlclNjcmlwdCIsImZyYWdtZW50U2hhZGVyU2NyaXB0IiwiWVVWMlJHQiIsInZlcnRleFNoYWRlciIsImNyZWF0ZVNoYWRlciIsIlZFUlRFWF9TSEFERVIiLCJzaGFkZXJTb3VyY2UiLCJjb21waWxlU2hhZGVyIiwiZ2V0U2hhZGVyUGFyYW1ldGVyIiwiQ09NUElMRV9TVEFUVVMiLCJnZXRTaGFkZXJJbmZvTG9nIiwiZnJhZ21lbnRTaGFkZXIiLCJGUkFHTUVOVF9TSEFERVIiLCJjcmVhdGVQcm9ncmFtIiwiYXR0YWNoU2hhZGVyIiwibGlua1Byb2dyYW0iLCJnZXRQcm9ncmFtUGFyYW1ldGVyIiwiTElOS19TVEFUVVMiLCJnZXRQcm9ncmFtSW5mb0xvZyIsInVzZVByb2dyYW0iLCJZVVYyUkdCUmVmIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwidW5pZm9ybU1hdHJpeDRmdiIsInNoYWRlclByb2dyYW0iLCJ2ZXJ0ZXhQb3NCdWZmZXIiLCJjcmVhdGVCdWZmZXIiLCJiaW5kQnVmZmVyIiwiQVJSQVlfQlVGRkVSIiwiYnVmZmVyRGF0YSIsIkZsb2F0MzJBcnJheSIsIlNUQVRJQ19EUkFXIiwidmVydGV4UG9zUmVmIiwiZ2V0QXR0cmliTG9jYXRpb24iLCJlbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSIsInZlcnRleEF0dHJpYlBvaW50ZXIiLCJGTE9BVCIsInRleHR1cmVQb3NCdWZmZXIiLCJ0ZXh0dXJlUG9zUmVmIiwidVRleHR1cmVQb3NCdWZmZXIiLCJ1VGV4dHVyZVBvc1JlZiIsInZUZXh0dXJlUG9zQnVmZmVyIiwidlRleHR1cmVQb3NSZWYiLCJ5VGV4dHVyZVJlZiIsIl9pbml0VGV4dHVyZSIsInlTYW1wbGVyUmVmIiwidW5pZm9ybTFpIiwidVRleHR1cmVSZWYiLCJ1U2FtcGxlclJlZiIsInZUZXh0dXJlUmVmIiwidlNhbXBsZXJSZWYiLCJ0ZXh0dXJlUmVmIiwiY3JlYXRlVGV4dHVyZSIsImJpbmRUZXh0dXJlIiwiVEVYVFVSRV8yRCIsInRleFBhcmFtZXRlcmkiLCJURVhUVVJFX01BR19GSUxURVIiLCJORUFSRVNUIiwiVEVYVFVSRV9NSU5fRklMVEVSIiwiVEVYVFVSRV9XUkFQX1MiLCJDTEFNUF9UT19FREdFIiwiVEVYVFVSRV9XUkFQX1QiLCJfZHJhd1BpY3R1cmVHTCIsInlsZW4iLCJ1dmxlbiIsInJlbmRlckRhdGEiLCJ5RGF0YSIsInVEYXRhIiwidkRhdGEiLCJfZHJhd1BpY3R1cmVHTDQyMCIsInlEYXRhUGVyUm93IiwieVJvd0NudCIsInVEYXRhUGVyUm93IiwidVJvd0NudCIsInZEYXRhUGVyUm93IiwidlJvd0NudCIsInJhdGlvdyIsInJhdGlvaCIsImxlZnQiLCJ0b3AiLCJ2aWV3cG9ydCIsInRleHR1cmVQb3NWYWx1ZXMiLCJEWU5BTUlDX0RSQVciLCJ1VGV4dHVyZVBvc1ZhbHVlcyIsInZUZXh0dXJlUG9zVmFsdWVzIiwiYWN0aXZlVGV4dHVyZSIsIlRFWFRVUkUwIiwidGV4SW1hZ2UyRCIsIkxVTUlOQU5DRSIsIlVOU0lHTkVEX0JZVEUiLCJURVhUVVJFMSIsIlRFWFRVUkUyIiwiZHJhd0FycmF5cyIsIlRSSUFOR0xFX1NUUklQIiwiX2RyYXdQaWN0dXJlUkdCIiwiaWR4IiwiYWRkIiwicmFuZ2UiLCJpc09iamVjdEZpbGxlZCIsIm1pbWVUeXBlIiwiaXNDb21wbGV0ZSIsImlzQmFzZUluZm9SZWFkeSIsImlzVmlkZW9SZWFkeSIsImlzQXVkaW9SZWFkeSIsIl9kZWZhdWx0IiwiZ2V0RGVmYXVsdEluZiIsImVudHJpZXMiLCJ2IiwiaXNSQVAiLCJfdHlwZSIsIl9sYXN0QXBwZW5kTG9jYXRpb24iLCJpc0VtcHR5IiwiX3NlYXJjaE5lYXJlc3RTZWdtZW50QmVmb3JlIiwiYmVnaW5EdHMiLCJsYXN0IiwibWlkIiwibGJvdW5kIiwidWJvdW5kIiwiX3NlYXJjaE5lYXJlc3RTZWdtZW50QWZ0ZXIiLCJzZWdtZW50IiwibGFzdEFwcGVuZElkeCIsImluc2VydElkeCIsIm9yaWdpblN0YXJ0RHRzIiwiZ2V0TGFzdFNlZ21lbnRCZWZvcmUiLCJnZXRMYXN0U2FtcGxlQmVmb3JlIiwiZ2V0TGFzdFJBUEJlZm9yZSIsInNlZ21lbnRJZHgiLCJyYW5kb21BY2Nlc3NQb2ludHMiLCJzdGFydER0cyIsImVuZER0cyIsInN0YXJ0UHRzIiwiZW5kUHRzIiwib3JpZ2luRW5kRHRzIiwiYWRkUkFQIiwiTVNFIiwiY29udGFpbmVyIiwibWVkaWFTb3VyY2UiLCJzb3VyY2VCdWZmZXJzIiwib25Tb3VyY2VPcGVuIiwib25UaW1lVXBkYXRlIiwib25VcGRhdGVFbmQiLCJvbldhaXRpbmciLCJNZWRpYVNvdXJjZSIsImFkZFNvdXJjZUJ1ZmZlcnMiLCJkb0FwcGVuZCIsImR1ciIsIm1pbWUiLCJzb3VyY2VCdWZmZXIiLCJhZGRTb3VyY2VCdWZmZXIiLCJ1cGRhdGluZyIsImFwcGVuZEJ1ZmZlciIsImVuZE9mU3RyZWFtIiwiYWN0aXZlU291cmNlQnVmZmVycyIsInJlbW92ZUJ1ZmZlcnMiLCJ0YXNrTGlzdCIsInRhc2siLCJkb0NsZWFuQnVmZmVyIiwicmV0cnlUaW1lIiwiY2xlYW4iLCJjbGVhckJ1ZmZlciIsInJlbW92ZVNvdXJjZUJ1ZmZlciIsInJldm9rZU9iamVjdFVSTCIsImJFbmQiLCJyZWFkQXNJbnQiLCJ0ZW1wIiwicGFkU3RhcnQ0SGV4IiwiaGV4TnVtIiwiaGV4U3RyIiwicGFkU3RhcnQiLCJsb29wIiwic2lnbiIsInJlYWRVaW50NjQiLCJyZWFkSW50MTYiLCJyZWFkSW50MzIiLCJUYWciLCJMb2dnZXIiLCJGbHZDb250cm9sbGVyIiwicGxheWVyIiwiX3BsYXllciIsImluaXRTZWdtZW50QXJyaXZlZCIsImluaXRMaXN0ZW5lcnMiLCJfaGFuZGxlTG9hZGVyRGF0YUxvYWRlZCIsIl9oYW5kbGVOZXR3b3JrRXJyb3IiLCJfaGFuZGxlTWVkaWFJbmZvIiwiX2hhbmRsZU1ldGFkYXRhUGFyc2VkIiwiX2hhbmRsZURlbXV4Q29tcGxldGUiLCJfaGFuZGxlRGVtdXhFcnJvciIsIl9zZXRNZXRhVG9BdWRpbyIsIl9zZXRNZXRhVG9WaWRlbyIsIl9oYW5kbGVBcHBlbmRJbml0U2VnbWVudCIsIlBsYXllciIsIkVycm9ycyIsImxvYWREYXRhIiwibG9hZGVyIiwicmVzb2x2ZVZpZGVvR09QIiwiZmlyc3RJZnJhbWVJZHgiLCJsYXN0SWZyYW1lSWR4IiwidGVtcFNhbXBsZXMiLCJyZXN0IiwiZmx2QWxsb3dlZEV2ZW50cyIsIkZsdlBsYXllciIsIm1lZGlhVHlwZSIsImluaXRFdmVudHMiLCJpbml0Rmx2IiwiZmx2IiwiaW5pdEZsdkV2ZW50cyIsInV0aWwiLCJhZGRDbGFzcyIsInJvb3QiLCJmaW5kRG9tIiwibGl2ZSIsImNyZWF0ZURvbSIsImNvbnRyb2xzIiwidGltZXIiLCJnZXRCdWZmZXJlZFJhbmdlIiwiRkxWIiwiX2hhc1N0YXJ0IiwiX2Rlc3Ryb3kiLCJjdXJyZW50U3JjIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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Q0FBVSxTQUFWLEVBQXFCLE1BQU07QUFDekIsV0FBS3FnQyxXQUFMLEdBQW1CLENBQW5CO0FBQ0QsS0FGRDtBQUdEO0FBaEk0Qjs7QUFtSS9CcGtDLE9BQU9DLE9BQVAsR0FBaUJvN0MsU0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SUEsYUFBYSxtQ0FBbUMsRUFBRSxJIiwiZmlsZSI6Im1vYmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzQ291bnQgPSAwO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG52YXIgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRFbWl0dGVyLCAnZGVmYXVsdE1heExpc3RlbmVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1heExpc3RlbmVycztcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ251bWJlcicgfHwgYXJnIDwgMCB8fCBOdW1iZXJJc05hTihhcmcpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiZGVmYXVsdE1heExpc3RlbmVyc1wiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBhcmcgKyAnLicpO1xuICAgIH1cbiAgICBkZWZhdWx0TWF4TGlzdGVuZXJzID0gYXJnO1xuICB9XG59KTtcblxuRXZlbnRFbWl0dGVyLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICBpZiAodGhpcy5fZXZlbnRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX2V2ZW50cyA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHMpIHtcbiAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59O1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMobikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInIHx8IG4gPCAwIHx8IE51bWJlcklzTmFOKG4pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcIm5cIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgbiArICcuJyk7XG4gIH1cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiAkZ2V0TWF4TGlzdGVuZXJzKHRoYXQpIHtcbiAgaWYgKHRoYXQuX21heExpc3RlbmVycyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgcmV0dXJuIHRoYXQuX21heExpc3RlbmVycztcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5nZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBnZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiAkZ2V0TWF4TGlzdGVuZXJzKHRoaXMpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCh0eXBlKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgdmFyIGRvRXJyb3IgPSAodHlwZSA9PT0gJ2Vycm9yJyk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKVxuICAgIGRvRXJyb3IgPSAoZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZCk7XG4gIGVsc2UgaWYgKCFkb0Vycm9yKVxuICAgIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmIChkb0Vycm9yKSB7XG4gICAgdmFyIGVyO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApXG4gICAgICBlciA9IGFyZ3NbMF07XG4gICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH1cbiAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5oYW5kbGVkIGVycm9yLicgKyAoZXIgPyAnICgnICsgZXIubWVzc2FnZSArICcpJyA6ICcnKSk7XG4gICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBSZWZsZWN0QXBwbHkoaGFuZGxlciwgdGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIsIGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSlcbiAgICAgIFJlZmxlY3RBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBfYWRkTGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcHJlcGVuZCkge1xuICB2YXIgbTtcbiAgdmFyIGV2ZW50cztcbiAgdmFyIGV4aXN0aW5nO1xuXG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxuXG4gIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGFyZ2V0Ll9ldmVudHNDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gICAgaWYgKGV2ZW50cy5uZXdMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgPyBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICAgICAgLy8gUmUtYXNzaWduIGBldmVudHNgIGJlY2F1c2UgYSBuZXdMaXN0ZW5lciBoYW5kbGVyIGNvdWxkIGhhdmUgY2F1c2VkIHRoZVxuICAgICAgLy8gdGhpcy5fZXZlbnRzIHRvIGJlIGFzc2lnbmVkIHRvIGEgbmV3IG9iamVjdFxuICAgICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gICAgfVxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdO1xuICB9XG5cbiAgaWYgKGV4aXN0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICAgICsrdGFyZ2V0Ll9ldmVudHNDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGV4aXN0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID1cbiAgICAgICAgcHJlcGVuZCA/IFtsaXN0ZW5lciwgZXhpc3RpbmddIDogW2V4aXN0aW5nLCBsaXN0ZW5lcl07XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgfSBlbHNlIGlmIChwcmVwZW5kKSB7XG4gICAgICBleGlzdGluZy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmcucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgICBtID0gJGdldE1heExpc3RlbmVycyh0YXJnZXQpO1xuICAgIGlmIChtID4gMCAmJiBleGlzdGluZy5sZW5ndGggPiBtICYmICFleGlzdGluZy53YXJuZWQpIHtcbiAgICAgIGV4aXN0aW5nLndhcm5lZCA9IHRydWU7XG4gICAgICAvLyBObyBlcnJvciBjb2RlIGZvciB0aGlzIHNpbmNlIGl0IGlzIGEgV2FybmluZ1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICB2YXIgdyA9IG5ldyBFcnJvcignUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcubGVuZ3RoICsgJyAnICsgU3RyaW5nKHR5cGUpICsgJyBsaXN0ZW5lcnMgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpbmNyZWFzZSBsaW1pdCcpO1xuICAgICAgdy5uYW1lID0gJ01heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZyc7XG4gICAgICB3LmVtaXR0ZXIgPSB0YXJnZXQ7XG4gICAgICB3LnR5cGUgPSB0eXBlO1xuICAgICAgdy5jb3VudCA9IGV4aXN0aW5nLmxlbmd0aDtcbiAgICAgIFByb2Nlc3NFbWl0V2FybmluZyh3KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbmZ1bmN0aW9uIG9uY2VXcmFwcGVyKCkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIFJlZmxlY3RBcHBseSh0aGlzLmxpc3RlbmVyLCB0aGlzLnRhcmdldCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fCBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdC5saXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcG9zaXRpb24gPSAtMTtcblxuICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8IGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBvcmlnaW5hbExpc3RlbmVyID0gbGlzdFtpXS5saXN0ZW5lcjtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwKVxuICAgICAgICAgIGxpc3Quc2hpZnQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc3BsaWNlT25lKGxpc3QsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICBldmVudHNbdHlwZV0gPSBsaXN0WzBdO1xuXG4gICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgb3JpZ2luYWxMaXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyh0eXBlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzLCBldmVudHMsIGk7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50c1t0eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIExJRk8gb3JkZXJcbiAgICAgICAgZm9yIChpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbmZ1bmN0aW9uIF9saXN0ZW5lcnModGFyZ2V0LCB0eXBlLCB1bndyYXApIHtcbiAgdmFyIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG4gIGlmIChldmxpc3RlbmVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJylcbiAgICByZXR1cm4gdW53cmFwID8gW2V2bGlzdGVuZXIubGlzdGVuZXIgfHwgZXZsaXN0ZW5lcl0gOiBbZXZsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHVud3JhcCA/XG4gICAgdW53cmFwTGlzdGVuZXJzKGV2bGlzdGVuZXIpIDogYXJyYXlDbG9uZShldmxpc3RlbmVyLCBldmxpc3RlbmVyLmxlbmd0aCk7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgdHJ1ZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJhd0xpc3RlbmVycyA9IGZ1bmN0aW9uIHJhd0xpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIubGlzdGVuZXJDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyQ291bnQuY2FsbChlbWl0dGVyLCB0eXBlKTtcbiAgfVxufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gbGlzdGVuZXJDb3VudDtcbmZ1bmN0aW9uIGxpc3RlbmVyQ291bnQodHlwZSkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGV2bGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICByZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQgPiAwID8gUmVmbGVjdE93bktleXModGhpcy5fZXZlbnRzKSA6IFtdO1xufTtcblxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIsIG4pIHtcbiAgdmFyIGNvcHkgPSBuZXcgQXJyYXkobik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKVxuICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gIHJldHVybiBjb3B5O1xufVxuXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICg7IGluZGV4ICsgMSA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKVxuICAgIGxpc3RbaW5kZXhdID0gbGlzdFtpbmRleCArIDFdO1xuICBsaXN0LnBvcCgpO1xufVxuXG5mdW5jdGlvbiB1bndyYXBMaXN0ZW5lcnMoYXJyKSB7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgKytpKSB7XG4gICAgcmV0W2ldID0gYXJyW2ldLmxpc3RlbmVyIHx8IGFycltpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFRyYWNrOiByZXF1aXJlKCcuL3NyYy90cmFjaycpLmRlZmF1bHQsXG4gIFRyYWNrczogcmVxdWlyZSgnLi9zcmMvdHJhY2snKS5UcmFja3MsXG4gIEF1ZGlvVHJhY2s6IHJlcXVpcmUoJy4vc3JjL3RyYWNrJykuQXVkaW9UcmFjayxcbiAgVmlkZW9UcmFjazogcmVxdWlyZSgnLi9zcmMvdHJhY2snKS5WaWRlb1RyYWNrLFxuXG4gIFhnQnVmZmVyOiByZXF1aXJlKCcuL3NyYy9idWZmZXInKS5YZ0J1ZmZlcixcbiAgUmVtdXhCdWZmZXI6IHJlcXVpcmUoJy4vc3JjL2J1ZmZlcicpLlJlbXV4QnVmZmVyLFxuXG4gIFByZVNvdXJjZTogcmVxdWlyZSgnLi9zcmMvcHJlc291Y2UnKS5kZWZhdWx0XG59O1xuIiwiZXhwb3J0IGNsYXNzIFhnQnVmZmVyIHtcbiAgLyoqXG4gICAqIEEgYnVmZmVyIHRvIHN0b3JlIGxvYWRlZCBkYXRhLlxuICAgKlxuICAgKiBAY2xhc3MgTG9hZGVyQnVmZmVyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggLSBPcHRpb25hbCB0aGUgYnVmZmVyIHNpemVcbiAgICovXG4gIGNvbnN0cnVjdG9yIChsZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aCB8fCAwXG4gICAgdGhpcy5oaXN0b3J5TGVuID0gbGVuZ3RoIHx8IDBcbiAgICB0aGlzLmFycmF5ID0gW11cbiAgICB0aGlzLm9mZnNldCA9IDBcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZnVuY3Rpb24gdG8gcHVzaCBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZGF0YSAtIFRoZSBkYXRhIHRvIHB1c2ggaW50byB0aGUgYnVmZmVyXG4gICAqL1xuICBwdXNoIChkYXRhKSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKGRhdGEpXG4gICAgdGhpcy5sZW5ndGggKz0gZGF0YS5ieXRlTGVuZ3RoXG4gICAgdGhpcy5oaXN0b3J5TGVuICs9IGRhdGEuYnl0ZUxlbmd0aFxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBmdW5jdGlvbiB0byBzaGlmdCBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIC0gVGhlIHNpemUgb2Ygc2hpZnQuXG4gICAqL1xuICBzaGlmdCAobGVuZ3RoKSB7XG4gICAgaWYgKHRoaXMuYXJyYXkubGVuZ3RoIDwgMSkge1xuICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KDApXG4gICAgfVxuXG4gICAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2hpZnRCdWZmZXIoKVxuICAgIH1cbiAgICBpZiAoKHRoaXMub2Zmc2V0ICsgbGVuZ3RoKSA9PT0gdGhpcy5hcnJheVswXS5sZW5ndGgpIHtcbiAgICAgIGxldCByZXQgPSB0aGlzLmFycmF5WzBdLnNsaWNlKHRoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArIGxlbmd0aClcbiAgICAgIHRoaXMub2Zmc2V0ID0gMFxuICAgICAgdGhpcy5hcnJheS5zaGlmdCgpXG4gICAgICB0aGlzLmxlbmd0aCAtPSBsZW5ndGhcbiAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICBpZiAoKHRoaXMub2Zmc2V0ICsgbGVuZ3RoKSA8IHRoaXMuYXJyYXlbMF0ubGVuZ3RoKSB7XG4gICAgICBsZXQgcmV0ID0gdGhpcy5hcnJheVswXS5zbGljZSh0aGlzLm9mZnNldCwgdGhpcy5vZmZzZXQgKyBsZW5ndGgpXG4gICAgICB0aGlzLm9mZnNldCArPSBsZW5ndGhcbiAgICAgIHRoaXMubGVuZ3RoIC09IGxlbmd0aFxuICAgICAgcmV0dXJuIHJldFxuICAgIH1cblxuICAgIGxldCByZXQgPSBuZXcgVWludDhBcnJheShsZW5ndGgpXG4gICAgbGV0IHRtcG9mZiA9IDBcbiAgICB3aGlsZSAodGhpcy5hcnJheS5sZW5ndGggPiAwICYmIGxlbmd0aCA+IDApIHtcbiAgICAgIGlmICgodGhpcy5vZmZzZXQgKyBsZW5ndGgpIDwgdGhpcy5hcnJheVswXS5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHRtcCA9IHRoaXMuYXJyYXlbMF0uc2xpY2UodGhpcy5vZmZzZXQsIHRoaXMub2Zmc2V0ICsgbGVuZ3RoKVxuICAgICAgICByZXQuc2V0KHRtcCwgdG1wb2ZmKVxuICAgICAgICB0aGlzLm9mZnNldCArPSBsZW5ndGhcbiAgICAgICAgdGhpcy5sZW5ndGggLT0gbGVuZ3RoXG4gICAgICAgIGxlbmd0aCA9IDBcbiAgICAgICAgYnJlYWtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB0ZW1wbGVuZ3RoID0gdGhpcy5hcnJheVswXS5sZW5ndGggLSB0aGlzLm9mZnNldFxuICAgICAgICByZXQuc2V0KHRoaXMuYXJyYXlbMF0uc2xpY2UodGhpcy5vZmZzZXQsIHRoaXMuYXJyYXlbMF0ubGVuZ3RoKSwgdG1wb2ZmKVxuICAgICAgICB0aGlzLmFycmF5LnNoaWZ0KClcbiAgICAgICAgdGhpcy5vZmZzZXQgPSAwXG4gICAgICAgIHRtcG9mZiArPSB0ZW1wbGVuZ3RoXG4gICAgICAgIHRoaXMubGVuZ3RoIC09IHRlbXBsZW5ndGhcbiAgICAgICAgbGVuZ3RoIC09IHRlbXBsZW5ndGhcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldFxuICB9XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIGNsZWFyIHRoZSBidWZmZXIuXG4gICAqL1xuICBjbGVhciAoKSB7XG4gICAgdGhpcy5hcnJheSA9IFtdXG4gICAgdGhpcy5sZW5ndGggPSAwXG4gICAgdGhpcy5vZmZzZXQgPSAwXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmNsZWFyKClcbiAgICB0aGlzLmhpc3RvcnlMZW4gPSAwXG4gIH1cblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gc2hpZnQgb25lIHVuaXQ4QXJyYXkuXG4gICAqL1xuICBfc2hpZnRCdWZmZXIgKCkge1xuICAgIHRoaXMubGVuZ3RoIC09IHRoaXMuYXJyYXlbMF0ubGVuZ3RoXG4gICAgdGhpcy5vZmZzZXQgPSAwXG4gICAgcmV0dXJuIHRoaXMuYXJyYXkuc2hpZnQoKVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgdWludDggZGF0YSB0byBudW1iZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCAtIHRoZSBzdGFydCBwb3N0aW9uLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIC0gdGhlIGxlbmd0aCBvZiBkYXRhLlxuICAgKi9cbiAgdG9JbnQgKHN0YXJ0LCBsZW5ndGgpIHtcbiAgICBsZXQgcmV0SW50ID0gMFxuICAgIGxldCBpID0gdGhpcy5vZmZzZXQgKyBzdGFydFxuICAgIHdoaWxlIChpIDwgdGhpcy5vZmZzZXQgKyBsZW5ndGggKyBzdGFydCkge1xuICAgICAgaWYgKGkgPCB0aGlzLmFycmF5WzBdLmxlbmd0aCkge1xuICAgICAgICByZXRJbnQgPSByZXRJbnQgKiAyNTYgKyB0aGlzLmFycmF5WzBdW2ldXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYXJyYXlbMV0pIHtcbiAgICAgICAgcmV0SW50ID0gcmV0SW50ICogMjU2ICsgdGhpcy5hcnJheVsxXVtpIC0gdGhpcy5hcnJheVswXS5sZW5ndGhdXG4gICAgICB9XG5cbiAgICAgIGkrK1xuICAgIH1cbiAgICByZXR1cm4gcmV0SW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbXV4QnVmZmVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMudmlkZW8gPSBbXVxuICAgIHRoaXMuYXVkaW8gPSBbXVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy52aWRlbyA9IFtdXG4gICAgdGhpcy5hdWRpbyA9IFtdXG4gIH1cbn1cbiIsImNsYXNzIFNvdXJjZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLm1pbWV0eXBlID0gJyc7XG4gICAgdGhpcy5pbml0ID0gbnVsbDtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgfVxufVxuXG5jbGFzcyBQcmVTb3VyY2Uge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5zb3VyY2VzID0ge307XG4gIH1cblxuICBnZXRTb3VyY2UgKHNvdXJjZSkge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZXNbc291cmNlXTtcbiAgfVxuXG4gIGNyZWF0ZVNvdXJjZSAobmFtZSkge1xuICAgIHRoaXMuc291cmNlc1tuYW1lXSA9IG5ldyBTb3VyY2UoKTtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2VzW25hbWVdO1xuICB9XG5cbiAgY2xlYXIgKCkge1xuICAgIHRoaXMuc291cmNlcyA9IHt9O1xuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5zb3VyY2VzID0ge307XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJlU291cmNlO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2sge1xuICAvKipcbiAgICogVGhlIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuaWQgPSAtMVxuICAgIHRoaXMuc2VxdWVuY2VOdW1iZXIgPSAwXG4gICAgdGhpcy5zYW1wbGVzID0gW11cbiAgICB0aGlzLmRyb3BwZWRTYW1wbGVzID0gW11cbiAgICB0aGlzLmxlbmd0aCA9IDBcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgdHJhY2suXG4gICAqL1xuICByZXNldCAoKSB7XG4gICAgdGhpcy5zZXF1ZW5jZU51bWJlciA9IDBcbiAgICB0aGlzLnNhbXBsZXMgPSBbXVxuICAgIHRoaXMubGVuZ3RoID0gMFxuICB9XG4gIC8qKlxuICAgKiBkZXN0cm95IHRoZSB0cmFjay5cbiAgICovXG4gIGRpc3Ryb3kgKCkge1xuICAgIHRoaXMucmVzZXQoKVxuICAgIHRoaXMuaWQgPSAtMVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdWRpb1RyYWNrIGV4dGVuZHMgVHJhY2sge1xuICAvKipcbiAgICogVGhlIGNvbnN0cnVjdG9yIGZvciBhdWRpbyB0cmFjay5cbiAgICovXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5UQUcgPSAnQXVkaW9UcmFjaydcbiAgICB0aGlzLnR5cGUgPSAnYXVkaW8nXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZpZGVvVHJhY2sgZXh0ZW5kcyBUcmFjayB7XG4gIC8qKlxuICAgKiBUaGUgY29uc3RydWN0b3IgZm9yIHZpZGVvIHRyYWNrLlxuICAgKi9cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLlRBRyA9ICdWaWRlb1RyYWNrJ1xuICAgIHRoaXMudHlwZSA9ICd2aWRlbydcbiAgICB0aGlzLmRyb3BwZWQgPSAwXG4gIH1cbiAgLyoqXG4gICAqIHJlc2V0IHRoZSB2aWRlbyB0cmFjay5cbiAgICovXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLnNlcXVlbmNlTnVtYmVyID0gMFxuICAgIHRoaXMuc2FtcGxlcyA9IFtdXG4gICAgdGhpcy5sZW5ndGggPSAwXG4gICAgdGhpcy5kcm9wcGVkID0gMFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmFja3Mge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5hdWRpb1RyYWNrID0gbnVsbFxuICAgIHRoaXMudmlkZW9UcmFjayA9IG51bGxcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuYXVkaW9UcmFjayA9IG51bGxcbiAgICB0aGlzLnZpZGVvVHJhY2sgPSBudWxsXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBOYWx1bml0OiByZXF1aXJlKCcuL3NyYy9oMjY0L25hbHVuaXQnKS5kZWZhdWx0LFxuICBTcHNQYXJzZXI6IHJlcXVpcmUoJy4vc3JjL2gyNjQvbmFsdW5pdC9zcHMnKS5kZWZhdWx0LFxuXG4gIENvbXBhdGliaWxpdHk6IHJlcXVpcmUoJy4vc3JjL2NvbXBhdGliaWxpdHknKS5kZWZhdWx0XG59O1xuIiwiXG5jbGFzcyBBQUMge1xuXG4gIHN0YXRpYyBnZXRTaWxlbnRGcmFtZShjb2RlYywgY2hhbm5lbENvdW50KSB7XG4gICAgaWYgKGNvZGVjID09PSAnbXA0YS40MC4yJykge1xuICAgICAgLy8gaGFuZGxlIExDLUFBQ1xuICAgICAgaWYgKGNoYW5uZWxDb3VudCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4YzgsIDB4MDAsIDB4ODAsIDB4MjMsIDB4ODBdKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbm5lbENvdW50ID09PSAyKSB7XG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgyMSwgMHgwMCwgMHg0OSwgMHg5MCwgMHgwMiwgMHgxOSwgMHgwMCwgMHgyMywgMHg4MF0pO1xuICAgICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFsweDAwLCAweGM4LCAweDAwLCAweDgwLCAweDIwLCAweDg0LCAweDAxLCAweDI2LCAweDQwLCAweDA4LCAweDY0LCAweDAwLCAweDhlXSk7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5uZWxDb3VudCA9PT0gNCkge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4YzgsIDB4MDAsIDB4ODAsIDB4MjAsIDB4ODQsIDB4MDEsIDB4MjYsIDB4NDAsIDB4MDgsIDB4NjQsIDB4MDAsIDB4ODAsIDB4MmMsIDB4ODAsIDB4MDgsIDB4MDIsIDB4MzhdKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbm5lbENvdW50ID09PSA1KSB7XG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMCwgMHg4NCwgMHgwMSwgMHgyNiwgMHg0MCwgMHgwOCwgMHg2NCwgMHgwMCwgMHg4MiwgMHgzMCwgMHgwNCwgMHg5OSwgMHgwMCwgMHgyMSwgMHg5MCwgMHgwMiwgMHgzOF0pO1xuICAgICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDYpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFsweDAwLCAweGM4LCAweDAwLCAweDgwLCAweDIwLCAweDg0LCAweDAxLCAweDI2LCAweDQwLCAweDA4LCAweDY0LCAweDAwLCAweDgyLCAweDMwLCAweDA0LCAweDk5LCAweDAwLCAweDIxLCAweDkwLCAweDAyLCAweDAwLCAweGIyLCAweDAwLCAweDIwLCAweDA4LCAweGUwXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhbmRsZSBIRS1BQUMgKG1wNGEuNDAuNSAvIG1wNGEuNDAuMjkpXG4gICAgICBpZiAoY2hhbm5lbENvdW50ID09PSAxKSB7XG4gICAgICAgIC8vIGZmbXBlZyAteSAtZiBsYXZmaSAtaSBcImFldmFsc3JjPTA6ZD0wLjA1XCIgLWM6YSBsaWJmZGtfYWFjIC1wcm9maWxlOmEgYWFjX2hlIC1iOmEgNGsgb3V0cHV0LmFhYyAmJiBoZXhkdW1wIC12IC1lICcxNi8xIFwiMHgleCxcIiBcIlxcblwiJyAtdiBvdXRwdXQuYWFjXG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgxLCAweDQwLCAweDIyLCAweDgwLCAweGEzLCAweDRlLCAweGU2LCAweDgwLCAweGJhLCAweDgsIDB4MCwgMHgwLCAweDAsIDB4MWMsIDB4NiwgMHhmMSwgMHhjMSwgMHhhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVhLCAweDVlXSk7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5uZWxDb3VudCA9PT0gMikge1xuICAgICAgICAvLyBmZm1wZWcgLXkgLWYgbGF2ZmkgLWkgXCJhZXZhbHNyYz0wfDA6ZD0wLjA1XCIgLWM6YSBsaWJmZGtfYWFjIC1wcm9maWxlOmEgYWFjX2hlX3YyIC1iOmEgNGsgb3V0cHV0LmFhYyAmJiBoZXhkdW1wIC12IC1lICcxNi8xIFwiMHgleCxcIiBcIlxcblwiJyAtdiBvdXRwdXQuYWFjXG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgxLCAweDQwLCAweDIyLCAweDgwLCAweGEzLCAweDVlLCAweGU2LCAweDgwLCAweGJhLCAweDgsIDB4MCwgMHgwLCAweDAsIDB4MCwgMHg5NSwgMHgwLCAweDYsIDB4ZjEsIDB4YTEsIDB4YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1ZV0pO1xuICAgICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDMpIHtcbiAgICAgICAgLy8gZmZtcGVnIC15IC1mIGxhdmZpIC1pIFwiYWV2YWxzcmM9MHwwfDA6ZD0wLjA1XCIgLWM6YSBsaWJmZGtfYWFjIC1wcm9maWxlOmEgYWFjX2hlX3YyIC1iOmEgNGsgb3V0cHV0LmFhYyAmJiBoZXhkdW1wIC12IC1lICcxNi8xIFwiMHgleCxcIiBcIlxcblwiJyAtdiBvdXRwdXQuYWFjXG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgxLCAweDQwLCAweDIyLCAweDgwLCAweGEzLCAweDVlLCAweGU2LCAweDgwLCAweGJhLCAweDgsIDB4MCwgMHgwLCAweDAsIDB4MCwgMHg5NSwgMHgwLCAweDYsIDB4ZjEsIDB4YTEsIDB4YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1ZV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFBQztcbiIsImltcG9ydCB7RVZFTlRTfSBmcm9tICd4Z3BsYXllci11dGlscydcbmltcG9ydCBBQUMgZnJvbSAnLi9hYWMvYWFjLWhlbHBlcidcblxuY29uc3Qge1JFTVVYX0VWRU5UUywgREVNVVhfRVZFTlRTfSA9IEVWRU5UU1xuXG5jbGFzcyBDb21wYXRpYmlsaXR5IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMubmV4dEF1ZGlvRHRzID0gMCAvLyDmqKHmi5/kuIvkuIDmrrXpn7PpopHmlbDmja7nmoRkdHNcbiAgICB0aGlzLm5leHRWaWRlb0R0cyA9IDAgLy8g5qih5ouf5LiL5LiA5q616KeG6aKR5pWw5o2u55qEZHRzXG5cbiAgICB0aGlzLmxhc3RBdWRpb1NhbXBsZXNMZW4gPSAwIC8vIOS4iuS4gOautemfs+mikeaVsOaNrueahOmVv+W6plxuICAgIHRoaXMubGFzdFZpZGVvU2FtcGxlc0xlbiA9IDAgLy8g5LiK5LiA5q616KeG6aKR5pWw5o2u55qE6ZW/5bqmXG5cbiAgICB0aGlzLmxhc3RWaWRlb0R0cyA9IHVuZGVmaW5lZCAvLyDkuIrkuIDmrrXpn7PpopHmlbDmja7nmoTplb/luqZcbiAgICB0aGlzLmxhc3RBdWRpb0R0cyA9IHVuZGVmaW5lZCAvLyDkuIrkuIDmrrXop4bpopHmlbDmja7nmoTplb/luqZcblxuICAgIHRoaXMuYWxsQXVkaW9TYW1wbGVzQ291bnQgPSAwIC8vIOmfs+mikeaAu+aVsOaNrumHjyjljp/lp4vluKcpXG4gICAgdGhpcy5hbGxWaWRlb1NhbXBsZXNDb3VudCA9IDAgLy8g6KeG6aKR5oC75pWw5o2u6YePKOWOn+Wni+W4pylcblxuICAgIHRoaXMuX2ZpcnN0QXVkaW9TYW1wbGUgPSBudWxsXG4gICAgdGhpcy5fZmlyc3RWaWRlb1NhbXBsZSA9IG51bGxcblxuICAgIHRoaXMuZmlsbGVkQXVkaW9TYW1wbGVzID0gW10gLy8g6KGl5YWF6Z+z6aKR5bin77yI77yJXG4gICAgdGhpcy5maWxsZWRWaWRlb1NhbXBsZXMgPSBbXSAvLyDooaXlhYXop4bpopHluKfvvIjvvIlcblxuICAgIHRoaXMuX3ZpZGVvTGFyZ2VHYXAgPSAwXG4gICAgdGhpcy5fYXVkaW9MYXJnZUdhcCA9IDBcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHRoaXMuYmVmb3JlKFJFTVVYX0VWRU5UUy5SRU1VWF9NRURJQSwgdGhpcy5kb0ZpeC5iaW5kKHRoaXMpKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMubmV4dEF1ZGlvRHRzID0gbnVsbCAvLyDkvLDnrpfkuIvkuIDmrrXpn7PpopHmlbDmja7nmoRkdHNcbiAgICB0aGlzLm5leHRWaWRlb0R0cyA9IG51bGwgLy8g5Lyw566X5LiL5LiA5q616KeG6aKR5pWw5o2u55qEZHRzXG5cbiAgICB0aGlzLmxhc3RBdWRpb1NhbXBsZXNMZW4gPSAwIC8vIOS4iuS4gOautemfs+mikeaVsOaNrueahOmVv+W6plxuICAgIHRoaXMubGFzdFZpZGVvU2FtcGxlc0xlbiA9IDAgLy8g5LiK5LiA5q616KeG6aKR5pWw5o2u55qE6ZW/5bqmXG5cbiAgICB0aGlzLmxhc3RWaWRlb0R0cyA9IHVuZGVmaW5lZCAvLyDkuIrkuIDmrrXpn7PpopHmlbDmja7nmoTplb/luqZcbiAgICB0aGlzLmxhc3RBdWRpb0R0cyA9IHVuZGVmaW5lZCAvLyDkuIrkuIDmrrXop4bpopHmlbDmja7nmoTplb/luqZcblxuICAgIC8vIHRoaXMuYWxsQXVkaW9TYW1wbGVzQ291bnQgPSAwIC8vIOmfs+mikeaAu+aVsOaNrumHjyjljp/lp4vluKcpXG4gICAgLy8gdGhpcy5hbGxWaWRlb1NhbXBsZXNDb3VudCA9IDAgLy8g6KeG6aKR5oC75pWw5o2u6YePKOWOn+Wni+W4pylcblxuICAgIC8vIHRoaXMuX2ZpcnN0QXVkaW9TYW1wbGUgPSBudWxsXG4gICAgLy8gdGhpcy5fZmlyc3RWaWRlb1NhbXBsZSA9IG51bGxcblxuICAgIHRoaXMuZmlsbGVkQXVkaW9TYW1wbGVzID0gW10gLy8g6KGl5YWF6Z+z6aKR5bin77yI77yJXG4gICAgdGhpcy5maWxsZWRWaWRlb1NhbXBsZXMgPSBbXSAvLyDooaXlhYXop4bpopHluKfvvIjvvIlcbiAgfVxuXG4gIGRvRml4ICgpIHtcbiAgICBjb25zdCB7IGlzRmlyc3RBdWRpb1NhbXBsZXMsIGlzRmlyc3RWaWRlb1NhbXBsZXMgfSA9IHRoaXMuZ2V0Rmlyc3RTYW1wbGUoKVxuXG4gICAgLy8gdGhpcy5yZW1vdmVJbnZhbGlkU2FtcGxlcygpXG5cbiAgICB0aGlzLnJlY29yZFNhbXBsZXNDb3VudCgpXG5cbiAgICBpZiAodGhpcy5fZmlyc3RWaWRlb1NhbXBsZSkge1xuICAgICAgdGhpcy5maXhSZWZTYW1wbGVEdXJhdGlvbih0aGlzLnZpZGVvVHJhY2subWV0YSwgdGhpcy52aWRlb1RyYWNrLnNhbXBsZXMpXG4gICAgfVxuICAgIGlmICh0aGlzLl9maXJzdEF1ZGlvU2FtcGxlKSB7XG4gICAgICB0aGlzLmZpeFJlZlNhbXBsZUR1cmF0aW9uKHRoaXMuYXVkaW9UcmFjay5tZXRhLCB0aGlzLmF1ZGlvVHJhY2suc2FtcGxlcylcbiAgICB9XG5cbiAgICBjb25zdCB7IGNoYW5nZWQ6IHZpZGVvQ2hhbmdlZCwgY2hhbmdlZElkeDogdmlkZW9DaGFuZ2VkSWR4IH0gPSBDb21wYXRpYmlsaXR5LmRldGFjdENoYW5nZVN0cmVhbSh0aGlzLnZpZGVvVHJhY2suc2FtcGxlcylcbiAgICBpZiAodmlkZW9DaGFuZ2VkICYmICFpc0ZpcnN0QXVkaW9TYW1wbGVzKSB7XG4gICAgICB0aGlzLmZpeENoYW5nZVN0cmVhbVZpZGVvKHZpZGVvQ2hhbmdlZElkeClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb0ZpeFZpZGVvKGlzRmlyc3RWaWRlb1NhbXBsZXMpXG4gICAgfVxuXG4gICAgY29uc3QgeyBjaGFuZ2VkOiBhdWRpb0NoYW5nZWQsIGNoYW5nZWRJZHg6IGF1ZGlvQ2hhbmdlZElkeCB9ID0gQ29tcGF0aWJpbGl0eS5kZXRhY3RDaGFuZ2VTdHJlYW0odGhpcy5hdWRpb1RyYWNrLnNhbXBsZXMpXG4gICAgaWYgKGF1ZGlvQ2hhbmdlZCkge1xuICAgICAgdGhpcy5maXhDaGFuZ2VTdHJlYW1BdWRpbyhhdWRpb0NoYW5nZWRJZHgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9GaXhBdWRpbyhpc0ZpcnN0QXVkaW9TYW1wbGVzKVxuICAgIH1cblxuICAgIC8vIHRoaXMucmVtb3ZlSW52YWxpZFNhbXBsZXMoKVxuICB9XG5cbiAgZG9GaXhWaWRlbyAoZmlyc3QsIHN0cmVhbUNoYW5nZVN0YXJ0KSB7XG4gICAgbGV0IHtzYW1wbGVzOiB2aWRlb1NhbXBsZXMsIG1ldGF9ID0gdGhpcy52aWRlb1RyYWNrXG5cbiAgICBpZiAobWV0YS5mcmFtZVJhdGUgJiYgbWV0YS5mcmFtZVJhdGUuZml4ZWQgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF2aWRlb1NhbXBsZXMgfHwgIXZpZGVvU2FtcGxlcy5sZW5ndGggfHwgIXRoaXMuX2ZpcnN0VmlkZW9TYW1wbGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKGB2aWRlbyBsYXN0U2FtcGxlLCAke3ZpZGVvU2FtcGxlc1t2aWRlb1NhbXBsZXMubGVuZ3RoIC0gMV0uZHRzfWApXG5cbiAgICBjb25zdCBmaXJzdFNhbXBsZSA9IHZpZGVvU2FtcGxlc1swXVxuXG4gICAgY29uc3Qgc2FtcGxlc0xlbiA9IHZpZGVvU2FtcGxlcy5sZW5ndGg7XG5cbiAgICAvLyBzdGVwMC7kv67lpI1obHPmtYHlh7rnjrDlt6jlpKdnYXDvvIzpnIDopoHlvLrliLbph43lrprkvY3nmoTpl67pophcbiAgICBpZiAodGhpcy5fdmlkZW9MYXJnZUdhcCA+IDApIHtcbiAgICAgIENvbXBhdGliaWxpdHkuZG9GaXhMYXJnZUdhcCh2aWRlb1NhbXBsZXMsIHRoaXMuX3ZpZGVvTGFyZ2VHYXApXG4gICAgfVxuXG4gICAgaWYgKGZpcnN0U2FtcGxlLmR0cyAhPT0gdGhpcy5fZmlyc3RWaWRlb1NhbXBsZS5kdHMgJiYgKHN0cmVhbUNoYW5nZVN0YXJ0IHx8IENvbXBhdGliaWxpdHkuZGV0ZWN0TGFyZ2VHYXAodGhpcy5uZXh0VmlkZW9EdHMsIGZpcnN0U2FtcGxlKSkpIHtcbiAgICAgIGlmIChzdHJlYW1DaGFuZ2VTdGFydCkge1xuICAgICAgICB0aGlzLm5leHRWaWRlb0R0cyA9IHN0cmVhbUNoYW5nZVN0YXJ0IC8vIEZJWDogSGxz5Lit6YCU5YiHY29kZWPvvIzlnKjlpoLmnpznm7TmjqVzZWVr5Yiw5ZCO6Z2i55qE54K55Lya5a+86Ie0bGFyZ2VHYXDorqHnrpflpLHotKVcbiAgICAgIH1cblxuICAgICAgdGhpcy5fdmlkZW9MYXJnZUdhcCA9IHRoaXMubmV4dFZpZGVvRHRzIC0gZmlyc3RTYW1wbGUuZHRzXG4gICAgICBDb21wYXRpYmlsaXR5LmRvRml4TGFyZ2VHYXAodmlkZW9TYW1wbGVzLCB0aGlzLl92aWRlb0xhcmdlR2FwKVxuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0RHRzID0gZmlyc3RTYW1wbGUuZHRzXG5cbiAgICAvLyBzdGVwMS4g5L+u5aSN5LiOYXVkaW/pppbluKflt67ot53lpKrlpKfnmoTpl67pophcbiAgICBpZiAoZmlyc3QgJiYgdGhpcy5fZmlyc3RBdWRpb1NhbXBsZSkge1xuICAgICAgY29uc3QgdmlkZW9GaXJzdER0cyA9IHRoaXMuX2ZpcnN0VmlkZW9TYW1wbGUuZHRzXG4gICAgICBjb25zdCBhdWRpb0ZpcnN0RHRzID0gdGhpcy5fZmlyc3RBdWRpb1NhbXBsZS5kdHNcbiAgICAgIGNvbnN0IGdhcCA9IHZpZGVvRmlyc3REdHMgLSBhdWRpb0ZpcnN0RHRzXG4gICAgICBpZiAoZ2FwID4gKDIgKiBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uKSkge1xuICAgICAgICBjb25zdCBmaWxsQ291bnQgPSBNYXRoLmZsb29yKGdhcCAvIG1ldGEucmVmU2FtcGxlRHVyYXRpb24pXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxsQ291bnQ7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGNsb25lZEZpcnN0U2FtcGxlID0gT2JqZWN0LmFzc2lnbih7fSwgZmlyc3RTYW1wbGUpIC8vIOinhumikeWktOmDqOW4p+e8uuWksemcgOimgeWkjeWItuesrOS4gOW4p1xuICAgICAgICAgIC8vIOmHjeaWsOiuoeeul3NhbXBsZeeahGR0c+WSjHB0c1xuICAgICAgICAgIGNsb25lZEZpcnN0U2FtcGxlLmR0cyA9IHZpZGVvRmlyc3REdHMgLSAoaSArIDEpICogbWV0YS5yZWZTYW1wbGVEdXJhdGlvblxuICAgICAgICAgIGNsb25lZEZpcnN0U2FtcGxlLnB0cyA9IGNsb25lZEZpcnN0U2FtcGxlLmR0cyArIGNsb25lZEZpcnN0U2FtcGxlLmN0c1xuXG4gICAgICAgICAgdmlkZW9TYW1wbGVzLnVuc2hpZnQoY2xvbmVkRmlyc3RTYW1wbGUpXG5cbiAgICAgICAgICB0aGlzLmZpbGxlZFZpZGVvU2FtcGxlcy5wdXNoKHtcbiAgICAgICAgICAgIGR0czogY2xvbmVkRmlyc3RTYW1wbGUuZHRzLFxuICAgICAgICAgICAgc2l6ZTogY2xvbmVkRmlyc3RTYW1wbGUuZGF0YS5ieXRlTGVuZ3RoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBnYXBcbiAgICAvLyBzdGVwMi4g5L+u5aSNc2FtcGxlc+auteS5i+mXtOeahOmXtOi3nemXrumimOOAgVxuICAgIGlmICh0aGlzLm5leHRWaWRlb0R0cykge1xuICAgICAgLy8gc3RlcDEuIOWkhOeQhnNhbXBsZXPmrrXkuYvpl7TnmoTkuKLluKfmg4XlhrVcbiAgICAgIC8vIOW9k+WPkeeOsGR1cmF0aW9u5beu6Led5aSn5LqOMuW4p+aXtui/m+ihjOihpeW4p1xuICAgICAgZ2FwID0gZmlyc3REdHMgLSB0aGlzLm5leHRWaWRlb0R0c1xuICAgICAgY29uc3QgYWJzR2FwID0gTWF0aC5hYnMoZ2FwKVxuICAgICAgaWYgKGdhcCA+ICgyICogbWV0YS5yZWZTYW1wbGVEdXJhdGlvbikpIHtcbiAgICAgICAgY29uc3QgZmlsbEZyYW1lQ291bnQgPSBNYXRoLmZsb29yKGdhcCAvIG1ldGEucmVmU2FtcGxlRHVyYXRpb24pXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxsRnJhbWVDb3VudDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgY2xvbmVkU2FtcGxlID0gT2JqZWN0LmFzc2lnbih7fSwgdmlkZW9TYW1wbGVzWzBdKVxuICAgICAgICAgIGNvbnN0IGNvbXB1dGVkID0gZmlyc3REdHMgLSAoaSArIDEpICogbWV0YS5yZWZTYW1wbGVEdXJhdGlvblxuXG4gICAgICAgICAgY2xvbmVkU2FtcGxlLmR0cyA9IGNvbXB1dGVkID4gdGhpcy5uZXh0VmlkZW9EdHMgPyBjb21wdXRlZCA6IHRoaXMubmV4dFZpZGVvRHRzIC8vIOihpeeahOesrOS4gOW4p+S4gOWumuimgeaYr25leHRWaWRlb0R0c1xuICAgICAgICAgIGNsb25lZFNhbXBsZS5wdHMgPSBjbG9uZWRTYW1wbGUuZHRzICsgY2xvbmVkU2FtcGxlLmN0c1xuXG4gICAgICAgICAgdGhpcy52aWRlb1RyYWNrLnNhbXBsZXMudW5zaGlmdChjbG9uZWRTYW1wbGUpXG5cbiAgICAgICAgICB0aGlzLmZpbGxlZFZpZGVvU2FtcGxlcy5wdXNoKHtcbiAgICAgICAgICAgIGR0czogY2xvbmVkU2FtcGxlLmR0cyxcbiAgICAgICAgICAgIHNpemU6IGNsb25lZFNhbXBsZS5kYXRhLmJ5dGVMZW5ndGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGFic0dhcCA8PSBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uICYmIGFic0dhcCA+IDApIHtcbiAgICAgICAgLy8g5b2T5beu6Led5ZyoKy3kuIDluKfkuYvpl7Tml7blsIbnrKzkuIDluKfnmoRkdHPlvLrooYzlrprkvY3liLDmnJ/mnJvkvY3nva5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+mHjeWumuS9jeinhumikeW4p2R0cycsIHZpZGVvU2FtcGxlc1swXS5kdHMsIHRoaXMubmV4dFZpZGVvRHRzKVxuICAgICAgICB2aWRlb1NhbXBsZXNbMF0uZHRzID0gdGhpcy5uZXh0VmlkZW9EdHNcbiAgICAgICAgdmlkZW9TYW1wbGVzWzBdLm9yaWdpbkR0cyA9IHZpZGVvU2FtcGxlc1swXS5kdHNcbiAgICAgICAgdmlkZW9TYW1wbGVzWzBdLmN0cyA9IHZpZGVvU2FtcGxlc1swXS5jdHMgIT09IHVuZGVmaW5lZCA/IHZpZGVvU2FtcGxlc1swXS5jdHMgOiB2aWRlb1NhbXBsZXNbMF0ucHRzIC0gdmlkZW9TYW1wbGVzWzBdLmR0c1xuICAgICAgICB2aWRlb1NhbXBsZXNbMF0ucHRzID0gdmlkZW9TYW1wbGVzWzBdLmR0cyArIHZpZGVvU2FtcGxlc1swXS5jdHNcbiAgICAgIH0gZWxzZSBpZiAoZ2FwIDwgMCkge1xuICAgICAgICAvLyDlh7rnjrDlpKfnmoRnYXBcbiAgICAgICAgQ29tcGF0aWJpbGl0eS5kb0ZpeExhcmdlR2FwKHZpZGVvU2FtcGxlcywgKC0xICogZ2FwKSlcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbGFzdER0cyA9IHZpZGVvU2FtcGxlc1t2aWRlb1NhbXBsZXMubGVuZ3RoIC0gMV0uZHRzO1xuXG4gICAgY29uc3QgbGFzdFNhbXBsZUR1cmF0aW9uID0gdmlkZW9TYW1wbGVzLmxlbmd0aCA+PSAyID8gbGFzdER0cyAtIHZpZGVvU2FtcGxlc1t2aWRlb1NhbXBsZXMubGVuZ3RoIC0gMl0uZHRzIDogbWV0YS5yZWZTYW1wbGVEdXJhdGlvblxuXG4gICAgdGhpcy5sYXN0VmlkZW9TYW1wbGVzTGVuID0gc2FtcGxlc0xlblxuICAgIHRoaXMubmV4dFZpZGVvRHRzID0gbGFzdER0cyArIGxhc3RTYW1wbGVEdXJhdGlvblxuICAgIHRoaXMubGFzdFZpZGVvRHRzID0gbGFzdER0c1xuXG4gICAgLy8gc3RlcDIuIOS/ruWkjXNhbXBsZeauteS5i+WGheeahOmXtOi3nemXrumimFxuICAgIC8vIHN0ZXAzLiDkv67lpI1zYW1wbGVz5q615YaF6YOo55qEZHRz5byC5bi46Zeu6aKYXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHZpZGVvU2FtcGxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgY3VycmVudCA9IHZpZGVvU2FtcGxlc1tpXVxuICAgICAgY29uc3QgbmV4dCA9IHZpZGVvU2FtcGxlc1tpICsgMV1cblxuICAgICAgaWYgKCFuZXh0KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkdXJhdGlvbiA9IG5leHQuZHRzIC0gY3VycmVudC5kdHM7XG5cbiAgICAgIGlmIChkdXJhdGlvbiA+ICgyICogbWV0YS5yZWZTYW1wbGVEdXJhdGlvbikpIHtcbiAgICAgICAgLy8g5Lik5bin5LmL6Ze06Ze06ZqU5aSq5aSn77yM6ZyA6KaB6KGl56m655m95binXG4gICAgICAgIGxldCBmaWxsRnJhbWVDb3VudCA9IE1hdGguZmxvb3IoZHVyYXRpb24gLyBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uKVxuXG4gICAgICAgIGxldCBmaWxsRnJhbWVJZHggPSAwXG4gICAgICAgIHdoaWxlIChmaWxsRnJhbWVJZHggPCBmaWxsRnJhbWVDb3VudCkge1xuICAgICAgICAgIGNvbnN0IGZpbGxGcmFtZSA9IE9iamVjdC5hc3NpZ24oe30sIG5leHQpXG4gICAgICAgICAgZmlsbEZyYW1lLmR0cyA9IGN1cnJlbnQuZHRzICsgKGZpbGxGcmFtZUlkeCArIDEpICogbWV0YS5yZWZTYW1wbGVEdXJhdGlvblxuICAgICAgICAgIGZpbGxGcmFtZS5wdHMgPSBmaWxsRnJhbWUuZHRzICsgZmlsbEZyYW1lLmN0c1xuICAgICAgICAgIGlmIChmaWxsRnJhbWUgPCBuZXh0LmR0cykge1xuICAgICAgICAgICAgdmlkZW9TYW1wbGVzLnNwbGljZShpLCAwLCBmaWxsRnJhbWUpXG5cbiAgICAgICAgICAgIHRoaXMuZmlsbGVkVmlkZW9TYW1wbGVzLnB1c2goe1xuICAgICAgICAgICAgICBkdHM6IGZpbGxGcmFtZS5kdHMsXG4gICAgICAgICAgICAgIHNpemU6IGZpbGxGcmFtZS5kYXRhLmJ5dGVMZW5ndGhcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmlsbEZyYW1lSWR4KytcbiAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnZpZGVvVHJhY2suc2FtcGxlcyA9IHZpZGVvU2FtcGxlcztcbiAgfVxuXG4gIGRvRml4QXVkaW8gKGZpcnN0LCBzdHJlYW1DaGFuZ2VTdGFydCkge1xuICAgIGxldCB7c2FtcGxlczogYXVkaW9TYW1wbGVzLCBtZXRhfSA9IHRoaXMuYXVkaW9UcmFja1xuXG4gICAgaWYgKCFhdWRpb1NhbXBsZXMgfHwgIWF1ZGlvU2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhgYXVkaW8gbGFzdFNhbXBsZSwgJHthdWRpb1NhbXBsZXNbYXVkaW9TYW1wbGVzLmxlbmd0aCAtIDFdLmR0c31gKVxuXG4gICAgY29uc3Qgc2FtcGxlc0xlbiA9IGF1ZGlvU2FtcGxlcy5sZW5ndGg7XG4gICAgY29uc3Qgc2lsZW50RnJhbWUgPSBBQUMuZ2V0U2lsZW50RnJhbWUobWV0YS5jb2RlYywgbWV0YS5jaGFubmVsQ291bnQpXG5cbiAgICBjb25zdCBmaXJzdFNhbXBsZSA9IHRoaXMuX2ZpcnN0QXVkaW9TYW1wbGVcblxuICAgIGNvbnN0IF9maXJzdFNhbXBsZSA9IGF1ZGlvU2FtcGxlc1swXVxuICAgIC8vIOWvuWF1ZGlvU2FtcGxlc+aMieeFp2R0c+WBmuaOkuW6j1xuICAgIC8vIGF1ZGlvU2FtcGxlcyA9IENvbXBhdGliaWxpdHkuc29ydEF1ZGlvU2FtcGxlcyhhdWRpb1NhbXBsZXMpXG4gICAgaWYgKHRoaXMuX2F1ZGlvTGFyZ2VHYXAgPiAwKSB7XG4gICAgICBDb21wYXRpYmlsaXR5LmRvRml4TGFyZ2VHYXAoYXVkaW9TYW1wbGVzLCB0aGlzLl9hdWRpb0xhcmdlR2FwKVxuICAgIH1cblxuICAgIGlmIChfZmlyc3RTYW1wbGUuZHRzICE9PSB0aGlzLl9maXJzdEF1ZGlvU2FtcGxlLmR0cyAmJiAoc3RyZWFtQ2hhbmdlU3RhcnQgfHwgQ29tcGF0aWJpbGl0eS5kZXRlY3RMYXJnZUdhcCh0aGlzLm5leHRBdWRpb0R0cywgX2ZpcnN0U2FtcGxlKSkpIHtcbiAgICAgIGlmIChzdHJlYW1DaGFuZ2VTdGFydCkge1xuICAgICAgICB0aGlzLm5leHRBdWRpb0R0cyA9IHN0cmVhbUNoYW5nZVN0YXJ0IC8vIEZJWDogSGxz5Lit6YCU5YiHY29kZWPvvIzlnKjlpoLmnpznm7TmjqVzZWVr5Yiw5ZCO6Z2i55qE54K55Lya5a+86Ie0bGFyZ2VHYXDorqHnrpflpLHotKVcbiAgICAgIH1cbiAgICAgIHRoaXMuX2F1ZGlvTGFyZ2VHYXAgPSB0aGlzLm5leHRBdWRpb0R0cyAtIF9maXJzdFNhbXBsZS5kdHNcbiAgICAgIENvbXBhdGliaWxpdHkuZG9GaXhMYXJnZUdhcChhdWRpb1NhbXBsZXMsIHRoaXMuX2F1ZGlvTGFyZ2VHYXApXG4gICAgfVxuICAgIC8vIHN0ZXAwLiDpppbluKfkuI52aWRlb+mmluW4p+mXtOi3neWkp+eahOmXrumimFxuICAgIGlmICh0aGlzLl9maXJzdFZpZGVvU2FtcGxlICYmIGZpcnN0KSB7XG4gICAgICBjb25zdCB2aWRlb0ZpcnN0UHRzID0gdGhpcy5fZmlyc3RWaWRlb1NhbXBsZS5wdHMgPyB0aGlzLl9maXJzdFZpZGVvU2FtcGxlLnB0cyA6IHRoaXMuX2ZpcnN0VmlkZW9TYW1wbGUuZHRzICsgdGhpcy5fZmlyc3RWaWRlb1NhbXBsZS5jdHNcblxuICAgICAgaWYgKGZpcnN0U2FtcGxlLmR0cyAtIHZpZGVvRmlyc3RQdHMgPiBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IHNpbGVudFNhbXBsZUNvdW50ID0gTWF0aC5mbG9vcigoZmlyc3RTYW1wbGUuZHRzIC0gdmlkZW9GaXJzdFB0cykgLyBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2lsZW50U2FtcGxlQ291bnQ7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHNpbGVudFNhbXBsZSA9IHtcbiAgICAgICAgICAgIGRhdGE6IHNpbGVudEZyYW1lLFxuICAgICAgICAgICAgZGF0YXNpemU6IHNpbGVudEZyYW1lLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICBkdHM6IGZpcnN0U2FtcGxlLmR0cyAtIChpICsgMSkgKiBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uLFxuICAgICAgICAgICAgZmlsdGVyZWQ6IDBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhdWRpb1NhbXBsZXMudW5zaGlmdChzaWxlbnRTYW1wbGUpXG5cbiAgICAgICAgICB0aGlzLmZpbGxlZEF1ZGlvU2FtcGxlcy5wdXNoKHtcbiAgICAgICAgICAgIGR0czogc2lsZW50U2FtcGxlLmR0cyxcbiAgICAgICAgICAgIHNpemU6IHNpbGVudFNhbXBsZS5kYXRhLmJ5dGVMZW5ndGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGdhcFxuICAgIGNvbnN0IGZpcnN0RHRzID0gYXVkaW9TYW1wbGVzWzBdLmR0c1xuXG4gICAgaWYgKHRoaXMubmV4dEF1ZGlvRHRzKSB7XG4gICAgICAvLyBzdGVwMS4g5aSE55CGc2FtcGxlc+auteS5i+mXtOeahOS4ouW4p+aDheWGtVxuICAgICAgLy8g5b2T5Y+R546wZHVyYXRpb27lt67ot53lpKfkuo4x5bin5pe26L+b6KGM6KGl5binXG4gICAgICBnYXAgPSBmaXJzdER0cyAtIHRoaXMubmV4dEF1ZGlvRHRzXG4gICAgICBjb25zdCBhYnNHYXAgPSBNYXRoLmFicyhnYXApXG5cbiAgICAgIGlmIChhYnNHYXAgPiBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uICYmIHNhbXBsZXNMZW4gPT09IDEgJiYgdGhpcy5sYXN0QXVkaW9TYW1wbGVzTGVuID09PSAxKSB7XG4gICAgICAgIG1ldGEucmVmU2FtcGxlRHVyYXRpb25GaXhlZCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoZ2FwID4gKDIgKiBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uKSkge1xuICAgICAgICBpZiAoc2FtcGxlc0xlbiA9PT0gMSAmJiB0aGlzLmxhc3RBdWRpb1NhbXBsZXNMZW4gPT09IDEpIHtcbiAgICAgICAgICAvLyDlpoLmnpxzYW1wbGXnmoRsZW5ndGjkuIDnm7TmmK8x77yM6ICM5LiU5LiA55u05LiN56ym5ZCIcmVmU2FtcGxlRHVyYXRpb27vvIzpnIDopoHliqjmgIHkv67mlLlyZWZTYW1wbGVEdXJhdGlvblxuICAgICAgICAgIG1ldGEucmVmU2FtcGxlRHVyYXRpb25GaXhlZCA9IG1ldGEucmVmU2FtcGxlRHVyYXRpb25GaXhlZCAhPT0gdW5kZWZpbmVkID8gbWV0YS5yZWZTYW1wbGVEdXJhdGlvbkZpeGVkICsgZ2FwIDogbWV0YS5yZWZTYW1wbGVEdXJhdGlvbiArIGdhcFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHNpbGVudEZyYW1lQ291bnQgPSBNYXRoLmZsb29yKGdhcCAvIG1ldGEucmVmU2FtcGxlRHVyYXRpb24pXG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpbGVudEZyYW1lQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29tcHV0ZWQgPSBmaXJzdER0cyAtIChpICsgMSkgKiBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uXG4gICAgICAgICAgICBjb25zdCBzaWxlbnRTYW1wbGUgPSBPYmplY3QuYXNzaWduKHt9LCBhdWRpb1NhbXBsZXNbMF0sIHtcbiAgICAgICAgICAgICAgZHRzOiBjb21wdXRlZCA+IHRoaXMubmV4dEF1ZGlvRHRzID8gY29tcHV0ZWQgOiB0aGlzLm5leHRBdWRpb0R0c1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdGhpcy5maWxsZWRBdWRpb1NhbXBsZXMucHVzaCh7XG4gICAgICAgICAgICAgIGR0czogc2lsZW50U2FtcGxlLmR0cyxcbiAgICAgICAgICAgICAgc2l6ZTogc2lsZW50U2FtcGxlLmRhdGEuYnl0ZUxlbmd0aFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuYXVkaW9UcmFjay5zYW1wbGVzLnVuc2hpZnQoc2lsZW50U2FtcGxlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhYnNHYXAgPD0gbWV0YS5yZWZTYW1wbGVEdXJhdGlvbiAmJiBhYnNHYXAgPiAwKSB7XG4gICAgICAgIC8vIOW9k+W3rui3neavlOi+g+Wwj+eahOaXtuWAmeWwhumfs+mikeW4p+mHjeWumuS9jVxuICAgICAgICAvLyBjb25zb2xlLmxvZygn6YeN5a6a5L2N6Z+z6aKR5binZHRzJywgYXVkaW9TYW1wbGVzWzBdLmR0cywgdGhpcy5uZXh0QXVkaW9EdHMpXG4gICAgICAgIGF1ZGlvU2FtcGxlc1swXS5kdHMgPSB0aGlzLm5leHRBdWRpb0R0c1xuICAgICAgICBhdWRpb1NhbXBsZXNbMF0ucHRzID0gdGhpcy5uZXh0QXVkaW9EdHNcbiAgICAgIH0gZWxzZSBpZiAoZ2FwIDwgMCkge1xuICAgICAgICBDb21wYXRpYmlsaXR5LmRvRml4TGFyZ2VHYXAoYXVkaW9TYW1wbGVzLCAoLTEgKiBnYXApKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBsYXN0RHRzID0gYXVkaW9TYW1wbGVzW2F1ZGlvU2FtcGxlcy5sZW5ndGggLSAxXS5kdHM7XG4gICAgY29uc3QgbGFzdFNhbXBsZUR1cmF0aW9uID0gYXVkaW9TYW1wbGVzLmxlbmd0aCA+PSAyID8gbGFzdER0cyAtIGF1ZGlvU2FtcGxlc1thdWRpb1NhbXBsZXMubGVuZ3RoIC0gMl0uZHRzIDogbWV0YS5yZWZTYW1wbGVEdXJhdGlvblxuXG4gICAgdGhpcy5sYXN0QXVkaW9TYW1wbGVzTGVuID0gc2FtcGxlc0xlbjtcbiAgICB0aGlzLm5leHRBdWRpb0R0cyA9IG1ldGEucmVmU2FtcGxlRHVyYXRpb25GaXhlZCA/IGxhc3REdHMgKyBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uRml4ZWQgOiBsYXN0RHRzICsgbGFzdFNhbXBsZUR1cmF0aW9uXG4gICAgdGhpcy5sYXN0QXVkaW9EdHMgPSBsYXN0RHRzXG5cbiAgICAvLyBzdGVwMy4g5L+u5aSNc2FtcGxlc+auteWGhemDqOeahGR0c+W8guW4uOmXrumimFxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhdWRpb1NhbXBsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBhdWRpb1NhbXBsZXNbaV1cbiAgICAgIGNvbnN0IG5leHQgPSBhdWRpb1NhbXBsZXNbaSArIDFdXG5cbiAgICAgIGlmICghbmV4dCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY29uc3QgZHVyYXRpb24gPSBuZXh0LmR0cyAtIGN1cnJlbnQuZHRzO1xuICAgICAgYXVkaW9TYW1wbGVzW2ldLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAvKlxuICAgICAgaWYgKGR1cmF0aW9uID4gKDIgKiBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uKSkge1xuICAgICAgICAvLyDkuKTluKfkuYvpl7Tpl7TpmpTlpKrlpKfvvIzpnIDopoHooaXnqbrnmb3luKdcbiAgICAgICAgLyoqXG4gICAgICAgIGxldCBzaWxlbnRGcmFtZUNvdW50ID0gTWF0aC5mbG9vcihkdXJhdGlvbiAvIG1ldGEucmVmU2FtcGxlRHVyYXRpb24pXG4gICAgICAgIGxldCBmcmFtZUlkeCA9IDBcblxuICAgICAgICB3aGlsZSAoZnJhbWVJZHggPCBzaWxlbnRGcmFtZUNvdW50KSB7XG4gICAgICAgICAgY29uc3Qgc2lsZW50U2FtcGxlID0ge1xuICAgICAgICAgICAgZGF0YTogc2lsZW50RnJhbWUsXG4gICAgICAgICAgICBkYXRhc2l6ZTogc2lsZW50RnJhbWUuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgIGR0czogY3VycmVudC5kdHMgKyAoZnJhbWVJZHggKyAxKSAqIG1ldGEucmVmU2FtcGxlRHVyYXRpb24sXG4gICAgICAgICAgICBmaWx0ZXJlZDogMCxcbiAgICAgICAgICAgIGlzU2lsZW50OiB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXVkaW9TYW1wbGVzLnNwbGljZShpLCAwLCBzaWxlbnRTYW1wbGUpXG5cbiAgICAgICAgICB0aGlzLmZpbGxlZEF1ZGlvU2FtcGxlcy5wdXNoKHtcbiAgICAgICAgICAgIGR0czogc2lsZW50U2FtcGxlLmR0cyxcbiAgICAgICAgICAgIHNpemU6IHNpbGVudFNhbXBsZS5kYXRhLmJ5dGVMZW5ndGhcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgZnJhbWVJZHgrK1xuICAgICAgICAgIGkrKyAvLyDkuI3lr7npnZnpn7PluKflgZrmr5TovoNcbiAgICAgICAgfVxuICAgICAgfSAqL1xuICAgIH1cblxuICAgIHRoaXMuYXVkaW9UcmFjay5zYW1wbGVzID0gQ29tcGF0aWJpbGl0eS5zb3J0QXVkaW9TYW1wbGVzKGF1ZGlvU2FtcGxlcylcbiAgfVxuXG4gIGZpeENoYW5nZVN0cmVhbVZpZGVvIChjaGFuZ2VJZHgpIHtcbiAgICBjb25zdCB7IHNhbXBsZXMsIG1ldGEgfSA9IHRoaXMudmlkZW9UcmFjaztcbiAgICBjb25zdCBwcmV2RHRzID0gY2hhbmdlSWR4ID09PSAwID8gdGhpcy5nZXRTdHJlYW1DaGFuZ2VTdGFydChzYW1wbGVzWzBdKSA6IHNhbXBsZXNbY2hhbmdlSWR4IC0gMV0uZHRzO1xuICAgIGNvbnN0IGN1ckR0cyA9IHNhbXBsZXNbY2hhbmdlSWR4XS5kdHM7XG4gICAgY29uc3QgaXNDb250aW51ZSA9IE1hdGguYWJzKHByZXZEdHMgLSBjdXJEdHMpIDw9IDIgKiBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uO1xuXG4gICAgaWYgKGlzQ29udGludWUpIHtcbiAgICAgIGlmICghc2FtcGxlc1tjaGFuZ2VJZHhdLm9wdGlvbnMpIHtcbiAgICAgICAgc2FtcGxlc1tjaGFuZ2VJZHhdLm9wdGlvbnMgPSB7XG4gICAgICAgICAgaXNDb250aW51ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzYW1wbGVzW2NoYW5nZUlkeF0ub3B0aW9ucy5pc0NvbnRpbnVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmRvRml4VmlkZW8oZmFsc2UpXG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RQYXJ0U2FtcGxlcyA9IHNhbXBsZXMuc2xpY2UoMCwgY2hhbmdlSWR4KTtcbiAgICBjb25zdCBzZWNvbmRQYXJ0U2FtcGxlcyA9IHNhbXBsZXMuc2xpY2UoY2hhbmdlSWR4KTtcbiAgICBjb25zdCBmaXJzdFNhbXBsZSA9IHNhbXBsZXNbMF1cblxuICAgIGNvbnN0IGNoYW5nZVNhbXBsZSA9IHNlY29uZFBhcnRTYW1wbGVzWzBdXG4gICAgY29uc3QgZmlyc3RQYXJ0RHVyYXRpb24gPSBjaGFuZ2VTYW1wbGUuZHRzIC0gZmlyc3RTYW1wbGUuZHRzXG4gICAgY29uc3Qgc3RyZWFtQ2hhbmdlU3RhcnQgPSBmaXJzdFNhbXBsZS5vcHRpb25zICYmIGZpcnN0U2FtcGxlLm9wdGlvbnMuc3RhcnQgKyBmaXJzdFBhcnREdXJhdGlvbiA/IGZpcnN0U2FtcGxlLm9wdGlvbnMuc3RhcnQgOiBudWxsXG5cbiAgICB0aGlzLnZpZGVvVHJhY2suc2FtcGxlcyA9IHNhbXBsZXMuc2xpY2UoMCwgY2hhbmdlSWR4KTtcblxuICAgIHRoaXMuZG9GaXhWaWRlbyhmYWxzZSk7XG5cbiAgICB0aGlzLnZpZGVvVHJhY2suc2FtcGxlcyA9IHNhbXBsZXMuc2xpY2UoY2hhbmdlSWR4KTtcblxuICAgIHRoaXMuZG9GaXhWaWRlbyhmYWxzZSwgc3RyZWFtQ2hhbmdlU3RhcnQpO1xuXG4gICAgdGhpcy52aWRlb1RyYWNrLnNhbXBsZXMgPSBmaXJzdFBhcnRTYW1wbGVzLmNvbmNhdChzZWNvbmRQYXJ0U2FtcGxlcylcbiAgfVxuXG4gIGZpeENoYW5nZVN0cmVhbUF1ZGlvIChjaGFuZ2VJZHgpIHtcbiAgICBjb25zdCB7IHNhbXBsZXMsIG1ldGEgfSA9IHRoaXMuYXVkaW9UcmFjaztcblxuICAgIGNvbnN0IHByZXZEdHMgPSBjaGFuZ2VJZHggPT09IDAgPyB0aGlzLmdldFN0cmVhbUNoYW5nZVN0YXJ0KHNhbXBsZXNbMF0pIDogc2FtcGxlc1tjaGFuZ2VJZHggLSAxXS5kdHM7XG4gICAgY29uc3QgY3VyRHRzID0gc2FtcGxlc1tjaGFuZ2VJZHhdLmR0cztcbiAgICBjb25zdCBpc0NvbnRpbnVlID0gTWF0aC5hYnMocHJldkR0cyAtIGN1ckR0cykgPD0gMiAqIG1ldGEucmVmU2FtcGxlRHVyYXRpb247XG5cbiAgICBpZiAoaXNDb250aW51ZSkge1xuICAgICAgaWYgKCFzYW1wbGVzW2NoYW5nZUlkeF0ub3B0aW9ucykge1xuICAgICAgICBzYW1wbGVzW2NoYW5nZUlkeF0ub3B0aW9ucyA9IHtcbiAgICAgICAgICBpc0NvbnRpbnVlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNhbXBsZXNbY2hhbmdlSWR4XS5vcHRpb25zLmlzQ29udGludWUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuZG9GaXhBdWRpbyhmYWxzZSlcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdFBhcnRTYW1wbGVzID0gc2FtcGxlcy5zbGljZSgwLCBjaGFuZ2VJZHgpO1xuICAgIGNvbnN0IHNlY29uZFBhcnRTYW1wbGVzID0gc2FtcGxlcy5zbGljZShjaGFuZ2VJZHgpO1xuICAgIGNvbnN0IGZpcnN0U2FtcGxlID0gc2FtcGxlc1swXVxuXG4gICAgY29uc3QgY2hhbmdlU2FtcGxlID0gc2Vjb25kUGFydFNhbXBsZXNbMF1cbiAgICBjb25zdCBmaXJzdFBhcnREdXJhdGlvbiA9IGNoYW5nZVNhbXBsZS5kdHMgLSBmaXJzdFNhbXBsZS5kdHNcbiAgICBjb25zdCBzdHJlYW1DaGFuZ2VTdGFydCA9IGZpcnN0U2FtcGxlLm9wdGlvbnMgJiYgZmlyc3RTYW1wbGUub3B0aW9ucy5zdGFydCArIGZpcnN0UGFydER1cmF0aW9uID8gZmlyc3RTYW1wbGUub3B0aW9ucy5zdGFydCA6IG51bGxcblxuICAgIHRoaXMuYXVkaW9UcmFjay5zYW1wbGVzID0gZmlyc3RQYXJ0U2FtcGxlcztcblxuICAgIHRoaXMuZG9GaXhBdWRpbyhmYWxzZSk7XG5cbiAgICB0aGlzLmF1ZGlvVHJhY2suc2FtcGxlcyA9IHNlY29uZFBhcnRTYW1wbGVzO1xuXG4gICAgdGhpcy5kb0ZpeEF1ZGlvKGZhbHNlLCBzdHJlYW1DaGFuZ2VTdGFydCk7XG5cbiAgICB0aGlzLmF1ZGlvVHJhY2suc2FtcGxlcyA9IGZpcnN0UGFydFNhbXBsZXMuY29uY2F0KHNlY29uZFBhcnRTYW1wbGVzKVxuICB9XG5cbiAgZ2V0Rmlyc3RTYW1wbGUgKCkge1xuICAgIC8vIOiOt+WPlnZpZGVv5ZKMYXVkaW/nmoTpppbluKfmlbDmja5cbiAgICBsZXQge3NhbXBsZXM6IHZpZGVvU2FtcGxlc30gPSB0aGlzLnZpZGVvVHJhY2tcbiAgICBsZXQge3NhbXBsZXM6IGF1ZGlvU2FtcGxlc30gPSB0aGlzLmF1ZGlvVHJhY2tcblxuICAgIGxldCBpc0ZpcnN0VmlkZW9TYW1wbGVzID0gZmFsc2U7XG4gICAgbGV0IGlzRmlyc3RBdWRpb1NhbXBsZXMgPSBmYWxzZTtcblxuICAgIGlmICghdGhpcy5fZmlyc3RWaWRlb1NhbXBsZSAmJiB2aWRlb1NhbXBsZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9maXJzdFZpZGVvU2FtcGxlID0gQ29tcGF0aWJpbGl0eS5maW5kRmlyc3RWaWRlb1NhbXBsZSh2aWRlb1NhbXBsZXMpXG4gICAgICBpc0ZpcnN0VmlkZW9TYW1wbGVzID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmICghdGhpcy5fZmlyc3RBdWRpb1NhbXBsZSAmJiBhdWRpb1NhbXBsZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9maXJzdEF1ZGlvU2FtcGxlID0gQ29tcGF0aWJpbGl0eS5maW5kRmlyc3RBdWRpb1NhbXBsZShhdWRpb1NhbXBsZXMpIC8vIOWvu+aJvmR0c+acgOWwj+eahOW4p+S9nOS4uummluS4qumfs+mikeW4p1xuICAgICAgaXNGaXJzdEF1ZGlvU2FtcGxlcyA9IHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNGaXJzdFZpZGVvU2FtcGxlcyxcbiAgICAgIGlzRmlyc3RBdWRpb1NhbXBsZXNcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5Zyo5rKh5pyJcmVmU2FtcGxlRHVyYXRpb27nmoTpl67popjmtYHkuK3vvIxcbiAgICovXG4gIGZpeFJlZlNhbXBsZUR1cmF0aW9uIChtZXRhLCBzYW1wbGVzKSB7XG4gICAgY29uc3QgaXNWaWRlbyA9IG1ldGEudHlwZSA9PT0gJ3ZpZGVvJ1xuICAgIGNvbnN0IGFsbFNhbXBsZXNDb3VudCA9IGlzVmlkZW8gPyB0aGlzLmFsbFZpZGVvU2FtcGxlc0NvdW50IDogdGhpcy5hbGxBdWRpb1NhbXBsZXNDb3VudFxuICAgIGNvbnN0IGZpcnN0RHRzID0gaXNWaWRlbyA/IHRoaXMuX2ZpcnN0VmlkZW9TYW1wbGUuZHRzIDogdGhpcy5fZmlyc3RBdWRpb1NhbXBsZS5kdHNcbiAgICBjb25zdCBmaWxsZWRTYW1wbGVzQ291bnQgPSBpc1ZpZGVvID8gdGhpcy5maWxsZWRWaWRlb1NhbXBsZXMubGVuZ3RoIDogdGhpcy5maWxsZWRBdWRpb1NhbXBsZXMubGVuZ3RoXG5cbiAgICBpZiAoIW1ldGEucmVmU2FtcGxlRHVyYXRpb24gfHwgbWV0YS5yZWZTYW1wbGVEdXJhdGlvbiA8PSAwIHx8IE51bWJlci5pc05hTihtZXRhLnJlZlNhbXBsZUR1cmF0aW9uKSkge1xuICAgICAgaWYgKHNhbXBsZXMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgY29uc3QgbGFzdER0cyA9IHNhbXBsZXNbc2FtcGxlcy5sZW5ndGggLSAxXS5kdHNcblxuICAgICAgICBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uID0gTWF0aC5mbG9vcigobGFzdER0cyAtIGZpcnN0RHRzKSAvICgoYWxsU2FtcGxlc0NvdW50ICsgZmlsbGVkU2FtcGxlc0NvdW50KSAtIDEpKTsgLy8g5bCGcmVmU2FtcGxlRHVyYXRpb27ph43nva7kuLrorqHnrpflkI7nmoTlubPlnYflgLxcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1ldGEucmVmU2FtcGxlRHVyYXRpb24pIHtcbiAgICAgIGlmIChzYW1wbGVzLmxlbmd0aCA+PSA1KSB7XG4gICAgICAgIGNvbnN0IGxhc3REdHMgPSBzYW1wbGVzW3NhbXBsZXMubGVuZ3RoIC0gMV0uZHRzXG4gICAgICAgIGNvbnN0IGZpcnN0RHRzID0gc2FtcGxlc1swXS5kdHNcbiAgICAgICAgY29uc3QgZHVyYXRpb25BdmcgPSAobGFzdER0cyAtIGZpcnN0RHRzKSAvIChzYW1wbGVzLmxlbmd0aCAtIDEpXG5cbiAgICAgICAgbWV0YS5yZWZTYW1wbGVEdXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5hYnMobWV0YS5yZWZTYW1wbGVEdXJhdGlvbiAtIGR1cmF0aW9uQXZnKSA8PSA1ID8gbWV0YS5yZWZTYW1wbGVEdXJhdGlvbiA6IGR1cmF0aW9uQXZnKTsgLy8g5bCGcmVmU2FtcGxlRHVyYXRpb27ph43nva7kuLrorqHnrpflkI7nmoTlubPlnYflgLxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6K6w5b2V5oiq5q2i55uu5YmN5LiA5YWx5pKt5pS+5LqG5aSa5bCR5binXG4gICAqL1xuICByZWNvcmRTYW1wbGVzQ291bnQgKCkge1xuICAgIGNvbnN0IHsgYXVkaW9UcmFjaywgdmlkZW9UcmFjayB9ID0gdGhpc1xuXG4gICAgdGhpcy5hbGxBdWRpb1NhbXBsZXNDb3VudCArPSBhdWRpb1RyYWNrLnNhbXBsZXMubGVuZ3RoXG4gICAgdGhpcy5hbGxWaWRlb1NhbXBsZXNDb3VudCArPSB2aWRlb1RyYWNrLnNhbXBsZXMubGVuZ3RoXG4gIH1cblxuICAvKipcbiAgICog5Y676Zmk5LiN5ZCI5rOV55qE5bin77yI5YCS6YCA44CB6YeN5aSN5bin77yJXG4gICAqL1xuICByZW1vdmVJbnZhbGlkU2FtcGxlcyAoKSB7XG4gICAgY29uc3QgeyBfZmlyc3RWaWRlb1NhbXBsZSwgX2ZpcnN0QXVkaW9TYW1wbGUgfSA9IHRoaXNcblxuICAgIHRoaXMuYXVkaW9UcmFjay5zYW1wbGVzID0gdGhpcy5hdWRpb1RyYWNrLnNhbXBsZXMuZmlsdGVyKChzYW1wbGUpID0+IHtcbiAgICAgIHJldHVybiBzYW1wbGUuZHRzID49IF9maXJzdEF1ZGlvU2FtcGxlLmR0cyAmJiAodGhpcy5sYXN0QXVkaW9EdHMgPT09IHVuZGVmaW5lZCB8fCBzYW1wbGUuZHRzID4gdGhpcy5sYXN0QXVkaW9EdHMpXG4gICAgfSlcblxuICAgIHRoaXMudmlkZW9UcmFjay5zYW1wbGVzID0gdGhpcy52aWRlb1RyYWNrLnNhbXBsZXMuZmlsdGVyKChzYW1wbGUpID0+IHtcbiAgICAgIHJldHVybiBzYW1wbGUuZHRzID49IF9maXJzdFZpZGVvU2FtcGxlLmR0cyAmJiAodGhpcy5sYXN0VmlkZW9EdHMgPT09IHVuZGVmaW5lZCB8fCBzYW1wbGUuZHRzID4gdGhpcy5sYXN0VmlkZW9EdHMpXG4gICAgfSlcbiAgfVxuXG4gIGdldFN0cmVhbUNoYW5nZVN0YXJ0IChzYW1wbGUpIHtcbiAgICBpZiAoc2FtcGxlLm9wdGlvbnMgJiYgc2FtcGxlLm9wdGlvbnMuc3RhcnQpIHtcbiAgICAgIHJldHVybiBzYW1wbGUub3B0aW9ucy5zdGFydCAtIHRoaXMuZHRzQmFzZTtcbiAgICB9XG4gICAgcmV0dXJuIEluZmluaXR5XG4gIH1cblxuICBzdGF0aWMgc29ydEF1ZGlvU2FtcGxlcyAoc2FtcGxlcykge1xuICAgIGlmIChzYW1wbGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHNhbXBsZXNcbiAgICB9XG5cbiAgICByZXR1cm4gc2FtcGxlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5kdHMgLSBiLmR0c1xuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICog5a+75om+ZHRz5pyA5bCP55qEc2FtcGxlXG4gICAqIEBwYXJhbSBzYW1wbGVzXG4gICAqL1xuICBzdGF0aWMgZmluZEZpcnN0QXVkaW9TYW1wbGUgKHNhbXBsZXMpIHtcbiAgICBpZiAoIXNhbXBsZXMgfHwgc2FtcGxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIENvbXBhdGliaWxpdHkuc29ydEF1ZGlvU2FtcGxlcyhzYW1wbGVzKVswXVxuICB9XG5cbiAgc3RhdGljIGZpbmRGaXJzdFZpZGVvU2FtcGxlIChzYW1wbGVzKSB7XG4gICAgaWYgKCFzYW1wbGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCBzb3J0ZWQgPSBzYW1wbGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmR0cyAtIGIuZHRzO1xuICAgIH0pXG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gc29ydGVkLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAoc29ydGVkW2ldLmlzS2V5ZnJhbWUpIHtcbiAgICAgICAgcmV0dXJuIHNvcnRlZFtpXVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkZXRlY3RMYXJnZUdhcCAobmV4dER0cywgZmlyc3RTYW1wbGUpIHtcbiAgICBpZiAobmV4dER0cyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjdXJEdHMgPSBmaXJzdFNhbXBsZS5kdHMgfHwgMFxuICAgIGNvbnN0IGNvbmQxID0gbmV4dER0cyAtIGN1ckR0cyA+PSAxMDAwIHx8IGN1ckR0cyAtIG5leHREdHMgPj0gMTAwMCAvLyBmaXggaGxz5rWB5Ye6546w5aSn6YeP5rWBZHRz6Ze06Led6Zeu6aKYXG4gICAgY29uc3QgY29uZDIgPSBmaXJzdFNhbXBsZS5vcHRpb25zICYmIGZpcnN0U2FtcGxlLm9wdGlvbnMuZGlzY29udGludWVcblxuICAgIHJldHVybiBjb25kMSB8fCBjb25kMlxuICB9XG5cbiAgc3RhdGljIGRvRml4TGFyZ2VHYXAgKHNhbXBsZXMsIGdhcCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzYW1wbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBzYW1wbGUgPSBzYW1wbGVzW2ldO1xuICAgICAgc2FtcGxlLmR0cyArPSBnYXBcbiAgICAgIGlmIChzYW1wbGUucHRzKSB7XG4gICAgICAgIHNhbXBsZS5wdHMgKz0gZ2FwXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOS4remAlOaNoua1gVxuICAgKi9cbiAgc3RhdGljIGRldGFjdENoYW5nZVN0cmVhbSAoc2FtcGxlcykge1xuICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG4gICAgbGV0IGNoYW5nZWRJZHggPSAtMTtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gc2FtcGxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKHNhbXBsZXNbaV0ub3B0aW9ucyAmJiBzYW1wbGVzW2ldLm9wdGlvbnMubWV0YSkge1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZVxuICAgICAgICBjaGFuZ2VkSWR4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYW5nZWQsXG4gICAgICBjaGFuZ2VkSWR4XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRyYWNrcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UoJ1RSQUNLUycpXG4gIH1cblxuICBnZXQgYXVkaW9UcmFjayAoKSB7XG4gICAgaWYgKHRoaXMudHJhY2tzKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFja3MuYXVkaW9UcmFja1xuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgZ2V0IHZpZGVvVHJhY2sgKCkge1xuICAgIGlmICh0aGlzLnRyYWNrcykge1xuICAgICAgcmV0dXJuIHRoaXMudHJhY2tzLnZpZGVvVHJhY2tcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGdldCBkdHNCYXNlICgpIHtcbiAgICBjb25zdCByZW11eGVyID0gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnTVA0X1JFTVVYRVInKTtcbiAgICBpZiAocmVtdXhlcikge1xuICAgICAgcmV0dXJuIHJlbXV4ZXIuX2R0c0Jhc2VcbiAgICB9XG4gICAgcmV0dXJuIDBcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29tcGF0aWJpbGl0eTtcbiIsImNsYXNzIEdvbG9tYiB7XG4gIGNvbnN0cnVjdG9yICh1aW50OGFycmF5KSB7XG4gICAgdGhpcy5UQUcgPSAnR29sb21iJ1xuICAgIHRoaXMuX2J1ZmZlciA9IHVpbnQ4YXJyYXlcbiAgICB0aGlzLl9idWZmZXJJbmRleCA9IDBcbiAgICB0aGlzLl90b3RhbEJ5dGVzID0gdWludDhhcnJheS5ieXRlTGVuZ3RoXG4gICAgdGhpcy5fdG90YWxCaXRzID0gdWludDhhcnJheS5ieXRlTGVuZ3RoICogOFxuICAgIHRoaXMuX2N1cnJlbnRXb3JkID0gMFxuICAgIHRoaXMuX2N1cnJlbnRXb3JkQml0c0xlZnQgPSAwXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLl9idWZmZXIgPSBudWxsXG4gIH1cblxuICBfZmlsbEN1cnJlbnRXb3JkICgpIHtcbiAgICBsZXQgYnVmZmVyQnl0ZXNMZWZ0ID0gdGhpcy5fdG90YWxCeXRlcyAtIHRoaXMuX2J1ZmZlckluZGV4XG4gICAgaWYgKGJ1ZmZlckJ5dGVzTGVmdCA8PSAwKSB7XG4gICAgICAvLyBUT0RPIOW8guW4uOWkhOeQhlxuICAgIH1cblxuICAgIGxldCBieXRlc1JlYWQgPSBNYXRoLm1pbig0LCBidWZmZXJCeXRlc0xlZnQpXG4gICAgbGV0IHdvcmQgPSBuZXcgVWludDhBcnJheSg0KVxuICAgIHdvcmQuc2V0KHRoaXMuX2J1ZmZlci5zdWJhcnJheSh0aGlzLl9idWZmZXJJbmRleCwgdGhpcy5fYnVmZmVySW5kZXggKyBieXRlc1JlYWQpKVxuICAgIHRoaXMuX2N1cnJlbnRXb3JkID0gbmV3IERhdGFWaWV3KHdvcmQuYnVmZmVyKS5nZXRVaW50MzIoMClcblxuICAgIHRoaXMuX2J1ZmZlckluZGV4ICs9IGJ5dGVzUmVhZFxuICAgIHRoaXMuX2N1cnJlbnRXb3JkQml0c0xlZnQgPSBieXRlc1JlYWQgKiA4XG4gIH1cblxuICByZWFkQml0cyAoc2l6ZSkge1xuICAgIGxldCBiaXRzID0gTWF0aC5taW4odGhpcy5fY3VycmVudFdvcmRCaXRzTGVmdCwgc2l6ZSk7Ly8gOnVpbnRcbiAgICBsZXQgdmFsdSA9IHRoaXMuX2N1cnJlbnRXb3JkID4+PiAoMzIgLSBiaXRzKTtcbiAgICBpZiAoc2l6ZSA+IDMyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCByZWFkIG1vcmUgdGhhbiAzMiBiaXRzIGF0IGEgdGltZScpO1xuICAgIH1cbiAgICB0aGlzLl9jdXJyZW50V29yZEJpdHNMZWZ0IC09IGJpdHM7XG4gICAgaWYgKHRoaXMuX2N1cnJlbnRXb3JkQml0c0xlZnQgPiAwKSB7XG4gICAgICB0aGlzLl9jdXJyZW50V29yZCA8PD0gYml0cztcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3RvdGFsQnl0ZXMgLSB0aGlzLl9idWZmZXJJbmRleCA+IDApIHtcbiAgICAgIHRoaXMuX2ZpbGxDdXJyZW50V29yZCgpO1xuICAgIH1cblxuICAgIGJpdHMgPSBzaXplIC0gYml0cztcbiAgICBpZiAoYml0cyA+IDAgJiYgdGhpcy5fY3VycmVudFdvcmRCaXRzTGVmdCkge1xuICAgICAgcmV0dXJuIHZhbHUgPDwgYml0cyB8IHRoaXMucmVhZEJpdHMoYml0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1O1xuICAgIH1cbiAgfVxuXG4gIHJlYWRCb29sICgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFkQml0cygxKSA9PT0gMVxuICB9XG5cbiAgcmVhZEJ5dGUgKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWRCaXRzKDgpXG4gIH1cblxuICBfc2tpcExlYWRpbmdaZXJvICgpIHtcbiAgICBsZXQgemVyb0NvdW50XG4gICAgZm9yICh6ZXJvQ291bnQgPSAwOyB6ZXJvQ291bnQgPCB0aGlzLl9jdXJyZW50V29yZEJpdHNMZWZ0OyB6ZXJvQ291bnQrKykge1xuICAgICAgaWYgKCh0aGlzLl9jdXJyZW50V29yZCAmICgweDgwMDAwMDAwID4+PiB6ZXJvQ291bnQpKSAhPT0gMCkge1xuICAgICAgICB0aGlzLl9jdXJyZW50V29yZCA8PD0gemVyb0NvdW50XG4gICAgICAgIHRoaXMuX2N1cnJlbnRXb3JkQml0c0xlZnQgLT0gemVyb0NvdW50XG4gICAgICAgIHJldHVybiB6ZXJvQ291bnRcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fZmlsbEN1cnJlbnRXb3JkKClcbiAgICByZXR1cm4gemVyb0NvdW50ICsgdGhpcy5fc2tpcExlYWRpbmdaZXJvKClcbiAgfVxuXG4gIHJlYWRVRUcgKCkgeyAvLyB1bnNpZ25lZCBleHBvbmVudGlhbCBnb2xvbWJcbiAgICBsZXQgbGVhZGluZ1plcm9zID0gdGhpcy5fc2tpcExlYWRpbmdaZXJvKClcbiAgICByZXR1cm4gdGhpcy5yZWFkQml0cyhsZWFkaW5nWmVyb3MgKyAxKSAtIDFcbiAgfVxuXG4gIHJlYWRTRUcgKCkgeyAvLyBzaWduZWQgZXhwb25lbnRpYWwgZ29sb21iXG4gICAgbGV0IHZhbHVlID0gdGhpcy5yZWFkVUVHKClcbiAgICBpZiAodmFsdWUgJiAweDAxKSB7XG4gICAgICByZXR1cm4gKHZhbHVlICsgMSkgPj4+IDFcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIC0xICogKHZhbHVlID4+PiAxKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHb2xvbWJcbiIsImltcG9ydCBTcHNQYXJzZXIgZnJvbSAnLi9zcHMnO1xuY2xhc3MgTmFsdW5pdCB7XG4gIHN0YXRpYyBnZXROYWx1bml0cyAoYnVmZmVyKSB7XG4gICAgaWYgKGJ1ZmZlci5sZW5ndGggLSBidWZmZXIucG9zaXRpb24gPCA0KSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgbGV0IGJ1ZiA9IGJ1ZmZlci5kYXRhdmlldztcbiAgICBsZXQgcG9zaXRpb24gPSBidWZmZXIucG9zaXRpb247XG4gICAgaWYgKGJ1Zi5nZXRJbnQzMihwb3NpdGlvbikgPT09IDEgfHxcbiAgICAoYnVmLmdldEludDE2KHBvc2l0aW9uKSA9PT0gMCAmJiBidWYuZ2V0SW50OChwb3NpdGlvbiArIDIpID09PSAxKSkge1xuICAgICAgcmV0dXJuIE5hbHVuaXQuZ2V0QW5uZXhiTmFscyhidWZmZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTmFsdW5pdC5nZXRBdmNjTmFscyhidWZmZXIpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRBbm5leGJOYWxzIChidWZmZXIpIHtcbiAgICBsZXQgbmFscyA9IFtdO1xuICAgIGxldCBwb3NpdGlvbiA9IE5hbHVuaXQuZ2V0SGVhZGVyUG9zaXRpb25Bbm5leEIoYnVmZmVyKTtcbiAgICBsZXQgc3RhcnQgPSBwb3NpdGlvbi5wb3M7XG4gICAgbGV0IGVuZCA9IHN0YXJ0O1xuICAgIHdoaWxlIChzdGFydCA8IGJ1ZmZlci5sZW5ndGggLSA0KSB7XG4gICAgICBsZXQgaGVhZGVyID0gYnVmZmVyLmJ1ZmZlci5zbGljZShzdGFydCwgc3RhcnQgKyBwb3NpdGlvbi5oZWFkZXJMZW5ndGgpO1xuICAgICAgaWYgKHBvc2l0aW9uLnBvcyA9PT0gYnVmZmVyLnBvc2l0aW9uKSB7XG4gICAgICAgIGJ1ZmZlci5za2lwKHBvc2l0aW9uLmhlYWRlckxlbmd0aCk7XG4gICAgICB9XG4gICAgICBwb3NpdGlvbiA9IE5hbHVuaXQuZ2V0SGVhZGVyUG9zaXRpb25Bbm5leEIoYnVmZmVyKTtcbiAgICAgIGVuZCA9IHBvc2l0aW9uLnBvcztcbiAgICAgIGxldCBib2R5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyLmJ1ZmZlci5zbGljZShzdGFydCArIGhlYWRlci5ieXRlTGVuZ3RoLCBlbmQpKTtcbiAgICAgIGxldCB1bml0ID0ge2hlYWRlciwgYm9keX07XG4gICAgICBOYWx1bml0LmFuYWx5c2VOYWwodW5pdCk7XG4gICAgICBuYWxzLnB1c2godW5pdCk7XG4gICAgICBidWZmZXIuc2tpcChlbmQgLSBidWZmZXIucG9zaXRpb24pO1xuICAgICAgc3RhcnQgPSBlbmQ7XG4gICAgfVxuICAgIHJldHVybiBuYWxzO1xuICB9XG5cbiAgc3RhdGljIGdldEF2Y2NOYWxzIChidWZmZXIpIHtcbiAgICBsZXQgbmFscyA9IFtdO1xuICAgIHdoaWxlIChidWZmZXIucG9zaXRpb24gPCBidWZmZXIubGVuZ3RoIC0gNCkge1xuICAgICAgbGV0IGxlbmd0aCA9IGJ1ZmZlci5kYXRhdmlldy5nZXRJbnQzMihidWZmZXIucG9zaXRpb24pO1xuICAgICAgaWYgKGJ1ZmZlci5sZW5ndGggLSBidWZmZXIucG9zaXRpb24gPj0gbGVuZ3RoKSB7XG4gICAgICAgIGxldCBoZWFkZXIgPSBidWZmZXIuYnVmZmVyLnNsaWNlKGJ1ZmZlci5wb3NpdGlvbiwgYnVmZmVyLnBvc2l0aW9uICsgNCk7XG4gICAgICAgIGJ1ZmZlci5za2lwKDQpXG4gICAgICAgIGxldCBib2R5ID0gYnVmZmVyLmJ1ZmZlci5zbGljZShidWZmZXIucG9zaXRpb24sIGJ1ZmZlci5wb3NpdGlvbiArIGxlbmd0aCk7XG4gICAgICAgIGJ1ZmZlci5za2lwKGxlbmd0aCk7XG4gICAgICAgIGxldCB1bml0ID0ge2hlYWRlciwgYm9keX07XG4gICAgICAgIE5hbHVuaXQuYW5hbHlzZU5hbCh1bml0KTtcbiAgICAgICAgbmFscy5wdXNoKHVuaXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuYWxzO1xuICB9XG5cbiAgc3RhdGljIGFuYWx5c2VOYWwgKHVuaXQpIHtcbiAgICBsZXQgdHlwZSA9IHVuaXQuYm9keVswXSAmIDB4MWY7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIC8vIE5EUlxuICAgICAgICB1bml0Lm5kciA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICAvLyBJRFJcbiAgICAgICAgdW5pdC5pZHIgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgLy8gU0VJXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA3OlxuICAgICAgICAvLyBTUFNcbiAgICAgICAgdW5pdC5zcHMgPSBTcHNQYXJzZXIucGFyc2VTUFModW5pdC5ib2R5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDg6XG4gICAgICAgIC8vIFBQU1xuICAgICAgICB1bml0LnBwcyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA5OlxuICAgICAgICAvLyBBVURcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0SGVhZGVyUG9zaXRpb25Bbm5leEIgKGJ1ZmZlcikge1xuICAgIC8vIHNlcGVyYXRlXG4gICAgbGV0IHBvcyA9IGJ1ZmZlci5wb3NpdGlvbjtcbiAgICBsZXQgaGVhZGVyTGVuZ3RoID0gMDtcbiAgICB3aGlsZSAoaGVhZGVyTGVuZ3RoICE9PSAzICYmIGhlYWRlckxlbmd0aCAhPT0gNCAmJiBwb3MgPCBidWZmZXIubGVuZ3RoIC0gNCkge1xuICAgICAgaWYgKGJ1ZmZlci5kYXRhdmlldy5nZXRJbnQxNihwb3MpID09PSAwKSB7XG4gICAgICAgIGlmIChidWZmZXIuZGF0YXZpZXcuZ2V0SW50MTYocG9zICsgMikgPT09IDEpIHtcbiAgICAgICAgICAvLyAweDAwMDAwMVxuICAgICAgICAgIGhlYWRlckxlbmd0aCA9IDQ7XG4gICAgICAgIH0gZWxzZSBpZiAoYnVmZmVyLmRhdGF2aWV3LmdldEludDgocG9zICsgMikgPT09IDEpIHtcbiAgICAgICAgICBoZWFkZXJMZW5ndGggPSAzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBvcysrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3MrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocG9zID09PSBidWZmZXIubGVuZ3RoIC0gNCkge1xuICAgICAgaWYgKGJ1ZmZlci5kYXRhdmlldy5nZXRJbnQxNihwb3MpID09PSAwKSB7XG4gICAgICAgIGlmIChidWZmZXIuZGF0YXZpZXcuZ2V0SW50MTYocG9zICsgMikgPT09IDEpIHtcbiAgICAgICAgICAvLyAweDAwMDAwMVxuICAgICAgICAgIGhlYWRlckxlbmd0aCA9IDQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvcysrO1xuICAgICAgICBpZiAoYnVmZmVyLmRhdGF2aWV3LmdldEludDE2KHBvcykgPT09IDAgJiYgYnVmZmVyLmRhdGF2aWV3LmdldEludDgocG9zKSA9PT0gMSkge1xuICAgICAgICAgIC8vIDB4MDAwMDAwMVxuICAgICAgICAgIGhlYWRlckxlbmd0aCA9IDM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcG9zID0gYnVmZmVyLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge3BvcywgaGVhZGVyTGVuZ3RofTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRBdmNjIChzcHMsIHBwcykge1xuICAgIGxldCByZXQgPSBuZXcgVWludDhBcnJheShzcHMuYnl0ZUxlbmd0aCArIHBwcy5ieXRlTGVuZ3RoICsgMTEpO1xuICAgIHJldFswXSA9IDB4MDE7XG4gICAgcmV0WzFdID0gc3BzWzFdO1xuICAgIHJldFsyXSA9IHNwc1syXTtcbiAgICByZXRbM10gPSBzcHNbM107XG4gICAgcmV0WzRdID0gMjU1O1xuICAgIHJldFs1XSA9IDIyNTtcblxuICAgIGxldCBvZmZzZXQgPSA2O1xuXG4gICAgcmV0LnNldChuZXcgVWludDhBcnJheShbKHNwcy5ieXRlTGVuZ3RoID4+PiA4KSAmIDB4ZmYsIHNwcy5ieXRlTGVuZ3RoICYgMHhmZl0pLCBvZmZzZXQpO1xuICAgIG9mZnNldCArPSAyO1xuICAgIHJldC5zZXQoc3BzLCBvZmZzZXQpO1xuICAgIG9mZnNldCArPSBzcHMuYnl0ZUxlbmd0aDtcblxuICAgIHJldFtvZmZzZXRdID0gMTtcbiAgICBvZmZzZXQrKztcblxuICAgIHJldC5zZXQobmV3IFVpbnQ4QXJyYXkoWyhwcHMuYnl0ZUxlbmd0aCA+Pj4gOCkgJiAweGZmLCBwcHMuYnl0ZUxlbmd0aCAmIDB4ZmZdKSwgb2Zmc2V0KTtcbiAgICBvZmZzZXQgKz0gMjtcbiAgICByZXQuc2V0KHBwcywgb2Zmc2V0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hbHVuaXQ7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgICovXG4vKiBlc2xpbnQtZGlzYWJsZSBvbmUtdmFyICAqL1xuaW1wb3J0IEdvbG9tYiBmcm9tICcuL2dvbG9tYidcblxuY2xhc3MgU1BTUGFyc2VyIHtcbiAgc3RhdGljIF9lYnNwMnJic3AgKHVpbnQ4YXJyYXkpIHtcbiAgICBsZXQgc3JjID0gdWludDhhcnJheVxuICAgIGxldCBzcmNMZW5ndGggPSBzcmMuYnl0ZUxlbmd0aFxuICAgIGxldCBkc3QgPSBuZXcgVWludDhBcnJheShzcmNMZW5ndGgpXG4gICAgbGV0IGRzdElkeCA9IDBcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpID49IDIpIHtcbiAgICAgICAgaWYgKHNyY1tpXSA9PT0gMHgwMyAmJiBzcmNbaSAtIDFdID09PSAweDAwICYmIHNyY1tpIC0gMl0gPT09IDB4MDApIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkc3RbZHN0SWR4XSA9IHNyY1tpXVxuICAgICAgZHN0SWR4KytcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZHN0LmJ1ZmZlciwgMCwgZHN0SWR4KVxuICB9XG5cbiAgc3RhdGljIHBhcnNlU1BTICh1aW50OGFycmF5KSB7XG4gICAgbGV0IHJic3AgPSBTUFNQYXJzZXIuX2Vic3AycmJzcCh1aW50OGFycmF5KVxuICAgIGxldCBnYiA9IG5ldyBHb2xvbWIocmJzcClcblxuICAgIGdiLnJlYWRCeXRlKClcbiAgICBsZXQgcHJvZmlsZUlkYyA9IGdiLnJlYWRCeXRlKClcbiAgICBnYi5yZWFkQnl0ZSgpXG4gICAgbGV0IGxldmVsSWRjID0gZ2IucmVhZEJ5dGUoKVxuICAgIGdiLnJlYWRVRUcoKVxuXG4gICAgbGV0IHByb2ZpbGVfc3RyaW5nID0gU1BTUGFyc2VyLmdldFByb2ZpbGVTdHJpbmcocHJvZmlsZUlkYylcbiAgICBsZXQgbGV2ZWxfc3RyaW5nID0gU1BTUGFyc2VyLmdldExldmVsU3RyaW5nKGxldmVsSWRjKVxuICAgIGxldCBjaHJvbWFfZm9ybWF0X2lkYyA9IDFcbiAgICBsZXQgY2hyb21hX2Zvcm1hdCA9IDQyMFxuICAgIGxldCBjaHJvbWFfZm9ybWF0X3RhYmxlID0gWzAsIDQyMCwgNDIyLCA0NDRdXG4gICAgbGV0IGJpdF9kZXB0aCA9IDhcblxuICAgIGlmIChwcm9maWxlSWRjID09PSAxMDAgfHwgcHJvZmlsZUlkYyA9PT0gMTEwIHx8IHByb2ZpbGVJZGMgPT09IDEyMiB8fFxuICAgICAgcHJvZmlsZUlkYyA9PT0gMjQ0IHx8IHByb2ZpbGVJZGMgPT09IDQ0IHx8IHByb2ZpbGVJZGMgPT09IDgzIHx8XG4gICAgICBwcm9maWxlSWRjID09PSA4NiB8fCBwcm9maWxlSWRjID09PSAxMTggfHwgcHJvZmlsZUlkYyA9PT0gMTI4IHx8XG4gICAgICBwcm9maWxlSWRjID09PSAxMzggfHwgcHJvZmlsZUlkYyA9PT0gMTQ0KSB7XG4gICAgICBjaHJvbWFfZm9ybWF0X2lkYyA9IGdiLnJlYWRVRUcoKVxuICAgICAgaWYgKGNocm9tYV9mb3JtYXRfaWRjID09PSAzKSB7XG4gICAgICAgIGdiLnJlYWRCaXRzKDEpXG4gICAgICB9XG4gICAgICBpZiAoY2hyb21hX2Zvcm1hdF9pZGMgPD0gMykge1xuICAgICAgICBjaHJvbWFfZm9ybWF0ID0gY2hyb21hX2Zvcm1hdF90YWJsZVtjaHJvbWFfZm9ybWF0X2lkY11cbiAgICAgIH1cblxuICAgICAgYml0X2RlcHRoID0gZ2IucmVhZFVFRygpICsgOFxuICAgICAgZ2IucmVhZFVFRygpXG4gICAgICBnYi5yZWFkQml0cygxKVxuICAgICAgaWYgKGdiLnJlYWRCb29sKCkpIHtcbiAgICAgICAgbGV0IHNjYWxpbmdfbGlzdF9jb3VudCA9IChjaHJvbWFfZm9ybWF0X2lkYyAhPT0gMykgPyA4IDogMTJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY2FsaW5nX2xpc3RfY291bnQ7IGkrKykge1xuICAgICAgICAgIGlmIChnYi5yZWFkQm9vbCgpKSB7XG4gICAgICAgICAgICBpZiAoaSA8IDYpIHtcbiAgICAgICAgICAgICAgU1BTUGFyc2VyLl9za2lwU2NhbGluZ0xpc3QoZ2IsIDE2KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgU1BTUGFyc2VyLl9za2lwU2NhbGluZ0xpc3QoZ2IsIDY0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBnYi5yZWFkVUVHKClcbiAgICBsZXQgcGljX29yZGVyX2NudF90eXBlID0gZ2IucmVhZFVFRygpXG4gICAgaWYgKHBpY19vcmRlcl9jbnRfdHlwZSA9PT0gMCkge1xuICAgICAgZ2IucmVhZFVFRygpXG4gICAgfSBlbHNlIGlmIChwaWNfb3JkZXJfY250X3R5cGUgPT09IDEpIHtcbiAgICAgIGdiLnJlYWRCaXRzKDEpXG4gICAgICBnYi5yZWFkU0VHKClcbiAgICAgIGdiLnJlYWRTRUcoKVxuICAgICAgbGV0IG51bV9yZWZfZnJhbWVzX2luX3BpY19vcmRlcl9jbnRfY3ljbGUgPSBnYi5yZWFkVUVHKClcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtX3JlZl9mcmFtZXNfaW5fcGljX29yZGVyX2NudF9jeWNsZTsgaSsrKSB7XG4gICAgICAgIGdiLnJlYWRTRUcoKVxuICAgICAgfVxuICAgIH1cbiAgICBnYi5yZWFkVUVHKClcbiAgICBnYi5yZWFkQml0cygxKVxuXG4gICAgbGV0IHBpY193aWR0aF9pbl9tYnNfbWludXMxID0gZ2IucmVhZFVFRygpXG4gICAgbGV0IHBpY19oZWlnaHRfaW5fbWFwX3VuaXRzX21pbnVzMSA9IGdiLnJlYWRVRUcoKVxuXG4gICAgbGV0IGZyYW1lX21ic19vbmx5X2ZsYWcgPSBnYi5yZWFkQml0cygxKVxuICAgIGlmIChmcmFtZV9tYnNfb25seV9mbGFnID09PSAwKSB7XG4gICAgICBnYi5yZWFkQml0cygxKVxuICAgIH1cbiAgICBnYi5yZWFkQml0cygxKVxuXG4gICAgbGV0IGZyYW1lX2Nyb3BfbGVmdF9vZmZzZXQgPSAwXG4gICAgbGV0IGZyYW1lX2Nyb3BfcmlnaHRfb2Zmc2V0ID0gMFxuICAgIGxldCBmcmFtZV9jcm9wX3RvcF9vZmZzZXQgPSAwXG4gICAgbGV0IGZyYW1lX2Nyb3BfYm90dG9tX29mZnNldCA9IDBcblxuICAgIGxldCBmcmFtZV9jcm9wcGluZ19mbGFnID0gZ2IucmVhZEJvb2woKVxuICAgIGlmIChmcmFtZV9jcm9wcGluZ19mbGFnKSB7XG4gICAgICBmcmFtZV9jcm9wX2xlZnRfb2Zmc2V0ID0gZ2IucmVhZFVFRygpXG4gICAgICBmcmFtZV9jcm9wX3JpZ2h0X29mZnNldCA9IGdiLnJlYWRVRUcoKVxuICAgICAgZnJhbWVfY3JvcF90b3Bfb2Zmc2V0ID0gZ2IucmVhZFVFRygpXG4gICAgICBmcmFtZV9jcm9wX2JvdHRvbV9vZmZzZXQgPSBnYi5yZWFkVUVHKClcbiAgICB9XG5cbiAgICBsZXQgcGFyX3dpZHRoID0gMSwgcGFyX2hlaWdodCA9IDFcbiAgICBsZXQgZnBzID0gMCwgZnBzX2ZpeGVkID0gdHJ1ZSwgZnBzX251bSA9IDAsIGZwc19kZW4gPSAwXG5cbiAgICBsZXQgdnVpX3BhcmFtZXRlcnNfcHJlc2VudF9mbGFnID0gZ2IucmVhZEJvb2woKVxuICAgIGlmICh2dWlfcGFyYW1ldGVyc19wcmVzZW50X2ZsYWcpIHtcbiAgICAgIGlmIChnYi5yZWFkQm9vbCgpKSB7IC8vIGFzcGVjdF9yYXRpb19pbmZvX3ByZXNlbnRfZmxhZ1xuICAgICAgICBsZXQgYXNwZWN0X3JhdGlvX2lkYyA9IGdiLnJlYWRCeXRlKClcbiAgICAgICAgbGV0IHBhcl93X3RhYmxlID0gWzEsIDEyLCAxMCwgMTYsIDQwLCAyNCwgMjAsIDMyLCA4MCwgMTgsIDE1LCA2NCwgMTYwLCA0LCAzLCAyXVxuICAgICAgICBsZXQgcGFyX2hfdGFibGUgPSBbMSwgMTEsIDExLCAxMSwgMzMsIDExLCAxMSwgMTEsIDMzLCAxMSwgMTEsIDMzLCA5OSwgMywgMiwgMV1cblxuICAgICAgICBpZiAoYXNwZWN0X3JhdGlvX2lkYyA+IDAgJiYgYXNwZWN0X3JhdGlvX2lkYyA8IDE2KSB7XG4gICAgICAgICAgcGFyX3dpZHRoID0gcGFyX3dfdGFibGVbYXNwZWN0X3JhdGlvX2lkYyAtIDFdXG4gICAgICAgICAgcGFyX2hlaWdodCA9IHBhcl9oX3RhYmxlW2FzcGVjdF9yYXRpb19pZGMgLSAxXVxuICAgICAgICB9IGVsc2UgaWYgKGFzcGVjdF9yYXRpb19pZGMgPT09IDI1NSkge1xuICAgICAgICAgIHBhcl93aWR0aCA9IGdiLnJlYWRCeXRlKCkgPDwgOCB8IGdiLnJlYWRCeXRlKClcbiAgICAgICAgICBwYXJfaGVpZ2h0ID0gZ2IucmVhZEJ5dGUoKSA8PCA4IHwgZ2IucmVhZEJ5dGUoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChnYi5yZWFkQm9vbCgpKSB7XG4gICAgICAgIGdiLnJlYWRCb29sKClcbiAgICAgIH1cbiAgICAgIGlmIChnYi5yZWFkQm9vbCgpKSB7XG4gICAgICAgIGdiLnJlYWRCaXRzKDQpXG4gICAgICAgIGlmIChnYi5yZWFkQm9vbCgpKSB7XG4gICAgICAgICAgZ2IucmVhZEJpdHMoMjQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChnYi5yZWFkQm9vbCgpKSB7XG4gICAgICAgIGdiLnJlYWRVRUcoKVxuICAgICAgICBnYi5yZWFkVUVHKClcbiAgICAgIH1cbiAgICAgIGlmIChnYi5yZWFkQm9vbCgpKSB7XG4gICAgICAgIGxldCBudW1fdW5pdHNfaW5fdGljayA9IGdiLnJlYWRCaXRzKDMyKVxuICAgICAgICBsZXQgdGltZV9zY2FsZSA9IGdiLnJlYWRCaXRzKDMyKVxuICAgICAgICBmcHNfZml4ZWQgPSBnYi5yZWFkQm9vbCgpXG5cbiAgICAgICAgZnBzX251bSA9IHRpbWVfc2NhbGVcbiAgICAgICAgZnBzX2RlbiA9IG51bV91bml0c19pbl90aWNrICogMlxuICAgICAgICBmcHMgPSBmcHNfbnVtIC8gZnBzX2RlblxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBwYXJTY2FsZSA9IDFcbiAgICBpZiAocGFyX3dpZHRoICE9PSAxIHx8IHBhcl9oZWlnaHQgIT09IDEpIHtcbiAgICAgIHBhclNjYWxlID0gcGFyX3dpZHRoIC8gcGFyX2hlaWdodFxuICAgIH1cblxuICAgIGxldCBjcm9wX3VuaXRfeCA9IDAsIGNyb3BfdW5pdF95ID0gMFxuICAgIGlmIChjaHJvbWFfZm9ybWF0X2lkYyA9PT0gMCkge1xuICAgICAgY3JvcF91bml0X3ggPSAxXG4gICAgICBjcm9wX3VuaXRfeSA9IDIgLSBmcmFtZV9tYnNfb25seV9mbGFnXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzdWJfd2MgPSAoY2hyb21hX2Zvcm1hdF9pZGMgPT09IDMpID8gMSA6IDJcbiAgICAgIGxldCBzdWJfaGMgPSAoY2hyb21hX2Zvcm1hdF9pZGMgPT09IDEpID8gMiA6IDFcbiAgICAgIGNyb3BfdW5pdF94ID0gc3ViX3djXG4gICAgICBjcm9wX3VuaXRfeSA9IHN1Yl9oYyAqICgyIC0gZnJhbWVfbWJzX29ubHlfZmxhZylcbiAgICB9XG5cbiAgICBsZXQgY29kZWNfd2lkdGggPSAocGljX3dpZHRoX2luX21ic19taW51czEgKyAxKSAqIDE2XG4gICAgbGV0IGNvZGVjX2hlaWdodCA9ICgyIC0gZnJhbWVfbWJzX29ubHlfZmxhZykgKiAoKHBpY19oZWlnaHRfaW5fbWFwX3VuaXRzX21pbnVzMSArIDEpICogMTYpXG5cbiAgICBjb2RlY193aWR0aCAtPSAoZnJhbWVfY3JvcF9sZWZ0X29mZnNldCArIGZyYW1lX2Nyb3BfcmlnaHRfb2Zmc2V0KSAqIGNyb3BfdW5pdF94XG4gICAgY29kZWNfaGVpZ2h0IC09IChmcmFtZV9jcm9wX3RvcF9vZmZzZXQgKyBmcmFtZV9jcm9wX2JvdHRvbV9vZmZzZXQpICogY3JvcF91bml0X3lcblxuICAgIGxldCBwcmVzZW50X3dpZHRoID0gTWF0aC5jZWlsKGNvZGVjX3dpZHRoICogcGFyU2NhbGUpXG5cbiAgICBnYi5kZXN0cm95KClcbiAgICBnYiA9IG51bGxcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9maWxlX3N0cmluZzogcHJvZmlsZV9zdHJpbmcsXG4gICAgICBsZXZlbF9zdHJpbmc6IGxldmVsX3N0cmluZyxcbiAgICAgIGJpdF9kZXB0aDogYml0X2RlcHRoLFxuICAgICAgY2hyb21hX2Zvcm1hdDogY2hyb21hX2Zvcm1hdCxcbiAgICAgIGNocm9tYV9mb3JtYXRfc3RyaW5nOiBTUFNQYXJzZXIuZ2V0Q2hyb21hRm9ybWF0U3RyaW5nKGNocm9tYV9mb3JtYXQpLFxuXG4gICAgICBmcmFtZV9yYXRlOiB7XG4gICAgICAgIGZpeGVkOiBmcHNfZml4ZWQsXG4gICAgICAgIGZwczogZnBzLFxuICAgICAgICBmcHNfZGVuOiBmcHNfZGVuLFxuICAgICAgICBmcHNfbnVtOiBmcHNfbnVtXG4gICAgICB9LFxuXG4gICAgICBwYXJfcmF0aW86IHtcbiAgICAgICAgd2lkdGg6IHBhcl93aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwYXJfaGVpZ2h0XG4gICAgICB9LFxuXG4gICAgICBjb2RlY19zaXplOiB7XG4gICAgICAgIHdpZHRoOiBjb2RlY193aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjb2RlY19oZWlnaHRcbiAgICAgIH0sXG5cbiAgICAgIHByZXNlbnRfc2l6ZToge1xuICAgICAgICB3aWR0aDogcHJlc2VudF93aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjb2RlY19oZWlnaHRcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgX3NraXBTY2FsaW5nTGlzdCAoZ2IsIGNvdW50KSB7XG4gICAgbGV0IGxhc3Rfc2NhbGUgPSA4LCBuZXh0X3NjYWxlID0gOFxuICAgIGxldCBkZWx0YV9zY2FsZSA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgIGlmIChuZXh0X3NjYWxlICE9PSAwKSB7XG4gICAgICAgIGRlbHRhX3NjYWxlID0gZ2IucmVhZFNFRygpXG4gICAgICAgIG5leHRfc2NhbGUgPSAobGFzdF9zY2FsZSArIGRlbHRhX3NjYWxlICsgMjU2KSAlIDI1NlxuICAgICAgfVxuICAgICAgbGFzdF9zY2FsZSA9IChuZXh0X3NjYWxlID09PSAwKSA/IGxhc3Rfc2NhbGUgOiBuZXh0X3NjYWxlXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldFByb2ZpbGVTdHJpbmcgKHByb2ZpbGVJZGMpIHtcbiAgICBzd2l0Y2ggKHByb2ZpbGVJZGMpIHtcbiAgICAgIGNhc2UgNjY6XG4gICAgICAgIHJldHVybiAnQmFzZWxpbmUnXG4gICAgICBjYXNlIDc3OlxuICAgICAgICByZXR1cm4gJ01haW4nXG4gICAgICBjYXNlIDg4OlxuICAgICAgICByZXR1cm4gJ0V4dGVuZGVkJ1xuICAgICAgY2FzZSAxMDA6XG4gICAgICAgIHJldHVybiAnSGlnaCdcbiAgICAgIGNhc2UgMTEwOlxuICAgICAgICByZXR1cm4gJ0hpZ2gxMCdcbiAgICAgIGNhc2UgMTIyOlxuICAgICAgICByZXR1cm4gJ0hpZ2g0MjInXG4gICAgICBjYXNlIDI0NDpcbiAgICAgICAgcmV0dXJuICdIaWdoNDQ0J1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdVbmtub3duJ1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRMZXZlbFN0cmluZyAobGV2ZWxJZGMpIHtcbiAgICByZXR1cm4gKGxldmVsSWRjIC8gMTApLnRvRml4ZWQoMSlcbiAgfVxuXG4gIHN0YXRpYyBnZXRDaHJvbWFGb3JtYXRTdHJpbmcgKGNocm9tYSkge1xuICAgIHN3aXRjaCAoY2hyb21hKSB7XG4gICAgICBjYXNlIDQyMDpcbiAgICAgICAgcmV0dXJuICc0OjI6MCdcbiAgICAgIGNhc2UgNDIyOlxuICAgICAgICByZXR1cm4gJzQ6MjoyJ1xuICAgICAgY2FzZSA0NDQ6XG4gICAgICAgIHJldHVybiAnNDo0OjQnXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ1Vua25vd24nXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHRvVmlkZW9NZXRhIChzcHNDb25maWcpIHtcbiAgICBsZXQgbWV0YSA9IHt9XG4gICAgaWYgKHNwc0NvbmZpZyAmJiBzcHNDb25maWcuY29kZWNfc2l6ZSkge1xuICAgICAgbWV0YS5jb2RlY1dpZHRoID0gc3BzQ29uZmlnLmNvZGVjX3NpemUud2lkdGhcbiAgICAgIG1ldGEuY29kZWNIZWlnaHQgPSBzcHNDb25maWcuY29kZWNfc2l6ZS5oZWlnaHRcbiAgICAgIG1ldGEucHJlc2VudFdpZHRoID0gc3BzQ29uZmlnLnByZXNlbnRfc2l6ZS53aWR0aFxuICAgICAgbWV0YS5wcmVzZW50SGVpZ2h0ID0gc3BzQ29uZmlnLnByZXNlbnRfc2l6ZS5oZWlnaHRcbiAgICB9XG5cbiAgICBtZXRhLnByb2ZpbGUgPSBzcHNDb25maWcucHJvZmlsZV9zdHJpbmdcbiAgICBtZXRhLmxldmVsID0gc3BzQ29uZmlnLmxldmVsX3N0cmluZ1xuICAgIG1ldGEuYml0RGVwdGggPSBzcHNDb25maWcuYml0X2RlcHRoXG4gICAgbWV0YS5jaHJvbWFGb3JtYXQgPSBzcHNDb25maWcuY2hyb21hX2Zvcm1hdFxuXG4gICAgbWV0YS5wYXJSYXRpbyA9IHtcbiAgICAgIHdpZHRoOiBzcHNDb25maWcucGFyX3JhdGlvLndpZHRoLFxuICAgICAgaGVpZ2h0OiBzcHNDb25maWcucGFyX3JhdGlvLmhlaWdodFxuICAgIH1cblxuICAgIG1ldGEuZnJhbWVSYXRlID0gc3BzQ29uZmlnLmZyYW1lX3JhdGVcblxuICAgIGxldCBmcHNEZW4gPSBtZXRhLmZyYW1lUmF0ZS5mcHNfZGVuXG4gICAgbGV0IGZwc051bSA9IG1ldGEuZnJhbWVSYXRlLmZwc19udW1cbiAgICBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uID0gTWF0aC5mbG9vcihtZXRhLnRpbWVzY2FsZSAqIChmcHNEZW4gLyBmcHNOdW0pKVxuICAgIHJldHVybiBtZXRhO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNQU1BhcnNlclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIEhMU1xuICBNM1U4UGFyc2VyOiByZXF1aXJlKCcuL3NyYy9obHMvZGVtdXhlci9tM3U4cGFyc2VyJykuZGVmYXVsdCxcbiAgVHNEZW11eGVyOiByZXF1aXJlKCcuL3NyYy9obHMvZGVtdXhlci90cycpLmRlZmF1bHQsXG4gIFBsYXlsaXN0OiByZXF1aXJlKCcuL3NyYy9obHMvcGxheWxpc3QnKS5kZWZhdWx0LFxuICBGbHZEZW11eGVyOiByZXF1aXJlKCcuL3NyYy9mbHYvaW5kZXgnKS5kZWZhdWx0XG59O1xuIiwiaW1wb3J0IHsgaXNMZSwgVVRGOCB9IGZyb20gJ3hncGxheWVyLXV0aWxzJ1xuXG5jb25zdCBEQVRBX1RZUEVTID0ge1xuICBOVU1CRVI6IDAsXG4gIEJPT0xFQU46IDEsXG4gIFNUUklORzogMixcbiAgT0JKRUNUOiAzLFxuICBNSVhfQVJSQVk6IDgsXG4gIE9CSkVDVF9FTkQ6IDksXG4gIFNUUklDVF9BUlJBWTogMTAsXG4gIERBVEU6IDExLFxuICBMT05FX1NUUklORzogMTJcbn1cblxuLyoqXG4gKiBtZXRh5L+h5oGv6Kej5p6QXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFNRlBhcnNlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLm9mZnNldCA9IDBcbiAgICB0aGlzLnJlYWRPZmZzZXQgPSB0aGlzLm9mZnNldFxuICB9XG5cbiAgcmVzb2x2ZSAobWV0YSwgc2l6ZSkge1xuICAgIGlmIChzaXplIDwgMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3QgZW5vdWdoIGRhdGEgZm9yIG1ldGFpbmZvJylcbiAgICB9XG4gICAgY29uc3QgbWV0YURhdGEgPSB7fVxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLnBhcnNlVmFsdWUobWV0YSlcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMucGFyc2VWYWx1ZShtZXRhLCBzaXplIC0gbmFtZS5ib2R5U2l6ZSlcbiAgICBtZXRhRGF0YVtuYW1lLmRhdGFdID0gdmFsdWUuZGF0YVxuXG4gICAgdGhpcy5yZXNldFN0YXR1cygpXG4gICAgcmV0dXJuIG1ldGFEYXRhXG4gIH1cblxuICByZXNldFN0YXR1cyAoKSB7XG4gICAgdGhpcy5vZmZzZXQgPSAwXG4gICAgdGhpcy5yZWFkT2Zmc2V0ID0gdGhpcy5vZmZzZXRcbiAgfVxuXG4gIHBhcnNlU3RyaW5nIChidWZmZXIpIHtcbiAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldyhidWZmZXIsIHRoaXMucmVhZE9mZnNldClcbiAgICBjb25zdCBzdHJMZW4gPSBkdi5nZXRVaW50MTYoMCwgIWlzTGUpXG4gICAgbGV0IHN0ciA9ICcnXG4gICAgaWYgKHN0ckxlbiA+IDApIHtcbiAgICAgIHN0ciA9IFVURjguZGVjb2RlKG5ldyBVaW50OEFycmF5KGJ1ZmZlciwgdGhpcy5yZWFkT2Zmc2V0ICsgMiwgc3RyTGVuKSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gJydcbiAgICB9XG4gICAgbGV0IHNpemUgPSBzdHJMZW4gKyAyXG4gICAgdGhpcy5yZWFkT2Zmc2V0ICs9IHNpemVcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogc3RyLFxuICAgICAgYm9keVNpemU6IHN0ckxlbiArIDJcbiAgICB9XG4gIH1cblxuICBwYXJzZURhdGUgKGJ1ZmZlciwgc2l6ZSkge1xuICAgIGNvbnN0IGR2ID0gbmV3IERhdGFWaWV3KGJ1ZmZlciwgdGhpcy5yZWFkT2Zmc2V0LCBzaXplKVxuICAgIGxldCB0cyA9IGR2LmdldEZsb2F0NjQoMCwgIWlzTGUpXG4gICAgY29uc3QgdGltZU9mZnNldCA9IGR2LmdldEludDE2KDgsICFpc0xlKVxuICAgIHRzICs9IHRpbWVPZmZzZXQgKiA2MCAqIDEwMDBcblxuICAgIHRoaXMucmVhZE9mZnNldCArPSAxMFxuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBuZXcgRGF0ZSh0cyksXG4gICAgICBib2R5U2l6ZTogMTBcbiAgICB9XG4gIH1cblxuICBwYXJzZU9iamVjdCAoYnVmZmVyLCBzaXplKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMucGFyc2VTdHJpbmcoYnVmZmVyLCBzaXplKVxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKGJ1ZmZlciwgc2l6ZSAtIG5hbWUuYm9keVNpemUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogbmFtZS5kYXRhLFxuICAgICAgICB2YWx1ZTogdmFsdWUuZGF0YVxuICAgICAgfSxcbiAgICAgIGJvZHlTaXplOiBuYW1lLmJvZHlTaXplICsgdmFsdWUuYm9keVNpemUsXG4gICAgICBpc09iakVuZDogdmFsdWUuaXNPYmpFbmRcbiAgICB9XG4gIH1cblxuICBwYXJzZUxvbmdTdHJpbmcgKGJ1ZmZlcikge1xuICAgIGNvbnN0IGR2ID0gbmV3IERhdGFWaWV3KGJ1ZmZlciwgdGhpcy5yZWFkT2Zmc2V0KVxuICAgIGNvbnN0IHN0ckxlbiA9IGR2LmdldFVpbnQzMigwLCAhaXNMZSlcbiAgICBsZXQgc3RyID0gJydcbiAgICBpZiAoc3RyTGVuID4gMCkge1xuICAgICAgc3RyID0gVVRGOC5kZWNvZGUobmV3IFVpbnQ4QXJyYXkoYnVmZmVyLCB0aGlzLnJlYWRPZmZzZXQgKyAyLCBzdHJMZW4pKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSAnJ1xuICAgIH1cbiAgICAvLyBjb25zdCBzaXplID0gc3RyTGVuICsgNDtcbiAgICB0aGlzLnJlYWRPZmZzZXQgKz0gc3RyTGVuICsgNFxuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBzdHIsXG4gICAgICBib2R5U2l6ZTogc3RyTGVuICsgNFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDop6PmnpBtZXRh5Lit55qE5Y+Y6YePXG4gICAqL1xuICBwYXJzZVZhbHVlIChkYXRhLCBzaXplKSB7XG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcigpXG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgYnVmZmVyID0gZGF0YVxuICAgIH0gZWxzZSB7XG4gICAgICBidWZmZXIgPSBkYXRhLmJ1ZmZlclxuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBOVU1CRVIsXG4gICAgICBCT09MRUFOLFxuICAgICAgU1RSSU5HLFxuICAgICAgT0JKRUNULFxuICAgICAgTUlYX0FSUkFZLFxuICAgICAgT0JKRUNUX0VORCxcbiAgICAgIFNUUklDVF9BUlJBWSxcbiAgICAgIERBVEUsXG4gICAgICBMT05FX1NUUklOR1xuICAgIH0gPSBEQVRBX1RZUEVTXG4gICAgY29uc3QgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoYnVmZmVyLCB0aGlzLnJlYWRPZmZzZXQsIHNpemUpXG4gICAgbGV0IGlzT2JqRW5kID0gZmFsc2VcbiAgICBjb25zdCB0eXBlID0gZGF0YVZpZXcuZ2V0VWludDgoMClcbiAgICBsZXQgb2Zmc2V0ID0gMVxuICAgIHRoaXMucmVhZE9mZnNldCArPSAxXG4gICAgbGV0IHZhbHVlID0gbnVsbFxuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIE5VTUJFUjoge1xuICAgICAgICB2YWx1ZSA9IGRhdGFWaWV3LmdldEZsb2F0NjQoMSwgIWlzTGUpXG4gICAgICAgIHRoaXMucmVhZE9mZnNldCArPSA4XG4gICAgICAgIG9mZnNldCArPSA4XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlIEJPT0xFQU46IHtcbiAgICAgICAgY29uc3QgYm9vbE51bSA9IGRhdGFWaWV3LmdldFVpbnQ4KDEpXG4gICAgICAgIHZhbHVlID0gISFib29sTnVtXG4gICAgICAgIHRoaXMucmVhZE9mZnNldCArPSAxXG4gICAgICAgIG9mZnNldCArPSAxXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlIFNUUklORzoge1xuICAgICAgICBjb25zdCBzdHIgPSB0aGlzLnBhcnNlU3RyaW5nKGJ1ZmZlcilcbiAgICAgICAgdmFsdWUgPSBzdHIuZGF0YVxuICAgICAgICBvZmZzZXQgKz0gc3RyLmJvZHlTaXplXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlIE9CSkVDVDoge1xuICAgICAgICB2YWx1ZSA9IHt9XG4gICAgICAgIGxldCBvYmpFbmRTaXplID0gMFxuICAgICAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDMyKHNpemUgLSA0LCAhaXNMZSkgJiAweDAwRkZGRkZGKSB7XG4gICAgICAgICAgb2JqRW5kU2l6ZSA9IDNcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnJlYWRPZmZzZXQgKz0gb2Zmc2V0IC0gMTtcbiAgICAgICAgd2hpbGUgKG9mZnNldCA8IHNpemUgLSA0KSB7XG4gICAgICAgICAgY29uc3QgYW1mT2JqID0gdGhpcy5wYXJzZU9iamVjdChidWZmZXIsIHNpemUgLSBvZmZzZXQgLSBvYmpFbmRTaXplKVxuICAgICAgICAgIGlmIChhbWZPYmouaXNPYmplY3RFbmQpIHsgYnJlYWsgfVxuICAgICAgICAgIHZhbHVlW2FtZk9iai5kYXRhLm5hbWVdID0gYW1mT2JqLmRhdGEudmFsdWVcbiAgICAgICAgICBvZmZzZXQgKz0gYW1mT2JqLmJvZHlTaXplXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9mZnNldCA8PSBzaXplIC0gMykge1xuICAgICAgICAgIGNvbnN0IG1hcmsgPSBkYXRhVmlldy5nZXRVaW50MzIob2Zmc2V0IC0gMSwgIWlzTGUpICYgMHgwMEZGRkZGRlxuICAgICAgICAgIGlmIChtYXJrID09PSA5KSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gM1xuICAgICAgICAgICAgb2Zmc2V0ICs9IDNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgTUlYX0FSUkFZOiB7XG4gICAgICAgIHZhbHVlID0ge31cbiAgICAgICAgb2Zmc2V0ICs9IDRcbiAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ICs9IDRcbiAgICAgICAgbGV0IG9iakVuZFNpemUgPSAwXG4gICAgICAgIGlmICgoZGF0YVZpZXcuZ2V0VWludDMyKHNpemUgLSA0LCAhaXNMZSkgJiAweDAwRkZGRkZGKSA9PT0gOSkge1xuICAgICAgICAgIG9iakVuZFNpemUgPSAzXG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAob2Zmc2V0IDwgc2l6ZSAtIDgpIHtcbiAgICAgICAgICBjb25zdCBhbWZWYXIgPSB0aGlzLnBhcnNlT2JqZWN0KGJ1ZmZlciwgc2l6ZSAtIG9mZnNldCAtIG9iakVuZFNpemUpXG4gICAgICAgICAgaWYgKGFtZlZhci5pc09iamVjdEVuZCkgeyBicmVhayB9XG4gICAgICAgICAgdmFsdWVbYW1mVmFyLmRhdGEubmFtZV0gPSBhbWZWYXIuZGF0YS52YWx1ZVxuICAgICAgICAgIG9mZnNldCArPSBhbWZWYXIuYm9keVNpemVcbiAgICAgICAgfVxuICAgICAgICBpZiAob2Zmc2V0IDw9IHNpemUgLSAzKSB7XG4gICAgICAgICAgY29uc3QgbWFya2VyID0gZGF0YVZpZXcuZ2V0VWludDMyKG9mZnNldCAtIDEsICFpc0xlKSAmIDB4MDBGRkZGRkZcbiAgICAgICAgICBpZiAobWFya2VyID09PSA5KSB7XG4gICAgICAgICAgICBvZmZzZXQgKz0gM1xuICAgICAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ICs9IDNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY2FzZSBPQkpFQ1RfRU5EOiB7XG4gICAgICAgIHZhbHVlID0gbnVsbFxuICAgICAgICBpc09iakVuZCA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY2FzZSBTVFJJQ1RfQVJSQVk6IHtcbiAgICAgICAgdmFsdWUgPSBbXVxuICAgICAgICBjb25zdCBhcnJMZW5ndGggPSBkYXRhVmlldy5nZXRVaW50MzIoMSwgIWlzTGUpXG4gICAgICAgIG9mZnNldCArPSA0XG4gICAgICAgIHRoaXMucmVhZE9mZnNldCArPSA0XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBzY3JpcHQgPSB0aGlzLnBhcnNlVmFsdWUoYnVmZmVyLCBzaXplIC0gb2Zmc2V0KVxuICAgICAgICAgIHZhbHVlLnB1c2goc2NyaXB0LmRhdGEpXG4gICAgICAgICAgb2Zmc2V0ICs9IHNjcmlwdC5ib2R5U2l6ZVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGNhc2UgREFURToge1xuICAgICAgICBjb25zdCBkYXRlID0gdGhpcy5wYXJzZURhdGUoYnVmZmVyLCBzaXplIC0gMSlcbiAgICAgICAgdmFsdWUgPSBkYXRlLmRhdGFcbiAgICAgICAgb2Zmc2V0ICs9IGRhdGUuYm9keVNpemVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY2FzZSBMT05FX1NUUklORzoge1xuICAgICAgICBjb25zdCBsb25nU3RyID0gdGhpcy5wYXJzZUxvbmdTdHJpbmcoYnVmZmVyLCBzaXplIC0gMSlcbiAgICAgICAgdmFsdWUgPSBsb25nU3RyLmRhdGFcbiAgICAgICAgb2Zmc2V0ICs9IGxvbmdTdHIuYm9keVNpemVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBvZmZzZXQgPSBzaXplXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHZhbHVlLFxuICAgICAgYm9keVNpemU6IG9mZnNldCxcbiAgICAgIGlzT2JqRW5kOiBpc09iakVuZFxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgRVZFTlRTLCBBdWRpb1RyYWNrTWV0YSwgVmlkZW9UcmFja01ldGEsIHNuaWZmZXIgfSBmcm9tICd4Z3BsYXllci11dGlscyc7XG5pbXBvcnQgeyBTcHNQYXJzZXIgfSBmcm9tICd4Z3BsYXllci1jb2RlYyc7XG5pbXBvcnQgeyBWaWRlb1RyYWNrLCBBdWRpb1RyYWNrIH0gZnJvbSAneGdwbGF5ZXItYnVmZmVyJ1xuaW1wb3J0IEFNRlBhcnNlciBmcm9tICcuL2FtZi1wYXJzZXInXG5cbmNvbnN0IERFTVVYX0VWRU5UUyA9IEVWRU5UUy5ERU1VWF9FVkVOVFM7XG5cbmNsYXNzIEZsdkRlbXV4ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5fZmlyc3RGcmFnbWVudExvYWRlZCA9IGZhbHNlXG4gICAgdGhpcy5fdHJhY2tOdW0gPSAwXG4gICAgdGhpcy5faGFzU2NyaXB0ID0gZmFsc2VcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHRoaXMub24oREVNVVhfRVZFTlRTLkRFTVVYX1NUQVJULCB0aGlzLmRvUGFyc2VGbHYuYmluZCh0aGlzKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBpZiB0aGUgZmx2IGhlYWQgaXMgdmFsaWRcbiAgICogQHBhcmFtIGRhdGFcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgaXNGbHZGaWxlIChkYXRhKSB7XG4gICAgcmV0dXJuICEoZGF0YVswXSAhPT0gMHg0NiB8fCBkYXRhWzFdICE9PSAweDRDIHx8IGRhdGFbMl0gIT09IDB4NTYgfHwgZGF0YVszXSAhPT0gMHgwMSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB0aGUgc3RyZWFtIGhhcyBhdWRpbyBvciB2aWRlby5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0cmVhbUZsYWcgLSBEYXRhIGZyb20gdGhlIHN0cmVhbSB3aGljaCBpcyBkZWZpbmUgd2hldGhlciB0aGUgYXVkaW8gLyB2aWRlbyB0cmFjayBpcyBleGlzdC5cbiAgICovXG4gIHN0YXRpYyBnZXRQbGF5VHlwZSAoc3RyZWFtRmxhZykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIGhhc1ZpZGVvOiBmYWxzZSxcbiAgICAgIGhhc0F1ZGlvOiBmYWxzZVxuICAgIH1cblxuICAgIGlmIChzdHJlYW1GbGFnICYgMHgwMSA+IDApIHtcbiAgICAgIHJlc3VsdC5oYXNWaWRlbyA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAoc3RyZWFtRmxhZyAmIDB4MDQgPiAwKSB7XG4gICAgICByZXN1bHQuaGFzQXVkaW8gPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgZG9QYXJzZUZsdiAoKSB7XG4gICAgaWYgKCF0aGlzLl9maXJzdEZyYWdtZW50TG9hZGVkKSB7XG4gICAgICBpZiAodGhpcy5sb2FkZXJCdWZmZXIubGVuZ3RoIDwgMTMpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmxvYWRlckJ1ZmZlci5zaGlmdCgxMylcbiAgICAgIHRoaXMucGFyc2VGbHZIZWFkZXIoaGVhZGVyKVxuICAgICAgdGhpcy5kb1BhcnNlRmx2KCkgLy8g6YCS5b2S6LCD55So77yM57un57ut6Kej5p6QZmx25rWBXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmxvYWRlckJ1ZmZlci5sZW5ndGggPCAxMSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGxldCBjaHVuaztcblxuICAgICAgbGV0IGxvb3BNYXggPSAxMDAwMDAgLy8g6Ziy5q2i5q275b6q546v5Lqn55SfXG4gICAgICBkbyB7XG4gICAgICAgIGNodW5rID0gdGhpcy5fcGFyc2VGbHZUYWcoKVxuICAgICAgfSB3aGlsZSAoY2h1bmsgJiYgbG9vcE1heC0tID4gMClcblxuICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9DT01QTEVURSlcbiAgICB9XG4gIH1cblxuICBwYXJzZUZsdkhlYWRlciAoaGVhZGVyKSB7XG4gICAgaWYgKCFGbHZEZW11eGVyLmlzRmx2RmlsZShoZWFkZXIpKSB7XG4gICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLkRFTVVYX0VSUk9SLCBuZXcgRXJyb3IoJ2ludmFsaWQgZmx2IGZpbGUnKSlcbiAgICAgIHRoaXMuZG9QYXJzZUZsdigpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ZpcnN0RnJhZ21lbnRMb2FkZWQgPSB0cnVlXG4gICAgICBjb25zdCBwbGF5VHlwZSA9IEZsdkRlbXV4ZXIuZ2V0UGxheVR5cGUoaGVhZGVyWzRdKVxuXG4gICAgICBpZiAocGxheVR5cGUuaGFzVmlkZW8pIHtcbiAgICAgICAgdGhpcy5pbml0VmlkZW9UcmFjaygpXG4gICAgICB9XG5cbiAgICAgIGlmIChwbGF5VHlwZS5oYXNBdWRpbykge1xuICAgICAgICB0aGlzLmluaXRBdWRpb1RyYWNrKClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5kb1BhcnNlRmx2KClcbiAgfVxuXG4gIC8qKlxuICAgKiBpbml0IGRlZmF1bHQgdmlkZW8gdHJhY2sgY29uZmlnc1xuICAgKi9cbiAgaW5pdFZpZGVvVHJhY2sgKCkge1xuICAgIHRoaXMuX3RyYWNrTnVtKytcbiAgICBsZXQgdmlkZW9UcmFjayA9IG5ldyBWaWRlb1RyYWNrKClcbiAgICB2aWRlb1RyYWNrLm1ldGEgPSBuZXcgVmlkZW9UcmFja01ldGEoKVxuICAgIHZpZGVvVHJhY2suaWQgPSB2aWRlb1RyYWNrLm1ldGEuaWQgPSB0aGlzLl90cmFja051bVxuXG4gICAgdGhpcy50cmFja3MudmlkZW9UcmFjayA9IHZpZGVvVHJhY2tcbiAgfVxuXG4gIC8qKlxuICAgKiBpbml0IGRlZmF1bHQgYXVkaW8gdHJhY2sgY29uZmlnc1xuICAgKi9cbiAgaW5pdEF1ZGlvVHJhY2sgKCkge1xuICAgIHRoaXMuX3RyYWNrTnVtKytcbiAgICBsZXQgYXVkaW9UcmFjayA9IG5ldyBBdWRpb1RyYWNrKClcbiAgICBhdWRpb1RyYWNrLm1ldGEgPSBuZXcgQXVkaW9UcmFja01ldGEoKVxuICAgIGF1ZGlvVHJhY2suaWQgPSBhdWRpb1RyYWNrLm1ldGEuaWQgPSB0aGlzLl90cmFja051bVxuXG4gICAgdGhpcy50cmFja3MuYXVkaW9UcmFjayA9IGF1ZGlvVHJhY2tcbiAgfVxuXG4gIC8qKlxuICAgKiBQYWNrYWdlIHRoZSBkYXRhIGFzIHRoZSBmb2xsb3dpbmcgZGF0YSBzdHJ1Y3R1cmVcbiAgICoge1xuICAgKiAgICBkYXRhOiBVaW50OEFycmF5LiB0aGUgU3RyZWFtIGRhdGEuXG4gICAqICAgIGluZm86IFRoZSBmaXJzdCBieXRlIGluZm8gb2YgdGhlIFRhZy5cbiAgICogICAgdGFnVHlwZTogOOOAgTnjgIExOFxuICAgKiAgICB0aW1lU3RhbXA6IHRoZSB0aW1lc3RlbXBcbiAgICogfVxuICAgKi9cbiAgX3BhcnNlRmx2VGFnICgpIHtcbiAgICBpZiAodGhpcy5sb2FkZXJCdWZmZXIubGVuZ3RoIDwgMTEpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGxldCBjaHVuayA9IHRoaXMuX3BhcnNlRmx2VGFnSGVhZGVyKClcbiAgICBpZiAoY2h1bmspIHtcbiAgICAgIHRoaXMuX3Byb2Nlc3NDaHVuayhjaHVuaylcbiAgICB9XG4gICAgcmV0dXJuIGNodW5rXG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgdGhlIDExIGJ5dGUgdGFnIEhlYWRlclxuICAgKi9cbiAgX3BhcnNlRmx2VGFnSGVhZGVyICgpIHtcbiAgICBsZXQgb2Zmc2V0ID0gMFxuICAgIGxldCBjaHVuayA9IHt9XG5cbiAgICBsZXQgdGFnVHlwZSA9IHRoaXMubG9hZGVyQnVmZmVyLnRvSW50KG9mZnNldCwgMSlcbiAgICBvZmZzZXQgKz0gMVxuXG4gICAgLy8gMiBiaXQgRk1TIHJlc2VydmVkLCAxIGJpdCBmaWx0ZXJlZCwgNSBiaXQgdGFnIHR5cGVcbiAgICBjaHVuay5maWx0ZXJlZCA9ICh0YWdUeXBlICYgMzIpID4+PiA1XG4gICAgY2h1bmsudGFnVHlwZSA9IHRhZ1R5cGUgJiAzMVxuXG4gICAgLy8gMyBCeXRlIGRhdGFzaXplXG4gICAgY2h1bmsuZGF0YXNpemUgPSB0aGlzLmxvYWRlckJ1ZmZlci50b0ludChvZmZzZXQsIDMpXG4gICAgb2Zmc2V0ICs9IDNcblxuICAgIGlmICgoY2h1bmsudGFnVHlwZSAhPT0gOCAmJiBjaHVuay50YWdUeXBlICE9PSA5ICYmIGNodW5rLnRhZ1R5cGUgIT09IDExICYmIGNodW5rLnRhZ1R5cGUgIT09IDE4KSB8fFxuICAgICAgdGhpcy5sb2FkZXJCdWZmZXIudG9JbnQoOCwgMykgIT09IDApIHtcbiAgICAgIGlmICh0aGlzLmxvYWRlckJ1ZmZlciAmJiB0aGlzLmxvYWRlckJ1ZmZlci5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMubG9hZGVyQnVmZmVyLnNoaWZ0KDEpXG4gICAgICB9XG4gICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLkRFTVVYX0VSUk9SLCB0aGlzLlRBRywgbmV3IEVycm9yKCd0YWdUeXBlICcgKyBjaHVuay50YWdUeXBlKSwgZmFsc2UpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGlmICh0aGlzLmxvYWRlckJ1ZmZlci5sZW5ndGggPCBjaHVuay5kYXRhc2l6ZSArIDE1KSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIHJlYWQgdGhlIGRhdGEuXG4gICAgdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoNClcblxuICAgIC8vIDMgQnl0ZSB0aW1lc3RhbXBcbiAgICBsZXQgdGltZXN0YW1wID0gdGhpcy5sb2FkZXJCdWZmZXIudG9JbnQoMCwgMylcbiAgICB0aGlzLmxvYWRlckJ1ZmZlci5zaGlmdCgzKVxuXG4gICAgLy8gMSBCeXRlIHRpbWVzdGFtcEV4dFxuICAgIGxldCB0aW1lc3RhbXBFeHQgPSB0aGlzLmxvYWRlckJ1ZmZlci5zaGlmdCgxKVswXVxuICAgIGlmICh0aW1lc3RhbXBFeHQgPiAwKSB7XG4gICAgICB0aW1lc3RhbXAgKz0gdGltZXN0YW1wRXh0ICogMHgxMDAwMDAwXG4gICAgfVxuXG4gICAgY2h1bmsuZHRzID0gdGltZXN0YW1wXG5cbiAgICAvLyBzdHJlYW1JZFxuICAgIHRoaXMubG9hZGVyQnVmZmVyLnNoaWZ0KDMpXG4gICAgcmV0dXJuIGNodW5rXG4gIH1cblxuICBfcHJvY2Vzc0NodW5rIChjaHVuaykge1xuICAgIHN3aXRjaCAoY2h1bmsudGFnVHlwZSkge1xuICAgICAgY2FzZSAxODpcbiAgICAgICAgdGhpcy5fcGFyc2VTY3JpcHREYXRhKGNodW5rKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSA4OlxuICAgICAgICB0aGlzLl9wYXJzZUFBQ0RhdGEoY2h1bmspXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIDk6XG4gICAgICAgIHRoaXMuX3BhcnNlSGV2Y0RhdGEoY2h1bmspXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIDExOlxuICAgICAgICAvLyBmb3Igc29tZSBDRE4gdGhhdCBkaWQgbm90IHByb2Nlc3MgdGhlIGN1cnJlY3QgUlRNUCBtZXNzYWdlc1xuICAgICAgICB0aGlzLmxvYWRlckJ1ZmZlci5zaGlmdCgzKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoMSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcGFyc2UgZmx2IHNjcmlwdCBkYXRhXG4gICAqIEBwYXJhbSBjaHVua1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3BhcnNlU2NyaXB0RGF0YSAoY2h1bmspIHtcbiAgICBsZXQgYXVkaW9UcmFjayA9IHRoaXMudHJhY2tzLmF1ZGlvVHJhY2tcbiAgICBsZXQgdmlkZW9UcmFjayA9IHRoaXMudHJhY2tzLnZpZGVvVHJhY2tcblxuICAgIGxldCBkYXRhID0gdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoY2h1bmsuZGF0YXNpemUpXG5cbiAgICBjb25zdCBpbmZvID0gbmV3IEFNRlBhcnNlcigpLnJlc29sdmUoZGF0YSwgZGF0YS5sZW5ndGgpXG5cbiAgICBjb25zdCBvbk1ldGFEYXRhID0gdGhpcy5fY29udGV4dC5vbk1ldGFEYXRhID0gaW5mbyA/IGluZm8ub25NZXRhRGF0YSA6IHVuZGVmaW5lZFxuXG4gICAgLy8gZmlsbCBtZWRpYUluZm9cbiAgICB0aGlzLl9jb250ZXh0Lm1lZGlhSW5mby5kdXJhdGlvbiA9IG9uTWV0YURhdGEuZHVyYXRpb25cbiAgICB0aGlzLl9jb250ZXh0Lm1lZGlhSW5mby5oYXNWaWRlbyA9IG9uTWV0YURhdGEuaGFzVmlkZW9cbiAgICB0aGlzLl9jb250ZXh0Lm1lZGlhSW5mby5oc2FBdWRpbyA9IG9uTWV0YURhdGEuaGFzQXVkaW9cblxuICAgIGxldCB2YWxpZGF0ZSA9IHRoaXMuX2RhdGFzaXplVmFsaWRhdG9yKGNodW5rLmRhdGFzaXplKVxuICAgIGlmICh2YWxpZGF0ZSkge1xuICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5NRURJQV9JTkZPKVxuICAgICAgdGhpcy5faGFzU2NyaXB0ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIEVkaXQgZGVmYXVsdCBtZXRhLlxuICAgIGlmIChhdWRpb1RyYWNrICYmICFhdWRpb1RyYWNrLmhhc1NwZWNpZmljQ29uZmlnKSB7XG4gICAgICBsZXQgbWV0YSA9IGF1ZGlvVHJhY2subWV0YVxuICAgICAgaWYgKG9uTWV0YURhdGEuYXVkaW9zYW1wbGVyYXRlKSB7XG4gICAgICAgIG1ldGEuc2FtcGxlUmF0ZSA9IG9uTWV0YURhdGEuYXVkaW9zYW1wbGVyYXRlXG4gICAgICB9XG5cbiAgICAgIGlmIChvbk1ldGFEYXRhLmF1ZGlvY2hhbm5lbHMpIHtcbiAgICAgICAgbWV0YS5jaGFubmVsQ291bnQgPSBvbk1ldGFEYXRhLmF1ZGlvY2hhbm5lbHNcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChvbk1ldGFEYXRhLmF1ZGlvc2FtcGxlcmF0ZSkge1xuICAgICAgICBjYXNlIDQ0MTAwOlxuICAgICAgICAgIG1ldGEuc2FtcGxlUmF0ZUluZGV4ID0gNFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjIwNTA6XG4gICAgICAgICAgbWV0YS5zYW1wbGVSYXRlSW5kZXggPSA3XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAxMTAyNTpcbiAgICAgICAgICBtZXRhLnNhbXBsZVJhdGVJbmRleCA9IDEwXG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZpZGVvVHJhY2sgJiYgIXZpZGVvVHJhY2suaGFzU3BlY2lmaWNDb25maWcpIHtcbiAgICAgIGxldCBtZXRhID0gdmlkZW9UcmFjay5tZXRhXG4gICAgICBpZiAodHlwZW9mIG9uTWV0YURhdGEuZnJhbWVyYXRlID09PSAnbnVtYmVyJykge1xuICAgICAgICBsZXQgZnBzTnVtID0gTWF0aC5mbG9vcihvbk1ldGFEYXRhLmZyYW1lcmF0ZSAqIDEwMDApXG4gICAgICAgIGlmIChmcHNOdW0gPiAwKSB7XG4gICAgICAgICAgbGV0IGZwcyA9IGZwc051bSAvIDEwMDBcbiAgICAgICAgICBpZiAoIW1ldGEuZnJhbWVSYXRlKSB7XG4gICAgICAgICAgICBtZXRhLmZyYW1lUmF0ZSA9IHt9XG4gICAgICAgICAgfVxuICAgICAgICAgIG1ldGEuZnJhbWVSYXRlLmZpeGVkID0gdHJ1ZVxuICAgICAgICAgIG1ldGEuZnJhbWVSYXRlLmZwcyA9IGZwc1xuICAgICAgICAgIG1ldGEuZnJhbWVSYXRlLmZwc19udW0gPSBmcHNOdW1cbiAgICAgICAgICBtZXRhLmZyYW1lUmF0ZS5mcHNfZGVuID0gMTAwMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2FhY1NlcXVlbmNlSGVhZGVyUGFyc2VyIChkYXRhKSB7XG4gICAgbGV0IHJldCA9IHt9XG4gICAgcmV0Lmhhc1NwZWNpZmljQ29uZmlnID0gdHJ1ZVxuICAgIHJldC5vYmplY3RUeXBlID0gZGF0YVsxXSA+Pj4gM1xuICAgIHJldC5zYW1wbGVSYXRlSW5kZXggPSAoKGRhdGFbMV0gJiA3KSA8PCAxKSB8IChkYXRhWzJdID4+PiA3KVxuICAgIHJldC5hdWRpb3NhbXBsZXJhdGUgPSB0aGlzLl9zd2l0Y2hBdWRpb1NhbXBsZVJhdGUocmV0LnNhbXBsZVJhdGVJbmRleClcbiAgICByZXQuY2hhbm5lbENvdW50ID0gKGRhdGFbMl0gJiAxMjApID4+PiAzXG4gICAgcmV0LmZyYW1lTGVuZ3RoID0gKGRhdGFbMl0gJiA0KSA+Pj4gMlxuICAgIHJldC5kZXBlbmRzT25Db3JlQ29kZXIgPSAoZGF0YVsyXSAmIDIpID4+PiAxXG4gICAgcmV0LmV4dGVuc2lvbkZsYWdJbmRleCA9IGRhdGFbMl0gJiAxXG5cbiAgICByZXQuY29kZWMgPSBgbXA0YS40MC4ke3JldC5vYmplY3RUeXBlfWBcbiAgICBsZXQgdXNlckFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgZXh0ZW5zaW9uU2FtcGxpbmdJbmRleDtcblxuICAgIGxldCBjb25maWc7XG4gICAgbGV0IHNhbXBsaW5nSW5kZXggPSByZXQuc2FtcGxlUmF0ZUluZGV4O1xuXG4gICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdmaXJlZm94JykgIT09IC0xKSB7XG4gICAgICAvLyBmaXJlZm94OiB1c2UgU0JSIChIRS1BQUMpIGlmIGZyZXEgbGVzcyB0aGFuIDI0a0h6XG4gICAgICBpZiAocmV0LnNhbXBsZVJhdGVJbmRleCA+PSA2KSB7XG4gICAgICAgIHJldC5vYmplY3RUeXBlID0gNTtcbiAgICAgICAgY29uZmlnID0gbmV3IEFycmF5KDQpO1xuICAgICAgICBleHRlbnNpb25TYW1wbGluZ0luZGV4ID0gc2FtcGxpbmdJbmRleCAtIDM7XG4gICAgICB9IGVsc2UgeyAvLyB1c2UgTEMtQUFDXG4gICAgICAgIHJldC5vYmplY3RUeXBlID0gMjtcbiAgICAgICAgY29uZmlnID0gbmV3IEFycmF5KDIpO1xuICAgICAgICBleHRlbnNpb25TYW1wbGluZ0luZGV4ID0gc2FtcGxpbmdJbmRleDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdhbmRyb2lkJykgIT09IC0xIHx8IHNuaWZmZXIuYnJvd3NlciA9PT0gJ3NhZmFyaScpIHtcbiAgICAgIC8vIGFuZHJvaWQ6IGFsd2F5cyB1c2UgTEMtQUFDXG4gICAgICByZXQub2JqZWN0VHlwZSA9IDI7XG4gICAgICBjb25maWcgPSBuZXcgQXJyYXkoMik7XG4gICAgICBleHRlbnNpb25TYW1wbGluZ0luZGV4ID0gc2FtcGxpbmdJbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZm9yIG90aGVyIGJyb3dzZXJzLCBlLmcuIGNocm9tZS4uLlxuICAgICAgLy8gQWx3YXlzIHVzZSBIRS1BQUMgdG8gbWFrZSBpdCBlYXNpZXIgdG8gc3dpdGNoIGFhYyBjb2RlYyBwcm9maWxlXG4gICAgICByZXQub2JqZWN0VHlwZSA9IDU7XG4gICAgICBleHRlbnNpb25TYW1wbGluZ0luZGV4ID0gcmV0LnNhbXBsZVJhdGVJbmRleDtcbiAgICAgIGNvbmZpZyA9IG5ldyBBcnJheSg0KTtcblxuICAgICAgaWYgKHJldC5zYW1wbGVSYXRlSW5kZXggPj0gNikge1xuICAgICAgICBleHRlbnNpb25TYW1wbGluZ0luZGV4ID0gcmV0LnNhbXBsZVJhdGVJbmRleCAtIDM7XG4gICAgICB9IGVsc2UgaWYgKHJldC5jaGFubmVsQ291bnQgPT09IDEpIHsgLy8gTW9ubyBjaGFubmVsXG4gICAgICAgIHJldC5vYmplY3RUeXBlID0gMjtcbiAgICAgICAgY29uZmlnID0gbmV3IEFycmF5KDIpO1xuICAgICAgICBleHRlbnNpb25TYW1wbGluZ0luZGV4ID0gcmV0LnNhbXBsZVJhdGVJbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25maWdbMF0gPSByZXQub2JqZWN0VHlwZSA8PCAzO1xuICAgIGNvbmZpZ1swXSB8PSAocmV0LnNhbXBsZVJhdGVJbmRleCAmIDB4MEYpID4+PiAxO1xuICAgIGNvbmZpZ1sxXSA9IChyZXQuc2FtcGxlUmF0ZUluZGV4ICYgMHgwRikgPDwgNztcbiAgICBjb25maWdbMV0gfD0gKHJldC5jaGFubmVsQ291bnQgJiAweDBGKSA8PCAzO1xuICAgIGlmIChyZXQub2JqZWN0VHlwZSA9PT0gNSkge1xuICAgICAgY29uZmlnWzFdIHw9ICgoZXh0ZW5zaW9uU2FtcGxpbmdJbmRleCAmIDB4MEYpID4+PiAxKTtcbiAgICAgIGNvbmZpZ1syXSA9IChleHRlbnNpb25TYW1wbGluZ0luZGV4ICYgMHgwMSkgPDwgNztcbiAgICAgIC8vIGV4dGVuZGVkIGF1ZGlvIG9iamVjdCB0eXBlOiBmb3JjZSB0byAyIChMQy1BQUMpXG4gICAgICBjb25maWdbMl0gfD0gKDIgPDwgMik7XG4gICAgICBjb25maWdbM10gPSAwO1xuICAgIH1cbiAgICByZXQuY29uZmlnID0gY29uZmlnXG4gICAgcmV0dXJuIHJldFxuICB9XG5cbiAgX3BhcnNlQUFDRGF0YSAoY2h1bmspIHtcbiAgICBsZXQgdHJhY2sgPSB0aGlzLnRyYWNrcy5hdWRpb1RyYWNrXG4gICAgaWYgKCF0cmFjaykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IG1ldGEgPSB0cmFjay5tZXRhXG5cbiAgICBpZiAoIW1ldGEpIHtcbiAgICAgIHRyYWNrLm1ldGEgPSBuZXcgQXVkaW9UcmFja01ldGEoKVxuICAgICAgbWV0YSA9IHRyYWNrLm1ldGE7XG4gICAgfVxuXG4gICAgbGV0IGluZm8gPSB0aGlzLmxvYWRlckJ1ZmZlci5zaGlmdCgxKVswXVxuXG4gICAgY2h1bmsuZGF0YSA9IHRoaXMubG9hZGVyQnVmZmVyLnNoaWZ0KGNodW5rLmRhdGFzaXplIC0gMSlcblxuICAgIGxldCBmb3JtYXQgPSAoaW5mbyAmIDI0MCkgPj4+IDRcblxuICAgIHRyYWNrLmZvcm1hdCA9IGZvcm1hdFxuXG4gICAgaWYgKGZvcm1hdCAhPT0gMTApIHtcbiAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuREVNVVhfRVJST1IsIG5ldyBFcnJvcihgaW52YWxpZCBhdWRpbyBmb3JtYXQ6ICR7Zm9ybWF0fWApKVxuICAgIH1cblxuICAgIGlmIChmb3JtYXQgPT09IDEwICYmICF0aGlzLl9oYXNBdWRpb1NlcXVlbmNlKSB7XG4gICAgICBtZXRhLnNhbXBsZVJhdGUgPSB0aGlzLl9zd2l0Y2hBdWRpb1NhbXBsaW5nRnJlcXVlbmN5KGluZm8pXG4gICAgICBtZXRhLnNhbXBsZVJhdGVJbmRleCA9IChpbmZvICYgMTIpID4+PiAyXG4gICAgICBtZXRhLmZyYW1lTGVudGggPSAoaW5mbyAmIDIpID4+PiAxXG4gICAgICBtZXRhLmNoYW5uZWxDb3VudCA9IGluZm8gJiAxXG4gICAgICBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uID0gTWF0aC5mbG9vcigxMDI0IC8gbWV0YS5hdWRpb1NhbXBsZVJhdGUgKiBtZXRhLnRpbWVzY2FsZSlcbiAgICB9XG5cbiAgICBsZXQgYXVkaW9TYW1wbGVSYXRlID0gbWV0YS5hdWRpb1NhbXBsZVJhdGVcbiAgICBsZXQgYXVkaW9TYW1wbGVSYXRlSW5kZXggPSBtZXRhLnNhbXBsZVJhdGVJbmRleFxuICAgIGxldCByZWZTYW1wbGVEdXJhdGlvbiA9IG1ldGEucmVmU2FtcGxlRHVyYXRpb25cblxuICAgIGRlbGV0ZSBjaHVuay50YWdUeXBlXG4gICAgbGV0IHZhbGlkYXRlID0gdGhpcy5fZGF0YXNpemVWYWxpZGF0b3IoY2h1bmsuZGF0YXNpemUpXG5cbiAgICBpZiAoY2h1bmsuZGF0YVswXSA9PT0gMCkgeyAvLyBBQUMgU2VxdWVuY2UgSGVhZGVyXG4gICAgICBsZXQgYWFjSGVhZGVyID0gdGhpcy5fYWFjU2VxdWVuY2VIZWFkZXJQYXJzZXIoY2h1bmsuZGF0YSlcbiAgICAgIGF1ZGlvU2FtcGxlUmF0ZSA9IGFhY0hlYWRlci5hdWRpb3NhbXBsZXJhdGUgfHwgbWV0YS5hdWRpb1NhbXBsZVJhdGVcbiAgICAgIGF1ZGlvU2FtcGxlUmF0ZUluZGV4ID0gYWFjSGVhZGVyLnNhbXBsZVJhdGVJbmRleCB8fCBtZXRhLnNhbXBsZVJhdGVJbmRleFxuICAgICAgcmVmU2FtcGxlRHVyYXRpb24gPSBNYXRoLmZsb29yKDEwMjQgLyBhdWRpb1NhbXBsZVJhdGUgKiBtZXRhLnRpbWVzY2FsZSlcblxuICAgICAgbWV0YS5jaGFubmVsQ291bnQgPSBhYWNIZWFkZXIuY2hhbm5lbENvdW50XG4gICAgICBtZXRhLnNhbXBsZVJhdGUgPSBhdWRpb1NhbXBsZVJhdGVcbiAgICAgIG1ldGEuc2FtcGxlUmF0ZUluZGV4ID0gYXVkaW9TYW1wbGVSYXRlSW5kZXhcbiAgICAgIG1ldGEucmVmU2FtcGxlRHVyYXRpb24gPSByZWZTYW1wbGVEdXJhdGlvblxuICAgICAgbWV0YS5kdXJhdGlvbiA9IHRoaXMuX2NvbnRleHQubWVkaWFJbmZvLmR1cmF0aW9uICogbWV0YS50aW1lc2NhbGVcbiAgICAgIG1ldGEuY29uZmlnID0gYWFjSGVhZGVyLmNvbmZpZ1xuICAgICAgbWV0YS5vYmplY3RUeXBlID0gYWFjSGVhZGVyLm9iamVjdFR5cGU7XG5cbiAgICAgIGNvbnN0IGF1ZGlvTWVkaWEgPSB0aGlzLl9jb250ZXh0Lm1lZGlhSW5mby5hdWRpb1xuXG4gICAgICAvLyBmaWxsIGF1ZGlvIG1lZGlhIGluZm9cbiAgICAgIGF1ZGlvTWVkaWEuY29kZWMgPSBhYWNIZWFkZXIuY29kZWNcbiAgICAgIGF1ZGlvTWVkaWEuY2hhbm5lbENvdW50ID0gYWFjSGVhZGVyLmNoYW5uZWxDb3VudFxuICAgICAgYXVkaW9NZWRpYS5zYW1wbGVSYXRlID0gYXVkaW9TYW1wbGVSYXRlXG4gICAgICBhdWRpb01lZGlhLnNhbXBsZVJhdGVJbmRleCA9IGFhY0hlYWRlci5hdWRpb1NhbXBsZVJhdGVJbmRleFxuXG4gICAgICBpZiAodGhpcy5faGFzU2NyaXB0ICYmICF0aGlzLl9oYXNBdWRpb1NlcXVlbmNlKSB7XG4gICAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuTUVUQURBVEFfUEFSU0VELCAnYXVkaW8nKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9oYXNTY3JpcHQgJiYgdGhpcy5faGFzQXVkaW9TZXF1ZW5jZSkge1xuICAgICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLk1FVEFEQVRBX1BBUlNFRCwgJ2F1ZGlvJylcbiAgICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5BVURJT19NRVRBREFUQV9DSEFOR0UpXG4gICAgICAgIC8vIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuTUVUQURBVEFfUEFSU0VELCAnYXVkaW8nKVxuICAgICAgfVxuICAgICAgdGhpcy5faGFzQXVkaW9TZXF1ZW5jZSA9IHRydWVcblxuICAgICAgdGhpcy5fbWV0YUNoYW5nZSA9IHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX21ldGFDaGFuZ2UpIHtcbiAgICAgICAgY2h1bmsub3B0aW9ucyA9IHtcbiAgICAgICAgICBtZXRhOiB0cmFjay5tZXRhXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX21ldGFDaGFuZ2UgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBjaHVuay5kYXRhID0gY2h1bmsuZGF0YS5zbGljZSgxLCBjaHVuay5kYXRhLmxlbmd0aClcbiAgICAgIHRyYWNrLnNhbXBsZXMucHVzaChjaHVuaylcbiAgICB9XG4gICAgaWYgKCF2YWxpZGF0ZSkge1xuICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9FUlJPUiwgdGhpcy5UQUcsIG5ldyBFcnJvcignVEFHIGxlbmd0aCBlcnJvciBhdCAnICsgY2h1bmsuZGF0YXNpemUpLCBmYWxzZSlcbiAgICAgIC8vIHRoaXMubG9nZ2VyLndhcm4odGhpcy5UQUcsIGVycm9yLm1lc3NhZ2UpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHBhcnNlIGhldmMvYXZjIHZpZGVvIGRhdGFcbiAgICogQHBhcmFtIGNodW5rXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfcGFyc2VIZXZjRGF0YSAoY2h1bmspIHtcbiAgICAvLyBoZWFkZXJcbiAgICBsZXQgaW5mbyA9IHRoaXMubG9hZGVyQnVmZmVyLnNoaWZ0KDEpWzBdXG4gICAgY2h1bmsuZnJhbWVUeXBlID0gKGluZm8gJiAweGYwKSA+Pj4gNFxuICAgIGNodW5rLmlzS2V5ZnJhbWUgPSBjaHVuay5mcmFtZVR5cGUgPT09IDFcbiAgICAvLyBsZXQgdGVtcENvZGVjSUQgPSB0aGlzLnRyYWNrcy52aWRlb1RyYWNrLmNvZGVjSURcbiAgICBsZXQgY29kZWNJRCA9IGluZm8gJiAweDBmXG4gICAgdGhpcy50cmFja3MudmlkZW9UcmFjay5jb2RlY0lEID0gY29kZWNJRFxuXG4gICAgLy8gaGV2Y+WSjGF2Y+eahGhlYWRlcuino+aekOaWueW8j+S4gOagt1xuICAgIGNodW5rLmF2Y1BhY2tldFR5cGUgPSB0aGlzLmxvYWRlckJ1ZmZlci5zaGlmdCgxKVswXVxuICAgIGNodW5rLmN0cyA9IHRoaXMubG9hZGVyQnVmZmVyLnRvSW50KDAsIDMpXG4gICAgdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoMylcblxuICAgIC8vIDEyIGZvciBoZXZjLCA3IGZvciBhdmNcbiAgICBpZiAoY29kZWNJRCA9PT0gMTIpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmxvYWRlckJ1ZmZlci5zaGlmdChjaHVuay5kYXRhc2l6ZSAtIDUpXG4gICAgICBjaHVuay5kYXRhID0gZGF0YVxuXG4gICAgICBpZiAoTnVtYmVyLnBhcnNlSW50KGNodW5rLmF2Y1BhY2tldFR5cGUpICE9PSAwKSB7XG4gICAgICAgIGlmICghdGhpcy5fZGF0YXNpemVWYWxpZGF0b3IoY2h1bmsuZGF0YXNpemUpKSB7XG4gICAgICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9FUlJPUiwgdGhpcy5UQUcsIG5ldyBFcnJvcihgaW52YWxpZCB2aWRlbyB0YWcgZGF0YXNpemU6ICR7Y2h1bmsuZGF0YXNpemV9YCksIGZhbHNlKVxuICAgICAgICB9XG4gICAgICAgIGxldCBuYWx1ID0ge31cbiAgICAgICAgbGV0IHIgPSAwXG4gICAgICAgIG5hbHUuY3RzID0gY2h1bmsuY3RzXG4gICAgICAgIG5hbHUuZHRzID0gY2h1bmsuZHRzXG4gICAgICAgIHdoaWxlIChjaHVuay5kYXRhLmxlbmd0aCA+IHIpIHtcbiAgICAgICAgICBsZXQgc2l6ZXMgPSBjaHVuay5kYXRhLnNsaWNlKE51bWJlci5wYXJzZUludChyKSwgNCArIHIpXG4gICAgICAgICAgbmFsdS5zaXplID0gc2l6ZXNbM11cbiAgICAgICAgICBuYWx1LnNpemUgKz0gc2l6ZXNbMl0gKiAyNTZcbiAgICAgICAgICBuYWx1LnNpemUgKz0gc2l6ZXNbMV0gKiAyNTYgKiAyNTZcbiAgICAgICAgICBuYWx1LnNpemUgKz0gc2l6ZXNbMF0gKiAyNTYgKiAyNTYgKiAyNTZcbiAgICAgICAgICByICs9IDRcbiAgICAgICAgICBuYWx1LmRhdGEgPSBjaHVuay5kYXRhLnNsaWNlKE51bWJlci5wYXJzZUludChyKSwgbmFsdS5zaXplICsgcilcbiAgICAgICAgICByICs9IG5hbHUuc2l6ZVxuICAgICAgICAgIHRoaXMudHJhY2tzLnZpZGVvVHJhY2suc2FtcGxlcy5wdXNoKG5hbHUpXG4gICAgICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5NRVRBREFUQV9QQVJTRUQsICd2aWRlbycpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoTnVtYmVyLnBhcnNlSW50KGNodW5rLmF2Y1BhY2tldFR5cGUpID09PSAwKSB7XG4gICAgICAgIGlmICghdGhpcy5fZGF0YXNpemVWYWxpZGF0b3IoY2h1bmsuZGF0YXNpemUpKSB7XG4gICAgICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9FUlJPUiwgdGhpcy5UQUcsIG5ldyBFcnJvcihgaW52YWxpZCB2aWRlbyB0YWcgZGF0YXNpemU6ICR7Y2h1bmsuZGF0YXNpemV9YCksIGZhbHNlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuTUVUQURBVEFfUEFSU0VELCAndmlkZW8nKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb2RlY0lEID09PSA3KSB7XG4gICAgICBsZXQgZGF0YSA9IHRoaXMubG9hZGVyQnVmZmVyLnNoaWZ0KGNodW5rLmRhdGFzaXplIC0gNSlcbiAgICAgIGlmIChkYXRhWzRdID09PSAwICYmIGRhdGFbNV0gPT09IDAgJiYgZGF0YVs2XSA9PT0gMCAmJiBkYXRhWzddID09PSAxKSB7XG4gICAgICAgIGxldCBhdmNjbGVuZ3RoID0gMFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgIGF2Y2NsZW5ndGggPSBhdmNjbGVuZ3RoICogMjU2ICsgZGF0YVtpXVxuICAgICAgICB9XG4gICAgICAgIGF2Y2NsZW5ndGggLT0gNFxuICAgICAgICBkYXRhID0gZGF0YS5zbGljZSg0LCBkYXRhLmxlbmd0aClcbiAgICAgICAgZGF0YVszXSA9IGF2Y2NsZW5ndGggJSAyNTZcbiAgICAgICAgYXZjY2xlbmd0aCA9IChhdmNjbGVuZ3RoIC0gZGF0YVszXSkgLyAyNTZcbiAgICAgICAgZGF0YVsyXSA9IGF2Y2NsZW5ndGggJSAyNTZcbiAgICAgICAgYXZjY2xlbmd0aCA9IChhdmNjbGVuZ3RoIC0gZGF0YVsyXSkgLyAyNTZcbiAgICAgICAgZGF0YVsxXSA9IGF2Y2NsZW5ndGggJSAyNTZcbiAgICAgICAgZGF0YVswXSA9IChhdmNjbGVuZ3RoIC0gZGF0YVsxXSkgLyAyNTZcbiAgICAgIH1cblxuICAgICAgY2h1bmsuZGF0YSA9IGRhdGFcbiAgICAgIC8vIElmIGl0IGlzIEFWQyBzZXF1ZWNlIEhlYWRlci5cbiAgICAgIGlmIChjaHVuay5hdmNQYWNrZXRUeXBlID09PSAwKSB7XG4gICAgICAgIHRoaXMuX2F2Y1NlcXVlbmNlSGVhZGVyUGFyc2VyKGNodW5rLmRhdGEpXG4gICAgICAgIGxldCB2YWxpZGF0ZSA9IHRoaXMuX2RhdGFzaXplVmFsaWRhdG9yKGNodW5rLmRhdGFzaXplKVxuICAgICAgICBpZiAodmFsaWRhdGUpIHtcbiAgICAgICAgICBpZiAodGhpcy5faGFzU2NyaXB0ICYmICF0aGlzLl9oYXNWaWRlb1NlcXVlbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLk1FVEFEQVRBX1BBUlNFRCwgJ3ZpZGVvJylcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2hhc1NjcmlwdCAmJiB0aGlzLl9oYXNWaWRlb1NlcXVlbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLk1FVEFEQVRBX1BBUlNFRCwgJ2F1ZGlvJylcbiAgICAgICAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuVklERU9fTUVUQURBVEFfQ0hBTkdFKVxuICAgICAgICAgICAgLy8gdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5NRVRBREFUQV9QQVJTRUQsICd2aWRlbycpXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX2hhc1ZpZGVvU2VxdWVuY2UgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbWV0YUNoYW5nZSA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghdGhpcy5fZGF0YXNpemVWYWxpZGF0b3IoY2h1bmsuZGF0YXNpemUpKSB7XG4gICAgICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9FUlJPUiwgdGhpcy5UQUcsIG5ldyBFcnJvcihgaW52YWxpZCB2aWRlbyB0YWcgZGF0YXNpemU6ICR7Y2h1bmsuZGF0YXNpemV9YCksIGZhbHNlKVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fbWV0YUNoYW5nZSkge1xuICAgICAgICAgIGNodW5rLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRhOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRyYWNrcy52aWRlb1RyYWNrLm1ldGEpXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX21ldGFDaGFuZ2UgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJhY2tzLnZpZGVvVHJhY2suc2FtcGxlcy5wdXNoKGNodW5rKVxuICAgICAgICAvLyB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLkRFTVVYX0NPTVBMRVRFKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLkRFTVVYX0VSUk9SLCB0aGlzLlRBRywgbmV3IEVycm9yKGB2aWRlbyBjb2RlaWQgaXMgJHtjb2RlY0lEfWApLCBmYWxzZSlcbiAgICAgIGNodW5rLmRhdGEgPSB0aGlzLmxvYWRlckJ1ZmZlci5zaGlmdChjaHVuay5kYXRhc2l6ZSAtIDEpXG4gICAgICBpZiAoIXRoaXMuX2RhdGFzaXplVmFsaWRhdG9yKGNodW5rLmRhdGFzaXplKSkge1xuICAgICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLkRFTVVYX0VSUk9SLCB0aGlzLlRBRywgbmV3IEVycm9yKGBpbnZhbGlkIHZpZGVvIHRhZyBkYXRhc2l6ZTogJHtjaHVuay5kYXRhc2l6ZX1gKSwgZmFsc2UpXG4gICAgICB9XG4gICAgICB0aGlzLnRyYWNrcy52aWRlb1RyYWNrLnNhbXBsZXMucHVzaChjaHVuaylcbiAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuREVNVVhfQ09NUExFVEUpXG4gICAgfVxuICAgIGRlbGV0ZSBjaHVuay50YWdUeXBlXG4gIH1cblxuICAvKipcbiAgICogcGFyc2UgYXZjIG1ldGFkYXRhXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXZjU2VxdWVuY2VIZWFkZXJQYXJzZXIgKGRhdGEpIHtcbiAgICBsZXQgdHJhY2sgPSB0aGlzLnRyYWNrcy52aWRlb1RyYWNrXG5cbiAgICBpZiAoIXRyYWNrKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgb2Zmc2V0ID0gMFxuXG4gICAgaWYgKCF0cmFjay5tZXRhKSB7XG4gICAgICB0cmFjay5tZXRhID0gbmV3IFZpZGVvVHJhY2tNZXRhKClcbiAgICB9XG4gICAgbGV0IG1ldGEgPSB0cmFjay5tZXRhXG5cbiAgICBtZXRhLmNvbmZpZ3VyYXRpb25WZXJzaW9uID0gZGF0YVswXVxuICAgIG1ldGEuYXZjUHJvZmlsZUluZGljYXRpb24gPSBkYXRhWzFdXG4gICAgbWV0YS5wcm9maWxlQ29tcGF0aWJpbGl0eSA9IGRhdGFbMl1cbiAgICBtZXRhLmF2Y0xldmVsSW5kaWNhdGlvbiA9IGRhdGFbM10gLyAxMFxuICAgIG1ldGEubmFsVW5pdExlbmd0aCA9IChkYXRhWzRdICYgMHgwMykgKyAxXG5cbiAgICBsZXQgbnVtT2ZTcHMgPSBkYXRhWzVdICYgMHgxZlxuICAgIG9mZnNldCA9IDZcbiAgICBsZXQgY29uZmlnID0ge31cblxuICAgIC8vIHBhcnNlIFNQU1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtT2ZTcHM7IGkrKykge1xuICAgICAgbGV0IHNpemUgPSBkYXRhW29mZnNldF0gKiAyNTUgKyBkYXRhW29mZnNldCArIDFdXG4gICAgICBvZmZzZXQgKz0gMlxuXG4gICAgICBsZXQgc3BzID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSlcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgIHNwc1tqXSA9IGRhdGFbb2Zmc2V0ICsgal1cbiAgICAgIH1cblxuICAgICAgLy8gY29kZWMgc3RyaW5nXG4gICAgICBsZXQgY29kZWNTdHJpbmcgPSAnYXZjMS4nXG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8IDQ7IGorKykge1xuICAgICAgICBsZXQgaCA9IHNwc1tqXS50b1N0cmluZygxNilcbiAgICAgICAgaWYgKGgubGVuZ3RoIDwgMikge1xuICAgICAgICAgIGggPSAnMCcgKyBoXG4gICAgICAgIH1cbiAgICAgICAgY29kZWNTdHJpbmcgKz0gaFxuICAgICAgfVxuXG4gICAgICBtZXRhLmNvZGVjID0gY29kZWNTdHJpbmdcblxuICAgICAgb2Zmc2V0ICs9IHNpemVcbiAgICAgIHRoaXMudHJhY2tzLnZpZGVvVHJhY2subWV0YS5zcHMgPSBzcHNcbiAgICAgIGNvbmZpZyA9IFNwc1BhcnNlci5wYXJzZVNQUyhzcHMpXG4gICAgfVxuXG4gICAgbGV0IG51bU9mUHBzID0gZGF0YVtvZmZzZXRdXG5cbiAgICBvZmZzZXQrK1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1PZlBwczsgaSsrKSB7XG4gICAgICBsZXQgc2l6ZSA9IGRhdGFbb2Zmc2V0XSAqIDI1NSArIGRhdGFbb2Zmc2V0ICsgMV1cbiAgICAgIG9mZnNldCArPSAyXG4gICAgICBsZXQgcHBzID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSlcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgIHBwc1tqXSA9IGRhdGFbb2Zmc2V0ICsgal1cbiAgICAgIH1cbiAgICAgIG9mZnNldCArPSBzaXplXG4gICAgICB0aGlzLnRyYWNrcy52aWRlb1RyYWNrLm1ldGEucHBzID0gcHBzXG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbihtZXRhLCBTcHNQYXJzZXIudG9WaWRlb01ldGEoY29uZmlnKSlcblxuICAgIC8vIGZpbGwgdmlkZW8gbWVkaWEgaW5mb1xuICAgIGNvbnN0IHZpZGVvTWVkaWEgPSB0aGlzLl9jb250ZXh0Lm1lZGlhSW5mby52aWRlb1xuXG4gICAgdmlkZW9NZWRpYS5jb2RlYyA9IG1ldGEuY29kZWNcbiAgICB2aWRlb01lZGlhLnByb2ZpbGUgPSBtZXRhLnByb2ZpbGVcbiAgICB2aWRlb01lZGlhLmxldmVsID0gbWV0YS5sZXZlbFxuICAgIHZpZGVvTWVkaWEuY2hyb21hRm9ybWF0ID0gbWV0YS5jaHJvbWFGb3JtYXRcbiAgICB2aWRlb01lZGlhLmZyYW1lUmF0ZSA9IG1ldGEuZnJhbWVSYXRlXG4gICAgdmlkZW9NZWRpYS5wYXJSYXRpbyA9IG1ldGEucGFyUmF0aW9cbiAgICB2aWRlb01lZGlhLndpZHRoID0gdmlkZW9NZWRpYS53aWR0aCA9PT0gbWV0YS5wcmVzZW50V2lkdGggPyB2aWRlb01lZGlhLndpZHRoIDogbWV0YS5wcmVzZW50V2lkdGhcbiAgICB2aWRlb01lZGlhLmhlaWdodCA9IHZpZGVvTWVkaWEuaGVpZ2h0ID09PSBtZXRhLnByZXNlbnRIZWlnaHQgPyB2aWRlb01lZGlhLndpZHRoIDogbWV0YS5wcmVzZW50SGVpZ2h0XG5cbiAgICBtZXRhLmR1cmF0aW9uID0gdGhpcy5fY29udGV4dC5tZWRpYUluZm8uZHVyYXRpb24gKiBtZXRhLnRpbWVzY2FsZVxuICAgIG1ldGEuYXZjYyA9IG5ldyBVaW50OEFycmF5KGRhdGEubGVuZ3RoKVxuICAgIG1ldGEuYXZjYy5zZXQoZGF0YSlcbiAgICB0cmFjay5tZXRhID0gbWV0YVxuICB9XG5cbiAgLyoqXG4gICAqIGNob29zZSBhdWRpbyBzYW1wbGUgcmF0ZVxuICAgKiBAcGFyYW0gc2FtcGxpbmdGcmVxdWVuY3lJbmRleFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3N3aXRjaEF1ZGlvU2FtcGxlUmF0ZSAoc2FtcGxpbmdGcmVxdWVuY3lJbmRleCkge1xuICAgIGxldCBzYW1wbGluZ0ZyZXF1ZW5jeUxpc3QgPSBbOTYwMDAsIDg4MjAwLCA2NDAwMCwgNDgwMDAsIDQ0MTAwLCAzMjAwMCwgMjQwMDAsIDIyMDUwLCAxNjAwMCwgMTIwMDAsIDExMDI1LCA4MDAwLCA3MzUwXVxuICAgIHJldHVybiBzYW1wbGluZ0ZyZXF1ZW5jeUxpc3Rbc2FtcGxpbmdGcmVxdWVuY3lJbmRleF1cbiAgfVxuXG4gIC8qKlxuICAgKiBjaG9vc2UgYXVkaW8gc2FtcGxpbmcgZnJlcXVlbmNlXG4gICAqIEBwYXJhbSBpbmZvXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc3dpdGNoQXVkaW9TYW1wbGluZ0ZyZXF1ZW5jeSAoaW5mbykge1xuICAgIGxldCBzYW1wbGluZ0ZyZXF1ZW5jeUluZGV4ID0gKGluZm8gJiAxMikgPj4+IDJcbiAgICBsZXQgc2FtcGxpbmdGcmVxdWVuY3lMaXN0ID0gWzU1MDAsIDExMDI1LCAyMjA1MCwgNDQxMDAsIDQ4MDAwXVxuICAgIHJldHVybiBzYW1wbGluZ0ZyZXF1ZW5jeUxpc3Rbc2FtcGxpbmdGcmVxdWVuY3lJbmRleF1cbiAgfVxuXG4gIC8qKlxuICAgKiBjaG9vc2UgYXVkaW8gY2hhbm5lbCBjb3VudFxuICAgKiBAcGFyYW0gaW5mb1xuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3N3aXRjaEF1ZGlvQ2hhbm5lbCAoaW5mbykge1xuICAgIGxldCBzYW1wbGVUcmFja051bUluZGV4ID0gaW5mbyAmIDFcbiAgICBsZXQgc2FtcGxlVHJhY2tOdW1MaXN0ID0gWzEsIDJdXG4gICAgcmV0dXJuIHNhbXBsZVRyYWNrTnVtTGlzdFtzYW1wbGVUcmFja051bUluZGV4XVxuICB9XG5cbiAgLyoqXG4gICAqIGNoZWNrIGRhdGFzaXplIGlzIHZhbGlkIHVzZSA0IEJ5dGUgYWZ0ZXIgY3VycmVudCB0YWdcbiAgICogQHBhcmFtIGRhdGFzaXplXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2RhdGFzaXplVmFsaWRhdG9yIChkYXRhc2l6ZSkge1xuICAgIGxldCBkYXRhc2l6ZUNvbmZpcm0gPSB0aGlzLmxvYWRlckJ1ZmZlci50b0ludCgwLCA0KVxuICAgIHRoaXMubG9hZGVyQnVmZmVyLnNoaWZ0KDQpXG4gICAgcmV0dXJuIGRhdGFzaXplQ29uZmlybSA9PT0gZGF0YXNpemUgKyAxMVxuICB9XG5cbiAgZ2V0IGxvYWRlckJ1ZmZlciAoKSB7XG4gICAgY29uc3QgYnVmZmVyID0gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnTE9BREVSX0JVRkZFUicpXG4gICAgaWYgKGJ1ZmZlcikge1xuICAgICAgcmV0dXJuIGJ1ZmZlclxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLkRFTVVYX0VSUk9SLCBuZXcgRXJyb3IoJ+aJvuS4jeWIsCBsb2FkZXJCdWZmZXIg5a6e5L6LJykpXG4gICAgfVxuICB9XG5cbiAgZ2V0IHRyYWNrcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UoJ1RSQUNLUycpXG4gIH1cblxuICBnZXQgbG9nZ2VyICgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnTE9HR0VSJylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbHZEZW11eGVyXG4iLCIvKipcbiAqIFJlZmVyZW5jZTogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzgyMTYjc2VjdGlvbi00LjNcbiAqL1xuY2xhc3MgTTNVOFBhcnNlciB7XG4gIHN0YXRpYyBwYXJzZSAodGV4dCwgYmFzZXVybCA9ICcnKSB7XG4gICAgbGV0IHJldCA9IHtcbiAgICAgIGR1cmF0aW9uOiAwXG4gICAgfTtcbiAgICBpZiAoIXRleHQgfHwgIXRleHQuc3BsaXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHJlZnMgPSB0ZXh0LnNwbGl0KC9cXHJ8XFxuLyk7XG4gICAgcmVmcyA9IHJlZnMuZmlsdGVyKChyZWYpID0+IHtcbiAgICAgIHJldHVybiByZWY7XG4gICAgfSlcbiAgICBsZXQgcmVmID0gcmVmcy5zaGlmdCgpXG4gICAgaWYgKCFyZWYubWF0Y2goJyNFWFRNM1UnKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG0zdTggZmlsZTogbm90IFwiI0VYVE0zVVwiYCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmVmID0gcmVmcy5zaGlmdCgpXG4gICAgd2hpbGUgKHJlZikge1xuICAgICAgbGV0IHJlZm0gPSByZWYubWF0Y2goLyMoLltBLVp8LV0qKTooLiopLyk7XG4gICAgICBsZXQgcmVmZCA9IHJlZi5tYXRjaCgvIyguW0EtWnwtXSopLyk7XG4gICAgICBpZiAocmVmZCAmJiByZWZtICYmIHJlZm0ubGVuZ3RoID4gMikge1xuICAgICAgICBzd2l0Y2ggKHJlZm1bMV0pIHtcbiAgICAgICAgICBjYXNlICdFWFQtWC1WRVJTSU9OJzpcbiAgICAgICAgICAgIHJldC52ZXJzaW9uID0gcGFyc2VJbnQocmVmbVsyXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdFWFQtWC1NRURJQS1TRVFVRU5DRSc6XG4gICAgICAgICAgICByZXQuc2VxdWVuY2UgPSBwYXJzZUludChyZWZtWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0VYVC1YLVRBUkdFVERVUkFUSU9OJzpcbiAgICAgICAgICAgIHJldC50YXJnZXRkdXJhdGlvbiA9IHBhcnNlRmxvYXQocmVmbVsyXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdFWFRJTkYnOlxuICAgICAgICAgICAgTTNVOFBhcnNlci5wYXJzZUZyYWcocmVmbSwgcmVmcywgcmV0LCBiYXNldXJsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0VYVC1YLUtFWSc6XG4gICAgICAgICAgICBNM1U4UGFyc2VyLnBhcnNlRGVjcnlwdChyZWZtWzJdLHJldCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gaWYocmVmZCAmJiByZWZkLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgc3dpdGNoKHJlZmRbMV0pIHtcbiAgICAgICAgICBjYXNlICdFWFQtWC1ESVNDT05USU5VSVRZJzpcbiAgICAgICAgICAgIHJlZiA9IHJlZnMuc2hpZnQoKTtcbiAgICAgICAgICAgIGxldCByZWZtID0gcmVmLm1hdGNoKC8jKC5bQS1afC1dKik6KC4qKS8pO1xuICAgICAgICAgICAgaWYocmVmbS5sZW5ndGggPjIgJiYgcmVmbVsxXSA9PT0gJ0VYVElORicpIHtcbiAgICAgICAgICAgICAgTTNVOFBhcnNlci5wYXJzZUZyYWcocmVmbSwgcmVmcywgcmV0LCBiYXNldXJsLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVmID0gcmVmcy5zaGlmdCgpXG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBzdGF0aWMgcGFyc2VGcmFnIChyZWZtLCByZWZzLCByZXQsIGJhc2V1cmwsIGRpc2NvbnRpbnVlKSB7XG4gICAgaWYgKCFyZXQuZnJhZ3MpIHtcbiAgICAgIHJldC5mcmFncyA9IFtdXG4gICAgfVxuXG4gICAgbGV0IGZyZWcgPSB7XG4gICAgICBzdGFydDogcmV0LmR1cmF0aW9uLFxuICAgICAgZHVyYXRpb246IHBhcnNlRmxvYXQocmVmbVsyXSkgKiAxMDAwXG4gICAgfVxuXG4gICAgcmV0LmR1cmF0aW9uICs9IGZyZWcuZHVyYXRpb247XG4gICAgbGV0IG5leHRsaW5lID0gcmVmcy5zaGlmdCgpO1xuICAgIGlmIChuZXh0bGluZS5tYXRjaCgvIyguKik6KC4qKS8pKSB7XG4gICAgICBuZXh0bGluZSA9IHJlZnMuc2hpZnQoKTtcbiAgICB9XG4gICAgaWYgKG5leHRsaW5lLmxlbmd0aCA+IDAgJiYgbmV4dGxpbmUuY2hhckF0KDApID09PSAnLycgJiYgYmFzZXVybC5tYXRjaCgvLipcXC9cXC8uKlxcLlxcdysvZykpIHtcbiAgICAgIGJhc2V1cmwgPSBiYXNldXJsLm1hdGNoKC8uKlxcL1xcLy4qXFwuXFx3Ky9nKVswXTtcbiAgICB9XG4gICAgaWYgKG5leHRsaW5lLm1hdGNoKC8uKjpcXC9cXC8uKi8pKSB7XG4gICAgICBmcmVnLnVybCA9IG5leHRsaW5lO1xuICAgIH0gZWxzZSB7XG4gICAgICBmcmVnLnVybCA9IGJhc2V1cmwgKyBuZXh0bGluZTtcbiAgICB9XG4gICAgZnJlZy5kaXNjb250aW51ZSA9IGRpc2NvbnRpbnVlO1xuICAgIHJldC5mcmFncy5wdXNoKGZyZWcpO1xuICB9XG5cbiAgc3RhdGljIHBhcnNlVVJMICh1cmwpIHtcbiAgICBsZXQgYmFzZXVybCA9ICcnO1xuICAgIGxldCB1cmxzID0gdXJsLm1hdGNoKC8oLipcXC8pLipcXC5tM3U4Lyk7XG4gICAgaWYgKHVybHMgJiYgdXJscy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVybHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHVybHNbaV0ubWF0Y2goLy4qXFwvJC9nKSAmJiB1cmxzW2ldLmxlbmd0aCA+IGJhc2V1cmwubGVuZ3RoKSB7XG4gICAgICAgICAgYmFzZXVybCA9IHVybHNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJhc2V1cmw7XG4gIH1cblxuICBzdGF0aWMgcGFyc2VEZWNyeXB0KHJlZm0sIHJldCkge1xuICAgIHJldC5lbmNyeXB0ID0ge307XG4gICAgbGV0IHJlZnMgPSByZWZtLnNwbGl0KCcsJyk7XG4gICAgZm9yIChsZXQgaSBpbiByZWZzKSB7IFxuICAgICAgbGV0IGNtZCA9IHJlZnNbaV07XG4gICAgICBpZihjbWQubWF0Y2goL01FVEhPRD0oLiopLykpIHtcbiAgICAgICAgcmV0LmVuY3J5cHQubWV0aG9kID0gY21kLm1hdGNoKC9NRVRIT0Q9KC4qKS8pWzFdO1xuICAgICAgfVxuICAgICAgaWYoY21kLm1hdGNoKC9VUkk9XCIoLiopXCIvKSkge1xuICAgICAgICByZXQuZW5jcnlwdC51cmkgPSBjbWQubWF0Y2goL1VSST1cIiguKilcIi8pWzFdO1xuICAgICAgfVxuXG4gICAgICBpZihjbWQubWF0Y2goL0lWPTB4KC4qKS8pKSB7XG4gICAgICAgIGxldCBpdiA9IGNtZC5tYXRjaCgvSVY9MHgoLiopLylbMV07XG4gICAgICAgIGxldCBsZW5ndGggPSBNYXRoLmNlaWwoaXYubGVuZ3RoIC8gMik7XG4gICAgICAgIHJldC5lbmNyeXB0Lml2YiA9IG5ldyBVaW50OEFycmF5KGxlbmd0aCk7XG4gICAgICAgIGZvcihsZXQgaSA9IGxlbmd0aCAtIDE7IGkgPj0wOyBpLS0pIHtcbiAgICAgICAgICBsZXQgaW0gPSBwYXJzZUludChpdi5zdWJzdHIoaSAqIDIsIDIpLCAxNik7XG4gICAgICAgICAgcmV0LmVuY3J5cHQuaXZiW2ldID0gaW07XG4gICAgICAgIH0gXG4gICAgICAgIHJldC5lbmNyeXB0Lml2ID0gaXY7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNM1U4UGFyc2VyO1xuIiwiaW1wb3J0IHsgTmFsdW5pdCB9IGZyb20gJ3hncGxheWVyLWNvZGVjJztcbmltcG9ydCB7IEF1ZGlvVHJhY2ssIFZpZGVvVHJhY2sgfSBmcm9tICd4Z3BsYXllci1idWZmZXInO1xuaW1wb3J0IHtcbiAgQXVkaW9UcmFja01ldGEsXG4gIFZpZGVvVHJhY2tNZXRhLFxuICBBdWRpb1RyYWNrU2FtcGxlLFxuICBWaWRlb1RyYWNrU2FtcGxlLFxuICBFVkVOVFMsXG4gIFN0cmVhbVxufSBmcm9tICd4Z3BsYXllci11dGlscyc7XG5cbmNvbnN0IERFTVVYX0VWRU5UUyA9IEVWRU5UUy5ERU1VWF9FVkVOVFM7XG5jb25zdCBTdHJlYW1UeXBlID0ge1xuICAweDAxOiBbJ3ZpZGVvJywgJ01QRUctMSddLFxuICAweDAyOiBbJ3ZpZGVvJywgJ01QRUctMiddLFxuICAweDFiOiBbJ3ZpZGVvJywgJ0FWQy5IMjY0J10sXG4gIDB4ZWE6IFsndmlkZW8nLCAnVkMtMSddLFxuICAweDAzOiBbJ2F1ZGlvJywgJ01QRUctMSddLFxuICAweDA0OiBbJ2F1ZGlvJywgJ01QRUctMiddLFxuICAweDBmOiBbJ2F1ZGlvJywgJ01QRUctMi5BQUMnXSxcbiAgMHgxMTogWydhdWRpbycsICdNUEVHLTQuQUFDJ10sXG4gIDB4ODA6IFsnYXVkaW8nLCAnTFBDTSddLFxuICAweDgxOiBbJ2F1ZGlvJywgJ0FDMyddLFxuICAweDA2OiBbJ2F1ZGlvJywgJ0FDMyddLFxuICAweDgyOiBbJ2F1ZGlvJywgJ0RUUyddLFxuICAweDgzOiBbJ2F1ZGlvJywgJ0RvbGJ5IFRydWVIRCddLFxuICAweDg0OiBbJ2F1ZGlvJywgJ0FDMy1QbHVzJ10sXG4gIDB4ODU6IFsnYXVkaW8nLCAnRFRTLUhEJ10sXG4gIDB4ODY6IFsnYXVkaW8nLCAnRFRTLU1BJ10sXG4gIDB4YTE6IFsnYXVkaW8nLCAnQUMzLVBsdXMtU0VDJ10sXG4gIDB4YTI6IFsnYXVkaW8nLCAnRFRTLUhELVNFQyddXG59O1xuXG5jbGFzcyBUc0RlbXV4ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlncykge1xuICAgIHRoaXMuY29uZmlncyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZ3MpO1xuICAgIHRoaXMuZGVtdXhpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnBhdCA9IFtdO1xuICAgIHRoaXMucG10ID0gW107XG4gICAgdGhpcy5faGFzVmlkZW9NZXRhID0gZmFsc2U7XG4gICAgdGhpcy5faGFzQXVkaW9NZXRhID0gZmFsc2U7XG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLm9uKERFTVVYX0VWRU5UUy5ERU1VWF9TVEFSVCwgdGhpcy5kZW11eC5iaW5kKHRoaXMpKVxuICB9XG5cbiAgZGVtdXggKGZyYWcpIHtcbiAgICBpZiAodGhpcy5kZW11eGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGJ1ZmZlciA9IHRoaXMuaW5wdXRCdWZmZXI7XG4gICAgbGV0IGZyYWdzID0geyBwYXQ6IFtdLCBwbXQ6IFtdIH07XG4gICAgbGV0IHBlc2VzID0ge307XG5cbiAgICAvLyBSZWFkIFRTIHNlZ21lbnRcbiAgICB3aGlsZSAoYnVmZmVyLmxlbmd0aCA+PSAxODgpIHtcbiAgICAgIGlmIChidWZmZXIubGVuZ3RoID49IDEgJiYgYnVmZmVyLmFycmF5WzBdW2J1ZmZlci5vZmZzZXRdICE9PSA3MSkge1xuICAgICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLkRFTVVYX0VSUk9SLCB0aGlzLlRBRywgbmV3IEVycm9yKGBVbnRydXN0IHN5bmMgY29kZTogJHtidWZmZXIuYXJyYXlbMF1bYnVmZmVyLm9mZnNldF19LCB0cnkgdG8gcmVjb3ZlcjtgKSwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgd2hpbGUgKGJ1ZmZlci5sZW5ndGggPj0gMSAmJiBidWZmZXIuYXJyYXlbMF1bYnVmZmVyLm9mZnNldF0gIT09IDcxKSB7XG4gICAgICAgIGJ1ZmZlci5zaGlmdCgxKTtcbiAgICAgIH1cbiAgICAgIGxldCBidWYgPSBidWZmZXIuc2hpZnQoMTg4KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGJ1Zik7XG4gICAgICBsZXQgdHNTdHJlYW0gPSBuZXcgU3RyZWFtKGJ1Zi5idWZmZXIpO1xuICAgICAgbGV0IHRzID0ge307XG4gICAgICBUc0RlbXV4ZXIucmVhZCh0c1N0cmVhbSwgdHMsIGZyYWdzKTtcbiAgICAgIGlmICh0cy5wZXMpIHtcbiAgICAgICAgaWYgKCFwZXNlc1t0cy5oZWFkZXIucGlkXSkge1xuICAgICAgICAgIHBlc2VzW3RzLmhlYWRlci5waWRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcGVzZXNbdHMuaGVhZGVyLnBpZF0ucHVzaCh0cy5wZXMpO1xuICAgICAgICB0cy5wZXMuRVMuYnVmZmVyID0gW3RzLnBlcy5FUy5idWZmZXJdO1xuICAgICAgfSBlbHNlIGlmIChwZXNlc1t0cy5oZWFkZXIucGlkXSkge1xuICAgICAgICBwZXNlc1t0cy5oZWFkZXIucGlkXVtwZXNlc1t0cy5oZWFkZXIucGlkXS5sZW5ndGggLSAxXS5FUy5idWZmZXIucHVzaCh0cy5wYXlsb2FkLnN0cmVhbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IEF1ZGlvT3B0aW9ucyA9IGZyYWc7XG4gICAgbGV0IFZpZGVvT3B0aW9ucyA9IGZyYWc7XG5cbiAgICAvLyBHZXQgRnJhbWVzIGRhdGFcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC5rZXlzKHBlc2VzKS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGVwZXNlcyA9IHBlc2VzW09iamVjdC5rZXlzKHBlc2VzKVtpXV07XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGVwZXNlcy5sZW5ndGg7IGorKykge1xuICAgICAgICBlcGVzZXNbal0uaWQgPSBPYmplY3Qua2V5cyhwZXNlcylbaV07XG4gICAgICAgIGVwZXNlc1tqXS5FUy5idWZmZXIgPSBUc0RlbXV4ZXIuTWVyZ2UoZXBlc2VzW2pdLkVTLmJ1ZmZlcik7XG4gICAgICAgIGlmIChlcGVzZXNbal0udHlwZSA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgIHRoaXMucHVzaEF1ZGlvU2FtcGxlKGVwZXNlc1tqXSwgQXVkaW9PcHRpb25zKTtcbiAgICAgICAgICBBdWRpb09wdGlvbnMgPSB7fTtcbiAgICAgICAgfSBlbHNlIGlmIChlcGVzZXNbal0udHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgIHRoaXMucHVzaFZpZGVvU2FtcGxlKGVwZXNlc1tqXSwgVmlkZW9PcHRpb25zKTtcbiAgICAgICAgICBWaWRlb09wdGlvbnMgPSB7fTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9oYXNBdWRpb01ldGEpIHtcbiAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuREVNVVhfQ09NUExFVEUsICdhdWRpbycpO1xuICAgIH1cbiAgICBpZiAodGhpcy5faGFzVmlkZW9NZXRhKSB7XG4gICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLkRFTVVYX0NPTVBMRVRFLCAndmlkZW8nKTtcbiAgICB9XG4gIH1cblxuICBwdXNoQXVkaW9TYW1wbGUgKHBlcywgb3B0aW9ucykge1xuICAgIGxldCB0cmFjaztcbiAgICBpZiAoIXRoaXMuX3RyYWNrcy5hdWRpb1RyYWNrKSB7XG4gICAgICB0aGlzLl90cmFja3MuYXVkaW9UcmFjayA9IG5ldyBBdWRpb1RyYWNrKCk7XG4gICAgICB0cmFjayA9IHRoaXMuX3RyYWNrcy5hdWRpb1RyYWNrO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFjayA9IHRoaXMuX3RyYWNrcy5hdWRpb1RyYWNrO1xuICAgIH1cbiAgICBsZXQgbWV0YSA9IG5ldyBBdWRpb1RyYWNrTWV0YSh7XG4gICAgICBhdWRpb1NhbXBsZVJhdGU6IHBlcy5FUy5mcmVxdWVuY2UsXG4gICAgICBzYW1wbGVSYXRlOiBwZXMuRVMuZnJlcXVlbmNlLFxuICAgICAgY2hhbm5lbENvdW50OiBwZXMuRVMuY2hhbm5lbCxcbiAgICAgIGNvZGVjOiAnbXA0YS40MC4nICsgcGVzLkVTLmF1ZGlvT2JqZWN0VHlwZSxcbiAgICAgIGNvbmZpZzogcGVzLkVTLmF1ZGlvQ29uZmlnLFxuICAgICAgaWQ6IDIsXG4gICAgICBzYW1wbGVSYXRlSW5kZXg6IHBlcy5FUy5mcmVxdWVuY3lJbmRleFxuICAgIH0pO1xuICAgIG1ldGEucmVmU2FtcGxlRHVyYXRpb24gPSBNYXRoLmZsb29yKDEwMjQgLyBtZXRhLmF1ZGlvU2FtcGxlUmF0ZSAqIG1ldGEudGltZXNjYWxlKTtcblxuICAgIGxldCBtZXRhRXF1YWwgPSBUc0RlbXV4ZXIuY29tcGFpcmVNZXRhKHRyYWNrLm1ldGEsIG1ldGEsIHRydWUpO1xuXG4gICAgaWYgKCF0aGlzLl9oYXNBdWRpb01ldGEgfHwgIW1ldGFFcXVhbCkge1xuICAgICAgdHJhY2subWV0YSA9IG1ldGE7XG4gICAgICB0aGlzLl9oYXNBdWRpb01ldGEgPSB0cnVlXG4gICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLk1FVEFEQVRBX1BBUlNFRCwgJ2F1ZGlvJyk7XG4gICAgfVxuXG4gICAgbGV0IGRhdGEgPSBuZXcgVWludDhBcnJheShwZXMuRVMuYnVmZmVyLmJ1ZmZlci5zbGljZShwZXMuRVMuYnVmZmVyLnBvc2l0aW9uLCBwZXMuRVMuYnVmZmVyLmxlbmd0aCkpO1xuICAgIGxldCBkdHMgPSBwYXJzZUludChwZXMucHRzIC8gOTApO1xuICAgIGxldCBwdHMgPSBwYXJzZUludChwZXMucHRzIC8gOTApO1xuICAgIGxldCBzYW1wbGUgPSBuZXcgQXVkaW9UcmFja1NhbXBsZSh7ZHRzLCBwdHMsIGRhdGEsIG9wdGlvbnN9KTtcbiAgICB0cmFjay5zYW1wbGVzLnB1c2goc2FtcGxlKTtcbiAgfVxuXG4gIHB1c2hWaWRlb1NhbXBsZSAocGVzLCBvcHRpb25zKSB7XG4gICAgbGV0IG5hbHMgPSBOYWx1bml0LmdldE5hbHVuaXRzKHBlcy5FUy5idWZmZXIpO1xuICAgIGxldCB0cmFjaztcbiAgICBsZXQgbWV0YSA9IG5ldyBWaWRlb1RyYWNrTWV0YSgpO1xuICAgIGlmICghdGhpcy5fdHJhY2tzLnZpZGVvVHJhY2spIHtcbiAgICAgIHRoaXMuX3RyYWNrcy52aWRlb1RyYWNrID0gbmV3IFZpZGVvVHJhY2soKTtcbiAgICAgIHRyYWNrID0gdGhpcy5fdHJhY2tzLnZpZGVvVHJhY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYWNrID0gdGhpcy5fdHJhY2tzLnZpZGVvVHJhY2s7XG4gICAgfVxuICAgIGxldCBzYW1wbGVMZW5ndGggPSAwO1xuICAgIGxldCBzcHMgPSBmYWxzZTtcbiAgICBsZXQgcHBzID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbmFsID0gbmFsc1tpXTtcbiAgICAgIGlmIChuYWwuc3BzKSB7XG4gICAgICAgIHNwcyA9IG5hbDtcbiAgICAgICAgdHJhY2suc3BzID0gbmFsLmJvZHk7XG4gICAgICAgIG1ldGEuY2hyb21hRm9ybWF0ID0gc3BzLnNwcy5jaHJvbWFfZm9ybWF0XG4gICAgICAgIG1ldGEuY29kZWMgPSAnYXZjMS4nO1xuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IDQ7IGorKykge1xuICAgICAgICAgIHZhciBoID0gc3BzLmJvZHlbal0udG9TdHJpbmcoMTYpO1xuICAgICAgICAgIGlmIChoLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIGggPSAnMCcgKyBoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtZXRhLmNvZGVjICs9IGg7XG4gICAgICAgIH1cbiAgICAgICAgbWV0YS5jb2RlY0hlaWdodCA9IHNwcy5zcHMuY29kZWNfc2l6ZS5oZWlnaHQ7XG4gICAgICAgIG1ldGEuY29kZWNXaWR0aCA9IHNwcy5zcHMuY29kZWNfc2l6ZS53aWR0aDtcbiAgICAgICAgbWV0YS5mcmFtZVJhdGUgPSBzcHMuc3BzLmZyYW1lX3JhdGU7XG4gICAgICAgIG1ldGEuaWQgPSAxO1xuICAgICAgICBtZXRhLmxldmVsID0gc3BzLnNwcy5sZXZlbF9zdHJpbmc7XG4gICAgICAgIG1ldGEucHJlc2VudEhlaWdodCA9IHNwcy5zcHMucHJlc2VudF9zaXplLmhlaWdodDtcbiAgICAgICAgbWV0YS5wcmVzZW50V2lkdGggPSBzcHMuc3BzLnByZXNlbnRfc2l6ZS53aWR0aDtcbiAgICAgICAgbWV0YS5wcm9maWxlID0gc3BzLnNwcy5wcm9maWxlX3N0cmluZztcbiAgICAgICAgbWV0YS5yZWZTYW1wbGVEdXJhdGlvbiA9IE1hdGguZmxvb3IobWV0YS50aW1lc2NhbGUgKiAoc3BzLnNwcy5mcmFtZV9yYXRlLmZwc19kZW4gLyBzcHMuc3BzLmZyYW1lX3JhdGUuZnBzX251bSkpO1xuICAgICAgICBtZXRhLnNhclJhdGlvID0gc3BzLnNwcy5zYXJfcmF0aW8gPyBzcHMuc3BzLnNhcl9yYXRpbyA6IHNwcy5zcHMucGFyX3JhdGlvO1xuICAgICAgfSBlbHNlIGlmIChuYWwucHBzKSB7XG4gICAgICAgIHRyYWNrLnBwcyA9IG5hbC5ib2R5O1xuICAgICAgICBwcHMgPSBuYWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzYW1wbGVMZW5ndGggKz0gKDQgKyBuYWwuYm9keS5ieXRlTGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3BzICYmIHBwcykge1xuICAgICAgbWV0YS5hdmNjID0gTmFsdW5pdC5nZXRBdmNjKHNwcy5ib2R5LCBwcHMuYm9keSk7XG4gICAgICBsZXQgbWV0YUVxdWFsID0gVHNEZW11eGVyLmNvbXBhaXJlTWV0YSh0cmFjay5tZXRhLCBtZXRhLCB0cnVlKTtcbiAgICAgIGlmICghdGhpcy5faGFzVmlkZW9NZXRhIHx8ICFtZXRhRXF1YWwpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICBvcHRpb25zLm1ldGEgPSBPYmplY3QuYXNzaWduKHt9LCBtZXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0YTogT2JqZWN0LmFzc2lnbih7fSwgbWV0YSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdHJhY2subWV0YSA9IG1ldGE7XG4gICAgICAgIHRoaXMuX2hhc1ZpZGVvTWV0YSA9IHRydWVcbiAgICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5NRVRBREFUQV9QQVJTRUQsICd2aWRlbycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoc2FtcGxlTGVuZ3RoKTtcbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICBsZXQgaXNLZXlmcmFtZSA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmFscy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG5hbCA9IG5hbHNbaV07XG4gICAgICBsZXQgbGVuZ3RoID0gbmFsLmJvZHkuYnl0ZUxlbmd0aDtcbiAgICAgIGlmIChuYWwuaWRyKSB7XG4gICAgICAgIGlzS2V5ZnJhbWUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKCFuYWwucHBzICYmICFuYWwuc3BzKSB7XG4gICAgICAgIGRhdGEuc2V0KG5ldyBVaW50OEFycmF5KFtsZW5ndGggPj4+IDI0ICYgMHhmZixcbiAgICAgICAgICBsZW5ndGggPj4+IDE2ICYgMHhmZixcbiAgICAgICAgICBsZW5ndGggPj4+IDggJiAweGZmLFxuICAgICAgICAgIGxlbmd0aCAmIDB4ZmZcbiAgICAgICAgXSksIG9mZnNldCk7XG4gICAgICAgIG9mZnNldCArPSA0O1xuICAgICAgICBkYXRhLnNldChuYWwuYm9keSwgb2Zmc2V0KTtcbiAgICAgICAgb2Zmc2V0ICs9IGxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHNhbXBsZSA9IG5ldyBWaWRlb1RyYWNrU2FtcGxlKHtcbiAgICAgIGR0czogcGFyc2VJbnQocGVzLmR0cyAvIDkwKSxcbiAgICAgIHB0czogcGFyc2VJbnQocGVzLnB0cyAvIDkwKSxcbiAgICAgIGN0czogKHBlcy5wdHMgLSBwZXMuZHRzKSAvIDkwLFxuICAgICAgb3JpZ2luRHRzOiBwZXMuZHRzLFxuICAgICAgaXNLZXlmcmFtZSxcbiAgICAgIGRhdGEsXG4gICAgICBvcHRpb25zXG4gICAgfSlcbiAgICB0cmFjay5zYW1wbGVzLnB1c2goc2FtcGxlKTtcbiAgfVxuXG4gIGRlc3RvcnkgKCkge1xuICAgIHRoaXMub2ZmKERFTVVYX0VWRU5UUy5ERU1VWF9TVEFSVCwgdGhpcy5kZW11eCk7XG4gICAgdGhpcy5jb25maWdzID0ge307XG4gICAgdGhpcy5kZW11eGluZyA9IGZhbHNlO1xuICAgIHRoaXMucGF0ID0gW107XG4gICAgdGhpcy5wbXQgPSBbXTtcbiAgICB0aGlzLl9oYXNWaWRlb01ldGEgPSBmYWxzZTtcbiAgICB0aGlzLl9oYXNBdWRpb01ldGEgPSBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBjb21wYWlyZUFycmF5IChhLCBiLCB0eXBlKSB7XG4gICAgbGV0IGFsID0gMDtcbiAgICBsZXQgYmwgPSAwO1xuICAgIGlmICh0eXBlID09PSAnVWludDhBcnJheScpIHtcbiAgICAgIGFsID0gYS5ieXRlTGVuZ3RoO1xuICAgICAgYmwgPSBiLmJ5dGVMZW5ndGg7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnQXJyYXknKSB7XG4gICAgICBhbCA9IGEubGVuZ3RoO1xuICAgICAgYmwgPSBiLmxlbmd0aDtcbiAgICB9XG4gICAgaWYgKGFsICE9PSBibCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWw7IGkrKykge1xuICAgICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRpYyBjb21wYWlyZU1ldGEgKGEsIGIsIGlnbm9yZUR1cmF0aW9uKSB7XG4gICAgaWYgKCFhIHx8ICFiKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGsgPSBPYmplY3Qua2V5cyhhKS5sZW5ndGg7IGkgPCBrOyBpKyspIHtcbiAgICAgIGxldCBpdGVtYSA9IGFbT2JqZWN0LmtleXMoYSlbaV1dO1xuICAgICAgbGV0IGl0ZW1iID0gYltPYmplY3Qua2V5cyhhKVtpXV07XG4gICAgICBpZiAodHlwZW9mIGl0ZW1hICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAoKGlnbm9yZUR1cmF0aW9uICYmIE9iamVjdC5rZXlzKGEpW2ldICE9PSAnZHVyYXRpb24nICYmIE9iamVjdC5rZXlzKGEpW2ldICE9PSAncmVmU2FtcGxlRHVyYXRpb24nICYmIE9iamVjdC5rZXlzKGEpW2ldICE9PSAncmVmU2FtcGxlRHVyYXRpb25GaXhlZCcpICYmIGl0ZW1hICE9PSBpdGVtYikge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpdGVtYS5ieXRlTGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGl0ZW1iLmJ5dGVMZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVRzRGVtdXhlci5jb21wYWlyZUFycmF5KGl0ZW1hLCBpdGVtYiwgJ1VpbnQ4QXJyYXknKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpdGVtYS5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXRlbWIubGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFUc0RlbXV4ZXIuY29tcGFpcmVBcnJheShpdGVtYSwgaXRlbWIsICdBcnJheScpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIVRzRGVtdXhlci5jb21wYWlyZU1ldGEoaXRlbWEsIGl0ZW1iKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRpYyBNZXJnZSAoYnVmZmVycykge1xuICAgIGxldCBkYXRhO1xuICAgIGxldCBsZW5ndGggPSAwO1xuICAgIGxldCBvZmZzZXQgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVmZmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGVuZ3RoICs9IChidWZmZXJzW2ldLmxlbmd0aCAtIGJ1ZmZlcnNbaV0ucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGRhdGEgPSBuZXcgVWludDhBcnJheShsZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVmZmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGJ1ZmZlciA9IGJ1ZmZlcnNbaV07XG4gICAgICBkYXRhLnNldChuZXcgVWludDhBcnJheShidWZmZXIuYnVmZmVyLCBidWZmZXIucG9zaXRpb24pLCBvZmZzZXQpO1xuICAgICAgb2Zmc2V0ICs9IGJ1ZmZlci5sZW5ndGggLSBidWZmZXIucG9zaXRpb247XG4gICAgfVxuICAgIHJldHVybiBuZXcgU3RyZWFtKGRhdGEuYnVmZmVyKTtcbiAgfVxuXG4gIHN0YXRpYyByZWFkIChzdHJlYW0sIHRzLCBmcmFncykge1xuICAgIFRzRGVtdXhlci5yZWFkSGVhZGVyKHN0cmVhbSwgdHMpO1xuICAgIFRzRGVtdXhlci5yZWFkUGF5bG9hZChzdHJlYW0sIHRzLCBmcmFncyk7XG4gICAgaWYgKHRzLmhlYWRlci5wYWNrZXQgPT09ICdNRURJQScgJiYgdHMuaGVhZGVyLnBheWxvYWQgPT09IDEgJiYgIXRzLnVua25vd25QSURzKSB7XG4gICAgICB0cy5wZXMgPSBUc0RlbXV4ZXIuUEVTKHRzKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcmVhZFBheWxvYWQgKHN0cmVhbSwgdHMsIGZyYWdzKSB7XG4gICAgbGV0IGhlYWRlciA9IHRzLmhlYWRlclxuICAgIGxldCBwaWQgPSBoZWFkZXIucGlkO1xuICAgIHN3aXRjaCAocGlkKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIFRzRGVtdXhlci5QQVQoc3RyZWFtLCB0cywgZnJhZ3MpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgVHNEZW11eGVyLkNBVChzdHJlYW0sIHRzLCBmcmFncyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBUc0RlbXV4ZXIuVFNEVChzdHJlYW0sIHRzLCBmcmFncyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAweDFmZmY6XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gVE9ETzogc29tZeeahOWGmeazleS4jeWkquWlve+8jOW+l+aUuVxuICAgICAgICBpZiAoZnJhZ3MucGF0LnNvbWUoKGl0ZW0pID0+IHsgcmV0dXJuIGl0ZW0ucGlkID09PSBwaWQ7IH0pKSB7XG4gICAgICAgICAgVHNEZW11eGVyLlBNVChzdHJlYW0sIHRzLCBmcmFncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IHN0cyA9IGZyYWdzLnBtdCA/IGZyYWdzLnBtdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ucGlkID09PSBwaWQpIDogW107XG4gICAgICAgICAgaWYgKHN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBUc0RlbXV4ZXIuTWVkaWEoc3RyZWFtLCB0cywgU3RyZWFtVHlwZVtzdHNbMF0uc3RyZWFtVHlwZV1bMF0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRzLnVua25vd25QSURzID0gdHJ1ZTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHJlYWRIZWFkZXIgKHN0cmVhbSwgdHMpIHtcbiAgICBsZXQgaGVhZGVyID0ge307XG4gICAgaGVhZGVyLnN5bmMgPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgbGV0IG5leHQgPSBzdHJlYW0ucmVhZFVpbnQxNigpO1xuICAgIGhlYWRlci5lcnJvciA9IG5leHQgPj4+IDE1O1xuICAgIGhlYWRlci5wYXlsb2FkID0gbmV4dCA+Pj4gMTQgJiAxO1xuICAgIGhlYWRlci5wcmlvcml0eSA9IG5leHQgPj4+IDEzICYgMTtcbiAgICBoZWFkZXIucGlkID0gbmV4dCAmIDB4MWZmZjtcblxuICAgIG5leHQgPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG5cbiAgICBoZWFkZXIuc2NyYW1ibGluZyA9IG5leHQgPj4gNiAmIDB4MzsgLy8g5piv5ZCm5Yqg5a+G77yMMDDooajnpLrkuI3liqDlr4ZcblxuICAgIC8qKlxuICAgICAqIDAwIElTTy9JRUPmnKrmnaXkvb/nlKjkv53nlZlcbiAgICAgKiAwMSDmsqHmnInosIPmlbTlrZfmrrXvvIzku4XlkKvmnIkxODRC5pyJ5pWI5YeA6I23XG4gICAgICogMDIg5rKh5pyJ5pyJ5pWI5YeA6I2377yM5LuF5ZCr5pyJMTgzQuiwg+aVtOWtl+autVxuICAgICAqIDAzIDB+MTgyQuiwg+aVtOWtl+auteWQjuS4uuacieaViOWHgOiNt1xuICAgICAqL1xuICAgIGhlYWRlci5hZGFwdGF0aW9uID0gbmV4dCA+PiA0ICYgMHgzO1xuICAgIGhlYWRlci5jb250aW51aXR5ID0gbmV4dCAmIDE1O1xuICAgIGhlYWRlci5wYWNrZXQgPSBoZWFkZXIucGlkID09PSAwID8gJ1BBVCcgOiAnTUVESUEnO1xuICAgIHRzLmhlYWRlciA9IGhlYWRlcjtcbiAgfVxuXG4gIHN0YXRpYyBQQVQgKHN0cmVhbSwgdHMsIGZyYWdzKSB7XG4gICAgbGV0IHJldCA9IHt9O1xuICAgIGxldCBuZXh0ID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgIHN0cmVhbS5za2lwKG5leHQpO1xuICAgIG5leHQgPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgcmV0LnRhYmVsSUQgPSBuZXh0O1xuICAgIG5leHQgPSBzdHJlYW0ucmVhZFVpbnQxNigpO1xuICAgIHJldC5lcnJvciA9IG5leHQgPj4+IDc7XG4gICAgcmV0Lnplcm8gPSBuZXh0ID4+PiA2ICYgMTtcbiAgICByZXQuc2VjdGlvbkxlbmd0aCA9IG5leHQgJiAweGZmZjtcbiAgICByZXQuc3RyZWFtSUQgPSBzdHJlYW0ucmVhZFVpbnQxNigpO1xuICAgIHJldC5jdXJyZW50ID0gc3RyZWFtLnJlYWRVaW50OCgpICYgMTtcbiAgICByZXQuc2VjdGlvbk51bWJlciA9IHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICByZXQubGFzdFNlY3Rpb25OdW1iZXIgPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgbGV0IE4gPSAocmV0LnNlY3Rpb25MZW5ndGggLSA5KSAvIDQ7XG4gICAgbGV0IGxpc3QgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE47IGkrKykge1xuICAgICAgbGV0IHByb2dyYW1OdW1iZXIgPSBzdHJlYW0ucmVhZFVpbnQxNigpO1xuICAgICAgbGV0IHBpZCA9IHN0cmVhbS5yZWFkVWludDE2KCkgJiAweDFmZmY7XG4gICAgICBsaXN0LnB1c2goe1xuICAgICAgICBwcm9ncmFtOiBwcm9ncmFtTnVtYmVyLFxuICAgICAgICBwaWQsXG4gICAgICAgIHR5cGU6IHByb2dyYW1OdW1iZXIgPT09IDAgPyAnbmV0d29yaycgOiAnbWFwUElEJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChsaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIGZyYWdzLnBhdCA9IGZyYWdzLnBhdC5jb25jYXQobGlzdCk7XG4gICAgfVxuICAgIHJldC5saXN0ID0gbGlzdDtcbiAgICByZXQucHJvZ3JhbSA9IHN0cmVhbS5yZWFkVWludDE2KCk7XG4gICAgcmV0LnBpZCA9IHN0cmVhbS5yZWFkVWludDE2KCkgJiAweDFmZmY7XG4gICAgdHMucGF5bG9hZCA9IHJldDtcbiAgICAvLyBUT0RPIENSQ1xuICB9XG5cbiAgc3RhdGljIFBNVCAoc3RyZWFtLCB0cywgZnJhZ3MpIHtcbiAgICBsZXQgcmV0ID0ge307XG4gICAgbGV0IGhlYWRlciA9IHRzLmhlYWRlcjtcbiAgICBoZWFkZXIucGFja2V0ID0gJ1BNVCc7XG4gICAgbGV0IG5leHQgPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgc3RyZWFtLnNraXAobmV4dCk7XG4gICAgbmV4dCA9IHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICByZXQudGFibGVJRCA9IG5leHQ7XG4gICAgbmV4dCA9IHN0cmVhbS5yZWFkVWludDE2KCk7XG4gICAgcmV0LnNlY3Rpb25MZW5ndGggPSBuZXh0ICYgMHhmZmY7XG4gICAgcmV0LnByb2dyYW0gPSBzdHJlYW0ucmVhZFVpbnQxNigpO1xuICAgIHJldC5jdXJyZW50ID0gc3RyZWFtLnJlYWRVaW50OCgpICYgMTtcbiAgICByZXQub3JkZXIgPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgcmV0Lmxhc3RPcmRlciA9IHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICByZXQuUENSX1BJRCA9IHN0cmVhbS5yZWFkVWludDE2KCkgJiAweDFmZmY7XG4gICAgcmV0LnByb2dyYW1MZW5ndGggPSBzdHJlYW0ucmVhZFVpbnQxNigpICYgMHhmZmY7XG4gICAgbGV0IE4gPSAocmV0LnNlY3Rpb25MZW5ndGggLSAxMykgLyA1O1xuICAgIGxldCBsaXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyBpKyspIHtcbiAgICAgIGxpc3QucHVzaCh7XG4gICAgICAgIHN0cmVhbVR5cGU6IHN0cmVhbS5yZWFkVWludDgoKSxcbiAgICAgICAgcGlkOiBzdHJlYW0ucmVhZFVpbnQxNigpICYgMHgxZmZmLCAvLyAweDA3ZTUg6KeG6aKR77yMMHgwN2U2XG4gICAgICAgIGVzOiBzdHJlYW0ucmVhZFVpbnQxNigpICYgMHhmZmZcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXQubGlzdCA9IGxpc3Q7XG4gICAgaWYgKCF0aGlzLnBtdCkge1xuICAgICAgdGhpcy5wbXQgPSBbXTtcbiAgICB9XG4gICAgZnJhZ3MucG10ID0gdGhpcy5wbXQuY29uY2F0KGxpc3QubWFwKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwaWQ6IGl0ZW0ucGlkLFxuICAgICAgICBlczogaXRlbS5lcyxcbiAgICAgICAgc3RyZWFtVHlwZTogaXRlbS5zdHJlYW1UeXBlLFxuICAgICAgICBwcm9ncmFtOiByZXQucHJvZ3JhbVxuICAgICAgfTtcbiAgICB9KSk7XG4gICAgdHMucGF5bG9hZCA9IHJldDtcbiAgfVxuXG4gIHN0YXRpYyBNZWRpYSAoc3RyZWFtLCB0cywgdHlwZSkge1xuICAgIGxldCBoZWFkZXIgPSB0cy5oZWFkZXI7XG4gICAgbGV0IHBheWxvYWQgPSB7fTtcbiAgICBoZWFkZXIudHlwZSA9IHR5cGU7XG4gICAgaWYgKGhlYWRlci5hZGFwdGF0aW9uID09PSAweDAzKSB7XG4gICAgICBwYXlsb2FkLmFkYXB0YXRpb25MZW5ndGggPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgICBpZiAocGF5bG9hZC5hZGFwdGF0aW9uTGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgbmV4dCA9IHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICAgICAgcGF5bG9hZC5kaXNjb250aW51ZSA9IG5leHQgPj4+IDc7XG4gICAgICAgIHBheWxvYWQuYWNjZXNzID0gbmV4dCA+Pj4gNiAmIDB4MDE7XG4gICAgICAgIHBheWxvYWQucHJpb3JpdHkgPSBuZXh0ID4+PiA1ICYgMHgwMTtcbiAgICAgICAgcGF5bG9hZC5QQ1IgPSBuZXh0ID4+PiA0ICYgMHgwMTtcbiAgICAgICAgcGF5bG9hZC5PUENSID0gbmV4dCA+Pj4gMyAmIDB4MDE7XG4gICAgICAgIHBheWxvYWQuc3BsaWNlUG9pbnQgPSBuZXh0ID4+PiAyICYgMHgwMTtcbiAgICAgICAgcGF5bG9hZC50cmFuc3BvcnRQcml2YXRlID0gbmV4dCA+Pj4gMSAmIDB4MDE7XG4gICAgICAgIHBheWxvYWQuYWRhcHRhdGlvbkZpZWxkID0gbmV4dCAmIDB4MDE7XG4gICAgICAgIGxldCBfc3RhcnQgPSBzdHJlYW0ucG9zaXRpb247XG4gICAgICAgIGlmIChwYXlsb2FkLlBDUiA9PT0gMSkge1xuICAgICAgICAgIHBheWxvYWQucHJvZ3JhbUNsb2NrQmFzZSA9IHN0cmVhbS5yZWFkVWludDMyKCkgPDwgMTtcbiAgICAgICAgICBuZXh0ID0gc3RyZWFtLnJlYWRVaW50MTYoKTtcbiAgICAgICAgICBwYXlsb2FkLnByb2dyYW1DbG9ja0Jhc2UgfD0gbmV4dCA+Pj4gMTU7XG4gICAgICAgICAgcGF5bG9hZC5wcm9ncmFtQ2xvY2tFeHRlbnNpb24gPSBuZXh0ICYgMHgxZmY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBheWxvYWQuT1BDUiA9PT0gMSkge1xuICAgICAgICAgIHBheWxvYWQub3JpZ2luUHJvZ3JhbUNsb2NrQmFzZSA9IHN0cmVhbS5yZWFkVWludDMyKCkgPDwgMTtcbiAgICAgICAgICBuZXh0ID0gc3RyZWFtLnJlYWRVaW50MTYoKTtcbiAgICAgICAgICBwYXlsb2FkLm9yaWdpblByb2dyYW1DbG9ja0Jhc2UgKz0gbmV4dCA+Pj4gMTU7XG4gICAgICAgICAgcGF5bG9hZC5vcmlnaW5Qcm9ncmFtQ2xvY2tFeHRlbnNpb24gPSBuZXh0ICYgMHgxZmY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBheWxvYWQuc3BsaWNlUG9pbnQgPT09IDEpIHtcbiAgICAgICAgICBwYXlsb2FkLnNwbGljZUNvdW50ZG93biA9IHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF5bG9hZC50cmFuc3BvcnRQcml2YXRlID09PSAxKSB7XG4gICAgICAgICAgbGV0IGxlbmd0aCA9IHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICAgICAgICBsZXQgdHJhbnNwb3J0UHJpdmF0ZURhdGEgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0cmFuc3BvcnRQcml2YXRlRGF0YS5wdXNoKHN0cmVhbS5yZWFkVWludDgoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwYXlsb2FkLmFkYXB0YXRpb25GaWVsZCA9PT0gMSkge1xuICAgICAgICAgIGxldCBsZW5ndGggPSBzdHJlYW0ucmVhZFVpbnQ4KClcbiAgICAgICAgICBsZXQgbmV4dCA9IHN0cmVhbS5yZWFkVWludDgoKVxuICAgICAgICAgIGxldCBzdGFydCA9IHN0cmVhbS5wb3NpdGlvbjtcbiAgICAgICAgICBsZXQgbHR3ID0gbmV4dCA+Pj4gNztcbiAgICAgICAgICBsZXQgcGllY2V3aXNlID0gbmV4dCA+Pj4gNiAmIDB4MTtcbiAgICAgICAgICBsZXQgc2VhbWxlc3MgPSBuZXh0ID4+PiA1ICYgMHgxO1xuICAgICAgICAgIGlmIChsdHcgPT09IDEpIHtcbiAgICAgICAgICAgIG5leHQgPSBzdHJlYW0ucmVhZFVpbnQxNigpO1xuICAgICAgICAgICAgcGF5bG9hZC5sdHdWYWxpZCA9IG5leHQgPj4+IDE1O1xuICAgICAgICAgICAgcGF5bG9hZC5sdHdPZmZzZXQgPSBuZXh0ICYgMHhlZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGllY2V3aXNlID09PSAxKSB7XG4gICAgICAgICAgICBuZXh0ID0gc3RyZWFtLnJlYWRVaW50MjQoKTtcbiAgICAgICAgICAgIHBheWxvYWQucGllY2V3aXNlUmF0ZSA9IG5leHQgJiAweDNmZmZmZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNlYW1sZXNzID09PSAxKSB7XG4gICAgICAgICAgICBuZXh0ID0gc3RyZWFtLnJlYWRJbnQ4KCk7XG4gICAgICAgICAgICBwYXlsb2FkLnNwbGljZVR5cGUgPSBuZXh0ID4+PiA0O1xuICAgICAgICAgICAgcGF5bG9hZC5kdHNOZXh0QVUxID0gbmV4dCA+Pj4gMSAmIDB4NztcbiAgICAgICAgICAgIHBheWxvYWQubWFya2VyMSA9IG5leHQgJiAweDE7XG4gICAgICAgICAgICBuZXh0ID0gc3RyZWFtLnJlYWRVaW50MTYoKTtcbiAgICAgICAgICAgIHBheWxvYWQuZHRzTmV4dEFVMiA9IG5leHQgPj4+IDE7XG4gICAgICAgICAgICBwYXlsb2FkLm1hcmtlcjIgPSBuZXh0ICYgMHgxO1xuICAgICAgICAgICAgbmV4dCA9IHN0cmVhbS5yZWFkVWludDE2KCk7XG4gICAgICAgICAgICBwYXlsb2FkLmR0c05leHRBVTMgPSBuZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdHJlYW0uc2tpcChsZW5ndGggLSAxIC0gKHN0cmVhbS5wb3NpdGlvbiAtIHN0YXJ0KSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxhc3RTdHVmZmluZyA9IHBheWxvYWQuYWRhcHRhdGlvbkxlbmd0aCAtIDEgLSAoc3RyZWFtLnBvc2l0aW9uIC0gX3N0YXJ0KTtcbiAgICAgICAgc3RyZWFtLnNraXAobGFzdFN0dWZmaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcGF5bG9hZC5zdHJlYW0gPSBuZXcgU3RyZWFtKHN0cmVhbS5idWZmZXIuc2xpY2Uoc3RyZWFtLnBvc2l0aW9uKSk7XG4gICAgdHMucGF5bG9hZCA9IHBheWxvYWQ7XG4gIH1cblxuICBzdGF0aWMgUEVTICh0cykge1xuICAgIGxldCByZXQgPSB7fTtcbiAgICBsZXQgYnVmZmVyID0gdHMucGF5bG9hZC5zdHJlYW07XG5cbiAgICBsZXQgbmV4dCA9IGJ1ZmZlci5yZWFkVWludDI0KCk7XG4gICAgaWYgKG5leHQgIT09IDEpIHtcbiAgICAgIHJldC5FUyA9IHt9O1xuICAgICAgcmV0LkVTLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHN0cmVhbUlEID0gYnVmZmVyLnJlYWRVaW50OCgpO1xuICAgICAgaWYgKHN0cmVhbUlEID49IDB4ZTAgJiYgc3RyZWFtSUQgPD0gMHhlZikge1xuICAgICAgICByZXQudHlwZSA9ICd2aWRlbyc7XG4gICAgICB9XG4gICAgICBpZiAoc3RyZWFtSUQgPj0gMHhjMCAmJiBzdHJlYW1JRCA8PSAweGRmKSB7XG4gICAgICAgIHJldC50eXBlID0gJ2F1ZGlvJztcbiAgICAgIH1cbiAgICAgIGxldCBwYWNrZXRMZW5ndGggPSBidWZmZXIucmVhZFVpbnQxNigpO1xuICAgICAgcmV0LnBhY2tldExlbmd0aCA9IHBhY2tldExlbmd0aDtcbiAgICAgIGlmIChyZXQudHlwZSA9PT0gJ3ZpZGVvJyB8fCByZXQudHlwZSA9PT0gJ2F1ZGlvJykge1xuICAgICAgICBsZXQgbmV4dCA9IGJ1ZmZlci5yZWFkVWludDgoKTtcbiAgICAgICAgbGV0IGZpcnN0ID0gbmV4dCA+Pj4gNjtcbiAgICAgICAgaWYgKGZpcnN0ICE9PSAweDAyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdlcnJvciB3aGVuIHBhcnNlIHBlcyBoZWFkZXInKTtcbiAgICAgICAgfVxuICAgICAgICBuZXh0ID0gYnVmZmVyLnJlYWRVaW50OCgpO1xuICAgICAgICByZXQucHRzRFRTRmxhZyA9IG5leHQgPj4+IDY7XG4gICAgICAgIHJldC5lc2NyRmxhZyA9IG5leHQgPj4+IDUgJiAweDAxO1xuICAgICAgICByZXQuZXNSYXRlRmxhZyA9IG5leHQgPj4+IDQgJiAweDAxO1xuICAgICAgICByZXQuZHNtRmxhZyA9IG5leHQgPj4+IDMgJiAweDAxO1xuICAgICAgICByZXQuYWRkaXRpb25hbEZsYWcgPSBuZXh0ID4+PiAyICYgMHgwMTtcbiAgICAgICAgcmV0LmNyY0ZsYWcgPSBuZXh0ID4+PiAxICYgMHgwMTtcbiAgICAgICAgcmV0LmV4dGVuc2lvbkZsYWcgPSBuZXh0ICYgMHgwMTtcbiAgICAgICAgcmV0LnBlc0hlYWRlckxlbmd0aCA9IGJ1ZmZlci5yZWFkVWludDgoKTtcbiAgICAgICAgbGV0IE4xID0gcmV0LnBlc0hlYWRlckxlbmd0aDtcblxuICAgICAgICBpZiAocmV0LnB0c0RUU0ZsYWcgPT09IDIpIHtcbiAgICAgICAgICBsZXQgcHRzID0gW107XG4gICAgICAgICAgbmV4dCA9IGJ1ZmZlci5yZWFkVWludDgoKTtcbiAgICAgICAgICBwdHMucHVzaChuZXh0ID4+PiAxICYgMHgwNyk7XG4gICAgICAgICAgbmV4dCA9IGJ1ZmZlci5yZWFkVWludDE2KCk7XG4gICAgICAgICAgcHRzLnB1c2gobmV4dCA+Pj4gMSk7XG4gICAgICAgICAgbmV4dCA9IGJ1ZmZlci5yZWFkVWludDE2KCk7XG4gICAgICAgICAgcHRzLnB1c2gobmV4dCA+Pj4gMSk7XG4gICAgICAgICAgcmV0LnB0cyA9IChwdHNbMF0gPDwgMzAgfCBwdHNbMV0gPDwgMTUgfCBwdHNbMl0pO1xuICAgICAgICAgIE4xIC09IDU7XG4gICAgICAgICAgLy8g6KeG6aKR5aaC5p6c5rKh5pyJZHRz55SocHRzXG4gICAgICAgICAgaWYgKHJldC50eXBlID09PSAndmlkZW8nKSB7XG4gICAgICAgICAgICByZXQuZHRzID0gcmV0LnB0cztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJldC5wdHNEVFNGbGFnID09PSAzKSB7XG4gICAgICAgICAgbGV0IHB0cyA9IFtdO1xuICAgICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQ4KCk7XG4gICAgICAgICAgcHRzLnB1c2gobmV4dCA+Pj4gMSAmIDB4MDcpO1xuICAgICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQxNigpO1xuICAgICAgICAgIHB0cy5wdXNoKG5leHQgPj4+IDEpO1xuICAgICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQxNigpO1xuICAgICAgICAgIHB0cy5wdXNoKG5leHQgPj4+IDEpO1xuICAgICAgICAgIHJldC5wdHMgPSAocHRzWzBdIDw8IDMwIHwgcHRzWzFdIDw8IDE1IHwgcHRzWzJdKTtcbiAgICAgICAgICBsZXQgZHRzID0gW107XG4gICAgICAgICAgbmV4dCA9IGJ1ZmZlci5yZWFkVWludDgoKTtcbiAgICAgICAgICBkdHMucHVzaChuZXh0ID4+PiAxICYgMHgwNyk7XG4gICAgICAgICAgbmV4dCA9IGJ1ZmZlci5yZWFkVWludDE2KCk7XG4gICAgICAgICAgZHRzLnB1c2gobmV4dCA+Pj4gMSk7XG4gICAgICAgICAgbmV4dCA9IGJ1ZmZlci5yZWFkVWludDE2KCk7XG4gICAgICAgICAgZHRzLnB1c2gobmV4dCA+Pj4gMSk7XG4gICAgICAgICAgcmV0LmR0cyA9IChkdHNbMF0gPDwgMzAgfCBkdHNbMV0gPDwgMTUgfCBkdHNbMl0pO1xuICAgICAgICAgIE4xIC09IDEwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXQuZXNjckZsYWcgPT09IDEpIHtcbiAgICAgICAgICBsZXQgZXNjciA9IFtdXG4gICAgICAgICAgbGV0IGV4ID0gW107XG4gICAgICAgICAgbmV4dCA9IGJ1ZmZlci5yZWFkVWludDgoKTtcbiAgICAgICAgICBlc2NyLnB1c2gobmV4dCA+Pj4gMyAmIDB4MDcpO1xuICAgICAgICAgIGVzY3IucHVzaChuZXh0ICYgMHgwMyk7XG4gICAgICAgICAgbmV4dCA9IGJ1ZmZlci5yZWFkVWludDE2KCk7XG4gICAgICAgICAgZXNjci5wdXNoKG5leHQgPj4+IDEzKTtcbiAgICAgICAgICBlc2NyLnB1c2gobmV4dCAmIDB4MDMpO1xuICAgICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQxNigpO1xuICAgICAgICAgIGVzY3IucHVzaChuZXh0ID4+PiAxMyk7XG4gICAgICAgICAgZXgucHVzaChuZXh0ICYgMHgwMyk7XG4gICAgICAgICAgbmV4dCA9IGJ1ZmZlci5yZWFkVWludDgoKTtcbiAgICAgICAgICBleC5wdXNoKG5leHQgPj4+IDEpO1xuICAgICAgICAgIHJldC5lc2NyID0gKGVzY3JbMF0gPDwgMzAgfCBlc2NyWzFdIDw8IDI4IHwgZXNjclsyXSA8PCAxNSB8IGVzY3JbM10gPDwgMTMgfCBlc2NyWzRdKSAqIDMwMCArIChleFswXSA8PCA3IHwgZXhbMV0pO1xuICAgICAgICAgIE4xIC09IDY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJldC5lc1JhdGVGbGFnID09PSAxKSB7XG4gICAgICAgICAgbmV4dCA9IGJ1ZmZlci5yZWFkVWludDI0KCk7XG4gICAgICAgICAgcmV0LmVzUmF0ZSA9IG5leHQgPj4+IDEgJiAweDNmZmZmZjtcbiAgICAgICAgICBOMSAtPSAzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXQuZHNtRmxhZyA9PT0gMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IHN1cHBvcnQgRFNNX3RyaWNrX21vZGUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmV0LmFkZGl0aW9uYWxGbGFnID09PSAxKSB7XG4gICAgICAgICAgbmV4dCA9IGJ1ZmZlci5yZWFkVWludDgoKTtcbiAgICAgICAgICByZXQuYWRkaXRpb25hbENvcHlJbmZvID0gbmV4dCAmIDB4N2Y7XG4gICAgICAgICAgTjEgLT0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmV0LmNyY0ZsYWcgPT09IDEpIHtcbiAgICAgICAgICByZXQucGVzQ1JDID0gYnVmZmVyLnJlYWRVaW50MTYoKTtcbiAgICAgICAgICBOMSAtPSAyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXQuZXh0ZW5zaW9uRmxhZyA9PT0gMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IHN1cHBvcnQgZXh0ZW5zaW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE4xID4gMCkge1xuICAgICAgICAgIGJ1ZmZlci5za2lwKE4xKTtcbiAgICAgICAgfVxuICAgICAgICByZXQuRVMgPSBUc0RlbXV4ZXIuRVMoYnVmZmVyLCByZXQudHlwZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Zvcm1hdCBpcyBub3Qgc3VwcG9ydGVkJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBzdGF0aWMgRVMgKGJ1ZmZlciwgdHlwZSkge1xuICAgIGxldCBuZXh0O1xuICAgIGxldCByZXQgPSB7fTtcbiAgICBpZiAodHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgbmV4dCA9IGJ1ZmZlci5yZWFkVWludDMyKCk7XG4gICAgICBpZiAobmV4dCAhPT0gMSkge1xuICAgICAgICBidWZmZXIuYmFjayg0KTtcbiAgICAgICAgbmV4dCA9IGJ1ZmZlci5yZWFkVWludDI0KCk7XG4gICAgICAgIGlmIChuZXh0ICE9PSAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdoMjY0IG5hbCBoZWFkZXIgcGFyc2UgZmFpbGVkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJ1ZmZlci5za2lwKDIpOy8vIDA5IEYwXG4gICAgICAvLyBUT0RPIHJlYWRuYWx1XG4gICAgICByZXQuYnVmZmVyID0gYnVmZmVyO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2F1ZGlvJykge1xuICAgICAgbmV4dCA9IGJ1ZmZlci5yZWFkVWludDE2KCk7XG4gICAgICAvLyBhZHRz55qE5ZCM5q2l5a2X6IqC77yMMTLkvY1cbiAgICAgIGlmIChuZXh0ID4+PiA0ICE9PSAweGZmZikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FhYyBFUyBwYXJzZSBFcnJvcicpO1xuICAgICAgfVxuICAgICAgY29uc3QgZnEgPSBbOTYwMDAsIDg4MjAwLCA2NDAwMCwgNDgwMDAsIDQ0MTAwLCAzMjAwMCwgMjQwMDAsIDIyMDUwLCAxNjAwMCwgMTIwMDAsIDExMDI1LCA4MDAwLCA3MzUwXTtcbiAgICAgIHJldC5pZCA9IChuZXh0ID4+PiAzICYgMHgwMSkgPT09IDAgPyAnTVBFRy00JyA6ICdNUEVHLTInO1xuICAgICAgcmV0LmxheWVyID0gbmV4dCA+Pj4gMSAmIDB4MDM7XG4gICAgICByZXQuYWJzZW50ID0gbmV4dCAmIDB4MDE7XG4gICAgICBuZXh0ID0gYnVmZmVyLnJlYWRVaW50MTYoKTtcbiAgICAgIHJldC5hdWRpb09iamVjdFR5cGUgPSAobmV4dCA+Pj4gMTQgJiAweDAzKSArIDE7XG4gICAgICByZXQucHJvZmlsZSA9IHJldC5hdWRpb09iamVjdFR5cGUgLSAxO1xuICAgICAgcmV0LmZyZXF1ZW5jeUluZGV4ID0gbmV4dCA+Pj4gMTAgJiAweDBmO1xuICAgICAgcmV0LmZyZXF1ZW5jZSA9IGZxW3JldC5mcmVxdWVuY3lJbmRleF07XG4gICAgICByZXQuY2hhbm5lbCA9IG5leHQgPj4+IDYgJiAweDA3O1xuICAgICAgcmV0LmZyYW1lTGVuZ3RoID0gKG5leHQgJiAweDAzKSA8PCAxMSB8IChidWZmZXIucmVhZFVpbnQxNigpID4+PiA1KTtcbiAgICAgIFRzRGVtdXhlci5nZXRBdWRpb0NvbmZpZyhyZXQpO1xuICAgICAgYnVmZmVyLnNraXAoMSk7XG4gICAgICByZXQuYnVmZmVyID0gYnVmZmVyO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEVTICR7dHlwZX0gaXMgbm90IHN1cHBvcnRlZGApO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBzdGF0aWMgVFNEVCAoc3RyZWFtLCB0cywgZnJhZ3MpIHtcbiAgICAvLyBUT0RPXG4gICAgdHMucGF5bG9hZCA9IHt9O1xuICB9XG5cbiAgc3RhdGljIENBVCAoc3RyZWFtLCB0cywgZnJhZ3MpIHtcbiAgICBsZXQgcmV0ID0ge31cbiAgICByZXQudGFibGVJRCA9IHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICBsZXQgbmV4dCA9IHN0cmVhbS5yZWFkVWludDE2KCk7XG4gICAgcmV0LnNlY3Rpb25JbmRpY2F0b3IgPSBuZXh0ID4+PiA3O1xuICAgIHJldC5zZWN0aW9uTGVuZ3RoID0gbmV4dCAmIDB4MGZmZjtcbiAgICBzdHJlYW0uc2tpcCgyKTtcbiAgICBuZXh0ID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgIHJldC52ZXJzaW9uID0gbmV4dCA+Pj4gMztcbiAgICByZXQuY3VycmVudE5leHRJbmRpY2F0b3IgPSBuZXh0ICYgMHgwMTtcbiAgICByZXQuc2VjdGlvbk51bWJlciA9IHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICByZXQubGFzdFNlY3Rpb25OdW1iZXIgPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgbGV0IE4gPSAodGhpcy5zZWN0aW9uTGVuZ3RoIC0gOSkgLyA0O1xuICAgIGxldCBsaXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyBpKyspIHtcbiAgICAgIGxpc3QucHVzaCh7fSk7XG4gICAgfVxuICAgIHJldC5jcmMzMiA9IHN0cmVhbS5yZWFkVWludDMyKCk7XG4gICAgdHMucGF5bG9hZCA9IHJldDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRBdWRpb0NvbmZpZyAocmV0KSB7XG4gICAgbGV0IHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKVxuICAgIGxldCBjb25maWc7XG4gICAgbGV0IGV4dGVuc2lvblNhbXBsZUluZGV4O1xuICAgIGlmICgvZmlyZWZveC9pLnRlc3QodXNlckFnZW50KSkge1xuICAgICAgaWYgKHJldC5mcmVxdWVuY3lJbmRleCA+PSA2KSB7XG4gICAgICAgIHJldC5hdWRpb09iamVjdFR5cGUgPSA1O1xuICAgICAgICBjb25maWcgPSBuZXcgQXJyYXkoNCk7XG4gICAgICAgIGV4dGVuc2lvblNhbXBsZUluZGV4ID0gcmV0LmZyZXF1ZW5jeUluZGV4IC0gMztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldC5hdWRpb09iamVjdFR5cGUgPSAyO1xuICAgICAgICBjb25maWcgPSBuZXcgQXJyYXkoMik7XG4gICAgICAgIGV4dGVuc2lvblNhbXBsZUluZGV4ID0gcmV0LmZyZXF1ZW5jeUluZGV4O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodXNlckFnZW50LmluZGV4T2YoJ2FuZHJvaWQnKSAhPT0gLTEpIHtcbiAgICAgIHJldC5hdWRpb09iamVjdFR5cGUgPSAyO1xuICAgICAgY29uZmlnID0gbmV3IEFycmF5KDIpO1xuICAgICAgZXh0ZW5zaW9uU2FtcGxlSW5kZXggPSByZXQuZnJlcXVlbmN5SW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldC5hdWRpb09iamVjdFR5cGUgPSA1O1xuICAgICAgY29uZmlnID0gbmV3IEFycmF5KDQpO1xuICAgICAgaWYgKHJldC5mcmVxdWVuY3lJbmRleCA+PSA2KSB7XG4gICAgICAgIGV4dGVuc2lvblNhbXBsZUluZGV4ID0gcmV0LmZyZXF1ZW5jeUluZGV4IC0gMztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChyZXQuY2hhbm5lbCA9PT0gMSkge1xuICAgICAgICAgIHJldC5hdWRpb09iamVjdFR5cGUgPSAyO1xuICAgICAgICAgIGNvbmZpZyA9IG5ldyBBcnJheSgyKTtcbiAgICAgICAgfVxuICAgICAgICBleHRlbnNpb25TYW1wbGVJbmRleCA9IHJldC5mcmVxdWVuY3lJbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25maWdbMF0gPSByZXQuYXVkaW9PYmplY3RUeXBlIDw8IDM7XG4gICAgY29uZmlnWzBdIHw9IChyZXQuZnJlcXVlbmN5SW5kZXggJiAweDBlKSA+PiAxO1xuICAgIGNvbmZpZ1sxXSA9IChyZXQuZnJlcXVlbmN5SW5kZXggJiAweDAxKSA8PCA3O1xuICAgIGNvbmZpZ1sxXSB8PSByZXQuY2hhbm5lbCA8PCAzO1xuICAgIGlmIChyZXQuYXVkaW9PYmplY3RUeXBlID09PSA1KSB7XG4gICAgICBjb25maWdbMV0gfD0gKGV4dGVuc2lvblNhbXBsZUluZGV4ICYgMHgwZSkgPj4gMTtcbiAgICAgIGNvbmZpZ1syXSA9IChleHRlbnNpb25TYW1wbGVJbmRleCAmIDB4MDEpIDw8IDc7XG4gICAgICBjb25maWdbMl0gfD0gMiA8PCAyO1xuICAgICAgY29uZmlnWzNdID0gMDtcbiAgICB9XG4gICAgcmV0LmF1ZGlvQ29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgZ2V0IGlucHV0QnVmZmVyICgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSh0aGlzLmNvbmZpZ3MuaW5wdXRidWZmZXIpO1xuICB9XG5cbiAgZ2V0IF90cmFja3MgKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdUUkFDS1MnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUc0RlbXV4ZXI7XG4iLCJjbGFzcyBQbGF5bGlzdCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWdzKSB7XG4gICAgdGhpcy5fYmFzZVVSTCA9ICcnO1xuICAgIHRoaXMuX2xpc3QgPSB7fTtcbiAgICB0aGlzLl90cyA9IHt9O1xuICAgIHRoaXMudmVyc2lvbiA9IDA7XG4gICAgdGhpcy5zZXF1ZW5jZSA9IC0xO1xuICAgIHRoaXMudGFyZ2V0ZHVyYXRpb24gPSAwO1xuICAgIHRoaXMuZHVyYXRpb24gPSAwO1xuICAgIHRoaXMuZnJhZ0xlbmd0aCA9IDA7XG4gICAgdGhpcy5fbGFzdGdldCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9hdWRvY2xlYXIgPSBjb25maWdzLmF1dG9jbGVhciB8fCBmYWxzZTtcbiAgfVxuXG4gIGdldCBsaXN0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdDtcbiAgfVxuXG4gIHNldCBiYXNlVVJMIChiYXNlVVJMKSB7XG4gICAgaWYgKHRoaXMuYmFzZVVSTCAhPT0gYmFzZVVSTCkge1xuICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgdGhpcy5fYmFzZVVSTCA9IGJhc2VVUkw7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGJhc2VVUkwgKCkge1xuICAgIHJldHVybiB0aGlzLl9iYXNlVVJMO1xuICB9XG5cbiAgcHVzaCAodHMsIGR1cmF0aW9uLCBkaXNjb250aW51ZSkge1xuICAgIGlmICghdGhpcy5fdHNbdHNdKSB7XG4gICAgICB0aGlzLl90c1t0c10gPSB7ZHVyYXRpb246IGR1cmF0aW9uLCBcbiAgICAgICAgZG93bmxvYWRlZDogZmFsc2UsIFxuICAgICAgICBkb3dubG9hZGluZzogZmFsc2UsIFxuICAgICAgICBzdGFydDogdGhpcy5kdXJhdGlvbiwgXG4gICAgICAgIGRpc2NvbnRpbnVlOiBkaXNjb250aW51ZSA/IHRydWU6IGZhbHNlXG4gICAgICB9O1xuICAgICAgdGhpcy5fbGlzdFt0aGlzLmR1cmF0aW9uXSA9IHRzO1xuICAgICAgdGhpcy5kdXJhdGlvbiArPSBkdXJhdGlvbjtcbiAgICAgIHRoaXMuZnJhZ0xlbmd0aCArPSAxO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZUZyYWcgKHVybCkge1xuICAgIGlmICh0aGlzLl90c1t1cmxdKSB7XG4gICAgICBpZiAodGhpcy5fdHNbdXJsXS5zdGFydCA+IHRoaXMuX2xhc3RnZXQudGltZSkge1xuICAgICAgICB0aGlzLl9sYXN0Z2V0ID0ge1xuICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLl90c1t1cmxdLmR1cmF0aW9uLFxuICAgICAgICAgIHRpbWU6IHRoaXMuX3RzW3VybF0uc3RhcnQsXG4gICAgICAgICAgZG93bmxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgZG93bmxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIHVybDogdXJsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRlbGV0ZSB0aGlzLl9saXN0W3RoaXMuX3RzW3VybF0uc3RhcnRdO1xuICAgICAgZGVsZXRlIHRoaXMuX3RzW3VybF07XG4gICAgICB0aGlzLmZyYWdMZW5ndGggLT0gMTtcbiAgICB9XG4gIH1cblxuICBwdXNoTTNVOCAoZGF0YSwgZGVsZXRlcHJlKSB7XG4gICAgLy8g5bi46KeE5L+h5oGv5pu/5o2iXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIG0zdTggZGF0YSByZWNlaXZlZC5gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy52ZXJzaW9uID0gZGF0YS52ZXJzaW9uO1xuICAgIHRoaXMudGFyZ2V0ZHVyYXRpb24gPSBkYXRhLnRhcmdldGR1cmF0aW9uO1xuICAgIGlmKGRhdGEuZW5jcnlwdCAmJiAhdGhpcy5lbmNyeXB0KSB7XG4gICAgICB0aGlzLmVuY3J5cHQgPSBkYXRhLmVuY3J5cHQ7XG4gICAgfVxuICAgIC8vIOaWsOWIhueJh+S/oeaBr1xuICAgIGlmIChkYXRhLnNlcXVlbmNlID4gdGhpcy5zZXF1ZW5jZSkge1xuICAgICAgdGhpcy5zZXF1ZW5jZSA9IGRhdGEuc2VxdWVuY2U7XG4gICAgICBsZXQgbmV3ZnJhZ2xpc3QgPSBbXVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmZyYWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBmcmFnID0gZGF0YS5mcmFnc1tpXTtcbiAgICAgICAgaWYgKCF0aGlzLl90c1tmcmFnLnVybF0pIHtcbiAgICAgICAgICBuZXdmcmFnbGlzdC5wdXNoKGZyYWcudXJsKVxuICAgICAgICAgIHRoaXMucHVzaChmcmFnLnVybCwgZnJhZy5kdXJhdGlvbiwgZnJhZy5kaXNjb250aW51ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYobmV3ZnJhZ2xpc3QubGVuZ3RoIDwgMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbiBub3QgcmVhZCB0cyBmaWxlIGxpc3QuYCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChkZWxldGVwcmUpIHtcbiAgICAgICAgbGV0IHRzbGlzdCA9IHRoaXMuZ2V0VHNMaXN0KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHNsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKG5ld2ZyYWdsaXN0LmluZGV4T2YodHNsaXN0W2ldKSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlRnJhZyh0c2xpc3RbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9sZCBtM3U4IGZpbGUgcmVjZWl2ZWQsICR7ZGF0YS5zZXF1ZW5jZX1gKTtcbiAgICB9XG4gIH1cblxuICBnZXRUc0xpc3QgKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl90cyk7XG4gIH1cblxuICBkb3dubG9hZGVkICh0c25hbWUsIGlzbG9hZGVkKSB7XG4gICAgbGV0IHRzID0gdGhpcy5fdHNbdHNuYW1lXTtcbiAgICBpZiAodHMpIHtcbiAgICAgIHRzLmRvd25sb2FkZWQgPSBpc2xvYWRlZFxuICAgIH1cbiAgfVxuXG4gIGRvd25sb2FkaW5nICh0c25hbWUsIGxvYWRpbmcpIHtcbiAgICBsZXQgdHMgPSB0aGlzLl90c1t0c25hbWVdO1xuICAgIGlmICh0cykge1xuICAgICAgdHMuZG93bmxvYWRpbmcgPSBsb2FkaW5nXG4gICAgfVxuICB9XG5cbiAgZ2V0VHNCeU5hbWUgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fdHNbbmFtZV07XG4gIH1cblxuICBnZXRUcyAodGltZSkge1xuICAgIGxldCB0aW1lbGlzdCA9IE9iamVjdC5rZXlzKHRoaXMuX2xpc3QpO1xuICAgIGxldCB0cztcblxuICAgIGlmICh0aW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLl9sYXN0Z2V0KSB7XG4gICAgICAgIHRpbWUgPSB0aGlzLl9sYXN0Z2V0LnRpbWUgKyB0aGlzLl9sYXN0Z2V0LmR1cmF0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGltZSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRpbWVsaXN0Lmxlbmd0aCA8IDEgfHwgdGltZSA+PSB0aGlzLmR1cmF0aW9uKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB0aW1lbGlzdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChhKSAtIHBhcnNlRmxvYXQoYilcbiAgICB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGltZSA+PSBwYXJzZUludCh0aW1lbGlzdFtpXSkpIHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuX2xpc3RbdGltZWxpc3RbaV1dO1xuICAgICAgICBsZXQgZG93bmxvYWRlZCA9IHRoaXMuX3RzW3VybF0uZG93bmxvYWRlZDtcbiAgICAgICAgbGV0IGRvd25sb2FkaW5nID0gdGhpcy5fdHNbdXJsXS5kb3dubG9hZGluZztcbiAgICAgICAgdHMgPSB7dXJsLCBkb3dubG9hZGVkLCBkb3dubG9hZGluZywgdGltZTogcGFyc2VJbnQodGltZWxpc3RbaV0pLCBkdXJhdGlvbjogcGFyc2VJbnQodGhpcy5fdHNbdXJsXS5kdXJhdGlvbil9O1xuICAgICAgICBpZiAodGhpcy5hdXRvY2xlYXIpIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fdHNbdGhpcy5fbGFzdGdldC51cmxdO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9saXN0W3RoaXMuX2xhc3RnZXQudGltZV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbGFzdGdldCA9IHRzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cztcbiAgfVxuXG4gIGNsZWFyICgpIHtcbiAgICB0aGlzLl9iYXNlVVJMID0gJyc7XG4gICAgdGhpcy5fbGlzdCA9IHt9O1xuICAgIHRoaXMuX3RzID0ge307XG4gICAgdGhpcy52ZXJzaW9uID0gMDtcbiAgICB0aGlzLnNlcXVlbmNlID0gLTE7XG4gICAgdGhpcy50YXJnZXRkdXJhdGlvbiA9IDA7XG4gICAgdGhpcy5kdXJhdGlvbiA9IDA7XG4gIH1cblxuICBjbGVhckRvd25sb2FkZWQgKCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gT2JqZWN0LmtleXModGhpcy5fdHMpLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHRzID0gdGhpcy5fdHNbT2JqZWN0LmtleXModGhpcy5fdHMpW2ldXTtcbiAgICAgIHRzLmRvd25sb2FkZWQgPSBmYWxzZTtcbiAgICAgIHRzLmRvd25sb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fYmFzZVVSTCA9ICcnO1xuICAgIHRoaXMuX2xpc3QgPSB7fTtcbiAgICB0aGlzLl90cyA9IHt9O1xuICAgIHRoaXMudmVyc2lvbiA9IDA7XG4gICAgdGhpcy5zZXF1ZW5jZSA9IC0xO1xuICAgIHRoaXMudGFyZ2V0ZHVyYXRpb24gPSAwO1xuICAgIHRoaXMuZHVyYXRpb24gPSAwO1xuICAgIHRoaXMuZnJhZ0xlbmd0aCA9IDA7XG4gICAgdGhpcy5fbGFzdGdldCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9hdWRvY2xlYXIgPSBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5bGlzdDtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBGZXRjaExvYWRlcjogcmVxdWlyZSgnLi9zcmMvZmV0Y2gtbG9hZGVyJykuZGVmYXVsdFxufTtcbiIsImltcG9ydCB7IEVWRU5UUyB9IGZyb20gJ3hncGxheWVyLXV0aWxzJztcblxuY29uc3QgTE9BREVSX0VWRU5UUyA9IEVWRU5UUy5MT0FERVJfRVZFTlRTO1xuY29uc3QgUkVBRF9TVFJFQU0gPSAwO1xuY29uc3QgUkVBRF9URVhUID0gMTtcbmNvbnN0IFJFQURfSlNPTiA9IDI7XG5jb25zdCBSRUFEX0JVRkZFUiA9IDM7XG5jbGFzcyBGZXRjaExvYWRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWdzKSB7XG4gICAgdGhpcy5jb25maWdzID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlncyk7XG4gICAgdGhpcy51cmwgPSBudWxsXG4gICAgdGhpcy5zdGF0dXMgPSAwXG4gICAgdGhpcy5lcnJvciA9IG51bGxcbiAgICB0aGlzLl9yZWFkZXIgPSBudWxsO1xuICAgIHRoaXMuX2NhbmNlbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fZGVzdHJveWVkID0gZmFsc2U7XG4gICAgdGhpcy5yZWFkdHlwZSA9IHRoaXMuY29uZmlncy5yZWFkdHlwZTtcbiAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuY29uZmlncy5idWZmZXIgfHwgJ0xPQURFUl9CVUZGRVInO1xuICAgIHRoaXMuX2xvYWRlclRhc2tObyA9IDA7XG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLm9uKExPQURFUl9FVkVOVFMuTEFERVJfU1RBUlQsIHRoaXMubG9hZC5iaW5kKHRoaXMpKVxuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ2xvYWRlcidcbiAgfVxuXG4gIGxvYWQgKHVybCwgb3B0cykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy5fY2FuY2VsZWQgPSBmYWxzZTtcblxuICAgIC8vIFRPRE86IEFkZCBSYW5nZXNcbiAgICBsZXQgcGFyYW1zID0gdGhpcy5nZXRQYXJhbXMob3B0cylcbiAgICBfdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgIHJldHVybiBmZXRjaCh0aGlzLnVybCwgcGFyYW1zKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIF90aGlzLnN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1c1xuICAgICAgICByZXR1cm4gX3RoaXMuX29uRmV0Y2hSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICB9XG4gICAgICBfdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICBfdGhpcy5lbWl0KExPQURFUl9FVkVOVFMuTE9BREVSX0VSUk9SLCBfdGhpcy5UQUcsIG5ldyBFcnJvcihgaW52YWxpZCByZXNwb25zZS5gKSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSAge1xuICAgICAgX3RoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgX3RoaXMuZW1pdChMT0FERVJfRVZFTlRTLkxPQURFUl9FUlJPUiwgX3RoaXMuVEFHLCBlcnJvcik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9KVxuICB9XG5cbiAgX29uRmV0Y2hSZXNwb25zZSAocmVzcG9uc2UpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBidWZmZXIgPSB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKHRoaXMuYnVmZmVyKTtcbiAgICB0aGlzLl9sb2FkZXJUYXNrTm8rKztcbiAgICBsZXQgdGFza25vID0gdGhpcy5fbG9hZGVyVGFza05vO1xuICAgIGlmIChyZXNwb25zZS5vayA9PT0gdHJ1ZSkge1xuICAgICAgc3dpdGNoICh0aGlzLnJlYWR0eXBlKSB7XG4gICAgICAgIGNhc2UgUkVBRF9KU09OOlxuICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBfdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgIGlmICghX3RoaXMuX2NhbmNlbGVkICYmICFfdGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgICAgICAgIGlmIChidWZmZXIpIHtcbiAgICAgICAgICAgICAgICBidWZmZXIucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KExPQURFUl9FVkVOVFMuTE9BREVSX0NPTVBMRVRFLCBidWZmZXIpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoTE9BREVSX0VWRU5UUy5MT0FERVJfQ09NUExFVEUsIGRhdGEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgUkVBRF9URVhUOlxuICAgICAgICAgIHJlc3BvbnNlLnRleHQoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBfdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgIGlmICghX3RoaXMuX2NhbmNlbGVkICYmICFfdGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgICAgICAgIGlmIChidWZmZXIpIHtcbiAgICAgICAgICAgICAgICBidWZmZXIucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KExPQURFUl9FVkVOVFMuTE9BREVSX0NPTVBMRVRFLCBidWZmZXIpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoTE9BREVSX0VWRU5UUy5MT0FERVJfQ09NUExFVEUsIGRhdGEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgUkVBRF9CVUZGRVI6XG4gICAgICAgICAgcmVzcG9uc2UuYXJyYXlCdWZmZXIoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBfdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgIGlmICghX3RoaXMuX2NhbmNlbGVkICYmICFfdGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgICAgICAgIGlmIChidWZmZXIpIHtcbiAgICAgICAgICAgICAgICBidWZmZXIucHVzaChuZXcgVWludDhBcnJheShkYXRhKSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdChMT0FERVJfRVZFTlRTLkxPQURFUl9DT01QTEVURSwgYnVmZmVyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KExPQURFUl9FVkVOVFMuTE9BREVSX0NPTVBMRVRFLCBkYXRhKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFJFQURfU1RSRUFNOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiB0aGlzLl9vblJlYWRlcihyZXNwb25zZS5ib2R5LmdldFJlYWRlcigpLCB0YXNrbm8pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9vblJlYWRlciAocmVhZGVyLCB0YXNrbm8pIHtcbiAgICBsZXQgYnVmZmVyID0gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSh0aGlzLmJ1ZmZlcik7XG4gICAgaWYgKCghYnVmZmVyICYmIHRoaXMuX3JlYWRlcikgfHwgdGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl9yZWFkZXIuY2FuY2VsKClcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRE8gTk9USElOR1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3JlYWRlciA9IHJlYWRlclxuICAgIGlmICh0aGlzLmxvYWRpbmcgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgX3RoaXMgPSB0aGlzXG4gICAgLy8gcmVhZGVyIHJlYWQgZnVuY3Rpb24gcmV0dXJucyBhIFByb21pc2UuIGdldCBkYXRhIHdoZW4gY2FsbGJhY2sgYW5kIGhhcyB2YWx1ZS5kb25lIHdoZW4gZGlzY29ubmVjdGVkLlxuICAgIC8vIHJlYWTmlrnms5Xov5Tlm57kuIDkuKpQcm9taXNlLiDlm57osIPkuK3lj6/ku6Xojrflj5bliLDmlbDmja7jgILlvZN2YWx1ZS5kb25l5a2Y5Zyo5pe277yM6K+05piO6ZO+5o6l5pat5byA44CCXG4gICAgdGhpcy5fcmVhZGVyICYmIHRoaXMuX3JlYWRlci5yZWFkKCkudGhlbihmdW5jdGlvbiAodmFsKSB7XG4gICAgICBpZiAodmFsLmRvbmUpIHtcbiAgICAgICAgLy8gVE9ETzog5a6M5oiQ5aSE55CGXG4gICAgICAgIF90aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICBfdGhpcy5zdGF0dXMgPSAwO1xuICAgICAgICBfdGhpcy5lbWl0KExPQURFUl9FVkVOVFMuTE9BREVSX0NPTVBMRVRFLCBidWZmZXIpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMuX2NhbmNlbGVkIHx8IF90aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgaWYgIChfdGhpcy5fcmVhZGVyKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIF90aGlzLl9yZWFkZXIuY2FuY2VsKClcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBETyBOT1RISU5HXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYnVmZmVyLnB1c2godmFsLnZhbHVlKVxuICAgICAgX3RoaXMuZW1pdChMT0FERVJfRVZFTlRTLkxPQURFUl9EQVRBTE9BREVELCBidWZmZXIpXG4gICAgICByZXR1cm4gX3RoaXMuX29uUmVhZGVyKHJlYWRlciwgdGFza25vKVxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgX3RoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgX3RoaXMuZW1pdChMT0FERVJfRVZFTlRTLkxPQURFUl9FUlJPUiwgX3RoaXMuVEFHLCBlcnJvcik7XG4gICAgfSlcbiAgfVxuXG4gIGdldFBhcmFtcyAob3B0cykge1xuICAgIGxldCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0cylcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcblxuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGNhY2hlOiAnZGVmYXVsdCdcbiAgICB9XG5cbiAgICAvLyBhZGQgY3VzdG1vciBoZWFkZXJzXG4gICAgLy8g5re75Yqg6Ieq5a6a5LmJ5aS0XG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZ3MuaGVhZGVycyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGxldCBjb25maWdIZWFkZXJzID0gdGhpcy5jb25maWdzLmhlYWRlcnNcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb25maWdIZWFkZXJzKSB7XG4gICAgICAgIGlmIChjb25maWdIZWFkZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBoZWFkZXJzLmFwcGVuZChrZXksIGNvbmZpZ0hlYWRlcnNba2V5XSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5oZWFkZXJzID09PSAnb2JqZWN0Jykge1xuICAgICAgbGV0IG9wdEhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnNcbiAgICAgIGZvciAobGV0IGtleSBpbiBvcHRIZWFkZXJzKSB7XG4gICAgICAgIGlmIChvcHRIZWFkZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBoZWFkZXJzLmFwcGVuZChrZXksIG9wdEhlYWRlcnNba2V5XSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmNvcnMgPT09IGZhbHNlKSB7XG4gICAgICBwYXJhbXMubW9kZSA9ICdzYW1lLW9yaWdpbidcbiAgICB9XG5cbiAgICAvLyB3aXRoQ3JlZGVudGlhbHMgaXMgZGlzYWJsZWQgYnkgZGVmYXVsdFxuICAgIC8vIHdpdGhDcmVkZW50aWFscyDlnKjpu5jorqTmg4XlhrXkuIvkuI3ooqvkvb/nlKjjgIJcbiAgICBpZiAob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHBhcmFtcy5jcmVkZW50aWFscyA9ICdpbmNsdWRlJ1xuICAgIH1cblxuICAgIC8vIFRPRE86IEFkZCByYW5nZXM7XG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxuXG4gIGNhbmNlbCAoKSB7XG4gICAgaWYgKHRoaXMuX3JlYWRlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5fcmVhZGVyLmNhbmNlbCgpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIOmYsuatomZhaWxlZDogMjAw6ZSZ6K+v6KKr5omT5Y2w5Yiw5o6n5Yi25Y+w5LiKXG4gICAgICB9XG4gICAgICB0aGlzLl9yZWFkZXIgPSBudWxsXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgdGhpcy5fY2FuY2VsZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWVcbiAgICB0aGlzLmNhbmNlbCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZldGNoTG9hZGVyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgTXA0UmVtdXhlcjogcmVxdWlyZSgnLi9zcmMvbXA0JykuZGVmYXVsdFxufTtcbiIsImltcG9ydCB7IEJ1ZmZlciB9IGZyb20gJ3hncGxheWVyLXV0aWxzJztcblxuLy8gY29uc3QgVUlOVDMyX01BWCA9IE1hdGgucG93KDIsIDMyKSAtIDE7XG5jbGFzcyBGbXA0IHtcbiAgc3RhdGljIHNpemUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci53cml0ZVVpbnQzMih2YWx1ZSlcbiAgfVxuICBzdGF0aWMgaW5pdEJveCAoc2l6ZSwgbmFtZSwgLi4uY29udGVudCkge1xuICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGJ1ZmZlci53cml0ZShGbXA0LnNpemUoc2l6ZSksIEZtcDQudHlwZShuYW1lKSwgLi4uY29udGVudClcbiAgICByZXR1cm4gYnVmZmVyLmJ1ZmZlclxuICB9XG4gIHN0YXRpYyBleHRlbnNpb24gKHZlcnNpb24sIGZsYWcpIHtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgdmVyc2lvbixcbiAgICAgIChmbGFnID4+IDE2KSAmIDB4ZmYsXG4gICAgICAoZmxhZyA+PiA4KSAmIDB4ZmYsXG4gICAgICBmbGFnICYgMHhmZlxuICAgIF0pXG4gIH1cbiAgc3RhdGljIGZ0eXAgKCkge1xuICAgIHJldHVybiBGbXA0LmluaXRCb3goMjQsICdmdHlwJywgbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHg2OSwgMHg3MywgMHg2RiwgMHg2RCwgLy8gaXNvbSxcbiAgICAgIDB4MCwgMHgwLCAweDAwLCAweDAxLCAvLyBtaW5vcl92ZXJzaW9uOiAweDAxXG4gICAgICAweDY5LCAweDczLCAweDZGLCAweDZELCAvLyBpc29tXG4gICAgICAweDYxLCAweDc2LCAweDYzLCAweDMxIC8vIGF2YzFcbiAgICBdKSlcbiAgfVxuICBzdGF0aWMgbW9vdiAoeyB0eXBlLCBtZXRhIH0pIHtcbiAgICBsZXQgc2l6ZSA9IDhcbiAgICBsZXQgbXZoZCA9IEZtcDQubXZoZChtZXRhLmR1cmF0aW9uLCBtZXRhLnRpbWVzY2FsZSlcbiAgICBsZXQgdHJha1xuXG4gICAgaWYgKHR5cGUgPT09ICd2aWRlbycpIHtcbiAgICAgIHRyYWsgPSBGbXA0LnZpZGVvVHJhayhtZXRhKVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFrID0gRm1wNC5hdWRpb1RyYWsobWV0YSlcbiAgICB9XG5cbiAgICBsZXQgbXZleCA9IEZtcDQubXZleChtZXRhLmR1cmF0aW9uLCBtZXRhLnRpbWVzY2FsZSB8fCAxMDAwLCBtZXRhLmlkKTtcbiAgICBbbXZoZCwgdHJhaywgbXZleF0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHNpemUgKz0gaXRlbS5ieXRlTGVuZ3RoXG4gICAgfSlcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KHNpemUsICdtb292JywgbXZoZCwgdHJhaywgbXZleClcbiAgfVxuICBzdGF0aWMgbXZoZCAoZHVyYXRpb24sIHRpbWVzY2FsZSA9IDEwMDApIHtcbiAgICAvLyBkdXJhdGlvbiAqPSB0aW1lc2NhbGU7XG4gICAgbGV0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gdmVyc2lvbigwKSArIGZsYWdzICAgICAx5L2N55qEYm9454mI5pysKzPkvY1mbGFncyAgIGJveOeJiOacrO+8jDDmiJYx77yM5LiA6Iis5Li6MOOAgu+8iOS7peS4i+Wtl+iKguaVsOWdh+aMiXZlcnNpb249MO+8iVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gY3JlYXRpb25fdGltZSAgICDliJvlu7rml7bpl7QgIO+8iOebuOWvueS6jlVUQ+aXtumXtDE5MDQtMDEtMDHpm7bngrnnmoTnp5LmlbDvvIlcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIG1vZGlmaWNhdGlvbl90aW1lICAg5L+u5pS55pe26Ze0XG5cbiAgICAgIC8qKlxuICAgICAgICAgICAgICogdGltZXNjYWxlOiA0IGJ5dGVz5paH5Lu25aqS5L2T5ZyoMeenkuaXtumXtOWGheeahOWIu+W6puWAvO+8jOWPr+S7peeQhuino+S4ujHnp5Lplb/luqZcbiAgICAgICAgICAgICAqL1xuICAgICAgKHRpbWVzY2FsZSA+Pj4gMjQpICYgMHhGRixcbiAgICAgICh0aW1lc2NhbGUgPj4+IDE2KSAmIDB4RkYsXG4gICAgICAodGltZXNjYWxlID4+PiA4KSAmIDB4RkYsXG4gICAgICAodGltZXNjYWxlKSAmIDB4RkYsXG5cbiAgICAgIC8qKlxuICAgICAgICAgICAgICogZHVyYXRpb246IDQgYnl0ZXPor6V0cmFja+eahOaXtumXtOmVv+W6pu+8jOeUqGR1cmF0aW9u5ZKMdGltZSBzY2FsZeWAvOWPr+S7peiuoeeul3RyYWNr5pe26ZW/77yM5q+U5aaCYXVkaW8gdHJhY2vnmoR0aW1lIHNjYWxlID0gODAwMCxcbiAgICAgICAgICAgICAqIGR1cmF0aW9uID0gNTYwMTI477yM5pe26ZW/5Li6NzAuMDE277yMdmlkZW8gdHJhY2vnmoR0aW1lIHNjYWxlID0gNjAwLCBkdXJhdGlvbiA9IDQyMDAw77yM5pe26ZW/5Li6NzBcbiAgICAgICAgICAgICAqL1xuICAgICAgKGR1cmF0aW9uID4+PiAyNCkgJiAweEZGLFxuICAgICAgKGR1cmF0aW9uID4+PiAxNikgJiAweEZGLFxuICAgICAgKGR1cmF0aW9uID4+PiA4KSAmIDB4RkYsXG4gICAgICAoZHVyYXRpb24pICYgMHhGRixcbiAgICAgIDB4MDAsIDB4MDEsIDB4MDAsIDB4MDAsIC8vIFByZWZlcnJlZCByYXRlOiAxLjAgICDmjqjojZDmkq3mlL7pgJ/njofvvIzpq5gxNuS9jeWSjOS9jjE25L2N5YiG5Yir5Li65bCP5pWw54K55pW05pWw6YOo5YiG5ZKM5bCP5pWw6YOo5YiG77yM5Y2zWzE2LjE2XSDmoLzlvI/vvIzor6XlgLzkuLoxLjDvvIgweDAwMDEwMDAw77yJ6KGo56S65q2j5bi45YmN5ZCR5pKt5pS+XG4gICAgICAvKipcbiAgICAgICAgICAgICAqIFByZWZlcnJlZFZvbHVtZSgxLjAsIDJieXRlcykgKyByZXNlcnZlZCgyYnl0ZXMpXG4gICAgICAgICAgICAgKiDkuI5yYXRl57G75Ly877yMWzguOF0g5qC85byP77yMMS4w77yIMHgwMTAw77yJ6KGo56S65pyA5aSn6Z+z6YePXG4gICAgICAgICAgICAgKi9cbiAgICAgIDB4MDEsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyAgcmVzZXJ2ZWQ6IDQgKyA0IGJ5dGVz5L+d55WZ5L2NXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMSwgMHgwMCwgMHgwMCwgLy8gLS0tLWJlZ2luIGNvbXBvc2l0aW9uIG1hdHJpeC0tLS1cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyDop4bpopHlj5jmjaLnn6npmLUgICDnur/mgKfku6PmlbBcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAxLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHg0MCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gLS0tLWVuZCBjb21wb3NpdGlvbiBtYXRyaXgtLS0tXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyAtLS0tYmVnaW4gcHJlX2RlZmluZWQgNiAqIDQgYnl0ZXMtLS0tXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcHJlLWRlZmluZWQg5L+d55WZ5L2NXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIC0tLS1lbmQgcHJlX2RlZmluZWQgNiAqIDQgYnl0ZXMtLS0tXG4gICAgICAweEZGLCAweEZGLCAweEZGLCAweEZGIC8vIG5leHRfdHJhY2tfSUQg5LiL5LiA5LiqdHJhY2vkvb/nlKjnmoRpZOWPt1xuICAgIF0pXG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveCg4ICsgYnl0ZXMubGVuZ3RoLCAnbXZoZCcsIG5ldyBVaW50OEFycmF5KGJ5dGVzKSlcbiAgfVxuICBzdGF0aWMgdmlkZW9UcmFrIChkYXRhKSB7XG4gICAgbGV0IHNpemUgPSA4XG5cbiAgICBsZXQgdGtoZCA9IEZtcDQudGtoZCh7XG4gICAgICBpZDogMSxcbiAgICAgIGR1cmF0aW9uOiBkYXRhLmR1cmF0aW9uLFxuICAgICAgdGltZXNjYWxlOiBkYXRhLnRpbWVzY2FsZSB8fCAxMDAwLFxuICAgICAgd2lkdGg6IGRhdGEucHJlc2VudFdpZHRoLFxuICAgICAgaGVpZ2h0OiBkYXRhLnByZXNlbnRIZWlnaHQsXG4gICAgICB0eXBlOiAndmlkZW8nXG4gICAgfSlcbiAgICBsZXQgbWRpYSA9IEZtcDQubWRpYSh7XG4gICAgICB0eXBlOiAndmlkZW8nLFxuICAgICAgdGltZXNjYWxlOiBkYXRhLnRpbWVzY2FsZSB8fCAxMDAwLFxuICAgICAgZHVyYXRpb246IGRhdGEuZHVyYXRpb24sXG4gICAgICBhdmNjOiBkYXRhLmF2Y2MsXG4gICAgICBwYXJSYXRpbzogZGF0YS5wYXJSYXRpbyxcbiAgICAgIHdpZHRoOiBkYXRhLnByZXNlbnRXaWR0aCxcbiAgICAgIGhlaWdodDogZGF0YS5wcmVzZW50SGVpZ2h0XG4gICAgfSk7XG4gICAgW3RraGQsIG1kaWFdLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBzaXplICs9IGl0ZW0uYnl0ZUxlbmd0aFxuICAgIH0pXG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveChzaXplLCAndHJhaycsIHRraGQsIG1kaWEpXG4gIH1cbiAgc3RhdGljIGF1ZGlvVHJhayAoZGF0YSkge1xuICAgIGxldCBzaXplID0gOFxuICAgIGxldCB0a2hkID0gRm1wNC50a2hkKHtcbiAgICAgIGlkOiAyLFxuICAgICAgZHVyYXRpb246IGRhdGEuZHVyYXRpb24sXG4gICAgICB0aW1lc2NhbGU6IGRhdGEudGltZXNjYWxlIHx8IDEwMDAsXG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIHR5cGU6ICdhdWRpbydcbiAgICB9KVxuICAgIGxldCBtZGlhID0gRm1wNC5tZGlhKHtcbiAgICAgIHR5cGU6ICdhdWRpbycsXG4gICAgICB0aW1lc2NhbGU6IGRhdGEudGltZXNjYWxlIHx8IDEwMDAsXG4gICAgICBkdXJhdGlvbjogZGF0YS5kdXJhdGlvbixcbiAgICAgIGNoYW5uZWxDb3VudDogZGF0YS5jaGFubmVsQ291bnQsXG4gICAgICBzYW1wbGVyYXRlOiBkYXRhLnNhbXBsZVJhdGUsXG4gICAgICBjb25maWc6IGRhdGEuY29uZmlnXG4gICAgfSk7XG4gICAgW3RraGQsIG1kaWFdLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBzaXplICs9IGl0ZW0uYnl0ZUxlbmd0aFxuICAgIH0pXG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveChzaXplLCAndHJhaycsIHRraGQsIG1kaWEpXG4gIH1cbiAgc3RhdGljIHRraGQgKGRhdGEpIHtcbiAgICBsZXQgaWQgPSBkYXRhLmlkXG4gICAgbGV0IGR1cmF0aW9uID0gZGF0YS5kdXJhdGlvblxuICAgIGxldCB3aWR0aCA9IGRhdGEud2lkdGhcbiAgICBsZXQgaGVpZ2h0ID0gZGF0YS5oZWlnaHRcbiAgICBsZXQgY29udGVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDcsIC8vIHZlcnNpb24oMCkgKyBmbGFncyAx5L2N54mI5pysIGJveOeJiOacrO+8jDDmiJYx77yM5LiA6Iis5Li6MOOAgu+8iOS7peS4i+Wtl+iKguaVsOWdh+aMiXZlcnNpb249MO+8ieaMieS9jeaIluaTjeS9nOe7k+aenOWAvO+8jOmihOWumuS5ieWmguS4i++8mlxuICAgICAgLy8gMHgwMDAwMDEgdHJhY2tfZW5hYmxlZO+8jOWQpuWImeivpXRyYWNr5LiN6KKr5pKt5pS+77ybXG4gICAgICAvLyAweDAwMDAwMiB0cmFja19pbl9tb3ZpZe+8jOihqOekuuivpXRyYWNr5Zyo5pKt5pS+5Lit6KKr5byV55So77ybXG4gICAgICAvLyAweDAwMDAwNCB0cmFja19pbl9wcmV2aWV377yM6KGo56S66K+ldHJhY2vlnKjpooTop4jml7booqvlvJXnlKjjgIJcbiAgICAgIC8vIOS4gOiIrOivpeWAvOS4ujfvvIwxKzIrNCDlpoLmnpzkuIDkuKrlqpLkvZPmiYDmnIl0cmFja+Wdh+acquiuvue9rnRyYWNrX2luX21vdmll5ZKMdHJhY2tfaW5fcHJldmlld++8jOWwhuiiq+eQhuino+S4uuaJgOaciXRyYWNr5Z2H6K6+572u5LqG6L+Z5Lik6aG577yb5a+55LqOaGludCB0cmFja++8jOivpeWAvOS4ujBcbiAgICAgIC8vIGhpbnQgdHJhY2sg6L+Z5Liq54m55q6K55qEdHJhY2vlubbkuI3ljIXlkKvlqpLkvZPmlbDmja7vvIzogIzmmK/ljIXlkKvkuobkuIDkupvlsIblhbbku5bmlbDmja50cmFja+aJk+WMheaIkOa1geWqkuS9k+eahOaMh+ekuuS/oeaBr+OAglxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gY3JlYXRpb25fdGltZeWIm+W7uuaXtumXtO+8iOebuOWvueS6jlVUQ+aXtumXtDE5MDQtMDEtMDHpm7bngrnnmoTnp5LmlbDvvIlcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIG1vZGlmaWNhdGlvbiB0aW1lIOS/ruaUueaXtumXtFxuICAgICAgKGlkID4+PiAyNCkgJiAweEZGLCAvLyB0cmFja19JRDogNCBieXRlcyBpZOWPt++8jOS4jeiDvemHjeWkjeS4lOS4jeiDveS4ujBcbiAgICAgIChpZCA+Pj4gMTYpICYgMHhGRixcbiAgICAgIChpZCA+Pj4gOCkgJiAweEZGLFxuICAgICAgKGlkKSAmIDB4RkYsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyByZXNlcnZlZDogNCBieXRlcyAgICDkv53nlZnkvY1cbiAgICAgIChkdXJhdGlvbiA+Pj4gMjQpICYgMHhGRiwgLy8gZHVyYXRpb246IDQgYnl0ZXMgdHJhY2vnmoTml7bpl7Tplb/luqZcbiAgICAgIChkdXJhdGlvbiA+Pj4gMTYpICYgMHhGRixcbiAgICAgIChkdXJhdGlvbiA+Pj4gOCkgJiAweEZGLFxuICAgICAgKGR1cmF0aW9uKSAmIDB4RkYsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyByZXNlcnZlZDogMiAqIDQgYnl0ZXMgICAg5L+d55WZ5L2NXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gbGF5ZXIoMmJ5dGVzKSArIGFsdGVybmF0ZV9ncm91cCgyYnl0ZXMpICDop4bpopHlsYLvvIzpu5jorqTkuLow77yM5YC85bCP55qE5Zyo5LiK5bGCLnRyYWNr5YiG57uE5L+h5oGv77yM6buY6K6k5Li6MOihqOekuuivpXRyYWNr5pyq5LiO5YW25LuWdHJhY2vmnInnvqTnu4TlhbPns7tcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHZvbHVtZSgyYnl0ZXMpICsgcmVzZXJ2ZWQoMmJ5dGVzKSAgICBbOC44XSDmoLzlvI/vvIzlpoLmnpzkuLrpn7PpopF0cmFja++8jDEuMO+8iDB4MDEwMO+8ieihqOekuuacgOWkp+mfs+mHj++8m+WQpuWImeS4ujAgICAr5L+d55WZ5L2NXG4gICAgICAweDAwLCAweDAxLCAweDAwLCAweDAwLCAvLyAtLS0tYmVnaW4gY29tcG9zaXRpb24gbWF0cml4LS0tLVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMSwgMHgwMCwgMHgwMCwgLy8g6KeG6aKR5Y+Y5o2i55+p6Zi1XG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDQwLCAweDAwLCAweDAwLCAweDAwLCAvLyAtLS0tZW5kIGNvbXBvc2l0aW9uIG1hdHJpeC0tLS1cbiAgICAgICh3aWR0aCA+Pj4gOCkgJiAweEZGLCAvLyAvL+WuveW6plxuICAgICAgKHdpZHRoKSAmIDB4RkYsXG4gICAgICAweDAwLCAweDAwLFxuICAgICAgKGhlaWdodCA+Pj4gOCkgJiAweEZGLCAvLyDpq5jluqZcbiAgICAgIChoZWlnaHQpICYgMHhGRixcbiAgICAgIDB4MDAsIDB4MDBcbiAgICBdKVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goOCArIGNvbnRlbnQuYnl0ZUxlbmd0aCwgJ3RraGQnLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyBlZHRzIChkYXRhKSB7XG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGxldCBkdXJhdGlvbiA9IGRhdGEuZHVyYXRpb25cbiAgICBsZXQgbWVkaWFUaW1lID0gZGF0YS5tZWRpYVRpbWVcbiAgICBidWZmZXIud3JpdGUoRm1wNC5zaXplKDM2KSwgRm1wNC50eXBlKCdlZHRzJykpXG4gICAgLy8gZWxzdFxuICAgIGJ1ZmZlci53cml0ZShGbXA0LnNpemUoMjgpLCBGbXA0LnR5cGUoJ2Vsc3QnKSlcbiAgICBidWZmZXIud3JpdGUobmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMSwgLy8gZW50cnkgY291bnRcbiAgICAgIChkdXJhdGlvbiA+PiAyNCkgJiAweGZmLCAoZHVyYXRpb24gPj4gMTYpICYgMHhmZiwgKGR1cmF0aW9uID4+IDgpICYgMHhmZiwgZHVyYXRpb24gJiAweGZmLFxuICAgICAgKG1lZGlhVGltZSA+PiAyNCkgJiAweGZmLCAobWVkaWFUaW1lID4+IDE2KSAmIDB4ZmYsIChtZWRpYVRpbWUgPj4gOCkgJiAweGZmLCBtZWRpYVRpbWUgJiAweGZmLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMSAvLyBtZWRpYSByYXRlXG4gICAgXSkpXG4gICAgcmV0dXJuIGJ1ZmZlci5idWZmZXJcbiAgfVxuICBzdGF0aWMgbWRpYSAoZGF0YSkge1xuICAgIGxldCBzaXplID0gOFxuICAgIGxldCBtZGhkID0gRm1wNC5tZGhkKGRhdGEudGltZXNjYWxlLCBkYXRhLmR1cmF0aW9uKVxuICAgIGxldCBoZGxyID0gRm1wNC5oZGxyKGRhdGEudHlwZSlcbiAgICBsZXQgbWluZiA9IEZtcDQubWluZihkYXRhKTtcbiAgICBbbWRoZCwgaGRsciwgbWluZl0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHNpemUgKz0gaXRlbS5ieXRlTGVuZ3RoXG4gICAgfSlcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KHNpemUsICdtZGlhJywgbWRoZCwgaGRsciwgbWluZilcbiAgfVxuICBzdGF0aWMgbWRoZCAodGltZXNjYWxlID0gMTAwMCwgZHVyYXRpb24pIHtcbiAgICBsZXQgY29udGVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGNyZWF0aW9uX3RpbWUgICAg5Yib5bu65pe26Ze0XG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBtb2RpZmljYXRpb25fdGltZeS/ruaUueaXtumXtFxuICAgICAgKHRpbWVzY2FsZSA+Pj4gMjQpICYgMHhGRiwgLy8gdGltZXNjYWxlOiA0IGJ5dGVzICAgIOaWh+S7tuWqkuS9k+WcqDHnp5Lml7bpl7TlhoXnmoTliLvluqblgLzvvIzlj6/ku6XnkIbop6PkuLox56eS6ZW/5bqmXG4gICAgICAodGltZXNjYWxlID4+PiAxNikgJiAweEZGLFxuICAgICAgKHRpbWVzY2FsZSA+Pj4gOCkgJiAweEZGLFxuICAgICAgKHRpbWVzY2FsZSkgJiAweEZGLFxuICAgICAgKGR1cmF0aW9uID4+PiAyNCkgJiAweEZGLCAvLyBkdXJhdGlvbjogNCBieXRlcyAgdHJhY2vnmoTml7bpl7Tplb/luqZcbiAgICAgIChkdXJhdGlvbiA+Pj4gMTYpICYgMHhGRixcbiAgICAgIChkdXJhdGlvbiA+Pj4gOCkgJiAweEZGLFxuICAgICAgKGR1cmF0aW9uKSAmIDB4RkYsXG4gICAgICAweDU1LCAweEM0LCAvLyBsYW5ndWFnZTogdW5kICh1bmRldGVybWluZWQpIOWqkuS9k+ivreiogOeggeOAguacgOmrmOS9jeS4ujDvvIzlkI7pnaIxNeS9jeS4ujPkuKrlrZfnrKbvvIjop4FJU08gNjM5LTIvVOagh+WHhuS4reWumuS5ie+8iVxuICAgICAgMHgwMCwgMHgwMCAvLyBwcmVfZGVmaW5lZCA9IDBcbiAgICBdKVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goMTIgKyBjb250ZW50LmJ5dGVMZW5ndGgsICdtZGhkJywgRm1wNC5leHRlbnNpb24oMCwgMCksIGNvbnRlbnQpXG4gIH1cbiAgc3RhdGljIGhkbHIgKHR5cGUpIHtcbiAgICBsZXQgdmFsdWUgPSBbMHgwMCwgLy8gdmVyc2lvbiAwXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcHJlX2RlZmluZWRcbiAgICAgIDB4NzYsIDB4NjksIDB4NjQsIDB4NjUsIC8vIGhhbmRsZXJfdHlwZTogJ3ZpZGUnXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyByZXNlcnZlZFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDU2LCAweDY5LCAweDY0LCAweDY1LFxuICAgICAgMHg2ZiwgMHg0OCwgMHg2MSwgMHg2ZSxcbiAgICAgIDB4NjQsIDB4NmMsIDB4NjUsIDB4NzIsIDB4MDAgLy8gbmFtZTogJ1ZpZGVvSGFuZGxlcidcbiAgICBdXG4gICAgaWYgKHR5cGUgPT09ICdhdWRpbycpIHtcbiAgICAgIHZhbHVlLnNwbGljZSg4LCA0LCAuLi5bMHg3MywgMHg2ZiwgMHg3NSwgMHg2ZV0pXG4gICAgICB2YWx1ZS5zcGxpY2UoMjQsIDEzLCAuLi5bMHg1MywgMHg2ZiwgMHg3NSwgMHg2ZSxcbiAgICAgICAgMHg2NCwgMHg0OCwgMHg2MSwgMHg2ZSxcbiAgICAgICAgMHg2NCwgMHg2YywgMHg2NSwgMHg3MiwgMHgwMF0pXG4gICAgfVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goOCArIHZhbHVlLmxlbmd0aCwgJ2hkbHInLCBuZXcgVWludDhBcnJheSh2YWx1ZSkpXG4gIH1cbiAgc3RhdGljIG1pbmYgKGRhdGEpIHtcbiAgICBsZXQgc2l6ZSA9IDhcbiAgICBsZXQgdm1oZCA9IGRhdGEudHlwZSA9PT0gJ3ZpZGVvJyA/IEZtcDQudm1oZCgpIDogRm1wNC5zbWhkKClcbiAgICBsZXQgZGluZiA9IEZtcDQuZGluZigpXG4gICAgbGV0IHN0YmwgPSBGbXA0LnN0YmwoZGF0YSk7XG4gICAgW3ZtaGQsIGRpbmYsIHN0YmxdLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBzaXplICs9IGl0ZW0uYnl0ZUxlbmd0aFxuICAgIH0pXG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveChzaXplLCAnbWluZicsIHZtaGQsIGRpbmYsIHN0YmwpXG4gIH1cbiAgc3RhdGljIHZtaGQgKCkge1xuICAgIHJldHVybiBGbXA0LmluaXRCb3goMjAsICd2bWhkJywgbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgLy8gdmVyc2lvblxuICAgICAgMHgwMCwgMHgwMCwgMHgwMSwgLy8gZmxhZ3NcbiAgICAgIDB4MDAsIDB4MDAsIC8vIGdyYXBoaWNzbW9kZVxuICAgICAgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwIC8vIG9wY29sb3JcbiAgICBdKSlcbiAgfVxuICBzdGF0aWMgc21oZCAoKSB7XG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveCgxNiwgJ3NtaGQnLCBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAvLyB2ZXJzaW9uXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuICAgICAgMHgwMCwgMHgwMCwgLy8gYmFsYW5jZVxuICAgICAgMHgwMCwgMHgwMCAvLyByZXNlcnZlZFxuICAgIF0pKVxuICB9XG4gIHN0YXRpYyBkaW5mICgpIHtcbiAgICBsZXQgYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgbGV0IGRyZWYgPSBbMHgwMCwgLy8gdmVyc2lvbiAwXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMSwgLy8gZW50cnlfY291bnRcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MGMsIC8vIGVudHJ5X3NpemVcbiAgICAgIDB4NzUsIDB4NzIsIDB4NmMsIDB4MjAsIC8vICd1cmwnIHR5cGVcbiAgICAgIDB4MDAsIC8vIHZlcnNpb24gMFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMSAvLyBlbnRyeV9mbGFnc1xuICAgIF1cbiAgICBidWZmZXIud3JpdGUoRm1wNC5zaXplKDM2KSwgRm1wNC50eXBlKCdkaW5mJyksIEZtcDQuc2l6ZSgyOCksIEZtcDQudHlwZSgnZHJlZicpLCBuZXcgVWludDhBcnJheShkcmVmKSlcbiAgICByZXR1cm4gYnVmZmVyLmJ1ZmZlclxuICB9XG4gIHN0YXRpYyBzdGJsIChkYXRhKSB7XG4gICAgbGV0IHNpemUgPSA4XG4gICAgbGV0IHN0c2QgPSBGbXA0LnN0c2QoZGF0YSlcbiAgICBsZXQgc3R0cyA9IEZtcDQuc3R0cygpXG4gICAgbGV0IHN0c2MgPSBGbXA0LnN0c2MoKVxuICAgIGxldCBzdHN6ID0gRm1wNC5zdHN6KClcbiAgICBsZXQgc3RjbyA9IEZtcDQuc3RjbygpO1xuICAgIFtzdHNkLCBzdHRzLCBzdHNjLCBzdHN6LCBzdGNvXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgc2l6ZSArPSBpdGVtLmJ5dGVMZW5ndGhcbiAgICB9KVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goc2l6ZSwgJ3N0YmwnLCBzdHNkLCBzdHRzLCBzdHNjLCBzdHN6LCBzdGNvKVxuICB9XG4gIHN0YXRpYyBzdHNkIChkYXRhKSB7XG4gICAgbGV0IGNvbnRlbnRcbiAgICBpZiAoZGF0YS50eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICAvLyBpZiAoIWRhdGEuaXNBQUMgJiYgZGF0YS5jb2RlYyA9PT0gJ21wNCcpIHtcbiAgICAgIC8vICAgICBjb250ZW50ID0gRk1QNC5tcDMoZGF0YSk7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy9cbiAgICAgIC8vIH1cbiAgICAgIC8vIOaUr+aMgW1wNGFcbiAgICAgIGNvbnRlbnQgPSBGbXA0Lm1wNGEoZGF0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCA9IEZtcDQuYXZjMShkYXRhKVxuICAgIH1cbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KDE2ICsgY29udGVudC5ieXRlTGVuZ3RoLCAnc3RzZCcsIEZtcDQuZXh0ZW5zaW9uKDAsIDApLCBuZXcgVWludDhBcnJheShbMHgwMCwgMHgwMCwgMHgwMCwgMHgwMV0pLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyBtcDRhIChkYXRhKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyByZXNlcnZlZFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4MDAsIDB4MDEsIC8vIGRhdGFfcmVmZXJlbmNlX2luZGV4XG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4MDAsIGRhdGEuY2hhbm5lbENvdW50LCAvLyBjaGFubmVsY291bnRcbiAgICAgIDB4MDAsIDB4MTAsIC8vIHNhbXBsZVNpemU6MTZiaXRzXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyByZXNlcnZlZDJcbiAgICAgIChkYXRhLnNhbXBsZXJhdGUgPj4gOCkgJiAweGZmLFxuICAgICAgZGF0YS5zYW1wbGVyYXRlICYgMHhmZiwgLy9cbiAgICAgIDB4MDAsIDB4MDBcbiAgICBdKVxuICAgIGxldCBlc2RzID0gRm1wNC5lc2RzKGRhdGEuY29uZmlnKVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goOCArIGNvbnRlbnQuYnl0ZUxlbmd0aCArIGVzZHMuYnl0ZUxlbmd0aCwgJ21wNGEnLCBjb250ZW50LCBlc2RzKVxuICB9XG4gIHN0YXRpYyBlc2RzIChjb25maWcgPSBbNDMsIDE0NiwgOCwgMF0pIHtcbiAgICBjb25zdCBjb25maWdsZW4gPSBjb25maWcubGVuZ3RoXG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgLy8gdmVyc2lvbiAwXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuXG4gICAgICAweDAzLCAvLyBkZXNjcmlwdG9yX3R5cGVcbiAgICAgIDB4MTcgKyBjb25maWdsZW4sIC8vIGxlbmd0aFxuICAgICAgMHgwMCwgMHgwMSwgLy8gZXNfaWRcbiAgICAgIDB4MDAsIC8vIHN0cmVhbV9wcmlvcml0eVxuXG4gICAgICAweDA0LCAvLyBkZXNjcmlwdG9yX3R5cGVcbiAgICAgIDB4MGYgKyBjb25maWdsZW4sIC8vIGxlbmd0aFxuICAgICAgMHg0MCwgLy8gY29kZWMgOiBtcGVnNF9hdWRpb1xuICAgICAgMHgxNSwgLy8gc3RyZWFtX3R5cGVcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGJ1ZmZlcl9zaXplXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBtYXhCaXRyYXRlXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBhdmdCaXRyYXRlXG5cbiAgICAgIDB4MDUgLy8gZGVzY3JpcHRvcl90eXBlXG4gICAgXS5jb25jYXQoW2NvbmZpZ2xlbl0pLmNvbmNhdChjb25maWcpLmNvbmNhdChbMHgwNiwgMHgwMSwgMHgwMl0pKVxuICAgIGJ1ZmZlci53cml0ZShGbXA0LnNpemUoOCArIGNvbnRlbnQuYnl0ZUxlbmd0aCksIEZtcDQudHlwZSgnZXNkcycpLCBjb250ZW50KVxuICAgIHJldHVybiBidWZmZXIuYnVmZmVyXG4gIH1cbiAgc3RhdGljIGF2YzEgKGRhdGEpIHtcbiAgICBsZXQgYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgbGV0IHNpemUgPSA0MC8vIDgoYXZjMSkrOChhdmNjKSs4KGJ0cnQpKzE2KHBhc3ApXG4gICAgLy8gbGV0IHNwcyA9IGRhdGEuc3BzXG4gICAgLy8gbGV0IHBwcyA9IGRhdGEucHBzXG4gICAgbGV0IHdpZHRoID0gZGF0YS53aWR0aFxuICAgIGxldCBoZWlnaHQgPSBkYXRhLmhlaWdodFxuICAgIGxldCBoU3BhY2luZyA9IGRhdGEucGFyUmF0aW8uaGVpZ2h0XG4gICAgbGV0IHZTcGFjaW5nID0gZGF0YS5wYXJSYXRpby53aWR0aFxuICAgIC8vIGxldCBhdmNjQnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgLy8gYXZjY0J1ZmZlci53cml0ZShuZXcgVWludDhBcnJheShbXG4gICAgLy8gICAweDAxLCAvLyB2ZXJzaW9uXG4gICAgLy8gICBzcHNbMV0sIC8vIHByb2ZpbGVcbiAgICAvLyAgIHNwc1syXSwgLy8gcHJvZmlsZSBjb21wYXRpYmxlXG4gICAgLy8gICBzcHNbM10sIC8vIGxldmVsXG4gICAgLy8gICAweGZjIHwgMyxcbiAgICAvLyAgIDB4RTAgfCAxIC8vIOebruWJjeWPquWkhOeQhuS4gOS4qnNwc1xuICAgIC8vIF0uY29uY2F0KFtzcHMubGVuZ3RoID4+PiA4ICYgMHhmZiwgc3BzLmxlbmd0aCAmIDB4ZmZdKSkpXG4gICAgLy8gYXZjY0J1ZmZlci53cml0ZShzcHMsIG5ldyBVaW50OEFycmF5KFsxLCBwcHMubGVuZ3RoID4+PiA4ICYgMHhmZiwgcHBzLmxlbmd0aCAmIDB4ZmZdKSwgcHBzKVxuXG4gICAgbGV0IGF2Y2MgPSBkYXRhLmF2Y2NcbiAgICBsZXQgYXZjMSA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyByZXNlcnZlZFxuICAgICAgMHgwMCwgMHgwMSwgLy8gZGF0YV9yZWZlcmVuY2VfaW5kZXhcbiAgICAgIDB4MDAsIDB4MDAsIC8vIHByZV9kZWZpbmVkXG4gICAgICAweDAwLCAweDAwLCAvLyByZXNlcnZlZFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBwcmVfZGVmaW5lZFxuICAgICAgKHdpZHRoID4+IDgpICYgMHhmZixcbiAgICAgIHdpZHRoICYgMHhmZiwgLy8gd2lkdGhcbiAgICAgIChoZWlnaHQgPj4gOCkgJiAweGZmLFxuICAgICAgaGVpZ2h0ICYgMHhmZiwgLy8gaGVpZ2h0XG4gICAgICAweDAwLCAweDQ4LCAweDAwLCAweDAwLCAvLyBob3JpenJlc29sdXRpb25cbiAgICAgIDB4MDAsIDB4NDgsIDB4MDAsIDB4MDAsIC8vIHZlcnRyZXNvbHV0aW9uXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyByZXNlcnZlZFxuICAgICAgMHgwMCwgMHgwMSwgLy8gZnJhbWVfY291bnRcbiAgICAgIDB4MTIsXG4gICAgICAweDY0LCAweDYxLCAweDY5LCAweDZDLCAvLyBkYWlseW1vdGlvbi9obHMuanNcbiAgICAgIDB4NzksIDB4NkQsIDB4NkYsIDB4NzQsXG4gICAgICAweDY5LCAweDZGLCAweDZFLCAweDJGLFxuICAgICAgMHg2OCwgMHg2QywgMHg3MywgMHgyRSxcbiAgICAgIDB4NkEsIDB4NzMsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGNvbXByZXNzb3JuYW1lXG4gICAgICAweDAwLCAweDE4LCAvLyBkZXB0aCA9IDI0XG4gICAgICAweDExLCAweDExXSkgLy8gcHJlX2RlZmluZWQgPSAtMVxuICAgIGxldCBidHJ0ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgMHgxYywgMHg5YywgMHg4MCwgLy8gYnVmZmVyU2l6ZURCXG4gICAgICAweDAwLCAweDJkLCAweGM2LCAweGMwLCAvLyBtYXhCaXRyYXRlXG4gICAgICAweDAwLCAweDJkLCAweGM2LCAweGMwIC8vIGF2Z0JpdHJhdGVcbiAgICBdKVxuICAgIGxldCBwYXNwID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgKGhTcGFjaW5nID4+IDI0KSwgLy8gaFNwYWNpbmdcbiAgICAgIChoU3BhY2luZyA+PiAxNikgJiAweGZmLFxuICAgICAgKGhTcGFjaW5nID4+IDgpICYgMHhmZixcbiAgICAgIGhTcGFjaW5nICYgMHhmZixcbiAgICAgICh2U3BhY2luZyA+PiAyNCksIC8vIHZTcGFjaW5nXG4gICAgICAodlNwYWNpbmcgPj4gMTYpICYgMHhmZixcbiAgICAgICh2U3BhY2luZyA+PiA4KSAmIDB4ZmYsXG4gICAgICB2U3BhY2luZyAmIDB4ZmZcbiAgICBdKVxuXG4gICAgYnVmZmVyLndyaXRlKFxuICAgICAgRm1wNC5zaXplKHNpemUgKyBhdmMxLmJ5dGVMZW5ndGggKyBhdmNjLmJ5dGVMZW5ndGggKyBidHJ0LmJ5dGVMZW5ndGgpLCBGbXA0LnR5cGUoJ2F2YzEnKSwgYXZjMSxcbiAgICAgIEZtcDQuc2l6ZSg4ICsgYXZjYy5ieXRlTGVuZ3RoKSwgRm1wNC50eXBlKCdhdmNDJyksIGF2Y2MsXG4gICAgICBGbXA0LnNpemUoMjApLCBGbXA0LnR5cGUoJ2J0cnQnKSwgYnRydCxcbiAgICAgIEZtcDQuc2l6ZSgxNiksIEZtcDQudHlwZSgncGFzcCcpLCBwYXNwXG4gICAgKVxuICAgIHJldHVybiBidWZmZXIuYnVmZmVyXG4gIH1cbiAgc3RhdGljIHN0dHMgKCkge1xuICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgLy8gdmVyc2lvblxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAgLy8gZW50cnlfY291bnRcbiAgICBdKVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goMTYsICdzdHRzJywgY29udGVudClcbiAgfVxuICBzdGF0aWMgc3RzYyAoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAvLyB2ZXJzaW9uXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCAvLyBlbnRyeV9jb3VudFxuICAgIF0pXG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveCgxNiwgJ3N0c2MnLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyBzdGNvICgpIHtcbiAgICBsZXQgY29udGVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIC8vIHZlcnNpb25cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGZsYWdzXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwIC8vIGVudHJ5X2NvdW50XG4gICAgXSlcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KDE2LCAnc3RjbycsIGNvbnRlbnQpXG4gIH1cbiAgc3RhdGljIHN0c3ogKCkge1xuICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgLy8gdmVyc2lvblxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHNhbXBsZV9zaXplXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwIC8vIHNhbXBsZV9jb3VudFxuICAgIF0pXG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveCgyMCwgJ3N0c3onLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyBtdmV4IChkdXJhdGlvbiwgdGltZXNjYWxlID0gMTAwMCwgdHJhY2tJRCkge1xuICAgIGxldCBidWZmZXIgPSBuZXcgQnVmZmVyKClcbiAgICBsZXQgbWVoZCA9IEJ1ZmZlci53cml0ZVVpbnQzMihkdXJhdGlvbilcbiAgICBidWZmZXIud3JpdGUoRm1wNC5zaXplKDU2KSwgRm1wNC50eXBlKCdtdmV4JyksIEZtcDQuc2l6ZSgxNiksIEZtcDQudHlwZSgnbWVoZCcpLCBGbXA0LmV4dGVuc2lvbigwLCAwKSwgbWVoZCwgRm1wNC50cmV4KHRyYWNrSUQpKVxuICAgIHJldHVybiBidWZmZXIuYnVmZmVyXG4gIH1cbiAgc3RhdGljIHRyZXggKGlkKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAvLyB2ZXJzaW9uIDBcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGZsYWdzXG4gICAgICAoaWQgPj4gMjQpLFxuICAgICAgKGlkID4+IDE2KSAmIDB4ZmYsXG4gICAgICAoaWQgPj4gOCkgJiAweGZmLFxuICAgICAgKGlkICYgMHhmZiksIC8vIHRyYWNrX0lEXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAxLCAvLyBkZWZhdWx0X3NhbXBsZV9kZXNjcmlwdGlvbl9pbmRleFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZGVmYXVsdF9zYW1wbGVfZHVyYXRpb25cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGRlZmF1bHRfc2FtcGxlX3NpemVcbiAgICAgIDB4MDAsIDB4MDEsIDB4MDAsIDB4MDEgLy8gZGVmYXVsdF9zYW1wbGVfZmxhZ3NcbiAgICBdKVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goOCArIGNvbnRlbnQuYnl0ZUxlbmd0aCwgJ3RyZXgnLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyBtb29mIChkYXRhKSB7XG4gICAgbGV0IHNpemUgPSA4XG4gICAgbGV0IG1maGQgPSBGbXA0Lm1maGQoKVxuICAgIGxldCB0cmFmID0gRm1wNC50cmFmKGRhdGEpO1xuICAgIFttZmhkLCB0cmFmXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgc2l6ZSArPSBpdGVtLmJ5dGVMZW5ndGhcbiAgICB9KVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goc2l6ZSwgJ21vb2YnLCBtZmhkLCB0cmFmKVxuICB9XG4gIHN0YXRpYyBtZmhkICgpIHtcbiAgICBsZXQgY29udGVudCA9IEJ1ZmZlci53cml0ZVVpbnQzMihGbXA0LnNlcXVlbmNlKVxuICAgIEZtcDQuc2VxdWVuY2UgKz0gMVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goMTYsICdtZmhkJywgRm1wNC5leHRlbnNpb24oMCwgMCksIGNvbnRlbnQpXG4gIH1cbiAgc3RhdGljIHRyYWYgKGRhdGEpIHtcbiAgICBsZXQgc2l6ZSA9IDhcbiAgICBsZXQgdGZoZCA9IEZtcDQudGZoZChkYXRhLmlkKVxuICAgIGxldCB0ZmR0ID0gRm1wNC50ZmR0KGRhdGEudGltZSlcbiAgICBsZXQgc2R0cCA9IEZtcDQuc2R0cChkYXRhKVxuICAgIGxldCB0cnVuID0gRm1wNC50cnVuKGRhdGEsIHNkdHAuYnl0ZUxlbmd0aCk7XG5cbiAgICBbdGZoZCwgdGZkdCwgdHJ1biwgc2R0cF0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHNpemUgKz0gaXRlbS5ieXRlTGVuZ3RoXG4gICAgfSlcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KHNpemUsICd0cmFmJywgdGZoZCwgdGZkdCwgdHJ1biwgc2R0cClcbiAgfVxuICBzdGF0aWMgdGZoZCAoaWQpIHtcbiAgICBsZXQgY29udGVudCA9IEJ1ZmZlci53cml0ZVVpbnQzMihpZClcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KDE2LCAndGZoZCcsIEZtcDQuZXh0ZW5zaW9uKDAsIDApLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyB0ZmR0ICh0aW1lKSB7XG4gICAgLy8gbGV0IHVwcGVyID0gTWF0aC5mbG9vcih0aW1lIC8gKFVJTlQzMl9NQVggKyAxKSksXG4gICAgLy8gICAgIGxvd2VyID0gTWF0aC5mbG9vcih0aW1lICUgKFVJTlQzMl9NQVggKyAxKSk7XG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveCgxNiwgJ3RmZHQnLCBGbXA0LmV4dGVuc2lvbigwLCAwKSwgQnVmZmVyLndyaXRlVWludDMyKHRpbWUpKVxuICB9XG4gIHN0YXRpYyB0cnVuIChkYXRhLCBzZHRwTGVuZ3RoKSB7XG4gICAgLy8gbGV0IGlkID0gZGF0YS5pZDtcbiAgICAvLyBsZXQgY2VpbCA9IGlkID09PSAxID8gMTYgOiAxMjtcbiAgICBsZXQgYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgbGV0IHNhbXBsZUNvdW50ID0gQnVmZmVyLndyaXRlVWludDMyKGRhdGEuc2FtcGxlcy5sZW5ndGgpXG4gICAgLy8gbWRhdC1oZWFkZXIgOFxuICAgIC8vIG1vb2YtaGVhZGVyIDhcbiAgICAvLyBtZmhkIDE2XG4gICAgLy8gdHJhZi1oZWFkZXIgOFxuICAgIC8vIHRoaGQgMTZcbiAgICAvLyB0ZmR0IDIwXG4gICAgLy8gdHJ1bi1oZWFkZXIgMTJcbiAgICAvLyBzYW1wbGVDb3VudCA0XG4gICAgLy8gZGF0YS1vZmZzZXQgNFxuICAgIC8vIHNhbXBsZXMubGVuZ3RoXG4gICAgbGV0IG9mZnNldCA9IEJ1ZmZlci53cml0ZVVpbnQzMig4ICsgOCArIDE2ICsgOCArIDE2ICsgMTYgKyAxMiArIDQgKyA0ICsgMTYgKiBkYXRhLnNhbXBsZXMubGVuZ3RoICsgc2R0cExlbmd0aClcbiAgICBidWZmZXIud3JpdGUoRm1wNC5zaXplKDIwICsgMTYgKiBkYXRhLnNhbXBsZXMubGVuZ3RoKSwgRm1wNC50eXBlKCd0cnVuJyksIG5ldyBVaW50OEFycmF5KFsweDAwLCAweDAwLCAweDBGLCAweDAxXSksIHNhbXBsZUNvdW50LCBvZmZzZXQpXG5cbiAgICAvLyBsZXQgc2l6ZSA9IGJ1ZmZlci5idWZmZXIuYnl0ZUxlbmd0aFxuICAgIC8vIGxldCB3cml0ZU9mZnNldCA9IDBcbiAgICAvLyBkYXRhLnNhbXBsZXMuZm9yRWFjaCgoKSA9PiB7XG4gICAgLy8gICBzaXplICs9IDE2XG4gICAgLy8gfSlcbiAgICAvL1xuICAgIC8vIGxldCB0cnVuQm94ID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSlcblxuICAgIC8vIHRydW5Cb3guc2V0KGJ1ZmZlci5idWZmZXIsIDApXG5cbiAgICBkYXRhLnNhbXBsZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgZmxhZ3MgPSBpdGVtLmZsYWdzXG4gICAgICAvLyBjb25zb2xlLmxvZyhpdGVtLnR5cGUsIGl0ZW0uZHRzLCBpdGVtLmR1cmF0aW9uKVxuXG4gICAgICBidWZmZXIud3JpdGUobmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgICAoaXRlbS5kdXJhdGlvbiA+Pj4gMjQpICYgMHhGRiwgLy8gc2FtcGxlX2R1cmF0aW9uXG4gICAgICAgIChpdGVtLmR1cmF0aW9uID4+PiAxNikgJiAweEZGLFxuICAgICAgICAoaXRlbS5kdXJhdGlvbiA+Pj4gOCkgJiAweEZGLFxuICAgICAgICAoaXRlbS5kdXJhdGlvbikgJiAweEZGLFxuICAgICAgICAoaXRlbS5zaXplID4+PiAyNCkgJiAweEZGLCAvLyBzYW1wbGVfc2l6ZVxuICAgICAgICAoaXRlbS5zaXplID4+PiAxNikgJiAweEZGLFxuICAgICAgICAoaXRlbS5zaXplID4+PiA4KSAmIDB4RkYsXG4gICAgICAgIChpdGVtLnNpemUpICYgMHhGRixcbiAgICAgICAgKGZsYWdzLmlzTGVhZGluZyA8PCAyKSB8IGZsYWdzLmRlcGVuZHNPbiwgLy8gc2FtcGxlX2ZsYWdzXG4gICAgICAgIChmbGFncy5pc0RlcGVuZGVkT24gPDwgNikgfCAoZmxhZ3MuaGFzUmVkdW5kYW5jeSA8PCA0KSB8IGZsYWdzLmlzTm9uU3luYyxcbiAgICAgICAgMHgwMCwgMHgwMCwgLy8gc2FtcGxlX2RlZ3JhZGF0aW9uX3ByaW9yaXR5XG4gICAgICAgIChpdGVtLmN0cyA+Pj4gMjQpICYgMHhGRiwgLy8gc2FtcGxlX2NvbXBvc2l0aW9uX3RpbWVfb2Zmc2V0XG4gICAgICAgIChpdGVtLmN0cyA+Pj4gMTYpICYgMHhGRixcbiAgICAgICAgKGl0ZW0uY3RzID4+PiA4KSAmIDB4RkYsXG4gICAgICAgIChpdGVtLmN0cykgJiAweEZGXG4gICAgICBdKSlcbiAgICAgIC8vIHdyaXRlT2Zmc2V0ICs9IDE2XG4gICAgICAvLyBidWZmZXIud3JpdGUoQnVmZmVyLndyaXRlVWludDMyKDApKTtcbiAgICB9KVxuICAgIHJldHVybiBidWZmZXIuYnVmZmVyXG4gIH1cbiAgc3RhdGljIHNkdHAgKGRhdGEpIHtcbiAgICBsZXQgYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgYnVmZmVyLndyaXRlKEZtcDQuc2l6ZSgxMiArIGRhdGEuc2FtcGxlcy5sZW5ndGgpLCBGbXA0LnR5cGUoJ3NkdHAnKSwgRm1wNC5leHRlbnNpb24oMCwgMCkpXG4gICAgZGF0YS5zYW1wbGVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb25zdCBmbGFncyA9IGl0ZW0uZmxhZ3NcbiAgICAgIGNvbnN0IG51bSA9IChmbGFncy5pc0xlYWRpbmcgPDwgNikgfCAvLyBpc19sZWFkaW5nOiAyIChiaXQpXG4gICAgICAgIChmbGFncy5kZXBlbmRzT24gPDwgNCkgfCAvLyBzYW1wbGVfZGVwZW5kc19vblxuICAgICAgICAoZmxhZ3MuaXNEZXBlbmRlZE9uIDw8IDIpIHwgLy8gc2FtcGxlX2lzX2RlcGVuZGVkX29uXG4gICAgICAgIChmbGFncy5oYXNSZWR1bmRhbmN5KS8vIHNhbXBsZV9oYXNfcmVkdW5kYW5jeVxuXG4gICAgICBidWZmZXIud3JpdGUobmV3IFVpbnQ4QXJyYXkoW251bV0pKVxuICAgIH0pXG4gICAgcmV0dXJuIGJ1ZmZlci5idWZmZXJcbiAgfVxuICBzdGF0aWMgbWRhdCAoZGF0YSkge1xuICAgIGxldCBidWZmZXIgPSBuZXcgQnVmZmVyKClcbiAgICBsZXQgc2l6ZSA9IDhcbiAgICBkYXRhLnNhbXBsZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHNpemUgKz0gaXRlbS5zaXplXG4gICAgfSlcbiAgICBidWZmZXIud3JpdGUoRm1wNC5zaXplKHNpemUpLCBGbXA0LnR5cGUoJ21kYXQnKSlcbiAgICBsZXQgbWRhdEJveCA9IG5ldyBVaW50OEFycmF5KHNpemUpXG4gICAgbGV0IG9mZnNldCA9IDBcbiAgICBtZGF0Qm94LnNldChidWZmZXIuYnVmZmVyLCBvZmZzZXQpXG4gICAgb2Zmc2V0ICs9IDhcbiAgICBkYXRhLnNhbXBsZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGl0ZW0uYnVmZmVyLmZvckVhY2goKHVuaXQpID0+IHtcbiAgICAgICAgbWRhdEJveC5zZXQodW5pdCwgb2Zmc2V0KVxuICAgICAgICBvZmZzZXQgKz0gdW5pdC5ieXRlTGVuZ3RoXG4gICAgICAgIC8vIGJ1ZmZlci53cml0ZSh1bml0LmRhdGEpO1xuICAgICAgfSlcbiAgICB9KVxuICAgIHJldHVybiBtZGF0Qm94XG4gIH1cbn1cbkZtcDQudHlwZSA9IChuYW1lKSA9PiB7XG4gIHJldHVybiBuZXcgVWludDhBcnJheShbbmFtZS5jaGFyQ29kZUF0KDApLCBuYW1lLmNoYXJDb2RlQXQoMSksIG5hbWUuY2hhckNvZGVBdCgyKSwgbmFtZS5jaGFyQ29kZUF0KDMpXSlcbn1cbkZtcDQuc2VxdWVuY2UgPSAxXG5cbmV4cG9ydCBkZWZhdWx0IEZtcDRcbiIsImltcG9ydCB7XG4gIEVWRU5UUyxcbiAgc25pZmZlcixcbiAgTWVkaWFTZWdtZW50TGlzdCxcbiAgQnVmZmVyXG59IGZyb20gJ3hncGxheWVyLXV0aWxzJztcbmltcG9ydCBGbXA0IGZyb20gJy4vZm1wNCdcblxuY29uc3QgUkVNVVhfRVZFTlRTID0gRVZFTlRTLlJFTVVYX0VWRU5UU1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNcDRSZW11eGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuX2R0c0Jhc2UgPSAwXG4gICAgdGhpcy5faXNEdHNCYXNlSW5pdGVkID0gZmFsc2VcblxuICAgIHRoaXMuaXNGaXJzdFZpZGVvID0gdHJ1ZVxuICAgIHRoaXMuaXNGaXJzdEF1ZGlvID0gdHJ1ZVxuXG4gICAgdGhpcy52aWRlb0FsbER1cmF0aW9uID0gMFxuICAgIHRoaXMuYXVkaW9BbGxEdXJhdGlvbiA9IDBcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHRoaXMub24oUkVNVVhfRVZFTlRTLlJFTVVYX01FRElBLCB0aGlzLnJlbXV4LmJpbmQodGhpcykpXG4gICAgdGhpcy5vbihSRU1VWF9FVkVOVFMuUkVNVVhfTUVUQURBVEEsIHRoaXMub25NZXRhRGF0YVJlYWR5LmJpbmQodGhpcykpXG4gICAgdGhpcy5vbihSRU1VWF9FVkVOVFMuREVURUNUX0NIQU5HRV9TVFJFQU0sIHRoaXMucmVzZXREdHNCYXNlLmJpbmQodGhpcykpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLl9kdHNCYXNlID0gLTFcbiAgICB0aGlzLl9kdHNCYXNlSW5pdGVkID0gZmFsc2VcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLl9kdHNCYXNlID0gMFxuICAgIHRoaXMuX2lzRHRzQmFzZUluaXRlZCA9IGZhbHNlXG4gIH1cblxuICByZW11eCAoKSB7XG4gICAgY29uc3QgeyBhdWRpb1RyYWNrLCB2aWRlb1RyYWNrIH0gPSB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdUUkFDS1MnKVxuICAgICF0aGlzLl9pc0R0c0Jhc2VJbml0ZWQgJiYgdGhpcy5jYWxjRHRzQmFzZShhdWRpb1RyYWNrLCB2aWRlb1RyYWNrKVxuXG4gICAgdGhpcy5fcmVtdXhWaWRlbyh2aWRlb1RyYWNrKVxuICAgIHRoaXMuX3JlbXV4QXVkaW8oYXVkaW9UcmFjaylcbiAgfVxuXG4gIHJlc2V0RHRzQmFzZSAoKSB7XG4gICAgLy8gZm9yIGhscyDkuK3pgJTliIfmjaIgbWV0YeWQjnNlZWtcbiAgICB0aGlzLl9kdHNCYXNlID0gMFxuICAgIHRoaXMuX2R0c0Jhc2VJbml0ZWQgPSBmYWxzZVxuICB9XG5cbiAgc2VlayAoKSB7XG5cbiAgfVxuXG4gIG9uTWV0YURhdGFSZWFkeSAodHlwZSkge1xuICAgIGxldCB0cmFja1xuXG4gICAgaWYgKHR5cGUgPT09ICdhdWRpbycpIHtcbiAgICAgIGNvbnN0IHsgYXVkaW9UcmFjayB9ID0gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnVFJBQ0tTJylcbiAgICAgIHRyYWNrID0gYXVkaW9UcmFjaztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyB2aWRlb1RyYWNrIH0gPSB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdUUkFDS1MnKVxuICAgICAgdHJhY2sgPSB2aWRlb1RyYWNrO1xuICAgIH1cblxuICAgIGxldCBwcmVzb3VyY2VidWZmZXIgPSB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdQUkVfU09VUkNFX0JVRkZFUicpO1xuICAgIGxldCBzb3VyY2UgPSBwcmVzb3VyY2VidWZmZXIuZ2V0U291cmNlKHR5cGUpO1xuICAgIGlmICghc291cmNlKSB7XG4gICAgICBzb3VyY2UgPSBwcmVzb3VyY2VidWZmZXIuY3JlYXRlU291cmNlKHR5cGUpO1xuICAgIH1cblxuICAgIHNvdXJjZS5taW1ldHlwZSA9IHRyYWNrLm1ldGEuY29kZWM7XG4gICAgc291cmNlLmluaXQgPSB0aGlzLnJlbXV4SW5pdFNlZ21lbnQodHlwZSwgdHJhY2subWV0YSk7XG4gICAgLy8gc291cmNlLmluaXRlZCA9IGZhbHNlO1xuXG4gICAgLy8gdGhpcy5yZXNldER0c0Jhc2UoKVxuICAgIHRoaXMuZW1pdChSRU1VWF9FVkVOVFMuSU5JVF9TRUdNRU5ULCB0eXBlKVxuICB9XG5cbiAgcmVtdXhJbml0U2VnbWVudCAodHlwZSwgbWV0YSkge1xuICAgIGxldCBpbml0U2VnbWVudCA9IG5ldyBCdWZmZXIoKVxuICAgIGxldCBmdHlwID0gRm1wNC5mdHlwKClcbiAgICBsZXQgbW9vdiA9IEZtcDQubW9vdih7IHR5cGUsIG1ldGE6IG1ldGEgfSlcblxuICAgIGluaXRTZWdtZW50LndyaXRlKGZ0eXAsIG1vb3YpXG4gICAgcmV0dXJuIGluaXRTZWdtZW50O1xuICB9XG5cbiAgY2FsY0R0c0Jhc2UgKGF1ZGlvVHJhY2ssIHZpZGVvVHJhY2spIHtcbiAgICBpZiAoIWF1ZGlvVHJhY2suc2FtcGxlcy5sZW5ndGggJiYgIXZpZGVvVHJhY2suc2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgYXVkaW9CYXNlID0gSW5maW5pdHlcbiAgICBsZXQgdmlkZW9CYXNlID0gSW5maW5pdHlcblxuICAgIGlmIChhdWRpb1RyYWNrLnNhbXBsZXMgJiYgYXVkaW9UcmFjay5zYW1wbGVzLmxlbmd0aCkge1xuICAgICAgYXVkaW9CYXNlID0gYXVkaW9UcmFjay5zYW1wbGVzWzBdLmR0c1xuICAgIH1cbiAgICBpZiAodmlkZW9UcmFjay5zYW1wbGVzICYmIHZpZGVvVHJhY2suc2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIHZpZGVvQmFzZSA9IHZpZGVvVHJhY2suc2FtcGxlc1swXS5kdHNcbiAgICB9XG5cbiAgICB0aGlzLl9kdHNCYXNlID0gTWF0aC5taW4oYXVkaW9CYXNlLCB2aWRlb0Jhc2UpXG4gICAgdGhpcy5faXNEdHNCYXNlSW5pdGVkID0gdHJ1ZVxuICB9XG5cbiAgX3JlbXV4VmlkZW8gKHZpZGVvVHJhY2spIHtcbiAgICBjb25zdCB0cmFjayA9IHZpZGVvVHJhY2tcblxuICAgIGlmICghdmlkZW9UcmFjay5zYW1wbGVzIHx8ICF2aWRlb1RyYWNrLnNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQge3NhbXBsZXN9ID0gdHJhY2tcbiAgICBsZXQgZmlyc3REdHMgPSAtMVxuXG4gICAgbGV0IGluaXRTZWdtZW50ID0gbnVsbFxuICAgIGNvbnN0IG1wNFNhbXBsZXMgPSBbXVxuICAgIGNvbnN0IG1kYXRCb3ggPSB7XG4gICAgICBzYW1wbGVzOiBbXVxuICAgIH1cblxuICAgIHdoaWxlIChzYW1wbGVzLmxlbmd0aCkge1xuICAgICAgY29uc3QgYXZjU2FtcGxlID0gc2FtcGxlcy5zaGlmdCgpXG5cbiAgICAgIGNvbnN0IHsgaXNLZXlmcmFtZSwgb3B0aW9ucyB9ID0gYXZjU2FtcGxlXG4gICAgICBpZiAoIXRoaXMuaXNGaXJzdEF1ZGlvICYmIG9wdGlvbnMgJiYgb3B0aW9ucy5tZXRhKSB7XG4gICAgICAgIGluaXRTZWdtZW50ID0gdGhpcy5yZW11eEluaXRTZWdtZW50KCd2aWRlbycsIG9wdGlvbnMubWV0YSlcbiAgICAgICAgb3B0aW9ucy5tZXRhID0gbnVsbFxuICAgICAgICBzYW1wbGVzLnVuc2hpZnQoYXZjU2FtcGxlKVxuICAgICAgICBpZiAoIW9wdGlvbnMuaXNDb250aW51ZSkge1xuICAgICAgICAgIHRoaXMucmVzZXREdHNCYXNlKClcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgbGV0IGR0cyA9IGF2Y1NhbXBsZS5kdHMgLSB0aGlzLl9kdHNCYXNlXG5cbiAgICAgIGlmIChmaXJzdER0cyA9PT0gLTEpIHtcbiAgICAgICAgZmlyc3REdHMgPSBkdHNcbiAgICAgIH1cblxuICAgICAgbGV0IGN0c1xuICAgICAgbGV0IHB0c1xuICAgICAgaWYgKGF2Y1NhbXBsZS5wdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwdHMgPSBhdmNTYW1wbGUucHRzIC0gdGhpcy5fZHRzQmFzZVxuICAgICAgICBjdHMgPSBwdHMgLSBkdHNcbiAgICAgIH1cbiAgICAgIGlmIChhdmNTYW1wbGUuY3RzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHRzID0gYXZjU2FtcGxlLmN0cyArIGR0c1xuICAgICAgICBjdHMgPSBhdmNTYW1wbGUuY3RzXG4gICAgICB9XG5cbiAgICAgIGxldCBtZGF0U2FtcGxlID0ge1xuICAgICAgICBidWZmZXI6IFtdLFxuICAgICAgICBzaXplOiAwXG4gICAgICB9XG4gICAgICBtZGF0Qm94LnNhbXBsZXMucHVzaChtZGF0U2FtcGxlKVxuICAgICAgbWRhdFNhbXBsZS5idWZmZXIucHVzaChhdmNTYW1wbGUuZGF0YSlcbiAgICAgIG1kYXRTYW1wbGUuc2l6ZSArPSBhdmNTYW1wbGUuZGF0YS5ieXRlTGVuZ3RoXG5cbiAgICAgIGxldCBzYW1wbGVEdXJhdGlvbiA9IDBcbiAgICAgIGlmIChzYW1wbGVzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgIGNvbnN0IG5leHREdHMgPSBzYW1wbGVzWzBdLmR0cyAtIHRoaXMuX2R0c0Jhc2VcbiAgICAgICAgc2FtcGxlRHVyYXRpb24gPSBuZXh0RHRzIC0gZHRzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobXA0U2FtcGxlcy5sZW5ndGggPj0gMSkgeyAvLyBsYXN0ZXN0IHNhbXBsZSwgdXNlIHNlY29uZCBsYXN0IGR1cmF0aW9uXG4gICAgICAgICAgc2FtcGxlRHVyYXRpb24gPSBtcDRTYW1wbGVzW21wNFNhbXBsZXMubGVuZ3RoIC0gMV0uZHVyYXRpb25cbiAgICAgICAgfSBlbHNlIHsgLy8gdGhlIG9ubHkgb25lIHNhbXBsZSwgdXNlIHJlZmVyZW5jZSBkdXJhdGlvblxuICAgICAgICAgIHNhbXBsZUR1cmF0aW9uID0gdGhpcy52aWRlb01ldGEucmVmU2FtcGxlRHVyYXRpb25cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy52aWRlb0FsbER1cmF0aW9uICs9IHNhbXBsZUR1cmF0aW9uXG4gICAgICAvLyBjb25zb2xlLmxvZyhgZHRzICR7ZHRzfWAsIGBwdHMgJHtwdHN9YCwgYGN0czogJHtjdHN9YCwgYGR1cmF0aW9uOiAke3NhbXBsZUR1cmF0aW9ufWAsIGF2Y1NhbXBsZSlcbiAgICAgIG1wNFNhbXBsZXMucHVzaCh7XG4gICAgICAgIGR0cyxcbiAgICAgICAgY3RzLFxuICAgICAgICBwdHMsXG4gICAgICAgIGRhdGE6IGF2Y1NhbXBsZS5kYXRhLFxuICAgICAgICBzaXplOiBhdmNTYW1wbGUuZGF0YS5ieXRlTGVuZ3RoLFxuICAgICAgICBpc0tleWZyYW1lLFxuICAgICAgICBkdXJhdGlvbjogc2FtcGxlRHVyYXRpb24sXG4gICAgICAgIGZsYWdzOiB7XG4gICAgICAgICAgaXNMZWFkaW5nOiAwLFxuICAgICAgICAgIGRlcGVuZHNPbjogaXNLZXlmcmFtZSA/IDIgOiAxLFxuICAgICAgICAgIGlzRGVwZW5kZWRPbjogaXNLZXlmcmFtZSA/IDEgOiAwLFxuICAgICAgICAgIGhhc1JlZHVuZGFuY3k6IDAsXG4gICAgICAgICAgaXNOb25TeW5jOiBpc0tleWZyYW1lID8gMCA6IDFcbiAgICAgICAgfSxcbiAgICAgICAgb3JpZ2luRHRzOiBkdHMsXG4gICAgICAgIHR5cGU6ICd2aWRlbydcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgbGV0IG1vb2ZNZGF0ID0gbmV3IEJ1ZmZlcigpXG4gICAgaWYgKG1wNFNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBtb29mID0gRm1wNC5tb29mKHtcbiAgICAgICAgaWQ6IHRyYWNrLm1ldGEuaWQsXG4gICAgICAgIHRpbWU6IGZpcnN0RHRzLFxuICAgICAgICBzYW1wbGVzOiBtcDRTYW1wbGVzXG4gICAgICB9KVxuICAgICAgY29uc3QgbWRhdCA9IEZtcDQubWRhdChtZGF0Qm94KVxuICAgICAgbW9vZk1kYXQud3JpdGUobW9vZiwgbWRhdClcblxuICAgICAgdGhpcy53cml0ZVRvU291cmNlKCd2aWRlbycsIG1vb2ZNZGF0KVxuICAgIH1cblxuICAgIGlmIChpbml0U2VnbWVudCkge1xuICAgICAgdGhpcy53cml0ZVRvU291cmNlKCd2aWRlbycsIGluaXRTZWdtZW50KVxuXG4gICAgICBpZiAoc2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgICAgLy8gc2Vjb25kIHBhcnQgb2Ygc3RyZWFtIGNoYW5nZVxuICAgICAgICB0cmFjay5zYW1wbGVzID0gc2FtcGxlcztcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbXV4VmlkZW8odHJhY2spXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5pc0ZpcnN0VmlkZW8gPSBmYWxzZVxuICAgIHRoaXMuZW1pdChSRU1VWF9FVkVOVFMuTUVESUFfU0VHTUVOVCwgJ3ZpZGVvJylcblxuICAgIGNvbnN0IGxhc3RTYW1wbGUgPSBtcDRTYW1wbGVzW21wNFNhbXBsZXMubGVuZ3RoIC0gMV1cbiAgICB0aGlzLl92aWRlb05leHREdHMgPSBsYXN0U2FtcGxlLmR0cyArIGxhc3RTYW1wbGUuZHVyYXRpb247XG4gICAgdHJhY2suc2FtcGxlcyA9IFtdXG4gICAgdHJhY2subGVuZ3RoID0gMFxuICB9XG5cbiAgX3JlbXV4QXVkaW8gKHRyYWNrKSB7XG4gICAgY29uc3Qge3NhbXBsZXN9ID0gdHJhY2tcbiAgICBsZXQgZmlyc3REdHMgPSAtMVxuICAgIGxldCBtcDRTYW1wbGVzID0gW11cblxuICAgIGxldCBpbml0U2VnbWVudCA9IG51bGxcbiAgICBjb25zdCBtZGF0Qm94ID0ge1xuICAgICAgc2FtcGxlczogW11cbiAgICB9XG4gICAgaWYgKCFzYW1wbGVzIHx8ICFzYW1wbGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGxldCBpc0ZpcnN0RHRzSW5pdGVkID0gZmFsc2VcbiAgICB3aGlsZSAoc2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIGxldCBzYW1wbGUgPSBzYW1wbGVzLnNoaWZ0KClcbiAgICAgIGNvbnN0IHsgZGF0YSwgb3B0aW9ucyB9ID0gc2FtcGxlXG4gICAgICBpZiAoIXRoaXMuaXNGaXJzdEF1ZGlvICYmIG9wdGlvbnMgJiYgb3B0aW9ucy5tZXRhKSB7XG4gICAgICAgIGluaXRTZWdtZW50ID0gdGhpcy5yZW11eEluaXRTZWdtZW50KCdhdWRpbycsIG9wdGlvbnMubWV0YSlcbiAgICAgICAgb3B0aW9ucy5tZXRhID0gbnVsbDtcbiAgICAgICAgc2FtcGxlcy51bnNoaWZ0KHNhbXBsZSlcbiAgICAgICAgaWYgKCFvcHRpb25zLmlzQ29udGludWUpIHtcbiAgICAgICAgICB0aGlzLnJlc2V0RHRzQmFzZSgpXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGxldCBkdHMgPSBzYW1wbGUuZHRzIC0gdGhpcy5fZHRzQmFzZVxuICAgICAgY29uc3Qgb3JpZ2luRHRzID0gZHRzXG4gICAgICBpZiAoIWlzRmlyc3REdHNJbml0ZWQpIHtcbiAgICAgICAgZmlyc3REdHMgPSBkdHNcbiAgICAgICAgaXNGaXJzdER0c0luaXRlZCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgbGV0IHNhbXBsZUR1cmF0aW9uID0gMFxuXG4gICAgICBpZiAodGhpcy5hdWRpb01ldGEucmVmU2FtcGxlRHVyYXRpb25GaXhlZCkge1xuICAgICAgICBzYW1wbGVEdXJhdGlvbiA9IHRoaXMuYXVkaW9NZXRhLnJlZlNhbXBsZUR1cmF0aW9uRml4ZWRcbiAgICAgIH0gZWxzZSBpZiAoc2FtcGxlcy5sZW5ndGggPj0gMSkge1xuICAgICAgICBjb25zdCBuZXh0RHRzID0gc2FtcGxlc1swXS5kdHMgLSB0aGlzLl9kdHNCYXNlO1xuICAgICAgICBzYW1wbGVEdXJhdGlvbiA9IG5leHREdHMgLSBkdHNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChtcDRTYW1wbGVzLmxlbmd0aCA+PSAxKSB7IC8vIHVzZSBzZWNvbmQgbGFzdCBzYW1wbGUgZHVyYXRpb25cbiAgICAgICAgICBzYW1wbGVEdXJhdGlvbiA9IG1wNFNhbXBsZXNbbXA0U2FtcGxlcy5sZW5ndGggLSAxXS5kdXJhdGlvblxuICAgICAgICB9IGVsc2UgeyAvLyB0aGUgb25seSBvbmUgc2FtcGxlLCB1c2UgcmVmZXJlbmNlIHNhbXBsZSBkdXJhdGlvblxuICAgICAgICAgIHNhbXBsZUR1cmF0aW9uID0gdGhpcy5hdWRpb01ldGEucmVmU2FtcGxlRHVyYXRpb25cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBjb25zb2xlLmxvZygncmVtdXggYXVkaW8gJywgZHRzKVxuICAgICAgdGhpcy5hdWRpb0FsbER1cmF0aW9uICs9IHNhbXBsZUR1cmF0aW9uXG4gICAgICBjb25zdCBtcDRTYW1wbGUgPSB7XG4gICAgICAgIGR0cyxcbiAgICAgICAgcHRzOiBkdHMsXG4gICAgICAgIGN0czogMCxcbiAgICAgICAgc2l6ZTogZGF0YS5ieXRlTGVuZ3RoLFxuICAgICAgICBkdXJhdGlvbjogc2FtcGxlLmR1cmF0aW9uID8gc2FtcGxlLmR1cmF0aW9uIDogc2FtcGxlRHVyYXRpb24sXG4gICAgICAgIGZsYWdzOiB7XG4gICAgICAgICAgaXNMZWFkaW5nOiAwLFxuICAgICAgICAgIGRlcGVuZHNPbjogMixcbiAgICAgICAgICBpc0RlcGVuZGVkT246IDEsXG4gICAgICAgICAgaGFzUmVkdW5kYW5jeTogMCxcbiAgICAgICAgICBpc05vblN5bmM6IDBcbiAgICAgICAgfSxcbiAgICAgICAgaXNLZXlmcmFtZTogdHJ1ZSxcbiAgICAgICAgb3JpZ2luRHRzLFxuICAgICAgICB0eXBlOiAnYXVkaW8nXG4gICAgICB9XG5cbiAgICAgIGxldCBtZGF0U2FtcGxlID0ge1xuICAgICAgICBidWZmZXI6IFtdLFxuICAgICAgICBzaXplOiAwXG4gICAgICB9XG4gICAgICBtZGF0U2FtcGxlLmJ1ZmZlci5wdXNoKGRhdGEpXG4gICAgICBtZGF0U2FtcGxlLnNpemUgKz0gZGF0YS5ieXRlTGVuZ3RoXG5cbiAgICAgIG1kYXRCb3guc2FtcGxlcy5wdXNoKG1kYXRTYW1wbGUpXG5cbiAgICAgIG1wNFNhbXBsZXMucHVzaChtcDRTYW1wbGUpXG4gICAgfVxuXG4gICAgY29uc3QgbW9vZk1kYXQgPSBuZXcgQnVmZmVyKClcblxuICAgIGlmIChtcDRTYW1wbGVzLmxlbmd0aCkge1xuICAgICAgY29uc3QgbW9vZiA9IEZtcDQubW9vZih7XG4gICAgICAgIGlkOiB0cmFjay5tZXRhLmlkLFxuICAgICAgICB0aW1lOiBmaXJzdER0cyxcbiAgICAgICAgc2FtcGxlczogbXA0U2FtcGxlc1xuICAgICAgfSlcbiAgICAgIGNvbnN0IG1kYXQgPSBGbXA0Lm1kYXQobWRhdEJveClcbiAgICAgIG1vb2ZNZGF0LndyaXRlKG1vb2YsIG1kYXQpXG5cbiAgICAgIHRoaXMud3JpdGVUb1NvdXJjZSgnYXVkaW8nLCBtb29mTWRhdClcbiAgICB9XG5cbiAgICBpZiAoaW5pdFNlZ21lbnQpIHtcbiAgICAgIHRoaXMud3JpdGVUb1NvdXJjZSgnYXVkaW8nLCBpbml0U2VnbWVudClcbiAgICAgIGlmIChzYW1wbGVzLmxlbmd0aCkge1xuICAgICAgICAvLyBzZWNvbmQgcGFydCBvZiBzdHJlYW0gY2hhbmdlXG4gICAgICAgIHRyYWNrLnNhbXBsZXMgPSBzYW1wbGVzO1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVtdXhBdWRpbyh0cmFjaylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmlzRmlyc3RBdWRpbyA9IGZhbHNlXG4gICAgdGhpcy5lbWl0KFJFTVVYX0VWRU5UUy5NRURJQV9TRUdNRU5ULCAnYXVkaW8nLCBtb29mTWRhdClcblxuICAgIGNvbnN0IGxhc3RTYW1wbGUgPSBtcDRTYW1wbGVzW21wNFNhbXBsZXMubGVuZ3RoIC0gMV1cbiAgICB0aGlzLl92aWRlb05leHREdHMgPSBsYXN0U2FtcGxlLmR0cyArIGxhc3RTYW1wbGUuZHVyYXRpb247XG4gICAgdHJhY2suc2FtcGxlcyA9IFtdXG4gICAgdHJhY2subGVuZ3RoID0gMFxuICB9XG5cbiAgd3JpdGVUb1NvdXJjZSAodHlwZSwgYnVmZmVyKSB7XG4gICAgbGV0IHByZXNvdXJjZWJ1ZmZlciA9IHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UoJ1BSRV9TT1VSQ0VfQlVGRkVSJyk7XG4gICAgbGV0IHNvdXJjZSA9IHByZXNvdXJjZWJ1ZmZlci5nZXRTb3VyY2UodHlwZSk7XG4gICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgIHNvdXJjZSA9IHByZXNvdXJjZWJ1ZmZlci5jcmVhdGVTb3VyY2UodHlwZSk7XG4gICAgfVxuXG4gICAgc291cmNlLmRhdGEucHVzaChidWZmZXIpXG4gIH1cblxuICBpbml0U2lsZW50QXVkaW8gKGR0cywgZHVyYXRpb24pIHtcbiAgICBjb25zdCB1bml0ID0gTXA0UmVtdXhlci5nZXRTaWxlbnRGcmFtZSh0aGlzLmF1ZGlvTWV0YS5jaGFubmVsQ291bnQpXG4gICAgcmV0dXJuIHtcbiAgICAgIGR0cyxcbiAgICAgIHB0czogZHRzLFxuICAgICAgY3RzOiAwLFxuICAgICAgZHVyYXRpb24sXG4gICAgICB1bml0LFxuICAgICAgc2l6ZTogdW5pdC5ieXRlTGVuZ3RoLFxuICAgICAgb3JpZ2luRHRzOiBkdHMsXG4gICAgICB0eXBlOiAndmlkZW8nXG4gICAgfVxuICB9XG5cbiAgZ2V0IHZpZGVvTWV0YSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UoJ1RSQUNLUycpLnZpZGVvVHJhY2subWV0YVxuICB9XG4gIGdldCBhdWRpb01ldGEgKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdUUkFDS1MnKS5hdWRpb1RyYWNrLm1ldGFcbiAgfVxuXG4gIHN0YXRpYyBnZXRTaWxlbnRGcmFtZSAoY2hhbm5lbENvdW50KSB7XG4gICAgaWYgKGNoYW5uZWxDb3VudCA9PT0gMSkge1xuICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFsweDAwLCAweGM4LCAweDAwLCAweDgwLCAweDIzLCAweDgwXSlcbiAgICB9IGVsc2UgaWYgKGNoYW5uZWxDb3VudCA9PT0gMikge1xuICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFsweDIxLCAweDAwLCAweDQ5LCAweDkwLCAweDAyLCAweDE5LCAweDAwLCAweDIzLCAweDgwXSlcbiAgICB9IGVsc2UgaWYgKGNoYW5uZWxDb3VudCA9PT0gMykge1xuICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFsweDAwLCAweGM4LCAweDAwLCAweDgwLCAweDIwLCAweDg0LCAweDAxLCAweDI2LCAweDQwLCAweDA4LCAweDY0LCAweDAwLCAweDhlXSlcbiAgICB9IGVsc2UgaWYgKGNoYW5uZWxDb3VudCA9PT0gNCkge1xuICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFsweDAwLCAweGM4LCAweDAwLCAweDgwLCAweDIwLCAweDg0LCAweDAxLCAweDI2LCAweDQwLCAweDA4LCAweDY0LCAweDAwLCAweDgwLCAweDJjLCAweDgwLCAweDA4LCAweDAyLCAweDM4XSlcbiAgICB9IGVsc2UgaWYgKGNoYW5uZWxDb3VudCA9PT0gNSkge1xuICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFsweDAwLCAweGM4LCAweDAwLCAweDgwLCAweDIwLCAweDg0LCAweDAxLCAweDI2LCAweDQwLCAweDA4LCAweDY0LCAweDAwLCAweDgyLCAweDMwLCAweDA0LCAweDk5LCAweDAwLCAweDIxLCAweDkwLCAweDAyLCAweDM4XSlcbiAgICB9IGVsc2UgaWYgKGNoYW5uZWxDb3VudCA9PT0gNikge1xuICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFsweDAwLCAweGM4LCAweDAwLCAweDgwLCAweDIwLCAweDg0LCAweDAxLCAweDI2LCAweDQwLCAweDA4LCAweDY0LCAweDAwLCAweDgyLCAweDMwLCAweDA0LCAweDk5LCAweDAwLCAweDIxLCAweDkwLCAweDAyLCAweDAwLCAweGIyLCAweDAwLCAweDIwLCAweDA4LCAweGUwXSlcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIENvbnRleHQ6IHJlcXVpcmUoJy4vc3JjL2NvbnRleHQnKS5kZWZhdWx0LFxuXG4gIC8vIE1vZHVsZXMgZnJvbSBjb25zdGFudHNcbiAgRVZFTlRTOiByZXF1aXJlKCcuL3NyYy9jb25zdGFudHMvZXZlbnRzJykuZGVmYXVsdCxcbiAgV09SS0VSX0NPTU1BTkRTOiByZXF1aXJlKCcuL3NyYy9jb25zdGFudHMvd29ya2VyLWNvbW1hbmRzJykuZGVmYXVsdCxcblxuICAvLyBNb2R1bGVzIGZyb20gZW52XG4gIHNuaWZmZXI6IHJlcXVpcmUoJy4vc3JjL2Vudi9zbmlmZmVyJykuZGVmYXVsdCxcbiAgaXNMZTogcmVxdWlyZSgnLi9zcmMvZW52L2lzbGUnKS5kZWZhdWx0LFxuICBVVEY4OiByZXF1aXJlKCcuL3NyYy9lbnYvdXRmOCcpLmRlZmF1bHQsXG4gIFBhZ2VWaXNpYmlsaXR5OiByZXF1aXJlKCcuL3NyYy9lbnYvUGFnZVZpc2liaWxpdHknKS5kZWZhdWx0LFxuXG4gIC8vIE1vZGVsc1xuICBNZWRpYUluZm86IHJlcXVpcmUoJy4vc3JjL21vZGVscy9tZWRpYS1pbmZvJykuZGVmYXVsdCxcbiAgTWVkaWFTYW1wbGU6IHJlcXVpcmUoJy4vc3JjL21vZGVscy9tZWRpYS1zYW1wbGUnKS5kZWZhdWx0LFxuICBNZWRpYVNlZ21lbnQ6IHJlcXVpcmUoJy4vc3JjL21vZGVscy9tZWRpYS1zZWdtZW50JykuZGVmYXVsdCxcbiAgTWVkaWFTZWdtZW50TGlzdDogcmVxdWlyZSgnLi9zcmMvbW9kZWxzL21lZGlhLXNlZ21lbnQtbGlzdCcpLmRlZmF1bHQsXG4gIEF1ZGlvVHJhY2tNZXRhOiByZXF1aXJlKCcuL3NyYy9tb2RlbHMvdHJhY2stbWV0YScpLkF1ZGlvVHJhY2tNZXRhLFxuICBWaWRlb1RyYWNrTWV0YTogcmVxdWlyZSgnLi9zcmMvbW9kZWxzL3RyYWNrLW1ldGEnKS5WaWRlb1RyYWNrTWV0YSxcbiAgQXVkaW9UcmFja1NhbXBsZTogcmVxdWlyZSgnLi9zcmMvbW9kZWxzL3RyYWNrLXNhbXBsZScpLkF1ZGlvVHJhY2tTYW1wbGUsXG4gIFZpZGVvVHJhY2tTYW1wbGU6IHJlcXVpcmUoJy4vc3JjL21vZGVscy90cmFjay1zYW1wbGUnKS5WaWRlb1RyYWNrU2FtcGxlLFxuXG4gIC8vIE1vZHVsZXMgZnJvbSBtc2VcbiAgTXNlOiByZXF1aXJlKCcuL3NyYy9tc2UvaW5kZXgnKS5kZWZhdWx0LFxuXG4gIC8vIE1vZHVsZXMgZnJvbSB3cml0ZVxuICBTdHJlYW06IHJlcXVpcmUoJy4vc3JjL3dyaXRlL3N0cmVhbScpLmRlZmF1bHQsXG4gIEJ1ZmZlcjogcmVxdWlyZSgnLi9zcmMvd3JpdGUvYnVmZmVyJykuZGVmYXVsdCxcblxuICBNb2JpbGVWaWRlbzogcmVxdWlyZSgnLi9zcmMvbW9iaWxlL21vYmlsZS12aWRlbycpLFxuICAvLyBDcnlwdG9cbiAgQ3J5cHRvOiByZXF1aXJlKCcuL3NyYy9jcnlwdG8nKS5kZWZhdWx0XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChSZXN1bHRDb25zdHJ1Y3Rvcikge1xuICB2YXIgdG90YWxMZW5ndGggPSAwO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcnJheXMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJyYXlzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGFycmF5c1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgIHZhciBhcnIgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgdG90YWxMZW5ndGggKz0gYXJyLmxlbmd0aDtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIHJlc3VsdCA9IG5ldyBSZXN1bHRDb25zdHJ1Y3Rvcih0b3RhbExlbmd0aCk7XG4gIHZhciBvZmZzZXQgPSAwO1xuICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gYXJyYXlzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAyOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gKF9zdGVwMiA9IF9pdGVyYXRvcjIubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlKSB7XG4gICAgICB2YXIgX2FyciA9IF9zdGVwMi52YWx1ZTtcblxuICAgICAgcmVzdWx0LnNldChfYXJyLCBvZmZzZXQpO1xuICAgICAgb2Zmc2V0ICs9IF9hcnIubGVuZ3RoO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2RpZEl0ZXJhdG9yRXJyb3IyID0gdHJ1ZTtcbiAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMi5yZXR1cm4pIHtcbiAgICAgICAgX2l0ZXJhdG9yMi5yZXR1cm4oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NvbmNhdCA9IHJlcXVpcmUoJy4vY29uY2F0Jyk7XG5cbnZhciBfY29uY2F0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbmNhdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0gX2NvbmNhdDIuZGVmYXVsdDsiLCJmdW5jdGlvbiB3ZWJwYWNrQm9vdHN0cmFwRnVuYyAobW9kdWxlcykge1xuLyoqKioqKi8gIC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovICB2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4vKioqKioqLyAgLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovICBmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbi8qKioqKiovICAgIC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gICAgaWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyAgICAgIHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4vKioqKioqLyAgICAvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gICAgdmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gICAgICBpOiBtb2R1bGVJZCxcbi8qKioqKiovICAgICAgbDogZmFsc2UsXG4vKioqKioqLyAgICAgIGV4cG9ydHM6IHt9XG4vKioqKioqLyAgICB9O1xuXG4vKioqKioqLyAgICAvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovICAgIG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4vKioqKioqLyAgICAvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyAgICBtb2R1bGUubCA9IHRydWU7XG5cbi8qKioqKiovICAgIC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyAgfVxuXG4vKioqKioqLyAgLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovICBfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4vKioqKioqLyAgLy8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovICBfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4vKioqKioqLyAgLy8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuLyoqKioqKi8gIF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuLyoqKioqKi8gIC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gIF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gICAgaWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovICAgICAgICBnZXQ6IGdldHRlclxuLyoqKioqKi8gICAgICB9KTtcbi8qKioqKiovICAgIH1cbi8qKioqKiovICB9O1xuXG4vKioqKioqLyAgLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gIF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyAgfTtcblxuLyoqKioqKi8gIC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyAgX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyAgICB2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovICAgICAgZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovICAgICAgZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovICAgIF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovICAgIHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyAgfTtcblxuLyoqKioqKi8gIC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gIF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuLyoqKioqKi8gIC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyAgX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbi8qKioqKiovICAvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuLyoqKioqKi8gIF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiAgdmFyIGYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IEVOVFJZX01PRFVMRSlcbiAgcmV0dXJuIGYuZGVmYXVsdCB8fCBmIC8vIHRyeSB0byBjYWxsIGRlZmF1bHQgaWYgZGVmaW5lZCB0byBhbHNvIHN1cHBvcnQgYmFiZWwgZXNtb2R1bGUgZXhwb3J0c1xufVxuXG52YXIgbW9kdWxlTmFtZVJlcUV4cCA9ICdbXFxcXC58XFxcXC18XFxcXCt8XFxcXHd8XFwvfEBdKydcbnZhciBkZXBlbmRlbmN5UmVnRXhwID0gJ1xcXFwoXFxcXHMqKFxcL1xcXFwqLio/XFxcXCpcXC8pP1xcXFxzKi4qPygnICsgbW9kdWxlTmFtZVJlcUV4cCArICcpLio/XFxcXCknIC8vIGFkZGl0aW9uYWwgY2hhcnMgd2hlbiBvdXRwdXQucGF0aGluZm8gaXMgdHJ1ZVxuXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNTkzNjYxLzEzMDQ0MlxuZnVuY3Rpb24gcXVvdGVSZWdFeHAgKHN0cikge1xuICByZXR1cm4gKHN0ciArICcnKS5yZXBsYWNlKC9bLj8qK14kW1xcXVxcXFwoKXt9fC1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBpc051bWVyaWMobikge1xuICByZXR1cm4gIWlzTmFOKDEgKiBuKTsgLy8gMSAqIG4gY29udmVydHMgaW50ZWdlcnMsIGludGVnZXJzIGFzIHN0cmluZyAoXCIxMjNcIiksIDFlMyBhbmQgXCIxZTNcIiB0byBpbnRlZ2VycyBhbmQgc3RyaW5ncyB0byBOYU5cbn1cblxuZnVuY3Rpb24gZ2V0TW9kdWxlRGVwZW5kZW5jaWVzIChzb3VyY2VzLCBtb2R1bGUsIHF1ZXVlTmFtZSkge1xuICB2YXIgcmV0dmFsID0ge31cbiAgcmV0dmFsW3F1ZXVlTmFtZV0gPSBbXVxuXG4gIHZhciBmblN0cmluZyA9IG1vZHVsZS50b1N0cmluZygpXG4gIHZhciB3cmFwcGVyU2lnbmF0dXJlID0gZm5TdHJpbmcubWF0Y2goL15mdW5jdGlvblxccz9cXHcqXFwoXFx3KyxcXHMqXFx3KyxcXHMqKFxcdyspXFwpLylcbiAgaWYgKCF3cmFwcGVyU2lnbmF0dXJlKSByZXR1cm4gcmV0dmFsXG4gIHZhciB3ZWJwYWNrUmVxdWlyZU5hbWUgPSB3cmFwcGVyU2lnbmF0dXJlWzFdXG5cbiAgLy8gbWFpbiBidW5kbGUgZGVwc1xuICB2YXIgcmUgPSBuZXcgUmVnRXhwKCcoXFxcXFxcXFxufFxcXFxXKScgKyBxdW90ZVJlZ0V4cCh3ZWJwYWNrUmVxdWlyZU5hbWUpICsgZGVwZW5kZW5jeVJlZ0V4cCwgJ2cnKVxuICB2YXIgbWF0Y2hcbiAgd2hpbGUgKChtYXRjaCA9IHJlLmV4ZWMoZm5TdHJpbmcpKSkge1xuICAgIGlmIChtYXRjaFszXSA9PT0gJ2RsbC1yZWZlcmVuY2UnKSBjb250aW51ZVxuICAgIHJldHZhbFtxdWV1ZU5hbWVdLnB1c2gobWF0Y2hbM10pXG4gIH1cblxuICAvLyBkbGwgZGVwc1xuICByZSA9IG5ldyBSZWdFeHAoJ1xcXFwoJyArIHF1b3RlUmVnRXhwKHdlYnBhY2tSZXF1aXJlTmFtZSkgKyAnXFxcXChcIihkbGwtcmVmZXJlbmNlXFxcXHMoJyArIG1vZHVsZU5hbWVSZXFFeHAgKyAnKSlcIlxcXFwpXFxcXCknICsgZGVwZW5kZW5jeVJlZ0V4cCwgJ2cnKVxuICB3aGlsZSAoKG1hdGNoID0gcmUuZXhlYyhmblN0cmluZykpKSB7XG4gICAgaWYgKCFzb3VyY2VzW21hdGNoWzJdXSkge1xuICAgICAgcmV0dmFsW3F1ZXVlTmFtZV0ucHVzaChtYXRjaFsxXSlcbiAgICAgIHNvdXJjZXNbbWF0Y2hbMl1dID0gX193ZWJwYWNrX3JlcXVpcmVfXyhtYXRjaFsxXSkubVxuICAgIH1cbiAgICByZXR2YWxbbWF0Y2hbMl1dID0gcmV0dmFsW21hdGNoWzJdXSB8fCBbXVxuICAgIHJldHZhbFttYXRjaFsyXV0ucHVzaChtYXRjaFs0XSlcbiAgfVxuXG4gIC8vIGNvbnZlcnQgMWUzIGJhY2sgdG8gMTAwMCAtIHRoaXMgY2FuIGJlIGltcG9ydGFudCBhZnRlciB1Z2xpZnktanMgY29udmVydGVkIDEwMDAgdG8gMWUzXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMocmV0dmFsKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCByZXR2YWxba2V5c1tpXV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChpc051bWVyaWMocmV0dmFsW2tleXNbaV1dW2pdKSkge1xuICAgICAgICByZXR2YWxba2V5c1tpXV1bal0gPSAxICogcmV0dmFsW2tleXNbaV1dW2pdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXR2YWxcbn1cblxuZnVuY3Rpb24gaGFzVmFsdWVzSW5RdWV1ZXMgKHF1ZXVlcykge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHF1ZXVlcylcbiAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uIChoYXNWYWx1ZXMsIGtleSkge1xuICAgIHJldHVybiBoYXNWYWx1ZXMgfHwgcXVldWVzW2tleV0ubGVuZ3RoID4gMFxuICB9LCBmYWxzZSlcbn1cblxuZnVuY3Rpb24gZ2V0UmVxdWlyZWRNb2R1bGVzIChzb3VyY2VzLCBtb2R1bGVJZCkge1xuICB2YXIgbW9kdWxlc1F1ZXVlID0ge1xuICAgIG1haW46IFttb2R1bGVJZF1cbiAgfVxuICB2YXIgcmVxdWlyZWRNb2R1bGVzID0ge1xuICAgIG1haW46IFtdXG4gIH1cbiAgdmFyIHNlZW5Nb2R1bGVzID0ge1xuICAgIG1haW46IHt9XG4gIH1cblxuICB3aGlsZSAoaGFzVmFsdWVzSW5RdWV1ZXMobW9kdWxlc1F1ZXVlKSkge1xuICAgIHZhciBxdWV1ZXMgPSBPYmplY3Qua2V5cyhtb2R1bGVzUXVldWUpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBxdWV1ZU5hbWUgPSBxdWV1ZXNbaV1cbiAgICAgIHZhciBxdWV1ZSA9IG1vZHVsZXNRdWV1ZVtxdWV1ZU5hbWVdXG4gICAgICB2YXIgbW9kdWxlVG9DaGVjayA9IHF1ZXVlLnBvcCgpXG4gICAgICBzZWVuTW9kdWxlc1txdWV1ZU5hbWVdID0gc2Vlbk1vZHVsZXNbcXVldWVOYW1lXSB8fCB7fVxuICAgICAgaWYgKHNlZW5Nb2R1bGVzW3F1ZXVlTmFtZV1bbW9kdWxlVG9DaGVja10gfHwgIXNvdXJjZXNbcXVldWVOYW1lXVttb2R1bGVUb0NoZWNrXSkgY29udGludWVcbiAgICAgIHNlZW5Nb2R1bGVzW3F1ZXVlTmFtZV1bbW9kdWxlVG9DaGVja10gPSB0cnVlXG4gICAgICByZXF1aXJlZE1vZHVsZXNbcXVldWVOYW1lXSA9IHJlcXVpcmVkTW9kdWxlc1txdWV1ZU5hbWVdIHx8IFtdXG4gICAgICByZXF1aXJlZE1vZHVsZXNbcXVldWVOYW1lXS5wdXNoKG1vZHVsZVRvQ2hlY2spXG4gICAgICB2YXIgbmV3TW9kdWxlcyA9IGdldE1vZHVsZURlcGVuZGVuY2llcyhzb3VyY2VzLCBzb3VyY2VzW3F1ZXVlTmFtZV1bbW9kdWxlVG9DaGVja10sIHF1ZXVlTmFtZSlcbiAgICAgIHZhciBuZXdNb2R1bGVzS2V5cyA9IE9iamVjdC5rZXlzKG5ld01vZHVsZXMpXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG5ld01vZHVsZXNLZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIG1vZHVsZXNRdWV1ZVtuZXdNb2R1bGVzS2V5c1tqXV0gPSBtb2R1bGVzUXVldWVbbmV3TW9kdWxlc0tleXNbal1dIHx8IFtdXG4gICAgICAgIG1vZHVsZXNRdWV1ZVtuZXdNb2R1bGVzS2V5c1tqXV0gPSBtb2R1bGVzUXVldWVbbmV3TW9kdWxlc0tleXNbal1dLmNvbmNhdChuZXdNb2R1bGVzW25ld01vZHVsZXNLZXlzW2pdXSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVxdWlyZWRNb2R1bGVzXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHZhciBzb3VyY2VzID0ge1xuICAgIG1haW46IF9fd2VicGFja19tb2R1bGVzX19cbiAgfVxuXG4gIHZhciByZXF1aXJlZE1vZHVsZXMgPSBvcHRpb25zLmFsbCA/IHsgbWFpbjogT2JqZWN0LmtleXMoc291cmNlcy5tYWluKSB9IDogZ2V0UmVxdWlyZWRNb2R1bGVzKHNvdXJjZXMsIG1vZHVsZUlkKVxuXG4gIHZhciBzcmMgPSAnJ1xuXG4gIE9iamVjdC5rZXlzKHJlcXVpcmVkTW9kdWxlcykuZmlsdGVyKGZ1bmN0aW9uIChtKSB7IHJldHVybiBtICE9PSAnbWFpbicgfSkuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlKSB7XG4gICAgdmFyIGVudHJ5TW9kdWxlID0gMFxuICAgIHdoaWxlIChyZXF1aXJlZE1vZHVsZXNbbW9kdWxlXVtlbnRyeU1vZHVsZV0pIHtcbiAgICAgIGVudHJ5TW9kdWxlKytcbiAgICB9XG4gICAgcmVxdWlyZWRNb2R1bGVzW21vZHVsZV0ucHVzaChlbnRyeU1vZHVsZSlcbiAgICBzb3VyY2VzW21vZHVsZV1bZW50cnlNb2R1bGVdID0gJyhmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHsgbW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fOyB9KSdcbiAgICBzcmMgPSBzcmMgKyAndmFyICcgKyBtb2R1bGUgKyAnID0gKCcgKyB3ZWJwYWNrQm9vdHN0cmFwRnVuYy50b1N0cmluZygpLnJlcGxhY2UoJ0VOVFJZX01PRFVMRScsIEpTT04uc3RyaW5naWZ5KGVudHJ5TW9kdWxlKSkgKyAnKSh7JyArIHJlcXVpcmVkTW9kdWxlc1ttb2R1bGVdLm1hcChmdW5jdGlvbiAoaWQpIHsgcmV0dXJuICcnICsgSlNPTi5zdHJpbmdpZnkoaWQpICsgJzogJyArIHNvdXJjZXNbbW9kdWxlXVtpZF0udG9TdHJpbmcoKSB9KS5qb2luKCcsJykgKyAnfSk7XFxuJ1xuICB9KVxuXG4gIHNyYyA9IHNyYyArICduZXcgKCgnICsgd2VicGFja0Jvb3RzdHJhcEZ1bmMudG9TdHJpbmcoKS5yZXBsYWNlKCdFTlRSWV9NT0RVTEUnLCBKU09OLnN0cmluZ2lmeShtb2R1bGVJZCkpICsgJykoeycgKyByZXF1aXJlZE1vZHVsZXMubWFpbi5tYXAoZnVuY3Rpb24gKGlkKSB7IHJldHVybiAnJyArIEpTT04uc3RyaW5naWZ5KGlkKSArICc6ICcgKyBzb3VyY2VzLm1haW5baWRdLnRvU3RyaW5nKCkgfSkuam9pbignLCcpICsgJ30pKShzZWxmKTsnXG5cbiAgdmFyIGJsb2IgPSBuZXcgd2luZG93LkJsb2IoW3NyY10sIHsgdHlwZTogJ3RleHQvamF2YXNjcmlwdCcgfSlcbiAgaWYgKG9wdGlvbnMuYmFyZSkgeyByZXR1cm4gYmxvYiB9XG5cbiAgdmFyIFVSTCA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTCB8fCB3aW5kb3cubW96VVJMIHx8IHdpbmRvdy5tc1VSTFxuXG4gIHZhciB3b3JrZXJVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpXG4gIHZhciB3b3JrZXIgPSBuZXcgd2luZG93Lldvcmtlcih3b3JrZXJVcmwpXG4gIHdvcmtlci5vYmplY3RVUkwgPSB3b3JrZXJVcmxcblxuICByZXR1cm4gd29ya2VyXG59XG4iLCJjb25zdCBMT0FERVJfRVZFTlRTID0ge1xuICBMQURFUl9TVEFSVDogJ0xPQURFUl9TVEFSVCcsXG4gIExPQURFUl9EQVRBTE9BREVEOiAnTE9BREVSX0RBVEFMT0FERUQnLFxuICBMT0FERVJfQ09NUExFVEU6ICdMT0FERVJfQ09NUExFVEUnLFxuICBMT0FERVJfRVJST1I6ICdMT0FERVJfRVJST1InXG59XG5cbmNvbnN0IERFTVVYX0VWRU5UUyA9IHtcbiAgREVNVVhfU1RBUlQ6ICdERU1VWF9TVEFSVCcsXG4gIERFTVVYX0NPTVBMRVRFOiAnREVNVVhfQ09NUExFVEUnLFxuICBERU1VWF9FUlJPUjogJ0RFTVVYX0VSUk9SJyxcbiAgTUVUQURBVEFfUEFSU0VEOiAnTUVUQURBVEFfUEFSU0VEJyxcbiAgVklERU9fTUVUQURBVEFfQ0hBTkdFOiAnVklERU9fTUVUQURBVEFfQ0hBTkdFJyxcbiAgQVVESU9fTUVUQURBVEFfQ0hBTkdFOiAnQVVESU9fTUVUQURBVEFfQ0hBTkdFJyxcbiAgTUVESUFfSU5GTzogJ01FRElBX0lORk8nXG59XG5cbmNvbnN0IFJFTVVYX0VWRU5UUyA9IHtcbiAgUkVNVVhfTUVUQURBVEE6ICdSRU1VWF9NRVRBREFUQScsXG4gIFJFTVVYX01FRElBOiAnUkVNVVhfTUVESUEnLFxuICBNRURJQV9TRUdNRU5UOiAnTUVESUFfU0VHTUVOVCcsXG4gIFJFTVVYX0VSUk9SOiAnUkVNVVhfRVJST1InLFxuICBJTklUX1NFR01FTlQ6ICdJTklUX1NFR01FTlQnLFxuICBERVRFQ1RfQ0hBTkdFX1NUUkVBTTogJ0RFVEVDVF9DSEFOR0VfU1RSRUFNJ1xufVxuXG5jb25zdCBNU0VfRVZFTlRTID0ge1xuICBTT1VSQ0VfVVBEQVRFX0VORDogJ1NPVVJDRV9VUERBVEVfRU5EJ1xufVxuXG4vLyBobHPkuJPmnIlldmVudHNcbmNvbnN0IEhMU19FVkVOVFMgPSB7XG4gIFJFVFJZX1RJTUVfRVhDRUVERUQ6ICdSRVRSWV9USU1FX0VYQ0VFREVEJ1xufVxuXG5jb25zdCBDUllUT19FVkVOVFMgPSB7XG4gIFNUQVJUX0RFQ1JZUFQ6ICdTVEFSVF9ERUNSWVBUJyxcbiAgREVDUllQVEVEOiAnREVDUllQVEVEJ1xufVxuXG5jb25zdCBCUk9XU0VSX0VWRU5UUyA9IHtcbiAgVklTSUJJTElUWV9DSEFOR0U6ICdWSVNJQklMSVRZX0NIQU5HRSdcbn1cblxuY29uc3QgQUxMRVZFTlRTID0gT2JqZWN0LmFzc2lnbih7fSwgTE9BREVSX0VWRU5UUywgREVNVVhfRVZFTlRTLCBSRU1VWF9FVkVOVFMsIE1TRV9FVkVOVFMsIEhMU19FVkVOVFMsIEJST1dTRVJfRVZFTlRTKVxuXG5jb25zdCBGbHZBbGxvd2VkRXZlbnRzID0gW11cbmNvbnN0IEhsc0FsbG93ZWRFdmVudHMgPSBbXVxuXG5mb3IgKGxldCBrZXkgaW4gQUxMRVZFTlRTKSB7XG4gIGlmIChBTExFVkVOVFMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgIEZsdkFsbG93ZWRFdmVudHMucHVzaChBTExFVkVOVFNba2V5XSlcbiAgfVxufVxuXG5mb3IgKGxldCBrZXkgaW4gQUxMRVZFTlRTKSB7XG4gIGlmIChBTExFVkVOVFMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgIEhsc0FsbG93ZWRFdmVudHMucHVzaChBTExFVkVOVFNba2V5XSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEFMTEVWRU5UUyxcbiAgSExTX0VWRU5UUyxcbiAgUkVNVVhfRVZFTlRTLFxuICBERU1VWF9FVkVOVFMsXG4gIE1TRV9FVkVOVFMsXG4gIExPQURFUl9FVkVOVFMsXG4gIEZsdkFsbG93ZWRFdmVudHMsXG4gIEhsc0FsbG93ZWRFdmVudHMsXG4gIENSWVRPX0VWRU5UUyxcbiAgQlJPV1NFUl9FVkVOVFNcbn07XG4iLCJleHBvcnQgY29uc3QgQ09OVEVYVF9DT01PTUFORFMgPSB7XG4gIE9OOiAnb24nLFxuICBPTkNFOiAnb25jZScsXG4gIE9GRjogJ29mZicsXG4gIEVNSVQ6ICdlbWl0JyxcbiAgREVTVFJPWTogJ2Rlc3Ryb3knXG59XG4iLCJpbXBvcnQgTWVkaWFJbmZvIGZyb20gJy4vbW9kZWxzL21lZGlhLWluZm8nXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdldmVudHMnXG5cbmNvbnN0IERJUkVDVF9FTUlUX0ZMQUcgPSAnX19UT19fJ1xuXG5jbGFzcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IgKGFsbG93ZWRFdmVudHMgPSBbXSkge1xuICAgIHRoaXMuX2VtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICB0aGlzLl9pbnN0YW5jZU1hcCA9IHt9IC8vIOaJgOacieeahOino+eggea1geeoi+WunuS+i1xuICAgIHRoaXMuX2Nsc01hcCA9IHt9IC8vIOaehOmAoOWHveaVsOeahG1hcFxuICAgIHRoaXMuX2luaXRlZCA9IGZhbHNlXG4gICAgdGhpcy5tZWRpYUluZm8gPSBuZXcgTWVkaWFJbmZvKClcbiAgICB0aGlzLmFsbG93ZWRFdmVudHMgPSBhbGxvd2VkRXZlbnRzXG4gICAgdGhpcy5faG9va3MgPSB7fSAvLyDms6jlhozlnKjkuovku7bliY0v5ZCO55qE6ZKp5a2Q77yM5L6L5aaCIGJlZm9yZSgnREVNVVhfQ09NUExFVEUnKVxuICB9XG5cbiAgLyoqXG4gICAqIOS7juS4iuS4i+aWh+S4reiOt+WPluino+eggea1geeoi+WunuS+i++8jOWmguaenOayoeacieWunuS+i++8jOaehOmAoOS4gOS4qlxuICAgKiBAcGFyYW0gdGFnXG4gICAqIEBwYXJhbSBhcmdzXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgZ2V0SW5zdGFuY2UgKHRhZykge1xuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5faW5zdGFuY2VNYXBbdGFnXVxuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRocm93IG5ldyBFcnJvcihgJHt0YWd95a6e5L6L5bCa5pyq5Yid5aeL5YyWYClcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOWIneWni+WMluWFt+S9k+WunuS+i1xuICAgKiBAcGFyYW0gdGFnXG4gICAqIEBwYXJhbSBhcmdzXG4gICAqL1xuICBpbml0SW5zdGFuY2UgKHRhZywgLi4uYXJncykge1xuICAgIGlmICh0aGlzLl9jbHNNYXBbdGFnXSkge1xuICAgICAgY29uc3QgbmV3SW5zdGFuY2UgPSBuZXcgdGhpcy5fY2xzTWFwW3RhZ10oLi4uYXJncylcbiAgICAgIHRoaXMuX2luc3RhbmNlTWFwW3RhZ10gPSBuZXdJbnN0YW5jZVxuICAgICAgaWYgKG5ld0luc3RhbmNlLmluaXQpIHtcbiAgICAgICAgbmV3SW5zdGFuY2UuaW5pdCgpIC8vIFRPRE86IGxpZmVjaXJjbGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdJbnN0YW5jZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGFnfeacquWcqGNvbnRleHTkuK3ms6jlhoxgKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDpgb/lhY3lpKfph4/nmoRpbml0SW5zdGFuY2XosIPnlKjvvIzliJ3lp4vljJbmiYDmnInnmoTnu4Tku7ZcbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKi9cbiAgaW5pdCAoY29uZmlnKSB7XG4gICAgaWYgKHRoaXMuX2luaXRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGZvciAobGV0IHRhZyBpbiB0aGlzLl9jbHNNYXApIHtcbiAgICAgIC8vIGlmIG5vdCBpbml0ZWQsIGluaXQgYW4gaW5zdGFuY2VcbiAgICAgIGlmICh0aGlzLl9jbHNNYXAuaGFzT3duUHJvcGVydHkodGFnKSAmJiAhdGhpcy5faW5zdGFuY2VNYXBbdGFnXSkge1xuICAgICAgICB0aGlzLmluaXRJbnN0YW5jZSh0YWcsIGNvbmZpZylcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faW5pdGVkID0gdHJ1ZVxuICB9XG5cbiAgLyoqXG4gICAqIOazqOWGjOS4gOS4quS4iuS4i+aWh+a1geeoi++8jOaPkOS+m+WuieWFqOeahOS6i+S7tuWPkemAgeacuuWItlxuICAgKiBAcGFyYW0gdGFnXG4gICAqIEBwYXJhbSBjbHNcbiAgICovXG4gIHJlZ2lzdHJ5ICh0YWcsIGNscykge1xuICAgIGNvbnN0IGVtaXR0ZXIgPSB0aGlzLl9lbWl0dGVyXG4gICAgY29uc3QgY2hlY2tNZXNzYWdlTmFtZSA9IHRoaXMuX2lzTWVzc2FnZU5hbWVWYWxpZC5iaW5kKHRoaXMpXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBjb25zdCBlbmhhbmNlZCA9IGNsYXNzIGV4dGVuZHMgY2xzIHtcbiAgICAgIGNvbnN0cnVjdG9yICguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpXG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0ge31cbiAgICAgICAgdGhpcy5vbmNlTGlzdGVuZXJzID0ge31cbiAgICAgICAgdGhpcy5UQUcgPSB0YWdcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IHNlbGZcbiAgICAgIH1cblxuICAgICAgb24gKG1lc3NhZ2VOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBjaGVja01lc3NhZ2VOYW1lKG1lc3NhZ2VOYW1lKVxuXG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVyc1ttZXNzYWdlTmFtZV0pIHtcbiAgICAgICAgICB0aGlzLmxpc3RlbmVyc1ttZXNzYWdlTmFtZV0ucHVzaChjYWxsYmFjaylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmxpc3RlbmVyc1ttZXNzYWdlTmFtZV0gPSBbY2FsbGJhY2tdXG4gICAgICAgIH1cblxuICAgICAgICBlbWl0dGVyLm9uKGAke21lc3NhZ2VOYW1lfSR7RElSRUNUX0VNSVRfRkxBR30ke3RhZ31gLCBjYWxsYmFjaykgLy8g5bu656uL5a6a5ZCR6YCa5L+h55uR5ZCsXG4gICAgICAgIHJldHVybiBlbWl0dGVyLm9uKG1lc3NhZ2VOYW1lLCBjYWxsYmFjaylcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiDlnKjmn5DkuKrkuovku7bop6blj5HliY3miafooYxcbiAgICAgICAqIEBwYXJhbSBtZXNzYWdlTmFtZVxuICAgICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICAgKi9cbiAgICAgIGJlZm9yZSAobWVzc2FnZU5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNoZWNrTWVzc2FnZU5hbWUobWVzc2FnZU5hbWUpXG4gICAgICAgIGlmIChzZWxmLl9ob29rc1ttZXNzYWdlTmFtZV0pIHtcbiAgICAgICAgICBzZWxmLl9ob29rc1ttZXNzYWdlTmFtZV0ucHVzaChjYWxsYmFjaylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLl9ob29rc1ttZXNzYWdlTmFtZV0gPSBbY2FsbGJhY2tdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb25jZSAobWVzc2FnZU5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNoZWNrTWVzc2FnZU5hbWUobWVzc2FnZU5hbWUpXG5cbiAgICAgICAgaWYgKHRoaXMub25jZUxpc3RlbmVyc1ttZXNzYWdlTmFtZV0pIHtcbiAgICAgICAgICB0aGlzLm9uY2VMaXN0ZW5lcnNbbWVzc2FnZU5hbWVdLnB1c2goY2FsbGJhY2spXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5vbmNlTGlzdGVuZXJzW21lc3NhZ2VOYW1lXSA9IFtjYWxsYmFja11cbiAgICAgICAgfVxuXG4gICAgICAgIGVtaXR0ZXIub25jZShgJHttZXNzYWdlTmFtZX0ke0RJUkVDVF9FTUlUX0ZMQUd9JHt0YWd9YCwgY2FsbGJhY2spXG4gICAgICAgIHJldHVybiBlbWl0dGVyLm9uY2UobWVzc2FnZU5hbWUsIGNhbGxiYWNrKVxuICAgICAgfVxuXG4gICAgICBlbWl0IChtZXNzYWdlTmFtZSwgLi4uYXJncykge1xuICAgICAgICBjaGVja01lc3NhZ2VOYW1lKG1lc3NhZ2VOYW1lKVxuXG4gICAgICAgIGNvbnN0IGJlZm9yZUxpc3QgPSBzZWxmLl9ob29rcyA/IHNlbGYuX2hvb2tzW21lc3NhZ2VOYW1lXSA6IG51bGxcblxuICAgICAgICBpZiAoYmVmb3JlTGlzdCkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBiZWZvcmVMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGJlZm9yZUxpc3RbaV1cbiAgICAgICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVtaXR0ZXIuZW1pdChtZXNzYWdlTmFtZSwgLi4uYXJncylcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiDlrprlkJHlj5HpgIHnu5nmn5DkuKrnu4Tku7bljZXkvovnmoTmtojmga9cbiAgICAgICAqIEBwYXJhbSBtZXNzYWdlTmFtZVxuICAgICAgICogQHBhcmFtIGFyZ3NcbiAgICAgICAqL1xuICAgICAgZW1pdFRvICh0YWcsIG1lc3NhZ2VOYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIGNoZWNrTWVzc2FnZU5hbWUobWVzc2FnZU5hbWUpXG5cbiAgICAgICAgcmV0dXJuIGVtaXR0ZXIuZW1pdChgJHttZXNzYWdlTmFtZX0ke0RJUkVDVF9FTUlUX0ZMQUd9JHt0YWd9YCwgLi4uYXJncylcbiAgICAgIH1cblxuICAgICAgb2ZmIChtZXNzYWdlTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY2hlY2tNZXNzYWdlTmFtZShtZXNzYWdlTmFtZSlcbiAgICAgICAgcmV0dXJuIGVtaXR0ZXIub2ZmKG1lc3NhZ2VOYW1lLCBjYWxsYmFjaylcbiAgICAgIH1cblxuICAgICAgcmVtb3ZlTGlzdGVuZXJzICgpIHtcbiAgICAgICAgY29uc3QgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5iaW5kKHRoaXMubGlzdGVuZXJzKVxuXG4gICAgICAgIGZvciAobGV0IG1lc3NhZ2VOYW1lIGluIHRoaXMubGlzdGVuZXJzKSB7XG4gICAgICAgICAgaWYgKGhhc093bihtZXNzYWdlTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMubGlzdGVuZXJzW21lc3NhZ2VOYW1lXSB8fCBbXVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBjYWxsYmFja3NbaV1cbiAgICAgICAgICAgICAgZW1pdHRlci5vZmYobWVzc2FnZU5hbWUsIGNhbGxiYWNrKVxuICAgICAgICAgICAgICBlbWl0dGVyLm9mZihgJHttZXNzYWdlTmFtZX0ke0RJUkVDVF9FTUlUX0ZMQUd9JHt0YWd9YCwgY2FsbGJhY2spXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgbWVzc2FnZU5hbWUgaW4gdGhpcy5vbmNlTGlzdGVuZXJzKSB7XG4gICAgICAgICAgaWYgKGhhc093bihtZXNzYWdlTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMub25jZUxpc3RlbmVyc1ttZXNzYWdlTmFtZV0gfHwgW11cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gY2FsbGJhY2tzW2ldXG4gICAgICAgICAgICAgIGVtaXR0ZXIub2ZmKG1lc3NhZ2VOYW1lLCBjYWxsYmFjaylcbiAgICAgICAgICAgICAgZW1pdHRlci5vZmYoYCR7bWVzc2FnZU5hbWV9JHtESVJFQ1RfRU1JVF9GTEFHfSR7dGFnfWAsIGNhbGxiYWNrKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIOWcqOe7hOS7tumUgOavgeaXtu+8jOm7mOiupOWwhuWug+azqOWGjOeahOS6i+S7tuWFqOmDqOWNuOi9ve+8jOehruS/neS4jeS8mumAoOaIkOWGheWtmOazhOa8j1xuICAgICAgICovXG4gICAgICBkZXN0cm95ICgpIHtcbiAgICAgICAgLy8gc3RlcDEgdW5saXN0ZW4gZXZlbnRzXG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKClcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSB7fVxuXG4gICAgICAgIC8vIHN0ZXAyIHJlbGVhc2UgZnJvbSBjb250ZXh0XG4gICAgICAgIGRlbGV0ZSBzZWxmLl9pbnN0YW5jZU1hcFt0YWddXG4gICAgICAgIGlmIChzdXBlci5kZXN0cm95KSB7XG4gICAgICAgICAgcmV0dXJuIHN1cGVyLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2Nsc01hcFt0YWddID0gZW5oYW5jZWRcblxuICAgIC8qKlxuICAgICAqIGdldCBpbnN0YW5jZSBpbW1lZGlhdGVseVxuICAgICAqIGUuZyBjb25zdCBpbnN0YW5jZSA9IGNvbnRleHQucmVnaXN0cnkodGFnLCBDbHMpKGNvbmZpZylcbiAgICAgKiAqL1xuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaW5pdEluc3RhbmNlKHRhZywgLi4uYXJncylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5a+55a2Y5Zyo55qE5a6e5L6L6L+b6KGMXG4gICAqL1xuICBkZXN0cm95SW5zdGFuY2VzICgpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLl9pbnN0YW5jZU1hcCkuZm9yRWFjaCgodGFnKSA9PiB7XG4gICAgICBpZiAodGhpcy5faW5zdGFuY2VNYXBbdGFnXS5kZXN0cm95KSB7XG4gICAgICAgIHRoaXMuX2luc3RhbmNlTWFwW3RhZ10uZGVzdHJveSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiDnvJbop6PnoIHmtYHnqIvml6DpnIDlhbPms6jkuovku7bnmoTop6Pnu5FcbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuX2VtaXR0ZXIgPSBudWxsXG4gICAgdGhpcy5hbGxvd2VkRXZlbnRzID0gW11cbiAgICB0aGlzLl9jbHNNYXAgPSBudWxsXG4gICAgdGhpcy5fY29udGV4dCA9IG51bGxcbiAgICB0aGlzLl9ob29rcyA9IG51bGxcbiAgICB0aGlzLmRlc3Ryb3lJbnN0YW5jZXMoKVxuICB9XG5cbiAgLyoqXG4gICAqIOWvueS/oemBk+i/m+ihjOaUtuaLolxuICAgKiBAcGFyYW0gbWVzc2FnZU5hbWVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pc01lc3NhZ2VOYW1lVmFsaWQgKG1lc3NhZ2VOYW1lKSB7XG4gICAgaWYgKCF0aGlzLmFsbG93ZWRFdmVudHMuaW5kZXhPZihtZXNzYWdlTmFtZSkgPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHVucmVnaXN0ZXJlZCBtZXNzYWdlIG5hbWU6ICR7bWVzc2FnZU5hbWV9YClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dFxuIiwiaW1wb3J0IEVWRU5UUyBmcm9tICcuLi9jb25zdGFudHMvZXZlbnRzJztcbmNvbnN0IENSWVRPX0VWRU5UUyA9IEVWRU5UUy5DUllUT19FVkVOVFNcbmNsYXNzIENyeXB0byB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHRoaXMuaW5wdXRCdWZmZXIgPSBjb25maWcuaW5wdXRidWZmZXI7XG4gICAgICAgIHRoaXMub3V0cHV0QnVmZmVyID0gY29uZmlnLm91dHB1dGJ1ZmZlcjtcbiAgICAgICAgdGhpcy5rZXkgPSBjb25maWcua2V5O1xuICAgICAgICB0aGlzLml2ID0gY29uZmlnLml2O1xuICAgICAgICB0aGlzLm1ldGhvZCA9IGNvbmZpZy5tZXRob2Q7XG5cbiAgICAgICAgdGhpcy5jcnlwdG8gPSAgd2luZG93LmNyeXB0byB8fCB3aW5kb3cubXNDcnlwdG9cbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLm9uKENSWVRPX0VWRU5UUy5TVEFSVF9ERUNSWVBULCB0aGlzLmRlY3JpcHQuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIFxuICAgIGRlY3JpcHQoKSB7XG4gICAgICAgIGlmKCF0aGlzLmFlc2tleSkge1xuICAgICAgICAgICAgbGV0IHNia2V5ID0gdGhpcy5jcnlwdG8uc3VidGxlLmltcG9ydEtleSgncmF3JywgdGhpcy5rZXkuYnVmZmVyLCB7IG5hbWU6ICdBRVMtQ0JDJyB9LCBmYWxzZSwgWydlbmNyeXB0JywgJ2RlY3J5cHQnXSk7XG4gICAgICAgICAgICBzYmtleS50aGVuKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZXNrZXkgPSBrZXk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWNyaXB0RGF0YSgpO1xuICAgICAgICAgICAgfSkgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlY3JpcHREYXRhKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWNyaXB0RGF0YSgpIHtcbiAgICAgICAgbGV0IGlucHV0YnVmZmVyID0gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSh0aGlzLmlucHV0QnVmZmVyKTtcbiAgICAgICAgbGV0IG91dHB1dGJ1ZmZlciA9IHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UodGhpcy5vdXRwdXRCdWZmZXIpO1xuICAgICAgICBsZXQgZGF0YSA9IGlucHV0YnVmZmVyLnNoaWZ0KCk7XG4gICAgICAgIGlmKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuY3J5cHRvLnN1YnRsZS5kZWNyeXB0KHsgbmFtZTogJ0FFUy1DQkMnLCBpdjogdGhpcy5pdi5idWZmZXIgfSwgdGhpcy5hZXNrZXksIGRhdGEpLnRoZW4ocmVzPT57XG4gICAgICAgICAgICAgICAgb3V0cHV0YnVmZmVyLnB1c2gobmV3IFVpbnQ4QXJyYXkocmVzKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KENSWVRPX0VWRU5UUy5ERUNSWVBURUQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVjcmlwdERhdGEoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENyeXB0bzsiLCJpbXBvcnQgRXZlbnRzIGZyb20gJy4uL2NvbnN0YW50cy9ldmVudHMnXG5jb25zdCBCUk9XU0VSX0VWRU5UUyA9IEV2ZW50cy5CUk9XU0VSX0VWRU5UU1xuXG5sZXQgaGlkZGVuO1xubGV0IHZpc2liaWxpdHlDaGFuZ2U7XG5pZiAodHlwZW9mIGRvY3VtZW50LmhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHsgLy8gT3BlcmEgMTIuMTAgYW5kIEZpcmVmb3ggMTggYW5kIGxhdGVyIHN1cHBvcnRcbiAgaGlkZGVuID0gJ2hpZGRlbic7XG4gIHZpc2liaWxpdHlDaGFuZ2UgPSAndmlzaWJpbGl0eWNoYW5nZSc7XG59IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC5tc0hpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgaGlkZGVuID0gJ21zSGlkZGVuJztcbiAgdmlzaWJpbGl0eUNoYW5nZSA9ICdtc3Zpc2liaWxpdHljaGFuZ2UnO1xufSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQud2Via2l0SGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xuICBoaWRkZW4gPSAnd2Via2l0SGlkZGVuJztcbiAgdmlzaWJpbGl0eUNoYW5nZSA9ICd3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlJztcbn1cblxuY2xhc3MgUGFnZVZpc2liaWxpdHkge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmNhbGxiYWNrcyA9IHtcbiAgICAgIG9uU2hvdzogW10sXG4gICAgICBvbkhpZGRlbjogW11cbiAgICB9XG4gICAgdGhpcy5oYW5kbGVWaXNpYmlsaXR5Q2hhbmdlID0gdGhpcy5oYW5kbGVWaXNpYmlsaXR5Q2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodmlzaWJpbGl0eUNoYW5nZSwgdGhpcy5oYW5kbGVWaXNpYmlsaXR5Q2hhbmdlLCBmYWxzZSk7XG4gIH1cblxuICBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlICgpIHtcbiAgICB0aGlzLmVtaXQoQlJPV1NFUl9FVkVOVFMuVklTSUJJTElUWV9DSEFOR0UsIGRvY3VtZW50W2hpZGRlbl0pXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHZpc2liaWxpdHlDaGFuZ2UsIHRoaXMuaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlVmlzaWJpbGl0eTtcbiIsImNvbnN0IGxlID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYnVmID0gbmV3IEFycmF5QnVmZmVyKDIpO1xuICAobmV3IERhdGFWaWV3KGJ1ZikpLnNldEludDE2KDAsIDI1NiwgdHJ1ZSkgLy8gbGl0dGxlLWVuZGlhbiB3cml0ZVxuICByZXR1cm4gKG5ldyBJbnQxNkFycmF5KGJ1ZikpWzBdID09PSAyNTYgLy8gcGxhdGZvcm0tc3BlYyByZWFkLCBpZiBlcXVhbCB0aGVuIExFXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGxlXG4iLCJjb25zdCBsZSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcigyKTtcbiAgKG5ldyBEYXRhVmlldyhidWYpKS5zZXRJbnQxNigwLCAyNTYsIHRydWUpIC8vIGxpdHRsZS1lbmRpYW4gd3JpdGVcbiAgcmV0dXJuIChuZXcgSW50MTZBcnJheShidWYpKVswXSA9PT0gMjU2IC8vIHBsYXRmb3JtLXNwZWMgcmVhZCwgaWYgZXF1YWwgdGhlbiBMRVxufSkoKVxuXG5jb25zdCBzbmlmZmVyID0ge1xuICBnZXQgZGV2aWNlICgpIHtcbiAgICBsZXQgciA9IHNuaWZmZXIub3M7XG4gICAgcmV0dXJuIHIuaXNQYyA/ICdwYycgOiByLmlzVGFibGV0ID8gJ3RhYmxldCcgOiAnbW9iaWxlJztcbiAgfSxcbiAgZ2V0IGJyb3dzZXIgKCkge1xuICAgIGxldCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgcmVnID0ge1xuICAgICAgaWU6IC9ydjooW1xcZC5dKylcXCkgbGlrZSBnZWNrby8sXG4gICAgICBmaXJmb3g6IC9maXJlZm94XFwvKFtcXGQuXSspLyxcbiAgICAgIGNocm9tZTogL2Nocm9tZVxcLyhbXFxkLl0rKS8sXG4gICAgICBvcGVyYTogL29wZXJhLihbXFxkLl0rKS8sXG4gICAgICBzYWZhcmk6IC92ZXJzaW9uXFwvKFtcXGQuXSspLipzYWZhcmkvXG4gICAgfTtcbiAgICByZXR1cm4gW10uY29uY2F0KE9iamVjdC5rZXlzKHJlZykuZmlsdGVyKGtleSA9PiByZWdba2V5XS50ZXN0KHVhKSkpWzBdO1xuICB9LFxuICBnZXQgb3MgKCkge1xuICAgIGxldCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICBsZXQgaXNXaW5kb3dzUGhvbmUgPSAvKD86V2luZG93cyBQaG9uZSkvLnRlc3QodWEpXG4gICAgbGV0IGlzU3ltYmlhbiA9IC8oPzpTeW1iaWFuT1MpLy50ZXN0KHVhKSB8fCBpc1dpbmRvd3NQaG9uZTtcbiAgICBsZXQgaXNBbmRyb2lkID0gLyg/OkFuZHJvaWQpLy50ZXN0KHVhKTtcbiAgICBsZXQgaXNGaXJlRm94ID0gLyg/OkZpcmVmb3gpLy50ZXN0KHVhKTtcbiAgICBsZXQgaXNUYWJsZXQgPSAvKD86aVBhZHxQbGF5Qm9vaykvLnRlc3QodWEpIHx8IChpc0FuZHJvaWQgJiYgIS8oPzpNb2JpbGUpLy50ZXN0KHVhKSkgfHwgKGlzRmlyZUZveCAmJiAvKD86VGFibGV0KS8udGVzdCh1YSkpO1xuICAgIGxldCBpc1Bob25lID0gLyg/OmlQaG9uZSkvLnRlc3QodWEpICYmICFpc1RhYmxldDtcbiAgICBsZXQgaXNQYyA9ICFpc1Bob25lICYmICFpc0FuZHJvaWQgJiYgIWlzU3ltYmlhbjtcbiAgICByZXR1cm4ge1xuICAgICAgaXNUYWJsZXQsXG4gICAgICBpc1Bob25lLFxuICAgICAgaXNBbmRyb2lkLFxuICAgICAgaXNQYyxcbiAgICAgIGlzU3ltYmlhbixcbiAgICAgIGlzV2luZG93c1Bob25lLFxuICAgICAgaXNGaXJlRm94XG4gICAgfTtcbiAgfSxcblxuICBnZXQgaXNMZSAoKSB7XG4gICAgcmV0dXJuIGxlXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNuaWZmZXI7XG4iLCJjbGFzcyBVVEY4IHtcbiAgc3RhdGljIGRlY29kZSAodWludDhhcnJheSkge1xuICAgIGNvbnN0IG91dCA9IFtdO1xuICAgIGNvbnN0IGlucHV0ID0gdWludDhhcnJheTtcbiAgICBsZXQgaSA9IDA7XG4gICAgY29uc3QgbGVuZ3RoID0gdWludDhhcnJheS5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaSA8IGxlbmd0aCkge1xuICAgICAgaWYgKGlucHV0W2ldIDwgMHg4MCkge1xuICAgICAgICBvdXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGlucHV0W2ldKSk7XG4gICAgICAgICsraTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2UgaWYgKGlucHV0W2ldIDwgMHhDMCkge1xuICAgICAgICAvLyBmYWxsdGhyb3VnaFxuICAgICAgfSBlbHNlIGlmIChpbnB1dFtpXSA8IDB4RTApIHtcbiAgICAgICAgaWYgKFVURjguX2NoZWNrQ29udGludWF0aW9uKGlucHV0LCBpLCAxKSkge1xuICAgICAgICAgIGNvbnN0IHVjczQgPSAoaW5wdXRbaV0gJiAweDFGKSA8PCA2IHwgKGlucHV0W2kgKyAxXSAmIDB4M0YpO1xuICAgICAgICAgIGlmICh1Y3M0ID49IDB4ODApIHtcbiAgICAgICAgICAgIG91dC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUodWNzNCAmIDB4RkZGRikpO1xuICAgICAgICAgICAgaSArPSAyO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlucHV0W2ldIDwgMHhGMCkge1xuICAgICAgICBpZiAoVVRGOC5fY2hlY2tDb250aW51YXRpb24oaW5wdXQsIGksIDIpKSB7XG4gICAgICAgICAgY29uc3QgdWNzNCA9IChpbnB1dFtpXSAmIDB4RikgPDwgMTIgfCAoaW5wdXRbaSArIDFdICYgMHgzRikgPDwgNiB8IGlucHV0W2kgKyAyXSAmIDB4M0Y7XG4gICAgICAgICAgaWYgKHVjczQgPj0gMHg4MDAgJiYgKHVjczQgJiAweEY4MDApICE9PSAweEQ4MDApIHtcbiAgICAgICAgICAgIG91dC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUodWNzNCAmIDB4RkZGRikpO1xuICAgICAgICAgICAgaSArPSAzO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlucHV0W2ldIDwgMHhGOCkge1xuICAgICAgICBpZiAoVVRGOC5fY2hlY2tDb250aW51YXRpb24oaW5wdXQsIGksIDMpKSB7XG4gICAgICAgICAgbGV0IHVjczQgPSAoaW5wdXRbaV0gJiAweDcpIDw8IDE4IHwgKGlucHV0W2kgKyAxXSAmIDB4M0YpIDw8IDEyIHxcbiAgICAgICAgICAgICAgICAgICAgKGlucHV0W2kgKyAyXSAmIDB4M0YpIDw8IDYgfCAoaW5wdXRbaSArIDNdICYgMHgzRik7XG4gICAgICAgICAgaWYgKHVjczQgPiAweDEwMDAwICYmIHVjczQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgdWNzNCAtPSAweDEwMDAwO1xuICAgICAgICAgICAgb3V0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSgodWNzNCA+Pj4gMTApIHwgMHhEODAwKSk7XG4gICAgICAgICAgICBvdXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKCh1Y3M0ICYgMHgzRkYpIHwgMHhEQzAwKSk7XG4gICAgICAgICAgICBpICs9IDQ7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG91dC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoMHhGRkZEKSk7XG4gICAgICArK2k7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dC5qb2luKCcnKTtcbiAgfVxuXG4gIHN0YXRpYyBfY2hlY2tDb250aW51YXRpb24gKHVpbnQ4YXJyYXksIHN0YXJ0LCBjaGVja0xlbmd0aCkge1xuICAgIGxldCBhcnJheSA9IHVpbnQ4YXJyYXk7XG4gICAgaWYgKHN0YXJ0ICsgY2hlY2tMZW5ndGggPCBhcnJheS5sZW5ndGgpIHtcbiAgICAgIHdoaWxlIChjaGVja0xlbmd0aC0tKSB7XG4gICAgICAgIGlmICgoYXJyYXlbKytzdGFydF0gJiAweEMwKSAhPT0gMHg4MCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVVRGODtcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnRzJ1xuY2xhc3MgQXVkaW9DdHggZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZyk7XG4gICAgbGV0IEF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcbiAgICB0aGlzLmNvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgdGhpcy5nYWluTm9kZSA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5nYWluTm9kZS5jb25uZWN0KHRoaXMuY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgdGhpcy5tZXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2FtcGxlcyA9IFtdO1xuICAgIHRoaXMucHJlbG9hZFRpbWUgPSB0aGlzLmNvbmZpZy5wcmVsb2FkVGltZSB8fCAzO1xuICAgIHRoaXMuZHVyYXRpb24gPSAwO1xuXG4gICAgdGhpcy5fY3VycmVudEJ1ZmZlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9uZXh0QnVmZmVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2xhc3RwdHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcHJlRGVjb2RlID0gW107XG4gICAgdGhpcy5fY3VycmVudFRpbWUgPSAwO1xuICAgIHRoaXMuX2RlY29kaW5nID0gZmFsc2U7XG4gICAgLy8g6K6w5b2V5aSW6YOo5Lyg6L6T55qE54q25oCBXG4gICAgdGhpcy5fcGxheWVkID0gZmFsc2U7XG4gIH1cblxuICBnZXQgY3VycmVudFRpbWUgKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50VGltZTtcbiAgfVxuXG4gIGRlY29kZUF1ZGlvIChhdWRpb1RyYWNrKSB7XG4gICAgbGV0IHtzYW1wbGVzfSA9IGF1ZGlvVHJhY2s7XG4gICAgbGV0IGRhdGEgPSBzYW1wbGVzO1xuICAgIGF1ZGlvVHJhY2suc2FtcGxlcyA9IFtdO1xuICAgIHRoaXMuc2V0QXVkaW9EYXRhKGRhdGEpO1xuICB9XG4gIHNldEF1ZGlvRGF0YSAoZGF0YSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgZGF0YVtpXS5wdHMgPSAoZGF0YVtpXS5wdHMgPT09IHVuZGVmaW5lZCkgPyBkYXRhW2ldLmR0cyA6IGRhdGFbaV0ucHRzO1xuICAgICAgdGhpcy5fcHJlRGVjb2RlLnB1c2goZGF0YVtpXSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcmVEZWNvZGUubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHRoaXMuX2xhc3RwdHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9sYXN0cHRzID0gdGhpcy5fcHJlRGVjb2RlWzBdLnB0cztcbiAgICAgIH1cbiAgICAgIGlmICgodGhpcy5fcHJlRGVjb2RlW3RoaXMuX3ByZURlY29kZS5sZW5ndGggLSAxXS5wdHMgLSB0aGlzLl9sYXN0cHRzKSAvIDEwMDAgPiB0aGlzLnByZWxvYWRUaW1lKSB7XG4gICAgICAgIHRoaXMuZGVjb2RlQUFDKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGVjb2RlQUFDICgpIHtcbiAgICBpZiAodGhpcy5fZGVjb2RpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZGVjb2RpbmcgPSB0cnVlO1xuICAgIGxldCBkYXRhID0gdGhpcy5fcHJlRGVjb2RlO1xuICAgIGxldCBzYW1wbGVzID0gW107XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgc2FtcGxlID0gZGF0YS5zaGlmdCgpO1xuICAgIHdoaWxlIChzYW1wbGUpIHtcbiAgICAgIGxldCBzYW1wbGVEYXRhID0gQXVkaW9DdHguZ2V0QUFDRGF0YSh0aGlzLm1ldGEsIHNhbXBsZSlcbiAgICAgIHNhbXBsZXMucHVzaChzYW1wbGVEYXRhKTtcbiAgICAgIHRoaXMuX2xhc3RwdHMgPSBzYW1wbGUucHRzO1xuICAgICAgc2FtcGxlID0gZGF0YS5zaGlmdCgpXG4gICAgfVxuICAgIGxldCBidWZmZXIgPSBBdWRpb0N0eC5jb21iaWxlRGF0YShzYW1wbGVzKTtcbiAgICB0cnkge1xuICAgICAgdGhpcy5jb250ZXh0LmRlY29kZUF1ZGlvRGF0YShidWZmZXIuYnVmZmVyLCBmdW5jdGlvbiAoYnVmZmVyKSB7XG4gICAgICAgIGxldCBhdWRpb1NvdXJjZSA9IF90aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgICAgIGF1ZGlvU291cmNlLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgICAgYXVkaW9Tb3VyY2Uub25lbmRlZCA9IF90aGlzLm9uU291cmNlRW5kZWQuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLnNhbXBsZXMucHVzaCh7XG4gICAgICAgICAgdGltZTogX3RoaXMuZHVyYXRpb24sXG4gICAgICAgICAgZHVyYXRpb246IGJ1ZmZlci5kdXJhdGlvbixcbiAgICAgICAgICBkYXRhOiBhdWRpb1NvdXJjZVxuICAgICAgICB9KVxuXG4gICAgICAgIF90aGlzLmR1cmF0aW9uICs9IGJ1ZmZlci5kdXJhdGlvbjtcblxuICAgICAgICBpZiAoIV90aGlzLl9jdXJyZW50QnVmZmVyKSB7XG4gICAgICAgICAgX3RoaXMuX2N1cnJlbnRCdWZmZXIgPSBfdGhpcy5nZXRUaW1lQnVmZmVyKF90aGlzLmN1cnJlbnRUaW1lKTtcblxuICAgICAgICAgIGlmIChfdGhpcy5fcGxheWVkKSB7XG4gICAgICAgICAgICBfdGhpcy5wbGF5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFfdGhpcy5fbmV4dEJ1ZmZlciAmJiBfdGhpcy5fY3VycmVudEJ1ZmZlcikge1xuICAgICAgICAgIF90aGlzLl9uZXh0QnVmZmVyID0gX3RoaXMuZ2V0VGltZUJ1ZmZlcihfdGhpcy5jdXJyZW50VGltZSArIF90aGlzLl9jdXJyZW50QnVmZmVyLmR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5fZGVjb2RpbmcgPSBmYWxzZTtcblxuICAgICAgICBpZiAoKF90aGlzLl9wcmVEZWNvZGUubGVuZ3RoID4gMCAmJiBfdGhpcy5fcHJlRGVjb2RlW190aGlzLl9wcmVEZWNvZGUubGVuZ3RoIC0gMV0ucHRzIC0gX3RoaXMuX2xhc3RwdHMpIC8gMTAwMCA+PSBfdGhpcy5wcmVsb2FkVGltZSkge1xuICAgICAgICAgIF90aGlzLmRlY29kZUFBQygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgfVxuXG4gIG9uU291cmNlRW5kZWQgKCkge1xuICAgIGlmICghdGhpcy5fbmV4dEJ1ZmZlciB8fCAhdGhpcy5fcGxheWVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBhdWRpb1NvdXJjZSA9IHRoaXMuX25leHRCdWZmZXIuZGF0YTtcbiAgICBhdWRpb1NvdXJjZS5zdGFydCgpO1xuICAgIGF1ZGlvU291cmNlLmNvbm5lY3QodGhpcy5nYWluTm9kZSk7XG4gICAgdGhpcy5fY3VycmVudEJ1ZmZlciA9IHRoaXMuX25leHRCdWZmZXI7XG4gICAgdGhpcy5fY3VycmVudFRpbWUgPSB0aGlzLl9jdXJyZW50QnVmZmVyLnRpbWU7XG4gICAgdGhpcy5fbmV4dEJ1ZmZlciA9IHRoaXMuZ2V0VGltZUJ1ZmZlcih0aGlzLmN1cnJlbnRUaW1lKTtcbiAgICBpZiAodGhpcy5fY3VycmVudEJ1ZmZlcikge1xuICAgICAgdGhpcy5fbmV4dEJ1ZmZlciA9IHRoaXMuZ2V0VGltZUJ1ZmZlcih0aGlzLmN1cnJlbnRUaW1lICsgdGhpcy5fY3VycmVudEJ1ZmZlci5kdXJhdGlvbik7XG4gICAgfVxuICAgIHRoaXMuZW1pdCgnQVVESU9fU09VUkNFX0VORCcpXG4gIH1cblxuICBwbGF5ICgpIHtcbiAgICB0aGlzLl9wbGF5ZWQgPSB0cnVlO1xuICAgIGlmICghdGhpcy5fY3VycmVudEJ1ZmZlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgYXVkaW9Tb3VyY2UgPSB0aGlzLl9jdXJyZW50QnVmZmVyLmRhdGE7XG4gICAgYXVkaW9Tb3VyY2UuY29ubmVjdCh0aGlzLmdhaW5Ob2RlKTtcbiAgICBhdWRpb1NvdXJjZS5zdGFydCgpO1xuICB9XG5cbiAgcGF1c2UgKCkge1xuICAgIGNvbnN0IGF1ZGlvQ3R4ID0gdGhpcy5jb250ZXh0O1xuICAgIGlmIChhdWRpb0N0eC5zdGF0ZSA9PT0gJ3J1bm5pbmcnKSB7XG4gICAgICBhdWRpb0N0eC5zdXNwZW5kKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmNvbnRleHQuY2xvc2UoKTtcbiAgfVxuXG4gIGdldFRpbWVCdWZmZXIgKHRpbWUpIHtcbiAgICBsZXQgcmV0O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zYW1wbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2FtcGxlID0gdGhpcy5zYW1wbGVzW2ldXG4gICAgICBpZiAoc2FtcGxlLnRpbWUgPD0gdGltZSAmJiAoc2FtcGxlLnRpbWUgKyBzYW1wbGUuZHVyYXRpb24pID4gdGltZSkge1xuICAgICAgICByZXQgPSBzYW1wbGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgc2V0QXVkaW9NZXRhRGF0YSAobWV0YSkge1xuICAgIHRoaXMubWV0YSA9IG1ldGE7XG4gIH1cblxuICBzdGF0aWMgZ2V0QUFDRGF0YSAobWV0YSwgc2FtcGxlKSB7XG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KHNhbXBsZS5kYXRhLmJ5dGVMZW5ndGggKyA3KTtcbiAgICBsZXQgYWR0cyA9IEF1ZGlvQ3R4LmdldEFkdHMobWV0YSwgc2FtcGxlLmRhdGEpO1xuICAgIGJ1ZmZlci5zZXQoYWR0cyk7XG4gICAgYnVmZmVyLnNldChzYW1wbGUuZGF0YSwgNyk7XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfVxuXG4gIHN0YXRpYyBjb21iaWxlRGF0YSAoc2FtcGxlcykge1xuICAgIC8vIGdldCBsZW5ndGhcbiAgICBsZXQgbGVuZ3RoID0gMDtcbiAgICBmb3IgKGxldCBpID0gMCwgayA9IHNhbXBsZXMubGVuZ3RoOyBpIDwgazsgaSsrKSB7XG4gICAgICBsZW5ndGggKz0gc2FtcGxlc1tpXS5ieXRlTGVuZ3RoO1xuICAgIH1cblxuICAgIGxldCByZXQgPSBuZXcgVWludDhBcnJheShsZW5ndGgpO1xuICAgIGxldCBvZmZzZXQgPSAwO1xuICAgIC8vIGNvbWJpbGUgZGF0YTtcbiAgICBmb3IgKGxldCBpID0gMCwgayA9IHNhbXBsZXMubGVuZ3RoOyBpIDwgazsgaSsrKSB7XG4gICAgICByZXQuc2V0KHNhbXBsZXNbaV0sIG9mZnNldCk7XG4gICAgICBvZmZzZXQgKz0gc2FtcGxlc1tpXS5ieXRlTGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgc3RhdGljIGdldEFkdHMgKG1ldGEsIGRhdGEpIHtcbiAgICBsZXQgYWR0cyA9IG5ldyBVaW50OEFycmF5KDcpO1xuXG4gICAgLy8g6K6+572u5ZCM5q2l5L2NIDB4ZmZmIDEyYml0XG4gICAgYWR0c1swXSA9IDB4ZmY7XG4gICAgYWR0c1sxXSA9IDB4ZjA7XG5cbiAgICAvLyBPYmplY3QgZGF0YSAo5rKh5LuA5LmI5Lq655SoTVBFRy0y5LqG77yMSExT5ZKMRkxW5Lmf5YWo5pivTVBFRy0077yM6L+Z6YeM55u05o6lMCkgIDFiaXRcbiAgICAvLyBMZXZlbCBhbHdheXMgMDAgMmJpdFxuICAgIC8vIENSQyBhbHdheXMgMSAxYml0XG4gICAgYWR0c1sxXSA9IGFkdHNbMV0gfCAweDAxO1xuXG4gICAgLy8gcHJvZmlsZSAyYml0XG4gICAgYWR0c1syXSA9IDB4YzAgJiAoKG1ldGEub2JqZWN0VHlwZSAtIDEpIDw8IDYpO1xuXG4gICAgLy8gc2FtcGxlRnJlcXVlbmN5SW5kZXhcbiAgICBhZHRzWzJdID0gYWR0c1syXSB8ICgweDNjICYgKG1ldGEuc2FtcGxlUmF0ZUluZGV4IDw8IDIpKVxuXG4gICAgLy8gcHJpdmF0ZSBiaXQgMCAxYml0XG4gICAgLy8gY2hhbmVsIGNvbmZpZ3VyYXRpb24gM2JpdFxuICAgIGFkdHNbMl0gPSBhZHRzWzJdIHwgKDB4MDEgJiBtZXRhLmNoYW5uZWxDb3VudCA+PiAyKTtcbiAgICBhZHRzWzNdID0gMHhjMCAmIChtZXRhLmNoYW5uZWxDb3VudCA8PCA2KTtcblxuICAgIC8vIG9yaWdpbmFsX2NvcHk6IDAgMWJpdFxuICAgIC8vIGhvbWU6IDAgMWJpdFxuXG4gICAgLy8gYWR0c192YXJpYWJsZV9oZWFkZXIoKVxuICAgIC8vIGNvcHlyaWdodGVkX2lkX2JpdCAwIDFiaXRcbiAgICAvLyBjb3B5cmlnaHRlZF9pZF9zdGFydCAwIDFiaXRcblxuICAgIC8vIGFhY19mcmFtZV9sZW5ndGggMTNiaXQ7XG4gICAgbGV0IGFhY2ZyYW1lbGVuZ3RoID0gZGF0YS5ieXRlTGVuZ3RoICsgNztcblxuICAgIGFkdHNbM10gPSBhZHRzWzNdIHwgKDB4MDMgJiBhYWNmcmFtZWxlbmd0aCA+PiAxMSk7XG4gICAgYWR0c1s0XSA9IDB4ZmYgJiAoYWFjZnJhbWVsZW5ndGggPj4gMyk7XG4gICAgYWR0c1s1XSA9IDB4ZTAgJiAoYWFjZnJhbWVsZW5ndGggPDwgNSk7XG5cbiAgICAvLyBhZHRzX2J1ZmZlcl9mdWxsbmVzcyAweDdmZiAxMWJpdFxuICAgIGFkdHNbNV0gPSBhZHRzWzVdIHwgMHgxZlxuICAgIGFkdHNbNl0gPSAweGZjO1xuXG4gICAgLy8gbnVtYmVyX29mX3Jhd19kYXRhX2Jsb2Nrc19pbl9mcmFtZSAwIDJiaXQ7XG4gICAgcmV0dXJuIGFkdHM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXVkaW9DdHg7XG4iLCJpbXBvcnQgVmlkZW9DdHggZnJvbSAnLi92aWRlby1jb250ZXh0JztcbmltcG9ydCBBdWRpb0N0eCBmcm9tICcuL2F1ZGlvLWNvbnRleHQnO1xuaW1wb3J0IHsgZ2V0VGlja2VyIH0gZnJvbSAnLi90aWNrZXInO1xuLyoqXG4gKiDpn7PnlLvlkIzmraXosIPlkozlmahcbiAqL1xuY2xhc3MgQVZSZWNvbmNpbGVyIHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgdGhpcy5hQ3R4ID0gcHJvcHMuYUN0eDtcbiAgICB0aGlzLnZDdHggPSBwcm9wcy52Q3R4O1xuICAgIHRoaXMudmlkZW8gPSBwcm9wcy52aWRlb1xuICAgIHRoaXMudGltZW91dElkID0gbnVsbFxuICAgIHRoaXMuc3RhcnQgPSBudWxsXG4gIH1cblxuICBkb1JlY29uY2lsZSAoKSB7XG4gICAgY29uc3QgdkN1clRpbWUgPSAodGhpcy52aWRlby5jdXJyZW50VGltZSB8fCAwKSAqIDEwMDA7XG4gICAgY29uc3QgYUN1clRpbWUgPSAodGhpcy5hQ3R4LmN1cnJlbnRUaW1lIHx8IDApICogMTAwMDtcblxuICAgIGNvbnN0IGdhcCA9IHZDdXJUaW1lIC0gYUN1clRpbWU7XG4gICAgaWYgKHRoaXMudGltZW91dElkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChnYXAgPiAyMDApIHsgLy8gYXVkaW8gZGVsYXllZCBmb3IgbW9yZSB0aGFuIDEwMG1zXG4gICAgICB0aGlzLnZpZGVvLnN0YXJ0ICs9IGdhcFxuICAgICAgdGhpcy52Q3R4LnBhdXNlKClcbiAgICAgIHRoaXMudGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMudkN0eC5wbGF5KClcbiAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBudWxsXG4gICAgICB9LCBnYXApXG4gICAgfSBlbHNlIGlmIChnYXAgPCAtMTIwKSB7XG4gICAgICB0aGlzLnZDdHguY3VycmVudFRpbWUgPSB0aGlzLnZDdHguY3VycmVudFRpbWUgKyBNYXRoLmFicyhnYXApO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuc3RhcnQgPSBudWxsXG4gICAgdGhpcy5hQ3R4ID0gbnVsbFxuICAgIHRoaXMudkN0eCA9IG51bGxcbiAgfVxufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbmNsYXNzIE1vYmlsZVZpZGVvIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgIHRoaXMuaGFuZGxlQXVkaW9Tb3VyY2VFbmQgPSB0aGlzLmhhbmRsZUF1ZGlvU291cmNlRW5kLmJpbmQodGhpcylcbiAgICB0aGlzLmluaXQoY29uZmlnKVxuICAgIHRoaXMucGxheWVkID0gZmFsc2U7XG4gICAgdGhpcy5fcGF1c2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGluaXQgKGNvbmZpZykge1xuICAgIHRoaXMudkN0eCA9IG5ldyBWaWRlb0N0eCh7XG4gICAgICBjYW52YXM6IHRoaXMuX2NhbnZhc1xuICAgIH0pO1xuICAgIHRoaXMuYUN0eCA9IG5ldyBBdWRpb0N0eChjb25maWcpO1xuICAgIHRoaXMudGlja2VyID0gbmV3IChnZXRUaWNrZXIoKSkoKVxuICAgIHRoaXMucmVjb25jaWxlciA9IG5ldyBBVlJlY29uY2lsZXIoe1xuICAgICAgdkN0eDogdGhpcy52Q3R4LFxuICAgICAgYUN0eDogdGhpcy5hQ3R4LFxuICAgICAgdmlkZW86IHRoaXNcbiAgICB9KVxuICAgIHRoaXMudkN0eC5vbmNhbnBsYXkgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMucGxheWVkKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5fY2FudmFzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NhbnBsYXknKSk7XG4gICAgfVxuXG4gICAgdGhpcy50aWNrZXIuc3RhcnQoKCkgPT4ge1xuICAgICAgLy9cbiAgICAgIGlmICghdGhpcy5zdGFydCkge1xuICAgICAgICB0aGlzLnN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgICAgfVxuICAgICAgdGhpcy5fY3VycmVudFRpbWUgPSBEYXRlLm5vdygpIC0gdGhpcy5zdGFydFxuICAgICAgdGhpcy52Q3R4Ll9vblRpbWVyKHRoaXMuX2N1cnJlbnRUaW1lKVxuICAgIH0pXG5cbiAgICB0aGlzLmFDdHgub24oJ0FVRElPX1NPVVJDRV9FTkQnLCB0aGlzLmhhbmRsZUF1ZGlvU291cmNlRW5kKVxuICB9XG5cbiAgaGFuZGxlQXVkaW9Tb3VyY2VFbmQgKCkge1xuICAgIHRoaXMucmVjb25jaWxlci5kb1JlY29uY2lsZSgpXG4gICAgdGhpcy52Q3R4LmNsZWFuQnVmZmVyKCk7XG4gIH1cblxuICBfY2xlYW5CdWZmZXIgKCkge1xuICAgIHRoaXMudkN0eC5jbGVhbkJ1ZmZlcigpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmFDdHguZGVzdHJveSgpXG4gICAgdGhpcy52Q3R4LmRlc3Ryb3koKVxuICAgIHRoaXMudGlja2VyLnN0b3AoKVxuICAgIHRoaXMuc3RhcnQgPSBudWxsO1xuICAgIHRoaXMucmVjb25jaWxlci5kZXN0cm95KClcbiAgICB0aGlzLmFDdHggPSBudWxsO1xuICAgIHRoaXMudkN0eCA9IG51bGw7XG4gICAgdGhpcy50aWNrZXIgPSBudWxsO1xuICB9XG5cbiAgb25EZW11eENvbXBsZXRlICh2aWRlb1RyYWNrLCBhdWRpb1RyYWNrKSB7XG4gICAgdGhpcy5hQ3R4LmRlY29kZUF1ZGlvKGF1ZGlvVHJhY2spO1xuICAgIHRoaXMudkN0eC5kZWNvZGVWaWRlbyh2aWRlb1RyYWNrKTtcbiAgfVxuXG4gIHNldEF1ZGlvTWV0YSAobWV0YSkge1xuICAgIHRoaXMuYUN0eC5zZXRBdWRpb01ldGFEYXRhKG1ldGEpO1xuICB9XG5cbiAgc2V0VmlkZW9NZXRhIChtZXRhKSB7XG4gICAgdGhpcy52Q3R4LnNldFZpZGVvTWV0YURhdGEobWV0YSk7XG4gIH1cblxuICBnZXQgd2lkdGggKCkge1xuICAgIHJldHVybiB0aGlzLnZDdHgud2lkdGhcbiAgfVxuXG4gIGdldCBoZWlnaHQgKCkge1xuICAgIHJldHVybiB0aGlzLnZDdHguaGVpZ2h0XG4gIH1cblxuICBnZXQgdmlkZW9XaWR0aCAoKSB7XG4gICAgcmV0dXJuIHRoaXMudkN0eC52aWRlb1dpZHRoXG4gIH1cblxuICBnZXQgdmlkZW9IZWlnaHQgKCkge1xuICAgIHJldHVybiB0aGlzLnZDdHgudmlkZW9IZWlnaHRcbiAgfVxuXG4gIGdldCBzcmMgKCkge1xuICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gIH1cblxuICBzZXQgc3JjICh2YWwpIHtcbiAgICAvLyBkbyBub3RoaW5nXG4gIH1cblxuICBnZXQgcmVhZHlTdGF0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMudkN0eC5yZWFkeVN0YXRlXG4gIH1cblxuICBnZXQgc2Vla2luZyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudkN0eC5zZWVraW5nXG4gIH1cblxuICBnZXQgY3VycmVudFRpbWUgKCkge1xuICAgIHJldHVybiB0aGlzLmFDdHguY3VycmVudFRpbWVcbiAgfVxuXG4gIGdldCBkdXJhdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYUN0eC5kdXJhdGlvblxuICB9XG5cbiAgZ2V0IHBhdXNlZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdXNlZFxuICB9XG5cbiAgZ2V0IHBsYXliYWNrUmF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdwbGF5YmFja1JhdGUnKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdwbGF5YmFja1JhdGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMS4wXG4gICAgfVxuICB9XG5cbiAgc2V0IHBsYXliYWNrUmF0ZSAodmFsKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3BsYXliYWNrcmF0ZScsIHZhbCk7XG4gICAgdGhpcy5hQ3R4LnBsYXliYWNrUmF0ZSA9IHZhbDtcbiAgICB0aGlzLnZDdHgucGxheWJhY2tSYXRlID0gdmFsO1xuXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncmF0ZWNoYW5nZScpKVxuICB9XG5cbiAgZ2V0IGVuZGVkICgpIHtcbiAgICByZXR1cm4gdGhpcy5hQ3R4LmVuZGVkO1xuICB9XG5cbiAgZ2V0IGF1dG9wbGF5ICgpIHtcbiAgICBpZiAodGhpcy5oYXNBdHRyaWJ1dGUoJ2F1dG9wbGF5JykpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnYXV0b3BsYXknKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICBwbGF5ICgpIHtcbiAgICBpZiAodGhpcy5wbGF5ZWQpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpXG4gICAgICB0aGlzLmluaXQoKVxuICAgIH1cblxuICAgIHRoaXMudkN0eC5wbGF5KCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnBsYXllZCA9IHRydWU7XG4gICAgICB0aGlzLmFDdHgucGxheSgpXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdwbGF5JykpXG4gICAgICB0aGlzLl9wYXVzZWQgPSBmYWxzZVxuICAgIH0pXG4gIH1cblxuICBwYXVzZSAoKSB7XG4gICAgdGhpcy5fcGF1c2VkID0gdHJ1ZTtcbiAgICB0aGlzLmFDdHgucGF1c2UoKVxuICAgIHRoaXMudkN0eC5wYXVzZSgpXG5cbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdwYXVzZScpKVxuICB9XG5cbiAgZ2V0IHZvbHVtZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYUN0eC52b2x1bWVcbiAgfVxuXG4gIHNldCB2b2x1bWUgKHZvbCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCd2b2x1bWUnLCB2b2wpO1xuICAgIHRoaXMuYUN0eC52b2x1bWUgPSB2b2xcbiAgICB0aGlzLnZDdHgudm9sdW1lID0gdm9sXG4gIH1cblxuICBnZXQgbXV0ZWQgKCkge1xuICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZSgnbXV0ZWQnKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdtdXRlZCcpXG4gICAgfSBlbHNlIGlmICh0aGlzLmdldEF0dHJpYnV0ZSgndm9sdW1lJykpIHtcbiAgICAgIHJldHVybiBOdW1iZXIucGFyc2VJbnQodGhpcy5nZXRBdHRyaWJ1dGUoJ3ZvbHVtZScpKSA9PT0gMFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICBzZXQgbXV0ZWQgKHZhbCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdtdXRlZCAnLCB2YWwpO1xuICAgIGlmICghdmFsKSB7XG4gICAgICB0aGlzLmFDdHgubXV0ZWQgPSBmYWxzZVxuICAgICAgdGhpcy52Q3R4Lm11dGVkID0gZmFsc2VcbiAgICB9XG4gIH1cblxuICBnZXQgZXJyb3IgKCkge1xuICAgIHJldHVybiB0aGlzLnZDdHguZXJyb3I7XG4gIH1cblxuICBnZXQgYnVmZmVyZWQgKCkge1xuICAgIHJldHVybiB0aGlzLnZDdHguYnVmZmVyZWRcbiAgfVxufVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ21vYmlsZS12aWRlbycsIE1vYmlsZVZpZGVvKTtcbiIsImNsYXNzIFNvdXJjZUJ1ZmZlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZyk7XG4gICAgdGhpcy50eXBlID0gdGhpcy5jb25maWcudHlwZTtcbiAgICB0aGlzLmJ1ZmZlciA9IFtdO1xuICAgIHRoaXMuY3VycmVudEdvcCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9sYXN0R2V0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVzaCAoZnJhbWUpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAndmlkZW8nKSB7XG4gICAgICBpZiAoZnJhbWUuaXNLZXlmcmFtZSkge1xuICAgICAgICBsZXQgY3VycmVudEdvcCA9IHtcbiAgICAgICAgICBzYW1wbGVzOiBbXSxcbiAgICAgICAgICBzdGFydDogZnJhbWUuZHRzLFxuICAgICAgICAgIGVuZDogZnJhbWUuZHRzLFxuICAgICAgICAgIG5leHRHb3A6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50R29wKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50R29wLm5leHRHb3AgPSBjdXJyZW50R29wO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudEdvcCA9IGN1cnJlbnRHb3A7XG4gICAgICAgIHRoaXMuYnVmZmVyLnB1c2godGhpcy5jdXJyZW50R29wKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY3VycmVudEdvcCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRHb3Auc2FtcGxlcy5wdXNoKGZyYW1lKTtcblxuICAgICAgICBpZiAoZnJhbWUuZHRzIDwgdGhpcy5jdXJyZW50R29wLnN0YXJ0KSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50R29wLnN0YXJ0ID0gZnJhbWUuZHRzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZyYW1lLmR0cyA+IHRoaXMuY3VycmVudEdvcC5lbmQpIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRHb3AuZW5kID0gZnJhbWUuZHRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0ICh0aW1lKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgaWYgKHRoaXMuYnVmZmVyLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxldCBzYW1wbGUgPSB0aGlzLl9nZXROZXh0KCk7XG4gICAgICAgIHJldHVybiBzYW1wbGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2dldE5leHQgKCkge1xuICAgIGlmICghdGhpcy5fbGFzdEdldCkge1xuICAgICAgbGV0IGdvcCA9IHRoaXMuYnVmZmVyWzBdO1xuICAgICAgaWYgKGdvcC5zYW1wbGVzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2xhc3RHZXQgPSB7XG4gICAgICAgIGdvcCxcbiAgICAgICAgaW5kZXg6IDBcbiAgICAgIH1cbiAgICAgIHJldHVybiBnb3Auc2FtcGxlc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGdvcCA9IHRoaXMuX2xhc3RHZXQuZ29wO1xuICAgICAgbGV0IHNhbXBsZSA9IGdvcC5zYW1wbGVzW3RoaXMuX2xhc3RHZXQuaW5kZXggKyAxXTtcbiAgICAgIGlmIChzYW1wbGUpIHtcbiAgICAgICAgdGhpcy5fbGFzdEdldC5pbmRleCA9IHRoaXMuX2xhc3RHZXQuaW5kZXggKyAxO1xuICAgICAgICByZXR1cm4gc2FtcGxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ29wID0gZ29wLm5leHRHb3A7XG4gICAgICAgIGlmICghZ29wIHx8IGdvcC5zYW1wbGVzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2FtcGxlID0gZ29wLnNhbXBsZXNbMF07XG4gICAgICAgIHRoaXMuX2xhc3RHZXQgPSB7XG4gICAgICAgICAgZ29wLFxuICAgICAgICAgIGluZGV4OiAwXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNhbXBsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmUgKHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAodGhpcy5idWZmZXIubGVuZ3RoIDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBpID0gMDtcbiAgICBsZXQgZ29wID0gdGhpcy5idWZmZXJbMF07XG4gICAgd2hpbGUgKGdvcCkge1xuICAgICAgaWYgKGdvcC5lbmQgPCBlbmQgJiYgZ29wLnN0YXJ0ID49IHN0YXJ0KSB7XG4gICAgICAgIHRoaXMuYnVmZmVyLnNwbGljZShpLCAxKVxuICAgICAgICBnb3AgPSB0aGlzLmJ1ZmZlcltpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgICAgZ29wID0gdGhpcy5idWZmZXJbaV07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvdXJjZUJ1ZmZlcjtcbiIsIi8qKlxuICogQGF1dGhvciBmdXl1aGFvQGJ5dGVkYW5jZS5jb21cbiAqL1xuXG5jbGFzcyBUaWNrZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMgfHwge30sIHtcbiAgICAgIGludGVydmFsOiAxNlxuICAgIH0pXG5cbiAgICB0aGlzLmNhbGxiYWNrcyA9IFtdXG4gIH1cblxuICBzdGFydCguLi5jYWxsYmFja3MpIHtcbiAgICB0aGlzLmNhbGxiYWNrcyA9IGNhbGxiYWNrc1xuICB9XG5cbiAgb25UaWNrICgpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5jYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5jYWxsYmFja3NbaV1cbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH1cblxuICBzZXRJbnRlcnZhbCAoaW50ZXJ2YWwpIHtcbiAgICB0aGlzLm9wdGlvbnMuaW50ZXJ2YWwgPSBpbnRlcnZhbFxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbi8qKlxuICogdGlja2VyIHVzZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAqL1xuY2xhc3MgUmFmVGlja2VyIGV4dGVuZHMgVGlja2VyIHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucHJldiA9IG51bGw7XG4gICAgdGhpcy50aW1lcklkID0gbnVsbFxuICAgIHRoaXMuX3N1YlRpbWVySWQgPSBudWxsXG5cbiAgICB0aGlzLl90aWNrRnVuYyA9IFJhZlRpY2tlci5nZXRUaWNrRnVuYygpXG4gICAgdGhpcy50aWNrID0gdGhpcy50aWNrLmJpbmQodGhpcylcbiAgfVxuXG4gIHN0YXJ0ICguLi5jYWxsYmFja3MpIHtcbiAgICBzdXBlci5zdGFydCguLi5jYWxsYmFja3MpXG4gICAgdGhpcy50aWNrKClcbiAgfVxuXG4gIHRpY2sgKHRpbWVzdGFtcCkge1xuICAgIHRoaXMubmV4dFRpY2soKTtcbiAgICB0aGlzLm9uVGljaygpXG4gIH1cblxuICBuZXh0VGljayAoKSB7XG4gICAgY29uc3QgeyBfdGlja0Z1bmMgfSA9IHRoaXM7XG4gICAgdGhpcy50aW1lcklkID0gX3RpY2tGdW5jKHRoaXMudGljaylcbiAgfVxuXG4gIHN0b3AgKCkge1xuICAgIGlmICh0aGlzLnRpbWVySWQpIHtcbiAgICAgIGNvbnN0IGNhbmNlbEZ1bmMgPSBSYWZUaWNrZXIuZ2V0Q2FuY2VsRnVuYygpXG5cbiAgICAgIGNhbmNlbEZ1bmModGhpcy50aW1lcklkKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRUaWNrRnVuYyAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICB9XG5cbiAgc3RhdGljIGdldENhbmNlbEZ1bmMgKCkge1xuICAgIHJldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lXG4gIH1cblxuICBzdGF0aWMgaXNTdXBwb3J0ZWQgKCkge1xuICAgIHJldHVybiBSYWZUaWNrZXIuZ2V0VGlja0Z1bmMoKSAhPT0gdW5kZWZpbmVkXG4gIH1cbn1cblxuLyoqXG4gKiB1c2Ugc2V0VGltZW91dCBmb3IgYnJvd3NlcnMgd2l0aG91dCByYWYgc3VwcG9ydFxuICovXG5jbGFzcyBUaW1lb3V0VGlja2VyIGV4dGVuZHMgVGlja2VyIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKVxuICAgIHRoaXMudGltZW91dElkID0gbnVsbFxuXG4gIH1cblxuICBzdGFydCAoLi4uY2FsbGJhY2tzKSB7XG4gICAgc3VwZXIubmV4dFRpY2soLi4uY2FsbGJhY2tzKVxuICAgIHRoaXMudGltZW91dElkID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMub25UaWNrKCk7XG4gICAgfSwgdGhpcy5vcHRpb25zLmludGVydmFsIHx8IDE2KVxuICB9XG5cbiAgc3RvcCAoKSB7XG4gICAgaWYgKHRoaXMudGltZW91dElkKSB7XG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVvdXRJZClcbiAgICB9XG4gIH1cblxufVxuXG4vKipcbiAqIOi/lOWbnlRpY2tlcuaehOmAoOWHveaVsFxuICogQHJldHVybnMge1RpY2tlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFRpY2tlciA9ICgpID0+IHtcbiAgaWYgKFJhZlRpY2tlci5pc1N1cHBvcnRlZCgpKSB7XG4gICAgcmV0dXJuIFJhZlRpY2tlclxuICB9IGVsc2Uge1xuICAgIHJldHVybiBUaW1lb3V0VGlja2VyXG4gIH1cbn1cbiIsImltcG9ydCBXb3JrZXJpZnkgZnJvbSAnd2Vid29ya2lmeS13ZWJwYWNrJ1xuaW1wb3J0IFN0cmVhbSBmcm9tICcuLi93cml0ZS9zdHJlYW0nO1xuaW1wb3J0IE5hbHVuaXQgZnJvbSAnLi4vLi4vLi4veGdwbGF5ZXItY29kZWMvc3JjL2gyNjQvbmFsdW5pdCc7XG5pbXBvcnQgWVVWQ2FudmFzIGZyb20gJy4veXV2LWNhbnZhcyc7XG5pbXBvcnQgU291cmNlQnVmZmVyIGZyb20gJy4vc291cmNlYnVmZmVyJztcbmltcG9ydCBUaW1lUmFuZ2VzIGZyb20gJy4uL21vZGVscy9UaW1lUmFuZ2VzJztcblxuY2xhc3MgVmlkZW9DYW52YXMge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcpO1xuICAgIHRoaXMuY2FudmFzID0gdGhpcy5jb25maWcuY2FudmFzID8gdGhpcy5jb25maWcuY2FudmFzIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5zb3VyY2UgPSBuZXcgU291cmNlQnVmZmVyKHt0eXBlOiAndmlkZW8nfSk7XG4gICAgdGhpcy5wcmVsb2FkVGltZSA9IHRoaXMuY29uZmlnLnByZWxvYWRUaW1lIHx8IDM7XG4gICAgdGhpcy5vbmNhbnBsYXkgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5vbkZpcnN0RnJhbWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmVhZHlTdGF0dXMgPSAwO1xuICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICB0aGlzLmNvdW50ID0gMDtcbiAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcbiAgICB0aGlzLmxhc3RQbGF5ZWQgPSAwO1xuXG4gICAgdGhpcy5fZGVjb2RlckluaXRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2F2Y2NwdXNoZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9kZWNvZGVkRnJhbWVzID0ge307XG4gICAgdGhpcy5fbGFzdFNhbXBsZUR0cyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9iYXNlRHRzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2xhc3RSZW5kZXJUaW1lID0gbnVsbFxuICAgIHRoaXMucGxheUZpbmlzaCA9IG51bGxcbiAgfVxuXG4gIHBhdXNlICgpIHtcbiAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gIH1cblxuICBpbml0V2FzbVdvcmtlciAoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICB0aGlzLndhc213b3JrZXIgPSBXb3JrZXJpZnkocmVxdWlyZS5yZXNvbHZlKCcuL3dvcmtlci5qcycpKTtcbiAgICB0aGlzLndhc213b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgbXNnOiAnaW5pdCcsXG4gICAgICBtZXRhOiB0aGlzLm1ldGFcbiAgICB9KVxuICAgIHRoaXMud2FzbXdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbXNnID0+IHtcbiAgICAgIHN3aXRjaCAobXNnLmRhdGEubXNnKSB7XG4gICAgICAgIGNhc2UgJ0RFQ09ERVJfUkVBRFknOlxuICAgICAgICAgIF90aGlzLl9kZWNvZGVySW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnREVDT0RFRCc6XG4gICAgICAgICAgdGhpcy5fb25EZWNvZGVkKG1zZy5kYXRhKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFZpZGVvTWV0YURhdGEgKG1ldGEpIHtcbiAgICB0aGlzLm1ldGEgPSBtZXRhO1xuICAgIGlmICghdGhpcy5fZGVjb2RlckluaXRlZCkge1xuICAgICAgdGhpcy5pbml0V2FzbVdvcmtlcigpO1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMuX2F2Y2NwdXNoZWQgPSB0cnVlO1xuICAgIGxldCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkobWV0YS5zcHMuYnl0ZUxlbmd0aCArIDQpO1xuICAgIGRhdGEuc2V0KFswLCAwLCAwLCAxXSlcbiAgICBkYXRhLnNldChtZXRhLnNwcywgNCk7XG4gICAgdGhpcy53YXNtd29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgIG1zZzogJ2RlY29kZScsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSlcblxuICAgIGRhdGEgPSBuZXcgVWludDhBcnJheShtZXRhLnBwcy5ieXRlTGVuZ3RoICsgNCk7XG4gICAgZGF0YS5zZXQoWzAsIDAsIDAsIDFdKVxuICAgIGRhdGEuc2V0KG1ldGEucHBzLCA0KTtcbiAgICB0aGlzLndhc213b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgbXNnOiAnZGVjb2RlJyxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuXG4gICAgaWYgKCF0aGlzLnl1dkNhbnZhcykge1xuICAgICAgbGV0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe21ldGEsIGNhbnZhczogdGhpcy5jYW52YXN9LCB0aGlzLmNvbmZpZyk7XG4gICAgICB0aGlzLnl1dkNhbnZhcyA9IG5ldyBZVVZDYW52YXMoY29uZmlnKTtcbiAgICB9XG4gICAgdGhpcy5yZWFkeVN0YXR1cyA9IDE7XG4gIH1cblxuICBkZWNvZGVWaWRlbyAodmlkZW9UcmFjaykge1xuICAgIGlmICghdGhpcy5fZGVjb2RlckluaXRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9hdmNjcHVzaGVkKSB7XG4gICAgICB0aGlzLnNldFZpZGVvTWV0YURhdGEodGhpcy5tZXRhKTtcbiAgICB9XG4gICAgbGV0IHsgc2FtcGxlcyB9ID0gdmlkZW9UcmFjaztcbiAgICBsZXQgc2FtcGxlID0gc2FtcGxlcy5zaGlmdCgpO1xuXG4gICAgd2hpbGUgKHNhbXBsZSkge1xuICAgICAgaWYgKCF0aGlzLl9iYXNlRHRzKSB7XG4gICAgICAgIHRoaXMuX2Jhc2VEdHMgPSBzYW1wbGUuZHRzO1xuICAgICAgfVxuICAgICAgdGhpcy5zb3VyY2UucHVzaChzYW1wbGUpO1xuICAgICAgc2FtcGxlID0gc2FtcGxlcy5zaGlmdCgpO1xuICAgIH1cblxuICAgIHRoaXMuX3ByZWxvYWQoKTtcbiAgfVxuXG4gIF9wcmVsb2FkICgpIHtcbiAgICBpZiAoIXRoaXMuX2xhc3RTYW1wbGVEdHMgfHwgdGhpcy5fbGFzdFNhbXBsZUR0cyAtIHRoaXMuX2Jhc2VEdHMgPCB0aGlzLmN1cnJlbnRUaW1lICsgdGhpcy5wcmVsb2FkVGltZSAqIDEwMDApIHtcbiAgICAgIGxldCBzYW1wbGUgPSB0aGlzLnNvdXJjZS5nZXQoKTtcbiAgICAgIGlmIChzYW1wbGUpIHtcbiAgICAgICAgdGhpcy5fbGFzdFNhbXBsZUR0cyA9IHNhbXBsZS5kdHM7XG4gICAgICAgIHRoaXMuX2FuYWx5c2VOYWwoc2FtcGxlKTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKHNhbXBsZSAmJiB0aGlzLl9sYXN0U2FtcGxlRHRzIC0gdGhpcy5fYmFzZUR0cyA8IHRoaXMuY3VycmVudFRpbWUgKyB0aGlzLnByZWxvYWRUaW1lICogMTAwMCkge1xuICAgICAgICBzYW1wbGUgPSB0aGlzLnNvdXJjZS5nZXQoKTtcbiAgICAgICAgaWYgKHNhbXBsZSkge1xuICAgICAgICAgIHRoaXMuX2FuYWx5c2VOYWwoc2FtcGxlKTtcbiAgICAgICAgICB0aGlzLl9sYXN0U2FtcGxlRHRzID0gc2FtcGxlLmR0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9hbmFseXNlTmFsIChzYW1wbGUpIHtcbiAgICBsZXQgbmFscyA9IE5hbHVuaXQuZ2V0QXZjY05hbHMobmV3IFN0cmVhbShzYW1wbGUuZGF0YS5idWZmZXIpKTtcblxuICAgIGxldCBsZW5ndGggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmFscy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG5hbCA9IG5hbHNbaV07XG4gICAgICBsZW5ndGggKz0gbmFsLmJvZHkuYnl0ZUxlbmd0aCArIDQ7XG4gICAgfVxuICAgIGxldCBvZmZzZXQgPSAwO1xuICAgIGxldCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBuYWwgPSBuYWxzW2ldO1xuICAgICAgZGF0YS5zZXQoWzAsIDAsIDAsIDFdLCBvZmZzZXQpO1xuICAgICAgb2Zmc2V0ICs9IDQ7XG4gICAgICBkYXRhLnNldChuZXcgVWludDhBcnJheShuYWwuYm9keSksIG9mZnNldCk7XG4gICAgICBvZmZzZXQgKz0gbmFsLmJvZHkuYnl0ZUxlbmd0aDtcbiAgICB9XG4gICAgdGhpcy53YXNtd29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgIG1zZzogJ2RlY29kZScsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgaW5mbzoge1xuICAgICAgICBkdHM6IHNhbXBsZS5kdHMsXG4gICAgICAgIHB0czogc2FtcGxlLnB0cyA/IHNhbXBsZS5wdHMgOiBzYW1wbGUuZHRzICsgc2FtcGxlLmN0cyxcbiAgICAgICAga2V5OiBzYW1wbGUuaXNLZXlmcmFtZVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBfb25EZWNvZGVkIChkYXRhKSB7XG4gICAgbGV0IHtkdHN9ID0gZGF0YS5pbmZvXG4gICAgY29uc29sZS5sb2coJ2RlY29kZWQgZHRzICcsIGR0cylcbiAgICB0aGlzLl9kZWNvZGVkRnJhbWVzW2R0c10gPSBkYXRhO1xuICB9XG5cbiAgcGxheSAoKSB7XG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMucGxheUZpbmlzaCA9IHJlc29sdmVcbiAgICB9KVxuICB9XG5cbiAgX29uVGltZXIgKGN1cnJlbnRUaW1lKSB7XG4gICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLm1ldGEpIHtcbiAgICAgIGlmICh0aGlzLm1ldGEuZnJhbWVSYXRlICYmIHRoaXMubWV0YS5mcmFtZVJhdGUuZml4ZWQgJiYgdGhpcy5tZXRhLmZyYW1lUmF0ZS5mcHMpIHtcbiAgICAgIH1cbiAgICAgIGxldCBmcmFtZVRpbWVzID0gT2JqZWN0LmtleXModGhpcy5fZGVjb2RlZEZyYW1lcyk7XG4gICAgICBpZiAoZnJhbWVUaW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgICAgbGV0IGZyYW1lVGltZSA9IC0xO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZyYW1lVGltZXMubGVuZ3RoICYmIE51bWJlci5wYXJzZUludChmcmFtZVRpbWVzW2ldKSAtIHRoaXMuX2Jhc2VEdHMgPD0gdGhpcy5jdXJyZW50VGltZTsgaSsrKSB7XG4gICAgICAgICAgZnJhbWVUaW1lID0gTnVtYmVyLnBhcnNlSW50KGZyYW1lVGltZXNbaSAtIDFdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBmcmFtZSA9IHRoaXMuX2RlY29kZWRGcmFtZXNbZnJhbWVUaW1lXTtcbiAgICAgICAgaWYgKGZyYW1lKSB7XG4gICAgICAgICAgaWYgKHRoaXMub25jYW5wbGF5ICYmIHRoaXMucmVhZHlTdGF0dXMgPCA0KSB7XG4gICAgICAgICAgICB0aGlzLm9uY2FucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5yZWFkeVN0YXR1cyA9IDQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUubG9nKGZyYW1lLmluZm8uZHRzLCAnICcsIGN1cnJlbnRUaW1lKVxuICAgICAgICAgIHRoaXMueXV2Q2FudmFzLnJlbmRlcihmcmFtZS5idWZmZXIsIGZyYW1lLndpZHRoLCBmcmFtZS5oZWlnaHQsIGZyYW1lLnlMaW5lc2l6ZSwgZnJhbWUudXZMaW5lc2l6ZSk7XG5cbiAgICAgICAgICBpZiAodGhpcy5wbGF5RmluaXNoKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlGaW5pc2goKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJhbWVUaW1lOyBpKyspIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fZGVjb2RlZEZyYW1lc1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9sYXN0UmVuZGVyVGltZSA9IERhdGUubm93KClcbiAgfVxuXG4gIGNsZWFuQnVmZmVyICgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50VGltZSA+IDEpIHtcbiAgICAgIHRoaXMuc291cmNlLnJlbW92ZSgwLCB0aGlzLmN1cnJlbnRUaW1lIC0gMSk7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy53YXNtd29ya2VyID0gbnVsbDtcbiAgICB0aGlzLmNhbnZhcyA9IG51bGxcbiAgICB0aGlzLnNvdXJjZSA9IG51bGxcbiAgICB0aGlzLl9kZWNvZGVySW5pdGVkID0gZmFsc2U7XG4gIH1cblxuICBnZXQgYnVmZmVyZWQgKCkge1xuICAgIGNvbnN0IHJhbmdlcyA9IFtdXG4gICAgbGV0IGN1cnJlbnRSYW5nZSA9IHtcbiAgICAgIHN0YXJ0OiBudWxsLFxuICAgICAgZW5kOiBudWxsXG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zb3VyY2UuYnVmZmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IHRoaXMuc291cmNlLmJ1ZmZlcltpXTtcbiAgICAgIGlmICghY3VycmVudFJhbmdlLnN0YXJ0KSB7XG4gICAgICAgIGN1cnJlbnRSYW5nZS5zdGFydCA9IHN0YXJ0O1xuICAgICAgfVxuICAgICAgaWYgKCFjdXJyZW50UmFuZ2UuZW5kKSB7XG4gICAgICAgIGN1cnJlbnRSYW5nZS5lbmQgPSBlbmQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGFydCAtIGN1cnJlbnRSYW5nZS5lbmQgPiAxMDAwKSB7XG4gICAgICAgIGN1cnJlbnRSYW5nZS5zdGFydCA9IGN1cnJlbnRSYW5nZS5zdGFydCAvIDEwMDBcbiAgICAgICAgY3VycmVudFJhbmdlLmVuZCA9IGN1cnJlbnRSYW5nZS5lbmQgLyAxMDAwXG4gICAgICAgIGN1cnJlbnRSYW5nZSA9IHtcbiAgICAgICAgICBzdGFydCxcbiAgICAgICAgICBlbmRcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudFJhbmdlLmVuZCA9IGVuZFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjdXJyZW50UmFuZ2Uuc3RhcnQgIT09IG51bGwgJiYgY3VycmVudFJhbmdlLmVuZCAhPT0gbnVsbCkge1xuICAgICAgY3VycmVudFJhbmdlLnN0YXJ0ID0gY3VycmVudFJhbmdlLnN0YXJ0IC8gMTAwMFxuICAgICAgY3VycmVudFJhbmdlLmVuZCA9IGN1cnJlbnRSYW5nZS5lbmQgLyAxMDAwXG4gICAgICByYW5nZXMucHVzaChjdXJyZW50UmFuZ2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBUaW1lUmFuZ2VzKHJhbmdlcylcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVmlkZW9DYW52YXM7XG4iLCJjb25zdCBNQVhfU1RSRUFNX0JVRkZFUl9MRU5HVEggPSAxMDI0ICogMTAyNDtcbnZhciBEZWNvZGVyID0gZnVuY3Rpb24gKHNlbGYpIHtcbiAgdGhpcy5pbml0ZWQgPSBmYWxzZTtcbiAgdGhpcy5zZWxmID0gc2VsZjtcbiAgdGhpcy5tZXRhID0gdGhpcy5zZWxmLm1ldGE7XG4gIHRoaXMuaW5mb2xpc3QgPSB7fTtcbiAgc2VsZi5wYXJfYnJvYWR3YXlPbkJyb2Fkd2F5SW5pdGVkID0gdGhpcy5icm9hZHdheU9uQnJvYWR3YXlJbml0ZWQuYmluZCh0aGlzKTtcbiAgc2VsZi5wYXJfYnJvYWR3YXlPblBpY3R1cmVEZWNvZGVkID0gdGhpcy5icm9hZHdheU9uUGljdHVyZURlY29kZWQuYmluZCh0aGlzKTtcbn1cblxuRGVjb2Rlci5wcm90b3R5cGUudG9VOEFycmF5ID0gZnVuY3Rpb24gKHB0ciwgbGVuZ3RoKSB7XG4gIHJldHVybiB0aGlzLnNlbGYuSEVBUFU4LnN1YmFycmF5KHB0ciwgcHRyICsgbGVuZ3RoKTtcbn1cblxuRGVjb2Rlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgTW9kdWxlLl9icm9hZHdheUluaXQoKTtcbiAgdGhpcy5zdHJlYW1CdWZmZXIgPSB0aGlzLnRvVThBcnJheShNb2R1bGUuX2Jyb2Fkd2F5Q3JlYXRlU3RyZWFtKE1BWF9TVFJFQU1fQlVGRkVSX0xFTkdUSCksIE1BWF9TVFJFQU1fQlVGRkVSX0xFTkdUSCk7XG59XG5cbkRlY29kZXIucHJvdG90eXBlLmJyb2Fkd2F5T25QaWN0dXJlRGVjb2RlZCA9IGZ1bmN0aW9uIChvZmZzZXQsIHdpZHRoLCBoZWlnaHQsIHlMaW5lc2l6ZSwgdXZMaW5lc2l6ZSwgaW5mb2lkKSB7XG4gIGxldCBpbmZvID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5pbmZvbGlzdFtpbmZvaWRdKTtcbiAgbGV0IHlSb3djb3VudCA9IGhlaWdodDtcbiAgbGV0IHV2Um93Y291bnQgPSBoZWlnaHQgLyAyO1xuICBpZiAodGhpcy5tZXRhLmNocm9tYUZvcm1hdCA9PT0gNDQ0IHx8IHRoaXMubWV0YS5jaHJvbWFGb3JtYXQgPT09IDQyMikge1xuICAgIHV2Um93Y291bnQgPSBoZWlnaHQ7XG4gIH1cbiAgbGV0IGRhdGEgPSB0aGlzLnRvVThBcnJheShvZmZzZXQsICh5TGluZXNpemUgKiB5Um93Y291bnQpICsgMiAqICh1dkxpbmVzaXplICogdXZSb3djb3VudCkpO1xuICB0aGlzLmluZm9saXN0W2luZm9pZF0gPSBudWxsO1xuICBsZXQgZGF0ZXRlbXAgPSBuZXcgVWludDhBcnJheShkYXRhLmxlbmd0aCk7XG4gIGRhdGV0ZW1wLnNldChkYXRhKTtcbiAgbGV0IGJ1ZmZlciA9IGRhdGV0ZW1wLmJ1ZmZlcjtcbiAgdGhpcy5zZWxmLnBvc3RNZXNzYWdlKHtcbiAgICBtc2c6ICdERUNPREVEJyxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgeUxpbmVzaXplLFxuICAgIHV2TGluZXNpemUsXG4gICAgaW5mbyxcbiAgICBidWZmZXJcbiAgfSwgW2J1ZmZlcl0pO1xufVxuXG5EZWNvZGVyLnByb3RvdHlwZS5icm9hZHdheU9uQnJvYWR3YXlJbml0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgdGhpcy5zZWxmLnBvc3RNZXNzYWdlKHttc2c6ICdERUNPREVSX1JFQURZJ30pO1xufVxuXG5EZWNvZGVyLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbiAoZGF0YSwgaW5mbykge1xuICBsZXQgdGltZSA9IHBhcnNlSW50KG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbiAgbGV0IGluZm9pZCA9IHRpbWUgLSAoTWF0aC5mbG9vcih0aW1lIC8gMTBlOCkgKiAxMGU4KTtcbiAgdGhpcy5pbmZvbGlzdFtpbmZvaWRdID0gaW5mbztcbiAgdGhpcy5zdHJlYW1CdWZmZXIuc2V0KGRhdGEpO1xuICBNb2R1bGUuX2Jyb2Fkd2F5UGxheVN0cmVhbShkYXRhLmxlbmd0aCwgaW5mb2lkKTtcbn1cblxudmFyIGRlY29kZXI7XG5cbmZ1bmN0aW9uIG9uUG9zdFJ1biAoKSB7XG4gIGRlY29kZXIgPSBuZXcgRGVjb2Rlcih0aGlzKTtcbiAgZGVjb2Rlci5pbml0KCk7XG59XG5cbmZ1bmN0aW9uIGluaXQgKG1ldGEpIHtcbiAgc2VsZi5pbXBvcnRTY3JpcHRzKCdodHRwczovL3NmMS12Y2xvdWRjZG4ucHN0YXRwLmNvbS9vYmovdHRmZS9tZWRpYS9kZWNvZGVyL2gyNjQvZGVjb2Rlci5qcycpO1xuICBhZGRPblBvc3RSdW4ob25Qb3N0UnVuLmJpbmQoc2VsZikpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZWxmKSB7XG4gIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGRhdGEgPSBlLmRhdGE7XG4gICAgaWYgKCFkYXRhLm1zZykge1xuICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7XG4gICAgICAgIG1zZzogJ0VSUk9SOmludmFsaWQgbWVzc2FnZSdcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAoZGF0YS5tc2cpIHtcbiAgICAgICAgY2FzZSAnaW5pdCc6XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgc2VsZi5tZXRhID0gZGF0YS5tZXRhO1xuICAgICAgICAgIGluaXQoKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkZWNvZGUnOlxuICAgICAgICAgIGRlY29kZXIuZGVjb2RlKGRhdGEuZGF0YSwgZGF0YS5pbmZvKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0sIGZhbHNlKTtcbn1cbiIsImNsYXNzIFlVVkNhbnZhcyB7XG4gIGNvbnN0cnVjdG9yIChjb25maWdzKSB7XG4gICAgdGhpcy5jb25maWdzID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlncyk7XG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmNvbmZpZ3MuY2FudmFzO1xuICAgIHRoaXMubWV0YSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29uZmlncy5tZXRhKTtcbiAgICB0aGlzLmNocm9tYSA9IHRoaXMubWV0YS5jaHJvbWFGb3JtYXQ7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLm1ldGEucHJlc2VudEhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gdGhpcy5tZXRhLnByZXNlbnRXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IDEyODA7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gNzIwO1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICB0aGlzLl9pbml0Q29udGV4dEdMKCk7XG4gICAgaWYgKHRoaXMuY29udGV4dEdMKSB7XG4gICAgICB0aGlzLl9pbml0UHJvZ3JhbSgpO1xuICAgICAgdGhpcy5faW5pdEJ1ZmZlcnMoKTtcbiAgICAgIHRoaXMuX2luaXRUZXh0dXJlcygpO1xuICAgIH07XG4gIH1cblxuICBfaW5pdENvbnRleHRHTCAoKSB7XG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIHZhciBnbCA9IG51bGw7XG5cbiAgICB2YXIgdmFsaWRDb250ZXh0TmFtZXMgPSBbJ3dlYmdsJywgJ2V4cGVyaW1lbnRhbC13ZWJnbCcsICdtb3otd2ViZ2wnLCAnd2Via2l0LTNkJ107XG4gICAgdmFyIG5hbWVJbmRleCA9IDA7XG5cbiAgICB3aGlsZSAoIWdsICYmIG5hbWVJbmRleCA8IHZhbGlkQ29udGV4dE5hbWVzLmxlbmd0aCkge1xuICAgICAgdmFyIGNvbnRleHROYW1lID0gdmFsaWRDb250ZXh0TmFtZXNbbmFtZUluZGV4XTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dE9wdGlvbnMpIHtcbiAgICAgICAgICBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KGNvbnRleHROYW1lLCB0aGlzLmNvbnRleHRPcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KGNvbnRleHROYW1lKTtcbiAgICAgICAgfTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZ2wgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWdsIHx8IHR5cGVvZiBnbC5nZXRQYXJhbWV0ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZ2wgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICArK25hbWVJbmRleDtcbiAgICB9O1xuXG4gICAgdGhpcy5jb250ZXh0R0wgPSBnbDtcbiAgfTtcblxuICBfaW5pdFByb2dyYW0gKCkge1xuICAgIHZhciBnbCA9IHRoaXMuY29udGV4dEdMO1xuXG4gICAgLy8gdmVydGV4IHNoYWRlciBpcyB0aGUgc2FtZSBmb3IgYWxsIHR5cGVzXG4gICAgdmFyIHZlcnRleFNoYWRlclNjcmlwdDtcbiAgICB2YXIgZnJhZ21lbnRTaGFkZXJTY3JpcHQ7XG4gICAgdmVydGV4U2hhZGVyU2NyaXB0ID0gW1xuICAgICAgJ2F0dHJpYnV0ZSB2ZWM0IHZlcnRleFBvczsnLFxuICAgICAgJ2F0dHJpYnV0ZSB2ZWM0IHRleHR1cmVQb3M7JyxcbiAgICAgICdhdHRyaWJ1dGUgdmVjNCB1VGV4dHVyZVBvczsnLFxuICAgICAgJ2F0dHJpYnV0ZSB2ZWM0IHZUZXh0dXJlUG9zOycsXG4gICAgICAndmFyeWluZyB2ZWMyIHRleHR1cmVDb29yZDsnLFxuICAgICAgJ3ZhcnlpbmcgdmVjMiB1VGV4dHVyZUNvb3JkOycsXG4gICAgICAndmFyeWluZyB2ZWMyIHZUZXh0dXJlQ29vcmQ7JyxcblxuICAgICAgJ3ZvaWQgbWFpbigpJyxcbiAgICAgICd7JyxcbiAgICAgICcgIGdsX1Bvc2l0aW9uID0gdmVydGV4UG9zOycsXG4gICAgICAnICB0ZXh0dXJlQ29vcmQgPSB0ZXh0dXJlUG9zLnh5OycsXG4gICAgICAnICB1VGV4dHVyZUNvb3JkID0gdVRleHR1cmVQb3MueHk7JyxcbiAgICAgICcgIHZUZXh0dXJlQ29vcmQgPSB2VGV4dHVyZVBvcy54eTsnLFxuICAgICAgJ30nXG4gICAgXS5qb2luKCdcXG4nKTtcblxuICAgIGZyYWdtZW50U2hhZGVyU2NyaXB0ID0gW1xuICAgICAgJ3ByZWNpc2lvbiBoaWdocCBmbG9hdDsnLFxuICAgICAgJ3ZhcnlpbmcgaGlnaHAgdmVjMiB0ZXh0dXJlQ29vcmQ7JyxcbiAgICAgICd2YXJ5aW5nIGhpZ2hwIHZlYzIgdVRleHR1cmVDb29yZDsnLFxuICAgICAgJ3ZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkOycsXG4gICAgICAndW5pZm9ybSBzYW1wbGVyMkQgeVNhbXBsZXI7JyxcbiAgICAgICd1bmlmb3JtIHNhbXBsZXIyRCB1U2FtcGxlcjsnLFxuICAgICAgJ3VuaWZvcm0gc2FtcGxlcjJEIHZTYW1wbGVyOycsXG4gICAgICAndW5pZm9ybSBtYXQ0IFlVVjJSR0I7JyxcblxuICAgICAgJ3ZvaWQgbWFpbih2b2lkKSB7JyxcbiAgICAgICcgIGhpZ2hwIGZsb2F0IHkgPSB0ZXh0dXJlMkQoeVNhbXBsZXIsICB0ZXh0dXJlQ29vcmQpLnI7JyxcbiAgICAgICcgIGhpZ2hwIGZsb2F0IHUgPSB0ZXh0dXJlMkQodVNhbXBsZXIsICB1VGV4dHVyZUNvb3JkKS5yOycsXG4gICAgICAnICBoaWdocCBmbG9hdCB2ID0gdGV4dHVyZTJEKHZTYW1wbGVyLCAgdlRleHR1cmVDb29yZCkucjsnLFxuICAgICAgJyAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh5LCB1LCB2LCAxKSAqIFlVVjJSR0I7JyxcbiAgICAgICd9J1xuICAgIF0uam9pbignXFxuJyk7XG5cbiAgICB2YXIgWVVWMlJHQiA9IFtcbiAgICAgIDEuMTY0MzgsIDAuMDAwMDAsIDEuNTk2MDMsIC0wLjg3MDc5LFxuICAgICAgMS4xNjQzOCwgLTAuMzkxNzYsIC0wLjgxMjk3LCAwLjUyOTU5LFxuICAgICAgMS4xNjQzOCwgMi4wMTcyMywgMC4wMDAwMCwgLTEuMDgxMzksXG4gICAgICAwLCAwLCAwLCAxXG4gICAgXTtcbiAgICB2YXIgdmVydGV4U2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIpO1xuICAgIGdsLnNoYWRlclNvdXJjZSh2ZXJ0ZXhTaGFkZXIsIHZlcnRleFNoYWRlclNjcmlwdCk7XG4gICAgZ2wuY29tcGlsZVNoYWRlcih2ZXJ0ZXhTaGFkZXIpO1xuICAgIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHZlcnRleFNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgICBjb25zb2xlLmxvZygnVmVydGV4IHNoYWRlciBmYWlsZWQgdG8gY29tcGlsZTogJyArIGdsLmdldFNoYWRlckluZm9Mb2codmVydGV4U2hhZGVyKSk7XG4gICAgfVxuXG4gICAgdmFyIGZyYWdtZW50U2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUik7XG4gICAgZ2wuc2hhZGVyU291cmNlKGZyYWdtZW50U2hhZGVyLCBmcmFnbWVudFNoYWRlclNjcmlwdCk7XG4gICAgZ2wuY29tcGlsZVNoYWRlcihmcmFnbWVudFNoYWRlcik7XG4gICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoZnJhZ21lbnRTaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgICAgY29uc29sZS5sb2coJ0ZyYWdtZW50IHNoYWRlciBmYWlsZWQgdG8gY29tcGlsZTogJyArIGdsLmdldFNoYWRlckluZm9Mb2coZnJhZ21lbnRTaGFkZXIpKTtcbiAgICB9XG5cbiAgICB2YXIgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuICAgIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQcm9ncmFtIGZhaWxlZCB0byBjb21waWxlOiAnICsgZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkpO1xuICAgIH1cblxuICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB2YXIgWVVWMlJHQlJlZiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAnWVVWMlJHQicpO1xuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoWVVWMlJHQlJlZiwgZmFsc2UsIFlVVjJSR0IpO1xuXG4gICAgdGhpcy5zaGFkZXJQcm9ncmFtID0gcHJvZ3JhbTtcbiAgfVxuXG4gIF9pbml0QnVmZmVycyAoKSB7XG4gICAgdmFyIGdsID0gdGhpcy5jb250ZXh0R0w7XG4gICAgdmFyIHByb2dyYW0gPSB0aGlzLnNoYWRlclByb2dyYW07XG5cbiAgICB2YXIgdmVydGV4UG9zQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHZlcnRleFBvc0J1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoWzEsIDEsIC0xLCAxLCAxLCAtMSwgLTEsIC0xXSksIGdsLlNUQVRJQ19EUkFXKTtcblxuICAgIHZhciB2ZXJ0ZXhQb3NSZWYgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCAndmVydGV4UG9zJyk7XG4gICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodmVydGV4UG9zUmVmKTtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHZlcnRleFBvc1JlZiwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcblxuICAgIHZhciB0ZXh0dXJlUG9zQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRleHR1cmVQb3NCdWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KFsxLCAwLCAwLCAwLCAxLCAxLCAwLCAxXSksIGdsLlNUQVRJQ19EUkFXKTtcblxuICAgIHZhciB0ZXh0dXJlUG9zUmVmID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgJ3RleHR1cmVQb3MnKTtcbiAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0ZXh0dXJlUG9zUmVmKTtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRleHR1cmVQb3NSZWYsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG5cbiAgICB0aGlzLnRleHR1cmVQb3NCdWZmZXIgPSB0ZXh0dXJlUG9zQnVmZmVyO1xuXG4gICAgdmFyIHVUZXh0dXJlUG9zQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHVUZXh0dXJlUG9zQnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShbMSwgMCwgMCwgMCwgMSwgMSwgMCwgMV0pLCBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgICB2YXIgdVRleHR1cmVQb3NSZWYgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCAndVRleHR1cmVQb3MnKTtcbiAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh1VGV4dHVyZVBvc1JlZik7XG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih1VGV4dHVyZVBvc1JlZiwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcblxuICAgIHRoaXMudVRleHR1cmVQb3NCdWZmZXIgPSB1VGV4dHVyZVBvc0J1ZmZlcjtcblxuICAgIHZhciB2VGV4dHVyZVBvc0J1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB2VGV4dHVyZVBvc0J1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoWzEsIDAsIDAsIDAsIDEsIDEsIDAsIDFdKSwgZ2wuU1RBVElDX0RSQVcpO1xuXG4gICAgdmFyIHZUZXh0dXJlUG9zUmVmID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgJ3ZUZXh0dXJlUG9zJyk7XG4gICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodlRleHR1cmVQb3NSZWYpO1xuICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodlRleHR1cmVQb3NSZWYsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG5cbiAgICB0aGlzLnZUZXh0dXJlUG9zQnVmZmVyID0gdlRleHR1cmVQb3NCdWZmZXI7XG4gIH07XG5cbiAgX2luaXRUZXh0dXJlcyAoKSB7XG4gICAgdmFyIGdsID0gdGhpcy5jb250ZXh0R0w7XG4gICAgdmFyIHByb2dyYW0gPSB0aGlzLnNoYWRlclByb2dyYW07XG4gICAgdmFyIHlUZXh0dXJlUmVmID0gdGhpcy5faW5pdFRleHR1cmUoKTtcbiAgICB2YXIgeVNhbXBsZXJSZWYgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3lTYW1wbGVyJyk7XG4gICAgZ2wudW5pZm9ybTFpKHlTYW1wbGVyUmVmLCAwKTtcbiAgICB0aGlzLnlUZXh0dXJlUmVmID0geVRleHR1cmVSZWY7XG5cbiAgICB2YXIgdVRleHR1cmVSZWYgPSB0aGlzLl9pbml0VGV4dHVyZSgpO1xuICAgIHZhciB1U2FtcGxlclJlZiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAndVNhbXBsZXInKTtcbiAgICBnbC51bmlmb3JtMWkodVNhbXBsZXJSZWYsIDEpO1xuICAgIHRoaXMudVRleHR1cmVSZWYgPSB1VGV4dHVyZVJlZjtcblxuICAgIHZhciB2VGV4dHVyZVJlZiA9IHRoaXMuX2luaXRUZXh0dXJlKCk7XG4gICAgdmFyIHZTYW1wbGVyUmVmID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICd2U2FtcGxlcicpO1xuICAgIGdsLnVuaWZvcm0xaSh2U2FtcGxlclJlZiwgMik7XG4gICAgdGhpcy52VGV4dHVyZVJlZiA9IHZUZXh0dXJlUmVmO1xuICB9XG5cbiAgX2luaXRUZXh0dXJlICgpIHtcbiAgICB2YXIgZ2wgPSB0aGlzLmNvbnRleHRHTDtcblxuICAgIHZhciB0ZXh0dXJlUmVmID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmVSZWYpO1xuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XG5cbiAgICByZXR1cm4gdGV4dHVyZVJlZjtcbiAgfVxuXG4gIF9kcmF3UGljdHVyZUdMIChkYXRhLCB3aWR0aCwgaGVpZ2h0LCB5TGluZXNpemUsIHV2TGluZXNpemUpIHtcbiAgICB2YXIgeWxlbiA9IHlMaW5lc2l6ZSAqIGhlaWdodDtcbiAgICB2YXIgdXZsZW4gPSB1dkxpbmVzaXplICogaGVpZ2h0IC8gMjtcbiAgICBpZiAodGhpcy5jaHJvbWEgPT09IDQ0NCB8fCB0aGlzLmNocm9tYSA9PT0gNDIyKSB7XG4gICAgICB1dmxlbiAqPSAyO1xuICAgIH1cbiAgICBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG4gICAgbGV0IHJlbmRlckRhdGEgPSB7XG4gICAgICB5RGF0YTogZGF0YS5zdWJhcnJheSgwLCB5bGVuKSxcbiAgICAgIHVEYXRhOiBkYXRhLnN1YmFycmF5KHlsZW4sIHlsZW4gKyB1dmxlbiksXG4gICAgICB2RGF0YTogZGF0YS5zdWJhcnJheSh5bGVuICsgdXZsZW4sIHlsZW4gKyB1dmxlbiArIHV2bGVuKVxuICAgIH1cbiAgICB0aGlzLl9kcmF3UGljdHVyZUdMNDIwKHJlbmRlckRhdGEsIHdpZHRoLCBoZWlnaHQsIHlMaW5lc2l6ZSwgdXZMaW5lc2l6ZSk7XG4gIH1cblxuICBfZHJhd1BpY3R1cmVHTDQyMCAoZGF0YSwgd2lkdGgsIGhlaWdodCwgeUxpbmVzaXplLCB1dkxpbmVzaXplKSB7XG4gICAgdmFyIGdsID0gdGhpcy5jb250ZXh0R0w7XG4gICAgdmFyIHRleHR1cmVQb3NCdWZmZXIgPSB0aGlzLnRleHR1cmVQb3NCdWZmZXI7XG4gICAgdmFyIHVUZXh0dXJlUG9zQnVmZmVyID0gdGhpcy51VGV4dHVyZVBvc0J1ZmZlcjtcbiAgICB2YXIgdlRleHR1cmVQb3NCdWZmZXIgPSB0aGlzLnZUZXh0dXJlUG9zQnVmZmVyO1xuXG4gICAgdmFyIHlUZXh0dXJlUmVmID0gdGhpcy55VGV4dHVyZVJlZjtcbiAgICB2YXIgdVRleHR1cmVSZWYgPSB0aGlzLnVUZXh0dXJlUmVmO1xuICAgIHZhciB2VGV4dHVyZVJlZiA9IHRoaXMudlRleHR1cmVSZWY7XG5cbiAgICB2YXIgeURhdGEgPSBkYXRhLnlEYXRhO1xuICAgIHZhciB1RGF0YSA9IGRhdGEudURhdGE7XG4gICAgdmFyIHZEYXRhID0gZGF0YS52RGF0YTtcblxuICAgIHZhciB5RGF0YVBlclJvdyA9IHlMaW5lc2l6ZTtcbiAgICB2YXIgeVJvd0NudCA9IGhlaWdodDtcblxuICAgIHZhciB1RGF0YVBlclJvdyA9IHdpZHRoIC8gMjtcbiAgICB2YXIgdVJvd0NudCA9IGhlaWdodCAvIDI7XG5cbiAgICBpZiAodGhpcy5jaHJvbWEgPT09IDQyMiB8fCB0aGlzLmNocm9tYSA9PT0gNDQ0KSB7XG4gICAgICB1Um93Q250ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBcbiAgICB2YXIgdkRhdGFQZXJSb3cgPSB1dkxpbmVzaXplO1xuICAgIHZhciB2Um93Q250ID0gdVJvd0NudDtcbiAgICBcbiAgICBsZXQgcmF0aW93ID0gdGhpcy5jYW52YXMud2lkdGggLyB0aGlzLndpZHRoO1xuICAgIGxldCByYXRpb2ggPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyB0aGlzLmhlaWdodDtcbiAgICBsZXQgbGVmdCA9IDA7XG4gICAgbGV0IHRvcCA9IDA7XG4gICAgbGV0IHcgPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICBsZXQgaCA9IHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICBpZiAocmF0aW93IDwgcmF0aW9oKSB7XG4gICAgICBoID0gKHRoaXMuaGVpZ2h0ICogdGhpcy5jYW52YXMud2lkdGggLyB0aGlzLndpZHRoKTtcbiAgICAgIHRvcCA9IHBhcnNlSW50KCh0aGlzLmNhbnZhcy5oZWlnaHQgLSAodGhpcy5oZWlnaHQgKiB0aGlzLmNhbnZhcy53aWR0aCAvIHRoaXMud2lkdGgpKSAvIDIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3ID0gKHRoaXMud2lkdGggKiB0aGlzLmNhbnZhcy5oZWlnaHQgLyB0aGlzLmhlaWdodCk7XG4gICAgICBsZWZ0ID0gcGFyc2VJbnQoKHRoaXMuY2FudmFzLndpZHRoIC0gKHRoaXMud2lkdGggKiB0aGlzLmNhbnZhcy5oZWlnaHQgLyB0aGlzLmhlaWdodCkpIC8gMik7XG4gICAgfVxuICAgIGdsLnZpZXdwb3J0KGxlZnQsIHRvcCwgdywgaCk7XG5cbiAgICB2YXIgdGV4dHVyZVBvc1ZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkoWzEsIDAsIDAsIDAsIDEsIDEsIDAsIDFdKTtcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGV4dHVyZVBvc0J1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIHRleHR1cmVQb3NWYWx1ZXMsIGdsLkRZTkFNSUNfRFJBVyk7XG5cbiAgICB2YXIgdVRleHR1cmVQb3NWYWx1ZXMgPSBuZXcgRmxvYXQzMkFycmF5KFsxLCAwLCAwLCAwLCAxLCAxLCAwLCAxXSk7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHVUZXh0dXJlUG9zQnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgdVRleHR1cmVQb3NWYWx1ZXMsIGdsLkRZTkFNSUNfRFJBVyk7XG5cbiAgICB2YXIgdlRleHR1cmVQb3NWYWx1ZXMgPSBuZXcgRmxvYXQzMkFycmF5KFsxLCAwLCAwLCAwLCAxLCAxLCAwLCAxXSk7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHZUZXh0dXJlUG9zQnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgdlRleHR1cmVQb3NWYWx1ZXMsIGdsLkRZTkFNSUNfRFJBVyk7XG4gICAgXG4gICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCk7XG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgeVRleHR1cmVSZWYpO1xuICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuTFVNSU5BTkNFLCB5RGF0YVBlclJvdywgeVJvd0NudCwgMCwgZ2wuTFVNSU5BTkNFLCBnbC5VTlNJR05FRF9CWVRFLCB5RGF0YSk7XG5cbiAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUxKTtcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB1VGV4dHVyZVJlZik7XG4gICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5MVU1JTkFOQ0UsIHVEYXRhUGVyUm93LCB1Um93Q250LCAwLCBnbC5MVU1JTkFOQ0UsIGdsLlVOU0lHTkVEX0JZVEUsIHVEYXRhKTtcblxuICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTIpO1xuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHZUZXh0dXJlUmVmKTtcbiAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLkxVTUlOQU5DRSwgdkRhdGFQZXJSb3csIHZSb3dDbnQsIDAsIGdsLkxVTUlOQU5DRSwgZ2wuVU5TSUdORURfQllURSwgdkRhdGEpO1xuXG4gICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRV9TVFJJUCwgMCwgNCk7XG4gIH1cblxuICBfZHJhd1BpY3R1cmVSR0IgKGRhdGEpIHtcblxuICB9XG5cbiAgcmVuZGVyIChkYXRhLCB3aWR0aCwgaGVpZ2h0LCB5TGluZXNpemUsIHV2TGluZXNpemUpIHtcbiAgICB2YXIgZ2wgPSB0aGlzLmNvbnRleHRHTDtcbiAgICBpZiAoZ2wpIHtcbiAgICAgIHRoaXMuX2RyYXdQaWN0dXJlR0woZGF0YSwgd2lkdGgsIGhlaWdodCwgeUxpbmVzaXplLCB1dkxpbmVzaXplKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZHJhd1BpY3R1cmVSR0IoZGF0YSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFlVVkNhbnZhcztcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVSYW5nZXMge1xuICBjb25zdHJ1Y3RvciAocmFuZ2VzKSB7XG4gICAgdGhpcy5yYW5nZXMgPSByYW5nZXMgfHwgW107XG4gIH1cblxuICBzdGFydCAoaWR4KSB7XG4gICAgcmV0dXJuIHRoaXMucmFuZ2VzW2lkeF0gPyB0aGlzLnJhbmdlc1tpZHhdLnN0YXJ0IDogMFxuICB9XG5cbiAgZW5kIChpZHgpIHtcbiAgICByZXR1cm4gdGhpcy5yYW5nZXNbaWR4XSA/IHRoaXMucmFuZ2VzW2lkeF0uZW5kIDogMFxuICB9XG5cbiAgYWRkIChyYW5nZSkge1xuICAgIHRoaXMucmFuZ2VzLnB1c2gocmFuZ2UpXG4gIH1cblxuICBnZXQgbGVuZ3RoICgpIHtcbiAgICByZXR1cm4gdGhpcy5yYW5nZXMubGVuZ3RoXG4gIH1cbn1cbiIsImNvbnN0IGlzT2JqZWN0RmlsbGVkID0gKG9iaikgPT4ge1xuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBpZiAob2JqW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhSW5mbyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLm1pbWVUeXBlID0gbnVsbFxuICAgIHRoaXMuZHVyYXRpb24gPSBudWxsXG5cbiAgICB0aGlzLmhhc1ZpZGVvID0gbnVsbFxuICAgIHRoaXMudmlkZW8gPSB7XG4gICAgICBjb2RlYzogbnVsbCxcbiAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgaGVpZ2h0OiBudWxsLFxuICAgICAgcHJvZmlsZTogbnVsbCxcbiAgICAgIGxldmVsOiBudWxsLFxuICAgICAgZnJhbWVSYXRlOiB7XG4gICAgICAgIGZpeGVkOiB0cnVlLFxuICAgICAgICBmcHM6IDI1LFxuICAgICAgICBmcHNfbnVtOiAyNTAwMCxcbiAgICAgICAgZnBzX2RlbjogMTAwMFxuICAgICAgfSxcbiAgICAgIGNocm9tYUZvcm1hdDogbnVsbCxcbiAgICAgIHBhclJhdGlvOiB7XG4gICAgICAgIHdpZHRoOiAxLFxuICAgICAgICBoZWlnaHQ6IDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmhhc0F1ZGlvID0gbnVsbFxuXG4gICAgdGhpcy5hdWRpbyA9IHtcbiAgICAgIGNvZGVjOiBudWxsLFxuICAgICAgc2FtcGxlUmF0ZTogbnVsbCxcbiAgICAgIHNhbXBsZVJhdGVJbmRleDogbnVsbCxcbiAgICAgIGNoYW5uZWxDb3VudDogbnVsbFxuICAgIH1cbiAgfVxuXG4gIGlzQ29tcGxldGUgKCkge1xuICAgIHJldHVybiBNZWRpYUluZm8uaXNCYXNlSW5mb1JlYWR5KHRoaXMpICYmIE1lZGlhSW5mby5pc1ZpZGVvUmVhZHkodGhpcykgJiYgTWVkaWFJbmZvLmlzQXVkaW9SZWFkeSh0aGlzKVxuICB9XG5cbiAgc3RhdGljIGlzQmFzZUluZm9SZWFkeSAobWVkaWFJbmZvKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0RmlsbGVkKG1lZGlhSW5mbylcbiAgfVxuXG4gIHN0YXRpYyBpc1ZpZGVvUmVhZHkgKG1lZGlhSW5mbykge1xuICAgIGlmICghbWVkaWFJbmZvLmhhc1ZpZGVvKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiBpc09iamVjdEZpbGxlZChtZWRpYUluZm8udmlkZW8pXG4gIH1cblxuICBzdGF0aWMgaXNBdWRpb1JlYWR5IChtZWRpYUluZm8pIHtcbiAgICBpZiAoIW1lZGlhSW5mby5oYXNBdWRpbykge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gaXNPYmplY3RGaWxsZWQobWVkaWFJbmZvLnZpZGVvKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYVNhbXBsZSB7XG4gIGNvbnN0cnVjdG9yIChpbmZvKSB7XG4gICAgbGV0IF9kZWZhdWx0ID0gTWVkaWFTYW1wbGUuZ2V0RGVmYXVsdEluZigpXG5cbiAgICBpZiAoIWluZm8gfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGluZm8pICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgICAgcmV0dXJuIF9kZWZhdWx0XG4gICAgfVxuICAgIGxldCBzYW1wbGUgPSBPYmplY3QuYXNzaWduKHt9LCBfZGVmYXVsdCwgaW5mbylcblxuICAgIE9iamVjdC5lbnRyaWVzKHNhbXBsZSkuZm9yRWFjaCgoW2ssIHZdKSA9PiB7XG4gICAgICB0aGlzW2tdID0gdlxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgZ2V0RGVmYXVsdEluZiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGR0czogbnVsbCxcbiAgICAgIHB0czogbnVsbCxcbiAgICAgIGR1cmF0aW9uOiBudWxsLFxuICAgICAgcG9zaXRpb246IG51bGwsXG4gICAgICBpc1JBUDogZmFsc2UsIC8vIGlzIFJhbmRvbSBhY2Nlc3MgcG9pbnRcbiAgICAgIG9yaWdpbkR0czogbnVsbFxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFTZWdtZW50TGlzdCB7XG5cbiAgICBjb25zdHJ1Y3RvciAodHlwZSkge1xuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5fbGlzdCA9IFtdO1xuICAgICAgICB0aGlzLl9sYXN0QXBwZW5kTG9jYXRpb24gPSAtMTsgLy8gY2FjaGVkIGxhc3QgaW5zZXJ0IGxvY2F0aW9uXG4gICAgfVxuXG4gICAgZ2V0IHR5cGUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgICB9XG5cbiAgICBnZXQgbGVuZ3RoICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3QubGVuZ3RoO1xuICAgIH1cblxuICAgIGlzRW1wdHkgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGlzdC5sZW5ndGggPT09IDA7XG4gICAgfVxuXG4gICAgY2xlYXIgKCkge1xuICAgICAgICB0aGlzLl9saXN0ID0gW107XG4gICAgICAgIHRoaXMuX2xhc3RBcHBlbmRMb2NhdGlvbiA9IC0xO1xuICAgIH1cblxuICAgIF9zZWFyY2hOZWFyZXN0U2VnbWVudEJlZm9yZSAoYmVnaW5EdHMpIHtcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLl9saXN0O1xuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAtMjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGFzdCA9IGxpc3QubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IG1pZCA9IDA7XG4gICAgICAgIGxldCBsYm91bmQgPSAwO1xuICAgICAgICBsZXQgdWJvdW5kID0gbGFzdDtcblxuICAgICAgICBsZXQgaWR4ID0gMDtcblxuICAgICAgICBpZiAoYmVnaW5EdHMgPCBsaXN0WzBdLm9yaWdpbkR0cykge1xuICAgICAgICAgICAgaWR4ID0gLTE7XG4gICAgICAgICAgICByZXR1cm4gaWR4O1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGxib3VuZCA8PSB1Ym91bmQpIHtcbiAgICAgICAgICAgIG1pZCA9IGxib3VuZCArIE1hdGguZmxvb3IoKHVib3VuZCAtIGxib3VuZCkgLyAyKTtcbiAgICAgICAgICAgIGlmIChtaWQgPT09IGxhc3QgfHwgKGJlZ2luRHRzID4gbGlzdFttaWRdLmxhc3RTYW1wbGUub3JpZ2luRHRzXG4gICAgICAgICAgICAgICAgICAgICYmIChiZWdpbkR0cyA8IGxpc3RbbWlkICsgMV0ub3JpZ2luRHRzKSkpIHtcbiAgICAgICAgICAgICAgICBpZHggPSBtaWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxpc3RbbWlkXS5vcmlnaW5EdHMgPCBiZWdpbkR0cykge1xuICAgICAgICAgICAgICAgIGxib3VuZCA9IG1pZCArIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVib3VuZCA9IG1pZCAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkeDtcbiAgICB9XG5cbiAgICBfc2VhcmNoTmVhcmVzdFNlZ21lbnRBZnRlciAoYmVnaW5EdHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlYXJjaE5lYXJlc3RTZWdtZW50QmVmb3JlKGJlZ2luRHRzKSArIDE7XG4gICAgfVxuXG4gICAgYXBwZW5kIChzZWdtZW50KSB7XG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5fbGlzdDtcbiAgICAgICAgbGV0IGxhc3RBcHBlbmRJZHggPSB0aGlzLl9sYXN0QXBwZW5kTG9jYXRpb247XG4gICAgICAgIGxldCBpbnNlcnRJZHggPSAwO1xuXG4gICAgICAgIGlmIChsYXN0QXBwZW5kSWR4ICE9PSAtMSAmJiBsYXN0QXBwZW5kSWR4IDwgbGlzdC5sZW5ndGhcbiAgICAgICAgICAgICYmIHNlZ21lbnQub3JpZ2luU3RhcnREdHMgPj0gbGlzdFtsYXN0QXBwZW5kSWR4XS5sYXN0U2FtcGxlLm9yaWdpbkR0c1xuICAgICAgICAgICAgJiYgKChsYXN0QXBwZW5kSWR4ID09PSBsaXN0Lmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgfHwgKGxhc3RBcHBlbmRJZHggPCBsaXN0Lmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgJiYgc2VnbWVudC5vcmlnaW5TdGFydER0cyA8IGxpc3RbbGFzdEFwcGVuZElkeCArIDFdLm9yaWdpblN0YXJ0RHRzKSkpIHtcbiAgICAgICAgICAgIGluc2VydElkeCA9IGxhc3RBcHBlbmRJZHggKyAxOyAvLyB1c2UgY2FjaGVkIGxvY2F0aW9uIGlkeFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGluc2VydElkeCA9IHRoaXMuX3NlYXJjaE5lYXJlc3RTZWdtZW50QmVmb3JlKHNlZ21lbnQub3JpZ2luU3RhcnREdHMpICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2xhc3RBcHBlbmRMb2NhdGlvbiA9IGluc2VydElkeDtcbiAgICAgICAgdGhpcy5fbGlzdC5zcGxpY2UoaW5zZXJ0SWR4LCAwLCBzZWdtZW50KTtcbiAgICB9XG5cbiAgICBnZXRMYXN0U2VnbWVudEJlZm9yZSAoYmVnaW5EdHMpIHtcbiAgICAgICAgbGV0IGlkeCA9IHRoaXMuX3NlYXJjaE5lYXJlc3RTZWdtZW50QmVmb3JlKGJlZ2luRHRzKTtcbiAgICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGlzdFtpZHhdO1xuICAgICAgICB9IGVsc2UgeyAvLyAtMVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMYXN0U2FtcGxlQmVmb3JlIChiZWdpbkR0cykge1xuICAgICAgICBsZXQgc2VnbWVudCA9IHRoaXMuZ2V0TGFzdFNlZ21lbnRCZWZvcmUoYmVnaW5EdHMpO1xuICAgICAgICBpZiAoc2VnbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHNlZ21lbnQubGFzdFNhbXBsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TGFzdFJBUEJlZm9yZSAoYmVnaW5EdHMpIHtcbiAgICAgICAgbGV0IHNlZ21lbnRJZHggPSB0aGlzLl9zZWFyY2hOZWFyZXN0U2VnbWVudEJlZm9yZShiZWdpbkR0cyk7XG4gICAgICAgIGxldCByYW5kb21BY2Nlc3NQb2ludHMgPSB0aGlzLl9saXN0W3NlZ21lbnRJZHhdLnJhbmRvbUFjY2Vzc1BvaW50cztcbiAgICAgICAgd2hpbGUgKHJhbmRvbUFjY2Vzc1BvaW50cy5sZW5ndGggPT09IDAgJiYgc2VnbWVudElkeCA+IDApIHtcbiAgICAgICAgICAgIHNlZ21lbnRJZHgtLTtcbiAgICAgICAgICAgIHJhbmRvbUFjY2Vzc1BvaW50cyA9IHRoaXMuX2xpc3Rbc2VnbWVudElkeF0ucmFuZG9tQWNjZXNzUG9pbnRzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyYW5kb21BY2Nlc3NQb2ludHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJhbmRvbUFjY2Vzc1BvaW50c1tyYW5kb21BY2Nlc3NQb2ludHMubGVuZ3RoIC0gMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhU2VnbWVudCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnN0YXJ0RHRzID0gLTE7XG4gICAgICAgIHRoaXMuZW5kRHRzID0gLTE7XG4gICAgICAgIHRoaXMuc3RhcnRQdHMgPSAtMTtcbiAgICAgICAgdGhpcy5lbmRQdHMgPSAtMTtcbiAgICAgICAgdGhpcy5vcmlnaW5TdGFydER0cyA9IC0xO1xuICAgICAgICB0aGlzLm9yaWdpbkVuZER0cyA9IC0xO1xuICAgICAgICB0aGlzLnJhbmRvbUFjY2Vzc1BvaW50cyA9IFtdO1xuICAgICAgICB0aGlzLmZpcnN0U2FtcGxlID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0U2FtcGxlID0gbnVsbDtcbiAgICB9XG5cbiAgICBhZGRSQVAgKHNhbXBsZSkge1xuICAgICAgICBzYW1wbGUuaXNSQVAgPSB0cnVlO1xuICAgICAgICB0aGlzLnJhbmRvbUFjY2Vzc1BvaW50cy5wdXNoKHNhbXBsZSk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBBdWRpb1RyYWNrTWV0YSB7XG4gIGNvbnN0cnVjdG9yIChtZXRhKSB7XG4gICAgY29uc3QgX2RlZmF1bHQgPSB7XG4gICAgICBzYW1wbGVSYXRlOiA0ODAwMCxcbiAgICAgIGNoYW5uZWxDb3VudDogMixcbiAgICAgIGNvZGVjOiAnbXA0YS40MC4yJyxcbiAgICAgIGNvbmZpZzogWzQxLCA0MDEsIDEzNiwgMF0sXG4gICAgICBkdXJhdGlvbjogMCxcbiAgICAgIGlkOiAyLFxuICAgICAgcmVmU2FtcGxlRHVyYXRpb246IDIxLFxuICAgICAgc2FtcGxlUmF0ZUluZGV4OiAzLFxuICAgICAgdGltZXNjYWxlOiAxMDAwLFxuICAgICAgdHlwZTogJ2F1ZGlvJ1xuICAgIH1cbiAgICBpZiAobWV0YSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIF9kZWZhdWx0LCBtZXRhKVxuICAgIH1cbiAgICByZXR1cm4gX2RlZmF1bHRcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuaW5pdCA9IG51bGxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmlkZW9UcmFja01ldGEge1xuICBjb25zdHJ1Y3RvciAobWV0YSkge1xuICAgIGNvbnN0IF9kZWZhdWx0ID0ge1xuICAgICAgYXZjYzogbnVsbCxcbiAgICAgIHNwczogbmV3IFVpbnQ4QXJyYXkoMCksXG4gICAgICBwcHM6IG5ldyBVaW50OEFycmF5KDApLFxuICAgICAgY2hyb21hRm9ybWF0OiA0MjAsXG4gICAgICBjb2RlYzogJ2F2YzEuNjQwMDIwJyxcbiAgICAgIGNvZGVjSGVpZ2h0OiA3MjAsXG4gICAgICBjb2RlY1dpZHRoOiAxMjgwLFxuICAgICAgZHVyYXRpb246IDAsXG4gICAgICBmcmFtZVJhdGU6IHtcbiAgICAgICAgZml4ZWQ6IHRydWUsXG4gICAgICAgIGZwczogMjUsXG4gICAgICAgIGZwc19udW06IDI1MDAwLFxuICAgICAgICBmcHNfZGVuOiAxMDAwXG4gICAgICB9LFxuICAgICAgaWQ6IDEsXG4gICAgICBsZXZlbDogJzMuMicsXG4gICAgICBwcmVzZW50SGVpZ2h0OiA3MjAsXG4gICAgICBwcmVzZW50V2lkdGg6IDEyODAsXG4gICAgICBwcm9maWxlOiAnSGlnaCcsXG4gICAgICByZWZTYW1wbGVEdXJhdGlvbjogNDAsXG4gICAgICBwYXJSYXRpbzoge1xuICAgICAgICBoZWlnaHQ6IDEsXG4gICAgICAgIHdpZHRoOiAxXG4gICAgICB9LFxuICAgICAgdGltZXNjYWxlOiAxMDAwLFxuICAgICAgdHlwZTogJ3ZpZGVvJ1xuICAgIH1cblxuICAgIGlmIChtZXRhKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgX2RlZmF1bHQsIG1ldGEpXG4gICAgfVxuICAgIHJldHVybiBfZGVmYXVsdFxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5pbml0ID0gbnVsbFxuICAgIHRoaXMuc3BzID0gbnVsbFxuICAgIHRoaXMucHBzID0gbnVsbFxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQXVkaW9UcmFja1NhbXBsZSB7XG4gIGNvbnN0cnVjdG9yIChpbmZvKSB7XG4gICAgbGV0IF9kZWZhdWx0ID0gQXVkaW9UcmFja1NhbXBsZS5nZXREZWZhdWx0KClcbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHJldHVybiBfZGVmYXVsdFxuICAgIH1cbiAgICBsZXQgc2FtcGxlID0gT2JqZWN0LmFzc2lnbih7fSwgX2RlZmF1bHQsIGluZm8pXG5cbiAgICByZXR1cm4gc2FtcGxlXG4gIH1cblxuICBzdGF0aWMgZ2V0RGVmYXVsdCAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGR0czogbnVsbCxcbiAgICAgIHB0czogbnVsbCxcbiAgICAgIGRhdGE6IG5ldyBVaW50OEFycmF5KClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZpZGVvVHJhY2tTYW1wbGUge1xuICBjb25zdHJ1Y3RvciAoaW5mbykge1xuICAgIGxldCBfZGVmYXVsdCA9IFZpZGVvVHJhY2tTYW1wbGUuZ2V0RGVmYXVsdCgpXG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHJldHVybiBfZGVmYXVsdFxuICAgIH1cbiAgICBsZXQgc2FtcGxlID0gT2JqZWN0LmFzc2lnbih7fSwgX2RlZmF1bHQsIGluZm8pXG5cbiAgICByZXR1cm4gc2FtcGxlXG4gIH1cblxuICBzdGF0aWMgZ2V0RGVmYXVsdCAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGR0czogbnVsbCxcbiAgICAgIHB0czogbnVsbCxcbiAgICAgIGlzS2V5ZnJhbWU6IGZhbHNlLCAvLyBpcyBSYW5kb20gYWNjZXNzIHBvaW50XG4gICAgICBvcmlnaW5EdHM6IG51bGwsXG4gICAgICBkYXRhOiBuZXcgVWludDhBcnJheSgpXG4gICAgfVxuICB9XG59XG4iLCJjbGFzcyBNU0Uge1xuICBjb25zdHJ1Y3RvciAoY29uZmlncykge1xuICAgIHRoaXMuY29uZmlncyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZ3MpO1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5jb25maWdzLmNvbnRhaW5lcjtcbiAgICB0aGlzLm1lZGlhU291cmNlID0gbnVsbDtcbiAgICB0aGlzLnNvdXJjZUJ1ZmZlcnMgPSB7fTtcbiAgICB0aGlzLnByZWxvYWRUaW1lID0gdGhpcy5jb25maWdzLnByZWxvYWRUaW1lIHx8IDE7XG4gICAgdGhpcy5vblNvdXJjZU9wZW4gPSB0aGlzLm9uU291cmNlT3Blbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5vblRpbWVVcGRhdGUgPSB0aGlzLm9uVGltZVVwZGF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vblVwZGF0ZUVuZCA9IHRoaXMub25VcGRhdGVFbmQuYmluZCh0aGlzKVxuICAgIHRoaXMub25XYWl0aW5nID0gdGhpcy5vbldhaXRpbmcuYmluZCh0aGlzKVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdGhpcy5tZWRpYVNvdXJjZSA9IG5ldyBzZWxmLk1lZGlhU291cmNlKCk7XG4gICAgdGhpcy5tZWRpYVNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdzb3VyY2VvcGVuJywgdGhpcy5vblNvdXJjZU9wZW4pO1xuICAgIHRoaXMuY29udGFpbmVyLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy5tZWRpYVNvdXJjZSk7XG4gICAgdGhpcy51cmwgPSB0aGlzLmNvbnRhaW5lci5zcmM7XG4gICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIHRoaXMub25UaW1lVXBkYXRlKTtcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd3YWl0aW5nJywgdGhpcy5vbldhaXRpbmcpO1xuICB9XG5cbiAgb25UaW1lVXBkYXRlICgpIHtcbiAgICB0aGlzLmVtaXQoJ1RJTUVfVVBEQVRFJywgdGhpcy5jb250YWluZXIpO1xuICB9XG5cbiAgb25XYWl0aW5nICgpIHtcbiAgICB0aGlzLmVtaXQoJ1dBSVRJTkcnLCB0aGlzLmNvbnRhaW5lcik7XG4gIH1cblxuICBvblNvdXJjZU9wZW4gKCkge1xuICAgIHRoaXMuYWRkU291cmNlQnVmZmVycygpO1xuICB9XG5cbiAgb25VcGRhdGVFbmQgKCkge1xuICAgIHRoaXMuZW1pdCgnU09VUkNFX1VQREFURV9FTkQnKTtcbiAgICB0aGlzLmRvQXBwZW5kKClcbiAgfVxuICBhZGRTb3VyY2VCdWZmZXJzICgpIHtcbiAgICBpZiAodGhpcy5tZWRpYVNvdXJjZS5yZWFkeVN0YXRlICE9PSAnb3BlbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNvdXJjZXMgPSB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdQUkVfU09VUkNFX0JVRkZFUicpO1xuICAgIGxldCB0cmFja3MgPSB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdUUkFDS1MnKTtcbiAgICBsZXQgdHJhY2s7XG5cbiAgICBzb3VyY2VzID0gc291cmNlcy5zb3VyY2VzO1xuICAgIGxldCBhZGQgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMCwgayA9IE9iamVjdC5rZXlzKHNvdXJjZXMpLmxlbmd0aDsgaSA8IGs7IGkrKykge1xuICAgICAgbGV0IHR5cGUgPSBPYmplY3Qua2V5cyhzb3VyY2VzKVtpXTtcbiAgICAgIGlmICh0eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICAgIHRyYWNrID0gdHJhY2tzLmF1ZGlvVHJhY2s7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd2aWRlbycpIHtcbiAgICAgICAgdHJhY2sgPSB0cmFja3MudmlkZW9UcmFjaztcbiAgICAgICAgLy8gcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRyYWNrKSB7XG4gICAgICAgIGxldCBkdXIgPSB0eXBlID09PSAnYXVkaW8nID8gMjEgOiA0MDtcbiAgICAgICAgaWYgKHRyYWNrLm1ldGEgJiYgdHJhY2subWV0YS5yZWZTYW1wbGVEdXJhdGlvbikgZHVyID0gdHJhY2subWV0YS5yZWZTYW1wbGVEdXJhdGlvbjtcbiAgICAgICAgaWYgKHNvdXJjZXNbdHlwZV0uZGF0YS5sZW5ndGggPj0gKHRoaXMucHJlbG9hZFRpbWUgLyBkdXIpKSB7XG4gICAgICAgICAgYWRkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhZGQpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnNvdXJjZUJ1ZmZlcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBPYmplY3Qua2V5cyhzb3VyY2VzKS5sZW5ndGg7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgbGV0IHR5cGUgPSBPYmplY3Qua2V5cyhzb3VyY2VzKVtpXTtcbiAgICAgICAgbGV0IHNvdXJjZSA9IHNvdXJjZXNbdHlwZV1cbiAgICAgICAgbGV0IG1pbWUgPSAodHlwZSA9PT0gJ3ZpZGVvJykgPyAndmlkZW8vbXA0O2NvZGVjcz0nICsgc291cmNlLm1pbWV0eXBlIDogJ2F1ZGlvL21wNDtjb2RlY3M9JyArIHNvdXJjZS5taW1ldHlwZVxuICAgICAgICBsZXQgc291cmNlQnVmZmVyID0gdGhpcy5tZWRpYVNvdXJjZS5hZGRTb3VyY2VCdWZmZXIobWltZSk7XG4gICAgICAgIHRoaXMuc291cmNlQnVmZmVyc1t0eXBlXSA9IHNvdXJjZUJ1ZmZlcjtcbiAgICAgICAgc291cmNlQnVmZmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3VwZGF0ZWVuZCcsIHRoaXMub25VcGRhdGVFbmQpO1xuICAgICAgICB0aGlzLmRvQXBwZW5kKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZG9BcHBlbmQgKCkge1xuICAgIGxldCBzb3VyY2VzID0gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnUFJFX1NPVVJDRV9CVUZGRVInKTtcbiAgICBpZiAoc291cmNlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyh0aGlzLnNvdXJjZUJ1ZmZlcnMpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0eXBlID0gT2JqZWN0LmtleXModGhpcy5zb3VyY2VCdWZmZXJzKVtpXVxuICAgICAgICBsZXQgc291cmNlQnVmZmVyID0gdGhpcy5zb3VyY2VCdWZmZXJzW3R5cGVdO1xuICAgICAgICBpZiAoIXNvdXJjZUJ1ZmZlci51cGRhdGluZykge1xuICAgICAgICAgIGxldCBzb3VyY2UgPSBzb3VyY2VzLnNvdXJjZXNbdHlwZV07XG4gICAgICAgICAgaWYgKHNvdXJjZSAmJiAhc291cmNlLmluaXRlZCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FwcGVuZCBpbml0aWFsIHNlZ21lbnQnKVxuICAgICAgICAgICAgc291cmNlQnVmZmVyLmFwcGVuZEJ1ZmZlcihzb3VyY2UuaW5pdC5idWZmZXIuYnVmZmVyKTtcbiAgICAgICAgICAgIHNvdXJjZS5pbml0ZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc291cmNlKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHNvdXJjZS5kYXRhLnNoaWZ0KClcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgIHNvdXJjZUJ1ZmZlci5hcHBlbmRCdWZmZXIoZGF0YS5idWZmZXIuYnVmZmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbmRPZlN0cmVhbSAoKSB7XG4gICAgY29uc3QgeyByZWFkeVN0YXRlLCBhY3RpdmVTb3VyY2VCdWZmZXJzIH0gPSB0aGlzLm1lZGlhU291cmNlO1xuICAgIGlmIChyZWFkeVN0YXRlID09PSAnb3BlbicgJiYgYWN0aXZlU291cmNlQnVmZmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMubWVkaWFTb3VyY2UuZW5kT2ZTdHJlYW0oKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBsb2dcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmUgKGVuZCwgc3RhcnQgPSAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyh0aGlzLnNvdXJjZUJ1ZmZlcnMpLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgYnVmZmVyID0gdGhpcy5zb3VyY2VCdWZmZXJzW09iamVjdC5rZXlzKHRoaXMuc291cmNlQnVmZmVycylbaV1dO1xuICAgICAgaWYgKCFidWZmZXIudXBkYXRpbmcpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3RhcnQsIGVuZClcbiAgICAgICAgYnVmZmVyLnJlbW92ZShzdGFydCwgZW5kKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVtb3ZlQnVmZmVycyAoKSB7XG4gICAgY29uc3QgdGFza0xpc3QgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXModGhpcy5zb3VyY2VCdWZmZXJzKS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGJ1ZmZlciA9IHRoaXMuc291cmNlQnVmZmVyc1tPYmplY3Qua2V5cyh0aGlzLnNvdXJjZUJ1ZmZlcnMpW2ldXTtcbiAgICAgIGJ1ZmZlci5yZW1vdmVFdmVudExpc3RlbmVyKCd1cGRhdGVlbmQnLCB0aGlzLm9uVXBkYXRlRW5kKTtcblxuICAgICAgbGV0IHRhc2s7XG4gICAgICBpZiAoYnVmZmVyLnVwZGF0aW5nKSB7XG4gICAgICAgIHRhc2sgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRvQ2xlYW5CdWZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgcmV0cnlUaW1lID0gM1xuXG4gICAgICAgICAgICBjb25zdCBjbGVhbiA9ICgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFidWZmZXIudXBkYXRpbmcpIHtcbiAgICAgICAgICAgICAgICBNU0UuY2xlYXJCdWZmZXIoYnVmZmVyKVxuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJldHJ5VGltZSA+IDApe1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2xlYW4sIDIwMClcbiAgICAgICAgICAgICAgICByZXRyeVRpbWUtLVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoY2xlYW4sIDIwMClcbiAgICAgICAgICAgIGJ1ZmZlci5yZW1vdmVFdmVudExpc3RlbmVyKCd1cGRhdGVlbmQnLCBkb0NsZWFuQnVmZmVyKVxuICAgICAgICAgIH1cbiAgICAgICAgICBidWZmZXIuYWRkRXZlbnRMaXN0ZW5lcigndXBkYXRlZW5kJywgZG9DbGVhbkJ1ZmZlcilcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE1TRS5jbGVhckJ1ZmZlcihidWZmZXIpXG4gICAgICAgIHRhc2sgPSBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuXG4gICAgICB0YXNrTGlzdC5wdXNoKHRhc2spXG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHRhc2tMaXN0KVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVtb3ZlQnVmZmVycygpLnRoZW4oKCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyh0aGlzLnNvdXJjZUJ1ZmZlcnMpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBidWZmZXIgPSB0aGlzLnNvdXJjZUJ1ZmZlcnNbT2JqZWN0LmtleXModGhpcy5zb3VyY2VCdWZmZXJzKVtpXV07XG4gICAgICAgIHRoaXMubWVkaWFTb3VyY2UucmVtb3ZlU291cmNlQnVmZmVyKGJ1ZmZlcik7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNvdXJjZUJ1ZmZlcnNbT2JqZWN0LmtleXModGhpcy5zb3VyY2VCdWZmZXJzKVtpXV07XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCB0aGlzLm9uVGltZVVwZGF0ZSk7XG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCd3YWl0aW5nJywgdGhpcy5vbldhaXRpbmcpO1xuICAgICAgdGhpcy5tZWRpYVNvdXJjZS5yZW1vdmVFdmVudExpc3RlbmVyKCdzb3VyY2VvcGVuJywgdGhpcy5vblNvdXJjZU9wZW4pO1xuXG4gICAgICB0aGlzLmVuZE9mU3RyZWFtKClcbiAgICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMudXJsKTtcblxuICAgICAgdGhpcy51cmwgPSBudWxsXG4gICAgICB0aGlzLmNvbmZpZ3MgPSB7fTtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gbnVsbDtcbiAgICAgIHRoaXMubWVkaWFTb3VyY2UgPSBudWxsO1xuICAgICAgdGhpcy5zb3VyY2VCdWZmZXJzID0ge307XG4gICAgICB0aGlzLnByZWxvYWRUaW1lID0gMTtcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGNsZWFyQnVmZmVyIChidWZmZXIpIHtcbiAgICBjb25zdCBidWZmZXJlZCA9IGJ1ZmZlci5idWZmZXJlZDtcbiAgICBsZXQgYkVuZCA9IDAuMVxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBidWZmZXJlZC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgYkVuZCA9IGJ1ZmZlcmVkLmVuZChpKVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgYnVmZmVyLnJlbW92ZSgwLCBiRW5kKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIERPIE5PVEhJTkdcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE1TRTtcbiIsImltcG9ydCBDb25jYXQgZnJvbSAnY29uY2F0LXR5cGVkLWFycmF5J1xuXG5jbGFzcyBCdWZmZXIge1xuICBjb25zdHJ1Y3RvciAoYnVmZmVyKSB7XG4gICAgdGhpcy5idWZmZXIgPSBidWZmZXIgfHwgbmV3IFVpbnQ4QXJyYXkoMClcbiAgfVxuXG4gIHdyaXRlICguLi5idWZmZXIpIHtcbiAgICBidWZmZXIuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHRoaXMuYnVmZmVyID0gQ29uY2F0KFVpbnQ4QXJyYXksIHRoaXMuYnVmZmVyLCBpdGVtKVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgd3JpdGVVaW50MzIgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFtcbiAgICAgIHZhbHVlID4+IDI0LFxuICAgICAgKHZhbHVlID4+IDE2KSAmIDB4ZmYsXG4gICAgICAodmFsdWUgPj4gOCkgJiAweGZmLFxuICAgICAgdmFsdWUgJiAweGZmXG4gICAgXSlcbiAgfVxuXG4gIHN0YXRpYyByZWFkQXNJbnQgKGFycikge1xuICAgIGxldCB0ZW1wID0gJydcblxuICAgIGZ1bmN0aW9uIHBhZFN0YXJ0NEhleCAoaGV4TnVtKSB7XG4gICAgICBsZXQgaGV4U3RyID0gaGV4TnVtLnRvU3RyaW5nKDE2KVxuICAgICAgcmV0dXJuIGhleFN0ci5wYWRTdGFydCgyLCAnMCcpXG4gICAgfVxuXG4gICAgYXJyLmZvckVhY2gobnVtID0+IHtcbiAgICAgIHRlbXAgKz0gcGFkU3RhcnQ0SGV4KG51bSlcbiAgICB9KVxuICAgIHJldHVybiBwYXJzZUludCh0ZW1wLCAxNilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdWZmZXJcbiIsImNsYXNzIFN0cmVhbSB7XG4gIGNvbnN0cnVjdG9yIChidWZmZXIpIHtcbiAgICBpZiAoYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgdGhpcy5kYXRhdmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIpO1xuICAgICAgdGhpcy5kYXRhdmlldy5wb3NpdGlvbiA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZGF0YSBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGxlbmd0aCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGg7XG4gIH1cblxuICBzZXQgcG9zaXRpb24gKHZhbHVlKSB7XG4gICAgdGhpcy5kYXRhdmlldy5wb3NpdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHBvc2l0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhdmlldy5wb3NpdGlvbjtcbiAgfVxuXG4gIGJhY2sgKGNvdW50KSB7XG4gICAgdGhpcy5wb3NpdGlvbiAtPSBjb3VudDtcbiAgfVxuXG4gIHNraXAgKGNvdW50KSB7XG4gICAgbGV0IGxvb3AgPSBNYXRoLmZsb29yKGNvdW50IC8gNCk7XG4gICAgbGV0IGxhc3QgPSBjb3VudCAlIDQ7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb29wOyBpKyspIHtcbiAgICAgIFN0cmVhbS5yZWFkQnl0ZSh0aGlzLmRhdGF2aWV3LCA0KTtcbiAgICB9XG4gICAgaWYgKGxhc3QgPiAwKSB7XG4gICAgICBTdHJlYW0ucmVhZEJ5dGUodGhpcy5kYXRhdmlldywgbGFzdCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFtyZWFkQnl0ZSDku45EYXRhVmlld+S4reivu+WPluaVsOaNrl1cbiAgICogQHBhcmFtICB7RGF0YVZpZXd9IGJ1ZmZlciBbRGF0YVZpZXflrp7kvotdXG4gICAqIEBwYXJhbSAge051bWJlcn0gc2l6ZSAgIFvor7vlj5blrZfoioLmlbBdXG4gICAqIEByZXR1cm4ge051bWJlcn0gICAgICAgIFvmlbTmlbBdXG4gICAqL1xuICBzdGF0aWMgcmVhZEJ5dGUgKGJ1ZmZlciwgc2l6ZSwgc2lnbikge1xuICAgIGxldCByZXM7XG4gICAgc3dpdGNoIChzaXplKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGlmIChzaWduKSB7XG4gICAgICAgICAgcmVzID0gYnVmZmVyLmdldEludDgoYnVmZmVyLnBvc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMgPSBidWZmZXIuZ2V0VWludDgoYnVmZmVyLnBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaWYgKHNpZ24pIHtcbiAgICAgICAgICByZXMgPSBidWZmZXIuZ2V0SW50MTYoYnVmZmVyLnBvc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMgPSBidWZmZXIuZ2V0VWludDE2KGJ1ZmZlci5wb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGlmIChzaWduKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3Qgc3VwcG9ydGVkIGZvciByZWFkQnl0ZSAzJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzID0gYnVmZmVyLmdldFVpbnQ4KGJ1ZmZlci5wb3NpdGlvbikgPDwgMTY7XG4gICAgICAgICAgcmVzIHw9IGJ1ZmZlci5nZXRVaW50OChidWZmZXIucG9zaXRpb24gKyAxKSA8PCA4O1xuICAgICAgICAgIHJlcyB8PSBidWZmZXIuZ2V0VWludDgoYnVmZmVyLnBvc2l0aW9uICsgMik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIGlmIChzaWduKSB7XG4gICAgICAgICAgcmVzID0gYnVmZmVyLmdldEludDMyKGJ1ZmZlci5wb3NpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzID0gYnVmZmVyLmdldFVpbnQzMihidWZmZXIucG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA4OlxuICAgICAgICBpZiAoc2lnbikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IHN1cHBvcnRlZCBmb3IgcmVhZEJvZHkgOCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcyA9IGJ1ZmZlci5nZXRVaW50MzIoYnVmZmVyLnBvc2l0aW9uKSA8PCAzMjtcbiAgICAgICAgICByZXMgfD0gYnVmZmVyLmdldFVpbnQzMihidWZmZXIucG9zaXRpb24gKyA0KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJlcyA9ICcnO1xuICAgIH1cbiAgICBidWZmZXIucG9zaXRpb24gKz0gc2l6ZTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcmVhZFVpbnQ4ICgpIHtcbiAgICByZXR1cm4gU3RyZWFtLnJlYWRCeXRlKHRoaXMuZGF0YXZpZXcsIDEpO1xuICB9XG5cbiAgcmVhZFVpbnQxNiAoKSB7XG4gICAgcmV0dXJuIFN0cmVhbS5yZWFkQnl0ZSh0aGlzLmRhdGF2aWV3LCAyKTtcbiAgfVxuXG4gIHJlYWRVaW50MjQgKCkge1xuICAgIHJldHVybiBTdHJlYW0ucmVhZEJ5dGUodGhpcy5kYXRhdmlldywgMyk7XG4gIH1cblxuICByZWFkVWludDMyICgpIHtcbiAgICByZXR1cm4gU3RyZWFtLnJlYWRCeXRlKHRoaXMuZGF0YXZpZXcsIDQpO1xuICB9XG5cbiAgcmVhZFVpbnQ2NCAoKSB7XG4gICAgcmV0dXJuIFN0cmVhbS5yZWFkQnl0ZSh0aGlzLmRhdGF2aWV3LCA4KTtcbiAgfVxuXG4gIHJlYWRJbnQ4ICgpIHtcbiAgICByZXR1cm4gU3RyZWFtLnJlYWRCeXRlKHRoaXMuZGF0YXZpZXcsIDEsIHRydWUpO1xuICB9XG4gIHJlYWRJbnQxNiAoKSB7XG4gICAgcmV0dXJuIFN0cmVhbS5yZWFkQnl0ZSh0aGlzLmRhdGF2aWV3LCAyLCB0cnVlKTtcbiAgfVxuXG4gIHJlYWRJbnQzMiAoKSB7XG4gICAgcmV0dXJuIFN0cmVhbS5yZWFkQnl0ZSh0aGlzLmRhdGF2aWV3LCA0LCB0cnVlKTtcbiAgfVxuXG4gIHdyaXRlVWludDMyICh2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShbXG4gICAgICB2YWx1ZSA+Pj4gMjQgJiAweGZmLFxuICAgICAgdmFsdWUgPj4+IDE2ICYgMHhmZixcbiAgICAgIHZhbHVlID4+PiA4ICYgMHhmZixcbiAgICAgIHZhbHVlICYgMHhmZlxuICAgIF0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmVhbTtcbiIsImltcG9ydCB7IEZldGNoTG9hZGVyIH0gZnJvbSAneGdwbGF5ZXItbG9hZGVyJ1xuaW1wb3J0IHsgRmx2RGVtdXhlciB9IGZyb20gJ3hncGxheWVyLWRlbXV4J1xuaW1wb3J0IHsgTXA0UmVtdXhlciB9IGZyb20gJ3hncGxheWVyLXJlbXV4J1xuaW1wb3J0IHsgVHJhY2tzLCBYZ0J1ZmZlciwgUHJlU291cmNlIH0gZnJvbSAneGdwbGF5ZXItYnVmZmVyJ1xuaW1wb3J0IHsgRVZFTlRTLCBQYWdlVmlzaWJpbGl0eSB9IGZyb20gJ3hncGxheWVyLXV0aWxzJ1xuaW1wb3J0IHsgQ29tcGF0aWJpbGl0eSB9IGZyb20gJ3hncGxheWVyLWNvZGVjJ1xuaW1wb3J0IFBsYXllciBmcm9tICd4Z3BsYXllcidcblxuY29uc3QgREVNVVhfRVZFTlRTID0gRVZFTlRTLkRFTVVYX0VWRU5UUztcbmNvbnN0IExPQURFUl9FVkVOVFMgPSBFVkVOVFMuTE9BREVSX0VWRU5UU1xuY29uc3QgQlJPV1NFUl9FVkVOVFMgPSBFVkVOVFMuQlJPV1NFUl9FVkVOVFNcblxuY29uc3QgVGFnID0gJ0ZMVkNvbnRyb2xsZXInXG5cbmNsYXNzIExvZ2dlciB7XG4gIHdhcm4gKCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmx2Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yIChwbGF5ZXIpIHtcbiAgICB0aGlzLlRBRyA9IFRhZ1xuICAgIHRoaXMuX3BsYXllciA9IHBsYXllclxuXG4gICAgdGhpcy52aWRlbyA9IHRoaXMuX3BsYXllci52aWRlbztcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5pdFNlZ21lbnRBcnJpdmVkOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHRoaXMuX2NvbnRleHQucmVnaXN0cnkoJ0ZFVENIX0xPQURFUicsIEZldGNoTG9hZGVyKVxuICAgIHRoaXMuX2NvbnRleHQucmVnaXN0cnkoJ0xPQURFUl9CVUZGRVInLCBYZ0J1ZmZlcilcbiAgICB0aGlzLl9jb250ZXh0LnJlZ2lzdHJ5KCdQUkVfU09VUkNFX0JVRkZFUicsIFByZVNvdXJjZSlcblxuICAgIHRoaXMuX2NvbnRleHQucmVnaXN0cnkoJ0ZMVl9ERU1VWEVSJywgRmx2RGVtdXhlcilcblxuICAgIHRoaXMuX2NvbnRleHQucmVnaXN0cnkoJ01QNF9SRU1VWEVSJywgTXA0UmVtdXhlcilcbiAgICB0aGlzLl9jb250ZXh0LnJlZ2lzdHJ5KCdUUkFDS1MnLCBUcmFja3MpXG5cbiAgICB0aGlzLl9jb250ZXh0LnJlZ2lzdHJ5KCdDT01QQVRJQklMSVRZJywgQ29tcGF0aWJpbGl0eSlcbiAgICB0aGlzLl9jb250ZXh0LnJlZ2lzdHJ5KCdQQUdFX1ZJU0lCSUxJVFknLCBQYWdlVmlzaWJpbGl0eSlcblxuICAgIHRoaXMuX2NvbnRleHQucmVnaXN0cnkoJ0xPR0dFUicsIExvZ2dlcilcblxuICAgIHRoaXMuaW5pdExpc3RlbmVycygpXG4gIH1cblxuICBpbml0TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLm9uKExPQURFUl9FVkVOVFMuTE9BREVSX0RBVEFMT0FERUQsIHRoaXMuX2hhbmRsZUxvYWRlckRhdGFMb2FkZWQuYmluZCh0aGlzKSlcbiAgICB0aGlzLm9uKExPQURFUl9FVkVOVFMuTE9BREVSX0VSUk9SLCB0aGlzLl9oYW5kbGVOZXR3b3JrRXJyb3IuYmluZCh0aGlzKSlcblxuICAgIHRoaXMub24oREVNVVhfRVZFTlRTLk1FRElBX0lORk8sIHRoaXMuX2hhbmRsZU1lZGlhSW5mby5iaW5kKHRoaXMpKVxuICAgIHRoaXMub24oREVNVVhfRVZFTlRTLk1FVEFEQVRBX1BBUlNFRCwgdGhpcy5faGFuZGxlTWV0YWRhdGFQYXJzZWQuYmluZCh0aGlzKSlcbiAgICB0aGlzLm9uKERFTVVYX0VWRU5UUy5ERU1VWF9DT01QTEVURSwgdGhpcy5faGFuZGxlRGVtdXhDb21wbGV0ZS5iaW5kKHRoaXMpKVxuICAgIHRoaXMub24oREVNVVhfRVZFTlRTLkRFTVVYX0VSUk9SLCB0aGlzLl9oYW5kbGVEZW11eEVycm9yLmJpbmQodGhpcykpXG5cbiAgfVxuXG4gIF9oYW5kbGVNZWRpYUluZm8gKCkge1xuICAgIGlmICghdGhpcy5fY29udGV4dC5tZWRpYUluZm8pIHtcbiAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuREVNVVhfRVJST1IsIG5ldyBFcnJvcignZmFpbGVkIHRvIGdldCBtZWRpYWluZm8nKSlcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlTG9hZGVyRGF0YUxvYWRlZCAoKSB7XG4gICAgdGhpcy5lbWl0VG8oJ0ZMVl9ERU1VWEVSJywgREVNVVhfRVZFTlRTLkRFTVVYX1NUQVJUKVxuICB9XG5cbiAgX2hhbmRsZU1ldGFkYXRhUGFyc2VkICh0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdhdWRpbycpIHtcbiAgICAgIC8vIOWwhumfs+mikW1ldGHkv6Hmga/kuqTnu5lhdWRpb0NvbnRleHTvvIzkuI3otbByZW11eOWwgeijhVxuICAgICAgY29uc3QgeyBhdWRpb1RyYWNrIH0gPSB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdUUkFDS1MnKVxuICAgICAgaWYgKGF1ZGlvVHJhY2sgJiYgYXVkaW9UcmFjay5tZXRhKSB7XG4gICAgICAgIHRoaXMuX3NldE1ldGFUb0F1ZGlvKGF1ZGlvVHJhY2subWV0YSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyB2aWRlb1RyYWNrIH0gPSB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdUUkFDS1MnKVxuICAgICAgaWYgKHZpZGVvVHJhY2sgJiYgdmlkZW9UcmFjay5tZXRhKSB7XG4gICAgICAgIHRoaXMuX3NldE1ldGFUb1ZpZGVvKHZpZGVvVHJhY2subWV0YSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfaGFuZGxlRGVtdXhDb21wbGV0ZSAoKSB7XG4gICAgaWYodGhpcy5fcGxheWVyLnZpZGVvKSB7XG4gICAgICBjb25zdCB7IHZpZGVvVHJhY2ssIGF1ZGlvVHJhY2sgfSA9IHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UoJ1RSQUNLUycpO1xuICAgICAgdGhpcy5fcGxheWVyLnZpZGVvLm9uRGVtdXhDb21wbGV0ZSh2aWRlb1RyYWNrLCBhdWRpb1RyYWNrKTtcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlQXBwZW5kSW5pdFNlZ21lbnQgKCkge1xuICAgIHRoaXMuc3RhdGUuaW5pdFNlZ21lbnRBcnJpdmVkID0gdHJ1ZVxuICAvLyAgdGhpcy5tc2UuYWRkU291cmNlQnVmZmVycygpXG4gIH1cblxuXG4gIF9oYW5kbGVOZXR3b3JrRXJyb3IgKCkge1xuICAgIHRoaXMuX3BsYXllci5lbWl0KCdlcnJvcicsIG5ldyBQbGF5ZXIuRXJyb3JzKCduZXR3b3JrJywgdGhpcy5fcGxheWVyLmNvbmZpZy51cmwpKVxuICB9XG5cbiAgX2hhbmRsZURlbXV4RXJyb3IgKCkge1xuICAgIHRoaXMuX3BsYXllci5lbWl0KCdlcnJvcicsIG5ldyBQbGF5ZXIuRXJyb3JzKCdwYXJzZScsIHRoaXMuX3BsYXllci5jb25maWcudXJsKSlcbiAgfVxuXG5cbiAgX3NldE1ldGFUb0F1ZGlvIChhdWRpb01ldGEpIHtcbiAgICBpZiAodGhpcy5fcGxheWVyLnZpZGVvKSB7XG4gICAgICB0aGlzLl9wbGF5ZXIudmlkZW8uc2V0QXVkaW9NZXRhKGF1ZGlvTWV0YSk7XG4gICAgfVxuICB9XG5cbiAgX3NldE1ldGFUb1ZpZGVvICh2aWRlb01ldGEpIHtcbiAgICBpZiAodGhpcy5fcGxheWVyLnZpZGVvKSB7XG4gICAgICB0aGlzLl9wbGF5ZXIudmlkZW8uc2V0VmlkZW9NZXRhKHZpZGVvTWV0YSk7XG4gICAgfVxuICB9XG5cbiAgc2VlayAoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmluaXRTZWdtZW50QXJyaXZlZCkge1xuICAgICAgdGhpcy5sb2FkRGF0YSgpXG4gICAgfVxuICB9XG5cbiAgbG9hZERhdGEgKCkge1xuICAgIHRoaXMuZW1pdChMT0FERVJfRVZFTlRTLkxBREVSX1NUQVJULCB0aGlzLl9wbGF5ZXIuY29uZmlnLnVybClcbiAgfVxuXG4gIHBhdXNlICgpIHtcbiAgICBjb25zdCBsb2FkZXIgPSB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdGRVRDSF9MT0FERVInKVxuXG4gICAgaWYgKGxvYWRlcikge1xuICAgICAgbG9hZGVyLmNhbmNlbCgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOS/neivgeW9k+WJjeaSreaUvueahOinhumikeS7pWdvcOS4uuWNleS9jVxuICAgKiBAcGFyYW0gdmlkZW9UcmFja1xuICAgKi9cbiAgc3RhdGljIHJlc29sdmVWaWRlb0dPUCAodmlkZW9UcmFjaykge1xuICAgIGNvbnN0IHsgc2FtcGxlcyB9ID0gdmlkZW9UcmFjaztcbiAgICBpZiAoIXNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGZpcnN0SWZyYW1lSWR4ID0gbnVsbFxuICAgIGxldCBsYXN0SWZyYW1lSWR4ID0gbnVsbFxuXG4gICAgaWYgKHZpZGVvVHJhY2sudGVtcFNhbXBsZXMgJiYgdmlkZW9UcmFjay50ZW1wU2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIC8vIOWwhue8k+WtmOW4p+aUvue9ruWIsOmYn+WIl+eahOWktOmDqFxuICAgICAgc2FtcGxlcy51bnNoaWZ0LmFwcGx5KHNhbXBsZXMsIHZpZGVvVHJhY2sudGVtcFNhbXBsZXMpO1xuICAgIH1cblxuICAgIC8vIOWvu+aJvuesrOS4gOS4qknluKdcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gc2FtcGxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgY3VycmVudCA9IHNhbXBsZXNbaV07XG4gICAgICBpZiAoY3VycmVudC5pc0tleWZyYW1lKSB7XG4gICAgICAgIGZpcnN0SWZyYW1lSWR4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5a+75om+5pyA5ZCO5LiA5LiqSeW4p1xuICAgIGZvciAobGV0IGkgPSBzYW1wbGVzLmxlbmd0aCAtIDE7IGkgPiAwOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBzYW1wbGVzW2ldXG5cbiAgICAgIGlmIChjdXJyZW50LmlzS2V5ZnJhbWUpIHtcbiAgICAgICAgbGFzdElmcmFtZUlkeCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmaXJzdElmcmFtZUlkeCAhPT0gMCkge1xuICAgICAgc2FtcGxlcy5zcGxpY2UoMCwgZmlyc3RJZnJhbWVJZHggLSAxKVxuICAgIH1cblxuICAgIHZpZGVvVHJhY2suc2FtcGxlcyA9IHNhbXBsZXMuc2xpY2UoMCwgbGFzdElmcmFtZUlkeClcbiAgICBjb25zdCByZXN0ID0gc2FtcGxlcy5zbGljZShsYXN0SWZyYW1lSWR4KVxuICAgIGlmICh2aWRlb1RyYWNrLnRlbXBTYW1wbGVzKSB7XG4gICAgICB2aWRlb1RyYWNrLnRlbXBTYW1wbGVzLnB1c2guYXBwbHkodmlkZW9UcmFjay50ZW1wU2FtcGxlcywgcmVzdClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g5bCG5Ymp5LiL55qE5bin57yT5a2Y77yM562J5b6F5LiA5Liq5a6M5pW055qEZ29wXG4gICAgICB2aWRlb1RyYWNrLnRlbXBTYW1wbGVzID0gcmVzdFxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICd4Z3BsYXllcidcbmltcG9ydCB7IENvbnRleHQsIEVWRU5UUyB9IGZyb20gJ3hncGxheWVyLXV0aWxzJztcbmltcG9ydCBGTFYgZnJvbSAnLi9mbHYtbGl2ZS1tb2JpbGUnXG5jb25zdCBmbHZBbGxvd2VkRXZlbnRzID0gRVZFTlRTLkZsdkFsbG93ZWRFdmVudHM7XG5cbmNsYXNzIEZsdlBsYXllciBleHRlbmRzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBpZiAoIWNvbmZpZy5tZWRpYVR5cGUpIHtcbiAgICAgIGNvbmZpZy5tZWRpYVR5cGUgPSAnbW9iaWxlLXZpZGVvJ1xuICAgIH1cbiAgICBzdXBlcihjb25maWcpXG4gICAgdGhpcy5jb250ZXh0ID0gbmV3IENvbnRleHQoZmx2QWxsb3dlZEV2ZW50cylcbiAgICB0aGlzLmluaXRFdmVudHMoKVxuICB9XG5cbiAgc3RhcnQgKCkge1xuICAgIHRoaXMuaW5pdEZsdigpXG4gICAgdGhpcy5jb250ZXh0LmluaXQoKVxuICAgIHRoaXMuZmx2LnNlZWsoMCk7XG4gICAgc3VwZXIuc3RhcnQodGhpcy5jb25maWcudXJsKTtcbiAgICB0aGlzLnBsYXkoKTtcbiAgfVxuXG4gIGluaXRGbHZFdmVudHMgKGZsdikge1xuICAgIGNvbnN0IHBsYXllciA9IHRoaXM7XG4gICAgZmx2Lm9uY2UoRVZFTlRTLlJFTVVYX0VWRU5UUy5JTklUX1NFR01FTlQsICgpID0+IHtcbiAgICAgIFBsYXllci51dGlsLmFkZENsYXNzKHBsYXllci5yb290LCAneGdwbGF5ZXItaXMtbGl2ZScpXG4gICAgICBpZiAoIVBsYXllci51dGlsLmZpbmREb20odGhpcy5yb290LCAneGctbGl2ZScpKSB7XG4gICAgICAgIGNvbnN0IGxpdmUgPSBQbGF5ZXIudXRpbC5jcmVhdGVEb20oJ3hnLWxpdmUnLCAn5q2j5Zyo55u05pKtJywge30sICd4Z3BsYXllci1saXZlJylcbiAgICAgICAgcGxheWVyLmNvbnRyb2xzLmFwcGVuZENoaWxkKGxpdmUpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGZsdi5vbmNlKEVWRU5UUy5MT0FERVJfRVZFTlRTLkxPQURFUl9DT01QTEVURSwgKCkgPT4ge1xuICAgICAgLy8g55u05pKt5a6M5oiQ77yM5b6F5pKt5pS+5Zmo5pKt5a6M57yT5a2Y5ZCO5Y+R6YCB5YWz6Zet5LqL5Lu2XG4gICAgICBpZiAoIXBsYXllci5wYXVzZWQpIHtcbiAgICAgICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgZW5kID0gcGxheWVyLmdldEJ1ZmZlcmVkUmFuZ2UoKVsxXVxuICAgICAgICAgIGlmIChNYXRoLmFicyhwbGF5ZXIuY3VycmVudFRpbWUgLSBlbmQpIDwgMC41KSB7XG4gICAgICAgICAgICBwbGF5ZXIuZW1pdCgnZW5kZWQnKVxuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGltZXIpXG4gICAgICAgICAgfVxuICAgICAgICB9LCAyMDApXG4gICAgICB9XG4gICAgfSlcbiAgICBmbHYub24oRVZFTlRTLkJST1dTRVJfRVZFTlRTLlZJU0lCSUxJVFlfQ0hBTkdFLCAoaGlkZGVuKSA9PiB7XG4gICAgICBpZiAoaGlkZGVuKSB7XG4gICAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wbGF5KClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgaW5pdEV2ZW50cyAoKSB7XG4gICAgdGhpcy5vbigndGltZXVwZGF0ZScsICgpID0+IHtcbiAgICAgIHRoaXMubG9hZERhdGEoKVxuICAgIH0pXG5cbiAgICB0aGlzLm9uKCdzZWVraW5nJywgKCkgPT4ge1xuICAgICAgY29uc3QgdGltZSA9IHRoaXMuY3VycmVudFRpbWVcbiAgICAgIGNvbnN0IHJhbmdlID0gdGhpcy5nZXRCdWZmZXJlZFJhbmdlKClcbiAgICAgIGlmICh0aW1lID4gcmFuZ2VbMV0gfHwgdGltZSA8IHJhbmdlWzBdKSB7XG4gICAgICAgIHRoaXMuZmx2LnNlZWsodGhpcy5jdXJyZW50VGltZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgaW5pdEZsdiAoKSB7XG4gICAgY29uc3QgZmx2ID0gdGhpcy5jb250ZXh0LnJlZ2lzdHJ5KCdGTFZfQ09OVFJPTExFUicsIEZMVikodGhpcylcbiAgICB0aGlzLmluaXRGbHZFdmVudHMoZmx2KVxuICAgIHRoaXMuZmx2ID0gZmx2XG4gIH1cblxuICBwbGF5ICgpIHtcbiAgICBpZiAodGhpcy5faGFzU3RhcnQgJiYgdGhpcy5wYXVzZWQpIHtcbiAgICAgIHRoaXMuX2Rlc3Ryb3koKVxuICAgICAgdGhpcy5jb250ZXh0ID0gbmV3IENvbnRleHQoZmx2QWxsb3dlZEV2ZW50cylcbiAgICAgIGNvbnN0IGZsdiA9IHRoaXMuY29udGV4dC5yZWdpc3RyeSgnRkxWX0NPTlRST0xMRVInLCBGTFYpKHRoaXMpXG4gICAgICB0aGlzLmluaXRGbHZFdmVudHMoZmx2KVxuICAgICAgdGhpcy5mbHYgPSBmbHZcbiAgICAgIHRoaXMuY29udGV4dC5pbml0KClcbiAgICAgIHRoaXMubG9hZERhdGEoKVxuICAgICAgc3VwZXIuc3RhcnQoKVxuICAgICAgc3VwZXIucGxheSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN1cGVyLnBsYXkoKVxuICAgIH1cbiAgfVxuXG4gIHBhdXNlICgpIHtcbiAgICBzdXBlci5wYXVzZSgpXG4gICAgaWYgKHRoaXMuZmx2KSB7XG4gICAgICB0aGlzLmZsdi5wYXVzZSgpXG4gICAgfVxuICB9XG5cbiAgbG9hZERhdGEgKHRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lKSB7XG4gICAgaWYgKHRoaXMuZmx2KSB7XG4gICAgICB0aGlzLmZsdi5zZWVrKHRpbWUpXG4gICAgfVxuICB9XG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuX2Rlc3Ryb3koKVxuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgfVxuXG4gIF9kZXN0cm95ICgpIHtcbiAgICB0aGlzLmNvbnRleHQuZGVzdHJveSgpXG4gICAgdGhpcy5mbHYgPSBudWxsXG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbFxuICB9XG5cbiAgZ2V0IHNyYyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFNyY1xuICB9XG5cbiAgc2V0IHNyYyAodXJsKSB7XG4gICAgdGhpcy5wbGF5ZXIuY29uZmlnLnVybCA9IHVybFxuICAgIGlmICghdGhpcy5wYXVzZWQpIHtcbiAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgdGhpcy5vbmNlKCdwYXVzZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5zdGFydCh1cmwpXG4gICAgICB9KVxuICAgICAgdGhpcy5vbmNlKCdjYW5wbGF5JywgKCkgPT4ge1xuICAgICAgICB0aGlzLnBsYXkoKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGFydCh1cmwpXG4gICAgfVxuICAgIHRoaXMub25jZSgnY2FucGxheScsICgpID0+IHtcbiAgICAgIHRoaXMuY3VycmVudFRpbWUgPSAwXG4gICAgfSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsdlBsYXllclxuIiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlBsYXllclwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9