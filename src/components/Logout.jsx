import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../api/authLog';

const LogoutButton = () => {
  const [logout, { isLoading }] = useLogoutMutation();
  const navigate = useNavigate();

  const handleClick = async () => {
    await logout();
    localStorage.setItem('isLoggedIn', false);
    navigate('/login');
  };

  return (
    <button type="button" onClick={handleClick} disabled={isLoading}>
      {isLoading ? 'Logging out...' : 'Log out'}
    </button>
  );
};

export default LogoutButton;
