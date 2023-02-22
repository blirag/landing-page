export const mockSectionTwoColumn = {
  __component: 'section.section-two-columns',
  title: 'Title',
  description: 'Test description',
  image: {
    data: {
      attributes: {
        url: 'a.svg',
      },
    },
  },
  metadata: {
    section_id: 'home',
    background: true,
  },
};

export const mockSectionContent = {
  __component: 'section.section-content',
  title: 'Title',
  content: 'Html content text',
  metadata: {
    section_id: 'intro',
    background: false,
  },
};

export const mockTextGrid = {
  __component: 'section.section-grid',
  title: 'MY GRID',
  description: 'Uma breve descrição.',
  metadata: {
    section_id: 'grid-one',
    background: true,
  },
  text_grid: [
    {
      title: 'Teste 1',
      description: 'Descrição teste 1',
    },
    {
      title: 'Teste 2',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n',
    },
    {
      title: 'Teste 3',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.\n\n',
    },
  ],
  image_grid: [],
};

export const mockImageGrid = {
  __component: 'section.section-grid-image',
  title: 'MY GRID',
  description: 'Uma breve descrição.',
  metadata: {
    section_id: 'grid-one',
    background: true,
  },
  text_grid: [],
  image_grid: [
    {
      images: {
        data: [
          {
            attributes: {
              alternativeText: 'abc',
              url: 'a.svg',
            },
          },
        ],
      },
    },
  ],
};
