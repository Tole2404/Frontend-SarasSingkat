import {
  require_prop_types
} from "./chunk-2SA2TB4A.js";
import {
  require_react
} from "./chunk-PMYDY72F.js";
import {
  __commonJS
} from "./chunk-ZS7NZCD4.js";

// node_modules/react-rating-stars-component/dist/hooks/useConfig.js
var require_useConfig = __commonJS({
  "node_modules/react-rating-stars-component/dist/hooks/useConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _slicedToArray = /* @__PURE__ */ function() {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"])
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      return function(arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();
    exports.default = useConfig;
    var _react = require_react();
    function useConfig(config) {
      var _useState = (0, _react.useState)(config.count), _useState2 = _slicedToArray(_useState, 2), count = _useState2[0], setCount = _useState2[1];
      var _useState3 = (0, _react.useState)(config.size), _useState4 = _slicedToArray(_useState3, 2), size = _useState4[0], setSize = _useState4[1];
      var _useState5 = (0, _react.useState)(config.char), _useState6 = _slicedToArray(_useState5, 2), char = _useState6[0], setChar = _useState6[1];
      var _useState7 = (0, _react.useState)(config.color), _useState8 = _slicedToArray(_useState7, 2), color = _useState8[0], setColor = _useState8[1];
      var _useState9 = (0, _react.useState)(config.activeColor), _useState10 = _slicedToArray(_useState9, 2), activeColor = _useState10[0], setActiveColor = _useState10[1];
      var _useState11 = (0, _react.useState)(config.isHalf), _useState12 = _slicedToArray(_useState11, 2), isHalf = _useState12[0], setIsHalf = _useState12[1];
      var _useState13 = (0, _react.useState)(config.edit), _useState14 = _slicedToArray(_useState13, 2), edit = _useState14[0], setEdit = _useState14[1];
      var _useState15 = (0, _react.useState)(config.emptyIcon), _useState16 = _slicedToArray(_useState15, 2), emptyIcon = _useState16[0], setEmptyIcon = _useState16[1];
      var _useState17 = (0, _react.useState)(config.halfIcon), _useState18 = _slicedToArray(_useState17, 2), halfIcon = _useState18[0], setHalfIcon = _useState18[1];
      var _useState19 = (0, _react.useState)(config.filledIcon), _useState20 = _slicedToArray(_useState19, 2), filledIcon = _useState20[0], setFilledIcon = _useState20[1];
      var _useState21 = (0, _react.useState)(config.a11y), _useState22 = _slicedToArray(_useState21, 2), a11y = _useState22[0], setA11y = _useState22[1];
      var configObj = {
        count,
        size,
        char,
        color,
        activeColor,
        isHalf,
        edit,
        emptyIcon,
        halfIcon,
        filledIcon,
        a11y
      };
      function setConfig(config2) {
        setCount(config2.count);
        setSize(config2.size);
        setChar(config2.char);
        setColor(config2.color);
        setActiveColor(config2.activeColor);
        setIsHalf(config2.isHalf);
        setEdit(config2.edit);
        setEmptyIcon(config2.emptyIcon);
        setHalfIcon(config2.halfIcon);
        setFilledIcon(config2.filledIcon);
        setA11y(config2.a11y);
      }
      return [configObj, setConfig];
    }
  }
});

// node_modules/react-rating-stars-component/dist/star.js
var require_star = __commonJS({
  "node_modules/react-rating-stars-component/dist/star.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _extends = Object.assign || function(target) {
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
    exports.default = Star;
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var defaultStyles = {
      position: "relative",
      overflow: "hidden",
      cursor: "pointer",
      display: "block",
      float: "left"
    };
    function Star(props) {
      var index = props.index, active = props.active, config = props.config, onMouseOver = props.onMouseOver, onMouseLeave = props.onMouseLeave, onClick = props.onClick, halfStarHidden = props.halfStarHidden, halfStarAt = props.halfStarAt, isUsingIcons = props.isUsingIcons, uniqueness = props.uniqueness;
      var color = config.color, activeColor = config.activeColor, size = config.size, char = config.char, isHalf = config.isHalf, edit = config.edit, halfIcon = config.halfIcon, emptyIcon = config.emptyIcon, filledIcon = config.filledIcon;
      var starClass = "";
      var half = false;
      if (isHalf && !halfStarHidden && halfStarAt === index) {
        if (!isUsingIcons)
          starClass = "react-stars-" + uniqueness;
        else
          starClass = "react-stars-half";
        half = true;
      }
      var style = _extends({}, defaultStyles, {
        color: active ? activeColor : color,
        cursor: edit ? "pointer" : "default",
        fontSize: size + "px"
      });
      function renderIcon() {
        if (!isUsingIcons) {
          return char;
        } else {
          if (active) {
            return filledIcon;
          } else if (!active && half) {
            return halfIcon;
          } else {
            return emptyIcon;
          }
        }
      }
      return _react2.default.createElement(
        "span",
        {
          className: starClass,
          style,
          key: index,
          "data-index": index,
          "data-forhalf": filledIcon ? index : char,
          onMouseOver,
          onMouseMove: onMouseOver,
          onMouseLeave,
          onClick
        },
        renderIcon()
      );
    }
  }
});

// node_modules/react-rating-stars-component/dist/react-stars.js
var require_react_stars = __commonJS({
  "node_modules/react-rating-stars-component/dist/react-stars.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _slicedToArray = /* @__PURE__ */ function() {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"])
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      return function(arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var _useConfig3 = require_useConfig();
    var _useConfig4 = _interopRequireDefault(_useConfig3);
    var _star = require_star();
    var _star2 = _interopRequireDefault(_star);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var parentStyles = {
      overflow: "hidden",
      position: "relative"
    };
    function getHalfStarStyles(color, uniqueness) {
      return "\n    .react-stars-" + uniqueness + ":before {\n      position: absolute;\n      overflow: hidden;\n      display: block;\n      z-index: 1;\n      top: 0; left: 0;\n      width: 50%;\n      content: attr(data-forhalf);\n      color: " + color + ";\n  }";
    }
    function getHalfStarStyleForIcons(color) {
      return "\n          span.react-stars-half > * {\n          color: " + color + ";\n      }";
    }
    function ReactStars(props) {
      var _useState = (0, _react.useState)(""), _useState2 = _slicedToArray(_useState, 2), uniqueness = _useState2[0], setUniqueness = _useState2[1];
      var _useState3 = (0, _react.useState)(0), _useState4 = _slicedToArray(_useState3, 2), currentValue = _useState4[0], setCurrentValue = _useState4[1];
      var _useState5 = (0, _react.useState)([]), _useState6 = _slicedToArray(_useState5, 2), stars = _useState6[0], setStars = _useState6[1];
      var _useState7 = (0, _react.useState)(false), _useState8 = _slicedToArray(_useState7, 2), isUsingIcons = _useState8[0], setIsUsingIcons = _useState8[1];
      var _useConfig = (0, _useConfig4.default)(props), _useConfig2 = _slicedToArray(_useConfig, 2), config = _useConfig2[0], setConfig = _useConfig2[1];
      var _useState9 = (0, _react.useState)(0), _useState10 = _slicedToArray(_useState9, 2), halfStarAt = _useState10[0], setHalfStarAt = _useState10[1];
      var _useState11 = (0, _react.useState)(false), _useState12 = _slicedToArray(_useState11, 2), halfStarHidden = _useState12[0], setHalfStarHidden = _useState12[1];
      var _useState13 = (0, _react.useState)(""), _useState14 = _slicedToArray(_useState13, 2), classNames = _useState14[0], setClassNames = _useState14[1];
      function iconsUsed(config2) {
        return !config2.isHalf && config2.emptyIcon && config2.filledIcon || config2.isHalf && config2.emptyIcon && config2.halfIcon && config2.filledIcon;
      }
      function createUniqueness() {
        setUniqueness((Math.random() + "").replace(".", ""));
      }
      (0, _react.useEffect)(function() {
        addClassNames();
        validateInitialValue(props.value, props.count);
        setStars(getStars(props.value));
        setConfig(props);
        createUniqueness();
        setIsUsingIcons(iconsUsed(props));
        setHalfStarAt(Math.floor(props.value));
        setHalfStarHidden(props.isHalf && props.value % 1 < 0.5);
      }, []);
      function validateInitialValue(value, count) {
        if (value < 0 || value > count) {
          setCurrentValue(0);
        } else {
          setCurrentValue(value);
        }
      }
      function addClassNames() {
        var reactStarsClass = "react-stars";
        setClassNames(props.classNames + (" " + reactStarsClass));
      }
      function isDecimal(value) {
        return value % 1 === 0;
      }
      function getRate() {
        return config.isHalf ? Math.floor(currentValue) : Math.round(currentValue);
      }
      function getStars(activeCount) {
        if (typeof activeCount === "undefined") {
          activeCount = getRate();
        }
        var stars2 = [];
        for (var i = 0; i < config.count; i++) {
          stars2.push({
            active: i <= activeCount - 1
          });
        }
        return stars2;
      }
      function mouseOver(event) {
        if (!config.edit)
          return;
        var index = Number(event.currentTarget.getAttribute("data-index"));
        if (config.isHalf) {
          var isAtHalf = moreThanHalf(event);
          setHalfStarHidden(isAtHalf);
          if (isAtHalf)
            index += 1;
          setHalfStarAt(index);
        } else {
          index += 1;
        }
        updateStars(index);
      }
      function updateStars(index) {
        var currentActive = stars.filter(function(x) {
          return x.active;
        });
        if (index !== currentActive.length) {
          setStars(getStars(index));
        }
      }
      function moreThanHalf(event) {
        var target = event.target;
        var boundingClientRect = target.getBoundingClientRect();
        var mouseAt = event.clientX - boundingClientRect.left;
        mouseAt = Math.round(Math.abs(mouseAt));
        return mouseAt > boundingClientRect.width / 2;
      }
      function mouseLeave() {
        if (!config.edit)
          return;
        updateHalfStarValues(currentValue);
        setStars(getStars());
      }
      function updateHalfStarValues(value) {
        if (config.isHalf) {
          setHalfStarHidden(isDecimal(value));
          setHalfStarAt(Math.floor(value));
        }
      }
      function onClick(event) {
        if (!config.edit)
          return;
        var index = Number(event.currentTarget.getAttribute("data-index"));
        var value = void 0;
        if (config.isHalf) {
          var isAtHalf = moreThanHalf(event);
          setHalfStarHidden(isAtHalf);
          if (isAtHalf)
            index += 1;
          value = isAtHalf ? index : index + 0.5;
          setHalfStarAt(index);
        } else {
          value = index = index + 1;
        }
        currentValueUpdated(value);
      }
      function renderHalfStarStyleElement() {
        return _react2.default.createElement("style", { dangerouslySetInnerHTML: {
          __html: isUsingIcons ? getHalfStarStyleForIcons(config.activeColor) : getHalfStarStyles(config.activeColor, uniqueness)
        } });
      }
      function currentValueUpdated(value) {
        if (value !== currentValue) {
          setStars(getStars(value));
          setCurrentValue(value);
          props.onChange(value);
        }
      }
      function handleKeyDown(event) {
        if (!config.a11y && !config.edit)
          return;
        var key = event.key;
        var value = currentValue;
        var keyNumber = Number(key);
        if (keyNumber) {
          if (Number.isInteger(keyNumber) && keyNumber > 0 && keyNumber <= config.count) {
            value = keyNumber;
          }
        } else {
          if ((key === "ArrowUp" || key === "ArrowRight") && value < config.count) {
            event.preventDefault();
            value += config.isHalf ? 0.5 : 1;
          } else if ((key === "ArrowDown" || key === "ArrowLeft") && value > 0.5) {
            event.preventDefault();
            value -= config.isHalf ? 0.5 : 1;
          }
        }
        updateHalfStarValues(value);
        currentValueUpdated(value);
      }
      function renderStars() {
        return stars.map(function(star, i) {
          return _react2.default.createElement(_star2.default, {
            key: i,
            index: i,
            active: star.active,
            config,
            onMouseOver: mouseOver,
            onMouseLeave: mouseLeave,
            onClick,
            halfStarHidden,
            halfStarAt,
            isUsingIcons,
            uniqueness
          });
        });
      }
      return _react2.default.createElement(
        "div",
        {
          className: "react-stars-wrapper-" + uniqueness,
          style: { display: "flex" }
        },
        _react2.default.createElement(
          "div",
          {
            tabIndex: config.a11y && config.edit ? 0 : null,
            "aria-label": "add rating by typing an integer from 0 to 5 or pressing arrow keys",
            onKeyDown: handleKeyDown,
            className: classNames,
            style: parentStyles
          },
          config.isHalf && renderHalfStarStyleElement(),
          renderStars(),
          _react2.default.createElement(
            "p",
            { style: { position: "absolute", left: "-200rem" }, role: "status" },
            currentValue
          )
        )
      );
    }
    ReactStars.propTypes = {
      classNames: _propTypes2.default.string,
      edit: _propTypes2.default.bool,
      half: _propTypes2.default.bool,
      value: _propTypes2.default.number,
      count: _propTypes2.default.number,
      char: _propTypes2.default.string,
      size: _propTypes2.default.number,
      color: _propTypes2.default.string,
      activeColor: _propTypes2.default.string,
      emptyIcon: _propTypes2.default.element,
      halfIcon: _propTypes2.default.element,
      filledIcon: _propTypes2.default.element,
      a11y: _propTypes2.default.bool
    };
    ReactStars.defaultProps = {
      edit: true,
      half: false,
      value: 0,
      count: 5,
      char: "★",
      size: 15,
      color: "gray",
      activeColor: "#ffd700",
      a11y: true,
      onChange: function onChange() {
      }
    };
    exports.default = ReactStars;
  }
});
export default require_react_stars();
//# sourceMappingURL=react-rating-stars-component.js.map
