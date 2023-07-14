export interface IFormRow {
  name: string;
  type: string;
  labelText: string;
  additionalText?: string;
  placeholderText?: string;
  additionalUnderline?: boolean;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}
