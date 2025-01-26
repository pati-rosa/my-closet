// filepath: /Users/patirosa/Documents/my-closet/src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import NavBar from './components/NavBar';
import Register from './features/Register';
import UploadPhotos from './features/UploadPhotos';
import CreateLooks from './features/CreateLooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserProvider } from './context/useUser';

const App: React.FC = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Router>
          <Main />
        </Router>
      </UserProvider>
    </QueryClientProvider>

  );
};

const Main: React.FC = () => {
  const location = useLocation();
  const showNavBar = location.pathname !== '/';

  return (
    <div>
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/upload-photos" element={<UploadPhotos />} />
        <Route path="/create-looks" element={<CreateLooks />} />
      </Routes>
    </div>
  );
};

export default App;