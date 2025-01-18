'use client';

import styled from '@emotion/styled'

const TestButton = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

export default function Home() {
  return (
    <div>
      <main>
        where are these styles coming from 0.o
        <TestButton>click me :D</TestButton>
      </main>
    
    </div>
  );
}
