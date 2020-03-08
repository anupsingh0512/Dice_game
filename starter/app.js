/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score,roundscore,activeplayer;
scores=[0,0];
roundscore=0;
activeplayer=0;

//dice=Math.floor(Math.random()*6)+1;
//document.querySelector('#current-' + activeplayer).textContent=dice;
//document.querySelector('#current-' + activeplayer).textContent='<em>' + dice +'</em>';

document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.querySelector('.btn-roll').addEventListener('click',function()  
{
    //1.Random number

    var dice=Math.floor(Math.random()*6)+1;

    //2.display the result

    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+ dice + '.png';

    //3.Update the round score IF the rolled number was not a 1
    if(dice!==1)
    {
        // Add Score 
        roundscore+=dice;
        document.querySelector('#current-' + activeplayer).textContent=roundscore;
        
    }
    else 
    {
        //Next Player 
        NextPlayer();
        
       // document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-0-panel').classList.add('active');
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
// Add current Score to Global Score 
scores[activeplayer]+=roundscore;

//Update the UI 
document.querySelector('#score-'+ activeplayer).textContent=scores[activeplayer];

//Check if player won the game  
if(scores[activeplayer]>=20)
{
    document.querySelector('#name-' + activeplayer).textContent='Winner!';
    document.querySelector('.dice').style.display='none';
    document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
    document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');

}
else
{
    NextPlayer();
}

//NextPlayer
       NextPlayer();

});

function NextPlayer()
{
    activeplayer===0?activeplayer = 1 : activeplayer=0;
    roundscore=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
}