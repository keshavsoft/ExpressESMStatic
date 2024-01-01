let jFChangeHeaderActiveClass = () => {
    jFClassAddFunc();
};

let jFClassAddFunc = () => {
    let jVarLocalCustomerMainTabId = document.getElementById("CustomerMainTabId");
    let jVarLocalCustomersTab = document.getElementById("CustomersTab");
    let jVarLocalCustomerAnchorTagId = document.getElementById("CustomerAnchorTagId");
    let jVarLocalCustomerLiTagId = document.getElementById("CustomerLiTagId");

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