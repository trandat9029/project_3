import TodoFeatures from './features/Todo'
import AlbumFeatures from './features/Album'
import NotFound from './components/Notfound'
import { Route, Routes, Navigate} from 'react-router-dom'
import './App.css'
import Header from 'components/Header'
import ProductFeature from 'features/Product'
import ListPage from 'features/Product/pages/ListPage'
import DetailPage from 'features/Product/pages/DetailPage'

function App() {

  return (
    <>
      <div className="app">
        <Header/>
        <Routes>
          <Route path='/home' element={<Navigate to='/' replace />}/>

          {/* <Route path='/' element={<CounterFeature/>} />  */}
          {/* <Route path='todo' element={<TodoFeatures/>} >
            <Route index element={<ListPage/>}/>
            <Route path=':todoId' element={<DetailPage/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route> */}
          <Route path='album' element={<AlbumFeatures/>} />
          <Route path='product' element={<ProductFeature/>} >
            <Route index element={<ListPage/>}/>
            <Route path=':productId' element={<DetailPage/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>

          <Route path='*' element={<NotFound/>}/>
        </Routes>
      <footer>
        <h2>Footer</h2>
      </footer>
      </div>
    </>
  )
}

export default App
