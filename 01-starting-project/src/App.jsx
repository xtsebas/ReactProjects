import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import Core from './components/Core.jsx';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <Core {...CORE_CONCEPTS[0]}/>
            <Core {...CORE_CONCEPTS[1]}/>
            <Core {...CORE_CONCEPTS[2]}/>
            <Core {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
