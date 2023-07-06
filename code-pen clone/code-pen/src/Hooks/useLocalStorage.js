import { useEffect, useState } from "react";
const PREFIX = "Codepen-";
export default function useLocalStorage(key, initialValue) {
  const prefixKey = PREFIX + key;
  //intially storevalue is "" in localStorage when nothing is written in the editor
  //Whenenver html,css,js is updated useEffect triggers as sets the new storeValue in the localStorage
  const [storeValue, setStoreValue] = useState(() => {
    const json = localStorage.getItem(prefixKey);
    console.log(JSON.parse(json));
    if (json != null) {
      return JSON.parse(json);
    }
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      console.log(initialValue);
      return initialValue;
    }
  });
  useEffect(() => {
    console.log("useeffect", storeValue);
    localStorage.setItem(prefixKey, JSON.stringify(storeValue));
  }, [prefixKey, storeValue]);
  return [storeValue, setStoreValue];
}
