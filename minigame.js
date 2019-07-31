window.onload = () => {
    let b = document.getElementById("ship")
    window.onmousemove = e => b.style.left = (e.pageX - 25) + "px"
    window.ontouchmove = e => {
        b.style.transition = ""
        b.style.left = (e.pageX - 25) + "px"
    }
    window.ontouchstart = e => {
        b.style.left = (e.pageX - 25) + "px"
        b.style.transition = "left 0.07s linear"
    }
    b.oncontextmenu = e => e.preventDefault()
    window.oncontextmenu = e => e.preventDefault()
    let slot = ["16.66% - 58.33px", "33.32% - 46.66px", "49.98% - 34.99px", "66.64% - 23.32px", "83.3% - 11.65px"]
    let track = []
    const enemy = () => {
        let c = document.createElement("div")
        document.body.appendChild(c)
        c.className = "enemy"
        c.style.top = "-70px";
        let y = slot[Math.round(Math.random() * 4)]
        if (track[track.length - 1] == y) y = slot.filter(x => x != y)[Math.round(Math.random() * 3)]
        c.style.left = `calc(${y})`
        track.push(y)
        const fall = () => c.style.top = (parseFloat(c.style.top) + 1) + "px";
        setInterval(fall, 1)
    }
    setInterval(enemy, 1800)
    const laser = () => {
        let c = document.createElement("div")
        c.className = "laser"
        document.body.appendChild(c)
        let d = parseFloat(b.style.left) + 15
        c.style.left = d + "px"
        c.style.bottom = "44px"
        const move = () => {
            let enemy = document.getElementsByClassName("enemy")
            c.style.bottom = (parseFloat(c.style.bottom) + 6) + "px"
            for (let x of enemy) {
                if ((parseFloat(x.style.top) + parseFloat(c.style.bottom) + 120) >= window.innerHeight && (c.offsetLeft >= x.offsetLeft - 20 && c.offsetLeft <= x.offsetLeft + 70)) {
                    if (x.style.opacity == 0.5) document.body.removeChild(x)
                    else x.style.opacity = 0.5
                    document.body.removeChild(c)
                    clearInterval(t)
                }
            }
            if (parseFloat(c.style.bottom) >= window.innerHeight) {
                document.body.removeChild(c)
                clearInterval(t)
            }
        }
        let t = setInterval(move, 1)
    }
    setInterval(laser, 600)
}