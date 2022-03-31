import {runClock} from "./clock.js";
import {displayText} from "./displayText.js";
import {textEvent} from "./textEvent.js";
import {refreshEvent} from "./refresh.js";

let mainInput = document.querySelector(".main-input");
let bRestart = document.querySelector(".b-restart");
let clock = document.querySelector(".clock");


bRestart.onclick = function(){
    refreshEvent();
};

mainInput.oninput = function(){
    runClock();
    textEvent();
}

clock.onclick = function(){
    if(document.querySelector(".time").style.display != "none"){
        document.querySelector(".time").style.display = "none";
    }else{
        document.querySelector(".time").style.display = "inline";
    }
}

displayText();