"use strict";

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

exports.__esModule = true;
exports.deleteProfileSkill = exports.updateProfileSkill = exports.createProfileSkill = exports.findProfileSkill = exports.findProfileSkills = void 0;

var client_1 = require("@prisma/client");

var ResponseError_1 = require("../types/ResponseError");

var ResponseSuccess_1 = require("../types/ResponseSuccess");

var prisma = new client_1.PrismaClient();

exports.findProfileSkills = function (req, res, next) {
  return __awaiter(void 0, void 0, void 0, function () {
    var skills, error_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          return [4
          /*yield*/
          , prisma.profileSkill.findMany({
            where: {
              profile: {
                slug: req.params.profileSlug
              }
            }
          })];

        case 1:
          skills = _a.sent();

          if (!skills) {
            throw new ResponseError_1.NotFoundError("Skills not found");
          }

          next(new ResponseSuccess_1.ResponseSuccess(skills, "Skills found"));
          return [3
          /*break*/
          , 3];

        case 2:
          error_1 = _a.sent();
          next(error_1);
          return [3
          /*break*/
          , 3];

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
};

exports.findProfileSkill = function (req, res, next) {
  return __awaiter(void 0, void 0, void 0, function () {
    var skill, error_2;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          return [4
          /*yield*/
          , prisma.profileSkill.findUnique({
            where: {
              slug: req.params.skillSlug,
              profile: {
                slug: req.params.profileSlug
              }
            }
          })];

        case 1:
          skill = _a.sent();

          if (!skill) {
            throw new ResponseError_1.NotFoundError("Skill not found");
          }

          next(new ResponseSuccess_1.ResponseSuccess(skill, "Skill found"));
          return [3
          /*break*/
          , 3];

        case 2:
          error_2 = _a.sent();
          next(error_2);
          return [3
          /*break*/
          , 3];

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
};

exports.createProfileSkill = function (req, res, next) {
  return __awaiter(void 0, void 0, void 0, function () {
    var skill, error_3;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          return [4
          /*yield*/
          , prisma.profileSkill.create({
            data: __assign(__assign({}, req.body.data), {
              profile: {
                connect: {
                  slug: req.params.profileSlug
                }
              }
            })
          })];

        case 1:
          skill = _a.sent();

          if (!skill) {
            throw new ResponseError_1.InternalServerError("Skill not created");
          }

          next(new ResponseSuccess_1.ResponseSuccess(skill, "Skill created", 201));
          return [3
          /*break*/
          , 3];

        case 2:
          error_3 = _a.sent();
          next(error_3);
          return [3
          /*break*/
          , 3];

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
};

exports.updateProfileSkill = function (req, res, next) {
  return __awaiter(void 0, void 0, void 0, function () {
    var skill, error_4;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          return [4
          /*yield*/
          , prisma.profileSkill.update({
            where: {
              slug: req.params.skillSlug,
              profile: {
                slug: req.params.profileSlug
              }
            },
            data: __assign(__assign({}, req.body.data), {
              profile: {
                connect: {
                  slug: req.params.profileSlug
                }
              }
            })
          })];

        case 1:
          skill = _a.sent();

          if (!skill) {
            throw new ResponseError_1.InternalServerError("Skill not updated");
          }

          next(new ResponseSuccess_1.ResponseSuccess(skill, "Skill updated"));
          return [3
          /*break*/
          , 3];

        case 2:
          error_4 = _a.sent();
          next(error_4);
          return [3
          /*break*/
          , 3];

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
};

exports.deleteProfileSkill = function (req, res, next) {
  return __awaiter(void 0, void 0, void 0, function () {
    var skill, error_5;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          return [4
          /*yield*/
          , prisma.profileSkill["delete"]({
            where: {
              slug: req.params.skillSlug,
              profile: {
                slug: req.params.profileSlug
              }
            }
          })];

        case 1:
          skill = _a.sent();

          if (!skill) {
            throw new ResponseError_1.InternalServerError("Skill not deleted");
          }

          next(new ResponseSuccess_1.ResponseSuccess(skill, "Skill deleted"));
          return [3
          /*break*/
          , 3];

        case 2:
          error_5 = _a.sent();
          next(error_5);
          return [3
          /*break*/
          , 3];

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
};