let StartFunc = () => {
    let LocalFoam = document.forms[0];
    let LocalNerFormData = new FormData(LocalFoam);

    let localuserNameId = LocalNerFormData.get("UserName");
    let localPassWordId = LocalNerFormData.get("PassWord");
    console.log("localuserNameId:", localPassWordId);

    if (localuserNameId === "") {
        return false;
    };

    if (localPassWordId === "") {
        return false;
    };

    return true;
};


export { StartFunc };