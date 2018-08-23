 import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';

const app=express();
import schema from './graphql';
mongoose.connect('mongodb://sagar:graphql6618@ds255588.mlab.com:55588/graphql-api');
var db=mongoose.connection;
db.on('errot',()=>{console.log("faliled to connect.");}).once('open',()=>{console.log('connected to DB.');});
app.get('/',(req,res)=>{
	res.send("hello");
});

app.use('/graphql',graphqlHTTP(()=>({
	schema,
	graphiql : true,
	pretty : true
})));

app.listen(4000,()=>{
	console.log('server started');
})