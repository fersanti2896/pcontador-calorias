import { Form } from './components';

function App() {

  return (
    <>
      <header className='bg-green-700 py-3'>
        <div className='max-w-4xl mx-auto flex justify-between'>
          <h1 className="text-center font-bold text-white uppercase">Contador de Calorías</h1>
        </div>
      </header>

      <section className='bg-lime-600 py-20 px-5'>
        <div className='max-w-4xl mx-auto'>
          <Form />
        </div>
      </section>
    </>
  )
}

export default App
