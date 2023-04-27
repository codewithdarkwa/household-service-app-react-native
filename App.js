import { StatusBar } from 'expo-status-bar';
import {SafeAreaView} from 'react-native';
import AppBar from './components/appbar';
import DropdownMenu from './components/dropdown';


export default function App() {
  
  return (
    <SafeAreaView style={{backgroundColor:'#F4F6FA',flex:1}}>
      <StatusBar style="auto" />
       <AppBar />
       <DropdownMenu />
    </SafeAreaView>
  );
}

