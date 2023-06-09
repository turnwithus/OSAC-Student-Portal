import { Card } from './card';

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};

export const Default = () => {
  return  (
    <Card 
      title="At vero eos et accusamus"
      status="awarded"
    >
      <p>Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>  
    </Card>
  );
};

export const WithTooltip = () => {
  return  (
    <Card 
      title="At vero eos et accusamus"
      status="awarded"
      tooltipText="blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
    >
      <p>Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>  
    </Card>
  );
};

export const ScholarshipSubmitted = () => {
  return  (
    <Card 
      title="At vero eos et accusamus"
      status="submitted"
      id="027900"
    >
      <p>Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>  
    </Card>
  );
};
