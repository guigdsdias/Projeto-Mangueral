<?Php
$link = mysql_connect('localhost', 'root', '');
if (!$link) {
    die('Não foi possível conectar: ' . mysql_error());
}
echo 'Conexão bem sucedida';
mysql_close($link);
?>
