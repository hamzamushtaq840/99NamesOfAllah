import { NextResponse } from 'next/server'
import { names } from '@/utils/consts'

export const GET = async (request, { params }) => {
  const { id } = params
  let nameData = names.find(val => {
    return val.english.name === id
  })
  return new NextResponse(JSON.stringify(nameData), { status: 200 })
}
