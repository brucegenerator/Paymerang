const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();

require('./database');

app.use(bodyParser.json());
app.use(cors());
