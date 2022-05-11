
// document.getElementById("inputfield").value

// document.getElementById("row1").children[0].innerHTML


let arr_span = Array.from(document.getElementById("row1").children)
let arr_words = arr_span.map(span=>span.innerHTML)
let one_str = arr_words.join(" ")


let counter = 0
document.getElementById("inputfield").addEventListener("keypress", function(event) {
    if(event.key ==" "){
        document.getElementById("inputfield").value = arr_words[counter]
        console.log(counter)
        counter++

    }
})

