import Head from "next/head";
import Nav from "./Nav";
export default function GuestLayout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="wrapper">
        <header className="top-0 sticky">
          <Nav />
        </header>
        <main>{children}</main>
      </div>
    </>
  );
}
