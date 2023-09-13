import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';


export const dynamic = 'force-dynamic'

export async function GET(req:NextRequest){
  try {
    const requestUrl = new URL(req.url)
    const page = requestUrl.searchParams.get('page')
    const searchTerm = requestUrl.searchParams.get('searchTerm')

    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${process.env.RAW_KEY}&page=${page}&search=${searchTerm}`
    );

    // console.log(response)
    return NextResponse.json(response.data)

  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Error fetching data'})
    
  }
}