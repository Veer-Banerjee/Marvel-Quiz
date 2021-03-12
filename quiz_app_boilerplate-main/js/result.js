function reset(){
    location.href = "./index.html"
}

var points = sessionStorage.getItem("points")

var head = document.getElementById("result-header")
var body = document.getElementById("result-body")

if(points>=5){
    head.innerText = "That's nice ! You've got "+points+" out of 6 right"
    body.innerText = "You worked hard and it paid off! nice work figuring out these tough questions, you earned it buddy"
}
else{
    head.innerText = "Oops ! You've got only "+points+" out of 6 right"
    body.innerText = "Marvel has created nore avengers than even the geekiest of geeks qould be able to remember! But that doesn't mean you shouldn't try!"
}
