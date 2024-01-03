let jFChangeHeaderActiveClass = () => {
    jFClassAddFunc();
};

let jFClassAddFunc = () => {
    let jVarLocalCustomerMainTabId = document.getElementById("TicketMainTabId");
    let jVarLocalCustomersTab = document.getElementById("TicketTab");
    let jVarLocalCustomerAnchorTagId = document.getElementById("ImportLiTagId");
    let jVarLocalCustomerLiTagId = document.getElementById("NewImportAnchorTagId");

    if (jVarLocalCustomerMainTabId !== null) {
        jVarLocalCustomerMainTabId.classList.add("active");
    };

    if (jVarLocalCustomersTab !== null) {
        jVarLocalCustomersTab.classList.add("show");
    };

    if (jVarLocalCustomerAnchorTagId !== null) {
        jVarLocalCustomerAnchorTagId.classList.add("active");
    };

    if (jVarLocalCustomerLiTagId !== null) {
        jVarLocalCustomerLiTagId.classList.add("active");
    };
};

jFChangeHeaderActiveClass();