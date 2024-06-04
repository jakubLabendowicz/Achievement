"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

exports.__esModule = true;
exports.InternalServerError = exports.ConflictError = exports.NotFoundError = exports.ForbiddenError = exports.UnauthorizedError = exports.BadRequestError = exports.ResponseError = void 0;

var ResponseError =
/** @class */
function (_super) {
  __extends(ResponseError, _super);

  function ResponseError(message, status) {
    if (message === void 0) {
      message = "Internal server error";
    }

    if (status === void 0) {
      status = 500;
    }

    var _this = _super.call(this, message) || this;

    _this.status = status;
    return _this;
  }

  return ResponseError;
}(Error);

exports.ResponseError = ResponseError;

var BadRequestError =
/** @class */
function (_super) {
  __extends(BadRequestError, _super);

  function BadRequestError(message) {
    if (message === void 0) {
      message = "Bad request";
    }

    return _super.call(this, message, 400) || this;
  }

  return BadRequestError;
}(ResponseError);

exports.BadRequestError = BadRequestError;

var UnauthorizedError =
/** @class */
function (_super) {
  __extends(UnauthorizedError, _super);

  function UnauthorizedError(message) {
    if (message === void 0) {
      message = "Unauthorized";
    }

    return _super.call(this, message, 401) || this;
  }

  return UnauthorizedError;
}(ResponseError);

exports.UnauthorizedError = UnauthorizedError;

var ForbiddenError =
/** @class */
function (_super) {
  __extends(ForbiddenError, _super);

  function ForbiddenError(message) {
    if (message === void 0) {
      message = "Forbidden";
    }

    return _super.call(this, message, 403) || this;
  }

  return ForbiddenError;
}(ResponseError);

exports.ForbiddenError = ForbiddenError;

var NotFoundError =
/** @class */
function (_super) {
  __extends(NotFoundError, _super);

  function NotFoundError(message) {
    if (message === void 0) {
      message = "Not found";
    }

    return _super.call(this, message, 404) || this;
  }

  return NotFoundError;
}(ResponseError);

exports.NotFoundError = NotFoundError;

var ConflictError =
/** @class */
function (_super) {
  __extends(ConflictError, _super);

  function ConflictError(message) {
    if (message === void 0) {
      message = "Conflict";
    }

    return _super.call(this, message, 409) || this;
  }

  return ConflictError;
}(ResponseError);

exports.ConflictError = ConflictError;

var InternalServerError =
/** @class */
function (_super) {
  __extends(InternalServerError, _super);

  function InternalServerError(message) {
    if (message === void 0) {
      message = "Internal server error";
    }

    return _super.call(this, message, 500) || this;
  }

  return InternalServerError;
}(ResponseError);

exports.InternalServerError = InternalServerError;