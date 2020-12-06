import { Dispatch, SetStateAction, useContext, useState, createContext } from "react";
import * as React from "react";

const SoukiContext = createContext<any>({});
const SetSoukiContext = createContext<Dispatch<SetStateAction<any>>>(() => {});

export function useSouki() {
  return useContext(SoukiContext);
}
export function useSetSouki() {
  return useContext(SetSoukiContext);
}

export function SoukiProvider(props: {
  initialState: any;
  children: React.ReactNode;
}) {
  const [state, setState] = useState<any>(props.initialState);

  return (
    <SoukiContext.Provider value={state}>
      <SetSoukiContext.Provider value={setState}>
        {props.children}
      </SetSoukiContext.Provider>
    </SoukiContext.Provider>
  );
}
