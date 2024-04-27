let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
}

function toggleCPF_CNPJ() {
  var leadType = document.getElementById("lead_type").value;
  var cpfField = document.getElementById("00Naj000001wLza");
  var cnpjField = document.getElementById("00Naj000001wJks");

  if (leadType === "Pessoa Física") {
    cpfField.style.display = "block";
    cnpjField.style.display = "none";
  } else if (leadType === "Pessoa Jurídica") {
    cpfField.style.display = "none";
    cnpjField.style.display = "block";
  }
}

document.getElementById("lead_type").addEventListener("change", toggleCPF_CNPJ);
