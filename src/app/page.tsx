import Counter from "./components/Counter";
import Header from "./components/Header";
import StarWarsCharacter from "./components/StarWarsCharacter";
import UserForm from "./components/UserForm";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Welcome to Deep&apos;s World!
        <Counter />
        <UserForm />
        <StarWarsCharacter />
      </main>
    </>
  );
}
