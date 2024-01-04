let CommonTableId = "products-list";

let StartFunc = ({ inDataToShow }) => {
    if (document.getElementById(CommonTableId)) {
        const dataTableSearch = new simpleDatatables.DataTable(`#${CommonTableId}`, {
            searchable: false,
            fixedHeight: true,
            perPage: 5,
            data: {
                headings: ["Jobno", "CreationDate","CustomerName","Address","MobileNo","ContactNo","ModelName","JobClassification","ProductGroupName","WarrantyType","AgentRemarks","CallFromNo","Panasonic"],
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
    return inDataToShow.map(item => Object.values((({ Jobno, CreationDate,CustomerName,Address,MobileNo,ContactNo ,ModelName,JobClassification,ProductGroupName,WarrantyType,AgentRemarks,CallFromNo,Panasonic}) => ({Jobno, CreationDate,CustomerName,Address,MobileNo,ContactNo ,ModelName,JobClassification,ProductGroupName,WarrantyType,AgentRemarks,CallFromNo,Panasonic}))(item)))
};

export { StartFunc }