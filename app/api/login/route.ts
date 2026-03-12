// app/api/login/route.ts
import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  // JSON file padho
  const filePath = path.join(process.cwd(), 'data', 'users.json')
  const fileData = fs.readFileSync(filePath, 'utf-8')
  const { users } = JSON.parse(fileData)

  // User dhundo
  const user = users.find(
    (u: any) => u.email === email && u.password === password
  )

  if (!user) {
    return NextResponse.json({ message: 'Email ya password galat hai' }, { status: 401 })
  }

  // Password remove karke bhejo
  const { password: _, ...safeUser } = user

  return NextResponse.json({ user: safeUser }, { status: 200 })
}