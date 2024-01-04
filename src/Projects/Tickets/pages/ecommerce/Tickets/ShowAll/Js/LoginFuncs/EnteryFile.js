// import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";
import { StartFunc as StartFuncAddlisteners } from "./Addlisteners/StartFunc.js";

const StartFunc = () => {
    let ButtonClickId = "exampleModalSignUp";
    let LocalTockenName = "KToken";
    let LocalCookie = getCookie(LocalTockenName);
    StartFuncAddlisteners();

    if (LocalCookie === null) {
        var myModal = new bootstrap.Modal(document.getElementById(ButtonClickId), { keyboard: false, focus: true });
        myModal.show();
    };


};

let getCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}



export { StartFunc };
