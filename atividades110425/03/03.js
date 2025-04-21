function countWords() {
    const inputText = document.getElementById('inputText').value;
    const resultDiv = document.getElementById('result');
    
    // Remove pontuação e divide em palavras
    const words = inputText.toLowerCase()
                          .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
                          .split(/\s+/)
                          .filter(word => word.length > 0);
    
    const wordCount = {};
    
    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });
    
    let tableHTML = '<table><tr><th>Palavra</th><th>Ocorrências</th></tr>';
    
    for (const [word, count] of Object.entries(wordCount)) {
        tableHTML += `<tr><td>${word}</td><td>${count}</td></tr>`;
    }
    
    tableHTML += '</table>';
    resultDiv.innerHTML = tableHTML;
}