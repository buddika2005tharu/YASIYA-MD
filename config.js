const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~q0xHgAiL#YnS_BtFxIb_BjAR4qSctajDd77JcthyaScNC-wrBwA4'
};
