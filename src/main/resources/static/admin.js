function buildPopUp(data){
    setElementTextNode("modalHeader", data.headline);
    setElementTextNode("modalMessage", data.message);
    setElementTextNode("modalName", data.name);
    setElementTextNode("modalDate", data.date.replace("T", "/"));
    setElementTextNode("modalEmail", data.email);
    document.getElementById("modalEmail").href = "mailto:" + data.email ;
}

function deleteEntry(id){
    fetch(`/contact/api/v1/${id}`, { method: "DELETE" }).then((response) =>  location.reload());
}

function updateEntry(id){
    fetch(`/contact/api/v1/${id}`, { method: "PUT" }).then((response) =>  location.reload());
}

function openPopUp(contactID){
    fetch(`/contact/api/v1/${contactID}`)
        .then((response) => response.json())
        .then((data) => buildPopUp(data));
}

function setElementTextNode(elementID, txt){
    const element = document.getElementById(elementID);
    const txtNode = document.createTextNode(txt);
    if(element.hasChildNodes()){
        element.removeChild(element.childNodes[0]);
    }
    element.appendChild(txtNode);
}