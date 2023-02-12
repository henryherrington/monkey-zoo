import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const GetUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["id", "username"],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

const SignUp = async (req, res) => {
  const { username, password, confPassword } = req.body;
  if (password !== confPassword)
    return res.status(400).json({ msg: "passwords don't match!" });

  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await Users.create({
      username: username,
      email: email,
      password: hashPassword,
    });
    res.json({ msg: "welcome to the zoo :)" });
  } catch (error) {
    console.log(error);
  }
};

const Login = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        username: req.body.username,
      },
    });

    const match = await bcrypt.compare(req.body.password, user[0].password);

    if (!match) return res.status(400).json({ msg: "incorrect password" });

    const userId = user[0].id;
    const username = user[0].username;
    const accessToken = jwt.sign(
      { userId, username },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: 15,
      }
    );
    const refreshToken = jwt.sign(
      { userId, username },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: 86400,
      }
    );
    await Users.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: "username not recognized by the zoo" });
  }
};

const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await Users.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await Users.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};

export default { GetUsers, SignUp, Login, Logout };
