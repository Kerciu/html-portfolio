function loadCode() {
    fetch('code-introduction.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('vim-terminal').innerHTML = data;
        })
        .catch(error => console.error('Error loading code introduction', error));
}

window.onload = loadCode;