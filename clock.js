function showTime() {
    const output = document.querySelector("#my-content")
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let session = "PM"

    if (h == 0) {
        h = 12
    }
    if (h < 12) {
        h = h - 12
        session = "AM" 
    }

    h = (h < 10) ? "0" + h : h; 
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    const time = h + ":" + m + ":" + s + " " + session
    output.innerText = time
    output.textContent = time
    setTimeout(showTime, 1000) 

}

showTime()