import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import {
  ContentContainer,
  ImageConteiner,
  InfoContainer,
  SuccessfulContainer,
  Gradient,
  PurpleSpan,
  YellowSpan,
  DarkYellowSpan,
} from "./style";

export default function SuccessfulPurchase() {
  return (
    <SuccessfulContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <ContentContainer>
        <Gradient>
          <InfoContainer>
            <div>
              <PurpleSpan>
                <MapPin size={16} color="#ffffff" weight="fill" />
              </PurpleSpan>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </p>
            </div>
            <div>
              <YellowSpan>
                <Timer size={16} color="#ffffff" weight="fill" />
              </YellowSpan>
              <p>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </p>
            </div>
            <div>
              <DarkYellowSpan>
                <CurrencyDollar size={16} color="#ffffff" />
              </DarkYellowSpan>
              <p>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </p>
            </div>
          </InfoContainer>
        </Gradient>
        <ImageConteiner>
          <img src="/Illustration.svg" />
        </ImageConteiner>
      </ContentContainer>
    </SuccessfulContainer>
  );
}
