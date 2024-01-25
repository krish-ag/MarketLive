import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Dimensions} from 'react-native'
import Card from "./Card.tsx";

const height = Dimensions.get("window").height - 405;
const icons: { [key: string]: any } = {
  "Gold": require("../src/gold.png"),
  "Gold($)": require("../src/gold.png"),
  "Silver": require("../src/silver.png"),
  "Silver($)": require("../src/silver.png"),
  "USDINR": require("../src/USD.png"),
  "Nifty 50": require("../src/stocks.png"),
  "SENSEX": require("../src/stocks.png"),
};

function Category(props: any) {
  return <>
    <Text style={styles.heading}>{props.category} Rates:</Text>
    {Object.keys(props.data[props.category]).map((key: string, index: number) => {
          const icon = icons[key];
          let sign = "₹ ";
          if (key.includes("($)")) {
            sign = "$ ";
          }

          const data = props.data[props.category][key]
          return (
              <Card key={index} name={key} type={props.category} high={sign + data.high} low={sign + data.low}
                    current={sign + data.INR} color={data.Color}>
                <Image source={icon} style={{height: 48, width: 48}}/>
              </Card>
          );
        }
    )}
  </>;
}

const Cards = (props: any) => {
  return (
      <ScrollView style={styles.container}>
        {props.data &&
            Object.keys(props.data).map((key: string, index: number) => {
                  return <Category key={index} data={props.data} category={key} colors={props.colors}/>;
                }
            )
        }

        {Object.keys(props.data).length === 0 &&
          <Text style={[styles.heading, {textAlign: "center"}]}>Loading...</Text>
        }
        <View style={{height: 150}}/>

      </ScrollView>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: "100%",
    backgroundColor: '#2b2e2e',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#eef2fa',
  },
});

