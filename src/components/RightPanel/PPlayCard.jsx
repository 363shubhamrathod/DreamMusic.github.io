import { useState, useEffect, useRef} from "react";
import { Howl, Howler } from 'howler';
import ReactHowler from 'react-howler';
let son =new Howl({
    src : '../../../songs/bankai.mp3' 
});
// let song=son.play();
export default function PPlayCard(){
    
    const [toggleMusic,setToggleMusic]=useState(false);
    function handleToggle(){
        setToggleMusic((prv)=>{
            if(son.playing()){
                son.pause();
                return !prv;
            }
            son.play();
            return !prv;
        });
        console.log(son.playing());
    }
    return(
        <div className="right-panel-playcard">
            <button onClick={handleToggle}>{toggleMusic?"pause":"play"}</button>
        </div>
    );
}