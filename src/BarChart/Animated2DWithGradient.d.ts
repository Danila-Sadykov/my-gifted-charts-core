import { type ColorValue, type ViewStyle } from 'react-native';
import { type FocusedBarConfig, type BarChartPropsType, type CommonPropsFor2dand3dBarsType, type barDataItem, type stackDataItem } from './types';
import { type ReactNode } from 'react';
interface Animated2dWithGradientPropsType extends BarChartPropsType {
    item: barDataItem;
    index: number;
    barHeight: number;
    selectedIndex: number;
    barBackgroundPattern?: () => ReactNode;
    barInnerComponent?: (item?: stackDataItem | barDataItem, index?: number) => ReactNode;
    patternId?: string;
    barStyle?: object;
    intactTopLabel: boolean;
}
interface IgetPropsForAnimated2DWithGradientReturnType {
    commonStyleForBar: ViewStyle[];
    barStyleWithBackground: ViewStyle[];
    commonPropsFor2dAnd3dBars: CommonPropsFor2dand3dBarsType;
    isFocused?: boolean;
    focusedBarConfig?: FocusedBarConfig;
    localFrontColor: ColorValue;
}
export declare const getPropsForAnimated2DWithGradient: (props: Animated2dWithGradientPropsType) => IgetPropsForAnimated2DWithGradientReturnType;
export {};
