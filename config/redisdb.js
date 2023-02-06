const redis = require('redis');
const client = redis.createClient();

client.connect();

console.log("in db config");

module.exports = client;
