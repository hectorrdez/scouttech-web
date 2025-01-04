import { Footer } from "../components/ui/footer";
import Header from "../components/ui/header";

export default function Main({ children, ...args }) {
  return (
    <>
      <Header />
      <main {...args}>{children}</main>
      <Footer />
    </>
  );
}
