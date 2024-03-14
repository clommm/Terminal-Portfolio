import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hello! I am <HighlightSpan>Yu Kai</HighlightSpan>!
      </p>
      <p>
        I'm an <HighlightAlt>aspiring Cybersecurity Specialist</HighlightAlt> based in Singapore. 
      </p>
      <p>
        I am passionate about penetration testing and <br />
        developing countermeasures to mitigate such security threats.
      </p>
    </AboutWrapper>
  );
};

export default About;
