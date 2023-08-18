import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { HeroContent, HeroImage, HeroSectionContainer, HeroText, TagsContainer } from "./style";

export function HeroSection() {
  return (
    <HeroSectionContainer>
      <HeroContent>
        <HeroText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

          <TagsContainer>
            <p>
              <span>
                <ShoppingCart size={16} color="#ffffff" weight="fill" />
              </span>
              Compra simples e segura
            </p>
            <p>
              <span>
                <Package size={16} color="#ffffff" weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </p>
            <p>
              <span>
                <Timer size={16} color="#ffffff" weight="fill" />
              </span>
              Entrega rápida e rastreada
            </p>
            <p>
              <span>
                <Coffee size={16} color="#ffffff" weight="fill" />
              </span>
              O café chega fresquinho até você
            </p>
          </TagsContainer>
        </HeroText>
        <HeroImage>
          <img src="/main-coffee-image.png" alt="Imagem Café" />
        </HeroImage>
      </HeroContent>
    </HeroSectionContainer>
  );
}
