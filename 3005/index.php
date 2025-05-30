    <?php
    $arquivio=fopen("meu arquivo.txt","w");
    if($arquivio){
        fwrite($arquivio, "muito tenkiu yo");
        fclose($arquivio);
    }
    ?>