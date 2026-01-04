import { generateToken } from "./jwt.js";

const sendAuthResponse = (user, statusCode, res) => {
  const token = generateToken({
    userId: user._id,
    role: user.role,
  });

  res.status(statusCode).json({
    success: true,
    token,
    user: {
      id: user._id,
      email: user.email,
      role: user.role,
    },
  });
};

export default sendAuthResponse;
