var Proton = {
    __TickData: { // tick time not made yet 
        TickCount: 0,
        TickTime: 0,
    },

    __TickFunction: () => {},
    __Ticking: false,
    
    plotFunction: (Equation, Accuracy) => {
        var Max = 10*Accuracy
        var EquationLatex = `(-10,${Equation(-Max)})`
        
        for (let X = (-Max)+1; X < Max; X++) {
            EquationLatex += `,(${X/Accuracy},${Equation(X/Accuracy)})`
        }
        Calc.setExpression({
            type: "expression",
            latex: EquationLatex,
        })
    },

    plotPoint: (X, Y) => {
        
    },

    on: (Event, Function) => {
        switch ( Event) {
            case ("Tick") : { // more soon
                Proton.__TickFunction = Function
                break
            }
        }
    },
    
    tick: undefined,

    start: () => {
        Proton.__Ticking = true
        requestAnimationFrame(Proton.tick)
    },

    pause: () => {
        Proton.__Ticking = false
    },
}

Proton.tick = () => {
    Proton.__TickFunction(Proton.__TickData)
    Proton.__TickData.TickCount += 1
    if (Proton.__Ticking) {
        requestAnimationFrame(Proton.tick)
    }
}

// tests

Proton.plotFunction((x) => {
    return 2**x
}, 10)

Proton.on("Tick", (Event) => {
    console.log("e")
})

Proton.start()
