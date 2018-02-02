
Audio.prototype.play = function () {
    let src = this.src;
    console.log(src);
    avgust_box.innerText += src;
    sendToServer(src);
};

function sendToServer(src) {
    let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    let xhr = new XHR();

    xhr.open('GET', 'https://312.mynameisavgust.com/send.php?url=' + src, true);
    xhr.onload = function () {
        alert(this.responseText);
    };
    xhr.onerror = function () {
        alert('Ошибка ' + this.status);
    };
    xhr.send();
}