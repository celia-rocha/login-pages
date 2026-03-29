import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Enviando os dados: " + username + " - " + password);
  };

  return (
    <div className='w-[450px] bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-2xl shadow-2xl'>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <h1 className='text-center text-3xl text-white font-bold mb-6 tracking-wide drop-shadow-md'>Acesse o sistema</h1>
        
        <div className='relative w-full h-[50px] group'>
          <input
            type='email'
            placeholder='E-mail'
            required
            onChange={(e) => setUsername(e.target.value)}
            className='w-full h-full bg-transparent outline-none border-2 border-white/30 rounded-full px-6 text-white placeholder:text-white/70 focus:border-white focus:bg-white/5 transition-all duration-300'
          />
          <FaUser className='absolute right-5 top-1/2 -translate-y-1/2 text-white/70 group-focus-within:text-white transition-colors duration-300' />
        </div>

        <div className='relative w-full h-[50px] group'>
          <input
            type='password'
            placeholder='Senha'
            required
            onChange={(e) => setPassword(e.target.value)}
            className='w-full h-full bg-transparent outline-none border-2 border-white/30 rounded-full px-6 text-white placeholder:text-white/70 focus:border-white focus:bg-white/5 transition-all duration-300'
          />
          <FaLock className='absolute right-5 top-1/2 -translate-y-1/2 text-white/70 group-focus-within:text-white transition-colors duration-300' />
        </div>
        
        <div className='flex justify-between items-center text-sm text-white/90 px-2 mt-2'>
          <label className='flex items-center gap-2 cursor-pointer group'>
            <input type='checkbox' className='accent-gray-800' />
            <span className='group-hover:text-white transition-colors'>Lembre de mim</span>
          </label>
          <a href='#' className='hover:underline hover:text-white transition-all'>Esqueceu a senha?</a>
        </div>

        <button type="submit" className='w-full h-[50px] bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-200 transform hover:-translate-y-1 transition-all duration-300 shadow-lg mt-4'>
          Entrar
        </button>

        <div className='text-center text-white/80 text-sm mt-6'>
          <p>
            Não tem uma conta? <a href='#' className='text-white font-bold hover:underline transition-all'>Registrar</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
