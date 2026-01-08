import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password, role } = await req.json();

  const users = [
    { email: "admin@gmail.com", password: "admin123", role: "admin" },
    { email: "user@gmail.com", password: "user123", role: "user" },
  ];

  const validUser = users.find(
    (u) =>
      u.email === email &&
      u.password === password &&
      u.role === role
  );

  if (!validUser) {
    return NextResponse.json(
      { message: "Invalid credentials or role" },
      { status: 401 }
    );
  }

  return NextResponse.json({
    message: "Login successful",
    role: validUser.role,
  });
}
