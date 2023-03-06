/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const res = await fetch(`https://hp-api.onrender.com/api/spells`);
    const data = res.json();
    if (res.ok){
        return {
            spells: data,
        };
    }
  }