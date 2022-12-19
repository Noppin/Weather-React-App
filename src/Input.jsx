import { useContext, useState, useCallback } from "react";
import {AppContext} from "./App"
import { fetchData } from "./fetchData";
import { fetchImage } from "./fetchImage";
export const Input = ()=>{
    const [input, setInput] = useState("");
    const {setShowData, setData, setIsValid, isValid, setImage} = useContext(AppContext);

    const showContent = useCallback((userInput)=>{
        if(userInput === ""){
            setIsValid("alertOutline");
            setTimeout(()=> setIsValid(""),1000);
        }
        else{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=metric&appid=YOUR_API_KEY`;
        fetchData(url)
        .then(res => {
            if(res){
                setShowData(true);
                setData(res); 
                setIsValid("");
                fetchImage(userInput)
                .then(data => setImage(data));
            }
            else{
                setIsValid("alertOutline");
                setTimeout(()=> setIsValid(""),1000);
            }
        });
        }
    }, [input]);
    return (
        <div className="searchWeather">
            <input 
            type="text" 
            id="userInput"
            className= {isValid}
            placeholder="Enter a City"
            value={input}
            onChange = {(e)=> setInput(e.target.value)}
            />
            <button className="search" onClick={()=> showContent(input)}>Search <i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    );
};