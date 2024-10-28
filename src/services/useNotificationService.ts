/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from "react";
import useApiService from "../hooks/useApi";
import { NOTIFICATIONAPIS } from "../constants/endpoints";

const useNotificationService = () => {
  const { callApi, loading, setIsLoading } = useApiService();
  const getNotifications = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await callApi("get", NOTIFICATIONAPIS.NOTIFICATION);
      console.log(response?.data);
      return response?.data;
    } catch (e: any) {
      // toast.error(e?.response?.data || "Failed to get upcoming semester");
    } finally {
      setIsLoading(false);
    }
  }, []);
  return {
    loading,
    setIsLoading,
    getNotifications,
  };
};

export default useNotificationService;