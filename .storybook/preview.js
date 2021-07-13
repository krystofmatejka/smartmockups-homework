export const parameters = {
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#fff',
      },
    ],
  },
};

export const decorators = [
  (Story) => {
    return (
      <Story />
    )
  }
];
