import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  background: #ffffff;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: ${({
    columns,
  }: {
    columns: number;
  }) => `repeat(${columns}, 
      minmax(14rem, 1fr))`};
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const HeaderCell = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: #626262;
  border-bottom: 1px solid rgba(130, 130, 130, 0.5);

  &:first-child {
    border-left: 1px solid #fff;
  }
  &:last-child {
    border-right: 1px solid #fff;
  }
`;

export const Body = styled.section`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #000000;
  width: 100%;

`;

export const Row = styled.section(
  ({ columns, isActive }: { columns: number; isActive: boolean }) => [
    `
   background: #ffffff;
  border-radius: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${columns}, minmax(14rem, 1fr));
  min-height: 6rem;
  `,
    isActive &&
      `
    background: #F1F1F1;
  `,
  ]
);

export const Cell = styled.section`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin: 0.5rem 0;

  &:first-child {
    border-left: 1px solid #fff;
  }

  &:last-child {
    border-right: 1px solid #fff;
  }
`;

export const ExpandButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 2rem;
  font-weight: bold;
  color: hsla(0, 0%, 38%, 1);
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background: transparent;

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
`;
