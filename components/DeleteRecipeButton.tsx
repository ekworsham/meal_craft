"use client";

import { useActionState } from "react";

import { removeRecipe } from "@/lib/actions";

type DeleteRecipeButtonProps = {
  id: number;
};

export default function DeleteRecipeButton({
  id,
}: DeleteRecipeButtonProps) {
  const removeRecipeWithId = removeRecipe.bind(null, id);

  const [message, formAction, isPending] = useActionState(
    removeRecipeWithId,
    undefined
  );

  return (
    <div>
      <form action={formAction}>
        <button
          type="submit"
          disabled={isPending}
          className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-red-700 transition-colors duration-200 disabled:opacity-50"
        >
          {isPending ? "Deleting..." : "Delete"}
        </button>
      </form>

      {message && (
        <p
          className={
            message.includes("successfully")
              ? "mt-2 text-green-700"
              : "mt-2 text-red-600"
          }
          role="alert"
        >
          {message}
        </p>
      )}
    </div>
  );
}