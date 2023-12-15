// authMiddleware.js
const jwt = require('jsonwebtoken');

const verifyToken = (token) => {
  return jwt.verify(token, 'votre-secret-jwt');
};

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  try {
    const decodedToken = verifyToken(token);
    req.userData = { userId: decodedToken.userId, email: decodedToken.email };
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Authentification échouée' });
  }
};

module.exports = authMiddleware;
