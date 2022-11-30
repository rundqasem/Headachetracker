import {React,useState,useMemo} from 'react';
import {View, Text, Image,StyleSheet,useWindowDimensions,ScrollView,SafeAreaView} from 'react-native';
import Logo from '../../../Assests/images/Logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButtons from '../../components/CustomButtons';
import {NavigationContainer, TabActions, useNavigation} from '@react-navigation/native';
import { CalendarList } from 'react-native-calendars';
import { Calendar } from 'react-native-calendars';
import {DatePicker} from "react-native-common-date-picker";
import { Modal } from 'react-native';
import SignInScreen from '../SignInScreen/SignInScreen';
import MedicationScreen from '../MedicationScreen/MedicationScreen';
const CalenderScreen = () => {
 const navigation = useNavigation();
 const {height} = useWindowDimensions();
 const [selectedDate, setSelectedDate] = useState(
  new Date().toISOString().split('T')[0],
 );
const onMedicationPress =() =>{
  navigation.navigate('Medication');
}
 
 
  return (
     <SafeAreaView style={styles.container}>
     
      <CalendarList
      
        pastScrollRange={50}
        futureScrollRange={50}
        scrollEnabled={true}
        showScrollIndicator={false}
        onDayPress={
          (day) => setSelectedDate({[day.dateString]:{selected: true,
              selectedColor: 'blue', marked:true}})
          }
          onDaySelected={
            (day)=>console.log('Selected date: ', day.dateString)
          }
        markedDates={selectedDate}
        />
      <CustomButtons text="Medication" onPress={onMedicationPress} type = "container_SECONDARY"/>
      
     </SafeAreaView>
 )
}
const styles = StyleSheet.create({
 container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
})
export default CalenderScreen

