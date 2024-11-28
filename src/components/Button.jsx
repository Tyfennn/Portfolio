function Button({ children }) {
  return (
    <button className="bg-red-600 text-white py-3 px-7 rounded-lg shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all">
      {children}
    </button>
  );
}

export default Button;