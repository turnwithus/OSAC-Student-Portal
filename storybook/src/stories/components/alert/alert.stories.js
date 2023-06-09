import { Alert } from './alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
};

export const Default = () => {
  return  (
    <Alert>
      <strong>Recommended Updates</strong>
      <p>Please update within these sections: High School Information, College Information and College of Choice, Standing, & Plan</p>
    </Alert>
  );
};

export const Multiple = () => {
  return  (
    <>
      <Alert isDismissable>
        <strong>Purus in</strong>
        <p>Neque laoreet suspendisse interdum consectetur. Tincidunt eget nullam non nisi est.</p>
      </Alert>
      <Alert isDismissable>
        <strong>Aliquam faucibus</strong>
        <p>Neque viverra justo nec ultrices dui sapien eget.</p>
      </Alert>
      <Alert isDismissable>
        <strong>Lobortis mattis</strong>
        <p>Ut faucibus pulvinar elementum integer enim neque. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor.</p>
      </Alert>
    </>
  );
};

export const Info = () => {
  return  (
      <Alert variant="info">
        <p>Neque laoreet suspendisse interdum consectetur. Tincidunt eget nullam non nisi est.</p>
      </Alert>
  );
};
