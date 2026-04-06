import { NextResponse } from 'next/server';

const GET = async (request: Request) => {
    return NextResponse.redirect(new URL('/live', request.url), 302);
};

export { GET };
