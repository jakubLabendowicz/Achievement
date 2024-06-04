import express, { Request, Response, NextFunction, Router } from 'express';
import { findProfileCertificates, findProfileCertificate, createProfileCertificate, updateProfileCertificate, deleteProfileCertificate } from '../services/ProfileCertificateService';

const router: Router = express.Router();

router.get("/:profileSlug/certificates", 
    findProfileCertificates
);

router.get("/:profileSlug/certificates/:certificateSlug", 
    findProfileCertificate
);

router.post("/:profileSlug/certificates", 
    createProfileCertificate
);

router.put("/:profileSlug/certificates/:certificateSlug", 
    updateProfileCertificate
);

router.delete("/:profileSlug/certificates/:certificateSlug", 
    deleteProfileCertificate
);

module.exports = router