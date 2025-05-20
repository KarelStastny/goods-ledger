//@@viewOn:imports
import { useState } from "react";
//@@viewOff:imports

function useAsyncCall(firebaseFunction) {
  const [state, setState] = useState("ready");
  const [data, setData] = useState(null);
  const [alert, setAlert] = useState(null);

  const call = async ({
    dtoIn,
    successCallback,
    errorCallback,
    successMessage,
    errorMessage,
  }) => {
    setState("pending");
    try {
    const result = await firebaseFunction(dtoIn);
    setData(result);
    setState("ready");

    if (successMessage) {
      setAlert({ type: "success", message: successMessage });
    }

    successCallback?.(result);
    return result;
  } catch (error) {
    setState("error");

    setAlert({
      type: "error",
      message: errorMessage || error.message || "Nastala chyba.",
    });

    errorCallback?.(error);
    return null;
  }
  };

  return { call, state, data, alert };
}

export default useAsyncCall;
