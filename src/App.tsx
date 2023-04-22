
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './components/Dashboard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Dashboard />}>
        <Route path="" element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      {/* ... etc. */}
    </Route>
  )
);
function App() {
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
