import { ChangeEvent, FormEvent, useState } from 'react'
import { categories } from '../data/categories'
import { Activity } from '../types/activity.type';

export const Form = () => {
    const [activity, setActivity] = useState<Activity>({
        category: 1,
        name: '',
        calories: 0
    });

    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        const isNumberField = ['category', 'calories'].includes(e.target.id);

        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value            
        });
    };

    const isValidActivity = () => {
        const { name, calories } = activity;

        return name.trim() !== '' && calories > 0;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submit')
    };

    return (
        <>
            <form className='space-y-5 bg-white shadow p-10 rounded-lg'
                  onSubmit={handleSubmit}
            >
                <div className='grid grid-cols-1 gap-3'>
                    <label htmlFor="" className='font-bold'>Categoria:</label>
                    <select className='border border-slate-300 p-2 rounded-lg w-full bg-white'
                        id="category"
                        value={activity.category}
                        onChange={handleChange}
                    >
                        {categories.map(cat => (
                            <option key={cat.id}
                                value={cat.id}
                            >
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='grid grid-cols-1 gap-3'>
                    <label htmlFor="name" className='font-bold'>Actividad:</label>
                    <input id="name"
                        type="text"
                        className='border border-slate-300 p-2 rounded-lg'
                        placeholder="Ej. Comida, Ejercicio."
                        value={activity.name}
                        onChange={e => handleChange(e)}
                    />
                </div>

                <div className='grid grid-cols-1 gap-3'>
                    <label htmlFor="calories" className='font-bold'>Calorias:</label>
                    <input id="calories"
                        type="number"
                        className='border border-slate-300 p-2 rounded-lg'
                        placeholder="Ej. 100, 200 o 300"
                        value={activity.calories}
                        onChange={handleChange}
                    />
                </div>

                <input type="submit"
                    className='bg-emerald-700 hover:bg-emerald-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10'
                    value={activity.category === 1 ? 'Guardar Comida': 'Guardar Ejercicio'}
                    disabled={!isValidActivity()}
                />
            </form>
        </>
    )
}
