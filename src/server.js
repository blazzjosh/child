import sirv from 'sirv';
import express from 'express';
import Sequelize from 'sequelize';
import bodyParser from 'body-parser'
import compression from 'compression';
import * as sapper from '@sapper/server';


const {
	PORT,
	NODE_ENV
} = process.env;
const dev = NODE_ENV === 'development';
const sequelize = new Sequelize('regi', 'root', '', {
	host: 'localhost',
	dialect: 'mysql'
})

sequelize
	.authenticate()
	.then(() => {
		console.log('DB CONNECT SUCCESS.');
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});

const app = express()


app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(express.json());


app.use(compression({
		threshold: 0
	}),
	sirv('static', {
		dev
	}),
	sapper.middleware({})).listen(PORT, err => {
	if (err) console.log('error', err);
});