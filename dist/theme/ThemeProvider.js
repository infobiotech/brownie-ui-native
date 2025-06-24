"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = void 0;
const react_1 = __importStar(require("react"));
const defaulTheme_1 = require("./defaulTheme");
const createTheme_1 = require("./createTheme");
// FONT AWESOME ICONS https://docs.fontawesome.com/web/use-with/react-native
const fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const ThemeContext = (0, react_1.createContext)(defaulTheme_1.defaultTheme);
const useTheme = () => (0, react_1.useContext)(ThemeContext);
exports.useTheme = useTheme;
const ThemeProvider = ({ theme, children }) => {
    fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.fas);
    const mergedTheme = (0, createTheme_1.createTheme)(theme || {});
    return (<ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>);
};
exports.default = ThemeProvider;
