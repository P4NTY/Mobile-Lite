//Froamting date to YYYY-MM-DD
export function formatDate(date = new Date()) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

//logged events to console
export function log(text, type) {
    if (window.location.host.includes('localhost')) {
        switch (type) {
            case 'error':
                console.error(text);
                break;
            case 'table':
                console.table(text);
                break;
            case 'info':
                console.info(text);
                break;
            case 'warn':
                console.warn(text);
                break;
            case 'alert':
                window.alert(text)
                break;
            case 'debug':
                window.alert('Something might go wrong...');
                debugger;
                break;
            default:
                console.log(text);
                break;
        }
    }
}

export const getCssVar = (name) => getComputedStyle(document.documentElement).getPropertyValue(name);

export const createLabelColor = (labels, colors) => {
    const temp = {};
    labels.forEach((label, index) => {
        temp[label] = colors[index];
    });
    return temp;
}