"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ButtonBackFormProps {
  label: string;
  href: string;
}

const ButtonBackForm: React.FC<ButtonBackFormProps> = ({ label, href }) => {
  return (
    <Button variant={"link"} className="font-normal w-full" size={"sm"}>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default ButtonBackForm;
