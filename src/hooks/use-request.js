import { useCallback } from "react";

const useRequest = () => {
  const sendRequest = useCallback(async (request, applyData) => {
    try {
      const response = await fetch(request.url, {
        method: request.method ?? "GET",
        body: request.body ? JSON.stringify(request.body) : null,
        headers: {
          "Content-Type": request.contentType ?? "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed request");
      }

      const data = await response.json();
      applyData(data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return {
    sendRequest,
  };
};

export default useRequest;
