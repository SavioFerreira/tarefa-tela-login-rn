import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [savePassword, setSavePassword] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>App DDM Unigoiás</Text>  
        <Text style={styles.subTitle}>Prof. Sandro TC</Text>
        <Text style={styles.titleLogin}> Fazer Login</Text> 
      </View>  
      <TextInput style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <View style={styles.subContainer}>
        <TextInput style={styles.input}
          placeholder="Password"
          secureTextEntry={!showPassword}
          onChangeText={text => setPassword(text)}
          value={password}
        />
          <TouchableOpacity style={styles.subContainer} onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} />
          </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity style={styles.subContainer} onPress={() => setSavePassword(!savePassword)}>
            <Icon name={savePassword ? 'check-square-o' : 'square-o'} size={20} />
          </TouchableOpacity>
          <Text style={styles.salvarSenha}>Salvar senha</Text>
        </View>
      <TouchableOpacity style={styles.button} onPress={() => console.log(email, password)}>
        <Text style={styles.textButton} >Login</Text>
      </TouchableOpacity>  
    </View>
  );
};

