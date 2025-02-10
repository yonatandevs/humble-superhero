import React, { useState } from "react";
import { addSuperhero } from "../api/superheroApi";

const AddSuperheroForm = ({ onAdd }: { onAdd: () => void }) => {
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [humilityScore, setHumilityScore] = useState(1);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name) newErrors.name = "Name is required.";
    if (!superpower) newErrors.superpower = "Superpower is required.";
    if (humilityScore < 1 || humilityScore > 10)
      newErrors.humilityScore = "Humility Score must be between 1 and 10.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      await addSuperhero({ name, superpower, humilityScore });
      onAdd();
      setName("");
      setSuperpower("");
      setHumilityScore(1);
      setErrors({});
    } catch (error) {
      console.error("Error adding superhero:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold text-center mb-4">Add Superhero</h2>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-full p-2 border text-gray-700 rounded-md ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter superhero name"
        />
        {errors.name && (
          <p className="text-xs text-red-500 mt-1">{errors.name}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="superpower"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Superpower
        </label>
        <input
          type="text"
          id="superpower"
          value={superpower}
          onChange={(e) => setSuperpower(e.target.value)}
          className={`w-full p-2 border rounded-md text-gray-700 ${
            errors.superpower ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter superhero superpower"
        />
        {errors.superpower && (
          <p className="text-xs text-red-500 mt-1">{errors.superpower}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="humilityScore"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Humility Score (1-10)
        </label>
        <input
          type="number"
          id="humilityScore"
          value={humilityScore}
          onChange={(e) => setHumilityScore(Number(e.target.value))}
          className={`w-full p-2 border rounded-md text-gray-700 ${
            errors.humilityScore ? "border-red-500" : "border-gray-300"
          }`}
          min="1"
          max="10"
        />
        {errors.humilityScore && (
          <p className="text-xs text-red-500 mt-1">{errors.humilityScore}</p>
        )}
      </div>
      <button
        type="submit"
        className={`w-full py-2 px-4 rounded-md text-white ${
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Adding..." : "Add Superhero"}
      </button>
    </form>
  );
};

export default AddSuperheroForm;
