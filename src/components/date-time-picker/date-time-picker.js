import React from "react";
import PropTypes from "prop-types";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Grid } from "@material-ui/core";

function DateTimePickers(props) {
  const { onChange, dateRange } = props;

  return (
    <Grid container spacing={2}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        {Object.keys(dateRange).map((key, index) => (
          <Grid item sm={12} md={6} key={index}>
            <DateTimePicker
              data-testid={"date-picker-testid-" + key}
              format="yyyy/MM/dd HH:mm"
              label="DateTimePicker"
              inputVariant="outlined"
              value={dateRange[key]}
              onChange={(e) => onChange(key, new Date(e))}
              label={key}
              inputProps={{
                "data-testid": key,
                name: "key",
                role: "input",
              }}
            />
          </Grid>
        ))}
      </MuiPickersUtilsProvider>
    </Grid>
  );
}

DateTimePickers.propTypes = {
  onChange: PropTypes.func.isRequired,
  dateRange: PropTypes.object.isRequired,
};

export default DateTimePickers;
