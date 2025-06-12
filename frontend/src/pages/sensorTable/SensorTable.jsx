import React, { useEffect, useState } from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import MainHeader from '../../componets/mainHeader/mainHeader';
import Settings from '../../componets/settings/settings';
import axios from 'axios';

// const initialSensors = [
//   { name: 'Sensor 1', state: 'Active Alert', temperature: '2°C', margin: '±2°C', mode: 'Refrigerated Storage' },
//   { name: 'Sensor 2', state: 'Inactive Alert', temperature: '2°C', margin: '±2°C', mode: 'Refrigerated Storage' },
//   { name: 'Sensor 3', state: 'Active Alert', temperature: '2°C', margin: '±2°C', mode: 'Refrigerated Storage' },
//   { name: 'Sensor 4', state: 'Active Alert', temperature: '2°C', margin: '±2°C', mode: 'Refrigerated Storage' },
//   { name: 'Sensor 5', state: 'Active Alert', temperature: '2°C', margin: '±2°C', mode: 'Refrigerated Storage' },
//   { name: 'Sensor 6', state: 'Active Alert', temperature: '2°C', margin: '±2°C', mode: 'Refrigerated Storage' },
// ];


const getStateStyle = (state) => ({
  padding: '4px 10px',
  borderRadius: '6px',
  fontWeight: 500,
  fontSize: '13px',
  color: state === 'Active Alert' ? '#155724' : '#721c24',
  backgroundColor: state === 'Active Alert' ? '#c7f2d0' : '#f5bcbc',
  display: 'inline-block',
});

const SensorTable = () => {

  const [sensors, setSensors] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/sensor/`)
      .then(response => setSensors(response.data))
      .catch(error => console.log(error))
  }, [])

  // Form state
  const [newSensor, setNewSensor] = useState({
    tipo: '',
    latitude: '',
    longitude: '',
    localizacao: '',
    responsavel: '',
    unidade_medida: '',
    observacao: '',
    status_operacional: true
  });
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewSensor((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  
  const handleAddSensor = (e) => {
    e.preventDefault();
    console.log(newSensor);
  
    axios.post(`http://127.0.0.1:8000/api/sensor/`, newSensor)
      .then(response => {
        setSensors([...sensors, response.data]);
        setNewSensor({
          tipo: '',
          latitude: '',
          longitude: '',
          localizacao: '',
          responsavel: '',
          unidade_medida: '',
          observacao: '',
          status_operacional: true
        });
        setIsModalOpen(false);
      })
      .catch(error => {
        console.error('Erro ao adicionar sensor:', error);
      });
  };

  


  return (
    <>
      <MainHeader />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: 'calc(100vh - 64px)',
          backgroundColor: '#f5f6f8',
        }}
      >
        <div style={{ padding: '24px', flex: '1 0 auto' }}>
          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px',
            }}
          >
            <h2 style={{ fontSize: '22px', fontWeight: 'bold' }}>Sensores Library</h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {/* Search Input */}
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Search"
                  style={{
                    padding: '10px 40px 10px 14px',
                    borderRadius: '20px',
                    border: '1px solid #ccc',
                    outline: 'none',
                    width: '240px',
                    fontSize: '15px',
                  }}
                />
                <FaSearch
                  style={{
                    position: 'absolute',
                    right: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#999',
                    fontSize: '15px',
                  }}
                />
              </div>

              {/* Botão que abre o modal */}
              <button
                className="w-12 h-12 bg-[#3F9CFA] hover:bg-[#0C6CD3] rounded-full flex items-center justify-center"
                onClick={() => setIsModalOpen(true)}
              >
                <FaPlus className="text-white text-xl" />
              </button>
            </div>
          </div>

          {/* Table */}
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#3498db', color: '#fff' }}>
                <th style={{ padding: '12px', borderTopLeftRadius: '8px', textAlign: 'center' }}>Tipo</th>
                <th style={{ padding: '12px', textAlign: 'right' }}>Latitude</th>
                <th style={{ padding: '12px', textAlign: 'right' }}>Longitude</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Localização</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Responsável</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Unidade de medida</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Observação</th>
                <th style={{ padding: '12px', textAlign: 'center' }}>Status</th>
                <th style={{ padding: '12px', borderTopRightRadius: '8px', textAlign: 'center' }}>Mode</th>
              </tr>
            </thead>
            <tbody>
              {sensors.map((sensor, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor: '#fff',
                    borderBottom: '1px solid #f0f0f0',
                    verticalAlign: 'middle',
                  }}
                >
                  <td style={{ padding: '14px', textAlign: 'center' }}>{sensor.tipo}</td>
                  <td style={{ padding: '14px', textAlign: 'right' }}>{sensor.latitude}</td>
                  <td style={{ padding: '14px', textAlign: 'right' }}>{sensor.longitude}</td>
                  <td style={{ padding: '14px', textAlign: 'left' }}>{sensor.localizacao}</td>
                  <td style={{ padding: '14px', textAlign: 'left' }}>{sensor.responsavel}</td>
                  <td style={{ padding: '14px', textAlign: 'left' }}>{sensor.unidade_medida}</td>
                  <td style={{ padding: '14px', textAlign: 'left' }}>{sensor.observacao}</td>
                  <td style={{
                    padding: '4px 8px',
                    color: sensor.status_operacional ? '#155724' : '#721c24',
                    backgroundColor: sensor.status_operacional ? '#c7f2d0' : '#f5bcbc',
                    borderRadius: '4px',
                    fontWeight: '600',
                    fontSize: '14px',
                    textAlign: 'center',
                    width: '70px',
                    whiteSpace: 'nowrap',
                  }}>
                    {sensor.status_operacional ? 'Ativo' : 'Inativo'}
                  </td>
                  <td style={{ padding: '14px', textAlign: 'center' }}>{sensor.mode}</td>
                </tr>
              ))}
            </tbody>
          </table>


        </div>

        <div style={{ flexShrink: 0 }}>
          <Settings />
        </div>

        {/* Modal simples */}
        {isModalOpen && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
            }}
            onClick={() => setIsModalOpen(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: '#fff',
                padding: '24px',
                borderRadius: '8px',
                width: '600px',
                maxWidth: '90%',
                boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
              }}
            >
              <h3 style={{ marginBottom: '16px' }}>Add new sensor</h3>
              <p style={{ marginBottom: '24px', color: '#3F51B5', fontWeight: '500' }}>
                Preencha as informações
              </p>
              <form onSubmit={handleAddSensor}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '12px',
                    marginBottom: '24px',
                  }}
                >
                  <input
                    type="text"
                    name="tipo"
                    placeholder="Tipo"
                    value={newSensor.tipo}
                    onChange={handleInputChange}
                    required
                    style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
                  />
                  <input
                    type="text"
                    name="responsavel"
                    placeholder="Responsavel"
                    value={newSensor.responsavel}
                    onChange={handleInputChange}
                    required
                    style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
                  />
                  <input
                    type="text"
                    name="latitude"
                    placeholder="Latitude"
                    value={newSensor.latitude}
                    onChange={handleInputChange}
                    required
                    style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
                  />
                  <input
                    type="text"
                    name="unidade_medida"
                    placeholder="Unidade de Medida"
                    value={newSensor.unidade_medida}
                    onChange={handleInputChange}
                    required
                    style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
                  />
                  <input
                    type="text"
                    name="longitude"
                    placeholder="Longitude"
                    value={newSensor.longitude}
                    onChange={handleInputChange}
                    required
                    style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
                  />
                  <input
                    type="text"
                    name="observacao"
                    placeholder="Observação"
                    value={newSensor.observacao}
                    onChange={handleInputChange}
                    style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
                  />
                  <input
                    type="text"
                    name="localizacao"
                    placeholder="Localizacao"
                    value={newSensor.localizacao}
                    onChange={handleInputChange}
                    required
                    style={{
                      padding: '10px',
                      borderRadius: '6px',
                      border: '1px solid #ccc',
                      gridColumn: 'span 2',
                    }}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    style={{
                      padding: '8px 16px',
                      backgroundColor: '#fff',
                      color: '#3F9CFA',
                      border: '1px solid #3F9CFA',
                      borderRadius: '6px',
                      cursor: 'pointer',
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    style={{
                      padding: '8px 16px',
                      backgroundColor: '#3F9CFA',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                    }}
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SensorTable;
