import express, { Request, Response, NextFunction, Router } from 'express';
import { ResponseError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/ResponseError';
import { ResponseSuccess } from '../types/ResponseSuccess';

export const handleSuccess = (object: ResponseSuccess, req: Request, res: Response, next: NextFunction) => {
    if (object instanceof ResponseSuccess) {
        res.status(object.status || 200).send(
            {
                data: object.data,
                result: { 
                    message: object.message || "Success", 
                    type: "success",
                    status: object.status || 200,
                    instance: req.originalUrl 
                } 
            }
        ) 
    } else {
        next(object)
    }
}

export const handleError = (object: ResponseError, req: Request, res: Response, next: NextFunction) => {
    if (object instanceof ResponseError) {
        res.status(object.status || 500).send(
            { 
                result: { 
                    message: object.message || "Internal server error", 
                    type: "error",
                    status: object.status || 500,
                    stack: object.stack,
                    instance: req.originalUrl 
                } 
            }
        )
    } else {
        next(object)
    }
}

export const handleNotFoundError = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).send(
        { 
            result: { 
                message: "Not found", 
                type: "error",
                status: 404, 
                instance: req.originalUrl 
            } 
        }
    )
}