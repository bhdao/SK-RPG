const express = require('express')
const app = express()
const PORT = 8000

app.use(express.static(__dirname + '/public'));


const enemies = [
  {
    name: 'Angry Fairy',
    level: 5,
    moves: {
      'suplex': {
        type: 'offense',
        power: 2
      },
      'clothesline': {
        type: 'offense',
        power: 1
      }
    },
    hp: 10,
    attack: 1,
    defense: 5,
    speed: 7
  },
  {
    name: 'Angry Potted Plant',
    level: 10,
    moves: {
      'Solar Catastrophe': {
        type: 'offense',
        power: 1000,
      }
    },
    hp: 1,
    attack: 100,
    defense: 1,
    speed: 1
  },
  {
    name: 'Angry Rock',
    level: 9,
    moves: {
      'Gravel Grinder': {
        type: 'offense',
        power: 2,
      }
    },
    hp: 40,
    attack: 1,
    defense: 10,
    speed: 3
  }
];
const allies = [
  {
    name: 'Angry Bard',
    level: 12,
    moves: {
      'Phonic Punch': {
        type: 'offense',
        power: 4
      },
      'Sonnet of Destruction': {
        type: 'offense',
        power: 100
      }
    },
    hp: 20,
    attack: 5,
    defense: 10,
    speed: 4
  },
  {
    name: 'Angry Cleric',
    level: 10,
    moves: {
      'Body Slam': {
        type: 'offense',
        power: 4
      },
      'Tackle': {
        type: 'offense',
        power: 2
      },
      'Clarifying Calisthenics': {
        type: 'defense',
        power: -4,
      }
    },
    hp: 30,
    attack: 1,
    defense: 10,
    speed: 4
  },
  {
    name: 'Angry Nerd with a Sword (he is from the South)',
    level: 7,
    moves: {
      'Spin Cycle Sword Slash of the Southern Sword Style': {
        type: 'offense',
        power: 5
      },
      'Cylindrical Sword Slash of the Southern Sword Style': {
        type: 'offense',
        power: 5
      },
      'Grenade': {
        type: 'offense',
        power: 30,
      }
    },
    hp: 30,
    attack: 4,
    defense: 10,
    speed: 5
  },
]

const entities = {
  'good': allies,
  'bad': enemies,
};

function randomInArr(arr) {
  const randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
}

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Hiya, Server's running on ${PORT}.`);
});

app.get('/api', (request, response) => {
  response.json(entities)
})

app.get('/api/:entity', (request, response) => {
  let req = request.params.entity.toLowerCase();
  console.log(`${req.toUpperCase()} summoned:`);
  if (req == 'ally') {
    response.json(randomInArr(entities.good));
  } else if (req == 'enemy') {
    response.json(randomInArr(entities.bad));
  }
});