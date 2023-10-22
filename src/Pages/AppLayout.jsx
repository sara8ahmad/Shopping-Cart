import Header from './Header/Header';
import Loader from './Loader';
import Footer from './Footer/Footer';
import { Outlet, useNavigation } from 'react-router-dom';
import CardProvider from '../Contexts/CartContext';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <CardProvider>
    <div className='app_layout'>

      {isLoading && <Loader />}

      <Header />

      <div>
        <main className='main' >
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
    </CardProvider>
  );
}

export default AppLayout;