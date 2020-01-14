import React from "react";
import { TextField, Grid, FormControlLabel, Checkbox } from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";

const WorkModalItem = props => {
  const {
    data,
    action,
    current,
    startDate,
    endDate,
    handleStartDate,
    handleEndDate
  } = props;

  return (
    <>
      <TextField
        fullWidth
        required
        id="position"
        label="Title"
        margin="dense"
        variant="outlined"
        placeholder="Ex: Software Developer"
        value={data.position}
        onChange={action}
      />
      <TextField
        fullWidth
        required
        id="company"
        label="Company"
        margin="dense"
        variant="outlined"
        placeholder="Ex: Konami"
        value={data.company}
        onChange={action}
      />
      <FormControlLabel
        control={
          <Checkbox
            id="isCurrent"
            checked={current}
            onChange={action}
            color="secondary"
          />
        }
        label="This is my current role"
      />
      <Grid container>
        <Grid item xs={12} md={6} lg={6}>
          <DatePicker
            fullWidth
            required
            disableFuture
            margin="dense"
            inputVariant="outlined"
            openTo="year"
            views={["year", "month"]}
            label="Start Date"
            value={startDate}
            onChange={event => handleStartDate(event)}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          {!current && (
            <DatePicker
              fullWidth
              required
              disableFuture
              margin="dense"
              inputVariant="outlined"
              openTo="year"
              views={["year", "month"]}
              label="End Date"
              value={endDate}
              onChange={event => handleEndDate(event)}
            />
          )}
        </Grid>
      </Grid>
      <TextField
        fullWidth
        id="location"
        label="Location"
        margin="dense"
        variant="outlined"
        placeholder="Ex: Nagoya, Japan"
        value={data.location}
        onChange={action}
      />
      <TextField
        fullWidth
        id="website"
        label="Website"
        margin="dense"
        variant="outlined"
        placeholder="Ex: https://companyname.com"
        value={data.website}
        onChange={action}
      />
      <TextField
        fullWidth
        id="summary"
        label="Description"
        margin="dense"
        multiline
        rows={4}
        rowsMax={4}
        variant="outlined"
        value={data.summary}
        onChange={action}
      />
    </>
  );
};

export default WorkModalItem;
