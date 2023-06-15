import TrendingNow from "./TrendingNow";
import RentingWithSprentzo from "./RentingSprentzo";

export default function IntegratedComponents(){
    return(
        <>
        <div className="Trending-Now-Renting-Features-Integrated">
        <TrendingNow/>
        <RentingWithSprentzo/>
        </div>
        </>
    );
}