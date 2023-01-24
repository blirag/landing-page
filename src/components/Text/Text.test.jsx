import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Text } from '.';

describe('<Text />', () => {
  it('should render a text', () => {
    renderTheme(<Text>Text component</Text>);
    expect(screen.getByText('Text component')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Text>Text component</Text>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <div
        class="c0"
      >
        Text component
      </div>
    `);
  });
});
