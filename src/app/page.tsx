// app/page.tsx
"use client";

import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
`;

const Button = styled.a`
  padding: 1rem 2rem;
  background-color: #0070f3;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2rem;
`;

export default function Home() {
  return (
    <Container>
      <Title>Welcome to DFS Optimizer</Title>
      <Link href="/login" passHref>
        <Button>Login</Button>
      </Link>
    </Container>
  );
}
