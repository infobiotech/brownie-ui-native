import React from 'react';
import { NavigationBarProps } from './types';
import BBox from '../BBox/BBox';
import BText from '../BText/BText';
import BButton from '../BButtons/BButton/BButton';
import BRoundedButton from '../BButtons/BRoundedButton/BRoundedButton';
import { useTheme } from '../../theme/ThemeProvider';

const BNavigationBar: React.FC<NavigationBarProps> = props => {
  const { colors, fontSizes, fontWeights } = useTheme();
  const {
    title,
    titleSize = fontSizes.xs,
    titleWeight = fontWeights.regular,
    action,
    disabled,
    actionIcon,
    actionLabel,
    actionLabelSize = fontSizes.xs,
  } = props;

  return (
    <BBox
      width="100%"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <BText fontSize={titleSize} fontWeight={titleWeight}>
        {title}
      </BText>
      {actionIcon && !actionLabel ? (
        <BRoundedButton
          action={action}
          icon={actionIcon}
          size={18}
          primaryColor={colors.gray}
          disabled={disabled}
        />
      ) : (
        <BButton
          action={action}
          icon={actionIcon || undefined}
          primaryColor={colors.gray}
          fontSize={actionLabelSize}
          disabled={disabled}
        >
          {actionLabel}
        </BButton>
      )}
    </BBox>
  );
};

export default BNavigationBar;
