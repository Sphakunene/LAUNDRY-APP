import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screen/HomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <HomeScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:20,

  },
});
