import express, { Request, Response, NextFunction, Router } from 'express';
import { findProfiles, findProfile, createProfile, updateProfile, deleteProfile } from '../services/ProfileService';

const router: Router = express.Router();

router.get("/", 
    findProfiles
);

router.get("/:profileSlug", 
    findProfile
);

router.post("/", 
    createProfile
);

router.put("/", 
    updateProfile
);

router.delete("/", 
    deleteProfile
);

module.exports = router