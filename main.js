function main(){

    //E1
    var name = document.getElementById("name")
    var surname = document.getElementById("surname")
    var age = document.getElementById("age")
    var mark = document.getElementById("mark")
    var sendButton = document.getElementById("send")
    var form = document.getElementById("form")
    var information = new FormData(form)
    var letterCaps = /[A-Z]/
    var letterNCaps = /[a-z]/
    var numbers = /[0-9]/

    sendButton.disabled = true

    name.addEventListener("keyup", () =>{
        ckeckForm()
        if(name.value.length > 25) {
        name.value = name.value.slice(0,25)
        alert("The name only can contain 25 letters")
    }
        if(numbers.test(name.value)) {
        alert("The name can't contains numbers")
        name.value = name.value.slice(0, 0)
    }
    })

    surname.addEventListener("keyup", () =>{
        ckeckForm()
        if(surname.value.length > 50) {
        surname.value = surname.value.slice(0,50)
        alert("The surname only can contain 50 letters")
    }
        if(numbers.test(surname.value)) {
        alert("The surname can't contains numbers")
        surname.value = surname.value.slice(0, 0)
    }
    })

    age.addEventListener("keyup", () => {   
        ckeckForm() 
        if(age.value < 10 || age.value > 100) {
        window.id = setTimeout(timerAge, 2000)
        window.id()
    }
        if(age.value >= 10 || age.value <= 100) {
        clearTimeout(id)
    }
        if(letterCaps.test(age.value) || letterNCaps.test(age.value)) {
        alert("The age only can contains numbers")
        age.value = age.value.slice(0, 0)
    }
    })

    mark.addEventListener("keyup", () =>{
        ckeckForm()
        if(mark.value < 0 || mark.value > 10) {
            alert("Only numbers beetween 0-10")
            mark.value = mark.value.slice(0, 0)
        }
        if(letterCaps.test(mark.value) || letterNCaps.test(mark.value)) {
            alert("Marks only can contain numbers")
            mark.value = mark.value.slice(0, 0)
        }
    })

    //E3
    function ckeckForm() {
    if(name.value.length > 0 && surname.value.length > 0 && age.value.length > 0 && mark.value.length >0) {
        sendButton.disabled = false
    }
    else {
        sendButton.disabled = true
    }
}

    function timerAge() { 
    alert("You must be older than 10 years old and younger than 100 years old")
    age.value = age.value.slice(0, 0)
}

    //E6 //E4
    sendButton.addEventListener("click" , function(e){
        e.preventDefault() 
        alert("The button has been pressed with your data")
        console.log(information.get("name") + information.get("surname") + information.get("age") + information.get("mark")) 

    //E3
    fetch("main.php" , {
        method: "POST",
        body: name.value
    })
    .then(function(response){
        console.log(response)
        return response.json()

    .then(function(data) {
        console.log(data)
        JSON.parse(data)
    })
    })

})
}


main()