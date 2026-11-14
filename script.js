const state = {
  stars: 0,
  sparkle: 10,
  health: 10,
  score: 0,
  inventory: ['Rainbow Map'],
  scene: 'intro',
  enemyHealth: 100,
  soundOn: true,
};

const inventorySet = new Set(state.inventory);

const scenes = {
  intro: {
    chapter: 'Chapter 1',
    title: 'A New Adventure Begins',
    sceneTag: 'Sunrise Path',
    visual: '🌤️',
    text:
      'Lulu wakes up with a bright smile and a mission: collect the lost stars before the moon rises.',
    mission: 'Find 3 magical stars and save the sparkle kingdom.',
    enemyName: 'Shadow Fog',
    enemyHealth: 100,
    choices: [
      {
        label: 'Follow the rainbow trail',
        next: 'meadow',
        className: 'good',
        effects: { score: 15, sparkle: 1 },
      },
      {
        label: 'Visit the bubble forest',
        next: 'forest',
        className: 'secondary',
        effects: { score: 18 },
      }
    ]
  },
  meadow: {
    chapter: 'Chapter 2',
    title: 'Rainbow Meadow',
    sceneTag: 'Blooming Trail',
    visual: '🌈',
    text:
      'The grass sparkles as Lulu skips across a bright rainbow path. A golden star peeks from a flower bush.',
    mission: 'Collect star power and keep your sparkle glowing.',
    enemyName: 'Moss Monster',
    enemyHealth: 80,
    choices: [
      {
        label: 'Pick the golden star',
        next: 'lake',
        className: 'good',
        effects: { stars: 1, score: 40, sparkle: 2 },
        item: 'Golden Star'
      },
      {
        label: 'Defeat the moss monster',
        next: 'battle',
        className: 'enemy',
        effects: { score: 25 },
      }
    ]
  },
  forest: {
    chapter: 'Chapter 2',
    title: 'Bubble Forest',
    sceneTag: 'Bubble Grove',
    visual: '🌿',
    text:
      'Lulu enters a forest where each leaf bubbles with cheerful music. A friendly fox shows her a hidden clue.',
    mission: 'Use clever choices to gather the elemental sparkles.',
    enemyName: 'Whisper Wisp',
    enemyHealth: 65,
    choices: [
      {
        label: 'Follow the fox to the river',
        next: 'river',
        className: 'good',
        effects: { score: 20, sparkle: 2 },
      },
      {
        label: 'Challenge the whisper wisp',
        next: 'battle',
        className: 'enemy',
        effects: { score: 30 }
      }
    ]
  },
  lake: {
    chapter: 'Chapter 3',
    title: 'Crystal Lake',
    sceneTag: 'Moonwater',
    visual: '💎',
    text:
      'The lake reflects a glowing sky. Lulu sees a second star floating above the water and hears a giggle from the waves.',
    mission: 'Keep moving before the evening fog arrives.',
    enemyName: 'Tide Troll',
    enemyHealth: 90,
    choices: [
      {
        label: 'Catch the star from the water',
        next: 'castle',
        className: 'good',
        effects: { stars: 1, score: 45, sparkle: 3 },
        item: 'Crystal Star'
      },
      {
        label: 'Use a sparkle splash attack',
        next: 'battle',
        className: 'enemy',
        effects: { score: 35, sparkle: -1 }
      }
    ]
  },
  river: {
    chapter: 'Chapter 3',
    title: 'Silver River',
    sceneTag: 'River Run',
    visual: '🛶',
    text:
      'Lulu hops onto a tiny boat and drifts toward a glowing island where a star rests on top of a waterfall.',
    mission: 'Pick your route carefully to avoid the sleepy frogs.',
    enemyName: 'Frog Bandit',
    enemyHealth: 75,
    choices: [
      {
        label: 'Grab the waterfall star',
        next: 'castle',
        className: 'good',
        effects: { stars: 1, score: 50, sparkle: 2 },
        item: 'Waterfall Star'
      },
      {
        label: 'Race the frogs to the island',
        next: 'battle',
        className: 'enemy',
        effects: { score: 28, health: -1 }
      }
    ]
  },
  battle: {
    chapter: 'Chapter 4',
    title: 'Sparkle Battle',
    sceneTag: 'Hero Moment',
    visual: '⚡',
    text:
      'A sneaky villain blocks the path. Lulu must prove her courage with a magical move.',
    mission: 'Choose the best attack and protect your health.',
    enemyName: 'Shadow Fog',
    enemyHealth: 100,
    choices: [
      {
        label: 'Use a rainbow blast',
        next: 'castle',
        className: 'enemy',
        effects: { score: 70, sparkle: -2, health: 1 },
      },
      {
        label: 'Perform a happy dance attack',
        next: 'finale',
        className: 'good',
        effects: { score: 85, sparkle: 3, health: 2 },
      }
    ]
  },
  castle: {
    chapter: 'Chapter 5',
    title: 'Crystal Castle',
    sceneTag: 'Castle Gate',
    visual: '🏰',
    text:
      'The crystal gate opens as Lulu arrives with several stars shining in her hands. The kingdom prepares for a celebration.',
    mission: 'Finish the adventure and light the sky with joy.',
    enemyName: 'Final Sentinel',
    enemyHealth: 60,
    choices: [
      {
        label: 'Light the star crown',
        next: 'endingWin',
        className: 'good',
        effects: { stars: 1, score: 100, sparkle: 4 },
        item: 'Star Crown'
      },
      {
        label: 'Ask the castle to sing for everyone',
        next: 'endingWin',
        className: 'secondary',
        effects: { score: 90, sparkle: 2 }
      }
    ]
  },
  finale: {
    chapter: 'Finale',
    title: 'The Heroic Finale',
    sceneTag: 'Grand Celebration',
    visual: '🎉',
    text:
      'Lulu’s happy dance fills the air with bright sparks and breaks the villain’s fog. The sky becomes full of color.',
    mission: 'Bring the magic home and celebrate the victory.',
    enemyName: 'Broken Fog',
    enemyHealth: 0,
    choices: [
      {
        label: 'Enter the crystal castle',
        next: 'endingWin',
        className: 'good',
        effects: { stars: 1, score: 110, sparkle: 4 },
      }
    ]
  },
  endingWin: {
    chapter: 'Adventure Complete',
    title: 'Lulu Saves the Sparkle Kingdom!',
    sceneTag: 'Victory',
    visual: '🌟',
    text:
      'The stars shine, the castle glows, and everyone dances as Lulu becomes the true hero of the adventure. The kingdom is safe and full of joy!',
    mission: 'You won! Play again for a new cartoon adventure.',
    enemyName: 'Defeated',
    enemyHealth: 0,
    choices: [
      {
        label: 'Play again',
        next: 'intro',
        className: 'good',
        effects: { score: 0, sparkle: 10, health: 10, stars: 0 },
      }
    ]
  }
};

const els = {
  stars: document.getElementById('stars'),
  sparkle: document.getElementById('sparkle'),
  health: document.getElementById('health'),
  score: document.getElementById('score'),
  inventory: document.getElementById('inventory'),
  sceneTag: document.getElementById('sceneTag'),
  chapterLabel: document.getElementById('chapterLabel'),
  sceneTitle: document.getElementById('sceneTitle'),
  sceneText: document.getElementById('sceneText'),
  choices: document.getElementById('choices'),
  missionText: document.getElementById('missionText'),
  enemyName: document.getElementById('enemyName'),
  enemyHealthBar: document.getElementById('enemyHealthBar'),
  enemyStatus: document.getElementById('enemyStatus'),
  sceneVisual: document.getElementById('sceneVisual'),
  restartBtn: document.getElementById('restartBtn'),
  soundToggle: document.getElementById('soundToggle'),
};

function addInventoryItem(item) {
  if (!item) return;
  if (!inventorySet.has(item)) {
    inventorySet.add(item);
    state.inventory.push(item);
  }
}

function playTone(type = 'good') {
  if (!state.soundOn) return;

  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;

  const audio = new AudioCtx();
  const oscillator = audio.createOscillator();
  const gain = audio.createGain();

  oscillator.type = type === 'enemy' ? 'sawtooth' : 'triangle';
  oscillator.frequency.value = type === 'enemy' ? 180 : 440;
  gain.gain.value = 0.04;

  oscillator.connect(gain);
  gain.connect(audio.destination);

  oscillator.start();
  oscillator.stop(audio.currentTime + 0.18);

  setTimeout(() => audio.close(), 220);
}

function updateHud() {
  els.stars.textContent = String(state.stars);
  els.sparkle.textContent = String(state.sparkle);
  els.health.textContent = String(state.health);
  els.score.textContent = String(state.score);

  const inventoryItems = state.inventory.length ? state.inventory : ['Empty pack'];
  els.inventory.innerHTML = inventoryItems
    .map((item) => `<li>${item}</li>`)
    .join('');
}

function updateEnemy(scene) {
  const enemyName = scene.enemyName || 'Shadow Fog';
  const enemyHealth = Math.max(0, scene.enemyHealth ?? 100);
  els.enemyName.textContent = enemyName;
  els.enemyHealthBar.style.width = `${enemyHealth}%`;
  els.enemyStatus.textContent =
    enemyHealth > 0 ? 'Ready to cause mischief.' : 'Defeated!';
}

function applyEffects(effects = {}) {
  const keys = ['stars', 'sparkle', 'health', 'score'];
  keys.forEach((key) => {
    if (typeof effects[key] === 'number') {
      state[key] = Math.max(0, state[key] + effects[key]);
    }
  });

  if (state.sparkle <= 0) {
    state.sparkle = 0;
  }

  if (state.health <= 0) {
    state.health = 0;
    state.scene = 'intro';
  }
}

function renderScene() {
  const scene = scenes[state.scene];
  if (!scene) return;

  els.chapterLabel.textContent = scene.chapter;
  els.sceneTitle.textContent = scene.title;
  els.sceneText.textContent = scene.text;
  els.missionText.textContent = scene.mission;
  els.sceneTag.textContent = scene.sceneTag;
  els.sceneVisual.querySelector('.character-display')?.remove();
  const display = document.createElement('div');
  display.className = 'character-display';
  display.textContent = scene.visual;
  els.sceneVisual.appendChild(display);

  updateEnemy(scene);
  updateHud();

  els.choices.innerHTML = '';
  scene.choices.forEach((choice) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = choice.label;
    button.className = `choice-btn ${choice.className || ''}`;
    button.addEventListener('click', () => {
      applyEffects(choice.effects);
      addInventoryItem(choice.item);

      if (choice.effects && choice.effects.health !== undefined && choice.effects.health < 0) {
        playTone('enemy');
      } else {
        playTone('good');
      }

      if (state.stars >= 3) {
        state.scene = 'castle';
      } else {
        state.scene = choice.next;
      }

      if (state.health <= 0) {
        state.scene = 'intro';
      }

      renderScene();
    });
    els.choices.appendChild(button);
  });
}

els.restartBtn.addEventListener('click', () => {
  Object.assign(state, {
    stars: 0,
    sparkle: 10,
    health: 10,
    score: 0,
    inventory: ['Rainbow Map'],
    scene: 'intro',
    enemyHealth: 100,
  });
  inventorySet.clear();
  state.inventory.forEach((item) => inventorySet.add(item));
  renderScene();
  playTone('good');
});

els.soundToggle.addEventListener('click', () => {
  state.soundOn = !state.soundOn;
  els.soundToggle.textContent = state.soundOn ? '🔊 Sound On' : '🔇 Sound Off';
});

renderScene();
