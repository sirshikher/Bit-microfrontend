"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("./style.scss");

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

var self;

var SearchSelect =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchSelect, _React$Component);

  function SearchSelect(props) {
    var _this;

    _classCallCheck(this, SearchSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchSelect).call(this, props));
    self = _assertThisInitialized(_this);
    _this.state = {
      searchText: ''
    };
    _this.isItemClicked = false;
    return _this;
  }

  _createClass(SearchSelect, [{
    key: "onItemClick",
    value: function onItemClick(event, item) {
      item.onChange(event, item.field);

      if (item.popUp && item.popUp === true) {} else {
        self.isItemClicked = true;
      }
    }
  }, {
    key: "onAddClick",
    value: function onAddClick(e, item) {
      e.preventDefault();
      item.onShowPopUp();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var valueUpdater = function valueUpdater(e) {
        if (self.isItemClicked) {
          self.isItemClicked = false;
          e = '';
        } else {
          setTimeout(function () {
            _this2.props.form.setFieldsValue({
              transporter: e
            });
          }, 0);
        }
      };

      var item = this.props.values;
      var isDisplayAdd = item.isDisplayAdd != undefined ? item.isDisplayAdd : true;
      var toolTipSpan;

      if (item.tooltipInfo) {
        toolTipSpan = item.toolTipSpan ? item.toolTipSpan : 2;
      } else {
        toolTipSpan = 0;
      }

      return _react["default"].createElement(_antd.Form.Item, {
        label: item.label
      }, _react["default"].createElement(_antd.Row, null, _react["default"].createElement(_antd.Col, {
        span: 24 - toolTipSpan
      }, _react["default"].createElement(_antd.AutoComplete, {
        placeholder: item.placeholder,
        value: this.state.searchText,
        dataSource: item.dataSource,
        onSelect: function onSelect(e) {
          return _this2.onItemClick(e, item);
        },
        onSearch: function onSearch(e) {
          return item.handleSearch(e);
        },
        className: item.tooltipInfo ? 'set-border-radius' : null
      }, _react["default"].createElement(_antd.Input, {
        value: this.state.searchText,
        suffix: isDisplayAdd && _react["default"].createElement(_antd.Icon, {
          type: "plus-circle",
          onClick: function onClick(e) {
            return self.onAddClick(e, item);
          },
          style: {
            color: "#1890ff"
          }
        })
      }))), item.tooltipInfo && _react["default"].createElement(_antd.Col, {
        span: toolTipSpan,
        className: "input-field"
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

  return SearchSelect;
}(_react["default"].Component);

var _default = SearchSelect;
exports["default"] = _default;

//# sourceMappingURL=Select.react.js.map