"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BIcons = void 0;
exports.isObjectKey = isObjectKey;
exports.isObjectValue = isObjectValue;
var BIcons;
(function (BIcons) {
    BIcons["Home"] = "house";
    BIcons["Gear"] = "gear";
    BIcons["Pen"] = "pen";
    BIcons["History"] = "clock-rotate-left";
    BIcons["Plus"] = "plus";
    BIcons["Back"] = "arrow-left";
    BIcons["Forward"] = "arrow-right";
    BIcons["Warning"] = "triangle-exclamation";
    BIcons["Check"] = "check";
    BIcons["Close"] = "xmark";
    BIcons["Info"] = "circle-info";
    BIcons["CircleStop"] = "circle-stop";
    BIcons["Stop"] = "stop";
    BIcons["Reload"] = "rotate";
    BIcons["Spinner"] = "spinner";
    BIcons["Zoom"] = "magnifying-glass-minus";
})(BIcons || (exports.BIcons = BIcons = {}));
function isObjectKey(obj, key) {
    return Object.keys(obj).includes(key);
}
function isObjectValue(obj, value) {
    return Object.values(obj).includes(value);
}
