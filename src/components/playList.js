import { useSelector } from "react-redux";
import React, { useState } from "react";

export default function PlayList(){
    const SelectPlayList = useSelector(state=>state.List.value)

  const [selectedSong,setSelectedSong] = useState("")

 const click = (e) => {
    setSelectedSong(e)
 }

return(
   <>
   {SelectPlayList&&SelectPlayList.data&&SelectPlayList.data.results && SelectPlayList.data.results.map(e=>{
    console.log(e)
       return(
        <>
           <div  onClick={() => click(e.downloadUrl[3].link) }>
            <img src={e.image[2].link} />
           <p>{e.name}</p>

             </div>
   </>
   )
   })}
   <audio src={selectedSong} autoPlay controls/>

   </> 
    
)
}