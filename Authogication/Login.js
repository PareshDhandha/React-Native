import { StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Text } from "react-native-paper";
import Button from "../Component/Button";
import TextInput from "../Component/TextInput";
import Logo from "../Component/Logo";
import { EmailValidation } from "../Helper/EmailValidation";
import { PasswordValidation } from "../Helper/PasswordValidation";
import { theme } from "../Core/theme";
import { useNavigation } from "@react-navigation/native";

const API = 'https://fakestoreapi.com/auth/login'
const Login = () => {
  const [email, setEmail] = useState({ value: "", email: "" });
  const [password, setPassword] = useState({ value: "", password: "" });
  const navigation = useNavigation();
  const onLoginPressed = () => {
    const emailError = EmailValidation(email.value)
    const passwordError = PasswordValidation(password.value)
    if(emailError || passwordError) {
      setEmail({...email , error: emailError })
      setPassword({...password , error: passwordError})
      return
    }
    navigation.navigate('Product')
  }

  const getUser = async() => {
      const user = await fetch(API , {
        method: 'POST',
        body:JSON.stringify({
          email:  "mor_2314",
          password:  "83r5^_"
        })
      })
      const res = user.json();
      console.log('user....',res);
  }

  useEffect(() => {
    getUser();
  },[])
  return (
    <View style = {styles.container}>
      <Logo />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, email: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Passwoed"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, password: "" })}
        error={!!password.error}
        errorText={!!password.error}
        secureTextEntry
        />
      <View style = {styles.forgetpassword}>
        <TouchableOpacity>
          <Text style = {styles.forget}>Forget your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress = {onLoginPressed}>Login</Button>
      <View style = {styles.row}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.replace('Registration')}>
          <Text style = {styles.link}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginLeft:5,
  },
  forgetpassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 34,
  },
  forget: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  container: {
    position:'absolute',
    top: 200,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
