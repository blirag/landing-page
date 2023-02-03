import P from 'prop-types';
import * as Styled from './styles';
import { Text } from '../Text';
import { SectionContainer } from '../SectionContainer';

export const Footer = ({ footerHtml }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <Text>{footerHtml}</Text>
      </SectionContainer>
    </Styled.Container>
  );
};

Footer.propTypes = {
  footerHtml: P.string.isRequired,
};
