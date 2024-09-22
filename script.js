// script.js
function hesapla() {
    const satisFiyati = parseFloat(document.getElementById("satisFiyati").value);
    const kargoSirketi = document.getElementById("kargo").value;
    const gonderimTuru = document.getElementById("gonderim").value;

    // Sabit ücretleri ve yüzdelik değerleri belirle
    let sabitUcret, yuzdelikDeger;
    switch (kargoSirketi) {
        case 'ptt':
            sabitUcret = 52;
            break;
        case 'mng':
            sabitUcret = 59;
            break;
        case 'yurtiçi':
            sabitUcret = 69;
            break;
        default:
            sabitUcret = 0;
    }
    yuzdelikDeger = gonderimTuru === 'yurtiçi' ? 0.0599 : 0.0699;

    // Toplam maliyeti hesapla
    const toplamMaliyet = (satisFiyati * yuzdelikDeger) + 0.49 + sabitUcret;

    // Karı hesapla
    const kar = satisFiyati - toplamMaliyet;

    // Sonucu ekrana yazdır
    const sonucDiv = document.getElementById("sonuc");
    sonucDiv.innerHTML = `
        <p>Toplam Maliyet: ${toplamMaliyet.toFixed(2)} TL</p>
        <p>Kar: ${kar.toFixed(2)} TL</p>
    `;
}
