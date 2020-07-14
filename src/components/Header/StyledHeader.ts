import styled from 'styled-components';

export const HeaderBody = styled.div` width: 100%;
background-color: rgb(56, 168, 255);
height: 100px;
position: relative;
`;

export const AddPost = styled.a` display: flex;
align-items: center;
padding: 5px 10px;
background-color: rgb(249, 84, 84);
width: 65px;
height:65px;
border-radius: 50%;
position: absolute;
bottom: -30px;
left: 48%;

&:hover {
  transition: background-color 0.40s;
  background-color: rgb(165, 224, 247);
}
`;

export const SVGPlus = styled.svg` flex: none;
width: 45px;
height:40px;
fill: white;
`

export const Notes = styled.div`
display: flex;
align-items: center;
padding: 5px 10px;
background-color: rgb(249, 84, 84);
width: 65px;
height:65px;
border-radius: 50%;

&:hover {
  transition: background-color 0.40s;
  background-color: rgb(165, 224, 247);
}
`;

export const BackHome = styled.a`
  width: 200px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  position: absolute;
  top: 17px;
  left: 20px;
`

export const SVGHome = styled.svg`
flex: none;
width: 45px;
height:40px;
fill: white;
`;

export const LatestPosts = styled.h3`
color: white;
font-size: 20px;
line-height: 1
`
