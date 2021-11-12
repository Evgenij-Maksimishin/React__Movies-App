import React from "react";


const MovieTabs = (props) => {
    const { sort_by } = props;
    return (
        <div>
            <ul className="tabs nav nav-pills">
                <li className="nav-item">
                    <div className={`nav-link ${sort_by === "popularity.desc" ? "active" : ""}`}>
                        Popularity
                    </div>
                </li>
                <li className="nav-item">
                    <div className={`nav-link ${sort_by === "revenue.desc" ? "active" : ""}`}>
                        Revenue
                    </div>
                </li>
                <li className="nav-item">
                    <div className={`nav-link ${sort_by === "vote_avarage.desc" ? "active" : ""}`}>
                        Vote average desc
                    </div>
                </li>
            </ul>

        </div>
    )
}

export default MovieTabs;