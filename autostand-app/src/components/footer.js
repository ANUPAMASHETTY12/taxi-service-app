import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div style={{ position: "relative", height: 60, background: "#fff", display: "flex", columnGap: 10 , alignItems:"center", boxShadow: "rgba(102, 95, 95, 0.37) 0px -3px 11px 2px"  }}>

        <div className="Home" style={{ width: 100,display: "flex", flexDirection: "column" , alignItems: "center" , justifyContent: "center"}}>
          <div className="Menu-icon" style={{ margin: 7 }}>
          <Link to="/"><img src="https://app.sprentzo.com/static/media/home.a4ca72d06802c6a6026eeaf257d722de.svg" alt="Profile" width="20" /></Link>
          </div>
          <div className="Menu-Title" style={{ fontSize: 11 }}>Home</div>
        </div>

        <div className="Search" style={{ width: 100,display: "flex", flexDirection: "column" , alignItems: "center" , justifyContent: "center"}}>
          <div className="Menu-icon" style={{ margin: 7 }}>
          <Link to="/"><img src="https://app.sprentzo.com/static/media/search.f3110960a8833ab2c2c2e185fe4f17ee.svg" alt="Profile" width="20" /></Link>
          </div>
          <div className="Menu-Title" style={{ fontSize: 11 }}>Search</div>
        </div>

        <div className="Wishlist" style={{ width: 100,display: "flex", flexDirection: "column" , alignItems: "center" , justifyContent: "center"}}>
          <div className="Menu-icon" style={{ margin: 7 }}>
          <Link to="/"><img src="https://app.sprentzo.com/static/media/star.cdf850b43138226fc2e7fde9b113e323.svg" alt="Profile" width="20" /></Link>
          </div>
          <div className="Menu-Title" style={{ fontSize: 11 }}>Wishlist</div>
        </div>

        <div className="Cart" style={{ width: 100,display: "flex", flexDirection: "column" , alignItems: "center" , justifyContent: "center"}}>
          <div className="Menu-icon" style={{ margin: 7 }}>
          <Link to="/"><img src="https://app.sprentzo.com/static/media/cart.c39974ee9ac30a888c69124440acdfd0.svg" alt="Profile" width="20" /></Link>
          </div>
          <div className="Menu-Title" style={{ fontSize: 11 }}>Cart</div>
        </div>

        <div className="Profile" style={{ width: 100,display: "flex", flexDirection: "column" , alignItems: "center" , justifyContent: "center"}}>
          <div className="Menu-icon" style={{ margin: 7 }}>
          <Link to="/"><img src="https://app.sprentzo.com/static/media/profile.ea34b2802bdf8badff24a429be497dde.svg" alt="Profile" width="20" /></Link>
          </div>
          <div className="Menu-Title" style={{ fontSize: 11 }}>Profile</div>
        </div>

      </div>
    </>
  );
}

//height and width of each menus is 100 X 60

