(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _register = require('./register');

var _register2 = _interopRequireWildcard(_register);

var extensions = {},
    WC = Object.create(null, {
    register: {
        enumerable: true,
        configurable: false,
        writable: false,
        value: _register2['default'].bind(WC)
    },

    // A dictionary of applied extensions.
    // Every applied extention will be available to each Winston Churchill
    // component in the app.
    extensions: {
        enumerable: true,
        get: function get() {
            return extensions;
        },
        set: function set(ext) {
            return new Error('Cannot overwrite `extensions` property on WC');
        }
    },

    missingDeps: {
        enumerable: true,
        get: function get() {
            return function (extention, deps) {
                var missings = deps.reduce(function (missing, curr) {
                    if (!WC.extensions[curr]) {
                        missing.push(curr);
                    }
                    return missing;
                }, []);

                if (!WC.extensions[extention]) {
                    WC.extensions[extention] = true;
                }

                if (missings.length) {
                    console.error('The Winsoton Churchill `' + extention + '` extention is missing these dependencies: \n' + missings.join('\n,'));
                }

                return missings;
            };
        }
    }
});

exports['default'] = window.WC = WC;
module.exports = exports['default'];

},{"./register":2}],2:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _import = require('./utils');

var util = _interopRequireWildcard(_import);

var isString = function isString(thing) {
    return util.typeOf(thing) === 'string';
};

exports['default'] = function (name) {
    var config = arguments[1] === undefined ? {} : arguments[1];

    var proto = config.prototype || HTMLElement.prototype,
        ext = config['extends'];

    proto = isString(proto) ? document.createElement(proto) : proto;

    proto = util.protoChain(WC.extensions, proto);

    return document.registerElement(name, {
        prototype: Object.create(proto, {}),
        'extends': ext
    });
};

module.exports = exports['default'];

},{"./utils":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.typeOf = typeOf;
exports.protoChain = protoChain;

function typeOf(thing) {
    return ({}).toString.call(thing).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}

function protoChain() {
    for (var _len = arguments.length, objs = Array(_len), _key = 0; _key < _len; _key++) {
        objs[_key] = arguments[_key];
    }

    return objs.reverse().reduce(function (proto, obj) {
        Object.setPrototypeOf(obj, proto);
        return obj;
    });
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvY29yeWJyb3duL2NvZGUvd2luc3Rvbi1jaHVyY2hpbGwvc3JjL3djLmpzIiwiL1VzZXJzL2Nvcnlicm93bi9jb2RlL3dpbnN0b24tY2h1cmNoaWxsL3NyYy9yZWdpc3Rlci5qcyIsIi9Vc2Vycy9jb3J5YnJvd24vY29kZS93aW5zdG9uLWNodXJjaGlsbC9zcmMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozt3QkNBcUIsWUFBWTs7OztBQUVqQyxJQUFJLFVBQVUsR0FBRyxFQUFFO0lBRWYsRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0FBQ3JCLFlBQVEsRUFBRTtBQUNOLGtCQUFVLEVBQUUsSUFBSTtBQUNoQixvQkFBWSxFQUFFLEtBQUs7QUFDbkIsZ0JBQVEsRUFBRSxLQUFLO0FBQ2YsYUFBSyxFQUFFLHNCQUFTLElBQUksQ0FBQyxFQUFFLENBQUM7S0FDM0I7Ozs7O0FBS0QsY0FBVSxFQUFFO0FBQ1Isa0JBQVUsRUFBRSxJQUFJO0FBQ2hCLFdBQUcsRUFBRTttQkFBTSxVQUFVO1NBQUE7QUFDckIsV0FBRyxFQUFFLGFBQUMsR0FBRzttQkFBSyxJQUFJLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQztTQUFBO0tBQzFFOztBQUVELGVBQVcsRUFBRTtBQUNULGtCQUFVLEVBQUUsSUFBSTtBQUNoQixXQUFHLEVBQUU7bUJBQU0sVUFBVSxTQUFTLEVBQUUsSUFBSSxFQUFFO0FBQ2xDLG9CQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsT0FBTyxFQUFFLElBQUksRUFBSztBQUMxQyx3QkFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDdEIsK0JBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ3RCO0FBQ0QsMkJBQU8sT0FBTyxDQUFDO2lCQUNsQixFQUFFLEVBQUUsQ0FBQyxDQUFDOztBQUVQLG9CQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUMzQixzQkFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7aUJBQ25DOztBQUVELG9CQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7QUFDakIsMkJBQU8sQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEdBQUcsU0FBUyxHQUFHLCtDQUErQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDbEk7O0FBRUQsdUJBQU8sUUFBUSxDQUFDO2FBRW5CO1NBQUE7S0FDSjtDQUNKLENBQUMsQ0FBQzs7cUJBRVEsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFOzs7Ozs7Ozs7Ozs7c0JDN0NQLFNBQVM7O0lBQW5CLElBQUk7O0FBRWhCLElBQUksUUFBUSxHQUFHLGtCQUFBLEtBQUs7V0FBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLFFBQVE7Q0FBQSxDQUFDOztxQkFFekMsVUFBQyxJQUFJLEVBQWtCO1FBQWhCLE1BQU0sZ0NBQUcsRUFBRTs7QUFDN0IsUUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVMsSUFBSSxXQUFXLENBQUMsU0FBUztRQUNqRCxHQUFHLEdBQUcsTUFBTSxXQUFRLENBQUM7O0FBRXpCLFNBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7O0FBRWhFLFNBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7O0FBRTlDLFdBQU8sUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUU7QUFDbEMsaUJBQVMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7QUFDbkMsbUJBQVMsR0FBRztLQUNmLENBQUMsQ0FBQztDQUNOOzs7Ozs7Ozs7O1FDaEJlLE1BQU0sR0FBTixNQUFNO1FBSU4sVUFBVSxHQUFWLFVBQVU7O0FBSm5CLFNBQVMsTUFBTSxDQUFDLEtBQUssRUFBRTtBQUMxQixXQUFPLENBQUMsR0FBRSxDQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0NBQzVFOztBQUVNLFNBQVMsVUFBVSxHQUFVO3NDQUFOLElBQUk7QUFBSixZQUFJOzs7QUFDOUIsV0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBSztBQUN6QyxjQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNsQyxlQUFPLEdBQUcsQ0FBQztLQUNkLENBQUMsQ0FBQztDQUNOIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCByZWdpc3RlciBmcm9tICcuL3JlZ2lzdGVyJztcblxubGV0IGV4dGVuc2lvbnMgPSB7fSxcblxuICAgIFdDID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgICAgIHJlZ2lzdGVyOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiByZWdpc3Rlci5iaW5kKFdDKVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEEgZGljdGlvbmFyeSBvZiBhcHBsaWVkIGV4dGVuc2lvbnMuXG4gICAgICAgIC8vIEV2ZXJ5IGFwcGxpZWQgZXh0ZW50aW9uIHdpbGwgYmUgYXZhaWxhYmxlIHRvIGVhY2ggV2luc3RvbiBDaHVyY2hpbGxcbiAgICAgICAgLy8gY29tcG9uZW50IGluIHRoZSBhcHAuXG4gICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBnZXQ6ICgpID0+IGV4dGVuc2lvbnMsXG4gICAgICAgICAgICBzZXQ6IChleHQpID0+IG5ldyBFcnJvcignQ2Fubm90IG92ZXJ3cml0ZSBgZXh0ZW5zaW9uc2AgcHJvcGVydHkgb24gV0MnKVxuICAgICAgICB9LFxuXG4gICAgICAgIG1pc3NpbmdEZXBzOiB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZ2V0OiAoKSA9PiBmdW5jdGlvbiAoZXh0ZW50aW9uLCBkZXBzKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1pc3NpbmdzID0gZGVwcy5yZWR1Y2UoKG1pc3NpbmcsIGN1cnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFXQy5leHRlbnNpb25zW2N1cnJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaXNzaW5nLnB1c2goY3Vycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1pc3Npbmc7XG4gICAgICAgICAgICAgICAgfSwgW10pO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFXQy5leHRlbnNpb25zW2V4dGVudGlvbl0pIHtcbiAgICAgICAgICAgICAgICAgICAgV0MuZXh0ZW5zaW9uc1tleHRlbnRpb25dID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBXaW5zb3RvbiBDaHVyY2hpbGwgYCcgKyBleHRlbnRpb24gKyAnYCBleHRlbnRpb24gaXMgbWlzc2luZyB0aGVzZSBkZXBlbmRlbmNpZXM6IFxcbicgKyBtaXNzaW5ncy5qb2luKCdcXG4sJykpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBtaXNzaW5ncztcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpbmRvdy5XQyA9IFdDO1xuIiwiaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWxzJztcblxubGV0IGlzU3RyaW5nID0gdGhpbmcgPT4gdXRpbC50eXBlT2YodGhpbmcpID09PSAnc3RyaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgKG5hbWUsIGNvbmZpZyA9IHt9KSA9PiB7XG4gICAgbGV0IHByb3RvID0gY29uZmlnLnByb3RvdHlwZSB8fCBIVE1MRWxlbWVudC5wcm90b3R5cGUsXG4gICAgICAgIGV4dCA9IGNvbmZpZy5leHRlbmRzO1xuXG4gICAgcHJvdG8gPSBpc1N0cmluZyhwcm90bykgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHByb3RvKSA6IHByb3RvO1xuXG4gICAgcHJvdG8gPSB1dGlsLnByb3RvQ2hhaW4oV0MuZXh0ZW5zaW9ucywgcHJvdG8pO1xuXG4gICAgcmV0dXJuIGRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudChuYW1lLCB7XG4gICAgICAgIHByb3RvdHlwZTogT2JqZWN0LmNyZWF0ZShwcm90bywge30pLFxuICAgICAgICBleHRlbmRzOiBleHRcbiAgICB9KTtcbn07XG4iLCJleHBvcnQgZnVuY3Rpb24gdHlwZU9mKHRoaW5nKSB7XG4gICAgcmV0dXJuICh7fSkudG9TdHJpbmcuY2FsbCh0aGluZykubWF0Y2goL1xccyhbYS16QS1aXSspLylbMV0udG9Mb3dlckNhc2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3RvQ2hhaW4oLi4ub2Jqcykge1xuICAgIHJldHVybiBvYmpzLnJldmVyc2UoKS5yZWR1Y2UoKHByb3RvLCBvYmopID0+IHtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKG9iaiwgcHJvdG8pO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0pO1xufVxuIl19
