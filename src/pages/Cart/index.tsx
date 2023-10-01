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
import { FormEvent, useContext, useRef, useState } from "react";
import { AddressContext } from "../../contexts/AddressContext";
import { useForm, SubmitHandler } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNavigate } from "react-router-dom";

type Inputs = yup.InferType<typeof schema>;

type PaymentType = "debit" | "credit" | "cash";

const schema = yup
  .object({
    cep: yup.string().required("Insira o CEP."),
    street: yup.string().required("Insira a Rua."),
    number: yup.number().required("Insira o Número.").positive().integer(),
    neighborhood: yup.string().required("Insira o Bairro."),
    city: yup.string().required("Insira a Cidade."),
    uf: yup
      .string()
      .required("Insira o Estado.")
      .length(2, "UF deve ter dois caracteres"),
  })
  .required();

export function Cart() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentType>("cash");
  const { updateAddres } = useContext(AddressContext);

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const updatedData = {
      ...data,
      paymentMethod,
    };
    updateAddres(updatedData);
    navigate("/seccessfulpurchase");
  };

  const handleExternalSubmit = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  };

  function submitedForm(e: FormEvent) {
    e.preventDefault();

    handleSubmit(onSubmit)()
      .then(() => {
        console.log("success!");
      })
      .catch((error) => {
        console.log(error);
      });
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

          <InputContainer ref={formRef} onSubmit={(e) => submitedForm(e)}>
            <input
              type="number"
              placeholder="CEP"
              className="inputOne"
              required
              autoComplete="off"
              {...register("cep")}
            />
            <div>
              <input
                type="text"
                placeholder="Rua"
                id="Rua"
                className="inputTwo"
                autoComplete="off"
                required
                {...register("street")}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Número"
                id="Número"
                autoComplete="off"
                className="inputThree"
                required
                {...register("number")}
              />
              <input
                type="text"
                placeholder="Complemento"
                id="Complemento"
                autoComplete="off"
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
                autoComplete="off"
                {...register("neighborhood")}
              />
              <input
                type="text"
                placeholder="Cidade"
                id="Cidade"
                className="inputSix"
                required
                autoComplete="off"
                {...register("city")}
              />
              <input
                type="text"
                placeholder="UF"
                id="UF"
                className="inputSeven"
                required
                autoComplete="off"
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
