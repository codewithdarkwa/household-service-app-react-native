import { StatusBar } from 'expo-status-bar';
import {SafeAreaView,View,Text, ScrollView} from 'react-native';
import AppBar from './components/appbar';
import DropdownMenu from './components/dropdown';
import { Input,Icon, Button, Divider } from 'react-native-elements';
import JobDetail from './components/job_detail';
import BottomTabs from './components/bottom_tabs';

export default function App() {
  
  return (
    <SafeAreaView style={{backgroundColor:'#F4F6FA',flex:1,marginTop:30}}>
      <StatusBar style="auto" />
       <AppBar />
       <DropdownMenu />
       <Input 
        inputContainerStyle={{ 
          borderColor: 'white', 
          borderRadius: 10,
          backgroundColor:'white'
        }}
       leftIcon={<Icon name='location-outline' type='ionicon' color="grey" size={20} />}
       placeholder = 'Location'
       placeholderTextColor="grey"
       />
       <View style={{alignSelf:'center'}}>
        <Button
      title="Search Job"
      buttonStyle={{
        width:380,
        padding:10,
        backgroundColor: '#529A69',
        borderRadius: 5,
      }}
    />
       </View>
   
   <View style={{margin:10,backgroundColor:'white',flex:1,borderTopRightRadius:20,borderTopLeftRadius:20,marginTop:30}}>
    <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', margin:17}}>
      <Text style={{color:'grey',fontSize:18}}>Search Result</Text>
      <Text style={{color:'#85D6B3',fontSize:17}}>See all</Text>
    </View>
    <ScrollView>
      <JobDetail />
      <JobDetail />
      <JobDetail />
    </ScrollView>
      <Divider width={1}/>
      <BottomTabs/>
   </View>
    </SafeAreaView>
  );
}

