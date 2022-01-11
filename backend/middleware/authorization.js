const authorization = (req, res, next) => {
  if (req.token.role === "ADMIN") {
    next();
  } else {
    res.status(403).json({
      success: false,
      message: "Unauthorized",
    });
  }
};

module.exports = authorization;
