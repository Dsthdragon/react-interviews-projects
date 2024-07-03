import { ReactNode, createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext<object | null>(null);

interface Props {
  children: ReactNode;
}

export default function FeatureFlagGlobalState({ children }: Props) {
  const [loading, setLoading] = useState(false);

  const [enabledFlags, setEnabledFlags] = useState({});
  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      const response = await featureFlagsDataServiceCall();
      setEnabledFlags(response);
      setLoading(false);
    } catch (e) {
      let error = "Something Went Wrong";
      if (e instanceof Error) {
        error = e.message;
      }
      setLoading(false);
      console.log(error);
      throw new Error(error);
    }
  }
  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagsContext.Provider value={{loading, enabledFlags}}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}
