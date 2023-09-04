import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModal";
import { connect } from "@/dbConfig/dbCOnfig";
import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request: NextRequest) {
  try {
    // get the user email
    const reqBody = await request.json();
    const { email } = reqBody;
    console.log(email);

    // check if the email is valid or it exists in db
    const user = await User.findOne({ email });
    console.log(user);
    // email or user does not exist
    if (!user) {
      return NextResponse.json(
        {
          error: "Invalid email, User not found",
        },
        { status: 400 }
      );
    }

    // user exists in db
    await sendEmail({ email, emailType: "RESET", userId: user._id });

    return NextResponse.json({
        message:`A reset password token has been sent out to ${email}. Please check your email`,
        success: true,
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
