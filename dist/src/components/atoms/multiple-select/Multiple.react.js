"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultipleSelect = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("./multiSelect.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CustomMultipleSelect =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CustomMultipleSelect, _React$Component);

  function CustomMultipleSelect(props) {
    _classCallCheck(this, CustomMultipleSelect);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomMultipleSelect).call(this, props));
  }

  _createClass(CustomMultipleSelect, [{
    key: "render",
    value: function render() {
      var item = this.props.values;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var Option = _antd.Select.Option;
      var inputSpan = item.tooltipInfo ? 22 : 24;
      var isJSXElement = item.isJSXElement ? item.isJSXElement : false;
      return _react["default"].createElement(_antd.Form.Item, {
        label: item.label
      }, _react["default"].createElement(_antd.Row, {
        className: "multi-select"
      }, _react["default"].createElement(_antd.Col, {
        span: inputSpan
      }, getFieldDecorator(item.label ? item.label : item.field, {
        initialValue: item.value,
        rules: item.disable ? null : item.rules
      })(_react["default"].createElement(_antd.Select, {
        mode: "multiple",
        size: "default",
        optionLabelProp: "label",
        placeholder: item.placeholder ? item.placeholder : "Please select",
        disabled: item.disable,
        className: item.tooltipInfo && "set-border-radius",
        onChange: function onChange(e) {
          !isJSXElement ? item.onChange(e, item.field) : null;
        },
        onSelect: function onSelect(e) {
          isJSXElement ? item.onChange(e, event, "select") : null;
        },
        onDeselect: function onDeselect(e) {
          isJSXElement ? item.onChange(e, event, "deselect") : null;
        },
        style: {
          width: "100%"
        }
      }, item.options.map(function (element, index) {
        var _React$createElement;

        return _react["default"].createElement(Option, (_React$createElement = {
          className: "disable-tick",
          key: index,
          disabled: element.disable,
          value: element.value
        }, _defineProperty(_React$createElement, "key", "index-".concat(index)), _defineProperty(_React$createElement, "label", element.label), _React$createElement), " ", !isJSXElement ? element.label : _react["default"].createElement(_antd.Row, {
          type: "flex",
          className: "search-results"
        }, _react["default"].createElement(_antd.Col, {
          span: 20
        }, _react["default"].createElement(_antd.Checkbox, {
          checked: element.is_selected
        }, element.label)), _react["default"].createElement(_antd.Col, {
          span: 2,
          className: "desk-type"
        }, " ", _react["default"].createElement(_antd.Icon, {
          onClick: function onClick(e) {
            item.onChange(element.value, e, "edit");
          },
          type: "edit"
        }), " "), _react["default"].createElement(_antd.Col, {
          span: 2,
          className: "desk-role"
        }, " ", _react["default"].createElement(_antd.Icon, {
          onClick: function onClick(e) {
            item.onChange(element.value, e, "delete");
          },
          type: "delete"
        }), " ")), " ");
      })))), item.tooltipInfo && _react["default"].createElement(_antd.Col, {
        span: 2,
        className: "multi-select-field"
      }, _react["default"].createElement("div", {
        className: "tooltip"
      }, _react["default"].createElement(_antd.Tooltip, {
        placement: "topLeft",
        title: item.infoContent
      }, _react["default"].createElement("div", {
        className: "tooltip-icon-view"
      }, _react["default"].createElement(_antd.Icon, {
        type: "info-circle"
      })))))));
    }
  }]);

  return CustomMultipleSelect;
}(_react["default"].Component);

exports.MultipleSelect = CustomMultipleSelect;

//# sourceMappingURL=Multiple.react.js.map