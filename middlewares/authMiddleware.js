import jwt from 'jsonwebtoken';

export const authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    const err = new Error('Unauthorized');
    err.status = 401;
    throw err;
  }
  jwt.verify(token, process.env.ACCESS_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

export const authorize = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    const err = new Error('Forbidden');
    err.status = 403;
    throw err;
  }
  next();
};
