function createSlotMachine(containerId, {
  title = 'Default Title',
  developer = 'Default Developer',
  imageSrc = './assets/images/Slot Image.png',
  imageAlt = 'Default Alt',
}) {
  const template = document.getElementById('slot-machine-template');
  
  const clone = template.content.cloneNode(true);

  const titleEl = clone.querySelector('.slot-machine__title');
  titleEl.textContent = title;
  
  const developerEl = clone.querySelector('.slot-machine__developer');
  developerEl.textContent = developer;
  
  const imgEl = clone.querySelector('.slot-machine__image');
  imgEl.src = imageSrc;
  imgEl.alt = imageAlt;

  const slotMachinesContainer = document.getElementById(containerId);
  slotMachinesContainer.appendChild(clone);
}

const slotData = [
  {
    title: 'Gates of Olympus',
    developer: 'Pragmatic Play',
    imageSrc: './assets/images/Slot Image.png',
    imageAlt: 'Gates of Olympus',
  },
  {
    title: "'Dragon's Fortune'",
    developer: 'NetEnt', 
    imageSrc: './assets/images/Slot Image.png',
    imageAlt: "'Dragon's Fortune'",
  },
  {
    title: 'Mystic Moon',
    developer: 'Microgaming',
    imageSrc: './assets/images/Slot Image.png', 
    imageAlt: 'Mystic Moon',
  },
  {
    title: 'Treasure Island',
    developer: 'Playtech',
    imageSrc: './assets/images/Slot Image.png',
    imageAlt: 'Treasure Island',
  },
  {
    title: 'Wild West Gold',
    developer: 'Pragmatic Play',
    imageSrc: './assets/images/Slot Image.png',
    imageAlt: 'Wild West Gold',
  },
  {
    title: 'Book of Dead',
    developer: "Play'n GO'",
    imageSrc: './assets/images/Slot Image.png',
    imageAlt: 'Book of Dead',
  },
  {
    title: 'Starburst',
    developer: 'NetEnt',
    imageSrc: './assets/images/Slot Image.png',
    imageAlt: 'Starburst',
  },
  {
    title: 'Buffalo Blitz',
    developer: 'Playtech',
    imageSrc: './assets/images/Slot Image.png',
    imageAlt: 'Buffalo Blitz',
  },
  {
    title: 'Immortal Romance',
    developer: 'Microgaming',
    imageSrc: './assets/images/Slot Image.png',
    imageAlt: 'Immortal Romance',
  },
  {
    title: 'Legacy of Egypt',
    developer: "'Play'n GO'",
    imageSrc: './assets/images/Slot Image.png',
    imageAlt: 'Legacy of Egypt',
  },
  {
    title: 'Sweet Bonanza',
    developer: 'Pragmatic Play',
    imageSrc: './assets/images/Slot Image.png',
    imageAlt: 'Sweet Bonanza',
  },
  {
    title: "'Gonzo's Quest'",
    developer: 'NetEnt',
    imageSrc: './assets/images/Slot Image.png',
    imageAlt: "'Gonzo's Quest'",
  },
  {
    title: 'Thunderstruck II',
    developer: 'Microgaming',
    imageSrc: './assets/images/Slot Image.png',
    imageAlt: 'Thunderstruck II',
  },
  {
    title: 'Age of the Gods',
    developer: 'Playtech',
    imageSrc: './assets/images/Slot Image.png',
    imageAlt: 'Age of the Gods',
  },
  {
    title: 'Fruit Party',
    developer: 'Pragmatic Play',
    imageSrc: './assets/images/Slot Image.png',
    imageAlt: 'Fruit Party',
  },
  {
    title: 'Rise of Merlin',
    developer: "'Play'n GO'",
    imageSrc: './assets/images/Slot Image.png',
    imageAlt: 'Rise of Merlin',
  },
  {
    title: 'Dead or Alive',
    developer: 'NetEnt',
    imageSrc: './assets/images/Slot Image.png',
    imageAlt: 'Dead or Alive',
  },
  {
    title: 'Great Blue',
    developer: 'Playtech',
    imageSrc: './assets/images/Slot Image.png',
    imageAlt: 'Great Blue',
  },
  {
    title: 'Break da Bank',
    developer: 'Microgaming',
    imageSrc: './assets/images/Slot Image.png',
    imageAlt: 'Break da Bank',
  },
  {
    title: 'Fire Joker',
    developer: "'Play'n GO'",
    imageSrc: './assets/images/Slot Image.png',
    imageAlt: 'Fire Joker',
  },
  {
    title: 'Big Bass Bonanza',
    developer: 'Pragmatic Play',
    imageSrc: './assets/images/Slot Image.png',
    imageAlt: 'Big Bass Bonanza',
  },
  {
    title: 'Twin Spin',
    developer: 'NetEnt',
    imageSrc: './assets/images/Slot Image.png',
    imageAlt: 'Twin Spin',
  },
  {
    title: 'Mega Moolah',
    developer: 'Microgaming',
    imageSrc: './assets/images/Slot Image.png',
    imageAlt: 'Mega Moolah',
  },
  {
    title: 'Book of Ra',
    developer: 'Playtech',
    imageSrc: './assets/images/Slot Image.png',
    imageAlt: 'Book of Ra',
  },
];

slotData.forEach(item => {
  createSlotMachine('slot-machines', item);
  createSlotMachine('slot-machines-v2', item);
  createSlotMachine('live-games', item);
  createSlotMachine('hot-games', item);
  createSlotMachine('crash-games', item);
});

document.querySelectorAll('.like-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        this.classList.toggle('clicked');
    });
});
