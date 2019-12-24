const mongoose = require("mongoose");
const User = mongoose.model("User");
const Blog = mongoose.model("Blog");

module.exports = {
  createUser: () => {
    return new User({}).save();
  },
  deleteUser: user => {
    return User.findByIdAndRemove(user._id);
  },
  deleteBlogsByUser: user => {
    return Blog.deleteMany({ User_id: user._id });
  }
};
