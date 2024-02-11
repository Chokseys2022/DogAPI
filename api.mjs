// api.mjs
export async function fetchRandomDog() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error('Error fetching dog:', error);
        throw error;
    }
}

export async function fetchBreedImage(breed) {
    try {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error(`Error fetching ${breed} dog image:`, error);
        throw error;
    }
}
