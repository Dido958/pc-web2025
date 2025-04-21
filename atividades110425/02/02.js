function markVowels() {
    const inputText = document.getElementById('inputText').value;
    const resultDiv = document.getElementById('result');
    
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let markedText = '';
    
    for (let char of inputText) {
        if (vowels.includes(char)) {
            markedText += `<span class="bold-vowel">${char}</span>`;
        } else {
            markedText += char;
        }
    }
    
    resultDiv.innerHTML = markedText;
}