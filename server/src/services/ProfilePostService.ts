import express, { Request, Response, NextFunction, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { ResponseError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/ResponseError';
import { ResponseSuccess } from '../types/ResponseSuccess';

const prisma = new PrismaClient();

export const findProfilePosts = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const posts = await prisma.profilePost.findMany({
            where: {
              profile: {
                slug: req.params.profileSlug
              }
            },
          });
        if (!posts) {
            throw new NotFoundError("Posts not found");
        }
        next(new ResponseSuccess(posts, "Posts found"));
    } catch (error) {
        next(error as ResponseError);
    }
}

export const findProfilePost = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const post = await prisma.profilePost.findUnique({
            where: {
              slug: req.params.postSlug,
              profile: {
                slug: req.params.profileSlug
              }
            },
          });
        if (!post) {
            throw new NotFoundError("Post not found");
        }
        next(new ResponseSuccess(post, "Post found"));
    } catch (error) {
        next(error as ResponseError);
    }
}

export const createProfilePost = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const post = await prisma.profilePost.create({
            data: { ...req.body.data, profile: { connect: { slug: req.params.profileSlug } }},
        })
        if (!post) {
            throw new InternalServerError("Post not created");
        }
        next(new ResponseSuccess(post, "Post created", 201));
    } catch (error) {
        next(error as ResponseError);
    }
}

export const updateProfilePost = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const post = await prisma.profilePost.update({
            where: {
              slug: req.params.postSlug,
              profile: {
                slug: req.params.profileSlug
              }
            },
            data: { ...req.body.data, profile: { connect: { slug: req.params.profileSlug } }},
        })
        if (!post) {
            throw new InternalServerError("Post not updated");
        }
        next(new ResponseSuccess(post, "Post updated"));
    } catch (error) {
        next(error as ResponseError);
    }
}

export const deleteProfilePost = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const post = await prisma.profilePost.delete({
            where: {
              slug: req.params.postSlug,
              profile: {
                slug: req.params.profileSlug
              }
            },
        })
        if (!post) {
            throw new InternalServerError("Post not deleted");
        }
        next(new ResponseSuccess(post, "Post deleted"));
    } catch (error) {
        next(error as ResponseError);
    }
}
