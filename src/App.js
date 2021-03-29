import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import SearchBar from './components/searchBar';
import RightPanel from './components/rightPanel';
import VideoPlayer from './components/videoPlayer';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <SearchBar />
        <RightPanel />
        <VideoPlayer />
      </div>
    </Provider>
  );
}

export default App
