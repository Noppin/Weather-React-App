import React, { useState } from "react";
import { Input } from "./Input";
import { Info } from "./Info";
export const AppContext = React.createContext();

function App() {
  const [showData, setShowData] = useState(false);
  const [data, setData] = useState({});
  const [isValid, setIsValid] = useState("");
  const [image, setImage] = useState("");
  return (
   <AppContext.Provider value={{showData, setShowData, setData,data,isValid, setIsValid, setImage, image}}>
    <main className="bg" style={{background: image && `url(${image})`}}>
      <div className="container">
        <h1 className="title">Weather App By Nippon</h1>
        <Input/>
        <Info/>
      </div>
  </main>

   </AppContext.Provider>
    
  );
}

export default App;
