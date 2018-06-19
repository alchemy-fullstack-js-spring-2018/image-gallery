// eslint-disable-next-line
module.exports = function createErrorHandler(log = console.log) {

    // eslint-disable-next-line
    return (err, req, res, next) => {
        // eslint-disable-next-line
        let showLog = process.env.NODE_ENV !== 'production';
        let code = 500;
        let error = 'Internal Server Error';

        if(err.code && err.code !== 'ENOENT') {
            code = err.code;
            error = err.error;
        }
        else if(err.name === 'CastError') {
            code = 400;
            error = err.message;
        }
        else if(err.name === 'ValidationError') {
            code = 400;
            error = Object.values(err.errors).map(e => e.message);
        }
        else {
            showLog = true;
        }

        log(err);

        res.status(code).json({ error });
    };
};
