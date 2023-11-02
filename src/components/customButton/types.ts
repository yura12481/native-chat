export interface Props {
  title: string;
  onSub: (email: string, password: string) => void;
  email: string;
  password: string;
  disabled: boolean;
}
