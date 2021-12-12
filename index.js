$(() => {
    //Ex1

    $("#first-name-button").click(function() {
        let firstNameValue = $("#first-name-input").val()
        $("#first-name-field").append(firstNameValue)
        $("#first-name-input").val('')
    })
    $("#last-name-button").click(function() {
        let lastNameValue = $("#last-name-input").val()
        $("#last-name-field").append(lastNameValue)
        $("#last-name-input").val('')
    })

    //Ex1


    //Ex2

    $("#fill-list-button").click(function() {
        let firstNumberValue = $("#first-number-input").val()
        let secondNumberValue = $("#second-number-input").val()
        for (let i = firstNumberValue; i <= secondNumberValue; i++) {
            let optionMenuNumbers = `<option>${i}</option>`
            $("#numbers-list-ex2").append(optionMenuNumbers)
        }
    })

    //Ex2


    //Ex3


    $("#random-squares-button").click(function() {
        $(".all-squares-ex3").each(function() {
            let randomNumber = Math.floor(Math.random() * 101);
            let x = Math.floor(Math.random() * 256);
            let y = Math.floor(Math.random() * 256);
            let z = Math.floor(Math.random() * 256);
            let randomColor = "rgb(" + x + "," + y + "," + z + ")";
            $(".all-squares-ex3").css("background-color", randomColor);
            $(".all-squares-ex3").text(randomNumber)
        })
    })

    //Ex3


    //Ex4

    $("#blue-squares-button").click(function() {
        $(".blue-square").fadeToggle(2000)
        $(this).text($(this).text() == 'Fade Out Blue Squares' ? 'Fade In Blue Squares' : 'Fade Out Blue Squares')
    })
    $("#red-squares-button").click(function() {
        $(".red-square").fadeToggle(2000)
        $(this).text($(this).text() == 'Fade Out Red Squares' ? 'Fade In Red Squares' : 'Fade Out Red Squares')

    })

    //Ex4

})