import React from "react";
import "./App.css";
import { useSouki, useSetSouki } from "souki";

function SampleComponent() {
  const state = useSouki();
  const setSoukiState = useSetSouki();

  return (
    <>
      <p>{state.count}</p>
      <button
        onClick={() => {
          setSoukiState((s) => ({ count: s.count + 1 }));
        }}
      >
        up count
      </button>
    </>
  );
}

export default SampleComponent;
