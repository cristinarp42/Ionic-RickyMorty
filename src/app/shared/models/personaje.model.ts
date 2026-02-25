export interface Personaje {
  name: string;
  status: 'Alive' | 'Dead' | 'No sabemos';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'No sabemos';
  location: Location;
  image: string;
}