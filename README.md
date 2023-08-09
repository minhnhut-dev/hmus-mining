# Example: Recommender WebApp

Click [here](https://recommender-app.ubiops.com/) for a live demo.

## What is this for?

This app is a real world example of how to integrate UbiOps and make requests to your model into your own WebApp.

You can find an article that describes this use case [here](https://medium.com/dutch-analytics-tech/how-to-build-and-implement-a-recommendation-system-from-scratch-in-python-b5a04d9e8331).

:warning: Before trying to call the UbiOps API from your own domain, make sure you add your domain as an "allowed domain" to your API token!
Otherwise the API call will be blocked.

## How do I call my model from a WebApp?

This app is using ReactJs. Although, the request sent to the model hosted on UbiOps is plain JavaScript and the code can be use in any JavaScript framework/library.

The only component we're interested in here is [Recommendation.js](src/components/Recommendations/Recommendations.js).

You can simply follow these 3 steps to do the same in your WebApp:

1. Define all the parameters you'll need to call your model:

```js
const API_TOKEN = "<your-api-token>";
const API_URL = "https://api.ubiops.com/v2.1";
const PROJECT_NAME = "<your-project-name>";
const DEPLOYMENT_NAME = "<your-deployment-name>";
const DEPLOYMENT_VERSION = "<your-version-name>";
```

2. Then define an asynchronous function to request data from the UbiOps API:

```js
async function postRequest(url = "", data = {}) {
  const response = await fetch(API_URL + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: API_TOKEN,
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
```

3. Finally, make a request to your model:

```js
postRequest(
  `/projects/${PROJECT_NAME}/deployments/${DEPLOYMENT_NAME}/versions/${DEPLOYMENT_VERSION}/requests`,
  // `clicked_product` is part of the input fields defined in the model
  { clicked_product: product }
).then((response) => {
  // your data is in `response.result` and `result` contains all the output fields defined in your model
};
```

## How do I run this app?

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can run the usual scripts using `npm` (see the `scripts` section in [package.json](package.json)).
