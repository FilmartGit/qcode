import { useState } from "react";

export function useRulesQr() {
  const [value, setValue] = useState("Hello QR");
  const changeValue = (event) => {
    setValue((oldValue) => event.target.value);
  };

  const [valueQr, setValueQr] = useState("Hello QR");
  const changeQr = () => {
    if (value) {
      setValueQr((lastValue) => {
        lastValue = value;
        return lastValue;
      });
    } else {
      return false;
    }
  };

  return [value, valueQr, changeValue, changeQr];
}
