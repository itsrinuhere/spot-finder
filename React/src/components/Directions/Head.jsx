import './header.css'
import { Link } from 'react-router-dom';
function Head(){
    return<>
      <div class="header">
          <a href="#default" class="logo">T-finder</a>
          <div class="header-right">
          <Link to="/home"><a class="active" >Home</a></Link>
          <Link to="/finder"><a>finder</a></Link>
          <Link to="/auth"><a>login</a></Link>
          <Link to="/about"><a>About</a></Link>
  </div>
</div>
    </>
}
export default Head;