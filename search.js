// Função para inicializar a busca e adicionar eventos
document.addEventListener("DOMContentLoaded", function() {
    // Inicializar o índice Lunr
    var idx = lunr(function () {
        this.field('title');
        this.field('content');
        this.ref('id');

        // Adicionando documentos ao índice
        for (var i = 0; i < data.length; i++) {
            this.add(data[i]);
        }
    });

    // Função para lidar com a busca
    document.getElementById('search').addEventListener('input', function() {
        var query = this.value;
        var results = idx.search(query);
        var output = '';

        // Exibindo os resultados da busca
        if (results.length) {
            results.forEach(function(result) {
                var doc = data[result.ref];
                output += `<div><a href="#${doc.id}">${doc.title}</a></div>`;
            });
        } else {
            output = 'Nenhum resultado encontrado.';
        }

        document.getElementById('search-results').innerHTML = output;
    });
});
