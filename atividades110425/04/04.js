function textStats() {
    const inputText = document.getElementById('inputText').value;
    const resultDiv = document.getElementById('result');
    
    // Contar letras (ignorando espaços e pontuação)
    const letterCount = inputText.replace(/[^a-zA-Z]/g, '').length;
    
    // Contar palavras
    const words = inputText.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    
    // Palavra mais frequente
    const wordFrequency = {};
    words.forEach(word => {
        const cleanWord = word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
        if (cleanWord) {
            wordFrequency[cleanWord] = (wordFrequency[cleanWord] || 0) + 1;
        }
    });
    
    let mostFrequentWord = '';
    let maxFrequency = 0;
    
    for (const [word, frequency] of Object.entries(wordFrequency)) {
        if (frequency > maxFrequency) {
            mostFrequentWord = word;
            maxFrequency = frequency;
        }
    }
    
    resultDiv.innerHTML = `
        <p>Total de letras: ${letterCount}</p>
        <p>Total de palavras: ${wordCount}</p>
        <p>Palavra mais frequente: "${mostFrequentWord}" (${maxFrequency} ocorrências)</p>
    `;
}