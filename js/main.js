
var NameInput = document.getElementById('NameInput');
var AgeInput = document.getElementById('AgeInput');
var doctorsinput = document.getElementById('doctorsinput');
var PitionsCategoryinput = document.getElementById('PitionsCategoryinput');
var searchInput = document.getElementById('search')
var crntindex = 0;
var ContainerPations = [];
if (localStorage.getItem("myproduct") != null) {
    ContainerPations = JSON.parse(localStorage.getItem('myproduct'))
    displaypations();
}
else {
    ContainerPations = [];
}

function AddPition() {
    if (checkinput() == true) {
        var pation = {
            Name: NameInput.value,
            Age: AgeInput.value,
            doctor: doctorsinput.value,
            type_oper: PitionsCategoryinput.value,
        }
        ContainerPations.push(pation);
        localStorage.setItem("myproduct", JSON.stringify(ContainerPations))
        clearForm();

        displaypations();
    }
    else {
        alert("All inputs is required")
    }




}
function checkinput() {
    if (NameInput.value != "" && AgeInput.value != ""
        && doctorsinput.value != "" && PitionsCategoryinput.value != "") {
        return true;
    }
    else {
        return false;
    }
}
function clearForm() {
    NameInput.value = "";
    AgeInput.value = "";
    doctorsinput.value = "";
    PitionsCategoryinput.value = "";
}

function displaypations() {
    var catona = ``;
    for (var i = 0; i < ContainerPations.length; i++) {
        catona += ` <tr>
        <td>${[i]}</td>
        <td>${ContainerPations[i].Name}</td>
        <td>${ContainerPations[i].Age}</td>
        <td>${ContainerPations[i].doctor}</td>
        <td>${ContainerPations[i].type_oper}</td>
        <td>
        <button onclick=" updatetpations (`+ i + `)"   class="btn  btn-outline-warning">update</button>
        </td>
        <td><button onclick="deletePations(`+ i + `)"  class="btn  btn-outline-danger">delete</button></td>

    </tr>
    `
    }
    document.getElementById("tablebody").innerHTML = catona;
}

function searchPations() {
    var searchValue = searchInput.value;
    var catona = ``;
    for (var i = 0; i < ContainerPations.length; i++) {
        if (ContainerPations[i].Name.toLowerCase().includes(searchValue.toLowerCase()) == true)
            catona += ` <tr>
        <td>${[i]}</td>
        <td>${ContainerPations[i].Name}</td>
        <td>${ContainerPations[i].Age}</td>
        <td>${ContainerPations[i].doctor}</td>
        <td>${ContainerPations[i].type_oper}</td>
        

    </tr>
    `
    }
    document.getElementById("tablebody").innerHTML = catona;
}

function deletePations(index) {
    ContainerPations.splice(index, 1)
    localStorage.setItem("myproduct", JSON.stringify(ContainerPations))
    displaypations()
}

function updatetpations(index) {
    crntindex = index;
    NameInput.value = ContainerPations[index].Name
    AgeInput.value = ContainerPations[index].Age
    doctorsinput.value = ContainerPations[index].doctor
    PitionsCategoryinput.value = ContainerPations[index].type_oper
    document.getElementById("update").style.display = "inline";
    document.getElementById("addProduct").style.display = "none";
}
function edit() {
    ContainerPations[crntindex].Name = NameInput.value;
    ContainerPations[crntindex].Age = AgeInput.value;
    ContainerPations[crntindex].doctor = doctorsinput.value;
    ContainerPations[crntindex].type_oper = PitionsCategoryinput.value;
    localStorage.setItem("myproduct", JSON.stringify(ContainerPations));
    displaypations();
    document.getElementById("update").style.display = "none";
    document.getElementById("addProduct").style.display = "inline";
    clearForm();


}

