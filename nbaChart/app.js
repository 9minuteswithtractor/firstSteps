// console.log('all good!');

// TODO - title
document.body.style.textAlign = 'center'
const h1 = document.createElement('h1')
h1.innerHTML = '<code>NBA_CHART</code>'
h1.style.fontSize = '33px'
h1.style.color = 'olive'
h1.classList.add('nbaTitle')




// TODO - BOIL SOME DATA 
const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]



// TODO - implementing data in DOM 
// FIXME - refactor code 


const makeChart = (games, targetTeam) => {
    const ulParent = document.createElement('ul');
    for (let game of games){
        // const {homeTeam, awayTeam} = game; // destructuring 
        const gameLi = document.createElement('li');
        gameLi.innerHTML = getScoreLine(game)
       
        

        
        gameLi.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss') 
        
        
        ulParent.appendChild(gameLi)
    }
    return ulParent;
};

const isWinner = ({homeTeam, awayTeam}, targetTeam) => {
    const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
    return target.isWinner;
}

const getScoreLine = ({homeTeam, awayTeam}) => {
    const {team: aTeam, points: aPoints} = awayTeam; // newKeyNames
    const {team: hTeam, points: hPoints} = homeTeam;
    const teamNames = `${aTeam} @ ${hTeam}`
    let scoreLine;
    if (aPoints > hPoints){ 
        scoreLine = `<b>${aPoints}</b> - ${hPoints}`;
    } else {scoreLine = `${aPoints} - <b>${hPoints}</b>`}
    return `${teamNames} ${scoreLine}`;
}







// FIXME @__making nbaChart more reusable :

const gsSection = document.querySelector('#gs')
const hrSection = document.querySelector('#hr')
const gsChart = makeChart(warriorsGames, 'Golden State');
const hrChart = makeChart(warriorsGames, 'Houston');

gsSection.appendChild(gsChart);
hrSection.appendChild(hrChart);



// const chart2 = makeChart(warriorsGames);
// document.body.append(chart2);


// document.body.prepend(h1)

//  TODO @__ practice :

// FIXME - data@laptops

// const topLappiesForProgrammers = [
    
//         {
//             brand: 'asusZenBook',
//             chip: '2.8GHz',
//             ram: '16GB',
//             ssd: '256GB',
//             os: 'winOs',
//             screen: '14"' 
//         },
//         {
//             brand: 'razer',
//             chip: '3.6GHz',
//             ram: '16GB',
//             ssd: '256GB',
//             os: 'winOS',
//             screen: '15"'
//         }        
    
// ];

// const ulTopLappies_parent = document.createElement('ul')


// for (let lappie of topLappiesForProgrammers){
//     const {brand, chip, ram, ssd, os, screen} = lappie;
//     const lappieLi = document.createElement('li');
//     // console.log(`${brand}, ${chip}, ${ram}, ${ssd}`);
//     // ulTopLappies_parent.appendChild(lappieLi)
//     // console.log(ulTopLappies_parent);
    
//     lappieLi.innerHTML = `<b>${brand}</b>, ${chip}, ${ram}, ${ssd}, ${os}`;
//     lappieLi.classList.add('lappie');
//     ulTopLappies_parent.appendChild(lappieLi);
// }

// document.body.append(ulTopLappies_parent)