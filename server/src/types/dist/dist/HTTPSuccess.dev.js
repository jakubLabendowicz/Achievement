"use strict";

exports.__esModule = true;
exports.ResponseSuccess = void 0;

var ResponseSuccess =
/** @class */
function () {
  function ResponseSuccess(data, message, status) {
    if (message === void 0) {
      message = "Success";
    }

    if (status === void 0) {
      status = 200;
    }

    this.data = data;
    this.message = message;
    this.status = status;
  }

  return ResponseSuccess;
}();

exports.ResponseSuccess = ResponseSuccess;