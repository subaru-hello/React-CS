import { FC, PropsWithChildren } from "react";
import { Container } from "reactstrap";
import { NavMenu } from "./NavMenu";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <NavMenu />
      <Container tag="main">{children}</Container>
    </div>
  );
};
