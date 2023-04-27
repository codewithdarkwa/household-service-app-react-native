
import { StyleSheet, Text, View } from 'react-native';
import {Ionicons} from 'react-native-vector-icons'
import { Badge } from 'react-native-elements';

export default function AppBar(){
    return (
          <View style={styles.appbar}>
            {/* Greetings and name */}
            <View>
              <Text style={{color:'grey'}}>Good Morning</Text>
              <Text style={{fontSize:18,fontWeight:'bold'}}>John Ramadhani</Text>
            </View>
            {/* ratings and notification */}
       <View style={{
                flexDirection:'row', 
                alignItems:'center',
                paddingHorizontal:10,
                }}>
              <View style={styles.rating}>
                  <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                     <Ionicons name='star' color='#F99A0E' size={20} />
                  <View style={{width:5}}/>
                <Text>4.89</Text>
             </View>
         </View>
      <View>
           <Ionicons
              style={{backgroundColor:'white',padding:6,}} 
              name = 'notifications-outline' 
              size={22}/>
           <Badge status="error" value={3} containerStyle={{ position: 'absolute', top: -4, right: -4, }} />
      </View>
            </View>
          </View>
      );
}


const styles = StyleSheet.create({
    appbar:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      margin:15
    },
    rating:{
      backgroundColor: 'white', 
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10,
      paddingHorizontal:20,
      paddingVertical:10,
      margin:7
      },
  });