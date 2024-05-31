const backgroundImages = [
    'Image/two.jpg',
    'Image/three.jpg',
    'Image/backgroundd.jpg',
    'Image/five.jpg',
    'Image/six.jpg',
    'Image/seven.jpg',
    'Image/eight.jpg'
];

function shuffleImages(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function changeBackgroundImage() {
    shuffleImages(backgroundImages);
    const randomImageUrl = backgroundImages[0];
    const hero = document.getElementById('hero');
      // Set the background image of the 'hero' element to the randomly selected URL
    hero.style.backgroundImage = `url('${randomImageUrl}')`;
}

// Automatically shuffle the background image every 2 seconds
setInterval(changeBackgroundImage, 2000); // 2000 milliseconds = 2 seconds
