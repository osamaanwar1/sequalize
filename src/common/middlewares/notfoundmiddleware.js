import  createError  from '../utils/createError.js';

export function notFound(req, res, next) {
    next(createError(`Route ${req.method} ${req.originalUrl} not found`, 404));
}
