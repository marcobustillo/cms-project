import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Divider
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: "20px"
  }
}));

const Home = props => {
  const styles = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <Card className={styles.card}>
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={2} lg={2}>
                <img
                  src="https://avatars0.githubusercontent.com/u/13887767?v=4"
                  style={{
                    width: "200px",
                    height: "100%",
                    marginRight: "16px",
                    borderRadius: "0.28rem"
                  }}
                />
              </Grid>
              <Grid item xs={12} md={10} lg={10}>
                <Typography variant="h3">Marco Bustillo</Typography>
                <Typography variant="body1">Software Engineer</Typography>
                <Typography variant="body1">Philippines</Typography>
                <Typography variant="subtitle1" paragraph color="textSecondary">
                  A software engineer that loves learning new things and
                  aspiring entrepreneur. Open for change
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Card className={styles.card}>
          <CardHeader title="About" />
          <Divider />
          <CardContent>
            <Typography variant="subtitle1" paragraph>
              A software engineer that loves learning new things and aspiring
              entrepreneur. Open for change
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Card className={styles.card}>
          <CardHeader title="Skills" />
          <Divider />
          <CardContent>
            <Typography variant="subtitle1" paragraph>
              A software engineer that loves learning new things and aspiring
              entrepreneur. Open for change
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Card className={styles.card}>
          <CardHeader title="Projects" />
          <Divider />
          <CardContent>
            <Typography variant="subtitle1" paragraph>
              A software engineer that loves learning new things and aspiring
              entrepreneur. Open for change
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Card className={styles.card}>
          <CardHeader title="Experience" />
          <Divider />
          <CardContent>
            <Typography variant="subtitle1" paragraph>
              A software engineer that loves learning new things and aspiring
              entrepreneur. Open for change
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Card className={styles.card}>
          <CardHeader title="Education" />
          <Divider />
          <CardContent>
            <Typography variant="subtitle1" paragraph>
              A software engineer that loves learning new things and aspiring
              entrepreneur. Open for change
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Card className={styles.card}>
          <CardHeader title="Languages" />
          <Divider />
          <CardContent>
            <Typography variant="subtitle1" paragraph>
              A software engineer that loves learning new things and aspiring
              entrepreneur. Open for change
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Card className={styles.card}>
          <CardHeader title="Social Media" />
          <Divider />
          <CardContent>
            <Typography variant="subtitle1" paragraph>
              A software engineer that loves learning new things and aspiring
              entrepreneur. Open for change
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Home;
