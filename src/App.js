import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/missions" element={<Missions />} />
            <Route path="/profile" element={<MyProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
