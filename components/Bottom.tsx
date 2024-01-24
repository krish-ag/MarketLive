import React from 'react';
import {View, Text, StyleSheet, Dimensions, Linking, TouchableOpacity} from 'react-native'

const Bottom = () => {
  return (
      <View style={styles.container}>
        <Text style={{color: "#f3df99"}}>VDA Jewellers</Text>
        <TouchableOpacity onPress={() => Linking.openURL("tel:8279469393")}><Text style={{color: "#f3df99"}}>Phone: +91 8279469393</Text></TouchableOpacity>
      </View>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    position: "absolute",
    top: Dimensions.get("window").height - 25,
    width: "100%",
    height: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
  }
});
