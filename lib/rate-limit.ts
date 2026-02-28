/**
 * Simple in-memory rate limiter using sliding window.
 */

interface RateLimitEntry {
    count: number;
    resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

// Periodically clean up expired entries to prevent memory leaks
if (typeof globalThis !== "undefined") {
    const CLEANUP_INTERVAL = 60_000; // 1 minute

    const globalWithCleanup = globalThis as typeof globalThis & {
        __rateLimitCleanup?: ReturnType<typeof setInterval>;
    };

    if (!globalWithCleanup.__rateLimitCleanup) {
        globalWithCleanup.__rateLimitCleanup = setInterval(() => {
            const now = Date.now();
            for (const [key, entry] of rateLimitMap) {
                if (now > entry.resetTime) {
                    rateLimitMap.delete(key);
                }
            }
        }, CLEANUP_INTERVAL);
    }
}

/**
 * Check and increment rate limit for a given key.
 *
 * @param key - Unique identifier (e.g., `contact:${ip}` or `login:${ip}`)
 * @param limit - Maximum number of requests allowed in the window
 * @param windowMs - Time window in milliseconds
 * @returns `{ success: boolean; remaining: number }`
 */
export function rateLimit(
    key: string,
    limit: number,
    windowMs: number,
): { success: boolean; remaining: number } {
    const now = Date.now();
    const entry = rateLimitMap.get(key);

    // No existing entry or window expired — start fresh
    if (!entry || now > entry.resetTime) {
        rateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
        return { success: true, remaining: limit - 1 };
    }

    // Over the limit
    if (entry.count >= limit) {
        return { success: false, remaining: 0 };
    }

    // Increment
    entry.count++;
    return { success: true, remaining: limit - entry.count };
}
