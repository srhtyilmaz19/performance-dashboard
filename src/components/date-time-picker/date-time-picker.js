import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Grid, Input } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  datePickerContainer: {
    justifyContent: "center",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

function DateTimePickers(props) {
  const { onChange, dateRange } = props;
  const classes = useStyles();

  const renderInput = (textFieldProps) => (
    <Input
      role="input"
      id={textFieldProps.key}
      type="text"
      onClick={textFieldProps.onClick}
      value={textFieldProps.value}
      onChange={textFieldProps.onChange}
      className={textFieldProps.className}
    />
  );

  return (
    <Grid className={classes.datePickerContainer} container spacing={2}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        {Object.keys(dateRange).map((key, index) => (
          <Grid item sm={12} md={6} key={index}>
            <DateTimePicker
              format="yyyy/MM/dd HH:mm"
              TextFieldComponent={(textFieldPrps) =>
                renderInput({ ...textFieldPrps, key })
              }
              fullWidth
              className={classes.textField}
              key={key}
              autoOk
              inputVariant="outlined"
              disableFuture
              value={dateRange[key]}
              onChange={(e) => onChange(key, new Date(e))}
              label={key}
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
