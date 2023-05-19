Proton.plotFunction((x) => {
    return 2**x
}, 10)

Proton.on("Tick", (Event) => {
    console.log("e")
})

Proton.__Ticking = true
requestAnimationFrame(Proton.tick)
