<?php
$_POST = json_decode(file_get_contents('php://input'), true); 
//? Конвертация входных данных из JSON 

echo var_dump($_POST);
