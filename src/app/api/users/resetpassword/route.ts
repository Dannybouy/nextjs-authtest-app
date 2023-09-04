import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModal";
import { connect } from "@/dbConfig/dbCOnfig";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    // get the user details
    const reqBody = await request.json();
    const { token, password, confirmPassword } = reqBody;

    // use token to find the user token and the token that has not expired(whose time is greater than the current time)
    const user = await User.findOne({
      forgotPasswordToken: token,
      forgotPasswordTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json(
        { error: "invalid token, user not found" },
        { status: 400 }
      );
    }
    console.log(user);

    // user exists

    //hash the new password
    if (password === confirmPassword) {
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);
      user.password = hashedPassword;
      user.forgotPasswordToken = undefined;
      user.forgotPasswordTokenExpiry = undefined;
      await user.save();
      return NextResponse.json({
        message: "Password has being successfully Reset",
        success: true,
      });
    } else {
      return NextResponse.json({
        message: "Password and confirm password do not match",
        success: false,
      });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
