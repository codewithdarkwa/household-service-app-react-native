import { StatusBar } from 'expo-status-bar';
import {SafeAreaView} from 'react-native';
import AppBar from './components/header';

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor:'#F4F6FA',flex:1}}>
      <StatusBar style="auto" />
       <AppBar />
    </SafeAreaView>
  );
}

