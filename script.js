function hesapla() {
    const satisFiyati = parseFloat(document.getElementById("satisFiyati").value);
    const kargoUcreti = parseFloat(document.getElementById("kargoUcreti").value);
    // ... diğer kodlar aynı kalır

    // Karı hesapla
    const kar = satisFiyati - kargoUcreti - sabitUcret - (satisFiyati * yuzdelikDeger) - 0.49;

    // Sonucu ekrana yazdır
    // ...
}
