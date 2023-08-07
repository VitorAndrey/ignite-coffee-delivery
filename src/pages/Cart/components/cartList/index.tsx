import { CardListContainer } from "./style";

export default function CartList() {
  return (
    <CardListContainer>
      <div>
        <p>
          Total de itens <span>R$ 29,70</span>
        </p>
        <p>
          Entrega <span>R$ 3,50</span>
        </p>
        <p>
          Total <span>R$ 33,20</span>
        </p>
      </div>
      <button>Confirmar Pedido</button>
    </CardListContainer>
  );
}
