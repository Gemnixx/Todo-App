import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { motion } from "framer-motion";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="w-full flex items-start justify-center px-4 pt-16">

      {/* ANIMATED CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-2xl bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-gray-200 hover:shadow-3xl transition-all duration-300"
      >

        {/* TITLE */}
        <h1 className="text-5xl font-extrabold text-center text-gray-900 tracking-tight">
          Todo App
        </h1>

        {/* SUBTITLE */}
        <p className="text-gray-500 text-center mt-3 mb-10 text-sm sm:text-base">
          Organize your tasks like a pro 🚀
        </p>

        {/* FORM */}
        <form onSubmit={handleForm} className="flex flex-col sm:flex-row gap-4">

          {/* INPUT */}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Write your task..."
            className="flex-1 h-14 px-5 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-md shadow-sm outline-none text-lg
            focus:ring-4 focus:ring-black/10 focus:border-black transition-all"
          />

          {/* ANIMATED BUTTON */}
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="h-14 px-8 rounded-2xl bg-black text-white font-semibold shadow-xl
            hover:shadow-2xl transition-all duration-300"
          >
            Add Task
          </motion.button>

        </form>

      </motion.div>
    </div>
  );
}

export default AddTodo;