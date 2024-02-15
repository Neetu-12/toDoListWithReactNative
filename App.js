// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
// import {SafeAreaView } from 'react-native-web';
import ToDoScreen from './src/screen/ToDoScreen';

export default function App() {
  return (
    <SafeAreaView >
      <ToDoScreen />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
