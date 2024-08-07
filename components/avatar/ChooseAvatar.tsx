import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Avatar } from '@rneui/themed';
import API from '@/networks/api';
import { AvatarDto } from '@/dto/AvatarDto';
import { FieldApi } from '@tanstack/react-form';

const chunkArray = (arr: AvatarDto[], chunkSize: number): AvatarDto[][] => {
  if (chunkSize <= 0) throw "Invalid chunk size";
  const R: AvatarDto[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize)
    R.push(arr.slice(i, i + chunkSize));
  return R;
};

const ChooseAvatar = ({field, navigation} : {field: FieldApi<any,any>, navigation: any}) => {
  const [avatars, setAvatars] = useState<AvatarDto[]>([]);
  const [selectedAvatarId, setSelectedAvatarId] = useState<number | null>(null);

  const handleAvatarPress = (item: AvatarDto) => {
    setSelectedAvatarId(item.id);
    field.handleChange(item.id)
    console.log(`Avatar clicked: ${item.id}`);
  };

  useEffect(() => {
    // const isUserHaveUsername  = true

    // if(isUserHaveUsername) {
    //   navigation.navigate("Home")
    // }

    async function GET_AVATAR() {
      try {
        const response = await API.AVATAR.GET_ALL_AVATAR();
        if (response && Array.isArray(response)) {
          setAvatars(response);
        } else {
          console.error('Data format error:', response);
        }
      } catch (error) {
        console.error('Error fetching avatars:', error);
        alert('There was a problem fetching the avatars. Please try again later.');
      }
    }
    GET_AVATAR();
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      {chunkArray(avatars, 4).map((chunk, chunkIndex) => (
        <View style={styles.row} key={chunkIndex}>
          {chunk.map((item, i) => (
            <TouchableOpacity
              key={`${chunkIndex}-${i}`}
              onPress={() => handleAvatarPress(item)}
              activeOpacity={0.6}
              style={styles.avatarWrapper}
            >
              <View className='bg-white rounded-full'>
                <Avatar
                  size={72}
                  rounded
                  source={item.image ? { uri: item.image } : {}}
                  containerStyle={[
                    styles.avatarContainer,
                    selectedAvatarId === item.id && styles.selectedAvatar
                  ]}
                />
                {item.isPremium && (
                  <Text style={styles.premiumLabel}>Premium</Text>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  avatarWrapper: {
    paddingHorizontal: 5,
    position: 'relative',
  },
  avatarContainer: {
    borderWidth: 0,
    borderColor: 'transparent',
  },
  selectedAvatar: {
    borderWidth: 2,
    borderColor: 'yellow',
  },
  premiumLabel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: 'white',
    padding: 4,
    borderRadius: 4,
    fontSize: 10,
    textAlign: 'center',
  },
});

export default ChooseAvatar;
