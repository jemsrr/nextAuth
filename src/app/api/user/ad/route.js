import connection from "@/database/config";
import User from "@/models/user";
import bcryptjs from "bcryptjs";

connection();
export const POST = async (NextRequest) => {
  console.log(NextRequest)
  return NextResponse
  // try {
  //   const body = await NextRequest.json();
  //   const { username, password } = body;
  //   if (!username || !password) {
  //     return new Response("missing data", { status: 401 });
  //   }
  //   const user = await User.findOne({ username });
  //   if (!user) {
  //     return new Response("Username dose not exist", { status: 400 });
  //   }

  //   const validPassword = await bcryptjs.compare(password, user.password);
  //   if (!validPassword) {
  //     return new Response("Incorrect password", { status: 400 });
  //   }
  //   const tokenData = {
  //     username: user.username,
  //     id: user._id,
  //   };
  //   const token = jwt.sign(tokenData, process.env.JWT_SECRETKEY, {
  //     expiresIn: "1d",
  //   });
  //   const response = NextResponse.json({ message: "login successfull" });
  //   response.cookies.set("token", token, { httpOnly: true });
  //   return response;
  // } catch (error) {
  //   console.log(error);
  //   return new Response("something went wrong", { status: 500 });
  // }
};
