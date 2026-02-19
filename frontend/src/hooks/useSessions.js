import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sessionApi } from "../api/sessions";

export const useCreateSession = () => {
  return useMutation({
    mutationKey: ["createSession"],
    mutationFn: sessionApi.createSession,
    onSuccess: () => toast.success("Session created successfully!"),
    onError: (error) =>
      toast.error(
        error.response?.data?.message || "Failed to create session"
      ),
  });
};

export const useActiveSessions = () => {
  return useQuery({
    queryKey: ["activeSessions"],
    queryFn: sessionApi.getActiveSessions,
  });
};

export const useMyRecentSessions = () => {
  return useQuery({
    queryKey: ["myRecentSessions"],
    queryFn: sessionApi.getMyRecentSessions,
  });
};

export const useSessionById = (id) => {
  return useQuery({
    queryKey: ["session", id],
    queryFn: () => sessionApi.getSessionById(id),
    enabled: !!id,
    refetchInterval: 5000,
  });
};

export const useJoinSession = () => {
  return useMutation({
    mutationKey: ["joinSession"],
    mutationFn: sessionApi.joinSession, // now expects { roomKey }
    onSuccess: () => toast.success("Joined session successfully!"),
    onError: (error) =>
      toast.error(
        error.response?.data?.message || "Failed to join session"
      ),
  });
};

export const useEndSession = () => {
  return useMutation({
    mutationKey: ["endSession"],
    mutationFn: sessionApi.endSession,
    onSuccess: () => toast.success("Session ended successfully!"),
    onError: (error) =>
      toast.error(
        error.response?.data?.message || "Failed to end session"
      ),
  });
};
