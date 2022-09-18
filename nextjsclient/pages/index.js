import GuestLayout from "../components/layout/GuestLayout";
export default function Home() {
  return (
    <GuestLayout title="welcome to my frist nextjs app">
      <section className="content">
        <div className="bg-white">
          <h1 className="text-3xl text-green-400">my first app</h1>
          <p>this is the test</p>
        </div>
      </section>
    </GuestLayout>
  );
}
