import {View,Text,TouchableOpacity} from 'react-native'
import {Icon} from 'react-native-elements'

export default function BottomTabs(){
 
    const icons =[
        {
            icon:'home',
            text:'Home',
            color:"green"
        },
        {
            icon:'today',
            text:'calender',
            color:"grey"
        },
        {
            icon:'bookmark-outline',
            text:'Job saved',
            color:"grey"
        },
        {
            icon:'person-outline',
            text:'Profile',
            color:"grey"
        },
   
  ]

    return(
        <View style={{flexDirection:"row",margin:10,marginHorizontal:30,justifyContent:'space-between',}}>
        {icons.map((icon,i)=>(
            <Icons key={i} {...icon}/>
        ))}
        </View>
    )
}

const Icons = ({icon,text,color})=>(
    <TouchableOpacity>
    <View>
        <Icon type={'ionicons'} color={color} name={icon} size={25} style={{marginBottom: 3,alignSelf: 'center'}}/>
    <Text>{text}</Text>
    </View>
    </TouchableOpacity>
)