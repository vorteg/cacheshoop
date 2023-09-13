import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';


export const dynamic = 'force-dynamic'

export async function GET(req:NextRequest){
  try {
    const requestUrl = new URL(req.url)
    const id = requestUrl.searchParams.get('id')

    const response = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${process.env.RAW_KEY}`
    );

    // console.log(response)
    return NextResponse.json(response.data)

  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Error fetching data'})
    
  }
}