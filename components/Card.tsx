import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';


const Card = (props: any) => {
  const [color, setColor] = React.useState("#dfe1e5");
  React.useEffect(() => {
    if (props.color) {
      setColor(props.color);
      setTimeout(() => {
        setColor("#dfe1e5");
      }, 500);
    }
  }, [props.color]);

  return (
      <TouchableOpacity style={styles.card}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {props.children}
          <View style={{marginLeft: 20}}>
            <Text style={styles.name}>{props.name.toUpperCase()}</Text>
            <Text style={styles.type}>{props.type.toUpperCase()}</Text>
          </View>
        </View>

        <View style={styles.highLow}>
          <Text style={styles.high}>
            {props.high}
            {' '}
            <AntDesign
                name="caretup"
                size={12}
                color="#00d600"
            />
          </Text>
          <Text style={styles.low}>
            {props.low}
            {' '}
            <AntDesign
                name="caretdown"
                size={12}
                color="#ff0000"
            />
          </Text>
        </View>

        <View style={styles.current}>
          <Text style={[styles.currentText, {color}]}>{props.current}</Text>
        </View>

      </TouchableOpacity>
  )
      ;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#43454a',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    height: 80,
    marginBottom: 20,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#dfe1e5',
  },
  type: {
    fontSize: 14,
    color: '#8e909b',
  },
  highLow: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'center',
  },
  high: {
    fontSize: 12,
    marginBottom: 5,
    color: '#00d600',
  },
  low: {
    fontSize: 12,
    color: '#ff0000',
  },
  current: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  currentText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#26364c',
  },
});
