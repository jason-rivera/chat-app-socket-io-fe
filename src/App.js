import './styles/global.css';

function App() {
  return (
    <div className='App'>
      <ul id='messages'></ul>
      <form id='form' action=''>
        <input id='input' autocomplete='off' />
        <button>Send</button>
      </form>
    </div>
  );
}

export default App;
