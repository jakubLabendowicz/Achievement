import express, { Request, Response, NextFunction, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { ResponseError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/ResponseError';
import { ResponseSuccess } from '../types/ResponseSuccess';

const prisma = new PrismaClient();

export const findProfileEducations = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const educations = await prisma.profileEducation.findMany({
            where: {
              profile: {
                slug: req.params.profileSlug
              }
            },
          });
        if (!educations) {
            throw new NotFoundError("Educations not found");
        }
        next(new ResponseSuccess(educations, "Educations found"));
    } catch (error) {
        next(error as ResponseError);
    }
}

export const findProfileEducation = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const education = await prisma.profileEducation.findUnique({
            where: {
              slug: req.params.educationSlug,
              profile: {
                slug: req.params.profileSlug
              }
            },
          });
        if (!education) {
            throw new NotFoundError("Education not found");
        }
        next(new ResponseSuccess(education, "Education found"));
    } catch (error) {
        next(error as ResponseError);
    }
}

export const createProfileEducation = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const education = await prisma.profileEducation.create({
            data: { ...req.body.data, profile: { connect: { slug: req.params.profileSlug } }},
        })
        if (!education) {
            throw new InternalServerError("Education not created");
        }
        next(new ResponseSuccess(education, "Education created", 201));
    } catch (error) {
        next(error as ResponseError);
    }
}

export const updateProfileEducation = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const education = await prisma.profileEducation.update({
            where: {
              slug: req.params.educationSlug,
              profile: {
                slug: req.params.profileSlug
              }
            },
            data: { ...req.body.data, profile: { connect: { slug: req.params.profileSlug } }},
        })
        if (!education) {
            throw new InternalServerError("Education not updated");
        }
        next(new ResponseSuccess(education, "Education updated"));
    } catch (error) {
        next(error as ResponseError);
    }
}

export const deleteProfileEducation = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const education = await prisma.profileEducation.delete({
            where: {
              slug: req.params.educationSlug,
              profile: {
                slug: req.params.profileSlug
              }
            },
        })
        if (!education) {
            throw new InternalServerError("Education not deleted");
        }
        next(new ResponseSuccess(education, "Education deleted"));
    } catch (error) {
        next(error as ResponseError);
    }
}
