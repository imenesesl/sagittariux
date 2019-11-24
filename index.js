"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SagittariuxStateless = exports.SagittariuxStatefull = exports.SagittariuxBlackHole = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useCombined = _interopRequireDefault(require("./use.combined.reducers"));

var _state = require("./state.context");

var _sagittariux = _interopRequireDefault(require("./sagittariux.state"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SagittariuxBlackHole = function SagittariuxBlackHole(_ref) {
  var Component = _ref.component,
      reducers = _ref.reducers;

  var _useCombinedReducers = (0, _useCombined["default"])(reducers),
      _useCombinedReducers2 = _slicedToArray(_useCombinedReducers, 2),
      state = _useCombinedReducers2[0],
      dispatch = _useCombinedReducers2[1];

  return _react["default"].createElement(_sagittariux["default"], {
    component: Component,
    state: state,
    dispatch: dispatch
  });
};

exports.SagittariuxBlackHole = SagittariuxBlackHole;

var SagittariuxStatefull = function SagittariuxStatefull(_ref2) {
  var Component = _ref2.component,
      rest = _objectWithoutProperties(_ref2, ["component"]);

  var state = (0, _react.useContext)(_state.StateContext);
  var dispatch = (0, _react.useContext)(_state.DispatchContext);
  return _react["default"].createElement(Component, _extends({
    state: state,
    dispatch: dispatch
  }, rest));
};

exports.SagittariuxStatefull = SagittariuxStatefull;

var SagittariuxStateless = function SagittariuxStateless(_ref3) {
  var Component = _ref3.component,
      rest = _objectWithoutProperties(_ref3, ["component"]);

  var state = (0, _react.useContext)(_state.StateContext);
  return _react["default"].createElement(Component, _extends({
    state: state
  }, rest));
};

exports.SagittariuxStateless = SagittariuxStateless;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _state = require("./state.context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SagittariuxState = function SagittariuxState(_ref) {
  var Component = _ref.component,
      dispatch = _ref.dispatch,
      state = _ref.state;
  return _react["default"].createElement(_state.DispatchContext.Provider, {
    value: dispatch
  }, _react["default"].createElement(_state.StateContext.Provider, {
    value: state
  }, _react["default"].createElement(Component, null)));
};

var _default = SagittariuxState;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DispatchContext = exports.StateContext = void 0;

var _react = require("react");

var StateContext = (0, _react.createContext)();
exports.StateContext = StateContext;
var DispatchContext = (0, _react.createContext)();
exports.DispatchContext = DispatchContext;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useCombinedReducers = function useCombinedReducers(combinedReducers) {
  var state = Object.keys(combinedReducers).reduce(function (acc, key) {
    return _objectSpread({}, acc, _defineProperty({}, key, combinedReducers[key][0]));
  }, {});

  var dispatch = function dispatch(action) {
    return Object.keys(combinedReducers).map(function (key) {
      return combinedReducers[key][1];
    }).forEach(function (fn) {
      return fn(action);
    });
  };

  return [state, dispatch];
};

var _default = useCombinedReducers;
exports["default"] = _default;
