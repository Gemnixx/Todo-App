import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodo, setEditId, setEditText } from "../features/todo/todoSlice";
import { motion } from "framer-motion";

function EditTodo() {
  const dispatch = useDispatch();
  const { editId, editText } = useSelector((state) => state.todos);

  if (!editId) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      editTodo({
        id: editId,
        text: editText,
      })
    );

    dispatch(setEditText(""));
    dispatch(setEditId(null));
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4 z-50">

      {/* BACKDROP ANIMATION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0"
      />

      {/* MODAL */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full max-w-md bg-white/80 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl p-8"
      >

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Edit Task ✏️
        </h2>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* INPUT */}
          <input
            value={editText}
            onChange={(e) => dispatch(setEditText(e.target.value))}
            type="text"
            placeholder="Update your task..."
            className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-white/70 shadow-sm outline-none text-lg
            focus:ring-4 focus:ring-black/10 focus:border-black transition-all"
          />

          {/* BUTTONS */}
          <div className="flex gap-3 justify-end">

            {/* CANCEL */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                dispatch(setEditId(null));
                dispatch(setEditText(""));
              }}
              className="px-5 py-2.5 rounded-2xl bg-gray-200 text-gray-700 font-semibold
              hover:bg-gray-300 transition-all"
            >
              Cancel
            </motion.button>

            {/* SAVE */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 rounded-2xl bg-black text-white font-semibold
              hover:shadow-xl transition-all"
            >
              Save Changes
            </motion.button>

          </div>

        </form>

      </motion.div>
    </div>
  );
}

export default EditTodo;