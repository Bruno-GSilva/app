import { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';

export default function App() {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [exibir, setExibir] = useState(' ')

  const handleLogin = () => {
    login === 'adm' && password === 'adm'? setExibir(`Olá, ${login}!`) : setExibir(`Login Invalido`)
  }
  
  return (
    <View className='w-full h-screen bg-slate-700 justify-center items-center backdrop-blur-3xl'>
        <View className='h-96 p-10 justify-around items-center rounded-2xl scale-105 border-2 border-yellow-700 bg-black'>
          <View>
            <Text className="z-10 font-extrabold text-xl text-white mb-1">Faça Seu Login</Text>
            <Text className="z-10 font-extrabold text-xl text-yellow-700 mb-1" >Login</Text>
            <TextInput className='w-52 border-2 px-2 text-white border-white rounded-md' value={login} onChangeText={setLogin}/>
            <Text className="z-10 font-extrabold text-xl text-yellow-700 mb-1">Password</Text>
            <TextInput className='w-52 border-2 px-2 text-white border-white rounded-md' value={password} onChangeText={setPassword}/>
          </View>
          <Pressable onPress={handleLogin} className='w-32 h-10 justify-center items-center border-2 border-yellow-700 rounded-md active:bg-yellow-700'><Text className='text-white'>Entrar</Text></Pressable>
        </View>
        <Text className='text-white text-3xl mt-10'>{exibir}</Text>
      </View>
  );
}
