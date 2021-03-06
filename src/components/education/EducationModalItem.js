import React from "react";
import { TextField, Grid, FormControlLabel, Checkbox } from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";

const EducationModalItem = props => {
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
        id="institution"
        label="School/Institution"
        margin="dense"
        variant="outlined"
        placeholder="Ex: Harvard School of Business"
        value={data.institution}
        onChange={action}
      />
      <TextField
        fullWidth
        required
        id="studyType"
        label="Degree and Type of Study"
        margin="dense"
        variant="outlined"
        placeholder="Ex: BS in Computer Science"
        value={data.studyType}
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
        label="Currently studying"
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
        id="area"
        label="Description"
        margin="dense"
        multiline
        rows={4}
        rowsMax={4}
        variant="outlined"
        value={data.area}
        onChange={action}
      />
    </>
  );
};

export default EducationModalItem;
