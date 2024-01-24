

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Graph from "./components/Graph.tsx";
import Cards from "./components/Cards.tsx";
import axios from 'axios';


function App(): React.JSX.Element {
  const [data, setData] = React.useState({metal: {}, stock: {}});

  const getPrice = async () => {
    const response = await axios.get('http://localhost:8000/stock');
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

      <Graph/>
      <Cards data={data}/>

    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
