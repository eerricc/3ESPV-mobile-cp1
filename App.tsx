import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Switch, Button } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const onLogin = () => {
    alert(`Email: ${email}\nSenha: ${password}\nLembrar: ${remember ? 'Sim' : 'Não'}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={require('./assets/banner.jpg')} style={styles.image} />
      </View>

      <Text style={styles.title}>Login</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="seu@email.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <Button title="Esqueci a Senha" onPress={() => alert('Funcionalidade de recuperação de senha não implementada.')} />
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.switchLabel}>Lembrar de Mim</Text>
        <Switch value={remember} onValueChange={setRemember} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Entrar" onPress={onLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  imageWrapper: {
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // Android shadow
    elevation: 5,
    marginBottom: 16,
    borderRadius: 12,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 12,
    // ensure the image corners are clipped inside the wrapper
    overflow: 'hidden',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 12,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 14,
    color: '#333',
    marginTop: 8,
    marginBottom: 4,
  },
  input: {
    width: '100%',
    height: 44,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    paddingHorizontal: 12,
    backgroundColor: '#fafafa',
  },
  switchRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  switchLabel: {
    fontSize: 16,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 16,
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginTop: 8,
    marginBottom: 12,
  },
});
