export class ResponseError extends Error {
    status:number;

    constructor(message:string = "Internal server error", status:number = 500) {
        super(message);
        this.status = status;
    }
}

export class BadRequestError extends ResponseError {
    constructor(message:string = "Bad request") {
        super(message, 400);
    }
}

export class UnauthorizedError extends ResponseError {
    constructor(message:string = "Unauthorized") {
        super(message, 401);
    }
}

export class ForbiddenError extends ResponseError {
    constructor(message:string = "Forbidden") {
        super(message, 403);
    }
}

export class NotFoundError extends ResponseError {
    constructor(message:string = "Not found") {
        super(message, 404);
    }
}

export class ConflictError extends ResponseError {
    constructor(message:string = "Conflict") {
        super(message, 409);
    }
}

export class InternalServerError extends ResponseError {
    constructor(message:string = "Internal server error") {
        super(message, 500);
    }
}