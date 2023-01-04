import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="http://localhost" text="LogoLink" />);

    expect(
      screen.getByRole('heading', { name: 'LogoLink' }),
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'LogoLink' })).toHaveAttribute(
      'href',
      'http://localhost',
    );
  });

  it('should render image logo', () => {
    renderTheme(
      <LogoLink link="http://localhost" text="LogoLink" srcImg="image.png" />,
    );
    const img = screen.getByRole('img', { name: 'LogoLink' });
    expect(img).toHaveAttribute('src', 'image.png');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="http://localhost" text="LogoLink" srcImg="image.png" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
