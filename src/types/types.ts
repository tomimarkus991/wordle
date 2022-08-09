export interface UserType {
  id: string;
  email: string;
  username: string;
  avatar: string | null;
}

export interface SelectOption {
  id: number;
  name: string;
}

export interface ISolution {
  id: number;
  word: string;
}
