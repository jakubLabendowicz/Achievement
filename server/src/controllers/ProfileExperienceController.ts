import express, { Request, Response, NextFunction, Router } from 'express';
import { findProfileExperiences, findProfileExperience, createProfileExperience, updateProfileExperience, deleteProfileExperience } from '../services/ProfileExperienceService';

const router: Router = express.Router();

router.get("/:profileSlug/experiences", 
    findProfileExperiences
);

router.get("/:profileSlug/experiences/:experienceSlug", 
    findProfileExperience
);

router.post("/:profileSlug/experiences", 
    createProfileExperience
);

router.put("/:profileSlug/experiences/:experienceSlug", 
    updateProfileExperience
);

router.delete("/:profileSlug/experiences/:experienceSlug", 
    deleteProfileExperience
);

module.exports = router