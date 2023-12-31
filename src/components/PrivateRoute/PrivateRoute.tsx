import {Navigate} from 'react-router-dom';
import PrivateRouteProps from '../../utils/types/PrivateRoureProps';


function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const hasAccess = true;

  return hasAccess ? children : <Navigate to={'/login'} />;
}

export default PrivateRoute;
