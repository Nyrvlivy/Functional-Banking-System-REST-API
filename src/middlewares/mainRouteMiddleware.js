module.exports = (req, res, next) => {
    console.log("Check: Main Route Middleware.");
    next();
  };