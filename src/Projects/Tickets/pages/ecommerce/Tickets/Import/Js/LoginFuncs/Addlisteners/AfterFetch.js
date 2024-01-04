let StartFunc = ({ inFromFetch }) => {
    if (inFromFetch.KTF) {
        LocalFuncFunc();
    } else {
        Swal.fire("Not found User details");
    }
};

let LocalFuncFunc = () => {

    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    const new_url = new URL(`${url}?${params1}`);
    window.location.href = new_url;
};

export { StartFunc };