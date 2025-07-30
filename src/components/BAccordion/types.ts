import { ReactNode } from 'react';
import { BColorKey, BColorValue } from '../../theme/tokens/colors';
import { BRadiusKey } from '../../theme/tokens/spacing';
import {
  BFontSizeKey,
  BFontSizeValue,
  BFontWeightKey,
  BFontWeightValue,
} from '../../theme/tokens/typography';
import { BIcons } from '../../theme/tokens';

export interface AccordionProps {
  /**
   * The title text to display in the accordion header
   */
  title: string | ReactNode;

  /**
   * The content to display when the accordion is expanded
   */
  children: ReactNode;

  /**
   * Whether the accordion is expanded (controlled mode)
   */
  expanded?: boolean;

  /**
   * Whether the accordion is expanded by default (uncontrolled mode)
   * @default false
   */
  defaultExpanded?: boolean;

  /**
   * Callback fired when the accordion is toggled
   * @param expanded - Whether the accordion is now expanded
   * @example
   * const handleAccordionToggle = (index: number, expanded: boolean) => {
   *   setExpandedAccordion(expanded ? index : null);
   * };
   * <BAccordion
   * title="Controlled Accordion"
   * expanded={expandedAccordion === 1}
   * onToggle={expanded => handleAccordionToggle(1, expanded)}
   * />
   */
  onToggle?: (expanded: boolean) => void;

  /**
   * Whether the accordion is disabled
   */
  disabled?: boolean;

  /**
   * Background color for the accordion header
   */
  headerBackgroundColor?: BColorKey | BColorValue | string;

  /**
   * Text color for the title in the header
   */
  titleColor?: BColorKey | BColorValue | string;

  /**
   * Font size for the title text
   */
  titleSize?: BFontSizeKey | BFontSizeValue;

  /**
   * Font weight for the title text
   */
  titleWeight?: BFontWeightKey | BFontWeightValue;

  /**
   * Custom icon to display in the header (defaults to caret down)
   */
  toggleIcon?: BIcons;

  /**
   * Color for the toggle icon in the header
   */
  toggleIconColor?: BColorKey | BColorValue | string;

  /**
   * Size for the toggle icon in the header
   */
  toggleIconSize?: BFontSizeKey | BFontSizeValue | number;

  /**
   * Background color for the accordion body/content area
   */
  bodyBackgroundColor?: BColorKey | BColorValue | string;

  /**
   * Text color for the accordion body content
   */
  bodyColor?: BColorKey | BColorValue | string;

  /**
   * Font size for the accordion body text
   */
  bodySize?: BFontSizeKey | BFontSizeValue;

  /**
   * Font weight for the accordion body text
   */
  bodyWeight?: BFontWeightKey | BFontWeightValue;

  /**
   * Border color for the entire accordion container
   */
  borderColor?: BColorKey | BColorValue | string;

  /**
   * Border radius for the entire accordion container
   */
  borderRadius?: BRadiusKey;
}
