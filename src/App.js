import { HashRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider, ProtectRoute } from './auth';

import { Menu } from './Menu';

import { HomePage } from './HomePage';
import { BlogPage } from './BlogPage';
import { BlogPost } from './BlogPost';
import { LoginPage  } from './LoginPage';
import { ProfilePage } from './ProfilePage';
import { LogoutPage } from './logoutPage';
import { Secret } from './Secret';

function App() {

  return (
    <>
      <HashRouter>
        <AuthProvider>
            <Menu />        
            <Routes>
                <Route path="/"           element={ <HomePage  />} />
                <Route path="/blog"       element={ <BlogPage  />} />
                <Route path="/blog/:slug" element={ <BlogPost  />} />
                <Route path="/login"      element={ <LoginPage />} />
                <Route path="/logout"     element={
                    <ProtectRoute>
                       <LogoutPage />
                    </ProtectRoute>
                  } 
                />
                <Route path="/profile"    element={
                    <ProtectRoute>
                        <ProfilePage />
                    </ProtectRoute>
                    } 
                />
                <Route path="/secret"     element={ <Secret       />} />
                <Route path="*"           element={ <p>Not found</p>} /> 
            </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
