import { Router } from 'express';
const bodyParser = require("body-parser");
const cors = require('cors');
const useragent = require('express-useragent');


const profileController = require("../controllers/ProfileController");
const profileSkillController = require("../controllers/ProfileSkillController");
const profileExperienceController = require("../controllers/ProfileExperienceController");
const profileEducationController = require("../controllers/ProfileEducationController");
const profileCertificateController = require("../controllers/ProfileCertificateController");
const profileProjectController = require("../controllers/ProfileProjectController");
const profilePostController = require("../controllers/ProfilePostController");
const {handleSuccess, handleError, handleNotFoundError } = require("../middlewares/ResponseMiddleware");

const routes = Router()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(cors())
    .use(useragent.express())
    .use("/profiles", profileController, profileSkillController, profileExperienceController, profileEducationController, profileCertificateController, profileProjectController, profilePostController)
    .use(handleSuccess)
    .use(handleError)
    .use("*", handleNotFoundError);
  
export default routes;