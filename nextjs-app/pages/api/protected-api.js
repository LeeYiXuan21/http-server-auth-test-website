// pages/api/protected-api.js
import middleware from '../../middleware';

export default function handler(req, res) {
    // Log headers for debugging
    console.log('Request Headers:', req.headers);

    // Use basicAuthMiddleware to protect this endpoint
    return middleware(req, res);
}
