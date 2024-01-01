import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalBodyKeys = {};

    let LocalFoam = document.forms[0];
    let LocalNerFormData = new FormData(LocalFoam);

    jVarLocalBodyKeys.UserName = LocalNerFormData.get("UserName");
    jVarLocalBodyKeys.PassWord = LocalNerFormData.get("PassWord");
    console.log("v:", jVarLocalBodyKeys);

    KeysJson.body = JSON.stringify(jVarLocalBodyKeys);

    return KeysJson;
};

export { StartFunc }