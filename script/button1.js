function Contactpage(){
    window.location.href = "contactme.html";
}

function downloadFile(URL,fileName){
    let link = document.createElement("a");

    link.setAttribute("download",fileName);
    link.href = URL;

    document.body.appendChild(link);
    link.click();
    link.remove();
}