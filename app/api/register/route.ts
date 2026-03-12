// app/api/register/route.ts
import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json()

  const filePath = path.join(process.cwd(), 'data', 'users.json')
  const fileData = fs.readFileSync(filePath, 'utf-8')
  const data = JSON.parse(fileData)

  // Email already exist karta hai?
  const exists = data.users.find((u: any) => u.email === email)
  if (exists) {
    return NextResponse.json({ message: 'Email already registered hai' }, { status: 400 })
  }

  // Naya user banao
  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    password, // real project mein bcrypt use karna
  }

  data.users.push(newUser)

  // JSON file mein save karo
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2))

  return NextResponse.json({ message: 'Register ho gaye!' }, { status: 201 })
}
