import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem; 
`

export const PaginationButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  color: black;
  &:hover {
    color: #ffc107;
  }
  &:disabled {
    color: #bdbdbd;
  }
  &:focus {
    outline: none;
    background-color: #fff;
    border: 1px solid #ffc107;
  }
`

export const PaginateLeftButton = styled(PaginationButton)`
  margin-right: 1rem;
`

export const PaginateRightButton = styled(PaginationButton)`
  margin-left: 1rem;
`

export const PaginationText = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
`