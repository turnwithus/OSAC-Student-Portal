import { Select } from './select';

export default {
  title: 'Blocks/Form Controls/Select',
  component: Select,
};

export const Default = () => {
  return  (
    <Select>
      <option value="lorem ipsum">Lorem ipsum</option>
      <option value="sit amet">Sit amet</option>
      <option value="consectitur">Consectitur</option>
    </Select>
  );
};

export const Selected = () => {
  return  (
    <Select id="override">
      <option value="lorem ipsum">Lorem ipsum</option>
      <option value="sit amet">Sit amet</option>
      <option value="consectitur" selected>This is selected</option>
    </Select>
  );
};

