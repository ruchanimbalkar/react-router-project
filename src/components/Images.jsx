import './Images.css';
import burningpoint from "../assets/burningpoint.png";
import echoesofthewild from "../assets/echoesofthewild.png";
import midnightinflorence from "../assets/midnightinflorence.png";
import sunshinedays from "../assets/sunshinedays.png";
import thelastletter from "../assets/thelastletter.png";
import whispersinthedark from "../assets/whispersinthedark.png";

export default function Images(){
    return (
        <div className="img-card">
            <img src={burningpoint} alt="Burning Point" />
            <img src={echoesofthewild} alt="Echoes of the Wild" />
            <img src={midnightinflorence} alt="Midnight in Florence" />
            <img src={sunshinedays} alt="Sunshine Days" />
            <img src={thelastletter} alt="The Last Letter" />
            <img src={whispersinthedark} alt="Whispers in the Dark" />
        </div>
    );
}