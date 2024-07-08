// pages/api/basicauth.js

import middleware from '../../middleware';

export default function handler(req, res) {
  middleware(req, res, () => {
    // Handle authenticated request
    res.status(200).json({ message: 'Authenticated' });
  });
}
