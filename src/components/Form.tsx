import { categories } from "../data/categories"

export const Form = () => {
    return (
        <>
            <form className='space-y-5 bg-white shadow p-10 rounded-lg'>
                <div className='grid grid-cols-1 gap-3'>
                    <label htmlFor="" className='font-bold'>Categoria:</label>
                    <select className='border border-slate-300 p-2 rounded-lg w-full bg-white'
                            id="category"
                    >
                        {categories.map(cat => (
                            <option key={cat.id}
                                    value={cat.id}
                            >
                                {cat.name }
                            </option>
                        ))}
                    </select>
                </div>
                <div className='grid grid-cols-1 gap-3'>
                    <label htmlFor="activity" className='font-bold'>Actividad:</label>
                    <input id="activity"
                           type="text"
                           className='border border-slate-300 p-2 rounded-lg'
                           placeholder="Ej. Comida, Ejercicio." 
                    />
                </div>

                <div className='grid grid-cols-1 gap-3'>
                    <label htmlFor="calories" className='font-bold'>Calorias:</label>
                    <input id="calories"
                           type="number"
                           className='border border-slate-300 p-2 rounded-lg'
                           placeholder="Ej. 100, 200 o 300" 
                    />
                </div>

                <input type="submit"
                       className='bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer'
                       value='Guardar comida o Guardar Ejercicio'
                />
            </form>
        </>
    )
}
