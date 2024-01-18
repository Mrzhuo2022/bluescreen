function updateEmoji() {
    var emoji = document.getElementById("emojiInput").value;
    document.getElementById("emoji").textContent = emoji || ':(';
}

function updateFirstLine() {
    var firstLine = document.getElementById("firstLineInput").value;
    document.getElementById("firstLine").textContent = firstLine || '你的设备遇到问题，需要重启。';;
}

function updateSecondLine() {
    var secondLine = document.getElementById("secondLineInput").value;
    document.getElementById("secondLine").textContent = secondLine || '我们只收集某些错误信息，然后为你重新启动。';;
}

function updateProgress() {
    var progress = document.getElementById("progressInput").value;
    document.getElementById("progressText").textContent = progress || '100% 完成';
}
function updateEFirstLine() {
    var efirstLine = document.getElementById("efirstLineInput").value;
    document.getElementById("efirstLine").textContent = efirstLine || 'https://github.com/Mrzhuo2022';
}

function updateESecondLine() {
    var esecondLine = document.getElementById("esecondLineInput").value;
    document.getElementById("esecondLine").textContent = esecondLine || '终止代码：SYSTEM_SERVICE_EXCEPTION';
}

function generateQRCode() {
    var qrText = document.getElementById("qrCodeInput").value;
    var qrCodeContainer = document.querySelector('.qr-code');
    qrCodeContainer.innerHTML = '';
    if (qrText) {
        new QRCode(qrCodeContainer, {
            text: qrText,
            width: 100,
            height: 100,
            colorDark: '#0078d7',
            correctLevel: QRCode.CorrectLevel.H
        });
    } else {
        var img = document.createElement('img');
        img.src = './pic.png';
        img.alt = 'QR Code';
        img.style.width = '100px';
        img.style.height = '100px';
        qrCodeContainer.appendChild(img);
    }
}

function exportImage() {
    html2canvas(document.querySelector(".container"), {
        backgroundColor: '#0078d7'
    }).then(canvas => {
        var link = document.createElement('a');
        link.download = 'bluescreen.png';
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}

var controlsVisible = true;

document.addEventListener("mousedown", function (event) {
    if (event.button === 0 && !isMouseOverControls(event)) {
        toggleControlsVisibility();
    }
});

function toggleControlsVisibility() {
    var controlsElements = document.querySelectorAll(".controls");

    controlsElements.forEach(function (controlsDiv) {
        if (controlsVisible) {
            controlsDiv.style.display = "none";
        } else {
            controlsDiv.style.display = "block";
        }

        controlsVisible = !controlsVisible;
    });
}

function isMouseOverControls(event) {
    var controlsElements = document.querySelectorAll(".controls");

    for (var i = 0; i < controlsElements.length; i++) {
        var controlsDiv = controlsElements[i];
        var rect = controlsDiv.getBoundingClientRect();

        if (
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom
        ) {
            return true;
        }
    }

    return false;
}
