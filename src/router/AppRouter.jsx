
import { Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from '../heroes';
//import { MarvelPage } from '../heroes/pages/MarvelPage'
//import { DcPage } from '../heroes/pages/DcPage'
import { LoginPage } from '../auth';

//import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';

export const AppRouter = () => {
  return (
    <>

      <Routes>
        
        <Route path="login" element={<LoginPage />} />

        <Route path="/*" element={<HeroesRoutes />} />

      </Routes>
    </>
  )
}
