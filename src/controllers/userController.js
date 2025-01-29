const User = require('../models/userModel');

// Get All Users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
    }
};

// Create a New User
exports.createUser = async (req, res) => {
    try {
        const { fullname, email } = req.body;
        if (!fullname || !email) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const newUser = new User({ fullname, email });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user' });
    }
};
