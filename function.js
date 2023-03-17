function saveContact() {
  let name = document.getElementById("name").value;
  let tel = document.getElementById("tel").value;
  if (name == "" || tel == "") {
    alert("Please fill in all fields");
    return;
  }
  let contactInfo = name + " - " + tel;
  let results = document.getElementById("result");
  results.value += contactInfo + "\n";
 
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("tel").value = "";
}
