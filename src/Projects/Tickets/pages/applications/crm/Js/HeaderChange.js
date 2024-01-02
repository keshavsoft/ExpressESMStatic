let jFChangeHeaderActiveClass = () => {
    let jVarLocalPathArray = window.location.pathname.split("/");
    let jVarLocalHTMLName = jVarLocalPathArray[jVarLocalPathArray.length - 1];
    jFChangeNavAnchorClass({ inClassName: jVarLocalHTMLName.split(".")[0] });
};

let jFChangeNavAnchorClass = ({ inClassName }) => {
    let jVarLocalNavBarId = document.getElementById("sidenav-collapse-main");
    let jVarLocalAnchorNeeded = jVarLocalNavBarId.querySelector(`.${inClassName}AClass`);

    if (jVarLocalAnchorNeeded !== null) {

        jVarLocalAnchorNeeded.classList.add("active");
        const myIdElement = jVarLocalAnchorNeeded.closest("li");
        const ClosesetDiv = jVarLocalAnchorNeeded.closest("div");
        ClosesetDiv.previousElementSibling.classList.add("active");
        ClosesetDiv.classList.add("show")
        myIdElement.classList.add("active")

    } else {
        let jVarLocalAnchorNeeded = jVarLocalNavBarId.querySelectorAll("a");

        for (let i = 0; i < jVarLocalAnchorNeeded.length; i++) {

            if (jVarLocalAnchorNeeded[i].innerText === inClassName) {

                jVarLocalAnchorNeeded[i].classList.add("active");
                const myIdElement = jVarLocalAnchorNeeded.closest("li");
                const ClosesetDiv = jVarLocalAnchorNeeded.closest("div");
                ClosesetDiv.previousElementSibling.classList.add("active");
                ClosesetDiv.classList.add("show")
                myIdElement.classList.add("active")
            };
        };
    };
};

jFChangeHeaderActiveClass();