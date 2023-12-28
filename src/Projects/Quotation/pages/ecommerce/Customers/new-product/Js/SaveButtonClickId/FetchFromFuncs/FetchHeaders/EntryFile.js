import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalBodyKeys = {};
    jVarLocalBodyKeys.inDataToInsert = {};

    let LocalFoam = document.forms[0];
    let LocalNerFormData = new FormData(LocalFoam);

    jVarLocalBodyKeys.inDataToInsert.CustomerName = LocalNerFormData.get("CustomerName");
    jVarLocalBodyKeys.inDataToInsert.CustomerContact = parseInt(LocalNerFormData.get("CustomerContact"));
    console.log("v:", jVarLocalBodyKeys);

    KeysJson.body = JSON.stringify(jVarLocalBodyKeys);

    return KeysJson;
};

export { StartFunc }