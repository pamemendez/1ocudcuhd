import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PlusCircle, MessageCircle, Loader, Award } from 'lucide-react';
import MainHeader from '../../componets/mainHeader/mainHeader';

const datasets = {
  Adoção: {
    title: 'Adoção',
    color1: '#60a5fa',
    color2: '#93c5fd',
    data: [
      { dia: 'domingo', valor1: 100, valor2: 80 },
      { dia: 'segunda-feira', valor1: 120, valor2: 90 },
      { dia: 'terça-feira', valor1: 200, valor2: 150 },
      { dia: 'quarta-feira', valor1: 170, valor2: 130 },
      { dia: 'quinta-feira', valor1: 140, valor2: 100 },
      { dia: 'sexta-feira', valor1: 160, valor2: 110 },
      { dia: 'sábado', valor1: 190, valor2: 170 },
    ]
  },
  Engajamento: {
    title: 'Engajamento',
    color1: '#a855f7',
    color2: '#06b6d4',
    data: [
      { dia: 'domingo', valor1: 200, valor2: 150 },
      { dia: 'segunda-feira', valor1: 180, valor2: 120 },
      { dia: 'terça-feira', valor1: 380, valor2: 290 },
      { dia: 'quarta-feira', valor1: 280, valor2: 260 },
      { dia: 'quinta-feira', valor1: 160, valor2: 100 },
      { dia: 'sexta-feira', valor1: 140, valor2: 110 },
      { dia: 'sábado', valor1: 310, valor2: 300 },
    ]
  },
  Retenção: {
    title: 'Retenção',
    color1: '#6366f1',
    color2: '#818cf8',
    data: [
      { dia: 'domingo', valor1: 50, valor2: 30 },
      { dia: 'segunda-feira', valor1: 70, valor2: 40 },
      { dia: 'terça-feira', valor1: 110, valor2: 80 },
      { dia: 'quarta-feira', valor1: 90, valor2: 60 },
      { dia: 'quinta-feira', valor1: 80, valor2: 55 },
      { dia: 'sexta-feira', valor1: 100, valor2: 75 },
      { dia: 'sábado', valor1: 130, valor2: 100 },
    ]
  },
  'Taxa de Sucesso': {
    title: 'Taxa de Sucesso',
    color1: '#f59e0b',
    color2: '#f97316',
    data: [
      { dia: 'domingo', valor1: 300, valor2: 250 },
      { dia: 'segunda-feira', valor1: 280, valor2: 220 },
      { dia: 'terça-feira', valor1: 350, valor2: 290 },
      { dia: 'quarta-feira', valor1: 320, valor2: 260 },
      { dia: 'quinta-feira', valor1: 310, valor2: 250 },
      { dia: 'sexta-feira', valor1: 340, valor2: 270 },
      { dia: 'sábado', valor1: 390, valor2: 320 },
    ]
  }
};

const icons = {
  Adoção: <PlusCircle size={20} />,
  Engajamento: <MessageCircle size={20} />,
  Retenção: <Loader size={20} />,
  'Taxa de Sucesso': <Award size={20} />
};

export default function Dashboard() {
  const [selectedMetric, setSelectedMetric] = useState('Engajamento');

  const { title, color1, color2, data } = datasets[selectedMetric];

  return (
    <>
      <MainHeader />
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Conquistando a estilização perfeita:
          </h1>
          <p className="text-base text-gray-500">
            superando os desafios do seu Dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {Object.keys(datasets).map((metric) => (
            <button
              key={metric}
              onClick={() => setSelectedMetric(metric)}
              className={`rounded-xl shadow-md p-6 text-white flex flex-col items-start justify-between gap-2
                ${metric === 'Adoção' && 'bg-gradient-to-r from-blue-400 to-blue-600'}
                ${metric === 'Engajamento' && 'bg-gradient-to-r from-purple-400 to-purple-600'}
                ${metric === 'Retenção' && 'bg-gradient-to-r from-indigo-800 to-indigo-900'}
                ${metric === 'Taxa de Sucesso' && 'bg-gradient-to-r from-orange-400 to-yellow-500'}
                ${selectedMetric === metric ? 'ring-4 ring-offset-2 ring-indigo-300' : ''}
              `}
            >
              <div className="flex justify-between w-full">
                <p className="text-sm">{metric}</p>
                {icons[metric]}
              </div>
              <h2 className="text-2xl font-bold">
                {metric === 'Adoção' ? '2,2 mil' :
                 metric === 'Engajamento' ? '1,6 mil' :
                 metric === 'Retenção' ? '215,0' : '4,8'}
              </h2>
              <p className="text-xs text-gray-200">↑ 1,0 mil</p>
            </button>
          ))}
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>

        <div className="w-full bg-white rounded-xl shadow-md p-6">
          <div className="flex space-x-6 mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-1" style={{ backgroundColor: color1 }}></div>
              <span className="text-sm text-gray-700">Engajamento (Funcionamento adequado)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-1" style={{ backgroundColor: color2 }}></div>
              <span className="text-sm text-gray-700">Resultado</span>
            </div>
          </div>

          <div className="w-full h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dia" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="valor1" stroke={color1} strokeWidth={2} />
                <Line type="monotone" dataKey="valor2" stroke={color2} strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}
