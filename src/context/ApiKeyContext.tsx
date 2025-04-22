
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
    // Extract only the key part - assume it's alphanumeric and may include - and _
    const keyMatch = key.match(/[A-Za-z0-9\-_]+/);
    const cleanKey = keyMatch ? keyMatch[0] : '';
    
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
