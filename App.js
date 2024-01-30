import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const addToList = () => {
    setData([...data, { key: text }]);
    setText('');
  }

  const clearList= () => {
    setData([]);
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} />
      <View style={styles.napit}>
        <Button onPress={addToList} title="Add" />
        <Button onPress={clearList} title="Clear" />
      </View>
      <Text style={styles.teksti}>Shopping List</Text>
      <FlatList style={styles.list}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item.key}</Text>
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  },
  napit: {
    marginTop: 30,
    flexDirection:'row', 
    margin: 5,
    width: 100,
    justifyContent:'space-between',
  },
  teksti:{
    marginTop: 30,
    color: "blue",
    fontSize: 18,
  }
});
