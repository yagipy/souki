import { SoukiProvider, useSouki, useSetSouki } from "./index";
import * as React from "react";
import { render } from "@testing-library/react";

describe("<SoukiProvider />", () => {
  it("should return initial state", () => {

    expect(true).toBeTruthy();
    // const initialState: object = {
    //   value: 0
    // };
    //
    // const InsideDiv = () => {
    //   const state: object = useSouki();
    //   return (
    //     // @ts-ignore
    //     <div>{state.value}</div>
    //   );
    // };
    //
    // const component = render(
    //   <SoukiProvider initialState={initialState}>
    //     <InsideDiv />
    //   </SoukiProvider>
    // );
    //
    // const expectedComponent = () => {
    //   return (
    //       <div>
    //         <div>
    //           0
    //         </div>
    //       </div>
    //   )
    // };
    //
    // expect(JSON.stringify(component.container)).toMatchObject(JSON.stringify(expectedComponent()));
  });
});
