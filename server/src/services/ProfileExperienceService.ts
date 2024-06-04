import express, { Request, Response, NextFunction, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { ResponseError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/ResponseError';
import { ResponseSuccess } from '../types/ResponseSuccess';

const prisma = new PrismaClient();

export const findProfileExperiences = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const experiences = await prisma.profileExperience.findMany({
            where: {
              profile: {
                slug: req.params.profileSlug
              }
            },
          });
        if (!experiences) {
            throw new NotFoundError("Experiences not found");
        }
        next(new ResponseSuccess(experiences, "Experiences found"));
    } catch (error) {
        next(error as ResponseError);
    }
}

export const findProfileExperience = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const experience = await prisma.profileExperience.findUnique({
            where: {
              slug: req.params.experienceSlug,
              profile: {
                slug: req.params.profileSlug
              }
            },
          });
        if (!experience) {
            throw new NotFoundError("Experience not found");
        }
        next(new ResponseSuccess(experience, "Experience found"));
    } catch (error) {
        next(error as ResponseError);
    }
}

export const createProfileExperience = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const experience = await prisma.profileExperience.create({
            data: { ...req.body.data, profile: { connect: { slug: req.params.profileSlug } }},
        })
        if (!experience) {
            throw new InternalServerError("Experience not created");
        }
        next(new ResponseSuccess(experience, "Experience created", 201));
    } catch (error) {
        next(error as ResponseError);
    }
}

export const updateProfileExperience = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const experience = await prisma.profileExperience.update({
            where: {
              slug: req.params.experienceSlug,
              profile: {
                slug: req.params.profileSlug
              }
            },
            data: { ...req.body.data, profile: { connect: { slug: req.params.profileSlug } }},
        })
        if (!experience) {
            throw new InternalServerError("Experience not updated");
        }
        next(new ResponseSuccess(experience, "Experience updated"));
    } catch (error) {
        next(error as ResponseError);
    }
}

export const deleteProfileExperience = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const experience = await prisma.profileExperience.delete({
            where: {
              slug: req.params.experienceSlug,
              profile: {
                slug: req.params.profileSlug
              }
            },
        })
        if (!experience) {
            throw new InternalServerError("Experience not deleted");
        }
        next(new ResponseSuccess(experience, "Experience deleted"));
    } catch (error) {
        next(error as ResponseError);
    }
}
