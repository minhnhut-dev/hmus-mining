
async function postRequest(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token 1fbf77734b75a21c4044c99d263163b8f78be87d",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
postRequest(
  `https://api.ubiops.com/v2.1/projects/ubiops-recommender/deployments/recommender-deployment-copy/versions/v1-copy-s0jj5/requests?timeout=3600`,
  { clicked_product: "mineral water" }
).then((response) => {
  console.log(response);
});
