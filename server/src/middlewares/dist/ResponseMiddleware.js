"use strict";
exports.__esModule = true;
exports.handleNotFoundError = exports.handleError = exports.handleSuccess = void 0;
var ResponseError_1 = require("../types/ResponseError");
var ResponseSuccess_1 = require("../types/ResponseSuccess");
exports.handleSuccess = function (object, req, res, next) {
    if (object instanceof ResponseSuccess_1.ResponseSuccess) {
        res.status(object.status || 200).send({
            data: object.data,
            result: {
                message: object.message || "Success",
                type: "success",
                status: object.status || 200,
                instance: req.originalUrl
            }
        });
    }
    else {
        next(object);
    }
};
exports.handleError = function (object, req, res, next) {
    if (object instanceof ResponseError_1.ResponseError) {
        res.status(object.status || 500).send({
            result: {
                message: object.message || "Internal server error",
                type: "error",
                status: object.status || 500,
                stack: object.stack,
                instance: req.originalUrl
            }
        });
    }
    else {
        next(object);
    }
};
exports.handleNotFoundError = function (req, res, next) {
    res.status(404).send({
        result: {
            message: "Not found",
            type: "error",
            status: 404,
            instance: req.originalUrl
        }
    });
};
