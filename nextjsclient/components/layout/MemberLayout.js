import Head from "next/head";
import NavMember from "./NavMember";

import { useAuth } from "../../hooks/auth";
export default function MemberLayout({ title, children }) {
  const { user } = useAuth({ middleware: "auth", kickTo: "/login" });
  return (
    <>
      <Head>
        <title>{title} | member</title>
      </Head>
      <div className="wrapper">
        <header className="top-0 sticky">
          <NavMember user={user} />
        </header>
        <main className="min-h-screen">{children}</main>
      </div>
    </>
  );
}
