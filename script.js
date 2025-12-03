

function copyCA() {
    const ca = document.getElementById('contract-address').textContent;
    navigator.clipboard.writeText(ca).then(() => {
        const btn = document.getElementById('copy-text');
        btn.textContent = '✅ Copied';
        setTimeout(() => btn.textContent = '📋 Copy', 1500);
    });
}

function createOceanElements() {
    const container = document.body;
    
    // Waves
    for (let i = 0; i < 3; i++) {
        const wave = document.createElement('div');
        wave.className = 'wave';
        container.appendChild(wave);
    }

    // Light rays
    for (let i = 0; i < 6; i++) {
        const ray = document.createElement('div');
        ray.className = 'light-ray';
        ray.style.left = (i * 20) + '%';
        ray.style.animationDelay = (i * 1.5) + 's';
        container.appendChild(ray);
    }

    // Bubbles
    for (let i = 0; i < 35; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.width = Math.random() * 40 + 10 + 'px';
        bubble.style.height = bubble.style.width;
        bubble.style.animationDelay = Math.random() * 10 + 's';
        bubble.style.animationDuration = Math.random() * 8 + 8 + 's';
        container.appendChild(bubble);
    }

    // Fish
    const fishEmojis = ['🐠', '🐟', '🐡', '🦈', '🐙', '🦑', '🦞', '🦀'];
    for (let i = 0; i < 12; i++) {
        const fish = document.createElement('div');
        fish.className = 'fish';
        fish.textContent = fishEmojis[Math.floor(Math.random() * fishEmojis.length)];
        fish.style.top = Math.random() * 80 + 10 + '%';
        fish.style.animationDelay = Math.random() * 15 + 's';
        fish.style.animationDuration = Math.random() * 10 + 15 + 's';
        container.appendChild(fish);
    }

    // Jellyfish
    for (let i = 0; i < 5; i++) {
        const jellyfish = document.createElement('div');
        jellyfish.className = 'jellyfish';
        jellyfish.textContent = '🪼';
        jellyfish.style.left = Math.random() * 90 + '%';
        jellyfish.style.top = Math.random() * 50 + 10 + '%';
        jellyfish.style.animationDelay = Math.random() * 12 + 's';
        container.appendChild(jellyfish);
    }

    // Sea turtles
    for (let i = 0; i < 3; i++) {
        const turtle = document.createElement('div');
        turtle.className = 'sea-turtle';
        turtle.textContent = '🐢';
        turtle.style.top = Math.random() * 60 + 20 + '%';
        turtle.style.animationDelay = (i * 8) + 's';
        turtle.style.animationDuration = (20 + Math.random() * 10) + 's';
        container.appendChild(turtle);
    }

    // Seaweed
    for (let i = 0; i < 15; i++) {
        const seaweed = document.createElement('div');
        seaweed.className = 'seaweed';
        seaweed.style.left = (i * 6.5 + Math.random() * 5) + '%';
        seaweed.style.height = Math.random() * 150 + 100 + 'px';
        seaweed.style.animationDelay = Math.random() * 4 + 's';
        seaweed.style.opacity = 0.3 + Math.random() * 0.3;
        container.appendChild(seaweed);
    }

    // Coral
    const coralEmojis = ['🪸', '🌺', '🌸'];
    for (let i = 0; i < 10; i++) {
        const coral = document.createElement('div');
        coral.className = 'coral';
        coral.textContent = coralEmojis[Math.floor(Math.random() * coralEmojis.length)];
        coral.style.left = Math.random() * 95 + '%';
        coral.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(coral);
    }

    // Starfish
    for (let i = 0; i < 6; i++) {
        const starfish = document.createElement('div');
        starfish.className = 'starfish';
        starfish.textContent = '⭐';
        starfish.style.left = Math.random() * 95 + '%';
        starfish.style.animationDelay = Math.random() * 20 + 's';
        container.appendChild(starfish);
    }

    // Shells
    for (let i = 0; i < 8; i++) {
        const shell = document.createElement('div');
        shell.className = 'shell';
        shell.textContent = '🐚';
        shell.style.left = Math.random() * 95 + '%';
        shell.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(shell);
    }

    // Rocks
    for (let i = 0; i < 10; i++) {
        const rock = document.createElement('div');
        rock.className = 'rock';
        rock.style.left = Math.random() * 95 + '%';
        rock.style.width = Math.random() * 60 + 40 + 'px';
        rock.style.height = Math.random() * 40 + 30 + 'px';
        container.appendChild(rock);
    }

    // Treasure
    for (let i = 0; i < 3; i++) {
        const treasure = document.createElement('div');
        treasure.className = 'treasure';
        treasure.textContent = '💎';
        treasure.style.left = (i * 35 + 10) + '%';
        treasure.style.animationDelay = (i * 0.7) + 's';
        container.appendChild(treasure);
    }

    // Submarine
    const submarine = document.createElement('div');
    submarine.className = 'submarine';
    submarine.textContent = '🚢';
    submarine.style.animationDelay = '5s';
    container.appendChild(submarine);
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', createOceanElements);
