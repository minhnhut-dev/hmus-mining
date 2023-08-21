const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5001; //Line 3
const bodyParser = require('body-parser');
var cors = require('cors')

// This displays message that the server running and listening to specified port

// create a GET route

// app.use(express.)
app.use(cors())

app.use(bodyParser.json()); // Parse JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded bodies

async function postRequest(url = "", data = {}) { 
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token ae7840cd09bfca75838c4f52cac97bc075341df3",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

app.post('/recommend', (req, res) => { //Line 9
  let params = (req.body.clicked_product);
  console.log(params);
  postRequest(
    `https://api.ubiops.com/v2.1/projects/recommender/deployments/recommender-model/versions/v1/requests?timeout=3600`,
    { cart_products: params}
  ).then((response) => {
    res.send({ data: response.result.recommendation}); //Line 10
  });
}); //Line 11

app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6
