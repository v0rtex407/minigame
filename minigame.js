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
}