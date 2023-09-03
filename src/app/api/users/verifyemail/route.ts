import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModal";
import { connect } from "@/dbConfig/dbCOnfig";

connect();
// this route is receiving a token that would be used to find the user with that token and update the token in the db
export async function POST(request: NextRequest) {
  try {
    // get the user token
    const reqBody = await request.json();
    const { token } = reqBody;
    console.log(token);

    // use token to find the user token and the token that has not expired(whose time is greater than the current time)
    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    // token not found
    if (!user) {
      return NextResponse.json(
        { error: "invalid token, user not found" },
        { status: 400 }
      );
    }
    console.log(user);

    // token or user found, clear the current token data
    user.isVerfied = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;
    // save updated token verification data
    await user.save();

    return NextResponse.json({
      message: "Email verified successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
