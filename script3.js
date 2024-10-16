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
      const average = Math.round((total / 12) * 100) / 100; // Membulatkan ke 2 angka desimal
      localStorage.setItem("averageScore", average); // Simpan nilai rata-rata
    
      if (average >= 85) {
        window.location.href = `lulus.html?average=${average}`;
      } else {
        window.location.href = `tidak_lulus.html?average=${average}`;
      }
  }
  
  