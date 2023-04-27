import {View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import { Icon } from 'react-native-elements';

export default function DropdownMenu(){
    const countries = ["Home Cleaning", "Handyman", "Painter", "Trim the grass"] 
    return (
        <View style={{alignSelf:'center', paddingVertical:10}}>
            <SelectDropdown
              data={countries}
              defaultButtonText='Choose job category'
              buttonStyle={{width:'94%',backgroundColor:'white',borderRadius:10}}
              buttonTextStyle={{color:'grey',textAlign:'left'}}
              renderDropdownIcon = {()=> <Icon type='font-awesome' name='chevron-down' size={16} color='grey'/>}
            />
       </View>
    )
}