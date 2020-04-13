import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Divider,
  List,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SkillItem from "./skills/ListItem";
import SocialMediaItem from "./social-media/SocialMediaItem";
import EducationItem from "./education/EducationTile";
import DetailTile from "./work/DetailTile";
import Showcase from "./Showcase";
import { getApi } from "../utils/api";
import { store } from "../utils/store";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: "20px",
  },
  removePadding: {
    paddingRight: 0,
    paddingLeft: 0,
  },
}));

const Home = (props) => {
  const styles = useStyles();
  const { id } = useParams();

  const {
    state: { data, isAuthenticated },
    dispatch,
  } = useContext(store);

  const getUser = async () => {
    const result = await getApi(id);
    dispatch({
      type: "getUser",
      payload: result.data,
    });
  };

  React.useEffect(() => {
    getUser();
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <Card className={styles.card}>
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={4} lg={2}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src="https://avatars0.githubusercontent.com/u/13887767?v=4"
                    style={{
                      width: "200px",
                      height: "100%",
                      marginRight: "16px",
                      borderRadius: "0.28rem",
                    }}
                    alt="cu"
                  />
                </div>
              </Grid>

              <Grid item xs={12} md={8} lg={10}>
                <Typography variant="h3">{`${data.name} (@${data.username})`}</Typography>
                <Typography variant="body1" color="textSecondary">
                  {data.position ? data.position : "No data found"}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {data.location ? data.location : "No data found"}
                </Typography>
                <Typography variant="subtitle1" paragraph color="textSecondary">
                  {data.about}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        {isAuthenticated && <Showcase />}
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Card className={styles.card}>
          <CardHeader title="Skills" />
          <Divider />
          <CardContent className={styles.removePadding}>
            <List>
              {data.skills &&
                data.skills.map((item) => (
                  <div key={item.name}>
                    <SkillItem
                      title={item.name}
                      rating={item.rating}
                      skill={item.level}
                      yearsOfExperience={item.yearsOfExperience}
                      viewMode
                    />
                    <Divider />
                  </div>
                ))}
              {data.skills && data.skills.length === 0 && (
                <div style={{ marginLeft: 20 }}>
                  <Typography
                    variant="subtitle1"
                    paragraph
                    color="textSecondary"
                  >
                    No skills found
                  </Typography>
                </div>
              )}
            </List>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Card className={styles.card}>
          <CardHeader title="Projects" />
          <Divider />
          <CardContent className={styles.removePadding}>
            {data.projects && data.projects.length === 0 && (
              <div style={{ marginLeft: 20 }}>
                <Typography variant="subtitle1" paragraph color="textSecondary">
                  No projects found
                </Typography>
              </div>
            )}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Card className={styles.card}>
          <CardHeader title="Experience" />
          <Divider />
          <CardContent className={styles.removePadding}>
            <List>
              {data.work && data.work.map((item) => <DetailTile viewMode />)}
              {data.work && data.work.length === 0 && (
                <div style={{ marginLeft: 20 }}>
                  <Typography
                    variant="subtitle1"
                    paragraph
                    color="textSecondary"
                  >
                    No experience found
                  </Typography>
                </div>
              )}
            </List>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Card className={styles.card}>
          <CardHeader title="Education" />
          <Divider />
          <CardContent className={styles.removePadding}>
            <List>
              {data.education &&
                data.education.map((item, i) => (
                  <EducationItem key={i.toString()} data={item} viewMode />
                ))}
              {data.education && data.education.length === 0 && (
                <div style={{ marginLeft: 20 }}>
                  <Typography
                    variant="subtitle1"
                    paragraph
                    color="textSecondary"
                  >
                    No education found
                  </Typography>
                </div>
              )}
            </List>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Card className={styles.card}>
          <CardHeader title="Languages" />
          <Divider />
          <CardContent className={styles.removePadding}>
            {data.lang && data.lang.length === 0 && (
              <div style={{ marginLeft: 20 }}>
                <Typography variant="subtitle1" paragraph color="textSecondary">
                  No languages found
                </Typography>
              </div>
            )}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Card className={styles.card}>
          <CardHeader title="Social Media" />
          <Divider />
          <CardContent className={styles.removePadding}>
            <List disablePadding dense>
              {data.socials &&
                data.socials.map((media) => (
                  <div key={media.link}>
                    <SocialMediaItem
                      key={media.link}
                      link={media.link}
                      type={media.type}
                      viewMode
                    />
                    <Divider />
                  </div>
                ))}
              {data.socials && data.socials.length === 0 && (
                <div style={{ marginLeft: 20 }}>
                  <Typography
                    variant="subtitle1"
                    paragraph
                    color="textSecondary"
                  >
                    No social media/s found
                  </Typography>
                </div>
              )}
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Home;
