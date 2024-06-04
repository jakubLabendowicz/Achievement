import express, { Request, Response, NextFunction, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { ResponseError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/ResponseError';
import { ResponseSuccess } from '../types/ResponseSuccess';

const prisma = new PrismaClient();

export const findProfileCertificates = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const certificates = await prisma.profileCertificate.findMany({
            where: {
              profile: {
                slug: req.params.profileSlug
              }
            },
          });
        if (!certificates) {
            throw new NotFoundError("Certificates not found");
        }
        next(new ResponseSuccess(certificates, "Certificates found"));
    } catch (error) {
        next(error as ResponseError);
    }
}

export const findProfileCertificate = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const certificate = await prisma.profileCertificate.findUnique({
            where: {
              slug: req.params.certificateSlug,
              profile: {
                slug: req.params.profileSlug
              }
            },
          });
        if (!certificate) {
            throw new NotFoundError("Certificate not found");
        }
        next(new ResponseSuccess(certificate, "Certificate found"));
    } catch (error) {
        next(error as ResponseError);
    }
}

export const createProfileCertificate = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const certificate = await prisma.profileCertificate.create({
            data: { ...req.body.data, profile: { connect: { slug: req.params.profileSlug } }},
        })
        if (!certificate) {
            throw new InternalServerError("Certificate not created");
        }
        next(new ResponseSuccess(certificate, "Certificate created", 201));
    } catch (error) {
        next(error as ResponseError);
    }
}

export const updateProfileCertificate = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const certificate = await prisma.profileCertificate.update({
            where: {
              slug: req.params.certificateSlug,
              profile: {
                slug: req.params.profileSlug
              }
            },
            data: { ...req.body.data, profile: { connect: { slug: req.params.profileSlug } }},
        })
        if (!certificate) {
            throw new InternalServerError("Certificate not updated");
        }
        next(new ResponseSuccess(certificate, "Certificate updated"));
    } catch (error) {
        next(error as ResponseError);
    }
}

export const deleteProfileCertificate = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const certificate = await prisma.profileCertificate.delete({
            where: {
              slug: req.params.certificateSlug,
              profile: {
                slug: req.params.profileSlug
              }
            },
        })
        if (!certificate) {
            throw new InternalServerError("Certificate not deleted");
        }
        next(new ResponseSuccess(certificate, "Certificate deleted"));
    } catch (error) {
        next(error as ResponseError);
    }
}
