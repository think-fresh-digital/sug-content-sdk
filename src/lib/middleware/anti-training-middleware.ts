import { Middleware } from '@sitecore-content-sdk/nextjs/middleware';
import { NextRequest, NextResponse } from 'next/server';

export class AntiTrainingMiddleware extends Middleware {
    async handle(_req: NextRequest, res: NextResponse): Promise<NextResponse> {
        // Add headers to prevent AI training
        res.headers.set('X-Robots-Tag', 'noai, noimageai');
        res.headers.set('X-Content-Type-Options', 'nosniff');
        res.headers.set('Permissions-Policy', 'interest-cohort=()');
        
        // Add specific headers for common AI crawlers
        res.headers.set('X-No-AI-Training', 'true');
        res.headers.set('X-No-Index', 'true');
        
        return res;
    }
}