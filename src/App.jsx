import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [apiStatus, setApiStatus] = useState("Cargando conexión...");

  // Prueba de conexión a una API pública para testear red
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        if(response.ok) setApiStatus("✅ Conexión con API externa exitosa");
        else setApiStatus("❌ Error de red");
      })
      .catch(() => setApiStatus("⚠️ API no alcanzable (revisa CORS/Internet)"));
  }, []);

  const styles = {
    container: {
      fontFamily: 'system-ui, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#0f172a',
      color: '#f8fafc',
      textAlign: 'center',
      width: '1500px',
    
    },
    card: {
      padding: '2rem',
      borderRadius: '1rem',
      backgroundColor: '#1e293b',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    },
    button: {
      padding: '0.5rem 1rem',
      fontSize: '1rem',
      cursor: 'pointer',
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      borderRadius: '0.5rem',
      marginTop: '1rem'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>🚀 Mi Despliegue en Vercel</h1>
        <p>Si ves esto, el Front-end está funcionando perfectamente.</p>
        
        <div style={{ margin: '2rem 0', borderTop: '1px solid #334155', paddingTop: '1rem' }}>
          <h3>Prueba de Estado (React Hooks):</h3>
          <p>Contador: <strong>{count}</strong></p>
          <button style={styles.button} onClick={() => setCount(count + 1)}>
            ¡Aumentar!
          </button>
        </div>

        <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#94a3b8' }}>
          <p>Estado del Back-end: {apiStatus}</p>
        </div>
      </div>
    </div>
  );
}

export default App;