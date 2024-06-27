import { NextApiRequest } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

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
      audienceId: "b1225deb-a844-4d92-bcad-e0128f69fb90",
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
