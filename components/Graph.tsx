import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {
  LineChart,
} from "react-native-chart-kit";
import {Dimensions} from "react-native";
import {LineChartData} from "react-native-chart-kit/dist/line-chart/LineChart";


const Graph = () => {
      const screenWidth = Dimensions.get("window").width;
      const data: LineChartData = {
        labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
        datasets: [
          {
            data: [38.3, 35.2, 41.9, 38.3, 40.2, 47.1],
            color: (opacity = 1) => "#87c09c"
          }
        ],
        legend: ["SILVER"]
      };
      const chartConfig = {
      backgroundColor: "#000000",
      backgroundGradientFrom: "#000000",
      backgroundGradientTo: "#000000",
      propsForBackgroundLines: {
        display: 'none'
      },

      color: (opacity = 1) => "#eff3fb",
      };

      return (
          <View style={styles.container}>
            <LineChart
                data={data}
                width={screenWidth}
                height={256}
                chartConfig={chartConfig}
                withInnerLines={false}
                withShadow={false}
                getDotColor={() => '#87c09c'}
                yAxisSuffix={'K'}
                yAxisLabel={'₹'}
                bezier
            />
          </View>
      );
    };

export default Graph;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom: 20,
    // justifyContent: 'center',
  },
});
