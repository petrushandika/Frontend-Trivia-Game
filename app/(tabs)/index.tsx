import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

function App() {
  const [text, setText] = useState('');

  return (
    <View className="flex-1 justify-center p-4">
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Type something here..."
        className="h-10 border border-gray-400 p-2"
      />
    </View>
  );
}

export default App;
