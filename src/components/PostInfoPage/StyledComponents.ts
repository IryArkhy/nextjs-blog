import styled from 'styled-components';

export const InfoWrapper = styled.div` width: 30%;
height: 200px;
margin: 60px auto;

`;

export const StledTitle = styled.h2` font-size: 30px;
color: rgb(78, 88, 96);
display: flex;
width: 100%;
justify-content: center;
align-items: center;
text-align: center;

&:before,
&:after {
  content: '';
  border-top: 2px solid;
  margin: 0 20px 0 20px;
  flex: 1 0 20px;
  color: #38A8FF;
};

$:after {
  margin: 0 0 0 20px;
}`

export const StledBody = styled.p` font-size: 30px;
color: rgb(78, 88, 96);
margin: 20px;
display: block;
font-style: italic;
font-size: 20px;
`
export const DeletButton = styled.button`
width: 100px;
padding: 10px 20px;
background-color: rgb(249, 84, 84);
border-radius: 15px;
color: white;
border: none;
font-size: 18px;
margin: auto;
display:block;
cursor: pointer;
`
