import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget/index';
import Footer from '../src/components/Footer/index';
import GitHubCorner from '../src/components/GitHubCorner/index';
import QuizBackground from '../src/components/QuizBackground/index';
import QuizLogo from '../src/components/QuizLogo/index';

/* const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`; */

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
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz Coder - Teste seu conhecimento</title>
      </Head>
      <QuizLogo />
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Vamos ver se você é um bom Desenvolvedor!</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Vamos testar seu conhecimento sobre programação.</p>

            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma subimissão por meio do react');

              // router manda para a proxima pagina
            }}
            >
              <input
                onChange={function (infosDoEvento) {
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Digite seu nome :)"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
              </button>
            </form>
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
      <GitHubCorner projectUrl="/" />
    </QuizBackground>
  );
}
