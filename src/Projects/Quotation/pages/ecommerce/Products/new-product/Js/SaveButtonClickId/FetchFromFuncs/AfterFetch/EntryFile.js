let StartFunc = ({ inDataToShow }) => {
    const url = new URL(window.location.href);
    let NewURl = new URL("./products-list.html", url);
    window.location.href = NewURl;
    console.log("inDataToShow::", inDataToShow);
};
export { StartFunc }