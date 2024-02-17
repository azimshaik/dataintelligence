import { connectDB } from "@/utils/db";
import User from "@/models/userModel";
import bcrypt from "bcrypt";
import { isEmail } from "validator";
import jwt from "jsonwebtoken";
export const POST = async (req) => {
  const { email, password } = await req.json();
  if (email.trim().length === 0) {
    return new Response(JSON.stringify({ message: "Email is required" }), {
      status: 500,
    });
  }
  if (!isEmail(email)) {
    return new Response(JSON.stringify({ message: "Email is invalid" }), {
      status: 500,
    });
  }
  try {
    await connectDB();
    const user = await User.findOne({ email }).exec();

    if (user) {
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        const token = jwt.sign(
          { _id: user._id, name: user.name, email },
          process.env.JWT_SECRET,
          { expiresIn: "7d" }
        );

         
        return new Response(
          JSON.stringify({ token, message: "successfully logged in" }),
          { status: 200 }
        );
      }
    } else {
      return new Response(JSON.stringify({ message: "invalid credentials" }), {
        status: 401,
      });
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "internal server error" }), {
      status: 500,
    });
  }
};
