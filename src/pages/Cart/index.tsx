import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import CartList from "./components/cartList";
import {
  AdressCard,
  CardSection,
  CartSectionContainer,
  PaymentButton,
  PaymentCard,
} from "./style";
import { InputContainer } from "../ SuccessfulPurchase/style";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormEvent, useRef, useState } from "react";

type Inputs = {
  cep: string;
  street: string;
  number: number;
  neighborhood: string;
  city: string;
  uf: string;
};

type PaymentType = "debit" | "credit" | "cash";

export function Cart() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentType>("cash");

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const handleExternalSubmit = () => {
    console.log("submit button cliked");

    if (formRef.current) {
      formRef.current.submit();
      console.log("dispatch Submit event");
    }
  };

  function submitedForm(e: FormEvent) {
    e.preventDefault();
    console.log("on sumbmit in form called");

    handleSubmit(onSubmit);
  }

  return (
    <CartSectionContainer>
      <CardSection>
        <h2>Cafés selecionados</h2>
        <CartList handleExternalSubmit={handleExternalSubmit} />
      </CardSection>
      <div>
        <h2>Complete seu pedido</h2>
        <AdressCard>
          <div>
            <MapPinLine size={26} color="#c47f17" />
            <p>
              <span>Endereço de Entrega</span>
              <br />
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>

          <InputContainer ref={formRef} onSubmit={submitedForm}>
            <input
              type="number"
              placeholder="CEP"
              className="inputOne"
              required
              {...register("cep")}
            />
            <div>
              <input
                type="text"
                placeholder="Rua"
                id="Rua"
                className="inputTwo"
                required
                {...register("street")}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Número"
                id="Número"
                className="inputThree"
                required
                {...register("number")}
              />
              <input
                type="text"
                placeholder="Complemento"
                id="Complemento"
                className="inputFour"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Bairro"
                id="Bairro"
                className="inputFive"
                required
                {...register("neighborhood")}
              />
              <input
                type="text"
                placeholder="Cidade"
                id="Cidade"
                className="inputSix"
                required
                {...register("city")}
              />
              <input
                type="text"
                placeholder="UF"
                id="UF"
                className="inputSeven"
                required
                {...register("uf")}
              />
            </div>
          </InputContainer>
        </AdressCard>
        <PaymentCard>
          <div>
            <CurrencyDollar size={26} color="#8047f8" />
            <p>
              <span>Pagamento</span>
              <br />O pagamento é feito na entrega. Escolha a como deseja pagar
            </p>
          </div>

          <div>
            <PaymentButton
              $activetbn={paymentMethod === "cash"}
              onClick={() => setPaymentMethod("cash")}
            >
              <Money size={18} color="#8047f8" />
              <p>dinheiro</p>
            </PaymentButton>
            <PaymentButton
              $activetbn={paymentMethod === "credit"}
              onClick={() => setPaymentMethod("credit")}
            >
              <CreditCard size={18} color="#8047f8" />
              <p>Cartão de crédito</p>
            </PaymentButton>
            <PaymentButton
              $activetbn={paymentMethod === "debit"}
              onClick={() => setPaymentMethod("debit")}
            >
              <Bank size={18} color="#8047f8" />
              <p>cartão de débito</p>
            </PaymentButton>
          </div>
        </PaymentCard>
      </div>
    </CartSectionContainer>
  );
}
