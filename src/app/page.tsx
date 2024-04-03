import Counter from "./components/Counter";
import Header from "./components/Header";
import UserForm from "./components/UserForm";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Welcome to Deep's World!
        <Counter />
        <UserForm />
      </main>
    </>
  );
}
