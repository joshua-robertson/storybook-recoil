import { Button as BootstrapButton } from "react-bootstrap";

type Props = {
  label: string;
};

export const Button = (props: Props) => {
  return <BootstrapButton>{props.label}</BootstrapButton>;
};
