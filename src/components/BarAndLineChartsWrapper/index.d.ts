import { LineInBarChartPropsType, type BarAndLineChartsWrapperTypes, type horizSectionPropTypes } from '../../utils/types';
import { type NativeScrollEvent } from 'react-native';
export declare const useBarAndLineChartsWrapper: (props: BarAndLineChartsWrapperTypes) => {
    containerHeightIncludingBelowXAxis: any;
    xAxisLabelsVerticalShift: any;
    trimYAxisAtTop: any;
    yAxisExtraHeight: any;
    overflowTop: any;
    xAxisLabelsHeight: any;
    xAxisTextNumberOfLines: any;
    actualContainerWidth: number;
    transformForHorizontal: ({
        rotate: string;
        translateY?: undefined;
        translateX?: undefined;
    } | {
        translateY: number;
        rotate?: undefined;
        translateX?: undefined;
    } | {
        translateX: number;
        rotate?: undefined;
        translateY?: undefined;
    })[];
    transformForHorizontalForReactJS: string;
    horizSectionProps: horizSectionPropTypes;
    referenceLinesOverChartContent: any;
    setCanMomentum: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    isCloseToStart: ({ layoutMeasurement, contentOffset, contentSize }: NativeScrollEvent) => boolean;
    isCloseToEnd: ({ layoutMeasurement, contentOffset, contentSize }: NativeScrollEvent) => boolean;
    canMomentum: boolean;
    yAxisAtTop: boolean;
    yAxisThickness: any;
    yAxisSide: any;
    showVerticalLines: any;
    verticalLinesProps: {
        verticalLinesAr: number[];
        verticalLinesSpacing: any;
        spacing: any;
        initialSpacing: number;
        verticalLinesZIndex: any;
        verticalLinesHeight: any;
        verticalLinesThickness: any;
        verticalLinesColor: any;
        verticalLinesStrokeDashArray: any;
        verticalLinesShift: any;
        verticalLinesUptoDataPoint: any;
        verticalLinesStrokeLinecap: any;
        xAxisThickness: number;
        labelsExtraHeight: number;
        containerHeight: number;
        data: any[];
        stackData: any[] | undefined;
        barWidth: number | undefined;
        maxValue: number;
        chartType: import("../../utils/constants").chartTypes;
        containerHeightIncludingBelowXAxis: any;
        yAxisLabelWidth: number;
        totalWidth: number;
        xAxisLabelsVerticalShift: any;
    };
    lineInBarChartProps: LineInBarChartPropsType;
    lineInBarChartProps2: LineInBarChartPropsType;
};
