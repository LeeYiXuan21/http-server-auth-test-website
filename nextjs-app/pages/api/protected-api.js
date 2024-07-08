// pages/api/protected-api.js
import middleware from '../../middleware';

console.log('HTTP_BASIC_AUTH:', process.env.HTTP_BASIC_AUTH); // Check if environment variable is accessible

export default function handler(req, res) {
    return middleware(req, res);
}
