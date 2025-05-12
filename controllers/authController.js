import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { users } from '../models/User.js';

const createTokens = (user) => {
  const accessToken = jwt.sign({ id: user.id, role: user.role }, process.env.ACCESS_SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ id: user.id }, process.env.REFRESH_SECRET, { expiresIn: '7d' });
  return { accessToken, refreshToken };
};

let userId = 1;

export const register = async (req, res) => {
  if(!req.body?.name) {
    const err = new Error('Name field is required');
    err.status = 400;
    throw err;
  }
  if(!req.body?.email) {
    const err = new Error('Email field is required');
    err.status = 400;
    throw err;
  }
  if(!req.body?.password) {
    const err = new Error('Password field is required');
    err.status = 400;
    throw err;
  }
  
  const { name, email, password } = req.body;
  const role = req.body.role || 'User';

  const allowedRoles = ['User', 'Admin', 'Manager'];
  const userRole = allowedRoles.includes(role) ? role : 'User';

  if (users.find(u => u.email === email)) return res.status(400).json({ message: 'Email already exists' });
  const hashed = await bcrypt.hash(password, 10);
  const user = { id: userId++, name, email, password: hashed, role: userRole, refreshToken: null };
  users.push(user);
  res.status(201).json({ message: 'User registered' });
};

export const login = async (req, res) => {
  if(!req.body?.email) {
    const err = new Error('Email field is required');
    err.status = 400;
    throw err;
  }
  if(!req.body?.password) {
    const err = new Error('Password field is required');
    err.status = 400;
    throw err;
  }
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user || !await bcrypt.compare(password, user.password)) return res.status(401).json({ message: 'Invalid credentials' });
  const tokens = createTokens(user);
  user.refreshToken = tokens.refreshToken;
  res.json(tokens);
};

export const refresh = async (req, res) => {
  if(!req.body?.token) {
    const err = new Error('Token field is required');
    err.status = 400;
    throw err;
  }

  const { token } = req.body;
  if (!token) return res.sendStatus(401);
  try {
    const decoded = jwt.verify(token, process.env.REFRESH_SECRET);
    const user = users.find(u => u.id === decoded.id && u.refreshToken === token);
    if (!user) return res.sendStatus(403);
    const tokens = createTokens(user);
    user.refreshToken = tokens.refreshToken;
    res.json(tokens);
  } catch {
    res.sendStatus(403);
  }
};

export const logout = async (req, res) => {
  const { token } = req.body;
  const user = users.find(u => u.refreshToken === token);
  if (user) user.refreshToken = null;
  res.sendStatus(204);
};