import './App.css';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <nav className="flex items-center justify-between flex-wrap bg-cyan-900 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">Bin2Dec</span>
        </div>
        <div class="block md:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        
      </nav>
      <span className='bg-cyan-600 h-20 flex'>
        <h1 className='text-left my-auto mx-6 text-cyan-100 text-2xl'> A Binary to Decimal <br/> Converter </h1>
      </span>

      <Input />
    </div>
  );
}

export default App;
