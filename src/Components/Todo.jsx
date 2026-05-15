import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, setEditId, setEditText } from "../features/todo/todoSlice";
import { motion } from "framer-motion";

function Todo() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  // Stagger container
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  // Item animation
  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="w-full flex justify-center mt-10 px-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-2xl space-y-5"
      >

        {/* EMPTY STATE */}
        {todos.length === 0 ? (
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-12 text-center border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-400">
              No Todos Yet 🚀
            </h2>
            <p className="text-gray-400 mt-2">
              Start by adding your first task
            </p>
          </div>
        ) : (
          todos.map((todo) => (
            <motion.div
              key={todo.id}
              variants={item}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group bg-white/80 backdrop-blur-xl rounded-3xl shadow-md border border-gray-200 p-5 flex items-center justify-between"
            >

              {/* TEXT */}
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 break-words pr-4">
                {todo.text}
              </h2>

              {/* ACTIONS */}
              <div className="flex gap-3">

                {/* EDIT */}
                <button
                  onClick={() => {
                    dispatch(setEditId(todo.id));
                    dispatch(setEditText(todo.text));
                  }}
                  className="px-5 py-2 rounded-2xl bg-blue-500 text-white font-semibold shadow-md
                  hover:bg-blue-600 active:scale-95 transition-all duration-300"
                >
                  Edit
                </button>

                {/* DELETE */}
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="px-5 py-2 rounded-2xl bg-red-500 text-white font-semibold shadow-md
                  hover:bg-red-600 active:scale-95 transition-all duration-300"
                >
                  Delete
                </button>

              </div>

            </motion.div>
          ))
        )}

      </motion.div>
    </div>
  );
}

export default Todo;