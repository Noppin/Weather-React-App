export const fetchImage = async (q)=>{
      try{
        const url = `https://pixabay.com/api/?key=29853667-bb7c2c56c554c3148dcf3f0ba&image_type=photo&q=${q}`;
      const res = await (await fetch(url)).json();
      const {hits} = res;
      const {largeImageURL:img} = hits[rand(hits.length)];
      return img;
      function rand (length){
            return Math.floor(Math.random()*length);
      }
      }
      catch(error){
            console.log(error);
      }
  
    }