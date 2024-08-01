import { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator, Text } from 'react-native';
import { Avatar } from '@rneui/themed';
import API from '@/networks/api';

const chunkArray = (arr: any[], chunkSize: number) => {
  if (chunkSize <= 0) throw "Invalid chunk size";
  let result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
};

const CardAvatar: React.FunctionComponent = () => {
  const [selectedAvatarId, setSelectedAvatarId] = useState<number | null>(null);
  const [avatars, setAvatars] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleAvatarPress = (item: any) => {
    setSelectedAvatarId(item.id);
    console.log(`Avatar clicked: ${item.name}`);
  };

  console.log("test");

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const response = await API.AVATAR.GET_ALL();
        console.log("ok", response.data);
      } catch (err) {
        setError('Failed to fetch avatars');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAvatars();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;

  if (error) return <Text style={styles.errorText}>{error}</Text>;

  return (
    <ScrollView style={styles.scrollView}>
      {chunkArray(avatars, 4).map((chunk, chunkIndex) => (
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
                size={59}
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
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  avatarWrapper: {
    paddingHorizontal: 10,
  },
  avatarContainer: {
    borderWidth: 0,
    borderColor: 'transparent',
  },
  selectedAvatar: {
    borderWidth: 2,
    borderColor: 'yellow',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CardAvatar;
