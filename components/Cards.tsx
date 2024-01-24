import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Dimensions} from 'react-native'
import Card from "./Card.tsx";

const height = Dimensions.get("window").height - 405;

function Category(props: any) {
  return <>
    <Text style={styles.heading}>{props.category} Rates:</Text>
    {Object.keys(props.data[props.category]).map((key: string, index: number) => {
          const icon = (key === "Gold" || key === "Gold MCX") ? require("../src/gold.png") : (key === "Silver" || key === "Silver MCX") ? require("../src/silver.png") : require("../src/USD.png");
          const data = props.data[props.category][key]
          return (
              <Card key={index} name={key} type="Metal" high={"₹ " + data.high} low={"₹ " + data.low}
                    current={"₹ " + data.INR}>
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
                  return <Category key={index} data={props.data} category={key}/>
                }
            )
        }

        {Object.keys(props.data).length === 0 &&
            <Text style={[styles.heading, {textAlign: "center"}]}>Loading...</Text>
        }

        {/*<Category {...props}/>*/}


        {/*<Text style={styles.heading}>Stock Rates:</Text>*/}
        {/*<Card name="Sensex" type="Stock" high="₹ 50,000" low="₹ 40,000" current="₹ 45,000">*/}
        {/*  <Image source={require("../src/silver.png")} style={{height: 48, width: 48}}/>*/}
        {/*</Card>*/}

        {/*<Card name="Nifty 50" type="Stock" high="₹ 50,000" low="₹ 40,000" current="₹ 45,000">*/}
        {/*  <Image source={require("../src/gold.png")} style={{height: 48, width: 48}}/>*/}
        {/*</Card>*/}

        <View style={{height: 100}}/>

      </ScrollView>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: height,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#26364c',
  },
});

