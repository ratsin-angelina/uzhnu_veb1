import { useMutation, useQueryClient } from '@tanstack/react-query';
import { registerUser } from '../api/api';

const USER_STORAGE_KEY = 'spanish_cuisine_user';

export const useAuth = () => {
  const queryClient = useQueryClient();

  const registerMutation = useMutation({
    mutationFn: async (userData) => {
      console.log(' Реєстрація користувача:', userData);
      const response = await registerUser(userData);
      
      if (!response.success) {
        throw new Error(response.error || 'Помилка реєстрації');
      }
      
      return response;
    },
    onSuccess: (data) => {
      if (data.success && data.user) {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(data.user));
        console.log(' Користувач успішно зареєстрований:', data.user);

        queryClient.setQueryData(['currentUser'], data.user);
      }
    },
    onError: (error) => {
      console.error(' Помилка реєстрації:', error);
    },
  });

  const getCurrentUser = () => {
    try {
      const user = localStorage.getItem(USER_STORAGE_KEY);
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error(' Помилка читання користувача з localStorage:', error);
      localStorage.removeItem(USER_STORAGE_KEY);
      return null;
    }
  };

  const isAuthenticated = () => {
    const user = getCurrentUser();
    return !!user;
  };

  const logout = () => {
    localStorage.removeItem(USER_STORAGE_KEY);
    queryClient.removeQueries({ queryKey: ['currentUser'] });
    queryClient.invalidateQueries({ queryKey: ['reviews'] });
    console.log('Користувач вийшов з системи');
  };

  const autoLogin = () => {
    const user = getCurrentUser();
    if (user) {
      queryClient.setQueryData(['currentUser'], user);
    }
    return user;
  };

  return {
    register: registerMutation.mutate,
    registerAsync: registerMutation.mutateAsync,
    isRegistering: registerMutation.isPending,
    registerError: registerMutation.error,
    currentUser: getCurrentUser(),
    isAuthenticated: isAuthenticated(),
    logout,
    autoLogin,
  };
};