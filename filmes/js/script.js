document.addEventListener('DOMContentLoaded', function() {
    try {
        if (typeof filmes === 'undefined') {
            throw new Error('Dados dos filmes não foram carregados');
        }
        
        const catalogo = document.getElementById('catalogo');
        if (!catalogo) throw new Error('Elemento #catalogo não encontrado');
        
        catalogo.innerHTML = '';
        
        filmes.forEach(filme => {

            let ratingTotal = 0;
            let rating = 0;
            if (filme.opinioes && filme.opinioes.length > 0) {
                filme.opinioes.forEach(op => {
                    ratingTotal += op.rating;
                });
                rating = (ratingTotal / filme.opinioes.length) * 2;
            }
            
            const filmeDiv = document.createElement('div');
            filmeDiv.className = 'filme';
            

            let filmeHTML = `
                <h2 class="titulo">${filme.titulo}</h2>
                <img class="poster" src="${filme.figura}" alt="${filme.titulo}" onerror="this.src='https://via.placeholder.com/300x450?text=Poster+Não+Disponível'">
                <p class="resumo">${filme.resumo}</p>
                <div class="classificacao">
                    <span class="idade ${getCorClassificacao(filme.classificacao)}">
                        Classificação: ${filme.classificacao}+
                    </span>
                </div>
                <div class="rating">
                    Avaliação: ${criarEstrelas(rating)} (${rating.toFixed(1)}/10)
                </div>
                <div class="generos">
                    <strong>Gêneros:</strong> ${filme.generos?.join(', ') || 'N/A'}
                </div>
                <div class="elenco">
                    <strong>Elenco principal:</strong> ${filme.elenco?.slice(0, 5).join(', ') || 'N/A'}
                </div>
            `;
            
            if (filme.titulosSemelhantes?.length > 0) {
                const semelhantes = filmes.filter(f => 
                    filme.titulosSemelhantes.includes(f.id)
                ).map(f => f.titulo);
                
                if (semelhantes.length > 0) {
                    filmeHTML += `
                        <div class="semelhantes">
                            <strong>Títulos semelhantes:</strong> ${semelhantes.join(', ')}
                        </div>
                    `;
                }
            }
            

            if (filme.opinioes?.length > 0) {
                filmeHTML += '<div class="opinioes"><h3>Opiniões:</h3>';
                
                filme.opinioes.forEach(op => {
                    filmeHTML += `
                        <div class="opiniao">
                            <div class="opiniao-estrelas">${criarEstrelas(op.rating * 2)}</div>
                            <p>${op.descricao}</p>
                        </div>
                    `;
                });
                
                filmeHTML += '</div>';
            }
            
            filmeDiv.innerHTML = filmeHTML;
            catalogo.appendChild(filmeDiv);
        });
        
    } catch (error) {
        console.error('Erro:', error);
        const catalogo = document.getElementById('catalogo') || document.body;
        catalogo.innerHTML += `<p class="erro">Erro ao carregar filmes: ${error.message}</p>`;
    }
});

function getCorClassificacao(idade) {
    idade = parseInt(idade) || 0;
    if (idade <= 14) return 'verde';
    if (idade < 18) return 'amarelo';
    return 'vermelho';
}

function criarEstrelas(rating) {
    rating = parseFloat(rating) || 0;
    const estrelasTotal = 5;
    const estrelasCheias = Math.min(estrelasTotal, Math.max(0, Math.round(rating / 2)));
    
    return '★'.repeat(estrelasCheias) + '☆'.repeat(estrelasTotal - estrelasCheias);
}
