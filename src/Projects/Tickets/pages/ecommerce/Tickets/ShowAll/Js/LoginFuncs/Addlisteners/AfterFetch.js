let StartFunc = ({ inFromFetch }) => {
    console.log('inFromFetch::',inFromFetch);
    if (inFromFetch.KTF) {
        window.location.href = ""
    } else {
        Swal.fire(inFromFetch.KReason);
    }
};



export { StartFunc };