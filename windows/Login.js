import React, { useState }               from 'react';
import { View, Text, TextInput, Button}  from 'react-native';
import Svg, { Circle }                   from 'react-native-svg';
import { styles }                        from '../styles/LoginStyle';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validación de inicio de sesión simple. 
    if (username === 'usuario' && password === 'contrasena') {
      navigation.navigate('Home');
    } else {
      alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  const bio =() =>{
    navigation.navigate("Biometric");
  };

  return (
    <View style={styles.container}> 
      {/*conteiner  */}
      <View style={styles.firstModule}> 
        {/* primer modulo */}
        <Svg height="130" width="120%">
          <Circle cx="60" cy="60" r="60" fill="blue" />
          <Circle cx="50" cy="50" r="40" fill="red" />
        </Svg>
      </View>
      

      <View style={styles.secontModule}> 
         {/* Segundo modulo  */}
        <Text style={styles.text}>Iniciar Sesión</Text>
        <TextInput
        style ={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
       />
        <TextInput
        style ={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry 
       />
       <View style={styles.innerModule}> 
         {/* modulo interno  */}
          <View > 
             <Button  title="Iniciar Sesión" onPress={handleLogin} />
           </View>
           <View >
             <Button  title="Iniciar Con Huella" onPress={bio} />
           </View>
        </View>
      </View>
      <View style={styles.thirdModule}>
        {/*tercer modulo  */}
      </View>
     </View> //fin del conteiner 

  );
}

