function opensidebar(){
    document.querySelector(".sidebar").style.width="250px";
}

function closesidebar(){
    document.querySelector(".sidebar").style.width="0px"
}

function verify() {
    let age = document.getElementById("age").value;
    const imageicon= document.getElementById("image")

    if (age < 18) {
        alert("You are not an adult");
    } else {
        alert("You are an adult");
        // Optionally, you can set a different image for adults here if needed.
    }
}
