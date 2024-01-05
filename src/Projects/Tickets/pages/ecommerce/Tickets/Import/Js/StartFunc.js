import { StartFunc as StartFuncAddlisteners } from "./Addlisteners/StartFunc.js";
import { StartFunc as StartFuncLoginFuncs } from "./LoginFuncs/EnteryFile.js";

const StartFunc = () => {
    
    StartFuncLoginFuncs();
    StartFuncAddlisteners();
};

StartFunc();