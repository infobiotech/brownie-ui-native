import { ReactNode } from 'react';
import { BFontSizeKey, BFontWeightKey } from '../../theme/tokens/typography';
import { BColorKey, BColorValue } from '../../theme/tokens/colors';
export interface TextProps {
    fontSize?: BFontSizeKey | number;
    fontWeight?: BFontWeightKey | number;
    /**
     * Android default font families: normal, notoserif, sans-serif, sans-serif-light, sans-serif-thin, sans-serif-condensed, sans-serif-medium, serif, Roboto, monospace
     */
    fontFamily?: string;
    color?: BColorKey | BColorValue | string;
    style?: any;
    children: ReactNode;
}
