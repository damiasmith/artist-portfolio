
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { MainContainer } from './components/main-container/main-container';
import { cvData } from './cvData';

export const App = () => {
  return (
    <div>
      <MainContainer {...cvData}/>
    </div>
  );
}

