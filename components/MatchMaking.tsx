import { useEffect, useState } from 'react';
import { joinQueue, leaveRoom, onMatchFound, onRoomFull, onUserLeft } from '../services/socketService';
import { Button } from 'react-native-elements';
import { View } from 'react-native';

export default function MatchMaking() {
    const [roomId, setRoomId] = useState<string | null>(null);

    useEffect(() => {
        onMatchFound(({ roomId, userId }) => {
            console.log(`Match found! Room ID: ${roomId}, User ID: ${userId}`);
            setRoomId(roomId);
        });

        onRoomFull((roomId) => {
            console.log(`Room ${roomId} is full.`);
        });

        onUserLeft((userId) => {
            console.log(`User ${userId} left the room.`);
        });

        return () => {
            leaveRoom();
        };
    }, []);

    const handleJoinQueue = () => {
        joinQueue();
    };

    const handleLeaveRoom = () => {
        leaveRoom();
        setRoomId(null);
    };

    return (
        <View className='h-full justify-center items-center'>
            <Button
                title="Join Queue"
                onPress={handleJoinQueue}
            />
            {roomId &&
                <Button
                    title="Leave Room"
                    onPress={handleLeaveRoom}
                />
            }
        </View>
    );
}

