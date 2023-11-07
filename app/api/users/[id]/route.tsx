import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string; }; }
) {

  const user = null;

  if (!user) {
    return NextResponse.json({ error: "User not found." },
      { status: 400 }
    );
  }

  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string; }; }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const user = null;
  if (!user) {
    return NextResponse.json(
      { error: "User not found." },
      { status: 404 }
    );
  }

  const updatedUser = null;

  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  { params }:  { params: { id: string }}
) {
  const user = null;

  if (!user) {
    return NextResponse.json(
      { error: "User not found"},
      { status: 404}
    )
  }

  return NextResponse.json({});
}
