export interface CharacterEntity {
  id: number;
  name: string;
  species: string;
  status: string;
  image: string;
}

export type SetCharacterState = React.Dispatch<
  React.SetStateAction<CharacterEntity[]>
>;
