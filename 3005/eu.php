<?php
$array=["Diogo","Yohanan","Marques"];
$arquivo=fopen("novo_arquivo.txt","w");
$nome=readline("infrome seu nome: \n");
array_push($array,$nome);
if($arquivo){
    fwrite($arquivo,implode("\n",$array));
    fclose($arquivo);
}
?>