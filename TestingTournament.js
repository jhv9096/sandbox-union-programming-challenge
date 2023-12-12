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

function run_tests() {
    let wrestlerList = [wrestlerA, wrestlerB, wrestlerC, wrestlerD]
    tournament(wrestlerList)
}