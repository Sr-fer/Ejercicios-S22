<html>
<body>
<?php
//E2
class Student {
    public $name;
    public $surname;
    public $age;
    public $mark;

function __construct($name, $surname, $age, $mark){
    $this->$name = $name;
    $this->$surname = $surname;
    $this->$age = $age;
    $this->$mark = $mark;
}
}

//E5
$student1 = new Student($_POST["name"], $_POST["surname"], $_POST["age"], $_POST["mark"]);

//E6-------------------------------------------
if($_POST["name"] = "" || $_POST["surname"] = ""  || $_POST["age"] = ""  || $_POST["mark"] = "" ) {
    echo "ERROR";
}
if($_POST["name"] != ""  || $_POST["surname"] != ""  || $_POST["age"] != ""  || $_POST["mark"] != "" ){
    echo "OK";
    echo "<br>";
    //E5-------------------------------------------
    echo json_encode ($student1); //array? //null
}
?>
</body>
</html>
