import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography
} from "@material-ui/core";

const ArticleItem = props => {
  const { data } = props;
  return (
    <Card>
      <CardActionArea href={data.url} target="_blank">
        <CardMedia
          component="img"
          height="100"
          image={data.social_image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="caption" color="textSecondary">
            dev.to
          </Typography>
          <Typography gutterBottom variant="h6">
            {data.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArticleItem;
