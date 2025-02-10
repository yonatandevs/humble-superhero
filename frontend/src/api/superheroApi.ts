const API_URL = "http://localhost:4004/superheroes";

export const fetchSuperheroes = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const addSuperhero = async (superhero: {
  name: string;
  superpower: string;
  humilityScore: number;
}) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(superhero),
  });
  return response.json();
};
