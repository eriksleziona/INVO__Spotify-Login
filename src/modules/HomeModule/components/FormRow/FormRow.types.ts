export interface IFormRow {
  name: string;
  type: string;
  labelText: string;
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;
}
