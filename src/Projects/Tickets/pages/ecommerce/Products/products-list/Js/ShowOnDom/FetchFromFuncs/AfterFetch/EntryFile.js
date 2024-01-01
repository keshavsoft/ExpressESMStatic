let CommonTableId = "products-list";

let StartFunc1 = ({ inDataToShow }) => {
    if (document.getElementById(CommonTableId)) {
        const dataTableSearch = new simpleDatatables.DataTable(`#${CommonTableId}`, {
            searchable: false,
            fixedHeight: true,
            perPage: 5,
            data: {
                headings: ["ItemName", "ItemRate"],
                data: LocalFuncPrepareRows({ inDataToShow })
            }
        });

        document.querySelectorAll(".export").forEach(function (el) {
            el.addEventListener("click", function (e) {
                var type = el.dataset.type;

                var data = {
                    type: type,
                    filename: "material-" + type,
                };

                if (type === "csv") {
                    data.columnDelimiter = "|";
                }

                dataTableSearch.export(data);
            });
        });
    };
};

let LocalFuncPrepareRows = ({ inDataToShow }) => {
    return inDataToShow.map(item => Object.values((({ ItemName, ItemRate }) => ({ ItemName, ItemRate }))(item)))
};


const StartFunc = ({ inDataToShow }) => {

    var $table = $('#products-list');
    $table.bootstrapTable({
        data:  inDataToShow 
    });
    
}

export { StartFunc }