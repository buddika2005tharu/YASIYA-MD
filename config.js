const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~npx1ATQa#5L1H0tZQzzDTriQRzt42p-AFO2Nb7Dm_kk353FLBgXQ'
};
