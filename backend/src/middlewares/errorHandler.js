const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err);
  res.status(statusCode).json({
    message: err.isOperational ? err.message : "Internal Server Error",
  });
};

export default errorHandler;