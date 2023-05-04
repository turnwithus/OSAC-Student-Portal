import { Heading } from './heading';

export default {
  title: 'Blocks/Heading',
  component: Heading,
};

export const AllLevels = () => {
  return  (
    <div className="rhythm">
      <Heading variant="h1">Heading 1</Heading>
      <Heading variant="h2" element="h2">Heading 2</Heading>
      <Heading variant="h3" element="h3">Heading 3</Heading>
      <Heading variant="h4" element="h4">Heading 4</Heading>
      <Heading variant="h5" element="h5">Heading 5</Heading>
    </div>
  );
};
