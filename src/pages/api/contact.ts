// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { sendEmail } from "../../lib/sendgrid";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, firstName } = req.body;

  try {
    await sendEmail(email, firstName, "Test Email, this is a test email from Next.js!");
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
