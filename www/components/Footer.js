import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import IconText from './IconText';
import SocialLinks from './SocialLinks';
import { above, below } from '../utitlies/breakpoint.js';

const FOOTER_MODIFIERS = {
  site: ({ theme }) => `
    color: ${theme.colors.fonts.light};
  `
};

const Heading = styled.h1`
  text-transform: uppercase;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.orange};
`;

const Text = styled.p`
  margin: 0;
`;

const Title = styled.p`
  margin: 0;
  font-weight: 800;
  text-transform: uppercase;
`;

const FooterColumn = styled.div`
  padding: 0 2rem;
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${below.small`
    &:not(:first-child) {
      padding-top: 20px;
    }
  `}
`;

const Trademark = styled.p`
  font-size: 12px;
  a:link, a:active, a:visited {
    color: ${({ theme }) => theme.colors.fonts.light};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${below.small`
    margin-top: 4px;
  `};
`;

const Footer = ({ className }) => (
  <footer className={className}>
    <Trademark>© 2019 <a href="http://www.thatconference.com">THAT Conference</a></Trademark>
  </footer>
);

// use that media query...
export default styled(Footer)`
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;

  ${applyStyleModifiers(FOOTER_MODIFIERS)};
`;
