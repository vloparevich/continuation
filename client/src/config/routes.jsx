import * as PATHS from '../utils/paths';
import HomePage from '../components/Home/HomePage';

const routes = (props) => {
  return [
    {
      path: PATHS.HOMEPAGE,
      element: <HomePage {...props} />,
    },
  ];
};

export default routes;
