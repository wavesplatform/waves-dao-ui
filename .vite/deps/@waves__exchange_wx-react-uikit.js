import {
  ThemeContext,
  _defineProperty,
  getRegisteredStyles,
  insertStyles,
  keyframes,
  memoize_browser_esm_default,
  serializeStyles,
  withEmotionCache
} from "./chunk-L2EVNJ64.js";
import {
  require_object_assign
} from "./chunk-LWNOQC5T.js";
import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-HS7GO4I2.js";

// node_modules/identity-img/dist/identity-img.min.js
var require_identity_img_min = __commonJS({
  "node_modules/identity-img/dist/identity-img.min.js"(exports, module) {
    !function(t, o3) {
      "object" == typeof exports && "object" == typeof module ? module.exports = o3() : "function" == typeof define && define.amd ? define([], o3) : "object" == typeof exports ? exports.identityImg = o3() : t.identityImg = o3();
    }(exports, function() {
      return function(t) {
        var o3 = {};
        function e(n) {
          if (o3[n])
            return o3[n].exports;
          var i = o3[n] = { i: n, l: false, exports: {} };
          return t[n].call(i.exports, i, i.exports, e), i.l = true, i.exports;
        }
        return e.m = t, e.c = o3, e.d = function(t2, o4, n) {
          e.o(t2, o4) || Object.defineProperty(t2, o4, { enumerable: true, get: n });
        }, e.r = function(t2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
        }, e.t = function(t2, o4) {
          if (1 & o4 && (t2 = e(t2)), 8 & o4)
            return t2;
          if (4 & o4 && "object" == typeof t2 && t2 && t2.__esModule)
            return t2;
          var n = /* @__PURE__ */ Object.create(null);
          if (e.r(n), Object.defineProperty(n, "default", { enumerable: true, value: t2 }), 2 & o4 && "string" != typeof t2)
            for (var i in t2)
              e.d(n, i, function(o5) {
                return t2[o5];
              }.bind(null, i));
          return n;
        }, e.n = function(t2) {
          var o4 = t2 && t2.__esModule ? function() {
            return t2.default;
          } : function() {
            return t2;
          };
          return e.d(o4, "a", o4), o4;
        }, e.o = function(t2, o4) {
          return Object.prototype.hasOwnProperty.call(t2, o4);
        }, e.p = "", e(e.s = 0);
      }([function(t, o3, e) {
        "use strict";
        var n = this && this.__assign || function() {
          return (n = Object.assign || function(t2) {
            for (var o4, e2 = 1, n2 = arguments.length; e2 < n2; e2++)
              for (var i2 in o4 = arguments[e2])
                Object.prototype.hasOwnProperty.call(o4, i2) && (t2[i2] = o4[i2]);
            return t2;
          }).apply(this, arguments);
        };
        Object.defineProperty(o3, "__esModule", { value: true });
        var i = function() {
          function t2(o4, e2) {
            (e2 = n(n({}, t2.defaultOptions), e2 || {})).randomColor && (e2.bgColor = t2.hashToColor(o4, e2.bgStep, e2.bgLen), e2.mainColor = t2.hashToColor(o4, e2.mainStep, e2.mainLen), e2.nanColor = t2.hashToColor(o4, e2.nanLen, e2.nanStep)), this.hash = o4, this.options = e2, this.canvas = document.createElement("CANVAS"), this.ctx = this.canvas.getContext("2d"), this.canvas.width = this.options.size, this.canvas.height = this.options.size, this.hashMatrix = [], this._fillMatrix(o4);
          }
          return t2.prototype.getImage = function() {
            for (var t3 = this.options.size / this.options.cells, o4 = this.options.size / this.options.rows, e2 = 0; e2 < this.options.rows; e2++)
              for (var n2 = 0; n2 < this.options.cells; n2++)
                this._addCell(n2, e2, t3, o4);
            return this.canvas.toDataURL("image/png");
          }, t2.prototype._addCell = function(t3, o4, e2, n2) {
            var i2 = this._getColors(t3, o4);
            i2 || this._addRect(t3, o4, e2, n2, this.options.bgColor), this._addRect(t3, o4, e2, n2, i2);
          }, t2.prototype._addRect = function(t3, o4, e2, n2, i2) {
            this.ctx.fillStyle = i2, this.ctx.beginPath(), this.ctx.rect(t3 * e2 - 0.5, o4 * n2 - 0.5, e2 + 0.5, n2 + 0.5), this.ctx.fill(), this.ctx.closePath();
          }, t2.prototype._getColors = function(t3, o4) {
            return t3 < this.options.cells / 2 ? isNaN(this.hashMatrix[t3][o4]) ? this.options.nanColor : this.hashMatrix[t3][o4] % 2 ? this.options.mainColor : null : this._getColors(this.options.cells - 1 - t3, o4);
          }, t2.prototype._fillMatrix = function(t3) {
            for (var o4 = 0, e2 = 0; e2 < this.options.cells; e2++) {
              this.hashMatrix[e2] = [];
              for (var n2 = 0; n2 < this.options.rows; n2++)
                null == this.hash[o4] && (this.hash += t3), this.hashMatrix[e2][n2] = parseInt(this.hash[o4], 30), o4++;
            }
          }, t2.hashToColor = function(t3, o4, e2) {
            for (var n2 = [], i2 = 0; i2 < 3; i2++)
              n2.push(t3.slice(Math.round(-7 / e2 - 3 * e2 - o4 * i2), t3.length - o4 * i2));
            return "rgb(" + n2.map(function(t4) {
              var o5 = t4.split(""), n3 = [];
              do {
                n3.push(o5.splice(0, e2));
              } while (o5.length);
              return n3.reduce(function(t5, o6) {
                return Math.min(t5 + parseInt(o6, 36), 255);
              }, 0);
            }).join() + ")";
          }, t2.defaultOptions = { size: 90, bgColor: "#bfbfbf", nanColor: "#EFB66C", mainColor: "#1C3D29", rows: 9, cells: 9, randomColor: true, mainStep: 4, nanStep: 5, mainLen: 1.5, nanLen: 3, bgStep: 3, bgLen: 4 }, t2;
        }();
        o3.config = function(t2) {
          i.defaultOptions = n(n({}, i.defaultOptions), t2);
        }, o3.create = function(t2, o4) {
          return new i(t2, o4).getImage();
        };
      }]);
    });
  }
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_isPlaceholder.js
function _isPlaceholder(a) {
  return a != null && typeof a === "object" && a["@@functional/placeholder"] === true;
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_curry1.js
function _curry1(fn2) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn2.apply(this, arguments);
    }
  };
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_curry2.js
function _curry2(fn2) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function(_b) {
          return fn2(a, _b);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function(_a) {
          return fn2(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function(_b) {
          return fn2(a, _b);
        }) : fn2(a, b);
    }
  };
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/add.js
var add = _curry2(function add2(a, b) {
  return Number(a) + Number(b);
});
var add_default = add;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_concat.js
function _concat(set1, set22) {
  set1 = set1 || [];
  set22 = set22 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set22.length;
  var result = [];
  idx = 0;
  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }
  idx = 0;
  while (idx < len2) {
    result[result.length] = set22[idx];
    idx += 1;
  }
  return result;
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_arity.js
function _arity(n, fn2) {
  switch (n) {
    case 0:
      return function() {
        return fn2.apply(this, arguments);
      };
    case 1:
      return function(a0) {
        return fn2.apply(this, arguments);
      };
    case 2:
      return function(a0, a1) {
        return fn2.apply(this, arguments);
      };
    case 3:
      return function(a0, a1, a2) {
        return fn2.apply(this, arguments);
      };
    case 4:
      return function(a0, a1, a2, a3) {
        return fn2.apply(this, arguments);
      };
    case 5:
      return function(a0, a1, a2, a3, a4) {
        return fn2.apply(this, arguments);
      };
    case 6:
      return function(a0, a1, a2, a3, a4, a5) {
        return fn2.apply(this, arguments);
      };
    case 7:
      return function(a0, a1, a2, a3, a4, a5, a6) {
        return fn2.apply(this, arguments);
      };
    case 8:
      return function(a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn2.apply(this, arguments);
      };
    case 9:
      return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn2.apply(this, arguments);
      };
    case 10:
      return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn2.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_curryN.js
function _curryN(length3, received, fn2) {
  return function() {
    var combined = [];
    var argsIdx = 0;
    var left3 = length3;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!_isPlaceholder(result)) {
        left3 -= 1;
      }
      combinedIdx += 1;
    }
    return left3 <= 0 ? fn2.apply(this, combined) : _arity(left3, _curryN(length3, combined, fn2));
  };
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/curryN.js
var curryN = _curry2(function curryN2(length3, fn2) {
  if (length3 === 1) {
    return _curry1(fn2);
  }
  return _arity(length3, _curryN(length3, [], fn2));
});
var curryN_default = curryN;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/addIndex.js
var addIndex = _curry1(function addIndex2(fn2) {
  return curryN_default(fn2.length, function() {
    var idx = 0;
    var origFn = arguments[0];
    var list = arguments[arguments.length - 1];
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = function() {
      var result = origFn.apply(this, _concat(arguments, [idx, list]));
      idx += 1;
      return result;
    };
    return fn2.apply(this, args);
  });
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_curry3.js
function _curry3(fn2) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a) ? f3 : _curry2(function(_b, _c) {
          return fn2(a, _b, _c);
        });
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function(_a, _c) {
          return fn2(_a, b, _c);
        }) : _isPlaceholder(b) ? _curry2(function(_b, _c) {
          return fn2(a, _b, _c);
        }) : _curry1(function(_c) {
          return fn2(a, b, _c);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function(_a, _b) {
          return fn2(_a, _b, c);
        }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function(_a, _c) {
          return fn2(_a, b, _c);
        }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function(_b, _c) {
          return fn2(a, _b, _c);
        }) : _isPlaceholder(a) ? _curry1(function(_a) {
          return fn2(_a, b, c);
        }) : _isPlaceholder(b) ? _curry1(function(_b) {
          return fn2(a, _b, c);
        }) : _isPlaceholder(c) ? _curry1(function(_c) {
          return fn2(a, b, _c);
        }) : fn2(a, b, c);
    }
  };
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/adjust.js
var adjust = _curry3(function adjust2(idx, fn2, list) {
  if (idx >= list.length || idx < -list.length) {
    return list;
  }
  var start2 = idx < 0 ? list.length : 0;
  var _idx = start2 + idx;
  var _list = _concat(list);
  _list[_idx] = fn2(list[_idx]);
  return _list;
});
var adjust_default = adjust;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_isArray.js
var isArray_default = Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === "[object Array]";
};

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_isTransformer.js
function _isTransformer(obj) {
  return obj != null && typeof obj["@@transducer/step"] === "function";
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_dispatchable.js
function _dispatchable(methodNames, xf, fn2) {
  return function() {
    if (arguments.length === 0) {
      return fn2();
    }
    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();
    if (!isArray_default(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === "function") {
          return obj[methodNames[idx]].apply(obj, args);
        }
        idx += 1;
      }
      if (_isTransformer(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }
    return fn2.apply(this, arguments);
  };
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_reduced.js
function _reduced(x) {
  return x && x["@@transducer/reduced"] ? x : {
    "@@transducer/value": x,
    "@@transducer/reduced": true
  };
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_xfBase.js
var xfBase_default = {
  init: function() {
    return this.xf["@@transducer/init"]();
  },
  result: function(result) {
    return this.xf["@@transducer/result"](result);
  }
};

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_xall.js
var XAll = function() {
  function XAll2(f, xf) {
    this.xf = xf;
    this.f = f;
    this.all = true;
  }
  XAll2.prototype["@@transducer/init"] = xfBase_default.init;
  XAll2.prototype["@@transducer/result"] = function(result) {
    if (this.all) {
      result = this.xf["@@transducer/step"](result, true);
    }
    return this.xf["@@transducer/result"](result);
  };
  XAll2.prototype["@@transducer/step"] = function(result, input) {
    if (!this.f(input)) {
      this.all = false;
      result = _reduced(this.xf["@@transducer/step"](result, false));
    }
    return result;
  };
  return XAll2;
}();
var _xall = _curry2(function _xall2(f, xf) {
  return new XAll(f, xf);
});
var xall_default = _xall;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/all.js
var all = _curry2(_dispatchable(["all"], xall_default, function all2(fn2, list) {
  var idx = 0;
  while (idx < list.length) {
    if (!fn2(list[idx])) {
      return false;
    }
    idx += 1;
  }
  return true;
}));
var all_default = all;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/max.js
var max = _curry2(function max2(a, b) {
  return b > a ? b : a;
});
var max_default = max;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_map.js
function _map(fn2, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn2(functor[idx]);
    idx += 1;
  }
  return result;
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_isString.js
function _isString(x) {
  return Object.prototype.toString.call(x) === "[object String]";
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_isArrayLike.js
var _isArrayLike = _curry1(function isArrayLike(x) {
  if (isArray_default(x)) {
    return true;
  }
  if (!x) {
    return false;
  }
  if (typeof x !== "object") {
    return false;
  }
  if (_isString(x)) {
    return false;
  }
  if (x.nodeType === 1) {
    return !!x.length;
  }
  if (x.length === 0) {
    return true;
  }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});
var isArrayLike_default = _isArrayLike;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_xwrap.js
var XWrap = function() {
  function XWrap2(fn2) {
    this.f = fn2;
  }
  XWrap2.prototype["@@transducer/init"] = function() {
    throw new Error("init not implemented on XWrap");
  };
  XWrap2.prototype["@@transducer/result"] = function(acc) {
    return acc;
  };
  XWrap2.prototype["@@transducer/step"] = function(acc, x) {
    return this.f(acc, x);
  };
  return XWrap2;
}();
function _xwrap(fn2) {
  return new XWrap(fn2);
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/bind.js
var bind = _curry2(function bind2(fn2, thisObj) {
  return _arity(fn2.length, function() {
    return fn2.apply(thisObj, arguments);
  });
});
var bind_default = bind;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_reduce.js
function _arrayReduce(xf, acc, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    acc = xf["@@transducer/step"](acc, list[idx]);
    if (acc && acc["@@transducer/reduced"]) {
      acc = acc["@@transducer/value"];
      break;
    }
    idx += 1;
  }
  return xf["@@transducer/result"](acc);
}
function _iterableReduce(xf, acc, iter) {
  var step = iter.next();
  while (!step.done) {
    acc = xf["@@transducer/step"](acc, step.value);
    if (acc && acc["@@transducer/reduced"]) {
      acc = acc["@@transducer/value"];
      break;
    }
    step = iter.next();
  }
  return xf["@@transducer/result"](acc);
}
function _methodReduce(xf, acc, obj, methodName) {
  return xf["@@transducer/result"](obj[methodName](bind_default(xf["@@transducer/step"], xf), acc));
}
var symIterator = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
function _reduce(fn2, acc, list) {
  if (typeof fn2 === "function") {
    fn2 = _xwrap(fn2);
  }
  if (isArrayLike_default(list)) {
    return _arrayReduce(fn2, acc, list);
  }
  if (typeof list["fantasy-land/reduce"] === "function") {
    return _methodReduce(fn2, acc, list, "fantasy-land/reduce");
  }
  if (list[symIterator] != null) {
    return _iterableReduce(fn2, acc, list[symIterator]());
  }
  if (typeof list.next === "function") {
    return _iterableReduce(fn2, acc, list);
  }
  if (typeof list.reduce === "function") {
    return _methodReduce(fn2, acc, list, "reduce");
  }
  throw new TypeError("reduce: list must be array or iterable");
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_xmap.js
var XMap = function() {
  function XMap2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap2.prototype["@@transducer/init"] = xfBase_default.init;
  XMap2.prototype["@@transducer/result"] = xfBase_default.result;
  XMap2.prototype["@@transducer/step"] = function(result, input) {
    return this.xf["@@transducer/step"](result, this.f(input));
  };
  return XMap2;
}();
var _xmap = _curry2(function _xmap2(f, xf) {
  return new XMap(f, xf);
});
var xmap_default = _xmap;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_has.js
function _has(prop3, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop3);
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_isArguments.js
var toString = Object.prototype.toString;
var _isArguments = function() {
  return toString.call(arguments) === "[object Arguments]" ? function _isArguments2(x) {
    return toString.call(x) === "[object Arguments]";
  } : function _isArguments2(x) {
    return _has("callee", x);
  };
}();
var isArguments_default = _isArguments;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/keys.js
var hasEnumBug = !{ toString: null }.propertyIsEnumerable("toString");
var nonEnumerableProps = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
var hasArgsEnumBug = function() {
  "use strict";
  return arguments.propertyIsEnumerable("length");
}();
var contains = function contains2(list, item) {
  var idx = 0;
  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }
    idx += 1;
  }
  return false;
};
var keys = typeof Object.keys === "function" && !hasArgsEnumBug ? _curry1(function keys2(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
}) : _curry1(function keys3(obj) {
  if (Object(obj) !== obj) {
    return [];
  }
  var prop3, nIdx;
  var ks = [];
  var checkArgsLength = hasArgsEnumBug && isArguments_default(obj);
  for (prop3 in obj) {
    if (_has(prop3, obj) && (!checkArgsLength || prop3 !== "length")) {
      ks[ks.length] = prop3;
    }
  }
  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;
    while (nIdx >= 0) {
      prop3 = nonEnumerableProps[nIdx];
      if (_has(prop3, obj) && !contains(ks, prop3)) {
        ks[ks.length] = prop3;
      }
      nIdx -= 1;
    }
  }
  return ks;
});
var keys_default = keys;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/map.js
var map = _curry2(_dispatchable(["fantasy-land/map", "map"], xmap_default, function map2(fn2, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case "[object Function]":
      return curryN_default(functor.length, function() {
        return fn2.call(this, functor.apply(this, arguments));
      });
    case "[object Object]":
      return _reduce(function(acc, key) {
        acc[key] = fn2(functor[key]);
        return acc;
      }, {}, keys_default(functor));
    default:
      return _map(fn2, functor);
  }
}));
var map_default = map;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/path.js
var path = _curry2(function path2(paths, obj) {
  var val = obj;
  var idx = 0;
  while (idx < paths.length) {
    if (val == null) {
      return;
    }
    val = val[paths[idx]];
    idx += 1;
  }
  return val;
});
var path_default = path;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/prop.js
var prop = _curry2(function prop2(p, obj) {
  return path_default([p], obj);
});
var prop_default = prop;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/pluck.js
var pluck = _curry2(function pluck2(p, list) {
  return map_default(prop_default(p), list);
});
var pluck_default = pluck;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/reduce.js
var reduce = _curry3(_reduce);
var reduce_default = reduce;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/allPass.js
var allPass = _curry1(function allPass2(preds) {
  return curryN_default(reduce_default(max_default, 0, pluck_default("length", preds)), function() {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (!preds[idx].apply(this, arguments)) {
        return false;
      }
      idx += 1;
    }
    return true;
  });
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/always.js
var always = _curry1(function always2(val) {
  return function() {
    return val;
  };
});
var always_default = always;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/and.js
var and = _curry2(function and2(a, b) {
  return a && b;
});
var and_default = and;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_xany.js
var XAny = function() {
  function XAny2(f, xf) {
    this.xf = xf;
    this.f = f;
    this.any = false;
  }
  XAny2.prototype["@@transducer/init"] = xfBase_default.init;
  XAny2.prototype["@@transducer/result"] = function(result) {
    if (!this.any) {
      result = this.xf["@@transducer/step"](result, false);
    }
    return this.xf["@@transducer/result"](result);
  };
  XAny2.prototype["@@transducer/step"] = function(result, input) {
    if (this.f(input)) {
      this.any = true;
      result = _reduced(this.xf["@@transducer/step"](result, true));
    }
    return result;
  };
  return XAny2;
}();
var _xany = _curry2(function _xany2(f, xf) {
  return new XAny(f, xf);
});
var xany_default = _xany;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/any.js
var any = _curry2(_dispatchable(["any"], xany_default, function any2(fn2, list) {
  var idx = 0;
  while (idx < list.length) {
    if (fn2(list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}));

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/anyPass.js
var anyPass = _curry1(function anyPass2(preds) {
  return curryN_default(reduce_default(max_default, 0, pluck_default("length", preds)), function() {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (preds[idx].apply(this, arguments)) {
        return true;
      }
      idx += 1;
    }
    return false;
  });
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/ap.js
var ap = _curry2(function ap2(applyF, applyX) {
  return typeof applyX["fantasy-land/ap"] === "function" ? applyX["fantasy-land/ap"](applyF) : typeof applyF.ap === "function" ? applyF.ap(applyX) : typeof applyF === "function" ? function(x) {
    return applyF(x)(applyX(x));
  } : _reduce(function(acc, f) {
    return _concat(acc, map_default(f, applyX));
  }, [], applyF);
});
var ap_default = ap;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_aperture.js
function _aperture(n, list) {
  var idx = 0;
  var limit = list.length - (n - 1);
  var acc = new Array(limit >= 0 ? limit : 0);
  while (idx < limit) {
    acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
    idx += 1;
  }
  return acc;
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_xaperture.js
var XAperture = function() {
  function XAperture2(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XAperture2.prototype["@@transducer/init"] = xfBase_default.init;
  XAperture2.prototype["@@transducer/result"] = function(result) {
    this.acc = null;
    return this.xf["@@transducer/result"](result);
  };
  XAperture2.prototype["@@transducer/step"] = function(result, input) {
    this.store(input);
    return this.full ? this.xf["@@transducer/step"](result, this.getCopy()) : result;
  };
  XAperture2.prototype.store = function(input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };
  XAperture2.prototype.getCopy = function() {
    return _concat(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos));
  };
  return XAperture2;
}();
var _xaperture = _curry2(function _xaperture2(n, xf) {
  return new XAperture(n, xf);
});
var xaperture_default = _xaperture;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/aperture.js
var aperture = _curry2(_dispatchable([], xaperture_default, _aperture));

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/append.js
var append = _curry2(function append2(el, list) {
  return _concat(list, [el]);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/apply.js
var apply = _curry2(function apply2(fn2, args) {
  return fn2.apply(this, args);
});
var apply_default = apply;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/values.js
var values = _curry1(function values2(obj) {
  var props4 = keys_default(obj);
  var len = props4.length;
  var vals = [];
  var idx = 0;
  while (idx < len) {
    vals[idx] = obj[props4[idx]];
    idx += 1;
  }
  return vals;
});
var values_default = values;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/applySpec.js
function mapValues(fn2, obj) {
  return keys_default(obj).reduce(function(acc, key) {
    acc[key] = fn2(obj[key]);
    return acc;
  }, {});
}
var applySpec = _curry1(function applySpec2(spec) {
  spec = mapValues(function(v) {
    return typeof v == "function" ? v : applySpec2(v);
  }, spec);
  return curryN_default(reduce_default(max_default, 0, pluck_default("length", values_default(spec))), function() {
    var args = arguments;
    return mapValues(function(f) {
      return apply_default(f, args);
    }, spec);
  });
});
var applySpec_default = applySpec;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/applyTo.js
var applyTo = _curry2(function applyTo2(x, f) {
  return f(x);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/ascend.js
var ascend = _curry3(function ascend2(fn2, a, b) {
  var aa = fn2(a);
  var bb = fn2(b);
  return aa < bb ? -1 : aa > bb ? 1 : 0;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/assoc.js
var assoc = _curry3(function assoc2(prop3, val, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop3] = val;
  return result;
});
var assoc_default = assoc;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_isInteger.js
var isInteger_default = Number.isInteger || function _isInteger(n) {
  return n << 0 === n;
};

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/isNil.js
var isNil = _curry1(function isNil2(x) {
  return x == null;
});
var isNil_default = isNil;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/assocPath.js
var assocPath = _curry3(function assocPath2(path3, val, obj) {
  if (path3.length === 0) {
    return val;
  }
  var idx = path3[0];
  if (path3.length > 1) {
    var nextObj = !isNil_default(obj) && _has(idx, obj) ? obj[idx] : isInteger_default(path3[1]) ? [] : {};
    val = assocPath2(Array.prototype.slice.call(path3, 1), val, nextObj);
  }
  if (isInteger_default(idx) && isArray_default(obj)) {
    var arr = [].concat(obj);
    arr[idx] = val;
    return arr;
  } else {
    return assoc_default(idx, val, obj);
  }
});
var assocPath_default = assocPath;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/nAry.js
var nAry = _curry2(function nAry2(n, fn2) {
  switch (n) {
    case 0:
      return function() {
        return fn2.call(this);
      };
    case 1:
      return function(a0) {
        return fn2.call(this, a0);
      };
    case 2:
      return function(a0, a1) {
        return fn2.call(this, a0, a1);
      };
    case 3:
      return function(a0, a1, a2) {
        return fn2.call(this, a0, a1, a2);
      };
    case 4:
      return function(a0, a1, a2, a3) {
        return fn2.call(this, a0, a1, a2, a3);
      };
    case 5:
      return function(a0, a1, a2, a3, a4) {
        return fn2.call(this, a0, a1, a2, a3, a4);
      };
    case 6:
      return function(a0, a1, a2, a3, a4, a5) {
        return fn2.call(this, a0, a1, a2, a3, a4, a5);
      };
    case 7:
      return function(a0, a1, a2, a3, a4, a5, a6) {
        return fn2.call(this, a0, a1, a2, a3, a4, a5, a6);
      };
    case 8:
      return function(a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn2.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
      };
    case 9:
      return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn2.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
      };
    case 10:
      return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn2.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      };
    default:
      throw new Error("First argument to nAry must be a non-negative integer no greater than ten");
  }
});
var nAry_default = nAry;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/binary.js
var binary = _curry1(function binary2(fn2) {
  return nAry_default(2, fn2);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_isFunction.js
function _isFunction(x) {
  return Object.prototype.toString.call(x) === "[object Function]";
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/liftN.js
var liftN = _curry2(function liftN2(arity, fn2) {
  var lifted = curryN_default(arity, fn2);
  return curryN_default(arity, function() {
    return _reduce(ap_default, map_default(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
});
var liftN_default = liftN;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/lift.js
var lift = _curry1(function lift2(fn2) {
  return liftN_default(fn2.length, fn2);
});
var lift_default = lift;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/both.js
var both = _curry2(function both2(f, g) {
  return _isFunction(f) ? function _both() {
    return f.apply(this, arguments) && g.apply(this, arguments);
  } : lift_default(and_default)(f, g);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/curry.js
var curry = _curry1(function curry2(fn2) {
  return curryN_default(fn2.length, fn2);
});
var curry_default = curry;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/call.js
var call = curry_default(function call2(fn2) {
  return fn2.apply(this, Array.prototype.slice.call(arguments, 1));
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_makeFlat.js
function _makeFlat(recursive) {
  return function flatt(list) {
    var value, jlen, j;
    var result = [];
    var idx = 0;
    var ilen = list.length;
    while (idx < ilen) {
      if (isArrayLike_default(list[idx])) {
        value = recursive ? flatt(list[idx]) : list[idx];
        j = 0;
        jlen = value.length;
        while (j < jlen) {
          result[result.length] = value[j];
          j += 1;
        }
      } else {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
  };
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_forceReduced.js
function _forceReduced(x) {
  return {
    "@@transducer/value": x,
    "@@transducer/reduced": true
  };
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_flatCat.js
var preservingReduced = function(xf) {
  return {
    "@@transducer/init": xfBase_default.init,
    "@@transducer/result": function(result) {
      return xf["@@transducer/result"](result);
    },
    "@@transducer/step": function(result, input) {
      var ret = xf["@@transducer/step"](result, input);
      return ret["@@transducer/reduced"] ? _forceReduced(ret) : ret;
    }
  };
};
var _flatCat = function _xcat(xf) {
  var rxf = preservingReduced(xf);
  return {
    "@@transducer/init": xfBase_default.init,
    "@@transducer/result": function(result) {
      return rxf["@@transducer/result"](result);
    },
    "@@transducer/step": function(result, input) {
      return !isArrayLike_default(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
    }
  };
};
var flatCat_default = _flatCat;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_xchain.js
var _xchain = _curry2(function _xchain2(f, xf) {
  return map_default(f, flatCat_default(xf));
});
var xchain_default = _xchain;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/chain.js
var chain = _curry2(_dispatchable(["fantasy-land/chain", "chain"], xchain_default, function chain2(fn2, monad) {
  if (typeof monad === "function") {
    return function(x) {
      return fn2(monad(x))(x);
    };
  }
  return _makeFlat(false)(map_default(fn2, monad));
}));
var chain_default = chain;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/clamp.js
var clamp = _curry3(function clamp2(min4, max4, value) {
  if (min4 > max4) {
    throw new Error("min must not be greater than max in clamp(min, max, value)");
  }
  return value < min4 ? min4 : value > max4 ? max4 : value;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_cloneRegExp.js
function _cloneRegExp(pattern) {
  return new RegExp(pattern.source, (pattern.global ? "g" : "") + (pattern.ignoreCase ? "i" : "") + (pattern.multiline ? "m" : "") + (pattern.sticky ? "y" : "") + (pattern.unicode ? "u" : ""));
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/type.js
var type = _curry1(function type2(val) {
  return val === null ? "Null" : val === void 0 ? "Undefined" : Object.prototype.toString.call(val).slice(8, -1);
});
var type_default = type;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_clone.js
function _clone(value, refFrom, refTo, deep) {
  var copy2 = function copy3(copiedValue) {
    var len = refFrom.length;
    var idx = 0;
    while (idx < len) {
      if (value === refFrom[idx]) {
        return refTo[idx];
      }
      idx += 1;
    }
    refFrom[idx + 1] = value;
    refTo[idx + 1] = copiedValue;
    for (var key in value) {
      copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
    }
    return copiedValue;
  };
  switch (type_default(value)) {
    case "Object":
      return copy2({});
    case "Array":
      return copy2([]);
    case "Date":
      return new Date(value.valueOf());
    case "RegExp":
      return _cloneRegExp(value);
    default:
      return value;
  }
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/clone.js
var clone = _curry1(function clone2(value) {
  return value != null && typeof value.clone === "function" ? value.clone() : _clone(value, [], [], true);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/comparator.js
var comparator = _curry1(function comparator2(pred) {
  return function(a, b) {
    return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
  };
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/not.js
var not = _curry1(function not2(a) {
  return !a;
});
var not_default = not;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/complement.js
var complement = lift_default(not_default);

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_pipe.js
function _pipe(f, g) {
  return function() {
    return g.call(this, f.apply(this, arguments));
  };
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_checkForMethod.js
function _checkForMethod(methodname, fn2) {
  return function() {
    var length3 = arguments.length;
    if (length3 === 0) {
      return fn2();
    }
    var obj = arguments[length3 - 1];
    return isArray_default(obj) || typeof obj[methodname] !== "function" ? fn2.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length3 - 1));
  };
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/slice.js
var slice = _curry3(_checkForMethod("slice", function slice2(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));
var slice_default = slice;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/tail.js
var tail = _curry1(_checkForMethod("tail", slice_default(1, Infinity)));
var tail_default = tail;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/pipe.js
function pipe() {
  if (arguments.length === 0) {
    throw new Error("pipe requires at least one argument");
  }
  return _arity(arguments[0].length, reduce_default(_pipe, arguments[0], tail_default(arguments)));
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/reverse.js
var reverse = _curry1(function reverse2(list) {
  return _isString(list) ? list.split("").reverse().join("") : Array.prototype.slice.call(list, 0).reverse();
});
var reverse_default = reverse;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/compose.js
function compose() {
  if (arguments.length === 0) {
    throw new Error("compose requires at least one argument");
  }
  return pipe.apply(this, reverse_default(arguments));
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/nth.js
var nth = _curry2(function nth2(offset2, list) {
  var idx = offset2 < 0 ? list.length + offset2 : offset2;
  return _isString(list) ? list.charAt(idx) : list[idx];
});
var nth_default = nth;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/head.js
var head = nth_default(0);
var head_default = head;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_identity.js
function _identity(x) {
  return x;
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/identity.js
var identity = _curry1(_identity);
var identity_default = identity;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/pipeWith.js
var pipeWith = _curry2(function pipeWith2(xf, list) {
  if (list.length <= 0) {
    return identity_default;
  }
  var headList = head_default(list);
  var tailList = tail_default(list);
  return _arity(headList.length, function() {
    return _reduce(function(result, f) {
      return xf.call(this, f, result);
    }, headList.apply(this, arguments), tailList);
  });
});
var pipeWith_default = pipeWith;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/composeWith.js
var composeWith = _curry2(function composeWith2(xf, list) {
  return pipeWith_default.apply(this, [xf, reverse_default(list)]);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_arrayFromIterator.js
function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_includesWith.js
function _includesWith(pred, x, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_functionName.js
function _functionName(f) {
  var match3 = String(f).match(/^function (\w*)/);
  return match3 == null ? "" : match3[1];
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_objectIs.js
function _objectIs(a, b) {
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  } else {
    return a !== a && b !== b;
  }
}
var objectIs_default = typeof Object.is === "function" ? Object.is : _objectIs;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_equals.js
function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = _arrayFromIterator(aIterator);
  var b = _arrayFromIterator(bIterator);
  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  }
  return !_includesWith(function(b2, aItem) {
    return !_includesWith(eq, aItem, b2);
  }, b, a);
}
function _equals(a, b, stackA, stackB) {
  if (objectIs_default(a, b)) {
    return true;
  }
  var typeA = type_default(a);
  if (typeA !== type_default(b)) {
    return false;
  }
  if (a == null || b == null) {
    return false;
  }
  if (typeof a["fantasy-land/equals"] === "function" || typeof b["fantasy-land/equals"] === "function") {
    return typeof a["fantasy-land/equals"] === "function" && a["fantasy-land/equals"](b) && typeof b["fantasy-land/equals"] === "function" && b["fantasy-land/equals"](a);
  }
  if (typeof a.equals === "function" || typeof b.equals === "function") {
    return typeof a.equals === "function" && a.equals(b) && typeof b.equals === "function" && b.equals(a);
  }
  switch (typeA) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof a.constructor === "function" && _functionName(a.constructor) === "Promise") {
        return a === b;
      }
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof a === typeof b && objectIs_default(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case "Date":
      if (!objectIs_default(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case "Error":
      return a.name === b.name && a.message === b.message;
    case "RegExp":
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }
      break;
  }
  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }
  switch (typeA) {
    case "Map":
      if (a.size !== b.size) {
        return false;
      }
      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
    case "Set":
      if (a.size !== b.size) {
        return false;
      }
      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
    case "Arguments":
    case "Array":
    case "Object":
    case "Boolean":
    case "Number":
    case "String":
    case "Date":
    case "Error":
    case "RegExp":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "ArrayBuffer":
      break;
    default:
      return false;
  }
  var keysA = keys_default(a);
  if (keysA.length !== keys_default(b).length) {
    return false;
  }
  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);
  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }
    idx -= 1;
  }
  return true;
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/equals.js
var equals = _curry2(function equals2(a, b) {
  return _equals(a, b, [], []);
});
var equals_default = equals;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_indexOf.js
function _indexOf(list, a, idx) {
  var inf, item;
  if (typeof list.indexOf === "function") {
    switch (typeof a) {
      case "number":
        if (a === 0) {
          inf = 1 / a;
          while (idx < list.length) {
            item = list[idx];
            if (item === 0 && 1 / item === inf) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        } else if (a !== a) {
          while (idx < list.length) {
            item = list[idx];
            if (typeof item === "number" && item !== item) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }
        return list.indexOf(a, idx);
      case "string":
      case "boolean":
      case "function":
      case "undefined":
        return list.indexOf(a, idx);
      case "object":
        if (a === null) {
          return list.indexOf(a, idx);
        }
    }
  }
  while (idx < list.length) {
    if (equals_default(list[idx], a)) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_includes.js
function _includes(a, list) {
  return _indexOf(list, a, 0) >= 0;
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_quote.js
function _quote(s) {
  var escaped = s.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
  return '"' + escaped.replace(/"/g, '\\"') + '"';
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_toISOString.js
var pad = function pad2(n) {
  return (n < 10 ? "0" : "") + n;
};
var _toISOString = typeof Date.prototype.toISOString === "function" ? function _toISOString2(d) {
  return d.toISOString();
} : function _toISOString3(d) {
  return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate()) + "T" + pad(d.getUTCHours()) + ":" + pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds()) + "." + (d.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
};
var toISOString_default = _toISOString;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_complement.js
function _complement(f) {
  return function() {
    return !f.apply(this, arguments);
  };
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_filter.js
function _filter(fn2, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  while (idx < len) {
    if (fn2(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }
  return result;
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_isObject.js
function _isObject(x) {
  return Object.prototype.toString.call(x) === "[object Object]";
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_xfilter.js
var XFilter = function() {
  function XFilter2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter2.prototype["@@transducer/init"] = xfBase_default.init;
  XFilter2.prototype["@@transducer/result"] = xfBase_default.result;
  XFilter2.prototype["@@transducer/step"] = function(result, input) {
    return this.f(input) ? this.xf["@@transducer/step"](result, input) : result;
  };
  return XFilter2;
}();
var _xfilter = _curry2(function _xfilter2(f, xf) {
  return new XFilter(f, xf);
});
var xfilter_default = _xfilter;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/filter.js
var filter = _curry2(_dispatchable(["filter"], xfilter_default, function(pred, filterable) {
  return _isObject(filterable) ? _reduce(function(acc, key) {
    if (pred(filterable[key])) {
      acc[key] = filterable[key];
    }
    return acc;
  }, {}, keys_default(filterable)) : (
    // else
    _filter(pred, filterable)
  );
}));
var filter_default = filter;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/reject.js
var reject = _curry2(function reject2(pred, filterable) {
  return filter_default(_complement(pred), filterable);
});
var reject_default = reject;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_toString.js
function _toString(x, seen) {
  var recur = function recur2(y) {
    var xs = seen.concat([x]);
    return _includes(y, xs) ? "<Circular>" : _toString(y, xs);
  };
  var mapPairs = function(obj, keys4) {
    return _map(function(k) {
      return _quote(k) + ": " + recur(obj[k]);
    }, keys4.slice().sort());
  };
  switch (Object.prototype.toString.call(x)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + _map(recur, x).join(", ") + "))";
    case "[object Array]":
      return "[" + _map(recur, x).concat(mapPairs(x, reject_default(function(k) {
        return /^\d+$/.test(k);
      }, keys_default(x)))).join(", ") + "]";
    case "[object Boolean]":
      return typeof x === "object" ? "new Boolean(" + recur(x.valueOf()) + ")" : x.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(x.valueOf()) ? recur(NaN) : _quote(toISOString_default(x))) + ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof x === "object" ? "new Number(" + recur(x.valueOf()) + ")" : 1 / x === -Infinity ? "-0" : x.toString(10);
    case "[object String]":
      return typeof x === "object" ? "new String(" + recur(x.valueOf()) + ")" : _quote(x);
    case "[object Undefined]":
      return "undefined";
    default:
      if (typeof x.toString === "function") {
        var repr = x.toString();
        if (repr !== "[object Object]") {
          return repr;
        }
      }
      return "{" + mapPairs(x, keys_default(x)).join(", ") + "}";
  }
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/toString.js
var toString2 = _curry1(function toString3(val) {
  return _toString(val, []);
});
var toString_default = toString2;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/concat.js
var concat = _curry2(function concat2(a, b) {
  if (isArray_default(a)) {
    if (isArray_default(b)) {
      return a.concat(b);
    }
    throw new TypeError(toString_default(b) + " is not an array");
  }
  if (_isString(a)) {
    if (_isString(b)) {
      return a + b;
    }
    throw new TypeError(toString_default(b) + " is not a string");
  }
  if (a != null && _isFunction(a["fantasy-land/concat"])) {
    return a["fantasy-land/concat"](b);
  }
  if (a != null && _isFunction(a.concat)) {
    return a.concat(b);
  }
  throw new TypeError(toString_default(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
});
var concat_default = concat;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/cond.js
var cond = _curry1(function cond2(pairs) {
  var arity = reduce_default(max_default, 0, map_default(function(pair3) {
    return pair3[0].length;
  }, pairs));
  return _arity(arity, function() {
    var idx = 0;
    while (idx < pairs.length) {
      if (pairs[idx][0].apply(this, arguments)) {
        return pairs[idx][1].apply(this, arguments);
      }
      idx += 1;
    }
  });
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/constructN.js
var constructN = _curry2(function constructN2(n, Fn) {
  if (n > 10) {
    throw new Error("Constructor with greater than ten arguments");
  }
  if (n === 0) {
    return function() {
      return new Fn();
    };
  }
  return curry_default(nAry_default(n, function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    switch (arguments.length) {
      case 1:
        return new Fn($0);
      case 2:
        return new Fn($0, $1);
      case 3:
        return new Fn($0, $1, $2);
      case 4:
        return new Fn($0, $1, $2, $3);
      case 5:
        return new Fn($0, $1, $2, $3, $4);
      case 6:
        return new Fn($0, $1, $2, $3, $4, $5);
      case 7:
        return new Fn($0, $1, $2, $3, $4, $5, $6);
      case 8:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
      case 9:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
      case 10:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
    }
  }));
});
var constructN_default = constructN;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/construct.js
var construct = _curry1(function construct2(Fn) {
  return constructN_default(Fn.length, Fn);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/contains.js
var contains3 = _curry2(_includes);
var contains_default = contains3;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/converge.js
var converge = _curry2(function converge2(after, fns) {
  return curryN_default(reduce_default(max_default, 0, pluck_default("length", fns)), function() {
    var args = arguments;
    var context = this;
    return after.apply(context, _map(function(fn2) {
      return fn2.apply(context, args);
    }, fns));
  });
});
var converge_default = converge;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_xreduceBy.js
var XReduceBy = function() {
  function XReduceBy2(valueFn, valueAcc, keyFn, xf) {
    this.valueFn = valueFn;
    this.valueAcc = valueAcc;
    this.keyFn = keyFn;
    this.xf = xf;
    this.inputs = {};
  }
  XReduceBy2.prototype["@@transducer/init"] = xfBase_default.init;
  XReduceBy2.prototype["@@transducer/result"] = function(result) {
    var key;
    for (key in this.inputs) {
      if (_has(key, this.inputs)) {
        result = this.xf["@@transducer/step"](result, this.inputs[key]);
        if (result["@@transducer/reduced"]) {
          result = result["@@transducer/value"];
          break;
        }
      }
    }
    this.inputs = null;
    return this.xf["@@transducer/result"](result);
  };
  XReduceBy2.prototype["@@transducer/step"] = function(result, input) {
    var key = this.keyFn(input);
    this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
    this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
    return result;
  };
  return XReduceBy2;
}();
var _xreduceBy = _curryN(4, [], function _xreduceBy2(valueFn, valueAcc, keyFn, xf) {
  return new XReduceBy(valueFn, valueAcc, keyFn, xf);
});
var xreduceBy_default = _xreduceBy;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/reduceBy.js
var reduceBy = _curryN(4, [], _dispatchable([], xreduceBy_default, function reduceBy2(valueFn, valueAcc, keyFn, list) {
  return _reduce(function(acc, elt) {
    var key = keyFn(elt);
    acc[key] = valueFn(_has(key, acc) ? acc[key] : valueAcc, elt);
    return acc;
  }, {}, list);
}));
var reduceBy_default = reduceBy;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/countBy.js
var countBy = reduceBy_default(function(acc, elem) {
  return acc + 1;
}, 0);

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/dec.js
var dec = add_default(-1);

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/defaultTo.js
var defaultTo = _curry2(function defaultTo2(d, v) {
  return v == null || v !== v ? d : v;
});
var defaultTo_default = defaultTo;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/descend.js
var descend = _curry3(function descend2(fn2, a, b) {
  var aa = fn2(a);
  var bb = fn2(b);
  return aa > bb ? -1 : aa < bb ? 1 : 0;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_Set.js
var _Set = function() {
  function _Set2() {
    this._nativeSet = typeof Set === "function" ? /* @__PURE__ */ new Set() : null;
    this._items = {};
  }
  _Set2.prototype.add = function(item) {
    return !hasOrAdd(item, true, this);
  };
  _Set2.prototype.has = function(item) {
    return hasOrAdd(item, false, this);
  };
  return _Set2;
}();
function hasOrAdd(item, shouldAdd, set3) {
  var type3 = typeof item;
  var prevSize, newSize;
  switch (type3) {
    case "string":
    case "number":
      if (item === 0 && 1 / item === -Infinity) {
        if (set3._items["-0"]) {
          return true;
        } else {
          if (shouldAdd) {
            set3._items["-0"] = true;
          }
          return false;
        }
      }
      if (set3._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set3._nativeSet.size;
          set3._nativeSet.add(item);
          newSize = set3._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set3._nativeSet.has(item);
        }
      } else {
        if (!(type3 in set3._items)) {
          if (shouldAdd) {
            set3._items[type3] = {};
            set3._items[type3][item] = true;
          }
          return false;
        } else if (item in set3._items[type3]) {
          return true;
        } else {
          if (shouldAdd) {
            set3._items[type3][item] = true;
          }
          return false;
        }
      }
    case "boolean":
      if (type3 in set3._items) {
        var bIdx = item ? 1 : 0;
        if (set3._items[type3][bIdx]) {
          return true;
        } else {
          if (shouldAdd) {
            set3._items[type3][bIdx] = true;
          }
          return false;
        }
      } else {
        if (shouldAdd) {
          set3._items[type3] = item ? [false, true] : [true, false];
        }
        return false;
      }
    case "function":
      if (set3._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set3._nativeSet.size;
          set3._nativeSet.add(item);
          newSize = set3._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set3._nativeSet.has(item);
        }
      } else {
        if (!(type3 in set3._items)) {
          if (shouldAdd) {
            set3._items[type3] = [item];
          }
          return false;
        }
        if (!_includes(item, set3._items[type3])) {
          if (shouldAdd) {
            set3._items[type3].push(item);
          }
          return false;
        }
        return true;
      }
    case "undefined":
      if (set3._items[type3]) {
        return true;
      } else {
        if (shouldAdd) {
          set3._items[type3] = true;
        }
        return false;
      }
    case "object":
      if (item === null) {
        if (!set3._items["null"]) {
          if (shouldAdd) {
            set3._items["null"] = true;
          }
          return false;
        }
        return true;
      }
    default:
      type3 = Object.prototype.toString.call(item);
      if (!(type3 in set3._items)) {
        if (shouldAdd) {
          set3._items[type3] = [item];
        }
        return false;
      }
      if (!_includes(item, set3._items[type3])) {
        if (shouldAdd) {
          set3._items[type3].push(item);
        }
        return false;
      }
      return true;
  }
}
var Set_default = _Set;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/difference.js
var difference = _curry2(function difference2(first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  var secondLen = second.length;
  var toFilterOut = new Set_default();
  for (var i = 0; i < secondLen; i += 1) {
    toFilterOut.add(second[i]);
  }
  while (idx < firstLen) {
    if (toFilterOut.add(first[idx])) {
      out[out.length] = first[idx];
    }
    idx += 1;
  }
  return out;
});
var difference_default = difference;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/differenceWith.js
var differenceWith = _curry3(function differenceWith2(pred, first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!_includesWith(pred, first[idx], second) && !_includesWith(pred, first[idx], out)) {
      out.push(first[idx]);
    }
    idx += 1;
  }
  return out;
});
var differenceWith_default = differenceWith;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/dissoc.js
var dissoc = _curry2(function dissoc2(prop3, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  delete result[prop3];
  return result;
});
var dissoc_default = dissoc;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/remove.js
var remove = _curry3(function remove2(start2, count, list) {
  var result = Array.prototype.slice.call(list, 0);
  result.splice(start2, count);
  return result;
});
var remove_default = remove;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/update.js
var update = _curry3(function update2(idx, x, list) {
  return adjust_default(idx, always_default(x), list);
});
var update_default = update;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/dissocPath.js
var dissocPath = _curry2(function dissocPath2(path3, obj) {
  switch (path3.length) {
    case 0:
      return obj;
    case 1:
      return isInteger_default(path3[0]) && isArray_default(obj) ? remove_default(path3[0], 1, obj) : dissoc_default(path3[0], obj);
    default:
      var head2 = path3[0];
      var tail2 = Array.prototype.slice.call(path3, 1);
      if (obj[head2] == null) {
        return obj;
      } else if (isInteger_default(head2) && isArray_default(obj)) {
        return update_default(head2, dissocPath2(tail2, obj[head2]), obj);
      } else {
        return assoc_default(head2, dissocPath2(tail2, obj[head2]), obj);
      }
  }
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/divide.js
var divide = _curry2(function divide2(a, b) {
  return a / b;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_xdrop.js
var XDrop = function() {
  function XDrop2(n, xf) {
    this.xf = xf;
    this.n = n;
  }
  XDrop2.prototype["@@transducer/init"] = xfBase_default.init;
  XDrop2.prototype["@@transducer/result"] = xfBase_default.result;
  XDrop2.prototype["@@transducer/step"] = function(result, input) {
    if (this.n > 0) {
      this.n -= 1;
      return result;
    }
    return this.xf["@@transducer/step"](result, input);
  };
  return XDrop2;
}();
var _xdrop = _curry2(function _xdrop2(n, xf) {
  return new XDrop(n, xf);
});
var xdrop_default = _xdrop;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/drop.js
var drop = _curry2(_dispatchable(["drop"], xdrop_default, function drop2(n, xs) {
  return slice_default(Math.max(0, n), Infinity, xs);
}));
var drop_default = drop;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_xtake.js
var XTake = function() {
  function XTake2(n, xf) {
    this.xf = xf;
    this.n = n;
    this.i = 0;
  }
  XTake2.prototype["@@transducer/init"] = xfBase_default.init;
  XTake2.prototype["@@transducer/result"] = xfBase_default.result;
  XTake2.prototype["@@transducer/step"] = function(result, input) {
    this.i += 1;
    var ret = this.n === 0 ? result : this.xf["@@transducer/step"](result, input);
    return this.n >= 0 && this.i >= this.n ? _reduced(ret) : ret;
  };
  return XTake2;
}();
var _xtake = _curry2(function _xtake2(n, xf) {
  return new XTake(n, xf);
});
var xtake_default = _xtake;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/take.js
var take = _curry2(_dispatchable(["take"], xtake_default, function take2(n, xs) {
  return slice_default(0, n < 0 ? Infinity : n, xs);
}));
var take_default = take;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_dropLast.js
function dropLast(n, xs) {
  return take_default(n < xs.length ? xs.length - n : 0, xs);
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_xdropLast.js
var XDropLast = function() {
  function XDropLast2(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XDropLast2.prototype["@@transducer/init"] = xfBase_default.init;
  XDropLast2.prototype["@@transducer/result"] = function(result) {
    this.acc = null;
    return this.xf["@@transducer/result"](result);
  };
  XDropLast2.prototype["@@transducer/step"] = function(result, input) {
    if (this.full) {
      result = this.xf["@@transducer/step"](result, this.acc[this.pos]);
    }
    this.store(input);
    return result;
  };
  XDropLast2.prototype.store = function(input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };
  return XDropLast2;
}();
var _xdropLast = _curry2(function _xdropLast2(n, xf) {
  return new XDropLast(n, xf);
});
var xdropLast_default = _xdropLast;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/dropLast.js
var dropLast2 = _curry2(_dispatchable([], xdropLast_default, dropLast));

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_dropLastWhile.js
function dropLastWhile(pred, xs) {
  var idx = xs.length - 1;
  while (idx >= 0 && pred(xs[idx])) {
    idx -= 1;
  }
  return slice_default(0, idx + 1, xs);
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_xdropLastWhile.js
var XDropLastWhile = function() {
  function XDropLastWhile2(fn2, xf) {
    this.f = fn2;
    this.retained = [];
    this.xf = xf;
  }
  XDropLastWhile2.prototype["@@transducer/init"] = xfBase_default.init;
  XDropLastWhile2.prototype["@@transducer/result"] = function(result) {
    this.retained = null;
    return this.xf["@@transducer/result"](result);
  };
  XDropLastWhile2.prototype["@@transducer/step"] = function(result, input) {
    return this.f(input) ? this.retain(result, input) : this.flush(result, input);
  };
  XDropLastWhile2.prototype.flush = function(result, input) {
    result = _reduce(this.xf["@@transducer/step"], result, this.retained);
    this.retained = [];
    return this.xf["@@transducer/step"](result, input);
  };
  XDropLastWhile2.prototype.retain = function(result, input) {
    this.retained.push(input);
    return result;
  };
  return XDropLastWhile2;
}();
var _xdropLastWhile = _curry2(function _xdropLastWhile2(fn2, xf) {
  return new XDropLastWhile(fn2, xf);
});
var xdropLastWhile_default = _xdropLastWhile;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/dropLastWhile.js
var dropLastWhile2 = _curry2(_dispatchable([], xdropLastWhile_default, dropLastWhile));

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_xdropRepeatsWith.js
var XDropRepeatsWith = function() {
  function XDropRepeatsWith2(pred, xf) {
    this.xf = xf;
    this.pred = pred;
    this.lastValue = void 0;
    this.seenFirstValue = false;
  }
  XDropRepeatsWith2.prototype["@@transducer/init"] = xfBase_default.init;
  XDropRepeatsWith2.prototype["@@transducer/result"] = xfBase_default.result;
  XDropRepeatsWith2.prototype["@@transducer/step"] = function(result, input) {
    var sameAsLast = false;
    if (!this.seenFirstValue) {
      this.seenFirstValue = true;
    } else if (this.pred(this.lastValue, input)) {
      sameAsLast = true;
    }
    this.lastValue = input;
    return sameAsLast ? result : this.xf["@@transducer/step"](result, input);
  };
  return XDropRepeatsWith2;
}();
var _xdropRepeatsWith = _curry2(function _xdropRepeatsWith2(pred, xf) {
  return new XDropRepeatsWith(pred, xf);
});
var xdropRepeatsWith_default = _xdropRepeatsWith;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/last.js
var last = nth_default(-1);
var last_default = last;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/dropRepeatsWith.js
var dropRepeatsWith = _curry2(_dispatchable([], xdropRepeatsWith_default, function dropRepeatsWith2(pred, list) {
  var result = [];
  var idx = 1;
  var len = list.length;
  if (len !== 0) {
    result[0] = list[0];
    while (idx < len) {
      if (!pred(last_default(result), list[idx])) {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
  }
  return result;
}));
var dropRepeatsWith_default = dropRepeatsWith;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/dropRepeats.js
var dropRepeats = _curry1(_dispatchable([], xdropRepeatsWith_default(equals_default), dropRepeatsWith_default(equals_default)));

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_xdropWhile.js
var XDropWhile = function() {
  function XDropWhile2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XDropWhile2.prototype["@@transducer/init"] = xfBase_default.init;
  XDropWhile2.prototype["@@transducer/result"] = xfBase_default.result;
  XDropWhile2.prototype["@@transducer/step"] = function(result, input) {
    if (this.f) {
      if (this.f(input)) {
        return result;
      }
      this.f = null;
    }
    return this.xf["@@transducer/step"](result, input);
  };
  return XDropWhile2;
}();
var _xdropWhile = _curry2(function _xdropWhile2(f, xf) {
  return new XDropWhile(f, xf);
});
var xdropWhile_default = _xdropWhile;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/dropWhile.js
var dropWhile = _curry2(_dispatchable(["dropWhile"], xdropWhile_default, function dropWhile2(pred, xs) {
  var idx = 0;
  var len = xs.length;
  while (idx < len && pred(xs[idx])) {
    idx += 1;
  }
  return slice_default(idx, Infinity, xs);
}));

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/or.js
var or = _curry2(function or2(a, b) {
  return a || b;
});
var or_default = or;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/either.js
var either = _curry2(function either2(f, g) {
  return _isFunction(f) ? function _either() {
    return f.apply(this, arguments) || g.apply(this, arguments);
  } : lift_default(or_default)(f, g);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/empty.js
var empty = _curry1(function empty2(x) {
  return x != null && typeof x["fantasy-land/empty"] === "function" ? x["fantasy-land/empty"]() : x != null && x.constructor != null && typeof x.constructor["fantasy-land/empty"] === "function" ? x.constructor["fantasy-land/empty"]() : x != null && typeof x.empty === "function" ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === "function" ? x.constructor.empty() : isArray_default(x) ? [] : _isString(x) ? "" : _isObject(x) ? {} : isArguments_default(x) ? function() {
    return arguments;
  }() : void 0;
});
var empty_default = empty;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/takeLast.js
var takeLast = _curry2(function takeLast2(n, xs) {
  return drop_default(n >= 0 ? xs.length - n : 0, xs);
});
var takeLast_default = takeLast;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/endsWith.js
var endsWith = _curry2(function(suffix, list) {
  return equals_default(takeLast_default(suffix.length, list), suffix);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/eqBy.js
var eqBy = _curry3(function eqBy2(f, x, y) {
  return equals_default(f(x), f(y));
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/eqProps.js
var eqProps = _curry3(function eqProps2(prop3, obj1, obj2) {
  return equals_default(obj1[prop3], obj2[prop3]);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/evolve.js
var evolve = _curry2(function evolve2(transformations, object) {
  var result = object instanceof Array ? [] : {};
  var transformation, key, type3;
  for (key in object) {
    transformation = transformations[key];
    type3 = typeof transformation;
    result[key] = type3 === "function" ? transformation(object[key]) : transformation && type3 === "object" ? evolve2(transformation, object[key]) : object[key];
  }
  return result;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_xfind.js
var XFind = function() {
  function XFind2(f, xf) {
    this.xf = xf;
    this.f = f;
    this.found = false;
  }
  XFind2.prototype["@@transducer/init"] = xfBase_default.init;
  XFind2.prototype["@@transducer/result"] = function(result) {
    if (!this.found) {
      result = this.xf["@@transducer/step"](result, void 0);
    }
    return this.xf["@@transducer/result"](result);
  };
  XFind2.prototype["@@transducer/step"] = function(result, input) {
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf["@@transducer/step"](result, input));
    }
    return result;
  };
  return XFind2;
}();
var _xfind = _curry2(function _xfind2(f, xf) {
  return new XFind(f, xf);
});
var xfind_default = _xfind;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/find.js
var find = _curry2(_dispatchable(["find"], xfind_default, function find2(fn2, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn2(list[idx])) {
      return list[idx];
    }
    idx += 1;
  }
}));

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_xfindIndex.js
var XFindIndex = function() {
  function XFindIndex2(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.found = false;
  }
  XFindIndex2.prototype["@@transducer/init"] = xfBase_default.init;
  XFindIndex2.prototype["@@transducer/result"] = function(result) {
    if (!this.found) {
      result = this.xf["@@transducer/step"](result, -1);
    }
    return this.xf["@@transducer/result"](result);
  };
  XFindIndex2.prototype["@@transducer/step"] = function(result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf["@@transducer/step"](result, this.idx));
    }
    return result;
  };
  return XFindIndex2;
}();
var _xfindIndex = _curry2(function _xfindIndex2(f, xf) {
  return new XFindIndex(f, xf);
});
var xfindIndex_default = _xfindIndex;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/findIndex.js
var findIndex = _curry2(_dispatchable([], xfindIndex_default, function findIndex2(fn2, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn2(list[idx])) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}));

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_xfindLast.js
var XFindLast = function() {
  function XFindLast2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFindLast2.prototype["@@transducer/init"] = xfBase_default.init;
  XFindLast2.prototype["@@transducer/result"] = function(result) {
    return this.xf["@@transducer/result"](this.xf["@@transducer/step"](result, this.last));
  };
  XFindLast2.prototype["@@transducer/step"] = function(result, input) {
    if (this.f(input)) {
      this.last = input;
    }
    return result;
  };
  return XFindLast2;
}();
var _xfindLast = _curry2(function _xfindLast2(f, xf) {
  return new XFindLast(f, xf);
});
var xfindLast_default = _xfindLast;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/findLast.js
var findLast = _curry2(_dispatchable([], xfindLast_default, function findLast2(fn2, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn2(list[idx])) {
      return list[idx];
    }
    idx -= 1;
  }
}));

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_xfindLastIndex.js
var XFindLastIndex = function() {
  function XFindLastIndex2(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.lastIdx = -1;
  }
  XFindLastIndex2.prototype["@@transducer/init"] = xfBase_default.init;
  XFindLastIndex2.prototype["@@transducer/result"] = function(result) {
    return this.xf["@@transducer/result"](this.xf["@@transducer/step"](result, this.lastIdx));
  };
  XFindLastIndex2.prototype["@@transducer/step"] = function(result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.lastIdx = this.idx;
    }
    return result;
  };
  return XFindLastIndex2;
}();
var _xfindLastIndex = _curry2(function _xfindLastIndex2(f, xf) {
  return new XFindLastIndex(f, xf);
});
var xfindLastIndex_default = _xfindLastIndex;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/findLastIndex.js
var findLastIndex = _curry2(_dispatchable([], xfindLastIndex_default, function findLastIndex2(fn2, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn2(list[idx])) {
      return idx;
    }
    idx -= 1;
  }
  return -1;
}));

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/flatten.js
var flatten = _curry1(_makeFlat(true));

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/flip.js
var flip = _curry1(function flip2(fn2) {
  return curryN_default(fn2.length, function(a, b) {
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = b;
    args[1] = a;
    return fn2.apply(this, args);
  });
});
var flip_default = flip;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/forEach.js
var forEach = _curry2(_checkForMethod("forEach", function forEach2(fn2, list) {
  var len = list.length;
  var idx = 0;
  while (idx < len) {
    fn2(list[idx]);
    idx += 1;
  }
  return list;
}));

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/forEachObjIndexed.js
var forEachObjIndexed = _curry2(function forEachObjIndexed2(fn2, obj) {
  var keyList = keys_default(obj);
  var idx = 0;
  while (idx < keyList.length) {
    var key = keyList[idx];
    fn2(obj[key], key, obj);
    idx += 1;
  }
  return obj;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/fromPairs.js
var fromPairs = _curry1(function fromPairs2(pairs) {
  var result = {};
  var idx = 0;
  while (idx < pairs.length) {
    result[pairs[idx][0]] = pairs[idx][1];
    idx += 1;
  }
  return result;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/groupBy.js
var groupBy = _curry2(_checkForMethod("groupBy", reduceBy_default(function(acc, item) {
  if (acc == null) {
    acc = [];
  }
  acc.push(item);
  return acc;
}, null)));

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/groupWith.js
var groupWith = _curry2(function(fn2, list) {
  var res = [];
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    var nextidx = idx + 1;
    while (nextidx < len && fn2(list[nextidx - 1], list[nextidx])) {
      nextidx += 1;
    }
    res.push(list.slice(idx, nextidx));
    idx = nextidx;
  }
  return res;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/gt.js
var gt = _curry2(function gt2(a, b) {
  return a > b;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/gte.js
var gte = _curry2(function gte2(a, b) {
  return a >= b;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/hasPath.js
var hasPath = _curry2(function hasPath2(_path, obj) {
  if (_path.length === 0) {
    return false;
  }
  var val = obj;
  var idx = 0;
  while (idx < _path.length) {
    if (_has(_path[idx], val)) {
      val = val[_path[idx]];
      idx += 1;
    } else {
      return false;
    }
  }
  return true;
});
var hasPath_default = hasPath;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/has.js
var has = _curry2(function has2(prop3, obj) {
  return hasPath_default([prop3], obj);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/hasIn.js
var hasIn = _curry2(function hasIn2(prop3, obj) {
  return prop3 in obj;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/identical.js
var identical = _curry2(objectIs_default);

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/ifElse.js
var ifElse = _curry3(function ifElse2(condition, onTrue, onFalse) {
  return curryN_default(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
    return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
  });
});
var ifElse_default = ifElse;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/inc.js
var inc = add_default(1);

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/includes.js
var includes = _curry2(_includes);

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/indexBy.js
var indexBy = reduceBy_default(function(acc, elem) {
  return elem;
}, null);

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/indexOf.js
var indexOf = _curry2(function indexOf2(target, xs) {
  return typeof xs.indexOf === "function" && !isArray_default(xs) ? xs.indexOf(target) : _indexOf(xs, target, 0);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/init.js
var init = slice_default(0, -1);

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/innerJoin.js
var innerJoin = _curry3(function innerJoin2(pred, xs, ys) {
  return _filter(function(x) {
    return _includesWith(pred, x, ys);
  }, xs);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/insert.js
var insert = _curry3(function insert2(idx, elt, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  var result = Array.prototype.slice.call(list, 0);
  result.splice(idx, 0, elt);
  return result;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/insertAll.js
var insertAll = _curry3(function insertAll2(idx, elts, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  return [].concat(Array.prototype.slice.call(list, 0, idx), elts, Array.prototype.slice.call(list, idx));
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/uniqBy.js
var uniqBy = _curry2(function uniqBy2(fn2, list) {
  var set3 = new Set_default();
  var result = [];
  var idx = 0;
  var appliedItem, item;
  while (idx < list.length) {
    item = list[idx];
    appliedItem = fn2(item);
    if (set3.add(appliedItem)) {
      result.push(item);
    }
    idx += 1;
  }
  return result;
});
var uniqBy_default = uniqBy;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/uniq.js
var uniq = uniqBy_default(identity_default);
var uniq_default = uniq;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/intersection.js
var intersection = _curry2(function intersection2(list1, list2) {
  var lookupList, filteredList;
  if (list1.length > list2.length) {
    lookupList = list1;
    filteredList = list2;
  } else {
    lookupList = list2;
    filteredList = list1;
  }
  return uniq_default(_filter(flip_default(_includes)(lookupList), filteredList));
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/intersperse.js
var intersperse = _curry2(_checkForMethod("intersperse", function intersperse2(separator, list) {
  var out = [];
  var idx = 0;
  var length3 = list.length;
  while (idx < length3) {
    if (idx === length3 - 1) {
      out.push(list[idx]);
    } else {
      out.push(list[idx], separator);
    }
    idx += 1;
  }
  return out;
}));

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_objectAssign.js
function _objectAssign(target) {
  if (target == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }
  var output = Object(target);
  var idx = 1;
  var length3 = arguments.length;
  while (idx < length3) {
    var source = arguments[idx];
    if (source != null) {
      for (var nextKey in source) {
        if (_has(nextKey, source)) {
          output[nextKey] = source[nextKey];
        }
      }
    }
    idx += 1;
  }
  return output;
}
var objectAssign_default = typeof Object.assign === "function" ? Object.assign : _objectAssign;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/objOf.js
var objOf = _curry2(function objOf2(key, val) {
  var obj = {};
  obj[key] = val;
  return obj;
});
var objOf_default = objOf;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_stepCat.js
var _stepCatArray = {
  "@@transducer/init": Array,
  "@@transducer/step": function(xs, x) {
    xs.push(x);
    return xs;
  },
  "@@transducer/result": _identity
};
var _stepCatString = {
  "@@transducer/init": String,
  "@@transducer/step": function(a, b) {
    return a + b;
  },
  "@@transducer/result": _identity
};
var _stepCatObject = {
  "@@transducer/init": Object,
  "@@transducer/step": function(result, input) {
    return objectAssign_default(result, isArrayLike_default(input) ? objOf_default(input[0], input[1]) : input);
  },
  "@@transducer/result": _identity
};
function _stepCat(obj) {
  if (_isTransformer(obj)) {
    return obj;
  }
  if (isArrayLike_default(obj)) {
    return _stepCatArray;
  }
  if (typeof obj === "string") {
    return _stepCatString;
  }
  if (typeof obj === "object") {
    return _stepCatObject;
  }
  throw new Error("Cannot create transformer for " + obj);
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/into.js
var into = _curry3(function into2(acc, xf, list) {
  return _isTransformer(acc) ? _reduce(xf(acc), acc["@@transducer/init"](), list) : _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/invert.js
var invert = _curry1(function invert2(obj) {
  var props4 = keys_default(obj);
  var len = props4.length;
  var idx = 0;
  var out = {};
  while (idx < len) {
    var key = props4[idx];
    var val = obj[key];
    var list = _has(val, out) ? out[val] : out[val] = [];
    list[list.length] = key;
    idx += 1;
  }
  return out;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/invertObj.js
var invertObj = _curry1(function invertObj2(obj) {
  var props4 = keys_default(obj);
  var len = props4.length;
  var idx = 0;
  var out = {};
  while (idx < len) {
    var key = props4[idx];
    out[obj[key]] = key;
    idx += 1;
  }
  return out;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/invoker.js
var invoker = _curry2(function invoker2(arity, method) {
  return curryN_default(arity + 1, function() {
    var target = arguments[arity];
    if (target != null && _isFunction(target[method])) {
      return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
    }
    throw new TypeError(toString_default(target) + ' does not have a method named "' + method + '"');
  });
});
var invoker_default = invoker;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/is.js
var is = _curry2(function is2(Ctor, val) {
  return val != null && val.constructor === Ctor || val instanceof Ctor;
});
var is_default = is;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/isEmpty.js
var isEmpty = _curry1(function isEmpty2(x) {
  return x != null && equals_default(x, empty_default(x));
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/join.js
var join = invoker_default(1, "join");

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/juxt.js
var juxt = _curry1(function juxt2(fns) {
  return converge_default(function() {
    return Array.prototype.slice.call(arguments, 0);
  }, fns);
});
var juxt_default = juxt;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/keysIn.js
var keysIn = _curry1(function keysIn2(obj) {
  var prop3;
  var ks = [];
  for (prop3 in obj) {
    ks[ks.length] = prop3;
  }
  return ks;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/lastIndexOf.js
var lastIndexOf = _curry2(function lastIndexOf2(target, xs) {
  if (typeof xs.lastIndexOf === "function" && !isArray_default(xs)) {
    return xs.lastIndexOf(target);
  } else {
    var idx = xs.length - 1;
    while (idx >= 0) {
      if (equals_default(xs[idx], target)) {
        return idx;
      }
      idx -= 1;
    }
    return -1;
  }
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_isNumber.js
function _isNumber(x) {
  return Object.prototype.toString.call(x) === "[object Number]";
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/length.js
var length = _curry1(function length2(list) {
  return list != null && _isNumber(list.length) ? list.length : NaN;
});
var length_default = length;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/lens.js
var lens = _curry2(function lens2(getter, setter) {
  return function(toFunctorFn) {
    return function(target) {
      return map_default(function(focus) {
        return setter(focus, target);
      }, toFunctorFn(getter(target)));
    };
  };
});
var lens_default = lens;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/lensIndex.js
var lensIndex = _curry1(function lensIndex2(n) {
  return lens_default(nth_default(n), update_default(n));
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/lensPath.js
var lensPath = _curry1(function lensPath2(p) {
  return lens_default(path_default(p), assocPath_default(p));
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/lensProp.js
var lensProp = _curry1(function lensProp2(k) {
  return lens_default(prop_default(k), assoc_default(k));
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/lt.js
var lt = _curry2(function lt2(a, b) {
  return a < b;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/lte.js
var lte = _curry2(function lte2(a, b) {
  return a <= b;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/mapAccum.js
var mapAccum = _curry3(function mapAccum2(fn2, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var tuple = [acc];
  while (idx < len) {
    tuple = fn2(tuple[0], list[idx]);
    result[idx] = tuple[1];
    idx += 1;
  }
  return [tuple[0], result];
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/mapAccumRight.js
var mapAccumRight = _curry3(function mapAccumRight2(fn2, acc, list) {
  var idx = list.length - 1;
  var result = [];
  var tuple = [acc];
  while (idx >= 0) {
    tuple = fn2(tuple[0], list[idx]);
    result[idx] = tuple[1];
    idx -= 1;
  }
  return [tuple[0], result];
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/mapObjIndexed.js
var mapObjIndexed = _curry2(function mapObjIndexed2(fn2, obj) {
  return _reduce(function(acc, key) {
    acc[key] = fn2(obj[key], key, obj);
    return acc;
  }, {}, keys_default(obj));
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/match.js
var match = _curry2(function match2(rx, str) {
  return str.match(rx) || [];
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/mathMod.js
var mathMod = _curry2(function mathMod2(m, p) {
  if (!isInteger_default(m)) {
    return NaN;
  }
  if (!isInteger_default(p) || p < 1) {
    return NaN;
  }
  return (m % p + p) % p;
});
var mathMod_default = mathMod;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/maxBy.js
var maxBy = _curry3(function maxBy2(f, a, b) {
  return f(b) > f(a) ? b : a;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/sum.js
var sum = reduce_default(add_default, 0);
var sum_default = sum;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/mean.js
var mean = _curry1(function mean2(list) {
  return sum_default(list) / list.length;
});
var mean_default = mean;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/median.js
var median = _curry1(function median2(list) {
  var len = list.length;
  if (len === 0) {
    return NaN;
  }
  var width2 = 2 - len % 2;
  var idx = (len - width2) / 2;
  return mean_default(Array.prototype.slice.call(list, 0).sort(function(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }).slice(idx, idx + width2));
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/memoizeWith.js
var memoizeWith = _curry2(function memoizeWith2(mFn, fn2) {
  var cache = {};
  return _arity(fn2.length, function() {
    var key = mFn.apply(this, arguments);
    if (!_has(key, cache)) {
      cache[key] = fn2.apply(this, arguments);
    }
    return cache[key];
  });
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/merge.js
var merge = _curry2(function merge2(l, r) {
  return objectAssign_default({}, l, r);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/mergeAll.js
var mergeAll = _curry1(function mergeAll2(list) {
  return objectAssign_default.apply(null, [{}].concat(list));
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/mergeWithKey.js
var mergeWithKey = _curry3(function mergeWithKey2(fn2, l, r) {
  var result = {};
  var k;
  for (k in l) {
    if (_has(k, l)) {
      result[k] = _has(k, r) ? fn2(k, l[k], r[k]) : l[k];
    }
  }
  for (k in r) {
    if (_has(k, r) && !_has(k, result)) {
      result[k] = r[k];
    }
  }
  return result;
});
var mergeWithKey_default = mergeWithKey;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/mergeDeepWithKey.js
var mergeDeepWithKey = _curry3(function mergeDeepWithKey2(fn2, lObj, rObj) {
  return mergeWithKey_default(function(k, lVal, rVal) {
    if (_isObject(lVal) && _isObject(rVal)) {
      return mergeDeepWithKey2(fn2, lVal, rVal);
    } else {
      return fn2(k, lVal, rVal);
    }
  }, lObj, rObj);
});
var mergeDeepWithKey_default = mergeDeepWithKey;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/mergeDeepLeft.js
var mergeDeepLeft = _curry2(function mergeDeepLeft2(lObj, rObj) {
  return mergeDeepWithKey_default(function(k, lVal, rVal) {
    return lVal;
  }, lObj, rObj);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/mergeDeepRight.js
var mergeDeepRight = _curry2(function mergeDeepRight2(lObj, rObj) {
  return mergeDeepWithKey_default(function(k, lVal, rVal) {
    return rVal;
  }, lObj, rObj);
});
var mergeDeepRight_default = mergeDeepRight;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/mergeDeepWith.js
var mergeDeepWith = _curry3(function mergeDeepWith2(fn2, lObj, rObj) {
  return mergeDeepWithKey_default(function(k, lVal, rVal) {
    return fn2(lVal, rVal);
  }, lObj, rObj);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/mergeLeft.js
var mergeLeft = _curry2(function mergeLeft2(l, r) {
  return objectAssign_default({}, r, l);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/mergeRight.js
var mergeRight = _curry2(function mergeRight2(l, r) {
  return objectAssign_default({}, l, r);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/mergeWith.js
var mergeWith = _curry3(function mergeWith2(fn2, l, r) {
  return mergeWithKey_default(function(_, _l, _r) {
    return fn2(_l, _r);
  }, l, r);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/min.js
var min = _curry2(function min2(a, b) {
  return b < a ? b : a;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/minBy.js
var minBy = _curry3(function minBy2(f, a, b) {
  return f(b) < f(a) ? b : a;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/modulo.js
var modulo = _curry2(function modulo2(a, b) {
  return a % b;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/move.js
var move = _curry3(function(from, to, list) {
  var length3 = list.length;
  var result = list.slice();
  var positiveFrom = from < 0 ? length3 + from : from;
  var positiveTo = to < 0 ? length3 + to : to;
  var item = result.splice(positiveFrom, 1);
  return positiveFrom < 0 || positiveFrom >= list.length || positiveTo < 0 || positiveTo >= list.length ? list : [].concat(result.slice(0, positiveTo)).concat(item).concat(result.slice(positiveTo, list.length));
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/multiply.js
var multiply = _curry2(function multiply2(a, b) {
  return a * b;
});
var multiply_default = multiply;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/negate.js
var negate = _curry1(function negate2(n) {
  return -n;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/none.js
var none = _curry2(function none2(fn2, input) {
  return all_default(_complement(fn2), input);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/nthArg.js
var nthArg = _curry1(function nthArg2(n) {
  var arity = n < 0 ? 1 : n + 1;
  return curryN_default(arity, function() {
    return nth_default(n, arguments);
  });
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/o.js
var o = _curry3(function o2(f, g, x) {
  return f(g(x));
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_of.js
function _of(x) {
  return [x];
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/of.js
var of = _curry1(_of);

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/omit.js
var omit = _curry2(function omit2(names, obj) {
  var result = {};
  var index2 = {};
  var idx = 0;
  var len = names.length;
  while (idx < len) {
    index2[names[idx]] = 1;
    idx += 1;
  }
  for (var prop3 in obj) {
    if (!index2.hasOwnProperty(prop3)) {
      result[prop3] = obj[prop3];
    }
  }
  return result;
});
var omit_default = omit;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/once.js
var once = _curry1(function once2(fn2) {
  var called = false;
  var result;
  return _arity(fn2.length, function() {
    if (called) {
      return result;
    }
    called = true;
    result = fn2.apply(this, arguments);
    return result;
  });
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_assertPromise.js
function _assertPromise(name, p) {
  if (p == null || !_isFunction(p.then)) {
    throw new TypeError("`" + name + "` expected a Promise, received " + _toString(p, []));
  }
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/otherwise.js
var otherwise = _curry2(function otherwise2(f, p) {
  _assertPromise("otherwise", p);
  return p.then(null, f);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/over.js
var Identity = function(x) {
  return { value: x, map: function(f) {
    return Identity(f(x));
  } };
};
var over = _curry3(function over2(lens3, f, x) {
  return lens3(function(y) {
    return Identity(f(y));
  })(x).value;
});
var over_default = over;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/pair.js
var pair = _curry2(function pair2(fst, snd) {
  return [fst, snd];
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_createPartialApplicator.js
function _createPartialApplicator(concat3) {
  return _curry2(function(fn2, args) {
    return _arity(Math.max(0, fn2.length - args.length), function() {
      return fn2.apply(this, concat3(args, arguments));
    });
  });
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/partial.js
var partial = _createPartialApplicator(_concat);

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/partialRight.js
var partialRight = _createPartialApplicator(flip_default(_concat));

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/partition.js
var partition = juxt_default([filter_default, reject_default]);

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/pathEq.js
var pathEq = _curry3(function pathEq2(_path, val, obj) {
  return equals_default(path_default(_path, obj), val);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/pathOr.js
var pathOr = _curry3(function pathOr2(d, p, obj) {
  return defaultTo_default(d, path_default(p, obj));
});
var pathOr_default = pathOr;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/pathSatisfies.js
var pathSatisfies = _curry3(function pathSatisfies2(pred, propPath, obj) {
  return propPath.length > 0 && pred(path_default(propPath, obj));
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/pick.js
var pick = _curry2(function pick2(names, obj) {
  var result = {};
  var idx = 0;
  while (idx < names.length) {
    if (names[idx] in obj) {
      result[names[idx]] = obj[names[idx]];
    }
    idx += 1;
  }
  return result;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/pickAll.js
var pickAll = _curry2(function pickAll2(names, obj) {
  var result = {};
  var idx = 0;
  var len = names.length;
  while (idx < len) {
    var name = names[idx];
    result[name] = obj[name];
    idx += 1;
  }
  return result;
});
var pickAll_default = pickAll;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/pickBy.js
var pickBy = _curry2(function pickBy2(test3, obj) {
  var result = {};
  for (var prop3 in obj) {
    if (test3(obj[prop3], prop3, obj)) {
      result[prop3] = obj[prop3];
    }
  }
  return result;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/prepend.js
var prepend = _curry2(function prepend2(el, list) {
  return _concat([el], list);
});
var prepend_default = prepend;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/product.js
var product = reduce_default(multiply_default, 1);

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/useWith.js
var useWith = _curry2(function useWith2(fn2, transformers) {
  return curryN_default(transformers.length, function() {
    var args = [];
    var idx = 0;
    while (idx < transformers.length) {
      args.push(transformers[idx].call(this, arguments[idx]));
      idx += 1;
    }
    return fn2.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
  });
});
var useWith_default = useWith;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/project.js
var project = useWith_default(_map, [pickAll_default, identity_default]);

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/propEq.js
var propEq = _curry3(function propEq2(name, val, obj) {
  return equals_default(val, obj[name]);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/propIs.js
var propIs = _curry3(function propIs2(type3, name, obj) {
  return is_default(type3, obj[name]);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/propOr.js
var propOr = _curry3(function propOr2(val, p, obj) {
  return pathOr_default(val, [p], obj);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/propSatisfies.js
var propSatisfies = _curry3(function propSatisfies2(pred, name, obj) {
  return pred(obj[name]);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/props.js
var props = _curry2(function props2(ps, obj) {
  var len = ps.length;
  var out = [];
  var idx = 0;
  while (idx < len) {
    out[idx] = obj[ps[idx]];
    idx += 1;
  }
  return out;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/range.js
var range = _curry2(function range2(from, to) {
  if (!(_isNumber(from) && _isNumber(to))) {
    throw new TypeError("Both arguments to range must be numbers");
  }
  var result = [];
  var n = from;
  while (n < to) {
    result.push(n);
    n += 1;
  }
  return result;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/reduceRight.js
var reduceRight = _curry3(function reduceRight2(fn2, acc, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    acc = fn2(list[idx], acc);
    idx -= 1;
  }
  return acc;
});
var reduceRight_default = reduceRight;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/reduceWhile.js
var reduceWhile = _curryN(4, [], function _reduceWhile(pred, fn2, a, list) {
  return _reduce(function(acc, x) {
    return pred(acc, x) ? fn2(acc, x) : _reduced(acc);
  }, a, list);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/reduced.js
var reduced = _curry1(_reduced);

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/times.js
var times = _curry2(function times2(fn2, n) {
  var len = Number(n);
  var idx = 0;
  var list;
  if (len < 0 || isNaN(len)) {
    throw new RangeError("n must be a non-negative number");
  }
  list = new Array(len);
  while (idx < len) {
    list[idx] = fn2(idx);
    idx += 1;
  }
  return list;
});
var times_default = times;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/repeat.js
var repeat = _curry2(function repeat2(value, n) {
  return times_default(always_default(value), n);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/replace.js
var replace = _curry3(function replace2(regex, replacement, str) {
  return str.replace(regex, replacement);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/scan.js
var scan = _curry3(function scan2(fn2, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [acc];
  while (idx < len) {
    acc = fn2(acc, list[idx]);
    result[idx + 1] = acc;
    idx += 1;
  }
  return result;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/sequence.js
var sequence = _curry2(function sequence2(of2, traversable) {
  return typeof traversable.sequence === "function" ? traversable.sequence(of2) : reduceRight_default(function(x, acc) {
    return ap_default(map_default(prepend_default, x), acc);
  }, of2([]), traversable);
});
var sequence_default = sequence;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/set.js
var set = _curry3(function set2(lens3, v, x) {
  return over_default(lens3, always_default(v), x);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/sort.js
var sort = _curry2(function sort2(comparator3, list) {
  return Array.prototype.slice.call(list, 0).sort(comparator3);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/sortBy.js
var sortBy = _curry2(function sortBy2(fn2, list) {
  return Array.prototype.slice.call(list, 0).sort(function(a, b) {
    var aa = fn2(a);
    var bb = fn2(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/sortWith.js
var sortWith = _curry2(function sortWith2(fns, list) {
  return Array.prototype.slice.call(list, 0).sort(function(a, b) {
    var result = 0;
    var i = 0;
    while (result === 0 && i < fns.length) {
      result = fns[i](a, b);
      i += 1;
    }
    return result;
  });
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/split.js
var split = invoker_default(1, "split");
var split_default = split;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/splitAt.js
var splitAt = _curry2(function splitAt2(index2, array) {
  return [slice_default(0, index2, array), slice_default(index2, length_default(array), array)];
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/splitEvery.js
var splitEvery = _curry2(function splitEvery2(n, list) {
  if (n <= 0) {
    throw new Error("First argument to splitEvery must be a positive integer");
  }
  var result = [];
  var idx = 0;
  while (idx < list.length) {
    result.push(slice_default(idx, idx += n, list));
  }
  return result;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/splitWhen.js
var splitWhen = _curry2(function splitWhen2(pred, list) {
  var idx = 0;
  var len = list.length;
  var prefix = [];
  while (idx < len && !pred(list[idx])) {
    prefix.push(list[idx]);
    idx += 1;
  }
  return [prefix, Array.prototype.slice.call(list, idx)];
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/startsWith.js
var startsWith = _curry2(function(prefix, list) {
  return equals_default(take_default(prefix.length, list), prefix);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/subtract.js
var subtract = _curry2(function subtract2(a, b) {
  return Number(a) - Number(b);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/symmetricDifference.js
var symmetricDifference = _curry2(function symmetricDifference2(list1, list2) {
  return concat_default(difference_default(list1, list2), difference_default(list2, list1));
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/symmetricDifferenceWith.js
var symmetricDifferenceWith = _curry3(function symmetricDifferenceWith2(pred, list1, list2) {
  return concat_default(differenceWith_default(pred, list1, list2), differenceWith_default(pred, list2, list1));
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/takeLastWhile.js
var takeLastWhile = _curry2(function takeLastWhile2(fn2, xs) {
  var idx = xs.length - 1;
  while (idx >= 0 && fn2(xs[idx])) {
    idx -= 1;
  }
  return slice_default(idx + 1, Infinity, xs);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_xtakeWhile.js
var XTakeWhile = function() {
  function XTakeWhile2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTakeWhile2.prototype["@@transducer/init"] = xfBase_default.init;
  XTakeWhile2.prototype["@@transducer/result"] = xfBase_default.result;
  XTakeWhile2.prototype["@@transducer/step"] = function(result, input) {
    return this.f(input) ? this.xf["@@transducer/step"](result, input) : _reduced(result);
  };
  return XTakeWhile2;
}();
var _xtakeWhile = _curry2(function _xtakeWhile2(f, xf) {
  return new XTakeWhile(f, xf);
});
var xtakeWhile_default = _xtakeWhile;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/takeWhile.js
var takeWhile = _curry2(_dispatchable(["takeWhile"], xtakeWhile_default, function takeWhile2(fn2, xs) {
  var idx = 0;
  var len = xs.length;
  while (idx < len && fn2(xs[idx])) {
    idx += 1;
  }
  return slice_default(0, idx, xs);
}));

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_xtap.js
var XTap = function() {
  function XTap2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTap2.prototype["@@transducer/init"] = xfBase_default.init;
  XTap2.prototype["@@transducer/result"] = xfBase_default.result;
  XTap2.prototype["@@transducer/step"] = function(result, input) {
    this.f(input);
    return this.xf["@@transducer/step"](result, input);
  };
  return XTap2;
}();
var _xtap = _curry2(function _xtap2(f, xf) {
  return new XTap(f, xf);
});
var xtap_default = _xtap;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/tap.js
var tap = _curry2(_dispatchable([], xtap_default, function tap2(fn2, x) {
  fn2(x);
  return x;
}));

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/internal/_isRegExp.js
function _isRegExp(x) {
  return Object.prototype.toString.call(x) === "[object RegExp]";
}

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/test.js
var test = _curry2(function test2(pattern, str) {
  if (!_isRegExp(pattern)) {
    throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + toString_default(pattern));
  }
  return _cloneRegExp(pattern).test(str);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/then.js
var then = _curry2(function then2(f, p) {
  _assertPromise("then", p);
  return p.then(f);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/toLower.js
var toLower = invoker_default(0, "toLowerCase");

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/toPairs.js
var toPairs = _curry1(function toPairs2(obj) {
  var pairs = [];
  for (var prop3 in obj) {
    if (_has(prop3, obj)) {
      pairs[pairs.length] = [prop3, obj[prop3]];
    }
  }
  return pairs;
});
var toPairs_default = toPairs;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/toPairsIn.js
var toPairsIn = _curry1(function toPairsIn2(obj) {
  var pairs = [];
  for (var prop3 in obj) {
    pairs[pairs.length] = [prop3, obj[prop3]];
  }
  return pairs;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/toUpper.js
var toUpper = invoker_default(0, "toUpperCase");
var toUpper_default = toUpper;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/transduce.js
var transduce = curryN_default(4, function transduce2(xf, fn2, acc, list) {
  return _reduce(xf(typeof fn2 === "function" ? _xwrap(fn2) : fn2), acc, list);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/transpose.js
var transpose = _curry1(function transpose2(outerlist) {
  var i = 0;
  var result = [];
  while (i < outerlist.length) {
    var innerlist = outerlist[i];
    var j = 0;
    while (j < innerlist.length) {
      if (typeof result[j] === "undefined") {
        result[j] = [];
      }
      result[j].push(innerlist[j]);
      j += 1;
    }
    i += 1;
  }
  return result;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/traverse.js
var traverse = _curry3(function traverse2(of2, f, traversable) {
  return typeof traversable["fantasy-land/traverse"] === "function" ? traversable["fantasy-land/traverse"](f, of2) : sequence_default(of2, map_default(f, traversable));
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/trim.js
var ws = "	\n\v\f\r   ᠎             　\u2028\u2029\uFEFF";
var zeroWidth = "​";
var hasProtoTrim = typeof String.prototype.trim === "function";
var trim = !hasProtoTrim || ws.trim() || !zeroWidth.trim() ? _curry1(function trim2(str) {
  var beginRx = new RegExp("^[" + ws + "][" + ws + "]*");
  var endRx = new RegExp("[" + ws + "][" + ws + "]*$");
  return str.replace(beginRx, "").replace(endRx, "");
}) : _curry1(function trim3(str) {
  return str.trim();
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/tryCatch.js
var tryCatch = _curry2(function _tryCatch(tryer, catcher) {
  return _arity(tryer.length, function() {
    try {
      return tryer.apply(this, arguments);
    } catch (e) {
      return catcher.apply(this, _concat([e], arguments));
    }
  });
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/unapply.js
var unapply = _curry1(function unapply2(fn2) {
  return function() {
    return fn2(Array.prototype.slice.call(arguments, 0));
  };
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/unary.js
var unary = _curry1(function unary2(fn2) {
  return nAry_default(1, fn2);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/uncurryN.js
var uncurryN = _curry2(function uncurryN2(depth, fn2) {
  return curryN_default(depth, function() {
    var currentDepth = 1;
    var value = fn2;
    var idx = 0;
    var endIdx;
    while (currentDepth <= depth && typeof value === "function") {
      endIdx = currentDepth === depth ? arguments.length : idx + value.length;
      value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
      currentDepth += 1;
      idx = endIdx;
    }
    return value;
  });
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/unfold.js
var unfold = _curry2(function unfold2(fn2, seed) {
  var pair3 = fn2(seed);
  var result = [];
  while (pair3 && pair3.length) {
    result[result.length] = pair3[0];
    pair3 = fn2(pair3[1]);
  }
  return result;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/union.js
var union = _curry2(compose(uniq_default, _concat));

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/uniqWith.js
var uniqWith = _curry2(function uniqWith2(pred, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var item;
  while (idx < len) {
    item = list[idx];
    if (!_includesWith(pred, item, result)) {
      result[result.length] = item;
    }
    idx += 1;
  }
  return result;
});
var uniqWith_default = uniqWith;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/unionWith.js
var unionWith = _curry3(function unionWith2(pred, list1, list2) {
  return uniqWith_default(pred, _concat(list1, list2));
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/unless.js
var unless = _curry3(function unless2(pred, whenFalseFn, x) {
  return pred(x) ? x : whenFalseFn(x);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/unnest.js
var unnest = chain_default(_identity);

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/until.js
var until = _curry3(function until2(pred, fn2, init2) {
  var val = init2;
  while (!pred(val)) {
    val = fn2(val);
  }
  return val;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/valuesIn.js
var valuesIn = _curry1(function valuesIn2(obj) {
  var prop3;
  var vs = [];
  for (prop3 in obj) {
    vs[vs.length] = obj[prop3];
  }
  return vs;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/view.js
var Const = function(x) {
  return { value: x, "fantasy-land/map": function() {
    return this;
  } };
};
var view = _curry2(function view2(lens3, x) {
  return lens3(Const)(x).value;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/when.js
var when = _curry3(function when2(pred, whenTrueFn, x) {
  return pred(x) ? whenTrueFn(x) : x;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/where.js
var where = _curry2(function where2(spec, testObj) {
  for (var prop3 in spec) {
    if (_has(prop3, spec) && !spec[prop3](testObj[prop3])) {
      return false;
    }
  }
  return true;
});
var where_default = where;

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/whereEq.js
var whereEq = _curry2(function whereEq2(spec, testObj) {
  return where_default(map_default(equals_default, spec), testObj);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/without.js
var without = _curry2(function(xs, list) {
  return reject_default(flip_default(_includes)(xs), list);
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/xprod.js
var xprod = _curry2(function xprod2(a, b) {
  var idx = 0;
  var ilen = a.length;
  var j;
  var jlen = b.length;
  var result = [];
  while (idx < ilen) {
    j = 0;
    while (j < jlen) {
      result[result.length] = [a[idx], b[j]];
      j += 1;
    }
    idx += 1;
  }
  return result;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/zip.js
var zip = _curry2(function zip2(a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = [a[idx], b[idx]];
    idx += 1;
  }
  return rv;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/zipObj.js
var zipObj = _curry2(function zipObj2(keys4, values3) {
  var idx = 0;
  var len = Math.min(keys4.length, values3.length);
  var out = {};
  while (idx < len) {
    out[keys4[idx]] = values3[idx];
    idx += 1;
  }
  return out;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/zipWith.js
var zipWith = _curry3(function zipWith2(fn2, a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = fn2(a[idx], b[idx]);
    idx += 1;
  }
  return rv;
});

// node_modules/@waves.exchange/wx-react-uikit/node_modules/ramda/es/thunkify.js
var thunkify = _curry1(function thunkify2(fn2) {
  return curryN_default(fn2.length, function createThunk() {
    var fnArgs = arguments;
    return function invokeThunk() {
      return fn2.apply(this, fnArgs);
    };
  });
});

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/AssetLogo/helpers.js
var sizeProperties = ["size", "height", "width"];
var toArray = (some) => Array.isArray(some) ? some : [some];
var GOOD_COLORS_LIST = [
  "#39a12c",
  "#6a737b",
  "#e49616",
  "#008ca7",
  "#ff5b38",
  "#ff6a00",
  "#c74124",
  "#00a78e",
  "#b01e53",
  "#e0c61b",
  "#5a81ea",
  "#72b7d2",
  "#a5b5c3",
  "#81c926",
  "#86a3bd",
  "#c1d82f",
  "#5c84a8",
  "#267e1b",
  "#fbb034",
  "#ff846a",
  "#47c1ff",
  "#00a0af",
  "#85d7c6",
  "#8a7967",
  "#26c1c9",
  "#72d28b",
  "#5B1909",
  "#264764",
  "#270774",
  "#8763DE",
  "#F04085",
  "#1E6AFD",
  "#FF1E43",
  "#D3002D",
  "#967400",
  "#264163"
];
var charCodeAt = curry_default((index2, char) => char.charCodeAt(index2));
var wrapWith = curry_default((before, after, content) => `${before}${content}${after}`);
var getAssetLogoBgColor = pipe(split_default(""), map_default(charCodeAt(0)), reduce_default(add_default, 0), flip_default(mathMod_default)(GOOD_COLORS_LIST.length), toArray, flip_default(path_default)(GOOD_COLORS_LIST));
var getHeight = pipe(toPairs_default, filter_default(pipe(head_default, flip_default(contains_default)(sizeProperties))), head_default, ifElse_default(isNil_default, always_default(0), pipe(last_default, ifElse_default(isNil_default, always_default(0), pipe(ifElse_default(Array.isArray, (height2) => map_default(pipe((height3) => parseInt(height3, 10), identity_default), height2), pipe((height2) => parseInt(height2, 10), ifElse_default(isNaN, always_default(0), identity_default))))))));
var escapeHtml = (str) => {
  if (!str) {
    return "";
  }
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
};
var getPrettyName = pipe(ifElse_default(isNil_default, always_default(""), escapeHtml));

// node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js
var import_react = __toESM(require_react());

// node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var index = memoize_browser_esm_default(
  function(prop3) {
    return reactPropsRegex.test(prop3) || prop3.charCodeAt(0) === 111 && prop3.charCodeAt(1) === 110 && prop3.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
var is_prop_valid_browser_esm_default = index;

// node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js
var testOmitPropsOnStringTag = is_prop_valid_browser_esm_default;
var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
  return key !== "theme" && key !== "innerRef";
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
  return typeof tag === "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
function ownKeys(object, enumerableOnly) {
  var keys4 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys4.push.apply(keys4, symbols);
  }
  return keys4;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
var Noop = function Noop2() {
  return null;
};
var createStyled = function createStyled2(tag, options) {
  if (true) {
    if (tag === void 0) {
      throw new Error("You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.");
    }
  }
  var identifierName;
  var shouldForwardProp;
  var targetClassName;
  if (options !== void 0) {
    identifierName = options.label;
    targetClassName = options.target;
    shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function(propName) {
      return tag.__emotion_forwardProp(propName) && // $FlowFixMe
      options.shouldForwardProp(propName);
    } : options.shouldForwardProp;
  }
  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  if (typeof shouldForwardProp !== "function" && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp("as");
  return function() {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
    if (identifierName !== void 0) {
      styles.push("label:" + identifierName + ";");
    }
    if (args[0] == null || args[0].raw === void 0) {
      styles.push.apply(styles, args);
    } else {
      if (args[0][0] === void 0) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }
      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;
      for (; i < len; i++) {
        if (args[0][i] === void 0) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }
        styles.push(args[i], args[0][i]);
      }
    }
    var Styled = withEmotionCache(function(props4, context, ref) {
      return (0, import_react.createElement)(ThemeContext.Consumer, null, function(theme) {
        var finalTag = shouldUseAs && props4.as || baseTag;
        var className = "";
        var classInterpolations = [];
        var mergedProps = props4;
        if (props4.theme == null) {
          mergedProps = {};
          for (var key in props4) {
            mergedProps[key] = props4[key];
          }
          mergedProps.theme = theme;
        }
        if (typeof props4.className === "string") {
          className = getRegisteredStyles(context.registered, classInterpolations, props4.className);
        } else if (props4.className != null) {
          className = props4.className + " ";
        }
        var serialized = serializeStyles(styles.concat(classInterpolations), context.registered, mergedProps);
        var rules = insertStyles(context, serialized, typeof finalTag === "string");
        className += context.key + "-" + serialized.name;
        if (targetClassName !== void 0) {
          className += " " + targetClassName;
        }
        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === void 0 ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
        var newProps = {};
        for (var _key in props4) {
          if (shouldUseAs && _key === "as")
            continue;
          if (
            // $FlowFixMe
            finalShouldForwardProp(_key)
          ) {
            newProps[_key] = props4[_key];
          }
        }
        newProps.className = className;
        newProps.ref = ref || props4.innerRef;
        if (props4.innerRef) {
          console.error("`innerRef` is deprecated and will be removed in a future major version of Emotion, please use the `ref` prop instead" + (identifierName === void 0 ? "" : " in the usage of `" + identifierName + "`"));
        }
        var ele = (0, import_react.createElement)(finalTag, newProps);
        var possiblyStyleElement = (0, import_react.createElement)(Noop, null);
        return (0, import_react.createElement)(import_react.Fragment, null, possiblyStyleElement, ele);
      });
    });
    Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, "toString", {
      value: function value() {
        if (targetClassName === void 0 && true) {
          return "NO_COMPONENT_SELECTOR";
        }
        return "." + targetClassName;
      }
    });
    Styled.withComponent = function(nextTag, nextOptions) {
      return createStyled2(nextTag, nextOptions !== void 0 ? _objectSpread({}, options || {}, {}, nextOptions) : options).apply(void 0, styles);
    };
    return Styled;
  };
};
var styled_base_browser_esm_default = createStyled;

// node_modules/@emotion/styled/dist/styled.browser.esm.js
var tags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
var newStyled = styled_base_browser_esm_default.bind();
tags.forEach(function(tagName) {
  newStyled[tagName] = newStyled(tagName);
});
var styled_browser_esm_default = newStyled;

// node_modules/@styled-system/css/dist/index.esm.js
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var get = function get2(obj, key, def, p, undef) {
  key = key && key.split ? key.split(".") : [key];
  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }
  return obj === undef ? def : obj;
};
var defaultBreakpoints = [40, 52, 64].map(function(n) {
  return n + "em";
});
var defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var aliases = {
  bg: "backgroundColor",
  m: "margin",
  mt: "marginTop",
  mr: "marginRight",
  mb: "marginBottom",
  ml: "marginLeft",
  mx: "marginX",
  my: "marginY",
  p: "padding",
  pt: "paddingTop",
  pr: "paddingRight",
  pb: "paddingBottom",
  pl: "paddingLeft",
  px: "paddingX",
  py: "paddingY"
};
var multiples = {
  marginX: ["marginLeft", "marginRight"],
  marginY: ["marginTop", "marginBottom"],
  paddingX: ["paddingLeft", "paddingRight"],
  paddingY: ["paddingTop", "paddingBottom"],
  size: ["width", "height"]
};
var scales = {
  color: "colors",
  backgroundColor: "colors",
  borderColor: "colors",
  margin: "space",
  marginTop: "space",
  marginRight: "space",
  marginBottom: "space",
  marginLeft: "space",
  marginX: "space",
  marginY: "space",
  padding: "space",
  paddingTop: "space",
  paddingRight: "space",
  paddingBottom: "space",
  paddingLeft: "space",
  paddingX: "space",
  paddingY: "space",
  top: "space",
  right: "space",
  bottom: "space",
  left: "space",
  gridGap: "space",
  gridColumnGap: "space",
  gridRowGap: "space",
  gap: "space",
  columnGap: "space",
  rowGap: "space",
  fontFamily: "fonts",
  fontSize: "fontSizes",
  fontWeight: "fontWeights",
  lineHeight: "lineHeights",
  letterSpacing: "letterSpacings",
  border: "borders",
  borderTop: "borders",
  borderRight: "borders",
  borderBottom: "borders",
  borderLeft: "borders",
  borderWidth: "borderWidths",
  borderStyle: "borderStyles",
  borderRadius: "radii",
  borderTopRightRadius: "radii",
  borderTopLeftRadius: "radii",
  borderBottomRightRadius: "radii",
  borderBottomLeftRadius: "radii",
  borderTopWidth: "borderWidths",
  borderTopColor: "colors",
  borderTopStyle: "borderStyles",
  borderBottomWidth: "borderWidths",
  borderBottomColor: "colors",
  borderBottomStyle: "borderStyles",
  borderLeftWidth: "borderWidths",
  borderLeftColor: "colors",
  borderLeftStyle: "borderStyles",
  borderRightWidth: "borderWidths",
  borderRightColor: "colors",
  borderRightStyle: "borderStyles",
  outlineColor: "colors",
  boxShadow: "shadows",
  textShadow: "shadows",
  zIndex: "zIndices",
  width: "sizes",
  minWidth: "sizes",
  maxWidth: "sizes",
  height: "sizes",
  minHeight: "sizes",
  maxHeight: "sizes",
  flexBasis: "sizes",
  size: "sizes",
  // svg
  fill: "colors",
  stroke: "colors"
};
var positiveOrNegative = function positiveOrNegative2(scale, value) {
  if (typeof value !== "number" || value >= 0) {
    return get(scale, value, value);
  }
  var absolute = Math.abs(value);
  var n = get(scale, absolute, absolute);
  if (typeof n === "string")
    return "-" + n;
  return n * -1;
};
var transforms = ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "top", "bottom", "left", "right"].reduce(function(acc, curr) {
  var _extends2;
  return _extends({}, acc, (_extends2 = {}, _extends2[curr] = positiveOrNegative, _extends2));
}, {});
var responsive = function responsive2(styles) {
  return function(theme) {
    var next = {};
    var breakpoints2 = get(theme, "breakpoints", defaultBreakpoints);
    var mediaQueries = [null].concat(breakpoints2.map(function(n) {
      return "@media screen and (min-width: " + n + ")";
    }));
    for (var key in styles) {
      var value = typeof styles[key] === "function" ? styles[key](theme) : styles[key];
      if (value == null)
        continue;
      if (!Array.isArray(value)) {
        next[key] = value;
        continue;
      }
      for (var i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
        var media = mediaQueries[i];
        if (!media) {
          next[key] = value[i];
          continue;
        }
        next[media] = next[media] || {};
        if (value[i] == null)
          continue;
        next[media][key] = value[i];
      }
    }
    return next;
  };
};
var css = function css2(args) {
  return function(props4) {
    if (props4 === void 0) {
      props4 = {};
    }
    var theme = _extends({}, defaultTheme, {}, props4.theme || props4);
    var result = {};
    var obj = typeof args === "function" ? args(theme) : args;
    var styles = responsive(obj)(theme);
    for (var key in styles) {
      var x = styles[key];
      var val = typeof x === "function" ? x(theme) : x;
      if (key === "variant") {
        var variant3 = css2(get(theme, val))(theme);
        result = _extends({}, result, {}, variant3);
        continue;
      }
      if (val && typeof val === "object") {
        result[key] = css2(val)(theme);
        continue;
      }
      var prop3 = get(aliases, key, key);
      var scaleName = get(scales, prop3);
      var scale = get(theme, scaleName, get(theme, prop3, {}));
      var transform = get(transforms, prop3, get);
      var value = transform(scale, val, val);
      if (multiples[prop3]) {
        var dirs = multiples[prop3];
        for (var i = 0; i < dirs.length; i++) {
          result[dirs[i]] = value;
        }
      } else {
        result[prop3] = value;
      }
    }
    return result;
  };
};
var index_esm_default = css;

// node_modules/@styled-system/core/dist/index.esm.js
var import_object_assign = __toESM(require_object_assign());
var merge3 = function merge4(a, b) {
  var result = (0, import_object_assign.default)({}, a, b);
  for (var key in a) {
    var _assign;
    if (!a[key] || typeof b[key] !== "object")
      continue;
    (0, import_object_assign.default)(result, (_assign = {}, _assign[key] = (0, import_object_assign.default)(a[key], b[key]), _assign));
  }
  return result;
};
var sort3 = function sort4(obj) {
  var next = {};
  Object.keys(obj).sort(function(a, b) {
    return a.localeCompare(b, void 0, {
      numeric: true,
      sensitivity: "base"
    });
  }).forEach(function(key) {
    next[key] = obj[key];
  });
  return next;
};
var defaults = {
  breakpoints: [40, 52, 64].map(function(n) {
    return n + "em";
  })
};
var createMediaQuery = function createMediaQuery2(n) {
  return "@media screen and (min-width: " + n + ")";
};
var getValue = function getValue2(n, scale) {
  return get3(scale, n, n);
};
var get3 = function get4(obj, key, def, p, undef) {
  key = key && key.split ? key.split(".") : [key];
  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }
  return obj === undef ? def : obj;
};
var createParser = function createParser2(config10) {
  var cache = {};
  var parse = function parse2(props4) {
    var styles = {};
    var shouldSort = false;
    var isCacheDisabled = props4.theme && props4.theme.disableStyledSystemCache;
    for (var key in props4) {
      if (!config10[key])
        continue;
      var sx2 = config10[key];
      var raw = props4[key];
      var scale = get3(props4.theme, sx2.scale, sx2.defaults);
      if (typeof raw === "object") {
        cache.breakpoints = !isCacheDisabled && cache.breakpoints || get3(props4.theme, "breakpoints", defaults.breakpoints);
        if (Array.isArray(raw)) {
          cache.media = !isCacheDisabled && cache.media || [null].concat(cache.breakpoints.map(createMediaQuery));
          styles = merge3(styles, parseResponsiveStyle(cache.media, sx2, scale, raw, props4));
          continue;
        }
        if (raw !== null) {
          styles = merge3(styles, parseResponsiveObject(cache.breakpoints, sx2, scale, raw, props4));
          shouldSort = true;
        }
        continue;
      }
      (0, import_object_assign.default)(styles, sx2(raw, scale, props4));
    }
    if (shouldSort) {
      styles = sort3(styles);
    }
    return styles;
  };
  parse.config = config10;
  parse.propNames = Object.keys(config10);
  parse.cache = cache;
  var keys4 = Object.keys(config10).filter(function(k) {
    return k !== "config";
  });
  if (keys4.length > 1) {
    keys4.forEach(function(key) {
      var _createParser;
      parse[key] = createParser2((_createParser = {}, _createParser[key] = config10[key], _createParser));
    });
  }
  return parse;
};
var parseResponsiveStyle = function parseResponsiveStyle2(mediaQueries, sx2, scale, raw, _props) {
  var styles = {};
  raw.slice(0, mediaQueries.length).forEach(function(value, i) {
    var media = mediaQueries[i];
    var style = sx2(value, scale, _props);
    if (!media) {
      (0, import_object_assign.default)(styles, style);
    } else {
      var _assign2;
      (0, import_object_assign.default)(styles, (_assign2 = {}, _assign2[media] = (0, import_object_assign.default)({}, styles[media], style), _assign2));
    }
  });
  return styles;
};
var parseResponsiveObject = function parseResponsiveObject2(breakpoints2, sx2, scale, raw, _props) {
  var styles = {};
  for (var key in raw) {
    var breakpoint = breakpoints2[key];
    var value = raw[key];
    var style = sx2(value, scale, _props);
    if (!breakpoint) {
      (0, import_object_assign.default)(styles, style);
    } else {
      var _assign3;
      var media = createMediaQuery(breakpoint);
      (0, import_object_assign.default)(styles, (_assign3 = {}, _assign3[media] = (0, import_object_assign.default)({}, styles[media], style), _assign3));
    }
  }
  return styles;
};
var createStyleFunction = function createStyleFunction2(_ref) {
  var properties = _ref.properties, property = _ref.property, scale = _ref.scale, _ref$transform = _ref.transform, transform = _ref$transform === void 0 ? getValue : _ref$transform, defaultScale = _ref.defaultScale;
  properties = properties || [property];
  var sx2 = function sx3(value, scale2, _props) {
    var result = {};
    var n = transform(value, scale2, _props);
    if (n === null)
      return;
    properties.forEach(function(prop3) {
      result[prop3] = n;
    });
    return result;
  };
  sx2.scale = scale;
  sx2.defaults = defaultScale;
  return sx2;
};
var system = function system2(args) {
  if (args === void 0) {
    args = {};
  }
  var config10 = {};
  Object.keys(args).forEach(function(key) {
    var conf = args[key];
    if (conf === true) {
      config10[key] = createStyleFunction({
        property: key,
        scale: key
      });
      return;
    }
    if (typeof conf === "function") {
      config10[key] = conf;
      return;
    }
    config10[key] = createStyleFunction(conf);
  });
  var parser = createParser(config10);
  return parser;
};
var compose2 = function compose3() {
  var config10 = {};
  for (var _len = arguments.length, parsers = new Array(_len), _key = 0; _key < _len; _key++) {
    parsers[_key] = arguments[_key];
  }
  parsers.forEach(function(parser2) {
    if (!parser2 || !parser2.config)
      return;
    (0, import_object_assign.default)(config10, parser2.config);
  });
  var parser = createParser(config10);
  return parser;
};

// node_modules/@styled-system/layout/dist/index.esm.js
var isNumber = function isNumber2(n) {
  return typeof n === "number" && !isNaN(n);
};
var getWidth = function getWidth2(n, scale) {
  return get3(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + "%");
};
var config = {
  width: {
    property: "width",
    scale: "sizes",
    transform: getWidth
  },
  height: {
    property: "height",
    scale: "sizes"
  },
  minWidth: {
    property: "minWidth",
    scale: "sizes"
  },
  minHeight: {
    property: "minHeight",
    scale: "sizes"
  },
  maxWidth: {
    property: "maxWidth",
    scale: "sizes"
  },
  maxHeight: {
    property: "maxHeight",
    scale: "sizes"
  },
  size: {
    properties: ["width", "height"],
    scale: "sizes"
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true
};
var layout = system(config);
var index_esm_default2 = layout;

// node_modules/@styled-system/color/dist/index.esm.js
var config2 = {
  color: {
    property: "color",
    scale: "colors"
  },
  backgroundColor: {
    property: "backgroundColor",
    scale: "colors"
  },
  opacity: true
};
config2.bg = config2.backgroundColor;
var color = system(config2);
var index_esm_default3 = color;

// node_modules/@styled-system/typography/dist/index.esm.js
var defaults2 = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var config3 = {
  fontFamily: {
    property: "fontFamily",
    scale: "fonts"
  },
  fontSize: {
    property: "fontSize",
    scale: "fontSizes",
    defaultScale: defaults2.fontSizes
  },
  fontWeight: {
    property: "fontWeight",
    scale: "fontWeights"
  },
  lineHeight: {
    property: "lineHeight",
    scale: "lineHeights"
  },
  letterSpacing: {
    property: "letterSpacing",
    scale: "letterSpacings"
  },
  textAlign: true,
  fontStyle: true
};
var typography = system(config3);
var index_esm_default4 = typography;

// node_modules/@styled-system/flexbox/dist/index.esm.js
var config4 = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  // item
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true
};
var flexbox = system(config4);
var index_esm_default5 = flexbox;

// node_modules/@styled-system/grid/dist/index.esm.js
var defaults3 = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var config5 = {
  gridGap: {
    property: "gridGap",
    scale: "space",
    defaultScale: defaults3.space
  },
  gridColumnGap: {
    property: "gridColumnGap",
    scale: "space",
    defaultScale: defaults3.space
  },
  gridRowGap: {
    property: "gridRowGap",
    scale: "space",
    defaultScale: defaults3.space
  },
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
};
var grid = system(config5);
var index_esm_default6 = grid;

// node_modules/@styled-system/border/dist/index.esm.js
var config6 = {
  border: {
    property: "border",
    scale: "borders"
  },
  borderWidth: {
    property: "borderWidth",
    scale: "borderWidths"
  },
  borderStyle: {
    property: "borderStyle",
    scale: "borderStyles"
  },
  borderColor: {
    property: "borderColor",
    scale: "colors"
  },
  borderRadius: {
    property: "borderRadius",
    scale: "radii"
  },
  borderTop: {
    property: "borderTop",
    scale: "borders"
  },
  borderTopLeftRadius: {
    property: "borderTopLeftRadius",
    scale: "radii"
  },
  borderTopRightRadius: {
    property: "borderTopRightRadius",
    scale: "radii"
  },
  borderRight: {
    property: "borderRight",
    scale: "borders"
  },
  borderBottom: {
    property: "borderBottom",
    scale: "borders"
  },
  borderBottomLeftRadius: {
    property: "borderBottomLeftRadius",
    scale: "radii"
  },
  borderBottomRightRadius: {
    property: "borderBottomRightRadius",
    scale: "radii"
  },
  borderLeft: {
    property: "borderLeft",
    scale: "borders"
  },
  borderX: {
    properties: ["borderLeft", "borderRight"],
    scale: "borders"
  },
  borderY: {
    properties: ["borderTop", "borderBottom"],
    scale: "borders"
  }
};
config6.borderTopWidth = {
  property: "borderTopWidth",
  scale: "borderWidths"
};
config6.borderTopColor = {
  property: "borderTopColor",
  scale: "colors"
};
config6.borderTopStyle = {
  property: "borderTopStyle",
  scale: "borderStyles"
};
config6.borderTopLeftRadius = {
  property: "borderTopLeftRadius",
  scale: "radii"
};
config6.borderTopRightRadius = {
  property: "borderTopRightRadius",
  scale: "radii"
};
config6.borderBottomWidth = {
  property: "borderBottomWidth",
  scale: "borderWidths"
};
config6.borderBottomColor = {
  property: "borderBottomColor",
  scale: "colors"
};
config6.borderBottomStyle = {
  property: "borderBottomStyle",
  scale: "borderStyles"
};
config6.borderBottomLeftRadius = {
  property: "borderBottomLeftRadius",
  scale: "radii"
};
config6.borderBottomRightRadius = {
  property: "borderBottomRightRadius",
  scale: "radii"
};
config6.borderLeftWidth = {
  property: "borderLeftWidth",
  scale: "borderWidths"
};
config6.borderLeftColor = {
  property: "borderLeftColor",
  scale: "colors"
};
config6.borderLeftStyle = {
  property: "borderLeftStyle",
  scale: "borderStyles"
};
config6.borderRightWidth = {
  property: "borderRightWidth",
  scale: "borderWidths"
};
config6.borderRightColor = {
  property: "borderRightColor",
  scale: "colors"
};
config6.borderRightStyle = {
  property: "borderRightStyle",
  scale: "borderStyles"
};
var border = system(config6);
var index_esm_default7 = border;

// node_modules/@styled-system/background/dist/index.esm.js
var config7 = {
  background: true,
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true
};
config7.bgImage = config7.backgroundImage;
config7.bgSize = config7.backgroundSize;
config7.bgPosition = config7.backgroundPosition;
config7.bgRepeat = config7.backgroundRepeat;
var background = system(config7);
var index_esm_default8 = background;

// node_modules/@styled-system/position/dist/index.esm.js
var defaults4 = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var config8 = {
  position: true,
  zIndex: {
    property: "zIndex",
    scale: "zIndices"
  },
  top: {
    property: "top",
    scale: "space",
    defaultScale: defaults4.space
  },
  right: {
    property: "right",
    scale: "space",
    defaultScale: defaults4.space
  },
  bottom: {
    property: "bottom",
    scale: "space",
    defaultScale: defaults4.space
  },
  left: {
    property: "left",
    scale: "space",
    defaultScale: defaults4.space
  }
};
var position = system(config8);
var index_esm_default9 = position;

// node_modules/@styled-system/space/dist/index.esm.js
var defaults5 = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var isNumber3 = function isNumber4(n) {
  return typeof n === "number" && !isNaN(n);
};
var getMargin = function getMargin2(n, scale) {
  if (!isNumber3(n)) {
    return get3(scale, n, n);
  }
  var isNegative = n < 0;
  var absolute = Math.abs(n);
  var value = get3(scale, absolute, absolute);
  if (!isNumber3(value)) {
    return isNegative ? "-" + value : value;
  }
  return value * (isNegative ? -1 : 1);
};
var configs = {};
configs.margin = {
  margin: {
    property: "margin",
    scale: "space",
    transform: getMargin,
    defaultScale: defaults5.space
  },
  marginTop: {
    property: "marginTop",
    scale: "space",
    transform: getMargin,
    defaultScale: defaults5.space
  },
  marginRight: {
    property: "marginRight",
    scale: "space",
    transform: getMargin,
    defaultScale: defaults5.space
  },
  marginBottom: {
    property: "marginBottom",
    scale: "space",
    transform: getMargin,
    defaultScale: defaults5.space
  },
  marginLeft: {
    property: "marginLeft",
    scale: "space",
    transform: getMargin,
    defaultScale: defaults5.space
  },
  marginX: {
    properties: ["marginLeft", "marginRight"],
    scale: "space",
    transform: getMargin,
    defaultScale: defaults5.space
  },
  marginY: {
    properties: ["marginTop", "marginBottom"],
    scale: "space",
    transform: getMargin,
    defaultScale: defaults5.space
  }
};
configs.margin.m = configs.margin.margin;
configs.margin.mt = configs.margin.marginTop;
configs.margin.mr = configs.margin.marginRight;
configs.margin.mb = configs.margin.marginBottom;
configs.margin.ml = configs.margin.marginLeft;
configs.margin.mx = configs.margin.marginX;
configs.margin.my = configs.margin.marginY;
configs.padding = {
  padding: {
    property: "padding",
    scale: "space",
    defaultScale: defaults5.space
  },
  paddingTop: {
    property: "paddingTop",
    scale: "space",
    defaultScale: defaults5.space
  },
  paddingRight: {
    property: "paddingRight",
    scale: "space",
    defaultScale: defaults5.space
  },
  paddingBottom: {
    property: "paddingBottom",
    scale: "space",
    defaultScale: defaults5.space
  },
  paddingLeft: {
    property: "paddingLeft",
    scale: "space",
    defaultScale: defaults5.space
  },
  paddingX: {
    properties: ["paddingLeft", "paddingRight"],
    scale: "space",
    defaultScale: defaults5.space
  },
  paddingY: {
    properties: ["paddingTop", "paddingBottom"],
    scale: "space",
    defaultScale: defaults5.space
  }
};
configs.padding.p = configs.padding.padding;
configs.padding.pt = configs.padding.paddingTop;
configs.padding.pr = configs.padding.paddingRight;
configs.padding.pb = configs.padding.paddingBottom;
configs.padding.pl = configs.padding.paddingLeft;
configs.padding.px = configs.padding.paddingX;
configs.padding.py = configs.padding.paddingY;
var margin = system(configs.margin);
var padding = system(configs.padding);
var space = compose2(margin, padding);

// node_modules/@styled-system/shadow/dist/index.esm.js
var shadow = system({
  boxShadow: {
    property: "boxShadow",
    scale: "shadows"
  },
  textShadow: {
    property: "textShadow",
    scale: "shadows"
  }
});
var index_esm_default10 = shadow;

// node_modules/@styled-system/variant/dist/index.esm.js
var variant = function variant2(_ref) {
  var _config;
  var scale = _ref.scale, _ref$prop = _ref.prop, prop3 = _ref$prop === void 0 ? "variant" : _ref$prop, _ref$variants = _ref.variants, variants6 = _ref$variants === void 0 ? {} : _ref$variants, key = _ref.key;
  var sx2;
  if (Object.keys(variants6).length) {
    sx2 = function sx3(value, scale2, props4) {
      return index_esm_default(get3(scale2, value, null))(props4.theme);
    };
  } else {
    sx2 = function sx3(value, scale2) {
      return get3(scale2, value, null);
    };
  }
  sx2.scale = scale || key;
  sx2.defaults = variants6;
  var config10 = (_config = {}, _config[prop3] = sx2, _config);
  var parser = createParser(config10);
  return parser;
};
var buttonStyle = variant({
  key: "buttons"
});
var textStyle = variant({
  key: "textStyles",
  prop: "textStyle"
});
var colorStyle = variant({
  key: "colorStyles",
  prop: "colors"
});

// node_modules/styled-system/dist/index.esm.js
var width = index_esm_default2.width;
var height = index_esm_default2.height;
var minWidth = index_esm_default2.minWidth;
var minHeight = index_esm_default2.minHeight;
var maxWidth = index_esm_default2.maxWidth;
var maxHeight = index_esm_default2.maxHeight;
var size = index_esm_default2.size;
var verticalAlign = index_esm_default2.verticalAlign;
var display = index_esm_default2.display;
var overflow = index_esm_default2.overflow;
var overflowX = index_esm_default2.overflowX;
var overflowY = index_esm_default2.overflowY;
var opacity = index_esm_default3.opacity;
var fontSize = index_esm_default4.fontSize;
var fontFamily = index_esm_default4.fontFamily;
var fontWeight = index_esm_default4.fontWeight;
var lineHeight = index_esm_default4.lineHeight;
var textAlign = index_esm_default4.textAlign;
var fontStyle = index_esm_default4.fontStyle;
var letterSpacing = index_esm_default4.letterSpacing;
var alignItems = index_esm_default5.alignItems;
var alignContent = index_esm_default5.alignContent;
var justifyItems = index_esm_default5.justifyItems;
var justifyContent = index_esm_default5.justifyContent;
var flexWrap = index_esm_default5.flexWrap;
var flexDirection = index_esm_default5.flexDirection;
var flex = index_esm_default5.flex;
var flexGrow = index_esm_default5.flexGrow;
var flexShrink = index_esm_default5.flexShrink;
var flexBasis = index_esm_default5.flexBasis;
var justifySelf = index_esm_default5.justifySelf;
var alignSelf = index_esm_default5.alignSelf;
var order = index_esm_default5.order;
var gridGap = index_esm_default6.gridGap;
var gridColumnGap = index_esm_default6.gridColumnGap;
var gridRowGap = index_esm_default6.gridRowGap;
var gridColumn = index_esm_default6.gridColumn;
var gridRow = index_esm_default6.gridRow;
var gridAutoFlow = index_esm_default6.gridAutoFlow;
var gridAutoColumns = index_esm_default6.gridAutoColumns;
var gridAutoRows = index_esm_default6.gridAutoRows;
var gridTemplateColumns = index_esm_default6.gridTemplateColumns;
var gridTemplateRows = index_esm_default6.gridTemplateRows;
var gridTemplateAreas = index_esm_default6.gridTemplateAreas;
var gridArea = index_esm_default6.gridArea;
var borderWidth = index_esm_default7.borderWidth;
var borderStyle = index_esm_default7.borderStyle;
var borderColor = index_esm_default7.borderColor;
var borderTop = index_esm_default7.borderTop;
var borderRight = index_esm_default7.borderRight;
var borderBottom = index_esm_default7.borderBottom;
var borderLeft = index_esm_default7.borderLeft;
var borderRadius = index_esm_default7.borderRadius;
var backgroundImage = index_esm_default8.backgroundImage;
var backgroundSize = index_esm_default8.backgroundSize;
var backgroundPosition = index_esm_default8.backgroundPosition;
var backgroundRepeat = index_esm_default8.backgroundRepeat;
var zIndex = index_esm_default9.zIndex;
var top = index_esm_default9.top;
var right = index_esm_default9.right;
var bottom = index_esm_default9.bottom;
var left = index_esm_default9.left;

// node_modules/@styled-system/should-forward-prop/dist/index.esm.js
var all3 = compose2(space, typography, color, layout, flexbox, border, background, position, grid, shadow, buttonStyle, textStyle, colorStyle);
var props3 = all3.propNames;
var createShouldForwardProp = function createShouldForwardProp2(props4) {
  var regex = new RegExp("^(" + props4.join("|") + ")$");
  return memoize_browser_esm_default(function(prop3) {
    return is_prop_valid_browser_esm_default(prop3) && !regex.test(prop3);
  });
};
var index_esm_default11 = createShouldForwardProp(props3);

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Box/Box.js
var sx = (props4) => index_esm_default(props4.sx)(props4.theme);
var Box = styled_browser_esm_default("div", {
  shouldForwardProp: index_esm_default11
})({ boxSizing: "border-box" }, compose2(layout, color, space, background, border, grid, position, overflow, index_esm_default10, typography, flexbox), system({
  cursor: true,
  transition: {
    property: "transition",
    scale: "transitions"
  }
}), sx);

// node_modules/tslib/tslib.es6.js
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Icon/Icon.js
var import_react2 = __toESM(require_react());
var variants = {
  potty: { size: 10 },
  small: { size: 14 },
  medium: { size: 18 },
  large: { size: 24 }
};
var Svg = styled_browser_esm_default(Box)(variant({
  prop: "iconSize",
  variants
}), {
  flexShrink: 0,
  backfaceVisibility: "hidden",
  "&:not(:root)": {
    overflow: "hidden"
  }
});
var Icon = (0, import_react2.forwardRef)((props4, ref) => {
  const { icon: { path: path3, viewBox }, color: color2, iconSize, size: size2 } = props4, rest = __rest(props4, ["icon", "color", "iconSize", "size"]);
  const sizeProps = Object.assign({}, size2 ? { size: size2 } : { iconSize });
  return import_react2.default.createElement(
    Svg,
    Object.assign({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref,
      as: "svg",
      color: color2,
      display: "inline-block",
      verticalAlign: "middle",
      viewBox
    }, sizeProps, rest),
    path3
  );
});
Icon.displayName = "Icon";
Icon.defaultProps = {
  iconSize: "small",
  color: "currentColor"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/AssetLogo/AssetLogo.js
var import_react4 = __toESM(require_react());

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/icons/waves-logo.js
var import_react3 = __toESM(require_react());
var iconWavesLogo = {
  path: import_react3.default.createElement(
    "g",
    { fill: "none", fillRule: "evenodd" },
    import_react3.default.createElement("circle", { cx: "13", cy: "13", r: "13", fill: "#FFF" }),
    import_react3.default.createElement("path", { fill: "#3C6AE4", d: "M13 5.929L20.071 13 13 20.071 5.929 13z" })
  ),
  viewBox: "0 0 26 26"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/styled.js
var styled = styled_browser_esm_default;

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/AssetLogo/styles.js
var variants2 = {
  small: {
    width: "20px",
    height: "20px",
    ":before": {
      fontSize: "14px",
      lineHeight: "20px"
    }
  },
  medium: {
    width: "30px",
    height: "30px",
    ":before": {
      fontSize: "24px",
      lineHeight: "30px"
    }
  },
  large: {
    width: "45px",
    height: "45px",
    ":before": {
      fontSize: "36px",
      lineHeight: "45px"
    }
  }
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/AssetLogo/AssetLogo.js
var NAMES = ["name", "logo", "assetId"];
var getFontHeight = pipe(multiply_default(0.43), Math.round, String, flip_default(concat_default)("px"));
var getLineHeight = pipe(String, flip_default(concat_default)("px"));
var AssetLogo = styled(ifElse_default(pipe(prop_default("assetId"), isNil_default), (props4) => import_react4.default.createElement(Icon, Object.assign({}, omit_default(NAMES, props4), { icon: iconWavesLogo })), (props4) => import_react4.default.createElement(Box, Object.assign({}, omit_default(NAMES, props4)))))((data) => index_esm_default({
  borderRadius: "100%",
  backgroundSize: "100% 100%",
  ":before": {
    color: "text",
    display: "block",
    width: "100%",
    height: "100%",
    textAlign: "center",
    fontSize: pipe(getHeight, ifElse_default(is_default(Object), pipe(map_default(getFontHeight)), getFontHeight))(data),
    lineHeight: pipe(getHeight, ifElse_default(is_default(Object), map_default(getLineHeight), getLineHeight))(data)
  }
}), ifElse_default(pipe(prop_default("assetId"), isNil_default), () => null, ifElse_default(pipe(prop_default("logo"), isNil_default), applySpec_default({
  background: pipe(prop_default("assetId"), getAssetLogoBgColor),
  ":before": applySpec_default({
    content: pipe(prop_default("name"), getPrettyName, head_default, toUpper_default, wrapWith('"', '"'))
  })
}), applySpec_default({
  backgroundImage: pipe(prop_default("logo"), wrapWith("url(", ")"))
}))), variant({
  prop: "variant",
  variants: variants2
}));

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/AssetLogo/AssetLogoWithIcon.js
var import_react8 = __toESM(require_react());

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Flex/Flex.js
var import_react5 = __toESM(require_react());
var Flex = (0, import_react5.forwardRef)((props4, ref) => import_react5.default.createElement(Box, Object.assign({ ref, display: "flex" }, props4)));

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Text/styles.js
var variants3 = {
  body1: {
    fontSize: "$16",
    lineHeight: "$24"
  },
  bodySemiBold1: {
    fontSize: "$16",
    lineHeight: "$24",
    fontWeight: "$600"
  },
  body2: {
    fontSize: "$14",
    lineHeight: "$20"
  },
  bodySemiBold2: {
    fontSize: "$14",
    lineHeight: "$20",
    fontWeight: "$600"
  },
  bodyXL: {
    fontSize: "$20",
    lineHeight: "$24"
  },
  caption: {
    fontSize: "$12",
    lineHeight: "$16"
  },
  line: {
    fontSize: "$10",
    lineHeight: "$16"
  },
  heading1: {
    fontSize: "$56",
    lineHeight: "$64",
    fontWeight: "$700"
  },
  heading2: {
    fontSize: "$48",
    lineHeight: "$56",
    fontWeight: "$700"
  },
  heading3: {
    fontSize: "$32",
    lineHeight: "$40",
    fontWeight: "$700"
  },
  heading4: {
    fontSize: "$24",
    lineHeight: "$32",
    fontWeight: "$700"
  },
  heading5: {
    fontSize: "$20",
    lineHeight: "$24",
    fontWeight: "$700"
  },
  button1: {
    fontSize: "$16",
    lineHeight: "$24",
    fontWeight: "$500"
  },
  button2: {
    fontSize: "$14",
    lineHeight: "$26",
    fontWeight: "$500"
  }
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Text/Text.js
var truncate = (props4) => {
  if (props4.isTruncated === true) {
    return {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    };
  }
};
var getStyleFabric = (breakpoints2, _variantsKeys) => (property) => {
  const findVariantKey = (index2) => {
    if (index2 === 0) {
      return _variantsKeys[index2];
    }
    return _variantsKeys[index2] ? _variantsKeys[index2] : findVariantKey(index2 - 1);
  };
  const getValidKey = (i) => findVariantKey(i) || "body1";
  return breakpoints2.map((bp, i) => {
    return variants3[getValidKey(i)][property];
  });
};
var Text = styled_browser_esm_default(Box)(truncate, index_esm_default10, system({ textDecoration: true }), variant({
  prop: "variant",
  variants: variants3
}), (props4) => {
  const _variantsKeys = props4.variant;
  if (!Array.isArray(_variantsKeys)) {
    return {};
  }
  const stylesByVariant = getStyleFabric(props4.theme.breakpoints, _variantsKeys);
  const fontProps = {
    fontSize: stylesByVariant("fontSize"),
    lineHeight: stylesByVariant("lineHeight"),
    fontWeight: stylesByVariant("fontWeight"),
    variant: void 0
  };
  return index_esm_default(Object.assign({}, fontProps))(props4.theme);
});
Text.defaultProps = {
  as: "span"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Popper/Popper.js
var import_react6 = __toESM(require_react());

// node_modules/@popperjs/core/lib/enums.js
var top2 = "top";
var bottom2 = "bottom";
var right2 = "right";
var left2 = "left";
var auto = "auto";
var basePlacements = [top2, bottom2, right2, left2];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/utils/math.js
var max3 = Math.max;
var min3 = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width2 = clientRect.width / scaleX;
  var height2 = clientRect.height / scaleY;
  return {
    width: width2,
    height: height2,
    top: y,
    right: x + width2,
    bottom: y + height2,
    left: x,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width2 = element.offsetWidth;
  var height2 = element.offsetHeight;
  if (Math.abs(clientRect.width - width2) <= 1) {
    width2 = clientRect.width;
  }
  if (Math.abs(clientRect.height - height2) <= 1) {
    height2 = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width2,
    height: height2
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains4(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css3 = getComputedStyle(currentNode);
    if (css3.transform !== "none" || css3.perspective !== "none" || css3.contain === "paint" || ["transform", "perspective"].indexOf(css3.willChange) !== -1 || isFirefox && css3.willChange === "filter" || isFirefox && css3.filter && css3.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
function within(min4, value, max4) {
  return max3(min4, min3(value, max4));
}
function withinMaxClamp(min4, value, max4) {
  var v = within(min4, value, max4);
  return v > max4 ? max4 : v;
}

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys4) {
  return keys4.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding2, state) {
  padding2 = typeof padding2 === "function" ? padding2(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding2;
  return mergePaddingObject(typeof padding2 !== "number" ? padding2 : expandToHashMap(padding2, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left2, right2].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top2 : left2;
  var maxProp = axis === "y" ? bottom2 : right2;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min4 = paddingObject[minProp];
  var max4 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min4, center, max4);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (true) {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
    }
  }
  if (!contains4(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
    }
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position2 = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left2;
  var sideY = top2;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position2 === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top2 || (placement === left2 || placement === right2) && variation === end) {
      sideY = bottom2;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left2 || (placement === top2 || placement === bottom2) && variation === end) {
      sideX = right2;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles2 = Object.assign({
    position: position2
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles2, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles2, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  if (true) {
    var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || "";
    if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
    }
  }
  var commonStyles2 = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles2, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles2, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width2 = html.clientWidth;
  var height2 = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width2 = visualViewport.width;
    height2 = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width: width2,
    height: height2,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width2 = max3(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height2 = max3(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max3(html.clientWidth, body ? body.clientWidth : 0) - width2;
  }
  return {
    width: width2,
    height: height2,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow2 = _getComputedStyle.overflow, overflowX2 = _getComputedStyle.overflowX, overflowY2 = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow2 + overflowY2 + overflowX2);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains4(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max3(rect.top, accRect.top);
    accRect.right = min3(rect.right, accRect.right);
    accRect.bottom = min3(rect.bottom, accRect.bottom);
    accRect.left = max3(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top2:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom2:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right2:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left2:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding2 = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding2 !== "number" ? padding2 : expandToHashMap(padding2, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply3 = [right2, bottom2].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top2, bottom2].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply3;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding2 = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
    if (true) {
      console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
    }
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding: padding2
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip3(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding2 = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding: padding2,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top2, bottom2].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow2 = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding: padding2
    });
    var mainVariationSide = isVertical ? isStartVariation ? right2 : left2 : isStartVariation ? bottom2 : top2;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow2[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow2[mainVariationSide] <= 0, overflow2[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default2 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip3,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow2, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow2.top - rect.height - preventedOffsets.y,
    right: overflow2.right - rect.width + preventedOffsets.x,
    bottom: overflow2.bottom - rect.height + preventedOffsets.y,
    left: overflow2.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow2) {
  return [top2, right2, bottom2, left2].some(function(side) {
    return overflow2[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left2, top2].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left2, right2].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding2 = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow2 = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding: padding2,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top2 : left2;
    var altSide = mainAxis === "y" ? bottom2 : right2;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min4 = offset2 + overflow2[mainSide];
    var max4 = offset2 - overflow2[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min3(min4, tetherMin) : min4, offset2, tether ? max3(max4, tetherMax) : max4);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top2 : left2;
    var _altSide = mainAxis === "x" ? bottom2 : right2;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow2[_mainSide];
    var _max = _offset - overflow2[_altSide];
    var isOriginSide = [top2, left2].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order2(modifiers) {
  var map3 = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map3.set(modifier.name, modifier);
  });
  function sort5(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map3.get(dep);
        if (depModifier) {
          sort5(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort5(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order2(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/format.js
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return [].concat(args).reduce(function(p, c) {
    return p.replace(/%s/, c);
  }, str);
}

// node_modules/@popperjs/core/lib/utils/validateModifiers.js
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function validateModifiers(modifiers) {
  modifiers.forEach(function(modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index2, self) {
      return self.indexOf(value) === index2;
    }).forEach(function(key) {
      switch (key) {
        case "name":
          if (typeof modifier.name !== "string") {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
          }
          break;
        case "enabled":
          if (typeof modifier.enabled !== "boolean") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
          }
          break;
        case "phase":
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
          }
          break;
        case "fn":
          if (typeof modifier.fn !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "effect":
          if (modifier.effect != null && typeof modifier.effect !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "requires":
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
          }
          break;
        case "requiresIfExists":
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
          }
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
            return '"' + s + '"';
          }).join(", ") + '; but "' + key + '" was provided.');
      }
      modifier.requires && modifier.requires.forEach(function(requirement) {
        if (modifiers.find(function(mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

// node_modules/@popperjs/core/lib/utils/uniqueBy.js
function uniqueBy(arr, fn2) {
  var identifiers = /* @__PURE__ */ new Set();
  return arr.filter(function(item) {
    var identifier = fn2(item);
    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions2 = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper4(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions2;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions2),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions2, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        if (true) {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);
          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function(_ref2) {
              var name = _ref2.name;
              return name === "flip";
            });
            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
            }
          }
          var _getComputedStyle = getComputedStyle(popper2), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
          if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin2) {
            return parseFloat(margin2);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
          }
        }
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;
        for (var index2 = 0; index2 < state.orderedModifiers.length; index2++) {
          if (true) {
            __debug_loops__ += 1;
            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }
          if (state.reset === true) {
            state.reset = false;
            index2 = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index2], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect4 = _ref3.effect;
        if (typeof effect4 === "function") {
          var cleanupFn = effect4({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = popperGenerator();

// node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper2 = popperGenerator({
  defaultModifiers
});

// node_modules/@popperjs/core/lib/popper.js
var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default2, preventOverflow_default, arrow_default, hide_default];
var createPopper3 = popperGenerator({
  defaultModifiers: defaultModifiers2
});

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Popper/helpers.js
var mergeOptions = (options, modifierOptions, arrowEl) => Object.assign(Object.assign({}, options), { modifiers: [
  ...options.modifiers || [],
  {
    name: "arrow",
    enabled: Boolean(arrowEl),
    options: {
      padding: modifierOptions.arrowPadding,
      element: arrowEl
    }
  },
  {
    name: "offset",
    options: {
      offset: modifierOptions.offset
    }
  }
] });

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Popper/Popper.js
var defaultOptions = {
  placement: "left",
  strategy: "absolute"
};
var defaultModifierOptions = {
  arrowPadding: 5,
  offset: [0, 8]
};
var Popper = (_a) => {
  var { arrowEl, anchorEl, children, isOpen, options = {}, modifierOptions = {} } = _a, rest = __rest(_a, ["arrowEl", "anchorEl", "children", "isOpen", "options", "modifierOptions"]);
  const popperElemRef = (0, import_react6.useRef)();
  const popperInstanceRef = (0, import_react6.useRef)();
  const mergedOptions = (0, import_react6.useMemo)(() => mergeOptions(Object.assign(Object.assign({}, defaultOptions), options), Object.assign(Object.assign({}, defaultModifierOptions), modifierOptions), arrowEl), [options, modifierOptions, arrowEl]);
  const handlePopperRender = (0, import_react6.useCallback)(() => {
    if (!anchorEl || !popperElemRef.current || !arrowEl) {
      return;
    }
    popperInstanceRef.current = createPopper3(anchorEl, popperElemRef.current, mergedOptions);
  }, [anchorEl, arrowEl, mergedOptions]);
  const handleMountRef = (0, import_react6.useCallback)((node) => {
    popperElemRef.current = node;
    handlePopperRender();
  }, [handlePopperRender]);
  (0, import_react6.useLayoutEffect)(() => {
    return () => {
      popperInstanceRef.current && popperInstanceRef.current.destroy();
    };
  });
  if (!isOpen)
    return null;
  return import_react6.default.createElement(Box, Object.assign({ ref: handleMountRef }, rest), children);
};
var PopperArrow = (0, import_react6.forwardRef)((props4, ref) => {
  return import_react6.default.createElement("div", { "x-arrow": "", "data-popper-arrow": true, ref });
});

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Tooltip/Tooltip.js
var import_react7 = __toESM(require_react());

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Tooltip/styles.js
var borderWidth2 = 4;
var getBorderStyles = (variant3, placement) => {
  if (variant3 !== "info") {
    return null;
  }
  let key;
  switch (true) {
    case placement.includes("right"):
      key = "right";
      break;
    case placement.includes("top"):
      key = "top";
      break;
    case placement.includes("left"):
      key = "left";
      break;
    default:
      key = "bottom";
  }
  const styles = {
    bottom: {
      borderBottomLeftRadius: "8px",
      borderBottomRightRadius: "8px",
      borderTop: `${borderWidth2}px solid`
    },
    left: {
      borderBottomLeftRadius: "8px",
      borderTopLeftRadius: "8px",
      borderRight: `${borderWidth2}px solid`
    },
    right: {
      borderBottomRightRadius: "8px",
      borderTopRightRadius: "8px",
      borderLeft: `${borderWidth2}px solid`
    },
    top: {
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
      borderBottom: `${borderWidth2}px solid`
    }
  };
  return Object.assign(Object.assign({}, styles[key]), { borderColor: "main" });
};
var variants4 = {
  default: {
    styles: {
      p: "10px",
      borderRadius: "$4",
      border: "1px solid",
      borderColor: "mediumGrey.$850",
      bg: "rgba(0, 0, 0, .7)",
      color: "standard.$0",
      fontSize: "12px",
      lineHeight: "16px"
    },
    arrowColor: "transparent"
  },
  info: {
    styles: {
      p: "16px",
      bg: "surf",
      color: "text",
      fontSize: "12px",
      lineHeight: "16px"
    },
    arrowColor: "main"
  }
};
var getPopperArrowStyle = ({ arrowSize, hasArrow, color: color2 = "currentColor", variant: variant3 }) => {
  const arrowSizeNum = Number(arrowSize.replace("px", ""));
  return {
    "[data-popper-arrow]": {
      color: color2,
      border: `${arrowSizeNum}px solid`,
      borderColor: "currentColor",
      position: "absolute"
    },
    "&[data-popper-placement^='top']": Object.assign({ marginTop: hasArrow ? `-${arrowSizeNum + borderWidth2}px` : "0px" }, getBorderStyles(variant3, "top")),
    "&[data-popper-placement^='top'] [data-popper-arrow]": {
      top: `calc(100% + ${borderWidth2}px)`,
      borderColor: "currentColor transparent transparent transparent"
    },
    "&[data-popper-placement^='bottom']": Object.assign({ marginTop: hasArrow ? `${arrowSizeNum}px` : "0px" }, getBorderStyles(variant3, "bottom")),
    "&[data-popper-placement^='bottom'] [data-popper-arrow]": {
      bottom: `calc(100% + ${borderWidth2}px)`,
      borderColor: "transparent transparent currentColor transparent"
    },
    "&[data-popper-placement^='left']": Object.assign({ marginLeft: hasArrow ? `-${arrowSizeNum + borderWidth2}px` : "0px" }, getBorderStyles(variant3, "left")),
    "&[data-popper-placement^='left'] [data-popper-arrow]": {
      left: `calc(100% + ${borderWidth2}px)`,
      borderColor: "transparent transparent transparent currentColor"
    },
    "&[data-popper-placement^='right']": Object.assign({ marginLeft: hasArrow ? `${arrowSizeNum}px` : "0px" }, getBorderStyles(variant3, "right")),
    "&[data-popper-placement^='right'] [data-popper-arrow]": {
      right: `calc(100% + ${borderWidth2}px)`,
      borderColor: "transparent currentColor transparent transparent"
    }
  };
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Tooltip/Tooltip.js
var Tooltip = (_a) => {
  var { arrowColor, arrowSize = "8px", children, hasArrow = false, isOpen: isOpenProp, isDefaultOpen, label, maxWidth: maxWidth2 = "300px", showDelay, offset: offset2, arrowPadding, placement = "bottom", postPositionCb, popperOptions, interactive, variant: variant3 = "default" } = _a, rest = __rest(_a, ["arrowColor", "arrowSize", "children", "hasArrow", "isOpen", "isDefaultOpen", "label", "maxWidth", "showDelay", "offset", "arrowPadding", "placement", "postPositionCb", "popperOptions", "interactive", "variant"]);
  const [isOpen, setIsOpen] = (0, import_react7.useState)(isOpenProp || isDefaultOpen);
  const [anchorEl, setAnchorEl] = (0, import_react7.useState)(null);
  const [arrowRef, setArrowRef] = (0, import_react7.useState)(null);
  const [delayTimeout, setDelayTimeout] = (0, import_react7.useState)();
  (0, import_react7.useEffect)(() => {
    if (typeof isOpenProp !== void 0)
      setIsOpen(isOpenProp);
  }, [isOpenProp]);
  (0, import_react7.useLayoutEffect)(() => {
    postPositionCb && postPositionCb(arrowRef);
  });
  (0, import_react7.useEffect)(() => {
    return () => clearTimeout(delayTimeout);
  }, [delayTimeout]);
  const anchorRef = (0, import_react7.useCallback)((node) => {
    if (node !== null) {
      setAnchorEl(node);
    }
  }, []);
  const handleMouseEnter = (0, import_react7.useCallback)(() => {
    if (typeof isOpenProp !== "undefined")
      return;
    if (showDelay && delayTimeout) {
      clearTimeout(delayTimeout);
    }
    setIsOpen(true);
  }, [delayTimeout, isOpenProp, showDelay]);
  const handleMouseLeave = (0, import_react7.useCallback)(() => {
    if (typeof isOpenProp !== "undefined")
      return;
    if (showDelay) {
      setDelayTimeout(window.setTimeout(() => setIsOpen(false), showDelay));
    } else {
      setIsOpen(false);
    }
  }, [isOpenProp, showDelay]);
  let child = import_react7.Children.only(children);
  if ((0, import_react7.isValidElement)(child)) {
    child = (0, import_react7.cloneElement)(child, {
      ref: anchorRef,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave
    });
  }
  const useDisabledChildHack = Boolean(path_default(["props", "disabled"], child));
  const [overlayStyles, setOverlayStyles] = (0, import_react7.useState)({});
  (0, import_react7.useEffect)(() => {
    if (anchorEl && useDisabledChildHack) {
      const { width: width2, height: height2 } = anchorEl.getBoundingClientRect();
      setOverlayStyles({
        top: "0px",
        left: "0px",
        width: `${width2}px`,
        height: `${height2}px`,
        zIndex: 10
      });
    }
  }, [anchorEl, useDisabledChildHack]);
  return import_react7.default.createElement(
    "div",
    { style: { position: "relative" }, onClick: handleMouseEnter },
    useDisabledChildHack ? import_react7.default.createElement("div", { style: Object.assign({ position: "absolute", cursor: "not-allowed" }, overlayStyles), onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }) : null,
    child,
    import_react7.default.createElement(
      Popper,
      Object.assign({ anchorEl, arrowEl: arrowRef, isOpen, options: Object.assign({ placement }, popperOptions), modifierOptions: {
        offset: offset2,
        arrowPadding
      }, sx: Object.assign(Object.assign(Object.assign({}, getPopperArrowStyle({
        arrowSize: variant3 ? "8px" : arrowSize,
        hasArrow: !!variant3 || hasArrow,
        color: variants4[variant3] ? variants4[variant3].arrowColor : arrowColor,
        variant: variant3
      })), variants4[variant3] ? variants4[variant3].styles : {}), { filter: "drop-shadow(0px 6px 10px rgba(0, 0, 0, 0.14)) drop-shadow(0px 1px 18px rgba(0, 0, 0, 0.12)) drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.2))" }), maxWidth: maxWidth2, zIndex: 1 }, rest),
      import_react7.default.createElement("div", { onMouseEnter: interactive ? handleMouseEnter : void 0, onMouseLeave: interactive ? handleMouseLeave : void 0 }, typeof label === "function" ? label() : label),
      (hasArrow || variant3) && import_react7.default.createElement(PopperArrow, { ref: setArrowRef })
    )
  );
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/AssetLogo/AssetLogoWithIcon.js
var AssetLogoWithIcon = (_a) => {
  var { assetId, name, logo, variant: variant3, popperOptions, icon, iconLabel, iconVisible, size: size2 } = _a, rest = __rest(_a, ["assetId", "name", "logo", "variant", "popperOptions", "icon", "iconLabel", "iconVisible", "size"]);
  return import_react8.default.createElement(
    Box,
    Object.assign({ position: "relative" }, rest),
    import_react8.default.createElement(AssetLogo, { assetId, name, logo, variant: variant3, size: size2 }),
    iconVisible && import_react8.default.createElement(
      Tooltip,
      { variant: "info", label: () => import_react8.default.createElement(
        Flex,
        { color: "text", width: "max-content", maxWidth: "100%", alignItems: "center" },
        import_react8.default.createElement(
          Flex,
          { alignItems: "center", justifyContent: "center", size: "16px", borderRadius: "circle", backgroundColor: "surf", flex: "none" },
          import_react8.default.createElement(Icon, { icon, size: 10, color: "text" })
        ),
        import_react8.default.createElement(Text, { ml: "$8", variant: "body2" }, iconLabel)
      ), popperOptions: Object.assign({ modifiers: [
        {
          name: "flip",
          enabled: false
        }
      ], strategy: "fixed" }, popperOptions) },
      import_react8.default.createElement(
        Flex,
        { position: "absolute", bottom: -2, right: 3, width: 14, height: 14, justifyContent: "center", alignItems: "center", borderRadius: "circle", backgroundColor: "surf", cursor: "pointer", zIndex: 2 },
        import_react8.default.createElement(Icon, { icon, size: 8, color: "text" })
      )
    )
  );
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Avatar/Avatar.js
var import_react9 = __toESM(require_react());

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Avatar/styles.js
var variantSizes = {
  small: 27,
  medium: 30,
  large: 34,
  extraLarge: 50
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Avatar/Avatar.js
var Avatar = (_a) => {
  var { img, variantSize = "medium" } = _a, rest = __rest(_a, ["img", "variantSize"]);
  return import_react9.default.createElement(
    Box,
    Object.assign({ size: variantSizes[variantSize], display: "inline-block", borderRadius: "circle" }, rest),
    import_react9.default.createElement("img", { src: img, width: "100%", height: "100%", style: { borderRadius: "9999px" } })
  );
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Avatar/AddressAvatar/AvatarComponent.js
var import_react10 = __toESM(require_react());
var import_identity_img = __toESM(require_identity_img_min());
(0, import_identity_img.config)({ rows: 8, cells: 8 });
var AvatarComponent = (_a) => {
  var { address, variantSize = "medium" } = _a, rest = __rest(_a, ["address", "variantSize"]);
  const img = (0, import_identity_img.create)(address, {
    size: variantSizes[variantSize] * window.devicePixelRatio
  });
  return import_react10.default.createElement(Avatar, Object.assign({ img, variantSize }, rest));
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Avatar/AddressAvatar/AddressAvatar.js
var import_react12 = __toESM(require_react());

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Avatar/AddressAvatar/avatarIcons/info.js
var React10 = __toESM(require_react());
var iconInfo = {
  path: React10.createElement(
    React10.Fragment,
    null,
    React10.createElement("circle", { cx: "7", cy: "7", r: "7", fill: "#292F3C" }),
    React10.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.5 4H6.5V6.5H4V7.5H6.5V10H7.5V7.5H10V6.5H7.5V4Z", fill: "currentColor" })
  ),
  viewBox: "0 0 14 14"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Avatar/AddressAvatar/avatarIcons/ledgerMini.js
var React11 = __toESM(require_react());
var iconLedgerMini = {
  path: React11.createElement("path", { d: "M3.18249877,6.68126199 L3.18249877,5.86252398 L4.81750123,5.86252398 L4.81750123,7.5 L3.18249877,7.5 L3.18249877,6.68126199 Z M1.18859172,7.37704213 C0.947692926,7.26790793 0.759973687,7.08259475 0.6457439,6.84101131 C0.566657295,6.67373834 0.551236232,6.57813017 0.550922528,6.25191812 L0.550531222,5.86252398 L2.14565521,5.86252398 L2.14565521,7.46005027 L1.75684301,7.45914082 C1.45256431,7.45839672 1.32901584,7.44062107 1.18858016,7.37695945 L1.18859172,7.37704213 Z M5.85433323,6.66128712 L5.85432332,5.86252398 L7.5,5.86252398 L7.48041822,6.25191812 C7.45781497,6.70171638 7.39097936,6.89270124 7.1783239,7.11536808 C6.93213506,7.37315629 6.69837058,7.45922349 6.24313718,7.45965342 L5.85432332,7.46011641 L5.85433323,6.66128712 Z M0.550541129,4.00539057 L0.550541129,3.18663602 L2.18554524,3.18663602 L2.18554524,4.82412858 L0.550541129,4.82412858 L0.550541129,4.00539057 Z M3.18249877,2.6654706 L3.18249877,0.506796084 L4.90722738,0.518370924 C6.56782319,0.529945764 6.63876338,0.533252861 6.81497296,0.615103512 C7.04801427,0.72308023 7.21135866,0.878216152 7.33165285,1.05269859 C7.45196686,1.22718103 7.46940223,1.36903896 7.46940223,1.36903896 L7.48128999,3.09640188 L7.49317775,4.82373173 L3.18239475,4.82373173 L3.18249877,2.6654706 Z M0.518924649,1.7546134 C0.540553762,1.30486474 0.627136258,1.0745089 0.859482467,0.848518421 C1.0950879,0.619369667 1.30905762,0.540412726 1.75264267,0.519015808 L2.14566512,0.5 L2.14566512,2.14817448 L0.5,2.14817448 L0.518924649,1.7546134 Z", fillRule: "evenodd", fill: "currentColor" }),
  viewBox: "0 0 8 8"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Avatar/AddressAvatar/avatarIcons/smartMini.js
var React12 = __toESM(require_react());
var iconSmartMini = {
  path: React12.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M6.178 3.447a.617.617 0 0 1 .844-.9l2.133 2c.26.243.26.656 0 .9l-2.133 2a.617.617 0 0 1-.844-.9l1.654-1.55-1.654-1.55zm-4.01 1.55l1.654 1.55a.617.617 0 0 1-.844.9l-2.133-2a.617.617 0 0 1 0-.9l2.133-2a.617.617 0 0 1 .844.9l-1.654 1.55z" }),
  viewBox: "0 0 10 10"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Avatar/AddressAvatar/avatarIcons/walletKeeperMini.js
var React13 = __toESM(require_react());
var iconWalletKeeperMini = {
  path: React13.createElement(
    React13.Fragment,
    null,
    React13.createElement("path", { d: "M1.30127 0.982636C1.0694 1.16629 0.932124 1.43626 0.911062 1.73051C0.882125 2.13479 0.882508 2.4994 0.882904 2.87708L0.882904 2.87709V2.87711C0.883385 3.33877 0.887964 3.80033 0.895213 4.26192L0.895215 4.2621V4.26214L0.895216 4.26217C0.90129 4.64909 0.907391 5.03769 0.907391 5.50898C0.907391 5.64792 0.961358 5.81683 1.09195 6.0202C1.22198 6.2227 1.41371 6.43703 1.65286 6.65941C2.12792 7.10115 2.66177 7.47575 3.19223 7.84797L3.19224 7.84798C3.23549 7.87833 3.27873 7.90866 3.3219 7.93902C3.3309 7.94452 3.3397 7.94107 3.3397 7.93321V4.77944L2.17061 4.85654C1.70769 4.88707 1.31542 4.51982 1.31542 4.05589V3.33514C1.31542 2.86159 1.72339 2.49103 2.19476 2.53645L3.58191 2.6701C3.86136 2.69703 4.1457 2.69703 4.42516 2.6701L5.81231 2.53645C6.28368 2.49103 6.69165 2.86159 6.69165 3.33514V4.05589C6.69165 4.51982 6.29938 4.88707 5.83646 4.85654L4.66737 4.77944V7.93321C4.66737 7.94107 4.67618 7.94452 4.68517 7.93902C4.72799 7.90891 4.77086 7.87883 4.81376 7.84873L4.81483 7.84798L4.81484 7.84797L4.81485 7.84796C5.3453 7.47575 5.87916 7.10115 6.35422 6.65941C6.59337 6.43703 6.7851 6.2227 6.91512 6.0202C7.04572 5.81683 7.09968 5.64792 7.09968 5.50898C7.09968 5.03768 7.10578 4.64907 7.11186 4.26214V4.2621L7.11186 4.26192C7.11911 3.80033 7.12369 3.33877 7.12417 2.87711V2.87709C7.12457 2.49941 7.12495 2.1348 7.09601 1.73051C7.07495 1.43626 6.93767 1.16629 6.7058 0.982636C5.15282 -0.249637 2.85371 -0.249204 1.30127 0.982636Z", fill: "currentColor" }),
    React13.createElement("path", { d: "M2.7629 3.13477C2.56593 3.13477 2.40625 3.29444 2.40625 3.49141L2.40625 3.94548C2.40625 4.09461 2.53379 4.21185 2.6824 4.19933L3.05136 4.16822C3.1569 4.15932 3.23804 4.07106 3.23804 3.96514L3.23804 3.49141C3.23804 3.29444 3.07836 3.13477 2.88139 3.13477H2.7629Z", fill: "currentColor" }),
    React13.createElement("path", { d: "M5.12936 3.13477C4.93239 3.13477 4.77271 3.29444 4.77271 3.49141V3.96703C4.77271 4.07216 4.85268 4.16004 4.95735 4.16992L5.3258 4.20472C5.47529 4.21884 5.6045 4.10126 5.6045 3.9511L5.6045 3.49141C5.6045 3.29444 5.44482 3.13477 5.24785 3.13477H5.12936Z", fill: "currentColor" })
  ),
  viewBox: "0 0 8 8"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Avatar/AddressAvatar/avatarIcons/metamask.js
var React14 = __toESM(require_react());
var metamask = {
  path: React14.createElement(
    React14.Fragment,
    null,
    React14.createElement("path", { fill: "#CDBDB2", fillRule: "evenodd", d: "M8.586 25.51l3.93 1.044V25.19l.321-.32h2.246v2.726h-2.406l-2.968-1.283-1.123-.802z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#CDBDB2", fillRule: "evenodd", d: "M21.414 25.51l-3.85 1.044V25.19l-.321-.32h-2.246v2.726h2.406l2.968-1.283 1.043-.802z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#393939", fillRule: "evenodd", d: "M12.833 22.54l-.321 2.647.4-.321h4.172l.481.32-.32-2.646-.643-.401-3.208.08-.561.32z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#F89C35", fillRule: "evenodd", d: "M10.668 4.656l1.925 4.492.883 13.075h3.128l.962-13.075 1.765-4.492h-8.663z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#F89D35", fillRule: "evenodd", d: "M2.246 14.518L0 21.015l5.615-.321h3.61v-2.807l-.161-5.776-.802.642-6.016 1.765z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#D87C30", fillRule: "evenodd", d: "M6.496 15.242l6.577.16-.721 3.37-3.129-.803-2.727-2.727z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#EA8D3A", fillRule: "evenodd", d: "M6.496 15.324l2.727 2.567v2.567l-2.727-5.134z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#F89D35", fillRule: "evenodd", d: "M9.227 17.967l3.208.802 1.043 3.45-.722.4-3.53-2.085v-2.567z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#EB8F35", fillRule: "evenodd", d: "M9.228 20.537l-.642 4.973 4.251-2.968-3.61-2.005z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#EA8E3A", fillRule: "evenodd", d: "M13.076 15.4l.4 6.818-1.203-3.489.803-3.329z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#D87C30", fillRule: "evenodd", d: "M5.54 20.617l3.689-.08-.642 4.973-3.048-4.893z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#EB8F35", fillRule: "evenodd", d: "M1.765 27.672l6.818-2.166-3.048-4.893L0 21.014l1.765 6.658z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#E8821E", fillRule: "evenodd", d: "M12.592 9.145l-3.449 2.887-2.647 3.209 6.577.24-.48-6.336z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#DFCEC3", fillRule: "evenodd", d: "M8.586 25.505l4.251-2.968-.32 2.567v1.444l-2.888-.562-1.043-.481zM21.414 25.505l-4.171-2.968.32 2.567v1.444l2.889-.562.962-.481z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#393939", fillRule: "evenodd", d: "M11.31 16.848l.883 1.845-3.128-.803 2.246-1.042z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#E88F35", fillRule: "evenodd", d: "M1.682.883L12.59 9.145l-1.845-4.492L1.682.883z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#8E5A30", fillRule: "evenodd", d: "M1.684.883L.24 5.295l.802 4.812-.561.321.802.722-.642.561.883.803-.562.48L2.246 14.6l6.016-1.845c2.94-2.353 4.384-3.556 4.331-3.61-.053-.053-3.69-2.807-10.909-8.261z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#F89D35", fillRule: "evenodd", d: "M27.754 14.518L30 21.015l-5.615-.321h-3.61v-2.807l.161-5.776.802.642 6.016 1.765z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#D87C30", fillRule: "evenodd", d: "M23.504 15.242l-6.578.16.722 3.37 3.129-.803 2.727-2.727z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#EA8D3A", fillRule: "evenodd", d: "M23.504 15.324l-2.727 2.567v2.567l2.727-5.134z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#F89D35", fillRule: "evenodd", d: "M20.773 17.965l-3.208.802-1.043 3.45.722.4 3.53-2.085v-2.567z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#EB8F35", fillRule: "evenodd", d: "M20.772 20.537l.642 4.973-4.171-2.887 3.53-2.086z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#EA8E3A", fillRule: "evenodd", d: "M16.924 15.4l-.4 6.818 1.203-3.489-.803-3.329z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#D87C30", fillRule: "evenodd", d: "M24.46 20.617l-3.689-.08.642 4.973 3.048-4.893z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#EB8F35", fillRule: "evenodd", d: "M28.235 27.672l-6.818-2.166 3.048-4.893 5.535.401-1.765 6.658z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#E8821E", fillRule: "evenodd", d: "M17.408 9.145l3.449 2.887 2.647 3.209-6.578.24.482-6.336z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#393939", fillRule: "evenodd", d: "M18.69 16.848l-.883 1.845 3.128-.803-2.246-1.042z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#E88F35", fillRule: "evenodd", d: "M28.318.883L17.41 9.145l1.845-4.492 9.064-3.77z", clipRule: "evenodd" }),
    React14.createElement("path", { fill: "#8E5A30", fillRule: "evenodd", d: "M28.316.883l1.444 4.412-.802 4.812.561.321-.802.722.642.561-.883.803.562.48-1.284 1.605-6.016-1.845c-2.94-2.353-4.384-3.556-4.331-3.61.053-.053 3.69-2.807 10.909-8.261z", clipRule: "evenodd" })
  ),
  viewBox: "0 0 30 30"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Avatar/AddressAvatar/helpers.js
var getIcon = ({ isSmart, userType }) => {
  switch (true) {
    case (isSmart && userType === USER_TYPES.wavesKeeper):
      return iconInfo;
    case (isSmart && userType === USER_TYPES.ledger):
      return iconInfo;
    case isSmart:
      return iconSmartMini;
    case userType === USER_TYPES.ledger:
      return iconLedgerMini;
    case userType === USER_TYPES.wavesKeeper:
      return iconWalletKeeperMini;
    case userType === USER_TYPES.metamask:
      return metamask;
    default:
      return null;
  }
};
var getTooltipContent = ({ isSmart, userType, tooltipLabels }) => {
  switch (true) {
    case (isSmart && userType === USER_TYPES.wavesKeeper):
      return [
        {
          icon: iconWalletKeeperMini,
          label: tooltipLabels[TOOLTIP_LABELS.keepertText]
        },
        {
          icon: iconSmartMini,
          label: tooltipLabels[TOOLTIP_LABELS.scriptText]
        }
      ];
    case (isSmart && userType === USER_TYPES.ledger):
      return [
        {
          icon: iconLedgerMini,
          label: tooltipLabels[TOOLTIP_LABELS.ledgerText]
        },
        {
          icon: iconSmartMini,
          label: tooltipLabels[TOOLTIP_LABELS.scriptText]
        }
      ];
    default:
      return null;
  }
};
var animatedGradient = keyframes`
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
`;

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Avatar/AddressAvatar/BoxWithIcon.js
var React16 = __toESM(require_react());

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Avatar/AddressAvatar/TooltipIcon.js
var React15 = __toESM(require_react());
var TooltipIcon = ({ icon, popperOptions, label }) => React15.createElement(
  Tooltip,
  { arrowSize: "4px", hasArrow: true, arrowColor: "#5A81EA", offset: 4, label, placement: "bottom", popperOptions, zIndex: 100 },
  React15.createElement(
    Flex,
    { position: "absolute", bottom: 0, right: 0, width: 16, height: 16, justifyContent: "center", alignItems: "center", borderRadius: "circle", backgroundColor: "darkGrey.$800", cursor: "pointer", zIndex: 1 },
    React15.createElement(Icon, { icon, size: 10, color: "standard.$0" })
  )
);
TooltipIcon.displayName = "TooltipIcon";

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Avatar/AddressAvatar/BoxWithIcon.js
var import_react11 = __toESM(require_react());
var IconNode = ({ icon }) => React16.createElement(
  Flex,
  { position: "absolute", zIndex: 1, bottom: 0, right: 0, width: 16, height: 16, justifyContent: "center", alignItems: "center", borderRadius: "circle", backgroundColor: "bgsec", cursor: "pointer" },
  React16.createElement(Icon, { icon, size: 10, color: "text" })
);
var NotifyNode = () => React16.createElement(
  Flex,
  { position: "absolute", zIndex: 1, top: 0, right: 0, width: 10, height: 10, justifyContent: "center", alignItems: "center", borderRadius: "circle", backgroundColor: "bgsec", cursor: "pointer" },
  React16.createElement(Box, { size: 6, borderRadius: "circle", backgroundColor: "textnegative" })
);
IconNode.displayName = "IconNode";
var BoxWithIcon = (_a) => {
  var { children, icon, tooltipLabel, popperOptions, hasNotify } = _a, rest = __rest(_a, ["children", "icon", "tooltipLabel", "popperOptions", "hasNotify"]);
  const notifyNode = (0, import_react11.useMemo)(() => {
    return hasNotify ? React16.createElement(NotifyNode, null) : null;
  }, [hasNotify]);
  const iconNode = (0, import_react11.useMemo)(() => {
    if (!icon) {
      return null;
    }
    if (!tooltipLabel) {
      return React16.createElement(IconNode, { icon });
    }
    return React16.createElement(TooltipIcon, { icon, label: tooltipLabel, popperOptions });
  }, [tooltipLabel, icon, popperOptions]);
  return React16.createElement(
    Box,
    Object.assign({ position: "relative", display: "inline-block" }, rest),
    children,
    notifyNode,
    iconNode
  );
};
BoxWithIcon.displayName = "BoxWithIcon";

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Avatar/AddressAvatar/TooltipLabel.js
var React17 = __toESM(require_react());
var TooltipLabel = ({ content }) => {
  return React17.createElement(Flex, { flexDirection: "column", borderTop: "4px solid", borderTopColor: "main", backgroundColor: "#4a5060", borderRadius: "$4", py: "8px", px: "12px", color: "standard.$0", maxWidth: "100%", zIndex: 1 }, content.map(({ icon, label }, index2) => React17.createElement(
    Flex,
    { key: label, alignItems: "center", mt: index2 ? 8 : 0 },
    React17.createElement(
      Flex,
      { alignItems: "center", justifyContent: "center", size: "16px", borderRadius: "circle", backgroundColor: "darkGrey.$600", flex: "none", mr: "4px" },
      React17.createElement(Icon, { icon, size: 10, color: "standard.$0" })
    ),
    React17.createElement(Text, { ml: "$10", variant: "body2", sx: { whiteSpace: "nowrap" } }, label)
  )));
};
TooltipLabel.displayName = "TooltipLabel";

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Avatar/AddressAvatar/AddressAvatar.js
var TOOLTIP_LABELS;
(function(TOOLTIP_LABELS2) {
  TOOLTIP_LABELS2["scriptText"] = "scriptText";
  TOOLTIP_LABELS2["keepertText"] = "keepertText";
  TOOLTIP_LABELS2["ledgerText"] = "ledgerText";
})(TOOLTIP_LABELS || (TOOLTIP_LABELS = {}));
var USER_TYPES;
(function(USER_TYPES2) {
  USER_TYPES2["wavesKeeper"] = "wavesKeeper";
  USER_TYPES2["ledger"] = "ledger";
  USER_TYPES2["metamask"] = "metamask";
  USER_TYPES2["seed"] = "seed";
  USER_TYPES2["privateKey"] = "privateKey";
  USER_TYPES2["cognito"] = "cognito";
  USER_TYPES2["backdoor"] = "backdoor";
})(USER_TYPES || (USER_TYPES = {}));
var AddressAvatar = (_a) => {
  var { isSmart = false, userType = USER_TYPES.seed, tooltipLabels, hasNotify = false } = _a, rest = __rest(_a, ["isSmart", "userType", "tooltipLabels", "hasNotify"]);
  const icon = getIcon({ isSmart, userType });
  const tooltipContent = getTooltipContent({
    isSmart,
    userType,
    tooltipLabels
  });
  return import_react12.default.createElement(
    BoxWithIcon,
    { icon, hasNotify, tooltipLabel: Array.isArray(tooltipContent) && tooltipContent.length ? () => import_react12.default.createElement(TooltipLabel, { content: tooltipContent }) : null },
    import_react12.default.createElement(AvatarComponent, Object.assign({}, rest))
  );
};
AddressAvatar.displayName = "AddressAvatar";

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Button/styles.js
var variants5 = {
  primary: {
    bg: "main",
    color: "standard.$0",
    outline: "none",
    ":hover:not(:disabled)": {
      bg: "blue.$500"
    },
    ":focus:not(:disabled)": {
      bg: "blue.$700"
    },
    ":active": {
      bg: "blue.$700"
    },
    ":disabled": {
      bg: "surfmut",
      color: "textmuted"
    }
  },
  transparent: {
    bg: "transparent",
    color: "text",
    border: "1px solid",
    borderColor: "border",
    outline: "none",
    ":hover:not(:disabled)": {
      border: "1px solid",
      borderColor: "button.transparent.border.hover",
      color: "textsec"
    },
    ":focus:not(:disabled)": {
      border: "1px solid",
      borderColor: "button.transparent.border.focus",
      color: "textsec"
    },
    ":active": {
      border: "1px solid",
      borderColor: "button.transparent.border.focus",
      color: "textsec"
    },
    ":disabled": {
      color: "textmuted",
      border: "1px solid",
      borderColor: "surfmut",
      backgroundColor: "surfmut"
    }
  }
};
var variantSizes2 = {
  extraLarge: {
    fontSize: "$16",
    lineHeight: "$24",
    height: "56px",
    paddingLeft: "$16",
    paddingRight: "$16"
  },
  large: {
    fontSize: "$16",
    lineHeight: "$24",
    height: "48px",
    paddingLeft: "$12",
    paddingRight: "$12"
  },
  medium: {
    fontSize: "$14",
    lineHeight: "$24",
    height: "40px",
    paddingLeft: "$8",
    paddingRight: "$8"
  },
  small: {
    fontSize: "$14",
    lineHeight: "$24",
    height: "32px",
    paddingLeft: "$8",
    paddingRight: "$8"
  }
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Button/Button.js
var Button = styled_browser_esm_default(Box)({
  cursor: "pointer",
  ":disabled": {
    cursor: "not-allowed"
  }
}, variant({
  prop: "variant",
  variants: variants5
}), variant({
  prop: "variantSize",
  variants: variantSizes2
}));
Button.defaultProps = {
  as: "button",
  type: "button",
  border: 0,
  borderRadius: "$4",
  transition: "default",
  fontWeight: 500,
  variant: "primary",
  variantSize: "medium"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/ExternalLink/ExternalLink.js
var ExternalLink = styled_browser_esm_default(Text)();
ExternalLink.defaultProps = {
  as: "a",
  display: "inline",
  textDecoration: "none",
  color: "main",
  referrerPolicy: "strict-origin",
  target: "_blank"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Heading/Heading.js
var import_react13 = __toESM(require_react());
var Heading = (_a) => {
  var { level, children } = _a, rest = __rest(_a, ["level", "children"]);
  return import_react13.default.createElement(Text, Object.assign({ as: `h${String(level)}`, m: 0, variant: `heading${level}` }, rest), children);
};
Heading.defaultProps = {
  level: 1,
  fontWeight: 700
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Help/Help.js
var import_react15 = __toESM(require_react());

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/icons/question.js
var import_react14 = __toESM(require_react());
var iconQuestion = {
  path: import_react14.default.createElement(
    import_react14.default.Fragment,
    null,
    import_react14.default.createElement("circle", { cx: "8", cy: "8", r: "7.5", stroke: "currentColor", id: "circle" }),
    import_react14.default.createElement("path", { d: "M5.45312 5.84902C5.46044 5.50107 5.56284 5.20239 5.76033 4.95297C5.96148 4.70356 6.23212 4.51265 6.57225 4.38025C6.91237 4.24784 7.29273 4.18164 7.71331 4.18164C8.17779 4.18164 8.57277 4.25246 8.89827 4.3941C9.22742 4.53575 9.47794 4.73897 9.64983 5.00378C9.82172 5.26551 9.90767 5.57651 9.90767 5.93677C9.90767 6.2139 9.84001 6.46947 9.70469 6.70349C9.57303 6.93443 9.40297 7.15151 9.1945 7.35473C8.98604 7.55796 8.76478 7.75195 8.53071 7.9367C8.32956 8.09374 8.19424 8.27079 8.12475 8.46786C8.05527 8.66493 8.02052 8.87739 8.02052 9.10525V9.59073", stroke: "currentColor", id: "figure" }),
    import_react14.default.createElement("path", { d: "M8.95401 11.1811C8.63583 11.4993 8.63583 11.4993 7.99947 12.1357C7.68129 11.8175 7.3631 11.4993 7.04492 11.1811C7.3631 10.8629 7.68129 10.5447 7.99947 10.2266C8.31765 10.5447 8.63583 10.8629 8.95401 11.1811Z", fill: "currentColor", id: "dot" })
  ),
  viewBox: "0 0 16 16"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Help/Help.js
var Help = ({ align, direction = "auto", maxWidth: maxWidth2 = "300px", contentBefore, contentAfter, children, isDisabledIcon = false, isOpenContent = void 0, sizeIcon = "16px", colors: colors2 = {} }) => {
  colors2.hovered = colors2.hovered || "help.hover";
  colors2.active = colors2.active || "help.active";
  colors2.disabled = colors2.disabled || "help.disabled";
  const placement = (0, import_react15.useMemo)(() => {
    switch (align) {
      case "left":
        return `${direction}-start`;
      case "right":
        return `${direction}-end`;
      default:
        return direction;
    }
  }, [direction, align]);
  const offset2 = (0, import_react15.useMemo)(() => {
    const offsetY = 8;
    switch (align) {
      case "left":
        return [-8, offsetY];
      case "right":
        return [8, offsetY];
      default:
        return [0, offsetY];
    }
  }, [align]);
  const currentСolorOnHover = import_react15.default.useMemo(() => {
    const currentColor = isDisabledIcon ? colors2.disabled : colors2.hovered;
    return {
      svg: {
        color: currentColor
      }
    };
  }, [isDisabledIcon, colors2]);
  const currentColorIcon = import_react15.default.useMemo(() => {
    return isDisabledIcon ? colors2.disabled : colors2.active;
  }, [isDisabledIcon, colors2]);
  return import_react15.default.createElement(
    Tooltip,
    { label: () => import_react15.default.createElement(Box, null, children), placement, variant: "info", interactive: true, showDelay: 500, maxWidth: maxWidth2, offset: offset2, isOpen: isOpenContent },
    import_react15.default.createElement(
      Flex,
      { alignItems: "center", cursor: "pointer", sx: {
        ":hover": currentСolorOnHover
      } },
      typeof contentBefore === "function" && import_react15.default.createElement(Box, null, contentBefore()),
      import_react15.default.createElement(Icon, { icon: iconQuestion, size: sizeIcon, color: currentColorIcon, sx: {
        fill: "transparent"
      } }),
      typeof contentAfter === "function" && import_react15.default.createElement(Box, null, contentAfter())
    )
  );
};
Help.displayName = "Help";

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/IconButton/IconButton.js
var import_react16 = __toESM(require_react());
var iconButtonTestId = "icon-button";
var IconButton = (_a) => {
  var { children, _hover, _focus, _disabled, _disabledAndHover } = _a, rest = __rest(_a, ["children", "_hover", "_focus", "_disabled", "_disabledAndHover"]);
  return import_react16.default.createElement(Button, Object.assign({ sx: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ":hover:disabled": _disabledAndHover,
    ":focus": _focus,
    ":hover": _hover,
    ":disabled": _disabled
  } }, rest, { "data-testid": iconButtonTestId }), children);
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Checkbox/Checkbox.js
var import_react18 = __toESM(require_react());

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/ControlBox/ControlBox.js
var ControlBox = styled_browser_esm_default(Flex)(({ type: type3 = "checkbox", _hover, _invalid, _disabled, _focus, _checked, _child = { opacity: 0 }, _checkedAndChild = { opacity: 1 }, _checkedAndDisabled, _checkedAndDisabledHover, _checkedAndFocus, _checkedAndHover }) => {
  const checkedAndDisabled = `input[type=${type3}]:checked:disabled + &, input[type=${type3}][aria-checked=mixed]:disabled + &`;
  const checkedAndHover = `input[type=${type3}]:checked:hover:not(:disabled) + &, input[type=${type3}][aria-checked=mixed]:hover:not(:disabled) + &`;
  const checkedAndFocus = `input[type=${type3}]:checked:focus + &, input[type=${type3}][aria-checked=mixed]:focus + &`;
  const disabled = `input[type=${type3}]:disabled + &`;
  const focus = `input[type=${type3}]:focus + &`;
  const hover = `input[type=${type3}]:hover:not(:disabled):not(:checked) + &`;
  const checkedAndDisabledHover = `input[type=${type3}]:hover:disabled:checked + &`;
  const checked = `input[type=${type3}]:checked + &, input[type=${type3}][aria-checked=mixed] + &`;
  const invalid = `input[type=${type3}][aria-invalid=true] + &`;
  return index_esm_default(Object.assign(Object.assign({ [focus]: _focus, [hover]: _hover, [disabled]: _disabled, [invalid]: _invalid, [checkedAndDisabled]: _checkedAndDisabled, [checkedAndFocus]: _checkedAndFocus, [checkedAndHover]: _checkedAndHover, [checkedAndDisabledHover]: _checkedAndDisabledHover }, { "& > *": _child }), { [checked]: Object.assign(Object.assign({}, _checked), { "& > *": _checkedAndChild }) }));
});
ControlBox.displayName = "ControlBox";
ControlBox.defaultProps = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  "aria-hidden": "true"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Checkbox/styles.js
var defaultControlBoxStyles = {
  baseStyles: {
    userSelect: "none",
    border: "1px solid",
    color: "white",
    borderColor: "border",
    backgroundColor: "transparent",
    borderRadius: "$2",
    transition: "all 120ms, background-color 120ms, box-shadow 250ms",
    width: "20px",
    height: "20px"
  },
  _hover: {
    opacity: 0.8
  },
  _child: {
    opacity: 0
  },
  _checkedAndChild: {
    opacity: 1
  },
  _checked: {
    backgroundColor: "main",
    borderColor: "main",
    ":hover": {
      opacity: 0.8
    }
  },
  _checkedAndHover: {
    borderColor: "main",
    opacity: 0.8
  },
  _checkedAndDisabled: {
    opacity: 0.5
  },
  _checkedAndDisabledHover: {
    opacity: 0.5
  },
  _disabled: {
    opacity: 0.5
  },
  _invalid: {
    borderColor: "textnegative"
  }
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/icons/check.js
var import_react17 = __toESM(require_react());
var iconCheck = {
  path: import_react17.default.createElement(
    "g",
    { fill: "currentColor", fillRule: "evenodd" },
    import_react17.default.createElement("path", { fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd", d: "M10.6477 0L3.91373 6.38977L1.33292 3.98641L0 5.30951L3.87398 9H3.89062L12 1.29612L10.6477 0Z" })
  ),
  viewBox: "0 0 12 9"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/constants.js
var VISUALLY_HIDDEN_CSS = {
  border: "0px",
  clip: "rect(0px, 0px, 0px, 0px)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Checkbox/Checkbox.js
var checkBoxTestId = "checkbox";
var checkBoxInputTestId = "checkbox-input";
var controlBoxTestId = "control-box";
var Checkbox = (_a) => {
  var { children, controlBox, controlBoxStyles = {}, id, name, value, isChecked, defaultChecked, isFullWidth, isDisabled, isReadOnly, isInvalid = false, onChange, onBlur, onFocus } = _a, rest = __rest(_a, ["children", "controlBox", "controlBoxStyles", "id", "name", "value", "isChecked", "defaultChecked", "isFullWidth", "isDisabled", "isReadOnly", "isInvalid", "onChange", "onBlur", "onFocus"]);
  const controlStyles = mergeDeepRight_default(defaultControlBoxStyles, controlBoxStyles);
  const { baseStyles } = controlStyles, restControlStyles = __rest(controlStyles, ["baseStyles"]);
  return import_react18.default.createElement(
    Flex,
    Object.assign({ as: "label", display: "inline-flex", verticalAlign: "top", alignItems: "center", width: isFullWidth ? "full" : void 0, cursor: isDisabled ? "not-allowed" : "pointer", "data-testid": checkBoxTestId }, rest),
    import_react18.default.createElement("input", { style: VISUALLY_HIDDEN_CSS, id, type: "checkbox", name, value, onChange: isReadOnly ? void 0 : onChange, onBlur, onFocus, defaultChecked: isReadOnly ? void 0 : defaultChecked, checked: isReadOnly ? Boolean(isChecked) : defaultChecked ? void 0 : isChecked, disabled: isDisabled, readOnly: isReadOnly, "data-testid": checkBoxInputTestId, "aria-invalid": isInvalid }),
    controlBox ? controlBox() : import_react18.default.createElement(
      ControlBox,
      Object.assign({ sx: baseStyles }, restControlStyles, { "data-testid": controlBoxTestId }),
      import_react18.default.createElement(Icon, { icon: iconCheck, size: 12, height: 9 })
    ),
    children
  );
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Copy/Copy.js
var import_react21 = __toESM(require_react());

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Copy/LightCopy.js
var import_react19 = __toESM(require_react());
var hasNativeCopy = () => {
  var _a, _b;
  return !!((_b = (_a = navigator) === null || _a === void 0 ? void 0 : _a.clipboard) === null || _b === void 0 ? void 0 : _b.writeText);
};
var nativeCopy = (text) => navigator.clipboard.writeText(text);
var oldCopy = (text, ref, cb) => {
  if (!ref || !text) {
    return;
  }
  const range3 = new Range();
  range3.setStart(ref, 0);
  range3.setEnd(ref, 1);
  const selection = window.getSelection();
  if (!selection)
    return;
  selection.removeAllRanges();
  selection.addRange(range3);
  document.execCommand("copy");
  if (typeof cb === "function") {
    cb(text);
  }
};
var copy = (text, ref, cb) => {
  const onCopy = () => {
    if (typeof cb === "function") {
      cb(text);
    }
  };
  if (hasNativeCopy()) {
    nativeCopy(text).then(onCopy).catch((e) => {
      console.warn(e);
    });
  } else {
    oldCopy(text, ref, cb);
  }
};
var LightCopy = (_a) => {
  var { children, text, onTextCopy } = _a, rest = __rest(_a, ["children", "text", "onTextCopy"]);
  const ref = (0, import_react19.createRef)();
  const handleClick = (0, import_react19.useCallback)(() => {
    if (!ref.current)
      return;
    const p = ref.current;
    copy(text, p, onTextCopy);
  }, [onTextCopy, ref, text]);
  return import_react19.default.createElement(
    Box,
    Object.assign({ onClick: handleClick }, rest),
    children,
    import_react19.default.createElement("div", { ref, style: VISUALLY_HIDDEN_CSS }, text)
  );
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/icons/copy.js
var import_react20 = __toESM(require_react());
var iconCopy = {
  path: import_react20.default.createElement(
    import_react20.default.Fragment,
    null,
    import_react20.default.createElement("path", { d: "M5.5 5.5L14.5 5.5V14.5H5.5V5.5Z", stroke: "currentColor", fill: "transparent", strokeWidth: "1.2" }),
    import_react20.default.createElement("path", { d: "M10.5 4V1.5H1.5V10.5H4", stroke: "currentColor", fill: "transparent", strokeWidth: "1.2" })
  ),
  viewBox: "0 0 16 16"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Copy/Copy.js
var iconTestId = "copy-icon";
var Copy = (_a) => {
  var { children, inititialTooltipLabel, copiedTooltipLabel, onTextCopy, text } = _a, rest = __rest(_a, ["children", "inititialTooltipLabel", "copiedTooltipLabel", "onTextCopy", "text"]);
  const [resetTimeout, setResetTimeout] = (0, import_react21.useState)(-1);
  const [label, setLabel] = (0, import_react21.useState)(inititialTooltipLabel);
  const isMounted = (0, import_react21.useRef)(true);
  const handleClick = (0, import_react21.useCallback)(() => {
    clearTimeout(resetTimeout);
    setLabel(copiedTooltipLabel);
    onTextCopy && onTextCopy(text);
    const timeout = window.setTimeout(() => {
      if (isMounted.current) {
        setLabel(inititialTooltipLabel);
      }
    }, 4e3);
    setResetTimeout(timeout);
  }, [
    copiedTooltipLabel,
    inititialTooltipLabel,
    onTextCopy,
    resetTimeout,
    text
  ]);
  (0, import_react21.useEffect)(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  return import_react21.default.createElement(
    LightCopy,
    Object.assign({ text, onTextCopy: handleClick }, rest),
    import_react21.default.createElement(
      Tooltip,
      { label, fontSize: "$11", px: "6px", py: "3px", color: "standard.$0", backgroundColor: "darkGrey.$500", hasArrow: true, arrowSize: "4px", arrowColor: "darkGrey.$500", placement: "bottom", borderRadius: "$4", offset: 2, showDelay: 200 },
      import_react21.default.createElement(
        Flex,
        { sx: {
          cursor: "pointer",
          ":hover": {
            "& > svg": {
              color: "icon"
            }
          }
        }, display: "inline-flex", position: "relative", py: 2, px: 4, ml: -4, borderRadius: "$4", alignItems: "center" },
        children,
        import_react21.default.createElement(Icon, { "data-testid": iconTestId, color: "iconsec", icon: iconCopy, ml: children ? "5px" : 0 })
      )
    )
  );
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Copy/CopyMini.js
var import_react22 = __toESM(require_react());
var iconTestId2 = "copy-icon";
var CopyMini = (_a) => {
  var { initLabel, copiedLabel, onTextCopy, text } = _a, rest = __rest(_a, ["initLabel", "copiedLabel", "onTextCopy", "text"]);
  const [resetTimeout, setResetTimeout] = (0, import_react22.useState)(-1);
  const [state, setState] = (0, import_react22.useState)("initial");
  const isMounted = (0, import_react22.useRef)(true);
  const label = (0, import_react22.useMemo)(() => state === "copied" ? copiedLabel : initLabel, [copiedLabel, initLabel, state]);
  const handleClick = (0, import_react22.useCallback)(() => {
    onTextCopy && onTextCopy(text);
    clearTimeout(resetTimeout);
    setState("copied");
    const timeout = window.setTimeout(() => {
      if (isMounted.current) {
        setState("initial");
      }
    }, 2e3);
    setResetTimeout(timeout);
  }, [onTextCopy, resetTimeout, text]);
  (0, import_react22.useEffect)(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  return import_react22.default.createElement(
    LightCopy,
    Object.assign({ text, onTextCopy: handleClick }, rest),
    import_react22.default.createElement(
      Flex,
      { sx: {
        cursor: "pointer",
        ":hover": {
          "& > svg": {
            color: state === "copied" ? "textpositive" : "icon"
          }
        }
      }, display: "inline-flex", position: "relative", py: 2, px: 4, ml: -4, borderRadius: "$4", alignItems: "center", color: state === "copied" ? "textpositive" : "textsec" },
      import_react22.default.createElement(Icon, { "data-testid": iconTestId2, color: state === "copied" ? "textpositive" : "iconsec", icon: state === "copied" ? iconCheck : iconCopy, mr: label ? "5px" : 0 }),
      label
    )
  );
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Radio/Radio.js
var import_react23 = __toESM(require_react());

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Radio/styles.js
var defaultControlBoxStyles2 = {
  baseStyles: {
    width: 20,
    height: 20,
    marginRight: "4px",
    boxSizing: "border-box",
    border: "1px solid",
    borderRadius: "circle",
    backgroundColor: "main",
    borderColor: "main",
    cursor: "pointer",
    justifyContent: "center",
    "::before": {
      content: '""',
      display: "block",
      transition: "0.3s",
      borderRadius: "circle",
      width: 12,
      height: 12,
      backgroundColor: "standard.$0",
      border: "2px solid",
      borderColor: "standard.$0"
    }
  },
  _hover: {
    backgroundColor: "darkGrey.$200",
    borderColor: "darkGrey.$200"
  },
  _checked: {
    "::before": {
      backgroundColor: "main"
    }
  },
  _disabled: {
    backgroundColor: "darkGrey.$600",
    borderColor: "darkGrey.$600",
    cursor: "default"
  },
  _checkedAndDisabled: {
    "::before": {
      backgroundColor: "blue.$900"
    }
  }
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Radio/Radio.js
var radioTestId = "radio";
var radioInputTestId = "radio-input";
var radioControlBoxTestId = "radio-control-box";
var Radio = (_a) => {
  var { name, value, checked, disabled, readOnly, children, onChange, onBlur, onFocus, defaultChecked, controlBoxStyles = {}, customControlBox } = _a, rest = __rest(_a, ["name", "value", "checked", "disabled", "readOnly", "children", "onChange", "onBlur", "onFocus", "defaultChecked", "controlBoxStyles", "customControlBox"]);
  const controlStyles = mergeDeepRight_default(defaultControlBoxStyles2, controlBoxStyles);
  const { baseStyles } = controlStyles, restControlStyles = __rest(controlStyles, ["baseStyles"]);
  return import_react23.default.createElement(
    Flex,
    Object.assign({ as: "label", display: "inline-flex", verticalAlign: "top", alignItems: "center", sx: { cursor: "pointer" } }, rest, { "data-testid": radioTestId }),
    import_react23.default.createElement("input", { type: "radio", name, value, checked, disabled, onChange: readOnly ? void 0 : onChange, onBlur, onFocus, defaultChecked: readOnly ? void 0 : defaultChecked, style: VISUALLY_HIDDEN_CSS, "data-testid": radioInputTestId }),
    !customControlBox && import_react23.default.createElement(ControlBox, Object.assign({ type: "radio", sx: baseStyles }, restControlStyles, { "data-testid": radioControlBoxTestId })),
    children
  );
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/RadioGroup/RadioGroup.js
var import_react24 = __toESM(require_react());
var radioGroupTestId = "radio";
var RadioGroup = (_a) => {
  var { children, direction, name, value, onChange } = _a, rest = __rest(_a, ["children", "direction", "name", "value", "onChange"]);
  const [_value, _setValue] = (0, import_react24.useState)(value || null);
  const _onChange = (e) => {
    _setValue(e.currentTarget.value);
    if (typeof onChange === "function") {
      onChange(e);
    }
  };
  (0, import_react24.useEffect)(() => {
    if (typeof value !== "undefined" && value !== _value) {
      _setValue(value);
    }
  }, [value, _value]);
  return import_react24.default.createElement(Flex, Object.assign({ flexDirection: direction, role: "radiogroup" }, rest, { "data-testid": radioGroupTestId }), import_react24.Children.map(children, (child) => (0, import_react24.isValidElement)(child) ? (0, import_react24.cloneElement)(child, {
    name,
    checked: child.props.value === _value,
    "aria-checked": child.props.value === _value,
    onChange: _onChange
  }) : null));
};
RadioGroup.defaultProps = {
  direction: "row"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Input/Input.js
var inputSizeVariants = {
  medium: {
    fontSize: "$16",
    height: "medium",
    paddingLeft: "$16",
    paddingRight: "$16"
  }
};
var defaultStyles = {
  backgroundColor: "surf",
  borderColor: "surf",
  borderRadius: "$4",
  color: "text",
  "::placeholder": {
    color: "textsec"
  },
  ":hover:not(:disabled)": {
    borderColor: "surf"
  },
  ":focus:not(:disabled)": {
    borderColor: "main"
  },
  ":disabled": {
    color: "textmuted",
    backgroundColor: "surfmut",
    borderColor: "surfmut",
    "::placeholder": {
      color: "textmuted"
    }
  },
  '&[aria-invalid="true"]': {
    "&, &:hover, &:focus": {
      borderColor: "negative"
    }
  }
};
var inputVariants = { default: defaultStyles };
var Input = styled_browser_esm_default(Box)(
  variant({
    prop: "variantSize",
    variants: inputSizeVariants
  }),
  variant({
    prop: "variant",
    variants: inputVariants
  }),
  ({ paddingRight }) => paddingRight ? { paddingRight } : void 0,
  // TODO Виктор обещал починить
  {
    outline: 0
  }
);
Input.defaultProps = {
  as: "input",
  border: "solid 1px",
  width: "100%",
  variant: "default",
  variantSize: "medium"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/InputElement/InputElement.js
var InputElement = styled_browser_esm_default(Box)(({ placement, inputSize }) => css({
  position: "absolute",
  height: inputSize ? inputSizeVariants[inputSize].height : 0,
  top: 0,
  [placement]: 0
}));
InputElement.defaultProps = {
  inputSize: "medium",
  placement: "left"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/InputPassword/InputPassword.js
var import_react27 = __toESM(require_react());

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/icons/iconEyeHide.js
var import_react25 = __toESM(require_react());
var iconEyeHide = {
  path: import_react25.default.createElement("path", { d: "M2 6.66602C3.73756 10.8569 7.56174 13.7673 12 13.7673C16.4383 13.7673 20.2624 10.8569 22 6.66602M12 13.7965V18.3337M8.11165 13.0837L6.44499 17.167M15.8883 13.0837L17.555 17.167M5.33279 11.334L2.55501 14.2507M18.6672 11.334L21.445 14.2507", stroke: "currentColor", strokeLinecap: "square", fill: "transparent" }),
  viewBox: "0 0 24 25"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/icons/iconEyeView.js
var import_react26 = __toESM(require_react());
var iconEyeView = {
  path: import_react26.default.createElement(
    import_react26.default.Fragment,
    null,
    import_react26.default.createElement("path", { d: "M7.9987 4C4.7487 4 2.66536 6.66667 1.33203 8C2.66536 9.33333 4.66536 12 7.83199 12C11.332 12 13.332 9.33333 14.6654 8C13.332 6.66667 11.2487 4 7.9987 4Z", stroke: "currentColor", strokeWidth: "1.2", fill: "transparent" }),
    import_react26.default.createElement("path", { d: "M9.99935 8C9.99935 9.10457 9.10392 10 7.99935 10C6.89478 10 5.99935 9.10457 5.99935 8C5.99935 6.89543 6.89478 6 7.99935 6C9.10392 6 9.99935 6.89543 9.99935 8Z", stroke: "currentColor", strokeWidth: "1.2", fill: "transparent" })
  ),
  viewBox: "0 0 16 16"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/themes/constants.js
var colors = {
  standard: {
    $0: "#fff",
    $1000: "#000"
  },
  darkGrey: {
    $100: "#32384C",
    $200: "#2C3246",
    $300: "#282E40",
    $400: "#242A3C",
    $500: "#202636",
    $600: "#1C2332",
    $700: "#171C2B",
    $800: "#0F141E"
  },
  mediumGrey: {
    $100: "#9AA2B0",
    $200: "#929BAA",
    $300: "#8B95A5",
    $400: "#848E9F",
    $500: "#7E889A",
    $600: "#778295",
    $700: "#707B8F",
    $800: "#697387",
    $850: "#43495F"
  },
  lightGrey: {
    $100: "#FBFCFD",
    $200: "#F2F7FC",
    $250: "#EBF1FA",
    $300: "#E9EDF7",
    $400: "#E6EBF7",
    $500: "#D8DDE4",
    $600: "#CED3DB",
    $700: "#BFC4CC",
    $800: "#B6BBC3"
  },
  blue: {
    $100: "#5582FF",
    $200: "#4673FF",
    $300: "#3C69FF",
    $400: "#325FFF",
    $500: "#2855FA",
    $600: "#234BF5",
    $700: "#1E41EB",
    $800: "#1437E1"
  },
  red: {
    $100: "#FF485E",
    $200: "#FF2F48",
    $300: "#F3213B",
    $400: "#EB1832",
    $500: "#DF1830",
    $600: "#D5142B",
    $700: "#B51427",
    $800: "#AA1023"
  },
  redSoft: {
    $100: "#FD6E7F",
    $200: "#EC5769",
    $300: "#E74F61",
    $400: "#E14457",
    $500: "#DD3B4F",
    $600: "#D13548",
    $700: "#C43546",
    $800: "#B22E3E"
  },
  herbal: {
    $100: "#81D319",
    $200: "#7ACE11",
    $300: "#76C710",
    $400: "#6EBC0A",
    $500: "#67B10A",
    $600: "#63AB09",
    $700: "#5C9F07",
    $800: "#539006"
  },
  green: {
    $100: "#00D77D",
    $200: "#00CF77",
    $300: "#00C873",
    $400: "#00BE6E",
    $500: "#00B469",
    $600: "#00AA64",
    $700: "#00A05F",
    $800: "#00965A"
  },
  greenSoft: {
    $100: "#52DAA1",
    $200: "#3BD794",
    $300: "#2FCF8B",
    $400: "#2AC684",
    $500: "#2CBA7F",
    $600: "#1EB175",
    $700: "#1CA86F",
    $800: "#319D72"
  },
  orange: {
    $100: "#FFAF4B",
    $200: "#FFA53C",
    $300: "#FF9B28",
    $400: "#FF8C00",
    $500: "#F58200",
    $600: "#E67D00",
    $700: "#D77800",
    $800: "#C86E00"
  },
  yellow: {
    $100: "#FFC530",
    $200: "#FFBD14",
    $300: "#FFB800",
    $400: "#FAB400",
    $500: "#F0AA00",
    $550: "#F5A60B",
    $600: "#E9A500",
    $700: "#DD9C00",
    $800: "#D49600"
  },
  purple: {
    $100: "#B455FF",
    $200: "#AA41FF",
    $300: "#A532FF",
    $400: "#9619FF",
    $500: "#8B14FF",
    $600: "#8200EB",
    $700: "#7800D7",
    $800: "#6E00C3"
  },
  magenta: {
    $100: "#FF05A5",
    $200: "#F40596",
    $300: "#EE0090",
    $400: "#E6008C",
    $500: "#DC0087",
    $600: "#D20082",
    $700: "#C30078",
    $800: "#B40073"
  }
};
var darkThemeColors = {
  // TODO  delete  old  naming ⬇️
  basic: Object.assign({}, colors.mediumGrey),
  secondary: Object.assign({}, colors.lightGrey),
  standard: Object.assign({}, colors.standard),
  primary: Object.assign({}, colors.blue),
  danger: Object.assign({}, colors.red),
  warning: Object.assign({}, colors.orange),
  green: Object.assign({}, colors.herbal),
  success: Object.assign({}, colors.green),
  yellow: Object.assign({}, colors.yellow),
  // TODO  delete  old  naming ⬆️
  bg: colors.darkGrey.$800,
  bgsec: colors.darkGrey.$700,
  surf: colors.darkGrey.$400,
  surfmut: colors.darkGrey.$600,
  divider: colors.darkGrey.$200,
  border: colors.mediumGrey.$800,
  negative: colors.redSoft.$400,
  positive: colors.greenSoft.$400,
  main: colors.blue.$300,
  text: colors.standard.$0,
  textsec: colors.mediumGrey.$200,
  textmuted: colors.mediumGrey.$800,
  textnegative: colors.redSoft.$300,
  textpositive: colors.greenSoft.$300,
  icon: colors.mediumGrey.$400,
  iconsec: colors.mediumGrey.$850,
  hover: colors.darkGrey.$100,
  alerttext: colors.yellow.$300,
  negstroke: colors.red.$300,
  alertbg: "rgba(255, 197, 48, 0.1)",
  negativebg: "rgba(255, 72, 94, 0.1)"
};
var lightThemeColors = {
  // TODO delete old naming ⬇️
  basic: Object.assign({}, colors.mediumGrey),
  secondary: Object.assign({}, colors.darkGrey),
  standard: Object.assign({}, colors.standard),
  primary: Object.assign({}, colors.blue),
  danger: Object.assign({}, colors.red),
  warning: Object.assign({}, colors.orange),
  green: Object.assign({}, colors.herbal),
  success: Object.assign({}, colors.green),
  yellow: Object.assign({}, colors.yellow),
  // TODO delete old naming ⬆️
  bg: colors.standard.$0,
  bgsec: colors.lightGrey.$100,
  surf: colors.lightGrey.$250,
  surfmut: colors.lightGrey.$200,
  divider: colors.lightGrey.$400,
  border: colors.lightGrey.$800,
  negative: colors.red.$400,
  positive: colors.green.$400,
  main: colors.blue.$400,
  text: colors.darkGrey.$100,
  textsec: colors.mediumGrey.$400,
  textmuted: colors.lightGrey.$700,
  textnegative: colors.red.$500,
  textpositive: colors.green.$500,
  icon: colors.mediumGrey.$400,
  iconsec: colors.lightGrey.$700,
  hover: colors.lightGrey.$400,
  alerttext: colors.yellow.$550,
  negstroke: colors.red.$300,
  alertbg: "rgba(255, 197, 48, 0.15)",
  negativebg: "rgba(255, 72, 94, 0.15)"
};
var fontSizes = {
  $10: "10px",
  $12: "12px",
  $14: "14px",
  $16: "16px",
  $20: "20px",
  $24: "24px",
  $32: "32px",
  $48: "48px",
  $56: "56px"
};
var space2 = {
  $0: "0px",
  $4: "4px",
  $8: "8px",
  $12: "12px",
  $16: "16px",
  $20: "20px",
  $24: "24px"
};
var lineHeights = {
  $16: "16px",
  $20: "20px",
  $24: "24px",
  $32: "32px",
  $40: "40px",
  $56: "56px",
  $64: "64px"
};
var fontWeights = {
  $400: "400",
  $500: "500",
  $600: "600",
  $700: "700"
};
var radii = {
  none: 0,
  $2: 2,
  $4: 4,
  $6: 6,
  $8: 8,
  circle: "9999px"
};
var sizes = {
  medium: "48px"
};
var transitions = {
  default: "0.3s"
};
var breakpoints = [
  "576px",
  "768px",
  "1024px",
  "1200px",
  "1366px",
  "1920px"
];
var borderWidths = [0, 1];
var shadows = {
  default: "0 0 4px rgba(0, 0, 0, 0.125)"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/InputPassword/InputPassword.js
var InputPassword = (_a) => {
  var { id } = _a, props4 = __rest(_a, ["id"]);
  const [show, setShow] = (0, import_react27.useState)(false);
  const toggle = () => setShow(!show);
  const variantSize = props4.variantSize;
  const togglerWidth = inputSizeVariants[variantSize] ? inputSizeVariants[variantSize].height : "0";
  return import_react27.default.createElement(
    Flex,
    { position: "relative" },
    import_react27.default.createElement(Input, Object.assign({ id }, props4, { type: show ? "text" : "password", paddingRight: sizes[togglerWidth] })),
    import_react27.default.createElement(
      InputElement,
      { placement: "right" },
      import_react27.default.createElement(Flex, { color: "icon", width: togglerWidth, height: "100%", alignItems: "center", justifyContent: "center", onClick: toggle, "data-testid": "InputPasswordToggler", cursor: "pointer", transition: "default" }, show ? import_react27.default.createElement(Icon, { icon: iconEyeView, iconSize: "large" }) : import_react27.default.createElement(Icon, { icon: iconEyeHide, iconSize: "large" }))
    )
  );
};
InputPassword.defaultProps = Input.defaultProps;

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/InputWithTag/InputWithTag.js
var import_react28 = __toESM(require_react());
var InputWithTag = (0, import_react28.forwardRef)((_a, ref) => {
  var { tag } = _a, props4 = __rest(_a, ["tag"]);
  const [paddingRight, setPaddingRight] = (0, import_react28.useState)(16);
  const tagRef = (0, import_react28.useRef)(null);
  (0, import_react28.useEffect)(() => {
    Promise.resolve().then(() => {
      if (tagRef.current) {
        setPaddingRight(tagRef.current.clientWidth + 24);
      }
    });
  }, [tag]);
  return import_react28.default.createElement(
    Box,
    { position: "relative" },
    import_react28.default.createElement(Input, Object.assign({}, props4, { paddingRight: tag ? `${paddingRight}px` : "16px", ref })),
    tag && import_react28.default.createElement(Text, { variant: "line", color: props4.disabled ? "textmuted" : "textsec", position: "absolute", top: "50%", right: "16px", ref: tagRef, sx: {
      transform: "translateY(-50%)",
      textTransform: "uppercase"
    } }, tag)
  );
});
InputWithTag.defaultProps = Input.defaultProps;
InputWithTag.displayName = "InputWithTag";

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/FormattedInput/FormattedInput.js
var import_react29 = __toESM(require_react());

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/FormattedInput/helpers.js
var getFormattedValue = (value, separator, prefix) => {
  if (isNaN(Number(value))) {
    return "";
  }
  const valueArr = value.toString().split(".");
  const first = valueArr[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, `$1${separator}`);
  if (valueArr.length === 1) {
    const value2 = first.trim();
    return value2 ? `${prefix || ""}${value2}` : "";
  } else {
    const value2 = `${first}.${valueArr[1]}`.trim();
    return value2 ? `${prefix || ""}${value2}` : "";
  }
};
var parseFormattedValue = (value, separator, prefix) => {
  const findSeparators = new RegExp(separator, "g");
  const findPrefix = new RegExp(prefix || "", "g");
  return value ? value.replace(findSeparators, "").replace(findPrefix, "").replace(" ", "") : "";
};
var handleDots = (value, decimals) => {
  const splitted = value.split(".");
  if (decimals === 0) {
    return splitted[0];
  }
  if (splitted.length > 1) {
    const afterDot = splitted[1] ? splitted[1].slice(0, decimals) : "";
    return `${splitted[0]}.${afterDot}`;
  } else {
    return value;
  }
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/FormattedInput/FormattedInput.js
var FormattedInput = class extends import_react29.Component {
  constructor(props4) {
    super(props4);
    this.inputRef = import_react29.default.createRef();
    this.dotInput = false;
    this.isBackspace = false;
    this.handleKeyboard = (event) => {
      if (event.key === ".") {
        this.dotInput = true;
      }
      if (event.keyCode === 8) {
        this.isBackspace = true;
      }
    };
    this.handleChange = (event) => {
      event.preventDefault();
      const { onChange, decimals, formatSeparator: formatSeparator2, prefix: prefix2, lengthLimit, maxValue } = this.props;
      const isBackspace = this.isBackspace;
      this.isBackspace = false;
      const trimmedValue = event.target.value.trim();
      if (trimmedValue === parseFormattedValue(this.state.formattedValue, formatSeparator2, prefix2)) {
        return;
      }
      if (maxValue && Number(parseFormattedValue(trimmedValue, formatSeparator2, prefix2)) > maxValue) {
        return;
      }
      const valueLength = event.target.value.split(formatSeparator2).join("").length;
      if (lengthLimit && +valueLength > lengthLimit && !isBackspace) {
        return;
      }
      this.saveInputCursor();
      if (decimals === 0 && this.dotInput) {
        this.dotInput = false;
        return;
      }
      const eventValue = event.target.value;
      const parsedValue = parseFormattedValue(eventValue, formatSeparator2, prefix2);
      let newValue = "";
      if (!isNaN(Number(parsedValue))) {
        newValue = handleDots(parsedValue, decimals);
      } else {
        return;
      }
      this.setState({
        formattedValue: getFormattedValue(newValue, formatSeparator2, prefix2)
      });
      if (onChange) {
        this.dispatchChange(onChange, event, newValue);
      }
    };
    const { value, formatSeparator, prefix } = props4;
    this.state = {
      oldIdx: 0,
      oldLength: 0,
      value,
      formattedValue: getFormattedValue(value ? value.toString() : "", formatSeparator, prefix)
    };
  }
  render() {
    const _a = this.props, { onChange } = _a, rest = __rest(_a, ["onChange"]);
    const { formattedValue } = this.state;
    return import_react29.default.createElement(InputWithTag, Object.assign({}, rest, { ref: this.inputRef, value: formattedValue, onChange: this.handleChange, onKeyDown: this.handleKeyboard }));
  }
  componentDidUpdate(prevProps) {
    const { formatSeparator, value, decimals, prefix } = this.props;
    if (value !== prevProps.value || prefix !== prevProps.prefix) {
      this.setState({
        formattedValue: getFormattedValue(value ? handleDots(value.toString(), decimals) : "", formatSeparator, prefix)
      });
      return;
    }
    const { formattedValue, oldLength, oldIdx } = this.state;
    let newIdx = Math.max(0, formattedValue.length - oldLength + oldIdx);
    if (formattedValue[newIdx - 1] === formatSeparator) {
      newIdx = newIdx - 1;
    }
    if (this.inputRef && this.inputRef.current) {
      if (this.inputRef.current.selectionStart === newIdx) {
        return;
      }
      this.inputRef.current.selectionStart = newIdx;
      this.inputRef.current.selectionEnd = newIdx;
    }
  }
  saveInputCursor() {
    var _a, _b;
    const { current: inputNode } = this.inputRef;
    this.setState({
      oldIdx: Number((_a = inputNode) === null || _a === void 0 ? void 0 : _a.selectionStart),
      oldLength: Number((_b = inputNode) === null || _b === void 0 ? void 0 : _b.value.length)
    });
  }
  dispatchChange(onChange, event, newValue) {
    const newTarget = Object.assign(Object.assign({}, event.target), { value: newValue });
    const newNativeTarget = Object.assign(Object.assign({}, event.nativeEvent), { value: newValue });
    onChange(Object.assign(Object.assign({}, event), { target: newTarget, nativeEvent: newNativeTarget }));
  }
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Label/Label.js
var Label = styled_browser_esm_default(Text)();
Label.defaultProps = {
  as: "label"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Select/Select.js
var import_react30 = __toESM(require_react());

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Select/styles.js
var getPositionStyles = (placement) => {
  switch (placement) {
    case "top":
      return {
        top: 0,
        sx: {
          transform: "translateY(-100%)"
        }
      };
    case "bottom":
    default:
      return {
        bottom: 0,
        sx: {
          transform: "translateY(100%)"
        }
      };
  }
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Select/Select.js
var getBorderRadiusPlacement = (isOpenPlacement) => isOpenPlacement ? "0" : "$4";
var Select = (_a) => {
  var { renderSelected, isDisabled = false, isError = false, placement = "bottom", children } = _a, rest = __rest(_a, ["renderSelected", "isDisabled", "isError", "placement", "children"]);
  const [opened, setOpened] = (0, import_react30.useState)(false);
  const element = (0, import_react30.useRef)(null);
  const { sx: sx2 = {} } = rest, otherRest = __rest(rest, ["sx"]);
  const onToggleOpened = (0, import_react30.useCallback)(() => {
    if (isDisabled) {
      return null;
    }
    setOpened(!opened);
  }, [isDisabled, opened]);
  const onClickOut = (0, import_react30.useCallback)((event) => {
    if (element.current && !element.current.contains(event.target)) {
      setOpened(false);
    }
  }, []);
  (0, import_react30.useEffect)(() => {
    if (opened) {
      document.addEventListener("click", onClickOut);
    } else {
      document.removeEventListener("click", onClickOut);
    }
    return () => document.removeEventListener("click", onClickOut);
  }, [onClickOut, opened]);
  const positionStyles = getPositionStyles(placement);
  const openPlacementBottom = (0, import_react30.useMemo)(() => opened && placement === "bottom", [opened, placement]);
  const openPlacementTop = (0, import_react30.useMemo)(() => opened && placement === "top", [opened, placement]);
  const stylesForList = (0, import_react30.useMemo)(() => {
    const mainColor = isError ? opened ? "main" : "negative" : "main";
    return {
      border: "1px solid",
      borderColor: mainColor,
      borderTopColor: openPlacementBottom ? "surf" : mainColor,
      borderBottomColor: openPlacementTop ? "surf" : mainColor,
      borderRadius: "$4",
      borderBottomLeftRadius: getBorderRadiusPlacement(openPlacementTop),
      borderBottomRightRadius: getBorderRadiusPlacement(openPlacementTop),
      borderTopLeftRadius: getBorderRadiusPlacement(openPlacementBottom),
      borderTopRightRadius: getBorderRadiusPlacement(openPlacementBottom)
    };
  }, [isError, openPlacementBottom, openPlacementTop, opened]);
  const stylesForSelected = (0, import_react30.useMemo)(() => {
    const mainColor = isError ? opened ? "main" : "negative" : opened ? "main" : "transparent";
    return {
      height: "100%",
      border: "1px solid",
      borderColor: mainColor,
      borderRadius: "$4",
      borderBottomLeftRadius: getBorderRadiusPlacement(openPlacementBottom),
      borderBottomRightRadius: getBorderRadiusPlacement(openPlacementBottom),
      borderTopLeftRadius: getBorderRadiusPlacement(openPlacementTop),
      borderTopRightRadius: getBorderRadiusPlacement(openPlacementTop),
      borderBottomColor: openPlacementBottom ? "surf" : mainColor,
      borderTopColor: openPlacementTop ? "surf" : mainColor
    };
  }, [isError, openPlacementBottom, openPlacementTop, opened]);
  return import_react30.default.createElement(
    Box,
    Object.assign({ cursor: isDisabled ? "default" : "pointer", position: "relative", ref: element, onClick: onToggleOpened, sx: Object.assign({ ":focus": {
      ".selected": {
        borderColor: "main"
      }
    }, ".list": stylesForList, ".selected": stylesForSelected }, sx2) }, otherRest),
    import_react30.default.createElement(Box, null, renderSelected({ opened, isDisabled, isError })),
    opened && import_react30.default.Children.count(children) ? import_react30.default.createElement(Box, Object.assign({ position: "absolute", width: "100%", zIndex: 10 }, positionStyles), children) : null
  );
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Select/FeeSelect/Selected.js
var import_react34 = __toESM(require_react());

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Select/FeeSelect/Option.js
var import_react31 = __toESM(require_react());
var Option = (_a) => {
  var { option: { name, value } } = _a, rest = __rest(_a, ["option"]);
  return import_react31.default.createElement(
    Flex,
    Object.assign({ justifyContent: "space-between", flex: 1, color: "standard.$0", fontSize: "$13", lineHeight: "$18" }, rest),
    import_react31.default.createElement(Text, null, name),
    import_react31.default.createElement(
      Text,
      null,
      value,
      " ",
      name
    )
  );
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/icons/closeSelect.js
var import_react32 = __toESM(require_react());
var iconCloseSelect = {
  path: import_react32.default.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M1.793 9.957a1 1 0 0 0 1.32.083l.094-.083L7 6.165l3.793 3.792a1 1 0 0 0 1.32.083l.094-.083a1 1 0 0 0 .083-1.32l-.083-.094-4.5-4.5a1 1 0 0 0-1.32-.083l-.094.083-4.5 4.5a1 1 0 0 0 0 1.414z" }),
  viewBox: "0 0 14 14"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/icons/openSelect.js
var import_react33 = __toESM(require_react());
var iconOpenSelect = {
  path: import_react33.default.createElement("path", { fill: "currentColor", fillRule: "nonzero", d: "M1.793 4.043a1 1 0 0 1 1.32-.083l.094.083L7 7.835l3.793-3.792a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 .083 1.32l-.083.094-4.5 4.5a1 1 0 0 1-1.32.083l-.094-.083-4.5-4.5a1 1 0 0 1 0-1.414z" }),
  viewBox: "0 0 14 14"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Select/FeeSelect/Selected.js
var Selected = (_a) => {
  var { opened, selected, selectedOptionStylesProps } = _a, rest = __rest(_a, ["opened", "selected", "selectedOptionStylesProps"]);
  return import_react34.default.createElement(
    Flex,
    Object.assign({ justifyContent: "space-between", backgroundColor: "basic.$900", border: "1px solid", borderColor: "darkGrey.$600", borderRadius: "$4", p: 15 }, rest),
    import_react34.default.createElement(Option, Object.assign({ option: selected }, selectedOptionStylesProps)),
    opened ? import_react34.default.createElement(Icon, { icon: iconCloseSelect, color: "primary.$300", ml: 10 }) : import_react34.default.createElement(Icon, { icon: iconOpenSelect, color: "darkGrey.$100", ml: 10 })
  );
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Select/FeeSelect/List.js
var import_react35 = __toESM(require_react());
var List = (_a) => {
  var { options, onSelect, optionStylesProps } = _a, rest = __rest(_a, ["options", "onSelect", "optionStylesProps"]);
  return import_react35.default.createElement(Flex, Object.assign({ flexDirection: "column", justifyContent: "space-between", borderRadius: "$4", backgroundColor: "basic.$900", mt: 5, mb: 5, sx: {
    "::-webkit-scrollbar": {
      width: 3
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "darkGrey.$200",
      borderRadius: 1.5,
      width: 3
    },
    "::-webkit-scrollbar-track-piece": {
      marginBottom: 3,
      marginTop: 3
    }
  }, maxHeight: 147, overflowY: "auto" }, rest), options.map((option) => import_react35.default.createElement(
    Box,
    { key: option.id || "WAVES", sx: {
      ":hover": {
        backgroundColor: "darkGrey.$600"
      }
    }, px: 15, py: 12, onClick: () => onSelect(option) },
    import_react35.default.createElement(Option, Object.assign({ option }, optionStylesProps))
  )));
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Select/defaultSelect/List.js
var import_react37 = __toESM(require_react());

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Select/defaultSelect/Option.js
var import_react36 = __toESM(require_react());
var Option2 = (_a) => {
  var { option: { value, renderPlaceholder } } = _a, rest = __rest(_a, ["option"]);
  return import_react36.default.createElement(Flex, Object.assign({ justifyContent: "space-between", flex: 1, fontSize: "$14", lineHeight: "$24" }, rest), value ? typeof value === "function" ? value() : value : renderPlaceholder ? renderPlaceholder() : "");
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Select/defaultSelect/List.js
var List2 = (_a) => {
  var { options, onSelect, optionStylesProps } = _a, rest = __rest(_a, ["options", "onSelect", "optionStylesProps"]);
  return import_react37.default.createElement(Flex, Object.assign({ flexDirection: "column", justifyContent: "space-between", borderRadius: "$4", backgroundColor: "surfmut", overflowY: "auto", className: "list" }, rest), options.filter((item) => item.id !== "placeholder").map((option) => import_react37.default.createElement(
    Box,
    { key: option.id, sx: {
      ":hover": {
        backgroundColor: "surf"
      }
    }, px: 16, py: 12, onClick: () => onSelect(option) },
    import_react37.default.createElement(Option2, Object.assign({ option }, optionStylesProps))
  )));
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Select/defaultSelect/Selected.js
var import_react39 = __toESM(require_react());

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/icons/chevron.js
var import_react38 = __toESM(require_react());
var chevron = {
  path: import_react38.default.createElement("path", { d: "M6 9L12 15L18 9", stroke: "currentColor", fill: "none" }),
  viewBox: "0 0 24 24"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Select/defaultSelect/Selected.js
var Selected2 = (_a) => {
  var { opened, selected, selectedOptionStylesProps, isDisabled, isError } = _a, rest = __rest(_a, ["opened", "selected", "selectedOptionStylesProps", "isDisabled", "isError"]);
  return import_react39.default.createElement(
    Flex,
    Object.assign({ justifyContent: "space-between", backgroundColor: "surf", alignItems: "center", py: 12, pl: 16, pr: 12, className: "selected", color: isDisabled ? "textmuted" : selected.renderPlaceholder || isError ? "textsec" : "text" }, rest),
    import_react39.default.createElement(Option2, Object.assign({ option: selected }, selectedOptionStylesProps)),
    import_react39.default.createElement(Icon, { icon: chevron, color: "icon", transition: "transform .3s", sx: {
      transform: opened ? "rotate(-180deg)" : "rotate(0deg)"
    }, size: 24 })
  );
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Spinner/Spinner.js
var import_react41 = __toESM(require_react());

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Spinner/keyframes.js
var around = keyframes`
    0% {
        transform: rotate(0);
    }

    12% {
        transform: rotate(180deg);
    }

    50% {
        transform: rotate(180deg);
    }

    62% {
        transform: rotate(360deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;
var sandBlue = keyframes`
    0% {
        transform: rotate(45deg) translateY(-15px)
    }
    10% {
        transform: rotate(45deg) translateY(-15px)
    }
    45% {
        transform: rotate(45deg) translateY(0)
    }
    60% {
        transform: rotate(45deg) translateY(0)
    }
    98% {
        transform: rotate(45deg) translateY(15px)
    }
    100% {
        transform: rotate(45deg) translateY(15px)
    }
`;
var sandMagenta = keyframes`
    0% {
        transform: rotate(-45deg) translateY(15px)
    }
    10% {
        transform: rotate(-45deg) translateY(15px)
    }
    45% {
        transform: rotate(-45deg) translateY(0)
    }
    60% {
        transform: rotate(-45deg) translateY(0)
    }
    98% {
        transform: rotate(-45deg) translateY(-15px)
    }
    100% {
        transform: rotate(-45deg) translateY(-15px)
    }
`;

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/icons/logoText.js
var import_react40 = __toESM(require_react());
var iconLogoText = {
  path: import_react40.default.createElement(
    import_react40.default.Fragment,
    null,
    import_react40.default.createElement("path", { d: "M24.5549 27.1972L19.0303 9.18132H15.4555L9.91063 27.1972L4.40634 9.18132L0.384766 9.16101L7.89984 33.8186H11.2715L17.2226 15.0918L23.1737 33.8186H26.5453L34.0807 9.18132H30.0592L24.5549 27.1972Z", fill: "currentColor" }),
    import_react40.default.createElement("path", { d: "M57.804 33.8185L48.6641 21.3679L57.5806 9.18127H52.7466L46.4502 18.2603L40.1537 9.18127H35.3197L44.2159 21.3679L35.076 33.8185H39.9506L46.4502 24.4755L52.9497 33.8185H57.804Z", fill: "currentColor" }),
    import_react40.default.createElement("path", { d: "M90.8493 14.0763C90.4228 13.0607 89.8337 12.1264 89.1025 11.2937C88.351 10.4609 87.4167 9.79066 86.2996 9.28288C85.1825 8.77511 83.8217 8.53137 82.2171 8.53137C80.1048 8.53137 78.2768 8.99853 76.7128 9.91252C75.6363 10.5422 74.7426 11.3749 74.0115 12.3905V9.18133H70.3555V33.8186H74.4583V20.8398C74.4583 19.4181 74.6208 18.1588 74.9458 17.1026C75.2707 16.0464 75.7379 15.1731 76.3269 14.4825C76.9159 13.7919 77.6268 13.2638 78.4596 12.9186C79.2923 12.5733 80.2063 12.3905 81.2219 12.3905C82.5218 12.3905 83.6186 12.6342 84.4716 13.142C85.3247 13.6497 86.0153 14.32 86.5027 15.1934C87.0105 16.0668 87.3558 17.0417 87.5792 18.1182C87.7823 19.1947 87.9042 20.3118 87.9042 21.4695V33.7983H92.007V20.1899C92.007 19.2556 91.9258 18.2603 91.743 17.2042C91.5602 16.148 91.2758 15.1121 90.8493 14.0763Z", fill: "currentColor" }),
    import_react40.default.createElement("path", { d: "M117.518 22.6272H119.61C119.731 19.7024 119.346 17.1838 118.472 15.0715C117.599 12.9591 116.299 11.3343 114.552 10.1968C112.805 9.05943 110.693 8.49072 108.215 8.49072C105.818 8.49072 103.747 9.01881 101.98 10.0953C100.213 11.1718 98.8315 12.6951 97.8362 14.6653C96.841 16.6354 96.3535 18.9712 96.3535 21.6523C96.3535 24.2318 96.8613 26.466 97.8565 28.3955C98.8518 30.3251 100.253 31.8078 102.061 32.8842C103.869 33.9607 105.981 34.4888 108.398 34.4888C110.795 34.4888 112.948 33.8998 114.857 32.7014C116.786 31.5031 118.228 29.8173 119.183 27.644L115.283 26.3035C114.593 27.7049 113.658 28.7814 112.46 29.5126C111.262 30.2641 109.84 30.6297 108.215 30.6297C105.798 30.6297 103.93 29.8376 102.63 28.233C101.492 26.8519 100.863 24.9833 100.7 22.6272H115.486H117.518ZM102.65 14.5637C103.95 12.9591 105.859 12.1467 108.378 12.1467C110.713 12.1467 112.48 12.8982 113.679 14.4012C114.613 15.5793 115.182 17.2448 115.426 19.3774H100.842C101.066 17.3869 101.675 15.7824 102.65 14.5637Z", fill: "currentColor" }),
    import_react40.default.createElement("path", { d: "M162.264 27.1972L156.739 9.18136H153.164L147.619 27.1972L142.115 9.18136H130.213V2.33655H126.151V9.18136H121.154V12.5327H126.151V24.4959C126.151 25.7551 126.171 26.8926 126.211 27.8878C126.252 28.883 126.516 29.8783 127.004 30.8329C127.572 31.95 128.405 32.7828 129.522 33.3108C130.639 33.8389 131.919 34.1233 133.32 34.1842C134.742 34.2451 136.184 34.103 137.647 33.7983V30.3251C135.961 30.5892 134.519 30.6298 133.32 30.4673C132.122 30.3048 131.249 29.7361 130.7 28.7612C130.416 28.2534 130.253 27.6238 130.233 26.9129C130.213 26.202 130.192 25.3489 130.192 24.3334V12.553H139.089L145.588 33.8389H148.96L154.911 15.1122L160.862 33.8389H164.234L171.769 9.20167H167.748L162.264 27.1972Z", fill: "currentColor" }),
    import_react40.default.createElement("path", { d: "M191.775 10.1562C189.988 9.03912 187.876 8.49072 185.418 8.49072C183.021 8.49072 180.929 9.03912 179.142 10.1156C177.355 11.2124 175.994 12.7154 175.019 14.6856C174.044 16.6354 173.556 18.9103 173.556 21.4695C173.556 24.0286 174.044 26.2832 174.999 28.233C175.953 30.1829 177.314 31.7265 179.101 32.8233C180.868 33.9404 182.981 34.4888 185.438 34.4888C187.876 34.4888 190.008 33.9404 191.775 32.8436C193.542 31.7468 194.924 30.2235 195.878 28.2533C196.833 26.3035 197.32 24.0286 197.32 21.4695C197.32 18.9306 196.853 16.6964 195.899 14.7465C194.903 12.7967 193.542 11.2733 191.775 10.1562ZM191.105 28.0908C189.846 29.797 187.957 30.65 185.418 30.65C182.94 30.65 181.072 29.8173 179.792 28.1315C178.512 26.466 177.883 24.2318 177.883 21.4695C177.883 19.6821 178.147 18.0978 178.695 16.7167C179.244 15.3558 180.076 14.2794 181.173 13.5075C182.29 12.7357 183.692 12.3498 185.418 12.3498C187.937 12.3498 189.826 13.1826 191.105 14.8278C192.364 16.4933 192.994 18.7072 192.994 21.4695C192.974 24.1708 192.344 26.3847 191.105 28.0908Z", fill: "currentColor" }),
    import_react40.default.createElement("path", { d: "M212.189 9.03915C211.356 9.10009 210.523 9.24226 209.731 9.52662C208.919 9.79066 208.208 10.1766 207.558 10.7047C206.989 11.1109 206.461 11.639 205.994 12.2686C205.791 12.5326 205.628 12.8373 205.466 13.1217V9.18133H201.83V33.8186H205.913V21.4492C205.913 20.4743 205.994 19.5196 206.156 18.5853C206.319 17.651 206.623 16.7776 207.05 15.9855C207.477 15.1934 208.086 14.5028 208.878 13.9138C209.751 13.2842 210.686 12.9186 211.701 12.817C212.717 12.7154 213.651 12.7561 214.504 12.9795V9.18133C213.793 9.03915 213.021 8.97822 212.189 9.03915Z", fill: "currentColor" }),
    import_react40.default.createElement("path", { d: "M227.076 21.4898L237.963 9.18131H232.682L222.364 21.0429V0.366333H218.241L218.22 33.8186H222.364V21.9569L233.555 33.8186H239.242L227.076 21.4898Z", fill: "currentColor" })
  ),
  viewBox: "0 0 239 34"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Spinner/Spinner.js
var MainBox = styled_browser_esm_default(Box)({
  height: "70.71%",
  width: "70.71%",
  position: "absolute",
  overflow: "hidden"
});
var TopBox = styled_browser_esm_default(MainBox)({
  backgroundColor: colors.magenta.$300,
  top: 0,
  transform: "rotate(-45deg)",
  transformOrigin: "0 0"
});
var BottomBox = styled_browser_esm_default(MainBox)({
  backgroundColor: colors.blue.$300,
  bottom: 0,
  transform: "rotate(45deg)",
  transformOrigin: "0 100%"
});
var Spinner = () => {
  return import_react41.default.createElement(
    Flex,
    { alignItems: "center", justifyContent: "center" },
    import_react41.default.createElement(
      Box,
      { height: 26, width: 26, sx: {
        animation: `${around} 4.2s infinite`,
        willChange: "transform"
      }, overflow: "hidden", position: "relative" },
      import_react41.default.createElement(
        TopBox,
        null,
        import_react41.default.createElement(Box, { width: 26, height: 15, sx: {
          animation: `${sandBlue} 4.2s infinite`,
          backgroundColor: colors.blue.$300,
          transformOrigin: "0 0"
        } })
      ),
      import_react41.default.createElement(
        BottomBox,
        null,
        import_react41.default.createElement(Box, { width: 26, height: 15, sx: {
          animation: `${sandMagenta} 4.2s infinite`,
          backgroundColor: colors.magenta.$300,
          transformOrigin: "bottom left",
          position: "absolute",
          bottom: "0"
        } })
      )
    ),
    import_react41.default.createElement(
      Box,
      { ml: 12, mb: 6 },
      import_react41.default.createElement(Icon, { icon: iconLogoText, color: "text", size: 120, height: 17 })
    )
  );
};
Spinner.displayName = "Spinner";

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Tabs/Tabs.js
var import_react42 = __toESM(require_react());
var TabContext = (0, import_react42.createContext)({
  selectedIndex: 0,
  onChangeTab: () => void 0
});
var Tabs = (props4) => {
  const { selectedIndex, onChange, children } = props4, rest = __rest(props4, ["selectedIndex", "onChange", "children"]);
  const [index2, setIndex] = (0, import_react42.useState)(selectedIndex || 0);
  const onChangeTab = (0, import_react42.useCallback)((index3, boundValue) => {
    setIndex(index3);
    if (typeof onChange === "function") {
      onChange(boundValue);
    }
  }, [props4, onChange]);
  (0, import_react42.useEffect)(() => {
    if (typeof selectedIndex !== "undefined" && selectedIndex !== index2) {
      onChangeTab(selectedIndex, props4.value);
    }
  }, [index2, onChangeTab, props4.value, selectedIndex]);
  const context = {
    selectedIndex: index2,
    onChangeTab
  };
  return import_react42.default.createElement(
    TabContext.Provider,
    { value: context },
    import_react42.default.createElement(Box, Object.assign({}, rest), children)
  );
};
var TabsList = (_a) => {
  var { children } = _a, rest = __rest(_a, ["children"]);
  const { selectedIndex, onChangeTab } = (0, import_react42.useContext)(TabContext);
  return import_react42.default.createElement(Flex, Object.assign({}, rest), import_react42.Children.map(children, (child, index2) => {
    if (!(0, import_react42.isValidElement)(child)) {
      return;
    }
    return (0, import_react42.cloneElement)(child, {
      selected: index2 === selectedIndex,
      onClick: (e) => {
        if (child.props.disabled) {
          return;
        }
        if (selectedIndex !== index2) {
          onChangeTab(index2, child.props.value);
          if (typeof child.props.onClick === "function") {
            child.props.onClick(e);
          }
        }
      }
    });
  }));
};
var Tab = (_a) => {
  var { selected, disabled, children } = _a, rest = __rest(_a, ["selected", "disabled", "children"]);
  return import_react42.default.createElement(Box, Object.assign({ "aria-selected": selected, "aria-disabled": disabled, color: selected ? "standard.$0" : "basic.$500", borderBottom: selected ? "2px solid" : 0, borderBottomColor: "primary.$300", cursor: "default" }, rest), children);
};
Tab.defaultProps = {
  selected: false,
  disabled: false
};
var TabPanels = (_a) => {
  var { children } = _a, rest = __rest(_a, ["children"]);
  const { selectedIndex } = (0, import_react42.useContext)(TabContext);
  return import_react42.default.createElement(Box, Object.assign({}, rest), import_react42.Children.map(children, (child, index2) => {
    if (!(0, import_react42.isValidElement)(child)) {
      return;
    }
    return (0, import_react42.cloneElement)(child, {
      selected: index2 === selectedIndex
    });
  }));
};
var TabPanel = ({ children, selected, display: display2 = "block" }, ...rest) => import_react42.default.createElement(Box, Object.assign({}, rest, { display: selected ? display2 : "none" }), children);

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/PlateNote/PlateNote.js
var React49 = __toESM(require_react());

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/PlateNote/helpers.js
var getMainColors = (type3) => {
  switch (type3) {
    case "error": {
      return {
        borderColor: "negstroke",
        titleColor: "textnegative",
        bgColor: "negativebg"
      };
    }
    case "warning": {
      return {
        borderColor: "alerttext",
        titleColor: "alerttext",
        bgColor: "alertbg"
      };
    }
    default: {
      return {
        borderColor: "darkGrey.$500",
        titleColor: "darkGrey.$500",
        bgColor: "transparent"
      };
    }
  }
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/PlateNote/PlateNote.js
var PlateNote = (_a) => {
  var { type: type3 = "info", title, text, textProps = {}, children } = _a, rest = __rest(_a, ["type", "title", "text", "textProps", "children"]);
  const { borderColor: borderColor2, titleColor, bgColor } = getMainColors(type3);
  return React49.createElement(
    Flex,
    Object.assign({ flexDirection: "column", border: "1px dashed", borderColor: borderColor2, borderRadius: "$4", backgroundColor: bgColor, p: "16px" }, rest),
    title ? React49.createElement(Text, Object.assign({ variant: "bodySemiBold1", color: titleColor, mb: "12px" }, textProps), title) : null,
    text ? React49.createElement(Text, Object.assign({ variant: "body2", color: titleColor, mb: "12px" }, textProps), text) : null,
    children ? React49.createElement(Text, { variant: "caption", color: "text" }, children) : null
  );
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Accordion/Accordion.js
var import_react43 = __toESM(require_react());
var Accordion = (_a) => {
  var { allowMultiple, defaultIndex, onChange, children } = _a, rest = __rest(_a, ["allowMultiple", "defaultIndex", "onChange", "children"]);
  const initializeExpendedIndex = (0, import_react43.useCallback)(() => {
    if (allowMultiple) {
      return Array.isArray(defaultIndex) ? defaultIndex : defaultIndex !== void 0 ? [defaultIndex] : [];
    } else {
      return Array.isArray(defaultIndex) && defaultIndex.length > 0 ? defaultIndex[0] : defaultIndex !== void 0 ? defaultIndex : -1;
    }
  }, [allowMultiple, defaultIndex]);
  const [expandedIndex, setExpandedIndex] = (0, import_react43.useState)(initializeExpendedIndex);
  (0, import_react43.useEffect)(() => {
    setExpandedIndex(initializeExpendedIndex);
  }, [defaultIndex, initializeExpendedIndex]);
  const clones = import_react43.Children.map(children, (child, index2) => {
    const checkIsChildExpanded = () => {
      if (Array.isArray(expandedIndex)) {
        return expandedIndex.includes(index2);
      }
      return expandedIndex === index2;
    };
    if ((0, import_react43.isValidElement)(child)) {
      return (0, import_react43.cloneElement)(child, {
        isOpen: checkIsChildExpanded(),
        onChange: (isExpanded) => {
          if (allowMultiple) {
            let newIndexes;
            const prevIndexes = Array.isArray(expandedIndex) ? expandedIndex : [expandedIndex];
            if (isExpanded) {
              newIndexes = [...prevIndexes, index2];
            } else {
              newIndexes = prevIndexes.filter((itemIndex) => itemIndex !== index2);
            }
            setExpandedIndex(newIndexes);
            if (typeof onChange === "function") {
              onChange(newIndexes);
            }
          } else {
            let newIndex = -1;
            if (isExpanded) {
              newIndex = index2;
            }
            setExpandedIndex(newIndex);
            if (typeof onChange === "function") {
              onChange(newIndex);
            }
          }
        }
      });
    } else {
      return null;
    }
  });
  return import_react43.default.createElement(Box, Object.assign({}, rest), clones);
};
Accordion.displayName = "Accordion";

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Accordion/AccordionItemContext.js
var import_react44 = __toESM(require_react());
var AccordionItemContext = (0, import_react44.createContext)({
  isExpanded: false,
  isDisabled: false,
  onToggle: () => void 0
});
var AccordionItemProvider = ({ context, children }) => {
  return import_react44.default.createElement(AccordionItemContext.Provider, { value: context }, children);
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Accordion/AccordionItem.js
var import_react45 = __toESM(require_react());
var AccordionItem = (0, import_react45.forwardRef)((_a, ref) => {
  var { isOpen = false, isDisabled = false, children, onChange } = _a, rest = __rest(_a, ["isOpen", "isDisabled", "children", "onChange"]);
  const [isExpanded, setIsExpanded] = (0, import_react45.useState)(isOpen);
  (0, import_react45.useEffect)(() => {
    setIsExpanded(isOpen);
  }, [isOpen]);
  const onToggle = (0, import_react45.useCallback)(() => {
    setIsExpanded(!isExpanded);
    if (typeof onChange === "function") {
      onChange(!isExpanded);
    }
  }, [isExpanded, onChange]);
  const context = {
    isExpanded,
    isDisabled,
    onToggle
  };
  return import_react45.default.createElement(
    AccordionItemProvider,
    { context },
    import_react45.default.createElement(Box, Object.assign({ mb: 10, ref }, rest), children)
  );
});
AccordionItem.displayName = "AccordionItem";

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Accordion/AccordionHeader.js
var import_react46 = __toESM(require_react());
var AccordionHeader = (_a) => {
  var { onClick, children } = _a, rest = __rest(_a, ["onClick", "children"]);
  const { onToggle, isExpanded, isDisabled } = (0, import_react46.useContext)(AccordionItemContext);
  const handleClick = (0, import_react46.useCallback)(() => {
    if (isDisabled) {
      return;
    }
    if (typeof onClick === "function") {
      onClick();
    }
    onToggle();
  }, [isDisabled, onClick, onToggle]);
  return import_react46.default.createElement(
    Flex,
    Object.assign({
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      px: 16,
      py: 14,
      // backgroundColor={isExpanded ? 'main.$500' : 'main.$600'}
      borderRadius: "$4",
      boxShadow: "0 2px 7px 0 rgba(0, 0, 0, .15)",
      transition: "box-shadow 0.3s",
      cursor: isDisabled ? "not-allowed" : "pointer",
      color: "text",
      fontSize: "$14",
      lineHeight: "$24"
    }, rest, { "aria-disabled": isDisabled, "aria-expanded": isExpanded, onClick: handleClick }),
    children,
    import_react46.default.createElement(Icon, { icon: chevron, color: "icon", transition: "transform .3s", sx: {
      transform: isExpanded ? "rotate(-180deg)" : "rotate(0deg)"
    }, size: 24 })
  );
};
AccordionHeader.displayName = "AccordionHeader";

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/Accordion/AccordionPanel.js
var import_react47 = __toESM(require_react());
var commonStyles = {
  fontSize: "$14",
  color: "textsec",
  pr: 10,
  pl: 16,
  transition: "max-height .3s, padding-top .3s, padding-bottom .3s, margin-top .3s",
  overflow: "hidden"
};
var AccordionPanel = (_a) => {
  var { children } = _a, rest = __rest(_a, ["children"]);
  const { isExpanded, isDisabled } = (0, import_react47.useContext)(AccordionItemContext);
  const styles = isExpanded ? Object.assign(Object.assign({}, commonStyles), { maxHeight: 500, py: 12, mt: 10 }) : Object.assign(Object.assign({}, commonStyles), { maxHeight: 0, py: 0 });
  return import_react47.default.createElement(
    Box,
    Object.assign({ "aria-disabled": isDisabled, "aria-expanded": isExpanded }, styles, rest),
    import_react47.default.createElement(Box, { maxHeight: 476, pr: 6, overflowY: "auto", sx: {
      "::-webkit-scrollbar": {
        width: 4
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "mediumGrey.$300",
        borderRadius: 1.5,
        width: 3
      }
    } }, children)
  );
};
AccordionPanel.displayName = "AccordionPanel";

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/components/DotLoader/DotLoader.js
var React55 = __toESM(require_react());
var loaderAnimation = keyframes({
  "0%, 80%, 100%": {
    boxShadow: "0 15px 0 0 #3C69FF, 0 17px 0 0 transparent"
  },
  "40%": {
    boxShadow: "0 15px 0 -15px #3C69FF"
  }
});
var Dot = ({ size: size2, animationDelay }) => React55.createElement(Box, { width: size2, height: size2, borderRadius: "circle", mt: "-15px", sx: {
  animation: `${loaderAnimation} 1.6s infinite ease-in-out`,
  animationFillMode: "both",
  animationDelay
} });
var DotLoader = ({ dotSize = 13 }) => React55.createElement(
  Flex,
  { width: dotSize * 4, height: dotSize, justifyContent: "space-between" },
  React55.createElement(Dot, { size: dotSize }),
  React55.createElement(Dot, { size: dotSize, animationDelay: ".16s" }),
  React55.createElement(Dot, { size: dotSize, animationDelay: ".32s" })
);

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/themes/default.js
var common = {
  fontSizes,
  fontWeights,
  lineHeights,
  space: space2,
  sizes,
  radii,
  transitions,
  borderWidths,
  breakpoints,
  shadows
};
var darkTheme = Object.assign({ colors: Object.assign(Object.assign(Object.assign({}, darkThemeColors), { help: {
  active: colors.mediumGrey.$400,
  hover: colors.blue.$300,
  disabled: colors.darkGrey.$100
}, button: {
  transparent: {
    border: {
      hover: colors.mediumGrey.$850,
      focus: colors.darkGrey.$100
    }
  }
} }), colors) }, common);
var lightTheme = Object.assign({ colors: Object.assign(Object.assign(Object.assign({}, lightThemeColors), { help: {
  active: colors.mediumGrey.$400,
  hover: colors.blue.$300,
  disabled: colors.lightGrey.$800
}, button: {
  transparent: {
    border: {
      hover: colors.lightGrey.$600,
      focus: colors.lightGrey.$500
    }
  }
} }), colors) }, common);
var defaultTheme2 = Object.assign({}, darkTheme);

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/icons/close.js
var import_react48 = __toESM(require_react());
var iconClose = {
  path: import_react48.default.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M2.613 1.21l.094.083L7 5.585l4.293-4.292a1 1 0 011.497 1.32l-.083.094L8.415 7l4.292 4.293a1 1 0 01-1.32 1.497l-.094-.083L7 8.415l-4.293 4.292a1 1 0 01-1.497-1.32l.083-.094L5.585 7 1.293 2.707a1 1 0 011.32-1.497z" }),
  viewBox: "0 0 14 14"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/icons/logo.js
var import_react49 = __toESM(require_react());
var iconLogo = {
  path: import_react49.default.createElement(
    import_react49.default.Fragment,
    null,
    import_react49.default.createElement(
      "defs",
      null,
      import_react49.default.createElement(
        "filter",
        { id: "a", width: "208%", height: "316%", x: "-54%", y: "-108%", filterUnits: "objectBoundingBox" },
        import_react49.default.createElement("feOffset", { in: "SourceAlpha", result: "shadowOffsetOuter1" }),
        import_react49.default.createElement("feGaussianBlur", { in: "shadowOffsetOuter1", result: "shadowBlurOuter1", stdDeviation: "9" }),
        import_react49.default.createElement("feColorMatrix", { in: "shadowBlurOuter1", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" })
      ),
      import_react49.default.createElement(
        "filter",
        { id: "c", width: "208%", height: "316%", x: "-54%", y: "-108%", filterUnits: "objectBoundingBox" },
        import_react49.default.createElement("feOffset", { in: "SourceAlpha", result: "shadowOffsetOuter1" }),
        import_react49.default.createElement("feGaussianBlur", { in: "shadowOffsetOuter1", result: "shadowBlurOuter1", stdDeviation: "9" }),
        import_react49.default.createElement("feColorMatrix", { in: "shadowBlurOuter1", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" })
      )
    ),
    import_react49.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      import_react49.default.createElement("path", { fill: "#3A4050", d: "M23.441 0H56.56c8.15 0 11.107.849 14.086 2.442a16.615 16.615 0 0 1 6.913 6.913C79.15 12.335 80 15.29 80 23.44V56.56c0 8.15-.849 11.107-2.442 14.086a16.615 16.615 0 0 1-6.913 6.913C67.665 79.15 64.71 80 56.56 80H23.44c-8.15 0-11.107-.849-14.086-2.442a16.615 16.615 0 0 1-6.913-6.913C.85 67.665 0 64.71 0 56.56V23.44c0-8.15.849-11.107 2.442-14.086a16.615 16.615 0 0 1 6.913-6.913C12.335.85 15.29 0 23.44 0z" }),
      import_react49.default.createElement(
        "g",
        { fillRule: "nonzero" },
        import_react49.default.createElement(
          "g",
          { transform: "translate(15 15)" },
          import_react49.default.createElement("path", { fill: "#000", d: "M25 25l25 25H0z" }),
          import_react49.default.createElement("path", { fill: "#5B80EA", d: "M25 25l25 25H0z" })
        ),
        import_react49.default.createElement(
          "g",
          { transform: "matrix(1 0 0 -1 15 40)" },
          import_react49.default.createElement("path", { fill: "#000", d: "M25 0l25 25H0z" }),
          import_react49.default.createElement("path", { fill: "#E14B51", d: "M25 0l25 25H0z" })
        )
      )
    )
  ),
  viewBox: "0 0 80 80"
};

// node_modules/@waves.exchange/wx-react-uikit/dist/esm/icons/invoke.js
var import_react50 = __toESM(require_react());
var iconInvoke = {
  path: import_react50.default.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M20 0c11.046 0 20 8.954 20 20 0 2.55-.477 4.988-1.347 7.23A8.25 8.25 0 0 1 27.23 38.653 19.937 19.937 0 0 1 20 40C8.954 40 0 31.046 0 20S8.954 0 20 0zm0 1.5C9.783 1.5 1.5 9.783 1.5 20S9.783 38.5 20 38.5a18.48 18.48 0 0 0 5.88-.954 8.25 8.25 0 0 1 11.666-11.667A18.47 18.47 0 0 0 38.5 20C38.5 9.783 30.217 1.5 20 1.5zM31.75 25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zm-1.009 3.226l4.35 2.9a.75.75 0 0 1 0 1.248l-4.35 2.9a.75.75 0 0 1-1.166-.624v-5.8a.75.75 0 0 1 1.166-.624zm.334 2.025v2.998l2.248-1.499-2.248-1.499zm-6.52-19.767a.75.75 0 0 1 .362.996l-8.24 17.673a.75.75 0 0 1-1.36-.633l8.241-17.673a.75.75 0 0 1 .997-.363zM12.738 14.51a.75.75 0 0 1 0 1.06l-4.423 4.422 4.415 4.415a.75.75 0 1 1-1.06 1.061l-4.95-4.95a.75.75 0 0 1 0-1.06l.075-.067 4.882-4.88a.75.75 0 0 1 1.06 0zm15.587 0l4.88 4.88a.75.75 0 0 1 .078 1.129l-1.981 1.98h-.052c-.847 0-1.665.128-2.434.365l2.87-2.871-4.421-4.422a.75.75 0 1 1 1.06-1.06z" }),
  viewBox: "0 0 40 40"
};
export {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AddressAvatar,
  AssetLogo,
  AssetLogoWithIcon,
  Avatar,
  Box,
  Button,
  Checkbox,
  Copy,
  CopyMini,
  DotLoader,
  ExternalLink,
  Flex,
  FormattedInput,
  Heading,
  Help,
  Icon,
  IconButton,
  Input,
  InputElement,
  InputPassword,
  InputWithTag,
  Label,
  LightCopy,
  List,
  List2 as ListDefault,
  Option,
  Option2 as OptionDefault,
  PlateNote,
  Popper,
  PopperArrow,
  Radio,
  RadioGroup,
  Select,
  Selected,
  Selected2 as SelectedDefault,
  Spinner,
  TOOLTIP_LABELS,
  Tab,
  TabContext,
  TabPanel,
  TabPanels,
  Tabs,
  TabsList,
  Text,
  Tooltip,
  USER_TYPES,
  checkBoxInputTestId,
  checkBoxTestId,
  chevron,
  controlBoxTestId,
  darkTheme,
  defaultTheme2 as defaultTheme,
  iconButtonTestId,
  iconCheck,
  iconClose,
  iconCloseSelect,
  iconEyeHide,
  iconEyeView,
  iconInvoke,
  iconLogo,
  iconLogoText,
  iconOpenSelect,
  iconQuestion,
  iconTestId,
  inputSizeVariants,
  inputVariants,
  lightTheme,
  radioControlBoxTestId,
  radioGroupTestId,
  radioInputTestId,
  radioTestId
};
/*! Bundled license information:

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=@waves__exchange_wx-react-uikit.js.map
