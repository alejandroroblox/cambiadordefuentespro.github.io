(function() {
    chrome.storage.local.get("customFont", (data) => {
        if (data.customFont) {
            const fontName = 'UserCustomFont';
            const style = document.createElement('style');
            style.textContent = `
                @font-face {
                    font-family: '${fontName}';
                    src: url('${data.customFont}') format('truetype');
                }
                * {
                    font-family: '${fontName}', sans-serif !important;
                }
            `;
            document.documentElement.appendChild(style);
        }
    });
})();
