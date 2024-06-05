import React  from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const superAdminList = ['Diana'];
const adminList = ['Caro', 'Daniel'];

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);
  const location = useLocation();
  const from = location.state?.from || "/";

  const login = ({ username }) => {
    const isAdmin = adminList.find(admin => admin === username);
    const isSuperAdmin = superAdminList.find(item => item === username);
    setUser({ username, isAdmin, isSuperAdmin });
    navigate(from, { replace: true });
  };
  
  const logout = () => {
    setUser(null);
    navigate('/');
  };
  
  const auth = { user, login, logout };

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}

// Si no esta logueado redireccione a Login
function AuthRoute(props) {
  const auth = useAuth();

  const location = useLocation();
  
  if(!auth.user) {
    return <Navigate to = "/login" state={{ from: location }} replace />;
  }
  return props.children;
}

export {
  AuthProvider,
  useAuth,
  AuthRoute
};