import userModle from "../models/userModle.js";
import jwt from "jsonwebtoken";
import bycrypt from "bcrypt";
import validator from "validator";

// logim user

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModle.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User doesn't exist!" });
    }

    const isMatch = await bycrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({
        success: false,
        message: "Incorrect Username or Password!",
      });
    }

    const token = createToken(user._id);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// register user

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // checking if user already exists
    const userExist = await userModle.findOne({ email });
    if (userExist) {
      return res.json({ success: false, message: "User already exists!" });
    }

    // validating email and password

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email!",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be more than 8 characters!",
      });
    }

    // hashing password

    const salt = await bycrypt.genSalt(10);

    const hashedPassword = await bycrypt.hash(password, salt);

    const newUser = new userModle({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { loginUser, registerUser };
