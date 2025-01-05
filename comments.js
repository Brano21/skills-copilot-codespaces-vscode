// Create web server
const express = require('express');
// Create a router
const router = express.Router();
// Create a validation function
const { check, validationResult } = require('express-validator');
// Create a comment model
const Comment = require('../models/Comment');
// Create a post model
const Post = require('../models/Post');
// Create a user model
const User = require('../models/User');
// Create a auth middleware
const auth = require('../middleware/auth');

// Create a comment