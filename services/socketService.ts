import { io, Socket } from "socket.io-client";
import CONFIG from "@/config/config";

const socket: Socket = io(CONFIG.BASE_URL);

export const joinQueue = () => {
  socket.emit("joinQueue");
};

export const leaveRoom = () => {
  socket.emit("leaveRoom");
};

export const onMatchFound = (
  callback: (data: { roomId: string; userId: string }) => void
) => {
  socket.on("matchFound", callback);
};

export const onRoomFull = (callback: (roomId: string) => void) => {
  socket.on("roomFull", callback);
};

export const onUserLeft = (callback: (userId: string) => void) => {
  socket.on("userLeft", callback);
};

export default socket;
