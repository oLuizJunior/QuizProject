import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget/index';
import Footer from '../src/components/Footer/index';
import GitHubCorner from '../src/components/GitHubCorner/index';
import QuizBackground from '../src/components/QuizBackground/index';
import QuizLogo from '../src/components/QuizLogo/index';


/*const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;*/

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return(
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Vamos ver o quão Geek você é!</h1>
          </Widget.Header>

          <Widget.Content>
            <p>lorem ipsum dolor sic now slipknot</p>
          </Widget.Content>
        </Widget>

        <Widget>
        <Widget.Content>
            <h1>Vamos ver o quão Geek você é!</h1>

            <p>lorem ipsum dolor sic now slipknot</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner  projectUrl="/"/>
    </QuizBackground>
  );  
}
