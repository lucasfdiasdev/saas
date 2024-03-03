"use client";

import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import CardWrapper from "@/components/card-wrapper";
import ErrorForm from "@/components/forms/error-form";
import SuccessForm from "@/components/forms/success-form";
import { newVerification } from "@/actions/new-verification";

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Missing token!");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      title="Verification Email"
      headerLabel="Confirme your verification"
      backButtonLabel="Back to login"
      backButtoHref="/agency/sign-in"
    >
      <div
        className="flex items-center justify-center w-full
      "
      >
        {!success && !error && <BeatLoader />}
        {!success && <ErrorForm message={error} />}
        <SuccessForm message={success} />
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
