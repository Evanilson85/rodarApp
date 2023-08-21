import { Container, Text, SubText, Button, FooterContainer } from "./style"

export const Footer = () => {
  return (
    <>
      <Container id='footer'>
        <Text>
          DEIXE A RODAR CUIDAR DA SUA FROTA
        </Text>
        <SubText>
          Clique no botão abaixo e fale com um de nossos consultores
        </SubText>

        <Button>
          <a href="">
            FALAR COM UM CONSULTOR
          </a>
        </Button>

      </Container>
      <FooterContainer>
          <div>
            <p>Av Tapajos 1.041, São Cristóvão - Betim/MG</p>
            <p>(31) 3397-7984</p>
          </div>
          <div>
            <p>© {new Date().getFullYear()} - Rodar Centro Automotivo</p>
            <p>Feito com ❤️ pela <strong><a href="https://codeinformatica.com.br/" target="_blank">Code</a></strong> </p>
          </div>
      </FooterContainer>
    </>
  )
}