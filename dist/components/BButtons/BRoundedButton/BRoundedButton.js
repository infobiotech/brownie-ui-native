"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const BButton_1 = __importDefault(require("../BButton/BButton"));
const ThemeProvider_1 = require("../../../theme/ThemeProvider");
const BRoundedButton = (props) => {
    const { themeColor } = (0, ThemeProvider_1.useTheme)();
    const { action, disabled, loading, size, icon, primaryColor = themeColor.primary, contentColor, variant = "light", style, contentStyle, } = props;
    return (<BButton_1.default action={action} disabled={disabled} loading={loading} iconSize={size} icon={icon} primaryColor={primaryColor} contentColor={contentColor} variant={variant} aspectRatio={1} borderRadius={"rounded"} style={style} contentStyle={contentStyle}/>);
};
exports.default = BRoundedButton;
