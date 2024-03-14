import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>clom.com</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
