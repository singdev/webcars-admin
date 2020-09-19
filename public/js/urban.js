function generateQRCode(text, nom){
    document.querySelector('#qrcode').innerHTML = "";
    document.querySelector('#nom').innerHTML = nom;
    var qrcode = new QRCode("qrcode", {
        text: text,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
    qrcode.clear();
    qrcode.makeCode(text);
}

function printDiv(divName){
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;

}