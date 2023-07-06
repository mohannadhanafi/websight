export interface CarInterface {
  id: number;
  brand: string;
  model: string;
  year: number;
  color: string;
}

export type loginAPIParams = {
  username: string;
  password: string;
};

export type TableColumn = {
  key: string;
  label: string;
};
