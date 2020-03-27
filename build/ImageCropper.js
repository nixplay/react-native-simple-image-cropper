"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNativeImagePanZoom = _interopRequireDefault(require("react-native-image-pan-zoom"));

var _imageEditor = _interopRequireDefault(require("@react-native-community/image-editor"));

var _percentCalculator = require("./helpers/percentCalculator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var window = _reactNative.Dimensions.get('window');

var w = window.width;

var ImageCropper = /*#__PURE__*/function (_PureComponent) {
  _inherits(ImageCropper, _PureComponent);

  var _super = _createSuper(ImageCropper);

  function ImageCropper() {
    var _this;

    _classCallCheck(this, ImageCropper);

    _this = _super.call(this);
    _this.state = {
      positionX: 0,
      positionY: 0,
      width: 0,
      height: 0,
      minScale: 1.01,
      adjustedHeight: 0,
      loading: true
    };

    _this.init = function () {
      var imageUri = _this.props.imageUri;

      _reactNative.Image.getSize(imageUri, function (width, height) {
        var _this$props = _this.props,
            setCropperParams = _this$props.setCropperParams,
            cropAreaWidth = _this$props.cropAreaWidth,
            cropAreaHeight = _this$props.cropAreaHeight;
        var srcSize = {
          w: width,
          h: height
        };
        var fittedSize = {
          w: 0,
          h: 0
        };
        var scale = 1.0001;

        if (width > height) {
          var ratio = w / height;
          fittedSize.w = width * ratio;
          fittedSize.h = w;
        } else if (width < height) {
          var _ratio = w / width;

          fittedSize.w = w;
          fittedSize.h = height * _ratio;
        } else if (width === height) {
          fittedSize.w = w;
          fittedSize.h = w;
        }

        if (cropAreaWidth < cropAreaHeight || cropAreaWidth === cropAreaHeight) {
          if (width < height) {
            if (fittedSize.h < cropAreaHeight) {
              scale = Math.ceil(cropAreaHeight / fittedSize.h * 10) / 10 + 0.0001;
            } else {
              scale = Math.ceil(cropAreaWidth / fittedSize.w * 10) / 10 + 0.0001;
            }
          } else {
            scale = Math.ceil(cropAreaHeight / fittedSize.h * 10) / 10 + 0.0001;
          }
        }

        scale = scale < 1 ? 1.0001 : scale;

        _this.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            srcSize: srcSize,
            fittedSize: fittedSize,
            minScale: scale,
            loading: false
          });
        }, function () {
          _this.imageZoom.current.centerOn({
            x: 0,
            y: 0,
            scale: scale,
            duration: 0
          });

          setCropperParams(_this.state);
        });
      });
    };

    _this.handleMove = function (_ref) {
      var positionX = _ref.positionX,
          positionY = _ref.positionY,
          scale = _ref.scale;
      var setCropperParams = _this.props.setCropperParams;

      _this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          positionX: positionX,
          positionY: positionY,
          scale: scale
        });
      }, function () {
        return setCropperParams(_this.state);
      });
    };

    _this.imageZoom = _react["default"].createRef();
    return _this;
  }

  _createClass(ImageCropper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var imageUri = this.props.imageUri;

      if (imageUri && prevProps.imageUri !== imageUri) {
        this.init();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loading = _this$state.loading,
          fittedSize = _this$state.fittedSize,
          minScale = _this$state.minScale;

      var _this$props2 = this.props,
          imageUri = _this$props2.imageUri,
          cropAreaWidth = _this$props2.cropAreaWidth,
          cropAreaHeight = _this$props2.cropAreaHeight,
          restProps = _objectWithoutProperties(_this$props2, ["imageUri", "cropAreaWidth", "cropAreaHeight"]);

      var imageSrc = {
        uri: imageUri
      };
      return !loading ? /*#__PURE__*/_react["default"].createElement(_reactNativeImagePanZoom["default"], _extends({
        ref: this.imageZoom
      }, restProps, {
        cropWidth: cropAreaWidth,
        cropHeight: cropAreaHeight,
        imageWidth: fittedSize.w,
        imageHeight: fittedSize.h,
        minScale: minScale,
        onMove: this.handleMove
      }), /*#__PURE__*/_react["default"].createElement(_reactNative.Image, {
        style: {
          width: fittedSize.w,
          height: fittedSize.h
        },
        source: imageSrc
      })) : null;
    }
  }]);

  return ImageCropper;
}(_react.PureComponent);

ImageCropper.propTypes = {
  imageUri: _propTypes["default"].string.isRequired,
  setCropperParams: _propTypes["default"].func.isRequired,
  cropAreaWidth: _propTypes["default"].number,
  cropAreaHeight: _propTypes["default"].number
};
ImageCropper.defaultProps = {
  cropAreaWidth: w,
  cropAreaHeight: w
};

ImageCropper.crop = function (params) {
  var imageUri = params.imageUri,
      cropSize = params.cropSize,
      positionX = params.positionX,
      positionY = params.positionY,
      cropAreaSize = params.cropAreaSize,
      srcSize = params.srcSize,
      fittedSize = params.fittedSize,
      scale = params.scale;
  var offset = {
    x: 0,
    y: 0
  };
  var cropAreaW = cropAreaSize ? cropAreaSize.width : w;
  var cropAreaH = cropAreaSize ? cropAreaSize.height : w;
  var wScale = cropAreaW / scale;
  var hScale = cropAreaH / scale;
  var percentCropperAreaW = (0, _percentCalculator.getPercentDiffNumberFromNumber)(wScale, fittedSize.w);
  var percentRestW = 100 - percentCropperAreaW;
  var hiddenAreaW = (0, _percentCalculator.getPercentFromNumber)(percentRestW, fittedSize.w);
  var percentCropperAreaH = (0, _percentCalculator.getPercentDiffNumberFromNumber)(hScale, fittedSize.h);
  var percentRestH = 100 - percentCropperAreaH;
  var hiddenAreaH = (0, _percentCalculator.getPercentFromNumber)(percentRestH, fittedSize.h);
  var x = hiddenAreaW / 2 - positionX;
  var y = hiddenAreaH / 2 - positionY;
  offset.x = x <= 0 ? 0 : x;
  offset.y = y <= 0 ? 0 : y;
  var srcPercentCropperAreaW = (0, _percentCalculator.getPercentDiffNumberFromNumber)(offset.x, fittedSize.w);
  var srcPercentCropperAreaH = (0, _percentCalculator.getPercentDiffNumberFromNumber)(offset.y, fittedSize.h);
  var offsetW = (0, _percentCalculator.getPercentFromNumber)(srcPercentCropperAreaW, srcSize.w);
  var offsetH = (0, _percentCalculator.getPercentFromNumber)(srcPercentCropperAreaH, srcSize.h);
  var sizeW = (0, _percentCalculator.getPercentFromNumber)(percentCropperAreaW, srcSize.w);
  var sizeH = (0, _percentCalculator.getPercentFromNumber)(percentCropperAreaH, srcSize.h);
  offset.x = offsetW;
  offset.y = offsetH;
  var cropData = {
    offset: offset,
    size: {
      width: sizeW,
      height: sizeH
    },
    displaySize: {
      width: cropSize.width,
      height: cropSize.height
    }
  };
  return new Promise(function (resolve, reject) {
    return _imageEditor["default"].cropImage(imageUri, cropData).then(resolve)["catch"](reject);
  });
};

var _default = ImageCropper;
exports["default"] = _default;