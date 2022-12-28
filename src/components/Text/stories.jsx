import { Text } from '.';

export default {
  title: 'Text',
  component: Text,
  args: {
    children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate placeat exercitationem qui velit neque dolores saepe, libero commodi! Ad asperiores totam mollitia ut pariatur culpa. Cumque asperiores natus nihil libero!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Text {...args} />
    </div>
  );
};
