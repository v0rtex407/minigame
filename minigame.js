window.onload = () => {
    let b = document.getElementById("ship")
    window.onmousemove = e => b.style.left = (e.pageX - 25) + "px"
    window.ontouchmove = e => {
        b.style.transition = ""
        b.style.left = (e.pageX - 25) + "px"
    }
    window.ontouchstart = e => {
        e.preventDefault()
        b.style.left = (e.pageX - 25) + "px"
        b.style.transition = "left 0.07s linear"
    }
    b.oncontextmenu = e => e.preventDefault()
    b.firstChild.oncontextmenu = e => e.preventDefault()
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
        const fall = () => {
            c.style.top = (parseFloat(c.style.top) + 1.2) + "px";
            if ((b.offsetTop <= c.offsetTop + 70 && b.offsetTop + 90 >= c.offsetTop) && (b.offsetLeft >= c.offsetLeft - 50 && b.offsetLeft <= c.offsetLeft + 70) && c.getAttribute("value") != "1" && b.style.transition != "opacity 1s ease 0s") {
                if (b.firstChild.getAttribute("src") == "3lives.png") b.firstChild.src = "2lives.png";
                else if (b.firstChild.getAttribute("src") == "2lives.png") b.firstChild.src = "1life.png"
                else if (b.firstChild.getAttribute("src") == "1life.png") {
                    alert("Don't give up, you can do it!")
                    window.location.reload()
                }
                c.setAttribute("value", "1")
                b.style.transition = "opacity 1s ease 0s"
                b.style.opacity = "0.5"
                const glow = () => {
                    b.style.opacity = "1"
                    b.removeEventListener("transitionend", glow)
                    const glow2 = () => {
                        b.style.opacity = "0.5"
                        b.removeEventListener("transitionend", glow2)
                        const glow3 = () => {
                            b.style.opacity = "1"
                            b.removeEventListener("transitionend", glow3)
                            const glow4 = () => {
                                b.style.transition = ""
                                c.value = "0"
                                b.removeEventListener("transitionend", glow4)
                            }
                            b.addEventListener("transitionend", glow4)
                        }
                        b.addEventListener("transitionend", glow3)
                    }
                    b.addEventListener("transitionend", glow2)
                }
                b.addEventListener("transitionend", glow)
            }
        }
        setInterval(fall, 1)
    }
    setInterval(enemy, 1500)
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
                if ((parseFloat(x.style.top) + parseFloat(c.style.bottom) + 120 >= window.innerHeight && parseFloat(x.style.top) <= window.innerHeight - 45) && (c.offsetLeft >= x.offsetLeft - 20 && c.offsetLeft <= x.offsetLeft + 70)) {
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