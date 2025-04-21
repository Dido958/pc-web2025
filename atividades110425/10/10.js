function calculateWeeks() {
    const date1Input = document.getElementById('date1').value.trim();
    const date2Input = document.getElementById('date2').value.trim();
    const resultDiv = document.getElementById('result');
    
    // Função para validar e converter a data
    function parseDate(dateStr) {
        const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
        if (!dateRegex.test(dateStr)) return null;
        
        const [, day, month, year] = dateStr.match(dateRegex);
        const date = new Date(year, month - 1, day);
        
        // Verifica se a data é válida
        if (isNaN(date.getTime())) return null;
        
        return date;
    }
    
    const date1 = parseDate(date1Input);
    const date2 = parseDate(date2Input);
    
    // Validação das entradas
    if (!date1 || !date2) {
        resultDiv.textContent = 'Por favor, insira duas datas válidas no formato dd/mm/aaaa.';
        resultDiv.style.color = 'red';
        return;
    }
    
    // Calcula a diferença em milissegundos
    const diffTime = Math.abs(date2 - date1);
    
    // Converte para semanas
    const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
    
    // Calcula também a diferença em dias para mostrar como informação adicional
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    // Formata as datas para exibição
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const date1Formatted = date1.toLocaleDateString('pt-BR', options);
    const date2Formatted = date2.toLocaleDateString('pt-BR', options);
    
    // Determina a ordem cronológica
    const [earlierDate, laterDate] = date1 < date2 ? [date1Formatted, date2Formatted] : [date2Formatted, date1Formatted];
    
    // Exibe o resultado
    resultDiv.innerHTML = `
        <p>Distância entre <strong>${date1Formatted}</strong> e <strong>${date2Formatted}</strong>:</p>
        <p><strong>${diffWeeks}</strong> semanas (${diffDays} dias)</p>
        <p>Ordem cronológica: ${earlierDate} → ${laterDate}</p>
    `;
    resultDiv.style.color = 'green';
}