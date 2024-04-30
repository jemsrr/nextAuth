import connection from "@/database/config";
import User from "@/models/user";
import bcryptjs from "bcryptjs";

connection();
export const POST = async (NextRequest) => {
  try {
    const body = await NextRequest.json();
    const { name, username, password } = body;
    if (!name || !username || !password) {
      return new Response("missing data", { status: 401 });
    }
    const user = await User.findOne({ username });
    if (user) {
      return new Response("Username already exist", { status: 400 });
    }

    const salt = await bcryptjs.genSalt(12);
    const hashePassword = await bcryptjs.hash(password, salt);

    const newUser = new User({ name, username, password: hashePassword });
    await newUser.save();
    return new Response("user saved successfully", { status: 200 });
  } catch (error) {
    console.log(error);
  }
};
