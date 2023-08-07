// Write a function to fetch the all the players from the API

const COHORT = "2302-acc-pt-web-pt-a";
const baseUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`;

export async function fetchAllPlayers() {
  try {
    const response = await fetch(`${baseUrl}/players`);
    const result = await response.json();
    return result.data.players;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchPlayerById(id) {
  try {
    const response = await fetch(`${baseUrl}/players/${id}`);
    const result = await response.json();
    return result.data.player;
  } catch (err) {
    console.error(err);
  }
}

export async function createNewPlayer(player) {
  try {
    const response = await fetch(`${baseUrl}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(player),
    });
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

export async function deletePlayer(id) {
  await fetch(`${baseUrl}/players/${id}`, {
    method: "DELETE",
  });
}
