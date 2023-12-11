/*
 * Pro Wrestling Tournament Instructions
 * Only allowed to use JavaScript or TypeScript.
 * Will be GIVEN array of wrestler objects, which stores 1-4 wrestlers in it.
 *     Wrestlers matched against an empty opponent slot are given an auto-win essentially (they get a bye)
 * Wrestler objects have a Name, Health, and an array of available moves.
 * Matches are turn based, where each wrestler selects a random move to use on their opponents.
 *     Finisher moves have a 50% failure rate unless the target is below 45 health.
 * After each move, the target has their health reduced by the damage value of the move used on them
 * Match continues until one wrestler has zero or less health.
 * Each turn, display the move performed as well as the health status of both wrestlers
 *     Note: This may contradict the example provided.
 * Winner of the current match MUST be declared before proceeding to the next match.
 *     Once all matches are complete, declare the winner of the tournament
 */
//let tournamentQualifier = []; //Will house at most 4 wrestlers
let tournamentFinals = [] //Will hold at most 2 wrestlers

/*
 * A helper function for generating random numbers. 
 */
function randomIntGenerator(min, max) { //This is NOT inclusive. Max should be +1 from required highest value.
    return Math.floor(Math.random() * (max - min)) + min; // Source is W3Schools: https://www.w3schools.com/JS/js_random.asp
}

/*
 * Takes in a list of wrestlers and runs the tournament using them.
 *
 * Wrestler list cannot exceed 4 wrestlers
 */
function tournament(wrestlerList) {
    
}

function match(wrestlerOne, wrestlerTwo) {
    let roundCounter = 1; //What round are we on?
    let bothFightersStillUp = true //Are both fighters still above zero health?

    let wrestlerOneMatchHealth = wrestlerOne.health
    let wrestlerTwoMatchHealth = wrestlerTwo.health
    //Since health resets after each match, we do NOT want to modify the health of the wrestlers directly!
    //Using wrestlerOneMatchHealth and wrestlerTwoMatchHealth acts as a way to ensure that health loss is match specific, not global.

    let currentMove = -1; //Initialized to -1 so we don't accidentally have a default move.

    while(bothFightersStillUp) { //While both out fighters are still above zero health
        console.log("Round " + roundCounter);
        currentMove = selectMove(wrestlerOne);
        if(wrestlerOne.moves[currentMove].type === "finisher" && randomIntGenerator(0,2) == 0 && wrestlerTwoMatchHealth > 45) {
            //Is the move a finisher? Do we lose the 50%? Does our opponent have greater than 45 health?
            //If yes, then we meet all conditions for a failed finisher move.
            console.log(wrestlerOne.name + " attempted to use " + wrestlerOne.moves[currentMove].name + ", but it failed!");
        }
        else {
            console.log(wrestlerOne.name + " performs " + wrestlerOne.moves[currentMove].name + " on " + wrestlerTwo.name);
            wrestlerTwoMatchHealth -= wrestlerOne.moves[currentMove].damage;
        }

        console.log(wrestlerOne.name + "'s health: " + wrestlerOneMatchHealth);
        console.log(wrestlerTwo.name + "'s health: " + wrestlerTwoMatchHealth);

        if(wrestlerTwoMatchHealth <= 0) {
            bothFightersStillUp = false;
            break;
        }

        currentMove = selectMove(wrestlerTwo);
        if(wrestlerTwo.moves[currentMove].type === "finisher" && randomIntGenerator(0,2) == 0) {
            console.log(wrestlerTwo.name + " attempted to use " + wrestlerTwo.moves[currentMove].name + ", but it failed!");
        }
    }
}

function selectMove(wrestler) {
    let numMoves = wrestler.moves.length;
    return randomIntGenerator(0,numMoves); //Selects a random move from the move list.
}