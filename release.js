// ===================================================
// FOR DEVELOPMENT
// Total.js - framework for Node.js platform
// https://www.totaljs.com
// ===================================================

const fs = require('fs');
const options = {};

options.ip = 'auto';
options.port = process.env.port;
options.directory = process.cwd();

var framework = require('total.js');
framework.http('release', options);