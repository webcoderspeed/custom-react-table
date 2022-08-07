import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }: {
    columns: number;
  }) => `repeat(${columns}, 
      minmax(14rem, 1fr))`};
      background-color: gray;
`

export const HeaderCell = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  width: 100%;
`;

export const Body = styled.section`
  text-align: left;
  width: 100%;
`;

export const Row = styled.section`
  background: #ffffff;
  border-radius: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: ${({ columns, }: {
    columns: number;
  }) => `repeat(${columns},
      minmax(14rem, 1fr))`};
`;

export const Cell = styled.section`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

export const ExpandButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 2rem;
  font-weight: bold;
  color: hsla(0, 0%, 38%, 1);
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  &:nth-child(even) {
    background-color: #fff;
    color: blue;
  }
`;

export const ExpandedCell = styled.section`
  border-radius: 0.5rem;
  background: #ffffff;
  width: 100%;
  grid-column: 1 / -1;
`