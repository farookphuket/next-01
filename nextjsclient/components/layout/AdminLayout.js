import Head from "next/head";
import NavMember from "./NavMember";

export default function AdminLayout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title} | Admin</title>
      </Head>
      <div className="wrapper">
        <header className="top-0 sticky">
          <NavMember />
        </header>
        <main>{children}</main>
      </div>
    </>
  );
}
