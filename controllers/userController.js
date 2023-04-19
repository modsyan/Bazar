const express = require('express');
const userModel = require('../models/userModel');

exports.getAllUsers = (req, res, next) => {

  const users = userModel.find();
  res.status(200).json({
    success: true,
    data: {
      length: users.length,
      users: users,
    }
  });
};