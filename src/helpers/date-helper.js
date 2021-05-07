class DateHelper {


    getCurrentDate() {
        return new Date();
    }

    getTimestampOfCurrentDate(date) {
        return Math.round(date.getTime() / 1000)
    }

    getDateSubs(date, minutes) {
        return new Date(date.getTime() - minutes * 60000);
    }


}

const dateHelper = new DateHelper()
export default dateHelper;
