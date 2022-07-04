import Header from "../components/Header";
import Container from "../components/Container";
import Image from "next/image";

import img from "../assets/image-product-1.jpg";

export default function Home() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <main className="w-full">
        <Image src={img} />
      </main>
    </>
  );
}
