const second = 1000,
    minute = 60 * second,
    hour = 60 * minute,
    day = 24 * hour,
    timeframe = {second, minute, hour, day};

const checkDate = (diff, tf, under) => {
    let result;
    if (diff / timeframe[tf] < under) {
        result = Math.floor(diff / timeframe[tf]);
        return result + " " + tf + ((result > 1) ? "s" : "");
    }
}

export const ago = (timestamp, now = new Date().toString()) => {

    let diff, result;
    timestamp = new Date(timestamp);
    now = new Date(now);
    diff = now - timestamp;

    result = checkDate(diff, "second", 60);
    if (result) return "less than a minute"

    result = checkDate(diff, "minute", 60)
    if (result) return `${result} ago`

    result = checkDate(diff, "hour", 24)
    if (result) return `${result} ago`

    result = checkDate(diff, "day", 30)
    if (result) return `${result} ago`

    return `${timestamp.getMonth() + 1}/${timestamp.getDate()}/${timestamp.getFullYear()}`

}