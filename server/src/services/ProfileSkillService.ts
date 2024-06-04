import express, { Request, Response, NextFunction, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { ResponseError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/ResponseError';
import { ResponseSuccess } from '../types/ResponseSuccess';

const prisma = new PrismaClient();

export const findProfileSkills = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const skills = await prisma.profileSkill.findMany({
            where: {
              profile: {
                slug: req.params.profileSlug
              }
            },
          });
        if (!skills) {
            throw new NotFoundError("Skills not found");
        }
        next(new ResponseSuccess(skills, "Skills found"));
    } catch (error) {
        next(error as ResponseError);
    }
}

export const findProfileSkill = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const skill = await prisma.profileSkill.findUnique({
            where: {
              slug: req.params.skillSlug,
              profile: {
                slug: req.params.profileSlug
              }
            },
          });
        if (!skill) {
            throw new NotFoundError("Skill not found");
        }
        next(new ResponseSuccess(skill, "Skill found"));
    } catch (error) {
        next(error as ResponseError);
    }
}

export const createProfileSkill = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const skill = await prisma.profileSkill.create({
            data: { ...req.body.data, profile: { connect: { slug: req.params.profileSlug } }},
        })
        if (!skill) {
            throw new InternalServerError("Skill not created");
        }
        next(new ResponseSuccess(skill, "Skill created", 201));
    } catch (error) {
        next(error as ResponseError);
    }
}

export const updateProfileSkill = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const skill = await prisma.profileSkill.update({
            where: {
              slug: req.params.skillSlug,
              profile: {
                slug: req.params.profileSlug
              }
            },
            data: { ...req.body.data, profile: { connect: { slug: req.params.profileSlug } }},
        })
        if (!skill) {
            throw new InternalServerError("Skill not updated");
        }
        next(new ResponseSuccess(skill, "Skill updated"));
    } catch (error) {
        next(error as ResponseError);
    }
}

export const deleteProfileSkill = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const skill = await prisma.profileSkill.delete({
            where: {
              slug: req.params.skillSlug,
              profile: {
                slug: req.params.profileSlug
              }
            },
        })
        if (!skill) {
            throw new InternalServerError("Skill not deleted");
        }
        next(new ResponseSuccess(skill, "Skill deleted"));
    } catch (error) {
        next(error as ResponseError);
    }
}
