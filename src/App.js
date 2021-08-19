
import './App.css';
import Products from './component/Products';
import classes from './component/Product.module.css'
import Navbar from './component/Navbar';

function App() {
  return (
    <div className={classes.app}>
      <Navbar />
      <Products />
    </div>
  );
}

export default App;
