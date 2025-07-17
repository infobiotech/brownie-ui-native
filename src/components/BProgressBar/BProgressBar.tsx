import React, { useEffect, useRef } from 'react';
import { ActivityIndicator, Animated, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';
import { ProgressBarProps } from './types';
import { BBox } from '../BBox/BBox';
import { BText } from '../BText/BText';

const BProgressBar: React.FC<ProgressBarProps> = props => {
  const { radius, themeColor } = useTheme();

  const {
    totalTime,
    elapsedTime,
    color = themeColor.primary,
    totalWidth = 300,
    label,
    labelPosition = 'bottom',
    spinner = true,
  } = props;

  const widthAnim = useRef(new Animated.Value(1)).current;

  const missingTime = totalTime - elapsedTime;
  const progress = Math.max(
    0,
    Math.min((totalTime - elapsedTime) / totalTime, 1),
  );

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [progress, widthAnim]);

  const interpolatedWidth = widthAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [totalWidth, 0],
  });

  const classNames = StyleSheet.create({
    animatedProgress: {
      width: interpolatedWidth,
      height: 12,
      backgroundColor: color[0],
      borderRadius: radius.rounded,
    },
  });

  const getFlexDirection = () => {
    switch (labelPosition) {
      case 'bottom':
      default:
        return 'column';

      case 'top':
        return 'column-reverse';

      case 'left':
        return 'row-reverse';

      case 'right':
        return 'row';
    }
  };

  return (
    <BBox
      width={totalWidth}
      alignItems="center"
      flexDirection={getFlexDirection()}
    >
      <BBox
        width={'100%'}
        height={12}
        backgroundColor={color[2]}
        borderRadius={'rounded'}
        overflow={'hidden'}
      >
        <Animated.View style={classNames.animatedProgress} />
      </BBox>
      {(label || spinner) && (
        <BBox flexDirection="row" alignItems="center">
          {label && <BText>Progress: {label}</BText>}
          {spinner && missingTime > 0 && <ActivityIndicator color={color[0]} />}
        </BBox>
      )}
    </BBox>
  );
};

export default BProgressBar;
