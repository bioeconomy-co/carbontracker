import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import DashboardDetails from './pages/DashboardDetails';

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              // element={<Home />}
              element={<Navigate replace to="/dashboard" />}
            />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/dashboard/:id" element={<DashboardDetails />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
