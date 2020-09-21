const mongo = require('./lib/src/database');
const api = require('./api');
const web = require('./web');

const UserRepository = require('./lib/src/adapter/storage/MongoUserRepository');
const Bcrypt = require('./lib/src/adapter/security/Bcrypt');
const CreateRoot = require('./lib/src/application/use_case/CreatRoot');

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

mongo();
api(app);
web(app);

const password = process.env.ROOT_PASSWORD || "123456";

CreateRoot(password, new UserRepository(), new Bcrypt());

const port = process.env.PORT || 3001;

app.listen(port, () => console.log("Webcars admin start at port " + port));
