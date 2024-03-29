import reactImg from '../../assets/react-core-concepts.png';
import './Header.css'
import { styled } from 'styled-components';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

const StyledHeader = styled.header`
  text-align: center;
  margin: 3rem 0;

  & img{
    height: 5rem;
    width: 10rem;
    object-fit: cover;
  }

  & h1{
    margin: 0;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 5rem;
    background: linear-gradient(40deg, #ea00ff, #ea00ff, #03d5ff, #03d5ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
  }

  & p{
    margin: 0;
    font-size: 1.25rem;
    color: #8964b0;
    font-family: "Roboto Condensed", sans-serif;
  }
`;

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions [genRandomInt(2)];

  return (
    <StyledHeader>
      <img src ={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </StyledHeader>
  );
}