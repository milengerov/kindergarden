function errorHandler(err, req, res, next) {
    console.error(err);
    let status = err.status || 500;
    let message = err.message || "Something went wrong!";

    res
        .status(status)
        .json({ message });
}

module.exports = errorHandler;