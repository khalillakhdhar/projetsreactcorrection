
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Produit from "./pages/Produit";
import Date from "./pages/Date";
import Parite from "./pages/Parite";
import NoPage from "./pages/NoPage";
function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Layout />}>
<Route index element={<Produit />} />
<Route path="date" element={<Date />} />
<Route path="parite" element={<Parite />} />

</Route>
<Route path="*" element={<NoPage />} />
</Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
