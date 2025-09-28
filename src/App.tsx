import { toast } from "react-toastify";

function App() {
  return (
    <>
      <div>
        <h1
          onClick={() => toast.info("teste")}
          className='text-7xl text-amber-950'
        >
          Ainda bebe
        </h1>
      </div>
    </>
  );
}

export default App;
