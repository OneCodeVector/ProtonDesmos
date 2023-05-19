var Proton = {
    __TickData: {
        TickCount: 0,
        TickTime: 0,
    },

    __TickFunction: () => {},
    __Ticking: false,
    
    plotFunction: (Equation, Accuracy) => {
        let Max = 10*Accuracy
        let EquationLatex = `(-10,${Equation(-Max)})`
        
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
            case ("Tick") : {
                Proton.__TickFunction = Function
                break
            }
        }
    },
    
    tick: undefined,
}

Proton.tick = () => {
    Proton.__TickFunction(Proton.__TickData)
    Proton.__TickData.TickCount += 1
    if (Proton.__Ticking) {
        requestAnimationFrame(Proton.tick)
    }
}
