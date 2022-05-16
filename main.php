<?php
//E2
class Student {
    public $name;
    public $surname;
    public $age;
    public $mark;

function __construct($name, $surname, $age, $mark){
    $this->name = $name;
    $this->surname = $surname;
    $this->age = $age;
    $this->mark = $mark;
}
}

class Student_return {
    public $student;
    public $status;

    function __construct($student, $status) {
        $this->student = $student;
        $this->status = $status;
    }
}


$StRet=0;
//E5
$student1 = new Student($_POST["name"], $_POST["surname"], $_POST["age"], $_POST["mark"]);
//E6-------------------------------------------
if($student1->name == "" || $student1->surname == ""  || $student1->age == ""  || $student1->mark == "" ) {
    $StRet = new Student_return($student1, "ERROR");
}
if($student1->name != ""  || $student1->surname != ""  || $student1->age != ""  || $student1->mark != "" ){
//E5-------------------------------------------
    $StRet = new Student_return($student1, "OK");
}
echo json_encode ($StRet);
?>