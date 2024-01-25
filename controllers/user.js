import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  const keyword = req.query.keyword;
  console.log(keyword);

  res.json({
    success: true,
    users: users,
  });
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({
    name: name,
    email: email,
    password: password,
  });

  res.status(201).cookie("tempi", "lol").json({
    success: true,
    message: "Registered!",
  });
};

export const special = (req, res) => {
  res.json({
    status: true,
    message: "Completed ---jus jokin",
  });
};

export const getUserDetails = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  console.log(req.params);

  res.json({
    status: true,
    user: user,
  });
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  console.log(req.params);

  res.json({
    status: true,
    message: "Updated",
  });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  console.log(req.params);

  res.json({
    status: true,
    message: "Deleted",
  });
};
