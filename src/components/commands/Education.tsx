import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>This is my education pathway so far!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Primary Education",
    desc: "Peiying Primary School | 2015 ~ 2020",
  },
  {
    title: "Secondary Education",
    desc: "Presbyterian High School | 2021 - 2024",
  },
];

export default Education;
