import { useEffect, useState } from 'react';
import { View, Text, Alert, Button, StyleSheet } from 'react-native';
import io from 'socket.io-client';

const socket = io('https://fbc5-2404-8000-1005-a6b5-b8c3-2981-fa0a-2aa5.ngrok-free.app/', {
    transports: ['websocket'],
});

export default function TestingScreen() {
    const [userId, setUserId] = useState('');
    const [roomId, setRoomId] = useState('');

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected to server');
            const id = 'user-' + Math.random();
            setUserId(id);
            socket.emit('findMatch', id);
        });

        socket.on('matchFound', ({ roomId, userId }) => {
            setRoomId(roomId);
            console.log(`Match found: Room ID ${roomId}, User ID ${userId}`);
            Alert.alert('Match Found', `Room ID: ${roomId}\nYour User ID: ${userId}`);
        });

        socket.on('roomFull', (roomId) => {
            console.log(`Room ${roomId} is full`);
            Alert.alert('Room Full', `Room ${roomId} is full`);
        });

        socket.on('userLeft', (userId) => {
            console.log(`User ${userId} left the room`);
            Alert.alert('User Left', `User ${userId} left the room`);
        });

        return () => {
            socket.off('connect');
            socket.off('matchFound');
            socket.off('roomFull');
            socket.off('userLeft');
        };
    }, []);

    const handleFindMatch = () => {
        if (!userId) {
            console.log('User ID not set');
            return;
        }
        console.log('Finding match...');
        socket.emit('findMatch', { userId: Date.now() });
    };

    return (
        <View className='flex justify-center items-center my-auto'>
            <Text>Testing Screen</Text>
            <Text>Your User ID: {userId}</Text>
            <Text>Room ID: {roomId}</Text>
            <Button title="Find Match" onPress={handleFindMatch} />
        </View>
    );
}

