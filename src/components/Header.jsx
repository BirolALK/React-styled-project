import Button from "./styles/Button.styled"
import Flex from "./styles/Flex.styled"
import StyledHeader, { Image, Logo, Nav } from "./styles/Header.styled"

 
const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Logo src="./images/logo.png" />
         <div>
           <Button color= "A62440">Apply Courses</Button>
           <Button bg= "#A62440">Talk to Adviser</Button>        
         </div>
      </Nav>

      
      <Flex>
        <div>
          <h1>The IT Career of Your Dreams Starts Here!</h1>
          <p>Lorem ipsum dolor sit amet consectetur aipisicing elir.Deleniti tempore ullam eurn est velit voluptate doloremque magni nesciunt aliquam non a vitae ab dolorum beatae quia, autem commodi ex dicta?</p>
          <Button bg="#A62440">Tstart Your New</Button>
        </div>
        <Image src= "./images/hero.jpg"/>
      </Flex>
    </StyledHeader>
      
  )
}

export default Header