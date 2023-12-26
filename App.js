
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [userDetails, setUserDetails] = useState({
    userName:'',
    email:'',
    phoneNumber:'',
    password:'',
    confirmPass:''
  });

  async function handleLogin(){
    //login validation logic
    try{
      if(
        userDetails.userName === '' ||
        userDetails.email === '' ||
        userDetails.phoneNumber === '' ||
        userDetails.password === '' ||
        userDetails.confirmPass === ''
      )
        throw Error('Please fill all the fields');
      
      if(userDetails.password !== userDetails.confirmPass)
        throw Error('Password and confirm password are not same');

      Alert.alert('Great work', 'Page is running successfully',[
        {
          text:'Cancel',
          onPress: () => '',
          style:'cancel',
        },
        { text:'OK', onPress: () => ''}
      ])
    }catch(error){
      Alert.alert('Something went wrong', error.message, [
        {
          text:'Cancel',
          onPress: () => '',
          style: 'cancel'
        },
        {text:'OK', onPress: () => ''}
      ])
    }
  }

  return (
    <View style ={styles.loginPageContainer}>
        <Text style={styles.title}>USER REGISTER</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='UserName'
            name='userName'
            onChangeText = { (text) =>
              setUserDetails( (prev) => {
                return {...prev, userName:text};
              })
            }
            value={userDetails.userName}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Email'
            name='email'
            onChangeText= { (text) =>
              setUserDetails( (prev) => {
                return {...prev, email:text};
              })
            }
            value={userDetails.email}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Phone Number'
            name='phoneNumber'
            onChangeText={(text) => 
              setUserDetails((prev) => {
                return {...prev, phoneNumber:text};
              })
            }
            value={userDetails.phoneNumber}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Password'
            secureTextEntry={true}
            name='password'
            onChangeText={(text) => 
              setUserDetails((prev) => {
                return {...prev, password:text};
              })
            }
            value={userDetails.password}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Confirm Password'
            secureTextEntry={true}
            name='confirmPass'
            onChangeText={(text) => 
              setUserDetails((prev) => {
                return {...prev, confirmPass:text};
              })
            }
            value={userDetails.confirmPass}
          />
        </View>
        <Button onPress={handleLogin} title='Register' color="#0F52BA"/>
    </View>
  );
}

const styles = StyleSheet.create({
  loginPageContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    rowGap: 30,
  },
  title: {
   fontSize:24,
   fontWeight:'bold'
  },
  inputContainer:{
    width: 300,
    height: 40,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  input:{
    height:40,
    padding:10,
    fontSize:16
  }
});
