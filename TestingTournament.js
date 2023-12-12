let wrestlerA = {
    name: 'Wrestler A',
    health: 100,
    moves: [
        {name: 'Move A', damage: 45, type: 'signature'},
        {name: 'Move B', damage: 20, type: 'signature'},
        {name: 'Finishing Move', damage: 100, type: 'finisher'}
    ]
}

let wrestlerB = {
    name: 'Wrestler B',
    health: 100,
    moves: [
        {name: 'Move A', damage: 45, type: 'signature'},
        {name: 'Move B', damage: 20, type: 'signature'},
        {name: 'Finishing Move', damage: 100, type: 'finisher'}
    ]
}

let wrestlerC = {
    name: 'Wrestler C',
    health: 100,
    moves: [
        {name: 'Move A', damage: 45, type: 'signature'},
        {name: 'Move B', damage: 20, type: 'signature'},
        {name: 'Finishing Move', damage: 100, type: 'finisher'}
    ]
}

let wrestlerD = {
    name: 'Wrestler D',
    health: 100,
    moves: [
        {name: 'Move A', damage: 45, type: 'signature'},
        {name: 'Move B', damage: 20, type: 'signature'},
        {name: 'Finishing Move', damage: 100, type: 'finisher'}
    ]
}

let wrestlerTank = {
    name: 'Tank',
    health: 350,
    moves: [
        {name: 'Slow Swing', damage: 15, type: 'signature'},
        {name: 'Bulky Bash', damage: 10, type: 'signature'},
        {name: 'Pancake Plunge', damage: 50, type: 'finisher'}
    ]
}

let wrestlerFeather = {
    name: 'Feather',
    health: 75,
    moves: [
        {name: 'Rapid Strike', damage: 50, type: 'signature'},
        {name: 'Slender Strike', damage: 35, type: 'signature'},
        {name: 'Momentum Control', damage: 100, type: 'finisher'}
    ]
}

function run_tests() {
    let wrestlerList = [wrestlerA, wrestlerB, wrestlerC, wrestlerD]
    console.log("Tournament One Test!")
    tournament(wrestlerList)
    wrestlerList = [wrestlerA, wrestlerB, wrestlerC] //Testing bye system (3 person roster)
    console.log("Tournament Two Test!")
    tournament(wrestlerList)
    wrestlerList = [wrestlerA, wrestlerB] //Testing early exit system (we only have 2 wrestlers)
    console.log("Tournament Three Test!")
    tournament(wrestlerList)
    wrestlerList = [wrestlerA] //Testing what happens if only 1 person shows up (should do bye, then early exit)
    console.log("Tournament Four Test!")
    tournament(wrestlerList)

    wrestlerList = [wrestlerA, wrestlerB, wrestlerTank, wrestlerD] //Testing what happens if a wrestler has more than 100 health
    console.log("Tournament Five Test!")
    tournament(wrestlerList)

    wrestlerList = [wrestlerA, wrestlerB, wrestlerFeather, wrestlerD] //Testing what happens if a wrestler has less than 100 health
    console.log("Tournament Six Test!")
    tournament(wrestlerList)
}