"use client";
import Link from "next/link";
import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  border: 2px pink solid;
  padding: 10px; 
  background-color: hotpink;
`;

const SubHeaderStyled = styled.div`
  flex: 1; 
  text-align: left; 
  font: bold calc(11px + 1vw) sans-serif; 
  padding: 5px;
`;

const NavContainer = styled.div`
  display: flex; 
  gap: 10px; 
`;

const NavLink = styled.div`
  border: 3px deeppink solid;
  text-align: center;
  font: bold calc(3px + 1vw) sans-serif; 
  padding: 5px;
`;

export default function Header() {
  return (
    <HeaderStyled>
      <SubHeaderStyled>Derinell's OAuth Project</SubHeaderStyled>
      <NavContainer>
        <NavLink>
          <Link href="/">Sign In</Link>
        </NavLink>
        <NavLink>
          <Link href="/about">Sign Out</Link>
        </NavLink>
        <NavLink>
          <Link href="/profile">Profile</Link>
        </NavLink>
      </NavContainer>
    </HeaderStyled>
  );
}
