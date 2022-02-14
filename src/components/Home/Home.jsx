import React from 'react'

const Home = () => {
    return (
        <div style={{ padding: '1rem', paddingTop: '2rem' }}>
            <h1>Proyecto</h1>
            <br />
            <p>Construir una aplicación web la cual consta de tres páginas:</p>
            <ul>
                <li>Home</li>
                <li>Product Detail</li>
                <li>About</li>
            </ul>
            <p>La aplicación debe tener un menú que le permita al usuario navegar entre estas páginas.</p>
            <br />
            <h3>Requerimientos</h3>
            <ul>
                <li> Usar Flexbox CSS.</li>
                <li> El proyecto debe tener configurado ESLint y el Prettier y que tus archivos no tengan problemas con estos.</li>
                <li> El código del proyecto debe estar en un repositorio público de tu autoría.</li>
                <li> Bonus: Implementar tu CSS con BEM o módulos de CSS.</li>
            </ul>

        </div >
    )
}

export default Home;