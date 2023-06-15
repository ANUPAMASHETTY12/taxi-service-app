import "./TrendingNow.css";

export default function TrendingNow() {
    return (
        <>
            <div className="Trending-now-section">
                <div className="Trending-now-section-title">
                    <p className="Trending-now-section-Title">Trending Now</p>
                </div>
                <div className="Trending-now-section-category-buttons">

                    <div className="Trending-now-section-badminton-section">
                        <div className="Category-badminton-section-text">
                            <div className="Category-Badminton-title">
                                Badminton
                            </div>
                            <div className="Category-Badminton-description">
                                Only the cleanest shoes and the lightest racquets
                            </div>
                        </div>
                        <div className="Category-badminton-section-imagesection">
                            <img className="Category-badminton-section-imagesection-image" src="https://app.sprentzo.com/static/media/boot.d85b70f90e05188c96ac.png" alt="Shoe" />
                        </div>
                    </div>

                    <div className="Trending-now-section-Footballs-section">
                        <div className="Category-Football-section-text">
                            <div className="Category-Football-title">
                                High Quality Puma Footballs
                            </div>
                            <div className="Category-Football-description">
                                Make every game, the best
                            </div>
                        </div>
                        <div className="Category-football-section-imagesection">
                            <img className="Category-football-section-imagesection-image" src="https://app.sprentzo.com/static/media/ball.be11b0055e7203da41fa.png" alt="Puma Football" />
                        </div>
                    </div>

                    <div className="Trending-now-section-Cricket-section">
                        <div className="Category-Cricket-bat-section-text">
                            <div className="Category-Cricket-bat-title">
                                Box Cricket Bats
                            </div>
                            <div className="Category-Cricket-bat-description">
                                Explore the range, light weight to heavy hitters
                            </div>
                        </div>
                        <div className="Category-Cricket-section-imagesection">
                            <img className="Category-Cricket-section-imagesection-image" src="https://app.sprentzo.com/static/media/bat.9b3fa9cb79ec189647e9.png" alt="Cricket Bat" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}