import { Outlet } from "react-router-dom";
 
import Starfield from '../Starfield/Starfield.js'

const Layout = () => {
  return (
    <div>
 
      <Starfield starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black" />
      <Outlet />
    </div>
    
  )
};

export default Layout;