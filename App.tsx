

import React, { useEffect } from 'react';
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
  const getPrice = async () => {
    const response = await axios.get('http://192.168.1.31:80/stock');
    if (response.status !== 200) {
      throw new Error('Invalid response status');
    }
    const data = await response.data;
    setData(data);
  }

  useEffect(() => {
    getPrice();
    const id = setInterval(getPrice, 1000);
    return () => {
      clearInterval(id);
    }
  }, []);

  useEffect(() => {
  }, [data]);


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
      <Cards data={data}/>
      <Bottom/>

    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
