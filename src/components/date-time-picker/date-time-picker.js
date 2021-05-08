import React from 'react';
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles';
import {DateTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import {Input} from "@material-ui/core";

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

    const renderInput = (props) => (
        <Input
            id={props.key}
            type="text"
            onClick={props.onClick}
            value={props.value}
            onChange={props.onChange}
            className={props.className}
        />
    )

    return (
        <div className={classes.container}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                {
                    Object.keys(dateRange).map(function (key) {
                        return (
                            <DateTimePicker
                                format="yyyy/MM/dd HH:mm"
                                TextFieldComponent={props => renderInput({...props, key})}
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

