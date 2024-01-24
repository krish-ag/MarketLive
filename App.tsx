import React, {useEffect} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Graph from "./components/Graph.tsx";
import Cards from "./components/Cards.tsx";
import axios from 'axios';
import Bottom from "./components/Bottom.tsx";


function App(): React.JSX.Element {
  const [data, setData] = React.useState({});
  const [colors, setColors] = React.useState({});
  const getPrice = async (pass: any) => {
    const response = await axios.get('http://3.109.185.139/stock');
    if (response.status !== 200) {
      throw new Error('Invalid response status');
    }
    const newData = await response.data;
    setData(newData);

    if (pass && pass.a) {
      const newColors = {};
      Object.keys(newData).forEach((category: string) => {
        Object.keys(newData[category]).forEach((key: string) => {
          // @ts-ignore
          newColors[key] = "#000";
        });
      });
      setColors(newColors);

    } else {
      const newColors = {};
      Object.keys(newData).forEach((category: string) => {
        Object.keys(newData[category]).forEach((key: string) => {
          // @ts-ignore
          if (newData[category][key].INR > data[category][key].INR) {
            // @ts-ignore
            newColors[key] = "#00d600";
          }
          // @ts-ignore
          else if (newData[category][key].INR < data[category][key].INR) {
            // @ts-ignore
            newColors[key] = "#ff0000";
          } else {
            // @ts-ignore
            newColors[key] = "#000";
          }
        });
      });
      if (JSON.stringify(colors) !== JSON.stringify(newColors)) {
        setColors(newColors);
      }
    }

  }

  useEffect(() => {
    getPrice({a: true});
    const id = setInterval(getPrice, 1000);
    return () => {
      clearInterval(id);
    }
  }, []);

// useEffect(() => {
//   console.log(colors)
// }, [colors]);


  const isDarkMode = false;

  const backgroundStyle = {
    backgroundColor: '#eff3fb',
  };

  return (
      <View style={backgroundStyle}>
        <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
        />

        <Image source={require("./src/VDA.jpg")} style={{resizeMode: "stretch", width: "100%", height: 100}}/>
        <Graph/>
        <Cards data={data} colors={colors}/>
        <Bottom/>

      </View>
  );
}

const styles = StyleSheet.create({});

export default App;
