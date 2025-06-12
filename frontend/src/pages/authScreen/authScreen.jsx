import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginHeader from "../../componets/loginHeader/loginHeader";

export default function AuthScreen() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email);
  const isPasswordValid = (password) => password.length >= 6;

  const handleSignUp = () => {
    if (!name.trim()) {
      setError("Por favor, preencha o nome.");
      return;
    }
    if (!isEmailValid(email)) {
      setError("Por favor, insira um email válido.");
      return;
    }
    if (!isPasswordValid(password)) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    console.log("SIGN UP clicked");
    navigate("/home");
  };

  const handleSignIn = () => {
    console.log("SIGN IN clicked");
    navigate("/home");
  };

  return (
    <>
      <LoginHeader />
      <div className="flex min-h-screen font-sans relative">
        {/* Modal de Erro */}
        {error && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-xl font-bold mb-4 text-red-600">Erro</h2>
              <p className="mb-4 text-gray-700">{error}</p>
              <button
                onClick={() => setError(null)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Fechar
              </button>
            </div>
          </div>
        )}

        {/* LEFT - CREATE ACCOUNT */}
        <div className="w-1/2 bg-white flex flex-col justify-center items-center px-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Create Account</h2>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-4 p-3 rounded bg-gray-200 placeholder-gray-500 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-3 rounded bg-gray-200 placeholder-gray-500 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 p-3 rounded bg-gray-200 placeholder-gray-500 outline-none"
          />

          <button
            onClick={handleSignUp}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-full hover:bg-blue-700 transition"
          >
            SIGN UP
          </button>
        </div>

        {/* RIGHT - WELCOME BACK */}
        <div className="w-1/2 bg-blue-600 text-white flex flex-col justify-center items-center px-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
          <p className="mb-8">To keep connected with us please login with your personal info</p>
          <button
            onClick={handleSignIn}
            className="border border-white text-white py-3 px-10 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            SIGN IN
          </button>
        </div>
      </div>
    </>
  );
}
