import React from "react";
import { sortBy } from "ramda";
import { Button } from "react-bootstrap";
import { useRecoilSnapshot } from "recoil";

/**
 * Displays all Recoil keys and can post their values to the dev console.
 */
export const RecoilState = () => {
  const snapshot = useRecoilSnapshot();
  const states = sortBy((s) => s.key, Array.from(snapshot.getNodes_UNSTABLE()));

  return (
    <>
      <p>Click on a recoil key to see the value in the console.</p>
      <ul>
        {states.map((state) => {
          return (
            <li key={state.key}>
              {state.key}{" "}
              <Button
                variant="link"
                size="sm"
                onClick={() =>
                  snapshot.getPromise(state).then((v) => {
                    // eslint-disable-next-line no-console
                    console.log(">> Recoil Value", { [state.key]: v });
                  })
                }
              ></Button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
