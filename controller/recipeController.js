const express = require('express');
var app = express();
const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL || "postgres://futdxhkvnuuepy:f187d7af0a259f26677add7247aced689bd76f3d8be42fc721d4f0e38c3bd367@ec2-52-45-14-227.compute-1.amazonaws.com:5432/d137sulfnslg99/recipeDb";
const pool = new Pool({connectionString: connectionString});


