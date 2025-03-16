const username = document.querySelector('#username')
const SaveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const gummy = document.querySelector('#gummy')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORE = 500

var theImages = new Array()

theImages[0] = 'resources/gummies/bear-blue.png'
theImages[1] = 'resources/gummies/bear-green.png'
theImages[2] = 'resources/gummies/bear-orange.png'
theImages[3] = 'resources/gummies/bear-purple.png'
theImages[4] = 'resources/gummies/bear-red.png'
theImages[5] = 'resources/gummies/bear-yellow.png'
theImages[6] = 'resources/gummies/worm-bluered.jpg'
theImages[7] = 'resources/gummies/worm-greenyellow.jpg'
theImages[8] = 'resources/gummies/worm-orangewhite.jpg'

var j = 0
var p = theImages.length;
var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = theImages[i]
}
var whichImage = Math.round(Math.random()*(p-1));
function showImage(){
document.getElementById('gummy').innerHTML += '<img id="gummyimg" src="'+theImages[whichImage]+'">';
}

// finalScore.innerText = mostRecentScore
showImage()


username.addEventListener('keyup', () => {
    SaveScoreBtn.disabled = !username.value
})

SaveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('index.html')
}
