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
    window.oncontextmenu = e => e.preventDefault()
    b.oncontextmenu = e => e.preventDefault()
    const laser = () => {
        let c = document.createElement("div")
        document.body.appendChild(c)
        let d = parseFloat(b.style.left) + 15
        if (b.style.left == "calc(50% - 25px)") c.style = "position:fixed;bottom:44px;left:calc(50% - 10px);background-color:red;width:20px;height:60px;z-index:-2"
        else c.style = `position:fixed;bottom:44px;left:${d}px;background-color:red;width:20px;height:60px;z-index:-2`
        const move = () => c.style.bottom = (parseFloat(c.style.bottom) + 6) + "px"
        setInterval(move, 1)
    }
    setInterval(laser, 600)
}