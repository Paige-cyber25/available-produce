
import './App.css';
import Products from './component/Products';
import classes from './component/Product.module.css'

function App() {
  return (
    <div className={classes.app}>
      <Products />
    </div>
  );
}

export default App;
