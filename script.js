// Function to calculate age based on birthdate
function calculateAge(birthdate) {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

// Event listener to display age when birthdate is selected
document.getElementById("birthdate").addEventListener("change", function () {
  const birthdate = this.value;
  const age = calculateAge(birthdate);
  document.getElementById("age").textContent = age; // Display age
});

// Event listener to check age and display message in pop-up
document.getElementById("ageCheckForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const birthdate = document.getElementById("birthdate").value;
  const age = calculateAge(birthdate);

  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popup-message");

  if (age >= 17) {
    popupMessage.textContent = "Selamat, Anda berhak mengikuti ujian SIM!";
    popupMessage.style.color = "#00ff00"; // Hijau terang
  } else {
    popupMessage.textContent = "Maaf, Anda belum cukup umur untuk mengikuti ujian SIM.";
    popupMessage.style.color = "#ff0000"; // Merah
  }

  // Tampilkan pop-up
  popup.style.display = "flex";
});

// Close pop-up when the user clicks the OK button
document.getElementById("okButton").addEventListener("click", function() {
  document.getElementById("popup").style.display = "none";
});

function calculateAverage() {
    const biologi = parseFloat(document.getElementById("biologi").value) || 0;
    const agama = parseFloat(document.getElementById("agama").value) || 0;
    const bIndonesia =
      parseFloat(document.getElementById("bIndonesia").value) || 0;
    const pkn = parseFloat(document.getElementById("pkn").value) || 0;
    const matematikaWajib =
      parseFloat(document.getElementById("matematikaWajib").value) || 0;
    const matematikaPeminatan =
      parseFloat(document.getElementById("matematikaPeminatan").value) || 0;
    const tik = parseFloat(document.getElementById("tik").value) || 0;
    const bInggris = parseFloat(document.getElementById("bInggris").value) || 0;
    const penjas = parseFloat(document.getElementById("penjas").value) || 0;
    const kimia = parseFloat(document.getElementById("kimia").value) || 0;
    const fisika = parseFloat(document.getElementById("fisika").value) || 0;
    const seniBudaya =
      parseFloat(document.getElementById("seniBudaya").value) || 0;
  
    const total =
      biologi +
      agama +
      bIndonesia +
      pkn +
      matematikaWajib +
      matematikaPeminatan +
      tik +
      bInggris +
      penjas +
      kimia +
      fisika +
      seniBudaya;
    const average = total / 12;
    if (average >= 85) {
      window.location.href = "lulus.html";
    } else {
      window.location.href = "tidak_lulus.html";
    }
  }
  
  