import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import Logo from "../Component/Logo";
import TextInput from "../Component/TextInput";
import Button from "../Component/Button";
import { theme } from "../Core/theme";
import { Text } from "react-native-paper";
import { NameValidation } from "../Helper/NameValidatio";
import { EmailValidation } from "../Helper/EmailValidation";
import { PasswordValidation } from "../Helper/PasswordValidation";

const Registation = () => {
  const [email, setEmail] = useState({ value: "", email: "" });
  const [password, setPassword] = useState({ value: "", password: "" });
  const [name, setName] = useState({ value: "", name: "" });

  const onSignPressed = () => {
      const nameError = NameValidation(name.value)
      const emailError = EmailValidation(email.value)
      const passwordError = PasswordValidation(password.value)
      if(emailError || passwordError || nameError){
        setName({...name, error: nameError})
        setEmail({...email , error: emailError})
        setPassword({...password , error: passwordError})
        return
      }
  }

  return (
    <View style = {styles.container}>
      <Logo />
      <TextInput
        label="name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: "" })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autocapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keayboardType="email-address"
      />
      <TextInput
        label = "Password"
        returnKeyType = "done"
        value = {password.value}
        onChangeText = {(text) => setPassword({value: text , error: ''})}
        error = {!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button mode= "contained" onPress = {onSignPressed}>
        Sign up
      </Button>
      <View style = {styles.row}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <Text style = {styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Registation;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
    maxWidth: 340,
    alignItems:'center',
    alignSelf: 'center',
    justifyContent: 'center',
  }
});
