/* eslint-disable consistent-return */
/* eslint-disable no-console */
const express = require('express');

const router = express.Router();

// Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// User model
const User = require('../../models/User');

router.post('/register', (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) return res.status(400).json({ email: 'Email already exists' });

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    newUser
      .save()
      // eslint-disable-next-line no-shadow
      .then((user) => res.json(user))
      .catch((err) => console.log(err));
  });
});

router.post('/login', (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { email, password } = req.body;

  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: 'Email not found' });
    }

    // Check password
    if (password === user.password) {
      return res.status(200).json({ success: 'success' });
    }

    return res
      .status(400)
      .json({ passwordincorrect: 'Password incorrect' });
  });
});

module.exports = router;
