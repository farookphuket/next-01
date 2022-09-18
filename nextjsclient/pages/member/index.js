import MemberLayout from "../../components/layout/MemberLayout";
import { useAuth } from "../../hooks/auth";
import { useWhatup } from "../../hooks/useWhatup";
import WhatupForm from "./whatup/whatupForm";
import WhatupCard from "./whatup/whatupCard";
export default function Dashboard() {
  const { user } = useAuth({ middleware: "auth", kickTo: "/login" });

  const { whatup } = useWhatup();
  //console.log(whatup);
  return (
    <MemberLayout title="member section">
      <section className="content">
        <div className="bg-white">
          <h1 className="text-3xl text-green-400">dashboard</h1>
          <p>this is the test member page</p>
          <div className="py-8">
            <WhatupForm></WhatupForm>
          </div>
          <div className="py-8">
            <h2 className="text-2xl text-center">
              hey, what&apos; up {whatup?.whatup.length}
            </h2>
            {whatup?.whatup.map((w) => (
              <WhatupCard key={w.id} whatup={w}></WhatupCard>
            ))}
          </div>
        </div>
      </section>
    </MemberLayout>
  );
}
