const StartFunc = ({ inDataToShow }) => {
    let LocalItemName = inDataToShow.ItemName;
    let LocalItemRate = inDataToShow.ItemRate;
    jFLocalToInnerHtmlItemName({ inItemName: LocalItemName });
    jFLocalToInnerHtmlItemRateId({ inItemRateId: LocalItemRate });


};

let jFLocalToInnerHtmlItemName = ({ inItemName }) => {
    console.log(inItemName);

    let jVarLocalHtmlId = 'ItemNameId';
    let jVarLocalItemName = document.getElementById(jVarLocalHtmlId);
    jVarLocalItemName.value = inItemName;
};

let jFLocalToInnerHtmlItemRateId = ({ inItemRateId }) => {
    let jVarLocalHtmlId = 'ItemRateId';
   let jVarLocalItemRateId = document.getElementById(jVarLocalHtmlId);
   jVarLocalItemRateId.value = inItemRateId;
};

export { StartFunc };