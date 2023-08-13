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
    postRequest(`http://103.166.182.62:5000/recommend`, {
      clicked_product: product?.name,
    }).then((response) => {
      setLoading(false);
      setRecommendations(response.data);
    });

    return () => {
      setRecommendations([]);
    };
  }, [product]);

  let listRecommend = [];
  recommendations.map((re) => {
    let data = products.find(it => it.name === re)
    listRecommend.push(data)
  });
  
  return (
    <div className="recommendations">
      <h3 className="recommendations__title">Products related to this item</h3>
      <div className="recommendations__list">
        {loading && (
          <p style={{fontSize: '28px', fontWeight: '700'}}>Loading....</p>
        )}
        {listRecommend.length > 0 && listRecommend.map((recommendation, key) => (
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
