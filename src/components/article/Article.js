import React, { useEffect, useState } from "react";
import { Typography, Grid } from "@material-ui/core";
import ArticleItem from "./ArticleItem";
import { getData } from "../../utils/api";

const Article = (props) => {
  const [state, setState] = useState({
    loading: false,
    articles: [],
  });

  const getFeed = async () => {
    const result = await getData("/feed");
    if (result) {
      setState({ ...state, loading: false, articles: result.data });
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <>
      <Typography variant="h4">Articles</Typography>
      <Grid container spacing={3}>
        {state.articles.length > 0 &&
          state.articles.map((article) => (
            <Grid key={article.id} item xs={12} md={6} lg={4}>
              <ArticleItem data={article} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Article;
