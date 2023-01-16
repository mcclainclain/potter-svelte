/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const res = await fetch(`https://hp-api.onrender.com/api/characters`);
    const data = res.json();
    if (res.ok){
        return {
            characters: data,
        };
    }
  }