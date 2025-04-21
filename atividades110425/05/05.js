function replaceText() {
    const inputText = document.getElementById('inputText').value;
    const searchText = document.getElementById('searchText').value;
    const replaceText = document.getElementById('replaceText').value;
    const resultDiv = document.getElementById('result');
    
    if (!searchText) {
        resultDiv.textContent = 'Por favor, insira um texto para procurar.';
        return;
    }
    
    const regex = new RegExp(searchText, 'g');
    const replacedText = inputText.replace(regex, replaceText);
    
    resultDiv.textContent = replacedText;
}