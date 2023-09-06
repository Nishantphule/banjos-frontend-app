import './App.css';
import { AppBar, Toolbar, Typography } from '@mui/material';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Banjos from './menuComponents/Banjos';
import Burger from './menuComponents/Burger';
import Pasta from './menuComponents/Pasta';
import Sandwiches from "./menuComponents/Sandwiches"
import Momos from './menuComponents/Momos';
import Maggi from './menuComponents/Maggi';
import Salad from './menuComponents/Salad';
import Rolls from "./menuComponents/Rolls"
import TastyBites from './menuComponents/TastyBites';
import Fries from './menuComponents/Fries';
import Beverages from './menuComponents/Beverages';
import Deserts from "./menuComponents/Deserts"
import Pizza from './menuComponents/Pizza';
// import InstagramIcon from '@mui/icons-material/Instagram';

function App() {

  return (
    <div className="App">

      <AppBar position="sticky" color='error'>

        <Toolbar >
          <LocalDiningIcon />
          <Typography
            variant="h2"
            noWrap
            component="a"
            href="/"
            sx={{
              m: "auto",
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '22px'
            }}
          >
            BANJOS MENU
          </Typography>
        </Toolbar>
      </AppBar>



      <Routes>

        <Route path="/banjos" element={<Banjos />} />
        <Route path="/burger" element={<Burger />} />
        <Route path="/pasta" element={<Pasta />} />
        <Route path='/sandwiches' element={<Sandwiches />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/momos" element={<Momos />} />
        <Route path="/maggi" element={<Maggi />} />
        <Route path="/salad" element={<Salad />} />
        <Route path="/rolls" element={<Rolls />} />
        <Route path="/tastyBites" element={<TastyBites />} />
        <Route path="/fries" element={<Fries />} />
        <Route path="/beverages" element={<Beverages />} />
        <Route path="/deserts" element={<Deserts />} />

        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
        <Route path="/404" element={<NotFound />} />

      </Routes>



    </div>
  );
}

export default App;
