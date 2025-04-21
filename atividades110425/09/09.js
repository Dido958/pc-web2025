function calculateLifeDays() {
    const dateInput = document.getElementById('birthDate').value.trim();
    const resultDiv = document.getElementById('result');
    
    // Validação do formato da data
    const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!dateRegex.test(dateInput)) {
        resultDiv.textContent = 'Formato inválido. Use dd/mm/aaaa.';
        resultDiv.style.color = 'red';
        return;
    }
    
    const [, day, month, year] = dateInput.match(dateRegex);
    const birthDate = new Date(year, month - 1, day);
    
    // Verifica se a data é válida
    if (isNaN(birthDate.getTime())) {
        resultDiv.textContent = 'Data inválida. Verifique os valores.';
        resultDiv.style.color = 'red';
        return;
    }
    
    // Verifica se a data não é no futuro
    const today = new Date();
    if (birthDate > today) {
        resultDiv.textContent = 'A data de nascimento não pode ser no futuro!';
        resultDiv.style.color = 'red';
        return;
    }
    
    // Calcula a diferença em dias
    const diffTime = today - birthDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    // Formata a saída
    resultDiv.textContent = `Você tem ${diffDays.toLocaleString()} dias de vida!`;
    resultDiv.style.color = 'green';
    
    // Bônus: calcular anos, meses e dias restantes
    const ageDate = new Date(diffTime);
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    
    resultDiv.innerHTML += `<br><small>Isso equivale a aproximadamente ${years} anos, ${months} meses e ${days} dias.</small>`;
}