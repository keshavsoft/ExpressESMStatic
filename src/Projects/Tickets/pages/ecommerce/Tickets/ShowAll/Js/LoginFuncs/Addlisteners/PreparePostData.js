let StartFunc = async () => {

    let LocalLoginFoarm = {};
    let LocalForm = document.getElementById("LoginFormId");
    const formData = new FormData(LocalForm);
    
    let LocalUserName = formData.get("UserName");
    let LocalPassword = formData.get("Password");
    LocalLoginFoarm.UserName = LocalUserName;
    LocalLoginFoarm.PassWord = LocalPassword;

    return await LocalLoginFoarm;
};



export { StartFunc };