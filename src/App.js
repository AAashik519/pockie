 import 'bootstrap/dist/css/bootstrap.min.css'
import Carosol from './components/Carosol/Carosol';
import HotDeal from './components/Carosol/HotDeal';
 
import Header from './components/Header/Header';
import ShopByCategory from './components/ShopByCategory/ShopByCategory';

function App() {
  return (
    <div className=" ">
      <Header />
      {/* <Carosol /> */}
      <ShopByCategory />
      <HotDeal />


    </div>
  );
}

export default App;
