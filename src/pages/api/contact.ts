// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { sendEmail } from "@/lib/sendGrid";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { emailAddress, firstName, message } = req.body;

  try {
    await sendEmail(emailAddress, "", message);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
