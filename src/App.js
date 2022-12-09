import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import ShowStories from './components/ShowStories';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path = "/" element = {<ShowStories type = {'top'}/>}/>
          <Route path = "/new" element = {<ShowStories type = {'new'}/>}/>
          <Route path = "/best" element = {<ShowStories type = {'best'}/>}/>
          <Route path = "/top" element = {<ShowStories type = {'top'}/>}/>
          <Route element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
