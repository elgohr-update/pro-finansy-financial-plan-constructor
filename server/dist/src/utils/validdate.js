"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (date) => {
    let datetime_regex = /(\d\d)\.(\d\d)\.(\d\d\d\d)/;
    let date_arr = datetime_regex.exec(date);
    if (date_arr)
        return new Date(+date_arr[3], +date_arr[2] - 1, +date_arr[1]);
    return new Date();
};
//# sourceMappingURL=validdate.js.map