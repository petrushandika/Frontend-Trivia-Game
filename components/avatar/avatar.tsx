import { useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from '@rneui/themed';
import datas from '@/data/data.json';

const chunkArray = (arr: any[], chunkSize: number) => {
  if (chunkSize <= 0) throw "Invalid chunk size";
  var R = [];
  for (var i = 0; i < arr.length; i += chunkSize)
      R.push(arr.slice(i, i + chunkSize));
  return R;
};

const Avatars: React.FunctionComponent = () => {
  const [selectedAvatarId, setSelectedAvatarId] = useState<number | null>(null);

  const handleAvatarPress = (item: any) => {
    setSelectedAvatarId(item.id);
    console.log(`Avatar clicked: ${item.name}`);
  };

  return (
    <ScrollView style={styles.scrollView}>
      {chunkArray(datas, 4).map((chunk, chunkIndex) => (
        <View
          style={styles.row}
          key={chunkIndex}
        >
          {chunk.map((item, i) => (
            <TouchableOpacity
              key={`${chunkIndex}-${i}`}
              onPress={() => handleAvatarPress(item)}
              activeOpacity={0.6}
              style={styles.avatarWrapper}
            >
              <Avatar
                size={53}
                rounded
                source={item.image ? { uri: item.image } : {}}
                containerStyle={[
                  styles.avatarContainer,
                  selectedAvatarId === item.id && styles.selectedAvatar
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  avatarWrapper: {
    padding: 5,
  },
  avatarContainer: {
    borderWidth: 0,
    borderColor: 'transparent',
  },
  selectedAvatar: {
    borderWidth: 2,
    borderColor: 'yellow',
  },
});

export default Avatars;
