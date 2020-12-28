import express from 'express';

export class LoggerMiddleware {

    public constructor() {
    }

    public log(request: express.Request, response: express.Response, next: any) {
        console.log(`${request.method} ${request.path}`);
        next();
    }
}
