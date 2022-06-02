import { NextApiRequest, NextApiResponse } from "next";

const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql2");
const path = require("path");
const bodyParser = require("body-parser");
const { resole } = require("path");
const { rejects } = require("assert");

const con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

con.connect(function (err: Error) {
  if (err) throw err;
  console.log("connect");
});

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "kazuki" });
}
