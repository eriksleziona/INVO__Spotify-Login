export interface IFormRow {
  name: string;
  type: string;
  labelText: string;
  additionalText?: string;
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;
}
