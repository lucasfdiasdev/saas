import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import CardWrapper from "@/components/card-wrapper";

const CardError = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Algo deu errado!"
      backButtoHref="/agency/sign-in"
      backButtonLabel="Voltar a tela de login."
    >
      <div className="w-full flex items-center justify-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
};

export default CardError;
