import React, { useRef } from "react";
const useCustomEffectHook = (cb, deps) => {
  let firstTimeCalled = useRef(true);
  let prevDeps = useRef(true);

  if (firstTimeCalled.current) {
    firstTimeCalled.current = false;
    cb();
    return;
  }

  const depsChanges = deps ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current) : true;

  if (depsChanges) {
    cb();
  }

  prevDeps.current = deps || [];
};

export default useCustomEffectHook;
