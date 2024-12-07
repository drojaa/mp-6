"use client"
import styled from "styled-components";
import { signIn } from "next-auth/react";
const DivStyled = styled.div`
color: pink;
text-align: center;
margin-top: 7%;
border: 4px white;
font: bold calc(17px + 1vw) sans-serif; 
`
const SubDivStyled = styled.div`
color: pink;
text-align: center;
margin-top: 2%;
border: 4px white;
font: italic calc(10px + 1vw) sans-serif; 
text-decoration: underline;
cursor: pointer;
`;
export default function Home() {
  const handleSignIn = () => {
    signIn("google")
  }
  return (
   <div>
    <DivStyled>Sign In</DivStyled>
    <SubDivStyled onClick={handleSignIn}>Sign In Using Google </SubDivStyled>
   </div>
  );
}
