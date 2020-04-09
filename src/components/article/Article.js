import React, { useEffect, useState } from "react";
import { Typography, Grid } from "@material-ui/core";
import ArticleItem from "./ArticleItem";
import ArticleLoading from "./ArticleLoading";
import { getData } from "../../utils/api";

const Article = (props) => {
  const [state, setState] = useState({
    loading: false,
    articles: [],
    articleLoading: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  });

  const getFeed = async () => {
    setState({ ...state, loading: true });
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
        {state.loading &&
          state.articleLoading.map((article) => (
            <Grid key={article} item xs={12} md={6} lg={4}>
              <ArticleLoading />
            </Grid>
          ))}
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
