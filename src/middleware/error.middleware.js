const errorMiddleware = (err, req, res, next) => {
  if (!err) return next();
  console.log('errrr', err);
  let status = err?.statusCode ? err?.statusCode : 500;
  let message = err?.message ? err?.message : 'Techinical Error';
  let stack = process.env.NODE_ENV !== 'production' ? err?.stack : undefined;

  return res.status(status).json({
    status,
    message,
    stack,
  });
};

module.exports = errorMiddleware;
