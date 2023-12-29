import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom/EntryFile.js";
import { StartFunc as StartFuncAddlisteners } from "./Addlisteners/EntryFile.js";

const StartFunc = () => {
    StartFuncShowOnDom().then(
        StartFuncAddlisteners()
    )
};

StartFunc();