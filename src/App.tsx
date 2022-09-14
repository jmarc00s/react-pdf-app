import { Navbar } from "components/Navbar";
import { AppRouter } from "core/router";

function App() {
  return (
    <main className="flex flex-col w-full items-center p-16 bg-slate-800 text-white min-h-screen max-h-full">
      <h1 className="text-3xl pb-4">Hello react-pdf</h1>
      <Navbar />
      <AppRouter />
    </main>
  );
}

export default App;
