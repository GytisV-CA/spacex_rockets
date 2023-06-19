interface ILength {
  meters: number;
  feet: number;
}

interface IWeigth {
  kg: number;
  lb: number;
}

export interface IRocket {
  id: number;
  rocket_name: string;
  cost_per_launch: number;
  height: ILength;
  diameter: ILength;
  mass: IWeigth;
}
