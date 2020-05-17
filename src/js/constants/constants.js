export const apiNews = 'd2e8ae45bab34d90944cab2690459f48';
export const pictureInRow = 3;
export const days = 6;

function getWeek() {
    const dateTo = new Date();
    const millisecondsIn24HRS = 60 * 60 * 24 * 1000;
    const sixDayAgo = millisecondsIn24HRS*6;
    const dateFrom = new Date(dateTo-sixDayAgo);
    return {dateTo, dateFrom};
}

const {dateTo, dateFrom} = getWeek();

export const today = `${dateTo.getFullYear()}-${dateTo.getMonth() + 1}-${dateTo.getDate()}`;
export const previousWeek = `${dateFrom.getFullYear()}-${dateFrom.getMonth() + 1}-${dateFrom.getDate()}`; 
