
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
    // Clean the API key by removing any additional text
    const cleanKey = key.replace(/\s+.*$/, '').trim();
    setGoogleMapsApiKey(cleanKey);
    localStorage.setItem("googleMapsApiKey", cleanKey);
  };

  return (
    <ApiKeyContext.Provider
      value={{ googleMapsApiKey, setGoogleMapsApiKey: handleSetGoogleMapsApiKey }}
    >
      {children}
    </ApiKeyContext.Provider>
  );
};
