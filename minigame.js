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
    const laser = () => {
        let c = document.createElement("div")
        c.className = "laser"
        document.body.appendChild(c)
        let d = parseFloat(b.style.left) + 15
        c.style.left = d + "px"
        c.style.bottom = "44px"
        const move = () => c.style.bottom = (parseFloat(c.style.bottom) + 6) + "px"
        setInterval(move, 1)
    }
    setInterval(laser, 600)
    const enemy = () => {
        let c = document.createElement("div")
        document.body.appendChild(c)
    }
}