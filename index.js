const mongo = require('./lib/src/database');
const api = require('./api');
const web = require('./web');

const UserRepository = require('./lib/src/adapter/storage/MongoUserRepository');
const Bcrypt = require('./lib/src/adapter/security/Bcrypt');
const CreateRoot = require('./lib/src/application/use_case/CreatRoot');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

mongo();
api(app);
web(app);

const password = process.env.ROOT_PASSWORD || "123456";

CreateRoot(password, new UserRepository(), new Bcrypt());

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Webcars admin start at port " + port));
