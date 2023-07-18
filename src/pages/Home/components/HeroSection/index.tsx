import { HeroContent, HeroSectionContainer } from "./style";

export function HeroSection() {
  return (
    <HeroSectionContainer>
      <HeroContent>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <img src="src/assets/img/main-coffee-image.png" alt="Imagem Café" />
      </HeroContent>
    </HeroSectionContainer>
  );
}
