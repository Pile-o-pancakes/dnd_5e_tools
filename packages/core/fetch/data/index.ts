export async function getMonsters() {

    const response = await fetch(import.meta.env.VITE_API_URL + "/monsters");
    const data = await response.json();
    return data.results;
}