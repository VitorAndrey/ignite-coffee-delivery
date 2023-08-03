import { HeroContent, HeroImage, HeroSectionContainer, HeroText } from "./style";

export function HeroSection() {
  return (
    <HeroSectionContainer>
      <HeroContent>
        <HeroText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </HeroText>
        <HeroImage>
          <img src="/main-coffee-image.png" alt="Imagem Café" />
        </HeroImage>
      </HeroContent>
    </HeroSectionContainer>
  );
}
