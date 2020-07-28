import React from "react";

import PageDefault from "../../components/PageDefault";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import data from "../../data/dados_iniciais.json";

function Home() {
  return (
    <PageDefault>
      <BannerMain
        videoTitle={data.categorias[0].videos[0].titulo}
        url={data.categorias[0].videos[0].url}
        videoDescription={"Alou meu brasillll"}
      />
      <Carousel ignoreFirstVideo category={data.categorias[0]} />
    </PageDefault>
  );
}
export default Home;
