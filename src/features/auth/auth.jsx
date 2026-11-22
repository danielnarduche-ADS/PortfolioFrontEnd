import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);
const authVerificationUrl = import.meta.env.VITE_AUTH_VERIFICATION_URL || 'https://portfoliobackend-4v63.onrender.com/check-auth';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function checkAuth() {
      if (!authVerificationUrl) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(authVerificationUrl, {
          credentials: 'include',
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          setUser(null);
        }
      } catch (verificationError) {
        console.error('Não foi possível verificar a sessão:', verificationError);
        setError(verificationError);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, error, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}
