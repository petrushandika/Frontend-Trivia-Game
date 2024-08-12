interface Answer {
  content: string;
  isCorrect: boolean;
}

import { io, Socket } from "socket.io-client";
import CONFIG from "@/config/config";

const socket: Socket = io(CONFIG.BASE_URL, {
  reconnection: false,
});

export const joinQueue = () => {
  socket.emit("joinQueue");
};

export const leaveRoom = () => {
  socket.emit("leaveRoom");
};

export const requestQuestion = (questionIndex: number) => {
  socket.emit("requestQuestion", questionIndex);
};

export const submitAnswer = (data: {
  questionIndex: number;
  answerIndex: number;
  isCorrect: boolean;
}) => {
  socket.emit("submitAnswer", data);
};

export const timeout = () => {
  socket.emit("timeout");
};

export const onQuestionData = (
  callback: (data: { content: string; answer: Answer[] }) => void
) => {
  socket.on("questionData", callback);
};

export const onQuestionTimeout = (callback: () => void) => {
  socket.on("questionTimeout", callback);
};

export const onError = (callback: (error: Error) => void) => {
  socket.on("error", callback);
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
