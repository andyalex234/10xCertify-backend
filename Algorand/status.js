const { default: algosdk } = require("algosdk");
require("dotenv").config();

const token = process.env.ALGORAND_TOKEN;
const server = 'http://127.0.0.1';
const port = 4001;
const client = new algosdk.Algodv2(token, server, port);

(async () => {
  console.log(await client.status().do());
})().catch((e) => {
  console.log(e);
});