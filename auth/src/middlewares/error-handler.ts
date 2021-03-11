import { Request, Response, NextFunction} from 'express';

import { RequestValidationError } from '../errors/request-validation-error';
import { DatabseConnectionError } from '../errors/database-connection-error';

export const errorHandler= (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof RequestValidationError) {
        return res.status(400).send({ errors: err.serializeErrors() });
    }

    if (err instanceof DatabseConnectionError) {
        return res.status(500).send({ errors: err.serializeErrors() });
    }

    res.status(400).send({
        errors: [{message: 'Something went wrong'}]
    });
};