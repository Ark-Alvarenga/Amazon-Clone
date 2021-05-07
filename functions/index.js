const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IhVLxEe22M7SVINDj9Bzho2fd7ul3dMirKhM6QoRqblTVYc9V5CvaXjGF6qAkmeSDqR3Rtm8FYozzp3oV8oq94I00iQFDbGzW")



//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send ('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total)


    

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, 
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//Listen command
exports.api = functions.https.onRequest(app)


// http://localhost:5001/clone-176f1/us-central1/api