import express, { Request, Response, NextFunction, Router } from 'express';
import { findProfileSkills, findProfileSkill, createProfileSkill, updateProfileSkill, deleteProfileSkill } from '../services/ProfileSkillService';

const router: Router = express.Router();

router.get("/:profileSlug/skills", 
    findProfileSkills
);

router.get("/:profileSlug/skills/:skillSlug", 
    findProfileSkill
);

router.post("/:profileSlug/skills", 
    createProfileSkill
);

router.put("/:profileSlug/skills/:skillSlug", 
    updateProfileSkill
);

router.delete("/:profileSlug/skills/:skillSlug", 
    deleteProfileSkill
);

module.exports = router