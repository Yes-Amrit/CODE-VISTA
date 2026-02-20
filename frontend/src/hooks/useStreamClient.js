import { useState, useEffect } from "react";
import { StreamChat } from "stream-chat";
import toast from "react-hot-toast";
import { initializeStreamClient, disconnectStreamClient } from "../lib/stream";
import { sessionApi } from "../api/sessions";

function useStreamClient(session, loadingSession, isHost, isParticipant) {
  const [streamClient, setStreamClient] = useState(null);
  const [call, setCall] = useState(null);
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [isInitializingCall, setIsInitializingCall] = useState(true);

  useEffect(() => {
    let isMounted = true; // Prevents state updates after unmount
    let videoCall = null;
    let chatClientInstance = null;

    const initCall = async () => {
      if (!session?.callId || (!isHost && !isParticipant) || session.status === "completed") {
        setIsInitializingCall(false);
        return;
      }

      try {
        const { token, userId, userName, userImage } = await sessionApi.getStreamToken();
        
        if (!isMounted) return;

        // 1. Setup Video Client
        const client = await initializeStreamClient(
          { id: userId, name: userName, image: userImage },
          token
        );
        if (!isMounted) return;
        setStreamClient(client);

        // 2. Setup Video Call
        videoCall = client.call("default", session.callId);
        await videoCall.join({ create: true });
        if (!isMounted) return;
        setCall(videoCall);

        // 3. Setup Chat Client
        const apiKey = import.meta.env.VITE_STREAM_API_KEY;
        chatClientInstance = StreamChat.getInstance(apiKey);
        await chatClientInstance.connectUser(
          { id: userId, name: userName, image: userImage },
          token
        );
        if (!isMounted) return;
        setChatClient(chatClientInstance);

        // 4. Setup Chat Channel
        const chatChannel = chatClientInstance.channel("messaging", session.callId);
        await chatChannel.watch();
        if (!isMounted) return;
        setChannel(chatChannel);

      } catch (error) {
        console.error("Error init call", error);
        if (isMounted) toast.error("Failed to join video call");
      } finally {
        if (isMounted) setIsInitializingCall(false);
      }
    };

    if (session && !loadingSession) {
      initCall();
    }

    // Cleanup logic
    return () => {
      isMounted = false;
      
      const cleanup = async () => {
        try {
          // Leave Video Call if active
          if (videoCall && videoCall.state.callingState !== 'left') {
            await videoCall.leave();
          }
          // Disconnect Chat
          if (chatClientInstance) {
            await chatClientInstance.disconnectUser();
          }
          // Cleanup global stream client
          await disconnectStreamClient();
        } catch (error) {
          if (!error.message?.includes("already been left")) {
            console.error("Cleanup error:", error);
          }
        }
      };

      cleanup();
    };
  }, [session?.callId, loadingSession, isHost, isParticipant]); // Use specific IDs in deps

  return { streamClient, call, chatClient, channel, isInitializingCall };
}

export default useStreamClient;