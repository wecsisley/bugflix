import React, {useState, useEffect} from 'react';
import{ 
  View, 
  KeyboardAvoidingView, 
  Image, TextInput, 
  TouchableOpacity, 
  Text, 
  StyleSheet,
  Animated,
  
} from 'react-native';

function Login() {

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x: 130, y: 155}));

  useEffect(() => {
      Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 3,
        bounciness: 20
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
      })
    ]).start();
  }, []);

  return (
    <KeyboardAvoidingView style={styles.backgroud}>
      <View style={styles.containerLogo}>
        <Animated.Image 
        style={{
          width: logo.x,
          height: logo.y,
        }}
        source={require('./src/assets/logo.png')}
        />
      </View>
      <Animated.View 
      style={[
        styles.container,
        {
          opacity: opacity,
          transform: [
            { translateY: offset.y}
          ]
        }
      ]}>
        <TextInput
        style={styles.input}
        placeholder="Email"
        autoCorrect={false}
        onChangeText={()=> {}}
        />
        <TextInput
        style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={()=> {}}
        />

        <TouchableOpacity 
        onPress={() => alert('Clicou !')}
        style={styles.btnSubmit}>
          <Text style={styles.SubmitText}>Acessar</Text >
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.RegisterText}>Criar Conta gratuita</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  backgroud: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919'
  },
containerLogo:{
  flex:1,
  justifyContent: 'center',
},
container:{
  flex:1,
  alignItems: 'center',
  justifyContent: 'center',
  width: '90%',
  paddingBottom: 30,
},
input:{
  backgroundColor: '#fff',
  width: '90%',
  marginBottom: 15,
  color: '#222',
  fontSize: 17,
  borderRadius: 7,
  padding: 10,
},
btnSubmit:{
  backgroundColor: '#35AAFF',
  width: '90%',
  height: 45,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 7
},
SubmitText:{
  color: '#fff',
  fontSize: 18
},
btnRegister: {
  marginTop: 10,
},
RegisterText:{
  color: '#fff'
}
});
export default Login;