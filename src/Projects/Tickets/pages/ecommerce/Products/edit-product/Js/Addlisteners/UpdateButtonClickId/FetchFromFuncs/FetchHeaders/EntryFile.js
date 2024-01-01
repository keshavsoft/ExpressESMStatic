import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalBodyKeys = {};
    jVarLocalBodyKeys.inDataToInsert = {};

    jVarLocalBodyKeys.inDataToInsert.ItemName = jFLocalFromDomItemNameId();
    jVarLocalBodyKeys.inDataToInsert.ItemRate = jFLocalFromDomItemRateId();
    console.log("v:", jVarLocalBodyKeys);

    KeysJson.body = JSON.stringify(jVarLocalBodyKeys);

    return KeysJson;
};

let jFLocalFromDomItemNameId = () => {
    let jVarLocalHtmlItemNameId = 'ItemNameId';
    let jVarHtmlItemNameId = document.getElementById(jVarLocalHtmlItemNameId);
    let jVarHtmlItemNameIdValue = jVarHtmlItemNameId.value.trim();
    return jVarHtmlItemNameIdValue;
};

let jFLocalFromDomItemRateId = () => {
    let jVarLocalHtmlItemRateId = 'ItemRateId';
    let jVarHtmlItemRateId = document.getElementById(jVarLocalHtmlItemRateId);
    let jVarHtmlItemRateIdValue = jVarHtmlItemRateId.value.trim();
    return parseInt(jVarHtmlItemRateIdValue);
};

export { StartFunc }