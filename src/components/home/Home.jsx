import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../card/Card";

function Home({ category }) {
  const [newsdata, setNewsData] = useState([]);
  // eslint-disable-next-line no-undef
  const api = JSON.stringify(import.meta.env.VITE_REACT_APP_API_KEY);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        //also we can take apikey in .env file if we want for better approach
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=03b10dd5e7624847b8a9347d197d3027`
      );
      setNewsData(response.data.articles);
      console.log(newsdata);
    };
    getData();
  }, [newsdata]);

  return (
    <div className="home">
      {newsdata.map((item) => {
        return (
          <div className="section" key={item.url}>
            <Card item={item} />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
