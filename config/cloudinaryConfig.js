const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
    cloud_name: 'dijdcwgke',
    api_key:'356743586782188',
    api_secret:'kNbaExg3Q4IpMR3_W32fjc8TT5I',
});

module.exports = cloudinary;

