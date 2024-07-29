import { useState } from 'react';
import { Button, ScrollView, TextInput, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Avatars from './avatar';

function CreateAva() {
  const inputAccessoryViewID = 'uniqueID';
  const initialText = '';
  const [email, setEmail] = useState(initialText);
  

  const handleClearText = () => {
    setEmail(initialText);
  };

  return (
    <>
    <ImageBackground source={require('@/assets/images/bg-dark.png')} resizeMode='cover' className='flex-1'>
      <View className='m-auto mt-[100%]'>
     
        {/* <Image 
        source={require('../../assets/images/app.png')}
        /> */}
        <Avatars/>
      <ScrollView
        keyboardDismissMode="interactive"
        className='flex m-auto'
      >
        <TextInput
          className='p-4 mt-1 max-w-md text-white border border-white rounded-lg h-[50px] w-[270px] bg-black'
          inputAccessoryViewID={inputAccessoryViewID}
          onChangeText={setEmail}
          value={email}
          placeholder={'Name'}
          placeholderTextColor={'white'}
        
        />
      </ScrollView>
      <View
        className='p-3 py-1 mt-6 max-w-xl text-white rounded rounded-xl w-[300px]'
        nativeID={inputAccessoryViewID}
      >
        <Button onPress={handleClearText} title="Sign In" />
      </View>
      </View>
      </ImageBackground>
    </>
  );
}

export default CreateAva;
