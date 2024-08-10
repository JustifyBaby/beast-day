import { Roulette } from "./components/Roulette";

function App() {
  return (
    <div className='flex flex-col justify-center items-center overflow-hidden'>
      <header className='h-1/4 p-5'>
        <h1 className='text-3xl font-bold'>8月10日は野獣の日！</h1>
      </header>

      <Roulette />
    </div>
  );
}

export default App;
