import Meet from "@/components/Meet/Meet";
import Offer from "@/components/Offer/Offer";
import Story from "@/components/Story/Story";
import Values from "@/components/Values/Values";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Story />
      <Offer />
      <Values />
      <Meet />
    </>
  );
};

export default page;
