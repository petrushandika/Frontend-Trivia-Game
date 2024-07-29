import { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Avatar } from '@rneui/themed';

type AvatarData = {
  image_url: string;
};

const dataList: AvatarData[] = [
  {
    image_url: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg',
  },
  {
    image_url: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg',
  },
  {
    image_url:
      'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png',
  },
  {
    image_url:
      'https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722211200&semt=sph',
  },
  {
    image_url:
      'https://img.freepik.com/free-psd/3d-illustration-person-with-pink-hair_23-2149436186.jpg',
  },
  {
    image_url:
      'https://img.freepik.com/free-psd/3d-illustration-person_23-2149436182.jpg',
  },
  {
    image_url: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg',
  },
  {
    image_url: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg',
  },
  {
    image_url:
      'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png',
  },
  {
    image_url:
      'https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722211200&semt=sph',
  },
  {
    image_url:
      'https://img.freepik.com/free-psd/3d-illustration-person-with-pink-hair_23-2149436186.jpg',
  },
  {
    image_url:
      'https://img.freepik.com/free-psd/3d-illustration-person_23-2149436182.jpg',
  },
];

type AvatarComponentProps = {};

// Definisi fungsi chunk di luar komponen
const chunkArray = (arr: any[], chunkSize: number) => {
  if (chunkSize <= 0) throw "Invalid chunk size";
  var R = [];
  for (var i = 0; i < arr.length; i += chunkSize)
      R.push(arr.slice(i, i + chunkSize));
  return R;
};

const Avatars: React.FunctionComponent<AvatarComponentProps> = () => {
  return (
    <>
      <ScrollView>
        {chunkArray(dataList, 4).map((chunk, chunkIndex) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 30,
            }}
            key={chunkIndex}
          >
            {chunk.map((l, i) => (
              <Avatar
                size={55}
                rounded
                source={l.image_url ? { uri: l.image_url } : {}}
                key={`${chunkIndex}-${i}`}
              />
            ))}
          </View>
        ))}
  
         
        </ScrollView>  
    </>
  );
};

export default Avatars;
