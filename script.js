let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
}

function toggleDocumentType() {
  var selectedValue = document.getElementById('lead_type').value;
  var cpfField = document.getElementById('cpf');
  var cnpjField = document.getElementById('cnpj');

  if (selectedValue === 'Pessoa Física') {
    cpfField.style.display = 'block';
    cnpjField.style.display = 'none';
    cpfField.required = true;
    cnpjField.required = false;
  } else if (selectedValue === 'Pessoa Jurídica') {
    cpfField.style.display = 'none';
    cnpjField.style.display = 'block';
    cpfField.required = false;
    cnpjField.required = true;
  } else {
    cpfField.style.display = 'none';
    cnpjField.style.display = 'none';
    cpfField.required = false;
    cnpjField.required = false;
  }
}