import NavBar from "./navbar";

const Layout = ({children}) => {
    return ( 
        <div className="cont">
<NavBar/>
            {children }
        
        </div>
        
     );
}
 
export default Layout;