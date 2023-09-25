console.log("hello");
// let waterfall = new Audio("images/IMG_4112.mp3");
// waterfall.loop = true;
// waterfall.volume = 0.1;
// waterfall.play();

function boom() {
    window.prompt("What's the Password?","password");
    alert("Close enough");
    let list = ["screenSaver","aL","sorting","trainSchedule","portfolio","contact"]
    for (let ele of list)
        document.getElementById(ele).classList.add("blowUp");
    document.getElementById("foot").removeChild(document.getElementById("boom"))

}