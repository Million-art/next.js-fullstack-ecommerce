import React, { ReactElement } from "react";
import Header from "./header/Header";
import Footer from "@/pages/component/footer/Footer";

interface Props {
  children: ReactElement;
}

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
       {children}
      <Footer />
    </>
  );
};

export default RootLayout;
