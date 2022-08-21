const qr = new QRious({
    element: document.querySelector("#qrCode"),
    size: 200,
    value: "My initial value"
})

const generateQRCode = () => {
    const textIn = document.getElementById("textIn").value
    qr.set({
        value: textIn
    })
}