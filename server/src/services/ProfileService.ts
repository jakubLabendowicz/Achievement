import express, { Request, Response, NextFunction, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { ResponseError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/ResponseError';
import { ResponseSuccess } from '../types/ResponseSuccess';

const prisma = new PrismaClient();

export const findProfiles = async (req: Request, res: Response, next:NextFunction) => {
  try {
      const profiles = await prisma.profile.findMany();
      if (!profiles) {
          throw new NotFoundError("Profiles not found");
      }
      next(new ResponseSuccess(profiles, "Profiles found"));
  } catch (error) {
      next(error as ResponseError);
  }
}

export const findProfile = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const profile = await prisma.profile.findUnique({
            where: {
              slug: req.params.profileSlug,
            },
            include: {
              skills: true,
              experiences: true,
              educations: true,
              certifications: true,
              projects: true,
              posts: true
            }
        });
        if (!profile) {
            throw new NotFoundError("Profile not found");
        }
        next(new ResponseSuccess(profile, "Profile found"));
    } catch (error) {
        next(error as ResponseError);
    }
}


export const createProfile = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const profile = await prisma.profile.create({
            data: { ...req.body.data },
        })
        if (!profile) {
            throw new InternalServerError("Profile not created");
        }
        next(new ResponseSuccess(profile, "Profile created", 201));
    } catch (error) {
        next(error as ResponseError);
    }
}


export const updateProfile = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const profile = await prisma.profile.update({
            where: {
              slug: req.params.profileSlug,
            },  
            data: { ...req.body.data },
        })
        if (!profile) {
            throw new InternalServerError("Profile not updated");
        }
        next(new ResponseSuccess(profile, "Profile updated"));
    } catch (error) {
        next(error as ResponseError);
    }
}


export const deleteProfile = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const profile = await prisma.profile.delete({
            where: {
              slug: req.params.profileSlug,
            },
        })
        if (!profile) {
            throw new InternalServerError("Profile not deleted");
        }
        next(new ResponseSuccess(profile, "Profile deleted"));
    } catch (error) {
        next(error as ResponseError);
    }
}