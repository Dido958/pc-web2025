function formatDate() {
    const dateInput = document.getElementById('birthDate').value;
    const resultDiv = document.getElementById('result');
    
    const dateParts = dateInput.split('/');
    if (dateParts.length !== 3) {
        resultDiv.textContent = 'Formato inválido. Use dd/mm/aaaa.';
        return;
    }
    
    const day = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1; // Mês começa em 0 no JavaScript
    const year = parseInt(dateParts[2]);
    
    const months = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
    
    if (isNaN(day) || isNaN(month) || isNaN(year) || month < 0 || month > 11) {
        resultDiv.textContent = 'Data inválida.';
        return;
    }
    
    resultDiv.textContent = `${day} de ${months[month]} de ${year}`;
}