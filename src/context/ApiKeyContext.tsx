
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
  // Probeer de API key uit localStorage te halen als die er is
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState<string>(
    typeof window !== 'undefined' ? localStorage.getItem("googleMapsApiKey") || "" : ""
  );

  const handleSetGoogleMapsApiKey = (key: string) => {
    setGoogleMapsApiKey(key);
    localStorage.setItem("googleMapsApiKey", key);
  };

  return (
    <ApiKeyContext.Provider
      value={{ googleMapsApiKey, setGoogleMapsApiKey: handleSetGoogleMapsApiKey }}
    >
      {children}
    </ApiKeyContext.Provider>
  );
};
