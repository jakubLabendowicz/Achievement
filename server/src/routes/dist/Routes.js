"use strict";
exports.__esModule = true;
var express_1 = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');
var useragent = require('express-useragent');
var profileController = require("../controllers/ProfileController");
var profileSkillController = require("../controllers/ProfileSkillController");
var profileExperienceController = require("../controllers/ProfileExperienceController");
var profileEducationController = require("../controllers/ProfileEducationController");
var profileCertificateController = require("../controllers/ProfileCertificateController");
var profileProjectController = require("../controllers/ProfileProjectController");
var profilePostController = require("../controllers/ProfilePostController");
var _a = require("../middlewares/ResponseMiddleware"), handleSuccess = _a.handleSuccess, handleError = _a.handleError, handleNotFoundError = _a.handleNotFoundError;
var routes = express_1.Router()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(cors())
    .use(useragent.express())
    .use("/profiles", profileController, profileSkillController, profileExperienceController, profileEducationController, profileCertificateController, profileProjectController, profilePostController)
    .use(handleSuccess)
    .use(handleError)
    .use("*", handleNotFoundError);
exports["default"] = routes;
