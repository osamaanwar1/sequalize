export  function errorHandler(err, req, res, next) {
    // لو الرد اتبعت، سلّمه لـ error handler الافتراضي بتاع Express
    if (res.headersSent) {
        return next(err);
    }

    let status = Number.isInteger(err.status) ? err.status : 500;
    let message = err.message || 'Unexpected error';
    let errors;

    if (err.name === 'SequelizeValidationError') {
        status = 400;
        message = 'Validation failed';
        errors = err.errors.map(function (e) {
            return { field: e.path, message: e.message };
        });
    }

    if (err.name === 'SequelizeUniqueConstraintError') {
        status = 409;
        message = 'Value already exists';
        errors = err.errors.map(function (e) {
            return { field: e.path, message: e.message };
        });
    }

    if (err.name === 'SequelizeForeignKeyConstraintError') {
        status = 400;
        message = 'Related record does not exist';
    }

    if (err.type === 'entity.parse.failed') {
        status = 400;
        message = 'Invalid JSON body';
    }

    if (status >= 500) {
        console.error(err);
    }

    res.status(status).json({
        success: false,
        message,
        ...(errors && { errors }),
    });
}