import { Resend } from "resend";

const localhost = process.env.NEXT_PUBLIC_URL;
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${localhost}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Please confirm your email",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm your email.</p>
    `,
  });
};