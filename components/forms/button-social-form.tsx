import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";

const ButtonSocialForm = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button variant="outline" size="icon" className="w-full">
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button variant="outline" size="icon" className="w-full">
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default ButtonSocialForm;
