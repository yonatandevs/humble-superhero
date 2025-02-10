import React, { useEffect, useState } from "react";
import { fetchSuperheroes } from "../api/superheroApi";

const SuperheroList = ({ refresh }: { refresh: boolean }) => {
  const [superheroes, setSuperheroes] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSuperheroes = async () => {
      try {
        const data = await fetchSuperheroes();
        setSuperheroes(data);
      } catch (err) {
        setError("Failed to fetch superheroes.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadSuperheroes();
  }, [refresh]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 mt-4 bg-gray-900">
      <h2 className="text-2xl font-semibold text-center mb-4">Superheroes</h2>
      <ul className="list-disc pl-5 space-y-2">
        {superheroes.map((hero: any) => (
          <li key={hero.id} className="flex justify-between items-center">
            <span className="font-medium">{hero.name}</span>
            <span className="text-sm text-gray-500">({hero.superpower})</span>
            <span className="text-xs text-gray-400">
              Humility: {hero.humilityScore}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuperheroList;
