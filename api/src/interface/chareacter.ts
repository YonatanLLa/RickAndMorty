export type status = "Alive" | "Dead" | "unknown";
export type gender = "Female" | "Male" | "Genderless" | "unknown";
export interface CharacterAtributes {
  id: number;
  name: string;
  status: status;
  species: string;
  gender: gender;
  origin: any
  image: string;
}

