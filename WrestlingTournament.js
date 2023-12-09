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
 * Takes in a list of wrestlers and runs the tournament using them.
 *
 * Wrestler list cannot exceed 4 wrestlers
 */
function tournament(wrestlerList) {

}

function match(wrestlerOne, wrestlerTwo) {

}