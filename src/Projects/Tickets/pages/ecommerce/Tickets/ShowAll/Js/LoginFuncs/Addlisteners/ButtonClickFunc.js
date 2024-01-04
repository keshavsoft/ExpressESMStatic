import { StartFunc as StartFuncFetchFunc } from "./FetchFunc.js";
import { StartFunc as StartFuncPreparePostData } from "./PreparePostData.js";
import { StartFunc as StartFuncCheckBeforeFetch } from "./CheckBeforeFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

let StartFunc = async () => {
    if (StartFuncCheckBeforeFetch()) {
        const input = document.getElementById('UploadFileInputId');
        const file = input.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = async function (e) {
                const csvData = e.target.result;
                const jsonArray = convertCsvToJsonFunction(csvData);
                let JsonStrfey = JSON.stringify(jsonArray);
                let jVarLocalBodyData = await StartFuncPreparePostData({ inCsvJsonData: jsonArray });
                let response = await StartFuncFetchFunc({ inBodyData: jVarLocalBodyData });
                StartFuncAfterFetch({ inFromFetch: response });
            };

            reader.readAsText(file);
        } else {
            alert('Please select a CSV file.');
        };
    };

};

let convertCsvToJsonFunction = (csvData) => {
    const parsedData = Papa.parse(csvData, { header: true });

    const selectedData = parsedData.data.map(({
        'Job no': Jobno, 'Creation Date': CreationDate,
        'Customer Name': CustomerName, Address, 'Mobile No': MobileNo,
        'Contact No': ContactNo, ModelName, 'Job Classification': JobClassification, ProductGroupName, 'Warranty Type': WarrantyType, 'Agent Remarks': AgentRemarks, CallFromNo, Panasonic
    }) => ({ Jobno, CreationDate, CustomerName, Address, MobileNo, ContactNo, ModelName, JobClassification, ProductGroupName, WarrantyType, AgentRemarks, CallFromNo, Panasonic }));

    return selectedData;
}

// function convertCsvToJsonFunction(csvData) {
//     const rows = csvData.split('\n');
//     const headers = rows[0].split(',');

//     const selectedColumns = ['Job no', 'Creation Date', 'Customer Name']; // Specify the columns you want to include
//     const filterColumn = 'Job no'; // Specify the column to filter
//     const desiredValue = 'BAC201223FS00665'; // Specify the value to filter by

//     const jsonArray = [];

//     for (let i = 1; i < rows.length; i++) {
//         const values = rows[i].split(',');
//         const rowObject = {};

//         // Filter by column and value
//         if (values[headers.indexOf(filterColumn)].trim() === desiredValue) {
//             for (let j = 0; j < headers.length; j++) {
//                 if (selectedColumns.includes(headers[j].trim())) {
//                     rowObject[headers[j].trim()] = values[j].trim();
//                 }
//             }

//             jsonArray.push(rowObject);
//         }
//     }

//     return jsonArray;
// }


export { StartFunc };