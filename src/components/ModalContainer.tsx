import styled from 'styled-components';

interface ModalContainerProps {
  children: React.ReactNode;
}

const Container = styled.div`
  background-color: white;
  border: 5px solid black;
  border-radius: 10px;
  position: fixed;
  padding: 40px;
`;

const ModalContainer = ({ children }: ModalContainerProps) => {
  return <Container>{children}</Container>;
};

export default ModalContainer;
