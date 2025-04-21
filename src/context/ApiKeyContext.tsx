
import { createContext, useContext, useState, ReactNode } from "react";

type ApiKeyContextType = {
  googleMapsApiKey: string;
  setGoogleMapsApiKey: (key: string) => void;
};

const ApiKeyContext = createContext<ApiKeyContextType>({
  googleMapsApiKey: "",
  setGoogleMapsApiKey: () => {},
});

export const useApiKey = () => useContext(ApiKeyContext);

export const ApiKeyProvider = ({ children }: { children: ReactNode }) => {
  // Get API key from localStorage if available
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState<string>(
    typeof window !== 'undefined' ? localStorage.getItem("googleMapsApiKey") || "" : ""
  );

  const handleSetGoogleMapsApiKey = (key: string) => {
    // Ensure the key doesn't contain any unwanted text
    const cleanedKey = key.trim();
    setGoogleMapsApiKey(cleanedKey);
    localStorage.setItem("googleMapsApiKey", cleanedKey);
  };

  return (
    <ApiKeyContext.Provider
      value={{ googleMapsApiKey, setGoogleMapsApiKey: handleSetGoogleMapsApiKey }}
    >
      {children}
    </ApiKeyContext.Provider>
  );
};
