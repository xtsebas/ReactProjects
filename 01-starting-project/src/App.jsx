import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import Core from './components/Core.jsx';
import TabButton from './components/TabButon.jsx';

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
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>

          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
