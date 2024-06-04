import express, { Request, Response, NextFunction, Router } from 'express';
import { findProfileProjects, findProfileProject, createProfileProject, updateProfileProject, deleteProfileProject } from '../services/ProfileProjectService';

const router: Router = express.Router();

router.get("/:profileSlug/projects", 
    findProfileProjects
);

router.get("/:profileSlug/projects/:projectSlug", 
    findProfileProject
);

router.post("/:profileSlug/projects", 
    createProfileProject
);

router.put("/:profileSlug/projects/:projectSlug", 
    updateProfileProject
);

router.delete("/:profileSlug/projects/:projectSlug", 
    deleteProfileProject
);

module.exports = router