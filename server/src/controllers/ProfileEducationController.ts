import express, { Request, Response, NextFunction, Router } from 'express';
import { findProfileEducations, findProfileEducation, createProfileEducation, updateProfileEducation, deleteProfileEducation } from '../services/ProfileEducationService';

const router: Router = express.Router();

router.get("/:profileSlug/educations", 
    findProfileEducations
);

router.get("/:profileSlug/educations/:educationSlug", 
    findProfileEducation
);

router.post("/:profileSlug/educations", 
    createProfileEducation
);

router.put("/:profileSlug/educations/:educationSlug", 
    updateProfileEducation
);

router.delete("/:profileSlug/educations/:educationSlug", 
    deleteProfileEducation
);

module.exports = router