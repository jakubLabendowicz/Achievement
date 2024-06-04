import express, { Request, Response, NextFunction, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { ResponseError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/ResponseError';
import { ResponseSuccess } from '../types/ResponseSuccess';

const prisma = new PrismaClient();

export const findProfileProjects = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const projects = await prisma.profileProject.findMany({
            where: {
              profile: {
                slug: req.params.profileSlug
              }
            },
          });
        if (!projects) {
            throw new NotFoundError("Projects not found");
        }
        next(new ResponseSuccess(projects, "Projects found"));
    } catch (error) {
        next(error as ResponseError);
    }
}

export const findProfileProject = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const project = await prisma.profileProject.findUnique({
            where: {
              slug: req.params.projectSlug,
              profile: {
                slug: req.params.profileSlug
              }
            },
          });
        if (!project) {
            throw new NotFoundError("Project not found");
        }
        next(new ResponseSuccess(project, "Project found"));
    } catch (error) {
        next(error as ResponseError);
    }
}

export const createProfileProject = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const project = await prisma.profileProject.create({
            data: { ...req.body.data, profile: { connect: { slug: req.params.profileSlug } }},
        })
        if (!project) {
            throw new InternalServerError("Project not created");
        }
        next(new ResponseSuccess(project, "Project created", 201));
    } catch (error) {
        next(error as ResponseError);
    }
}

export const updateProfileProject = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const project = await prisma.profileProject.update({
            where: {
              slug: req.params.projectSlug,
              profile: {
                slug: req.params.profileSlug
              }
            },
            data: { ...req.body.data, profile: { connect: { slug: req.params.profileSlug } }},
        })
        if (!project) {
            throw new InternalServerError("Project not updated");
        }
        next(new ResponseSuccess(project, "Project updated"));
    } catch (error) {
        next(error as ResponseError);
    }
}

export const deleteProfileProject = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const project = await prisma.profileProject.delete({
            where: {
              slug: req.params.projectSlug,
              profile: {
                slug: req.params.profileSlug
              }
            },
        })
        if (!project) {
            throw new InternalServerError("Project not deleted");
        }
        next(new ResponseSuccess(project, "Project deleted"));
    } catch (error) {
        next(error as ResponseError);
    }
}
