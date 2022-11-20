//btn speicher
document.getElementById("addKontak").addEventListener("click", getKontak); 

let kontakts=[]; // array für Kunden

class kunde
{
    vorname;
    nachname;
    email;

    constructor(name, lastname, email)
    {
        this.vorname=name;
        this.nachname=lastname;
        this.email=email;
    }
}

function getKontak() {
  // die daten eingeben
  let Vorname = document.getElementById("name").value;
  let Nachname = document.getElementById("lastname").value;
  let Email = document.getElementById("email").value;

  addKunde(Vorname, Nachname, Email);
}

function addKunde(name, lastname, email) {
  // daten speicher
  let newKunde = [name, lastname, email];
  kontakts.push(newKunde);

  displayTable();
}

function displayTable() {
  //tabele erzeugen und daten zeigen
  const table = document.getElementById("outTable"); // html verbinden

  table.innerHTML = "";

  const headerArr = ["Vorname", "Nachname", "Email"]; // header table

  let headerRow = document.createElement("tr"); // create element row

  for (let i = 0; i < headerArr.length; i++) {
    const newTH = document.createElement("th");
    const newCell = document.createTextNode(headerArr[i]);
    newTH.appendChild(newCell);
    headerRow.appendChild(newTH);
  }
  table.appendChild(headerRow);

  for (let x = 0; x < kontakts.length; x++) {
    const client = kontakts[x];
    const newRow = document.createElement("tr");

    for (y = 0; y < client.length; y++) {
      const newCell = document.createElement("td");
      cell = document.createTextNode(client[y]);
      newCell.appendChild(cell);
      newRow.appendChild(newCell);
    }
    table.appendChild(newRow);
  }
}