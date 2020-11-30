import { Dispatch, SetStateAction, useContext, useState, createContext } from "react";
import * as React from "react";

// TODO: Inject outside
// interface SoukiState {
//   value: number;
// }

// const initialState: object = {
//   value: 0,
// };

const SoukiContext = createContext<object>({});
const SetSoukiContext = createContext<Dispatch<SetStateAction<object>>>(() => {});

export function useSouki() {
  return useContext(SoukiContext);
}
export function useSetSouki() {
  return useContext(SetSoukiContext);
}

export function SoukiProvider(props: {
  initialState: object;
  children: React.ReactNode;
}) {
  const [state, setState] = useState<object>(props.initialState);

  return (
    <SoukiContext.Provider value={state}>
      <SetSoukiContext.Provider value={setState}>
        {props.children}
      </SetSoukiContext.Provider>
    </SoukiContext.Provider>
  );
}
