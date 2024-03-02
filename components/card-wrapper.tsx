import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ButtonSocialForm from "./forms/button-social-form";
import ButtonBackForm from "./forms/button-back-form";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel?: string;
  title?: string;
  backButtonLabel: string;
  backButtoHref: string;
  showSocial?: boolean;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  children,
  title,
  headerLabel,
  backButtonLabel,
  backButtoHref,
  showSocial,
}) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader className="flex items-center justify-center space-y-6">
        <CardTitle className="text-3xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          {headerLabel}
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <ButtonSocialForm />
        </CardFooter>
      )}
      <CardFooter>
        <ButtonBackForm label={backButtonLabel} href={backButtoHref} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
