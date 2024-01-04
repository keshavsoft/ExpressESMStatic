import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom/EntryFile.js";
import { StartFunc as StartFuncAddlisteners } from "./Addlisteners/StartFunc.js";
import { StartFunc as StartFuncLoginFuncs } from "./LoginFuncs/EnteryFile.js";

const StartFunc = () => {
    
    StartFuncLoginFuncs();
    StartFuncShowOnDom().then(
        StartFuncAddlisteners()
    );
};

StartFunc();