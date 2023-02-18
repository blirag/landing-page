import {
  mapImageGrid,
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
} from './map-sections';
import {
  mockImageGrid,
  mockSectionContent,
  mockSectionTwoColumn,
  mockTextGrid,
} from './map-sections-mock';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should map sections two columns without data', () => {
    const data = mapSectionTwoColumns();

    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.title).toBe('');
    expect(data.text).toBe('');
  });

  it('should map sections two columns with data', () => {
    const data = mapSectionTwoColumns(mockSectionTwoColumn);

    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('home');
    expect(data.srcImg).toBe('a.svg');
    expect(data.title).toBe('Title');
    expect(data.text).toBe('Test description');
  });

  it('should map sections content without data', () => {
    const data = mapSectionContent();

    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.html).toBe('');
  });

  it('should map sections content with data', () => {
    const data = mapSectionContent(mockSectionContent);

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.sectionId).toBe('intro');
    expect(data.title).toBe('Title');
    expect(data.html).toBe('Html content text');
  });

  it('should map grid text with data', () => {
    const data = mapTextGrid(mockTextGrid);

    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('grid-one');
    expect(data.title).toBe('MY GRID');
    expect(data.description).toBe('Uma breve descrição.');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('Descrição teste 1');
  });

  it('should map grid text without data', () => {
    const data = mapTextGrid(undefined);

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });

  it('should map grid image with data', () => {
    const data = mapImageGrid(mockImageGrid);

    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('grid-one');
    expect(data.title).toBe('MY GRID');
    expect(data.description).toBe('Uma breve descrição.');
    expect(data.grid[0].srcImg).toBe('a.svg');
    expect(data.grid[0].altText).toBe('abc');
  });

  it('should map grid image without data', () => {
    const data = mapImageGrid(undefined);

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });
});
