import {React, useState,useMemo} from 'react';
import {View, Text, Image,StyleSheet,useWindowDimensions,ScrollView,Alert} from 'react-native';
import Logo from '../../../Assests/images/Logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButtons from '../../components/CustomButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import { Auth } from 'aws-amplify';



const SignInScreen = () => {
    const navigation = useNavigation();
    const {height} = useWindowDimensions();
    const[loading,setLoading] = useState(false);

    const {
        control,
        handleSubmit,
        formState: {errors},
      } = useForm();
    
      const onSignInPressed = async data => {
        if (loading) {
          return;
        }
    
        setLoading(true);
        try {
          const response = await Auth.signIn(data.username, data.password);
          console.log(response);
          navigation.navigate('Calender');
        } catch (e) {
          Alert.alert('Oops', e.message);
        }
        setLoading(false);
      };
    

   
    const onSignUpPressed =() =>{
        navigation.navigate('SignUp');
    }
    const onForgotPress =() =>{
        navigation.navigate('ForgotPassword');
    }
    



    return (
        <ScrollView>
        <View style={styles.root}>
            <Image source={Logo} style={[styles.logo,{height:height*0.3}]} resizeMethod="contain"/>
            <CustomInput name="username" placeholder="Username" control={control} />
            <CustomInput name="password" placeholder="Password" control={control}  secureTextEntry={true}/>
            <CustomButtons text={loading ? "Loading...": "Sign In"} onPress={handleSubmit(onSignInPressed)} type = "container_PRIMARY"/>
            <CustomButtons text="Forgot Password?" onPress={onForgotPress} type = 'container_TERTIARY'/>
            <CustomButtons text="Don't have an account? Create One" onPress={onSignUpPressed} type = 'container_TERTIARY'/>
            

        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
    },
    logo:{
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    }

})

export default SignInScreen