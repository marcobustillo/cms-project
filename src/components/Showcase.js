import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardHeader,
  Tooltip
} from "@material-ui/core";

const Showcase = props => {
  const [open, setOpen] = React.useState(false);

  const handleCopy = () => {
    setOpen(true);
    navigator.clipboard.writeText("https://cmsportfolio.ml/healthcheck");
  };

  return (
    <Card>
      <CardHeader title="Your JSON API to supply data to your portfolion and resume" />
      <Tooltip
        open={open}
        onClose={() => setTimeout(() => setOpen(false), 3000)}
        title="Copied"
        arrow
        placement="top-end"
      >
        <CardActionArea onClick={handleCopy}>
          <CardContent>
            <Typography color="primary">
              https://cmsportfolio.ml/healthcheck
            </Typography>
          </CardContent>
        </CardActionArea>
      </Tooltip>
    </Card>
  );
};

export default Showcase;
