import React from 'react';
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles';
import {DateTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
    container: {
        marginRight: theme.spacing(2),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300,
    },
}));


function DateTimePickers(props) {

    const {onChange, dateRange} = props
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                {
                    Object.keys(dateRange).map(function (key) {
                        return (
                            <DateTimePicker
                                className={classes.textField}
                                key={key}
                                autoOk
                                inputVariant="outlined"
                                disableFuture
                                value={dateRange[key]}
                                onChange={(e) => onChange(key, new Date(e))}
                                label={key}
                            />
                        )
                    })
                }
            </MuiPickersUtilsProvider>

        </div>
    );
}

DateTimePickers.propTypes = {
    onChange: PropTypes.func.isRequired,
    dateRange: PropTypes.object.isRequired,
};


export default DateTimePickers

