import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRESS_HOST,
    port: process.env.POSTGRESS_PORT,
    user: process.env.POSTGRESS_USER,
    database: process.env.POSTGRESS_DB,
    password: process.env.POSTGRESS_PASSWORD,
  });
  await client.connect();
  const result = await client.query(queryObject);
  await client.end();
  return result;
}

export default {
  query: query,
};
