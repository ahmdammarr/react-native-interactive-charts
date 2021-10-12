# React Native Interactive Charts
Based on `react-native-svg` and `d3`
## Installation

    yarn add react-native-interactive-charts

or

    npm install react-native-interactive-charts

## Components

### BarChart

```javascript
<BarChart
  data={[
    { label: 'one', value: 100 },
    { label: 'two', value: 200 },
    { label: 'Three', value: 300 },
    { label: 'four', value: 400 },
    { label: 'five', value: 500 },
    { label: 'six', value: 600 },
    { label: 'seven', value: 700 },
    { label: 'eight', value: 800 },
    { label: 'nine', value: 900 },
  ]}
/>
```

| Prop               | Default                                | Description                                                          |
| ------------------ | -------------------------------------- | -------------------------------------------------------------------- |
| `data`             | -                                      | An array of objects that has two members **label** and **value**     |
| `svgBackground`    | -                                      | A svg `ReactElement` that appended as a background to the chart      |
| `svgBackground`    | -                                      | A svg `ReactElement` that appended as a background to the chart      |
| `containerHeight`  | 261.166                                | Chart container height                                               |
| `containerWidth`   | `Dimensions.get('screen').width * 0.9` | Chart container width                                                |
| `graphMargin`      | 14                                     | Fixed graph margin                                                   |
| `barWidth`         | 14                                     | Fixed bar width                                                      |
| `graphGridWidth`   | `Dimensions.get('screen').width / 15`  | Used to calculate the X (labels) axies position                      |
| `axisColor`        | `#fff`                                 | X(labels), Y(values) axis color                                      |
| `barColor`         | `#fff`                                 | Bar color                                                            |
| `labelsColor`      | `#fff`                                 | Labels color                                                         |
| `valuesColor`      | `#fff`                                 | Values color                                                         |
| `selectedBarColor` | `#1a759f`                              | Works if we set `isClickableBars` true                               |
| `selectedBarColor` | false                                  | Make the bar clickable and we can pass a color to `selectedBarColor` |
| `hideLabels`       | false                                  | Hide Labels                                                          |
| `hideLabelsAxis`   | false                                  | Hide (X) Labels Axies                                                |
| `hideValues`       | false                                  | Hide Values                                                          |
| `hideValuesAxis`   | false                                  | Hide (Y) Values Axies                                                |

I'm planing to investing more time in the future and adding more features and graph to the library
