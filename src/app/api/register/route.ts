import { NextApiRequest } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type Payload = {
  email: string;
};

export async function POST(req: Request) {
  try {
    const request: Payload = await req.json();
    console.log(request.email);
    // console.log(JSON.parse(request));

    const { data, error } = await resend.contacts.create({
      email: request.email,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
    });

    if (error) {
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
