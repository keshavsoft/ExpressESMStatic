let StartFunc =  ({inFromFetch}) => {
   
    jFLocalPrepareHeaderForDataOnly(inFromFetch);
    var $table = $('#table');

    $table.bootstrapTable({ data:inFromFetch});
};

let jFLocalPrepareHeaderForDataOnly = (inFromFetch) => {
    let jVarLocalHtmlId = 'tableHeadRow';
    let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);
    let jVarLocalColumns = Object.keys(inFromFetch[0]);
    jVarLocalColumns.forEach(element => {
        let jVarLocalNewTh = document.createElement("th");
        jVarLocalNewTh.innerHTML = element;
        jVarLocalNewTh.dataset.field = element;
        jVarLocaltableHeadRow.appendChild(jVarLocalNewTh);
    });
};

export { StartFunc };