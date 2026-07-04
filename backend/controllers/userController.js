import User from '../models/User.js';

/**
 * @desc    Get all users
 * @route   GET /api/users
 * @access  Public (Phase 1 - no auth yet)
 */
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: users.length, data: users });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get single user by ID
 * @route   GET /api/users/:id
 * @access  Public (Phase 1 - no auth yet)
 */
export const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404);
      throw new Error('User not found');
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Create a new user (placeholder — will move to auth/register later)
 * @route   POST /api/users
 * @access  Public (Phase 1 - no auth yet)
 */
export const createUser = async (req, res, next) => {
  try {
    const { name, email, bio, skillsOffered, skillsWanted, location } = req.body;

    if (!name || !email) {
      res.status(400);
      throw new Error('Name and email are required');
    }

    const user = await User.create({
      name,
      email,
      bio,
      skillsOffered,
      skillsWanted,
      location,
    });

    res.status(201).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};