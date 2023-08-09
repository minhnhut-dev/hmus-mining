import { memo, useEffect, useState } from "react";
import "./Recommendations.css";
import ProductCard from "components/ProductCard/ProductCard";
import products from "assets/products.json";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// const API_TOKEN = "Token 1fbf77734b75a21c4044c99d263163b8f78be87d"
// const API_URL = process.env.REACT_APP_API_URL;
// const PROJECT_NAME = process.env.REACT_APP_PROJECT_NAME;
// const DEPLOYMENT_NAME = process.env.REACT_APP_DEPLOYMENT_NAME;
// const DEPLOYMENT_VERSION = process.env.REACT_APP_DEPLOYMENT_VERSION;

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

const Recommendations = ({ product }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    postRequest(`http://localhost:5000/recommend`, {
      clicked_product: product,
    }).then((response) => {
      setLoading(false);
      setRecommendations(response.data);
    });

    return () => {
      setRecommendations([]);
    };
  }, [product]);
  
  return (
    <div className="recommendations">
      <h3 className="recommendations__title">Products related to this item</h3>
      <div className="recommendations__list">
        {loading && (
          // <SkeletonTheme baseColor="#202020" highlightColor="#444">
          //   <p>
          //     <Skeleton count={3} />
          //   </p>
          // </SkeletonTheme>
          <p>Loading....</p>
        )}
        {recommendations.map((recommendation, key) => (
          <ProductCard
            product={recommendation}
            id={products.findIndex((product) => product.name === recommendation)}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(Recommendations);
