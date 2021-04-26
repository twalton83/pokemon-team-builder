import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function useWeaknesses(pokemon: Array<any>) {
  const [weaknesses, setWeaknesses] = useState<any[]>([]);

  useEffect(() => {
    function gatherWeaknesses(pokemon: Array<any>): any[] {
      return pokemon.reduce((acc, curr) => {
        // reduce over all pokemon
        // forEach type, call API for type
        // type.double_damage_from is an object
        // Object.keys, iterate over and push type.double_damage_from[i] into accumulator
      }, []);
    }
    setWeaknesses(gatherWeaknesses(pokemon));
  }, [pokemon]);
  return weaknesses;
}

export { useWeaknesses };
