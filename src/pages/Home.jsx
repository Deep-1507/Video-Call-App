import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const [id, setId] = useState("");
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                
                <h1 style={styles.heading}>Join Your Video Call</h1>
                <p style={styles.text}>Enter the room ID to join the video call instantly.</p>
                <input
                    type="text"
                    placeholder="Enter the ID..."
                    onChange={(e) => setId(e.target.value)}
                    style={styles.input}
                />
                <button
                    onClick={() => navigate(`/call?id=${id}`)}
                    style={styles.button}
                >
                    Join Now
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#1a1a1a',
        color: '#fff',
    },
    content: {
        textAlign: 'center',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#2c2c2c',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    },
    svg: {
        width: '100px',
        height: '100px',
        marginBottom: '20px',
    },
    heading: {
        fontSize: '28px',
        margin: '10px 0',
        color: '#ffffff',
    },
    text: {
        fontSize: '16px',
        marginBottom: '20px',
        color: '#cccccc',
    },
    input: {
        width: '300px',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        border: 'none',
        fontSize: '16px',
        backgroundColor: '#444',
        color: '#fff',
    },
    button: {
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
        marginTop: '10px',
        transition: 'background-color 0.3s',
    },
};

export default Home;
