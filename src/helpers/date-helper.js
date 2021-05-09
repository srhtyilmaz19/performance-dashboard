class DateHelper {
    getCurrentDate() {
        return new Date();
    }

    getDateSubs(date, minutes) {
        return new Date(date.getTime() - minutes * 60000);
    }
}

const dateHelper = new DateHelper()
export default dateHelper;
