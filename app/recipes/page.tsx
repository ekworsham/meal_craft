'use client';

import { useActionState } from 'react';
import { createRecipe, type State } from '@/lib/actions';

const initialState: State = {
  message: null,
  errors: {},
};

export default function RecipesPage() {
  const [state, formAction, isPending] =
    useActionState(createRecipe, initialState);

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Create Recipe</h1>

      <form action={formAction} className="bg-white rounded-lg shadow-md p-8 space-y-6">
        <div className="space-y-2">
          <label htmlFor="date" className="block text-sm font-medium text-slate-700">Recipe Date</label>
          <input
            id="date"
            name="date"
            type="date" 
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
            aria-describedby="date-error"
            required 
          />
          <div id="date-error" aria-live="polite" aria-atomic="true">
            {state.errors?.date?.map((error) => (
              <p key={error} className="mt-1 text-sm text-red-600">
                {error}
              </p>
            ))}
          </div>
        </div>
      </form>
    </main>
  );
}