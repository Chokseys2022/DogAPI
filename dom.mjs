// dom.mjs
import { fetchRandomDog, fetchBreedImage } from './api.mjs';

export function displayDogImage(imageUrl) {
    const dogResult = document.getElementById('dog_result');
    dogResult.innerHTML = `<img src="${imageUrl}" alt="dog" />`;
}

export function setupEventListeners() {
    const randomBtn = document.getElementById('random_btn');
    const searchBtn = document.getElementById('search_btn');
    const breedInput = document.getElementById('breed_input');

    randomBtn.addEventListener('click', async () => {
        try {
            const imageUrl = await fetchRandomDog();
            displayDogImage(imageUrl);
        } catch (error) {
            console.error('Error getting random dog image:', error);
        }
    });

    searchBtn.addEventListener('click', async () => {
        const breed = breedInput.value.trim().toLowerCase();
        if (breed) {
            try {
                const imageUrl = await fetchBreedImage(breed);
                displayDogImage(imageUrl);
            } catch (error) {
                console.error('Error getting breed dog image:', error);
            }
        } else {
            console.log('Please enter a breed.');
        }
    });
}
