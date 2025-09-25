let table = document.getElementsByClassName('my-table')[0].getElementsByTagName('tbody')[0];
let addbtn = document.getElementById('addbtn');
let dlt = document.getElementById('delete');

dlt.addEventListener("click", function(){
    table.deleteRow(0);
})
addbtn.addEventListener("click", function(){

    let name = prompt("Enter name");
    let phone = prompt("Enter phone number");
    let email = prompt("Enter email");

    let newRow = table.insertRow();

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.textContent = name;
    cell2.textContent = phone;
    cell3.textContent = email;

    let dltbtn = document.createElement('button');
    dltbtn.textContent = "Delete";
    dltbtn.addEventListener("click", function(){
        newRow.remove();
    });

    cell4.appendChild(dltbtn);
})
// Search filter
let searchInput = document.getElementById("searchInput");
let table1 = table; // same tbody

searchInput.addEventListener("keyup", function() {
    let filter = searchInput.value;
    let rows = table1.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        let firstCell = rows[i].getElementsByTagName("td")[1];
        if (firstCell) {
            let txtValue = firstCell.textContent || firstCell.innerText;
            if(txtValue.includes(filter)){
                rows[i].style.display = "";
            }
            else{
                rows[i].style.display = "none";
            }
        }
    }
});