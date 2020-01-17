"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _index = _interopRequireDefault(require("../../atoms/Input/index.js"));

var _index2 = _interopRequireDefault(require("../../atoms/Button/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Meta = _antd.Card.Meta;
var Inputval = {
  type: "input",
  placeholder: "Name",
  label: "Rule Name",
  rules: [{
    whitespace: true,
    required: true,
    message: "Rule name is needed"
  }],
  field: "ruleName",
  // tooltipInfo: true,
  infoContent: "TOOLTIP.RULE_NAME",
  toolTipSpan: 2
};
var selectval = {
  type: "single-select",
  options: [],
  labelName: "Branch",
  rules: [{
    whitespace: true,
    required: true,
    message: "Type is required"
  }],
  field: "branchtype",
  span: 12
};
var styles = {
  fontFamily: "sans-serif",
  padding: "1rem"
};

var CustomCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CustomCard, _React$Component);

  function CustomCard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CustomCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CustomCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      console.log("Cliked");
    });

    return _this;
  }

  _createClass(CustomCard, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
        style: styles
      }, _react["default"].createElement(_antd.Card, {
        title: "With Button",
        extra: _react["default"].createElement(_index2["default"], {
          onClick: this.onClick
        }, "Test")
      }, _react["default"].createElement(_index["default"], {
        values: Inputval
      }), _react["default"].createElement(_index2["default"], {
        values: selectval
      })), _react["default"].createElement("br", null)));
    }
  }]);

  return CustomCard;
}(_react["default"].Component);

var _default = CustomCard;
exports["default"] = _default;

//# sourceMappingURL=Card.react.js.map