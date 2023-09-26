import React, { useState } from 'react';
import { View, StyleSheet, TextInput, ImageBackground, StatusBar, Image, TouchableOpacity, Text, Alert } from 'react-native';
import { firebase } from '../config';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const image = { uri: 'https://img.freepik.com/free-photo/purple-wallpaper-with-colorful-background-purple-background_1340-27517.jpg' }
  const handleLogin = () => {
    firebase
      .firestore()
      .collection('Users')
      .where('username', '==', username)
      .where('password', '==', password)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          Alert.alert(`Đăng nhập thành công\nXin chào ${username} password: ${password}`);
        }
        else {
          Alert.alert('Đăng nhập thất bại');
        }
      })
      .catch((error) => {
        console.error('Lỗi kiểm tra tài khoản', error);
      });
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#fff" translucent={true} />
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={image}
        blurRadius={3}>
        <Image
          style={{ height: 300, width: '90%', alignSelf: 'center', marginBottom: 20, borderRadius: 10 }}
          resizeMode='cover'
          source={{ uri: 'https://wallpaperaccess.com/full/3395871.jpg' }} />
        <TextInput
          style={styles.textinput}
          value={username}
          onChangeText={setUsername}
          placeholder='username' />
        <TextInput
          style={{ ...styles.textinput, marginVertical: 10 }}
          value={password}
          onChangeText={setPassword}
          placeholder='password'
          secureTextEntry />
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}>
          <Text style={{
            fontSize: 18,
            color: 'white',
            fontWeight: 'bold',
            textDecorationLine: 'none',
          }}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
      </ImageBackground>

    </View>

  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textinput: {
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
    color: 'black',
    height: 50,
    width: '93%',
    marginHorizontal: 20,
    fontSize: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 200,
  },
  button: {
    height: 50,
    width: '50%',
    backgroundColor: '#12a',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',

  }
})

export default Login;
