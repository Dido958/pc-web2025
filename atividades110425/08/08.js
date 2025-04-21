function encodeText() {
    const inputText = document.getElementById('inputText').value;
    const resultDiv = document.getElementById('result');
    
    const mapping = {
        'T': 'P', 'P': 'T',
        'E': 'O', 'O': 'E',
        'N': 'L', 'L': 'N',
        'I': 'A', 'A': 'I',
        'S': 'R', 'R': 'S',
        't': 'p', 'p': 't',
        'e': 'o', 'o': 'e',
        'n': 'l', 'l': 'n',
        'i': 'a', 'a': 'i',
        's': 'r', 'r': 's'
    };
    
    let encodedText = '';
    
    for (let char of inputText) {
        encodedText += mapping[char] || char;
    }
    
    resultDiv.textContent = encodedText;
}