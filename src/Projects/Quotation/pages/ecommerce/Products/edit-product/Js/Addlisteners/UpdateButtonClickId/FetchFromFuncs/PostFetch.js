import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalUuId = getUrlQueryParams({ inGetKey: "UuId" });
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    console.log("jVarLocalUuId:",jVarLocalUuId,jVarLocalFetchHeaders);

    let jVarLocalFetchUrl = `/Projects/Quotation/Items/${jVarLocalUuId}`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    let data = await response.json();

    return await data;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};


export { StartFunc };