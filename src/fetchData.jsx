export const fetchData = async (url)=>{
    try {
        const res = await fetch(url);
        const data = await res.json();
        const {main:{temp, feels_like, pressure, humidity}, coord:{lon, lat},name, wind:{speed}} = data;
            const {weather} = data
            const {main, icon} = weather[0];

            return {
                temp, feels_like, pressure, humidity,
                lon, lat,
                name, speed,
                main, icon  
            }

    } catch (error) {
        console.log(error);
    }
};