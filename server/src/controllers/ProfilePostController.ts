import express, { Request, Response, NextFunction, Router } from 'express';
import { findProfilePosts, findProfilePost, createProfilePost, updateProfilePost, deleteProfilePost } from '../services/ProfilePostService';

const router: Router = express.Router();

router.get("/:profileSlug/posts", 
    findProfilePosts
);

router.get("/:profileSlug/posts/:postSlug", 
    findProfilePost
);

router.post("/:profileSlug/posts", 
    createProfilePost
);

router.put("/:profileSlug/posts/:postSlug", 
    updateProfilePost
);

router.delete("/:profileSlug/posts/:postSlug", 
    deleteProfilePost
);

module.exports = router