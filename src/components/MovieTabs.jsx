import { values } from "lodash";
import React from "react";


const MovieTabs = (props) => {
    const { sort_by, updateSortBy } = props;
    const handleClick = (value) => {
        return () => {
            updateSortBy(value)
        }
    }
    return (
        <div>
            <ul className="tabs nav nav-pills">
                <li className="nav-item">
                    <div
                        className={`nav-link ${sort_by === "popularity.desc" ? "active" : ""}`}
                        onClick={handleClick("popularity.desc")}
                    >
                        Popularity
                    </div>
                </li>
                <li className="nav-item">
                    <div
                        className={`nav-link ${sort_by === "revenue.desc" ? "active" : ""}`}
                        onClick={handleClick("revenue.desc")}
                    >
                        Revenue
                    </div>
                </li>
                <li className="nav-item">
                    <div
                        className={`nav-link ${sort_by === "vote_average.desc" ? "active" : ""}`}
                        onClick={handleClick("vote_average.desc")}
                    >
                        Vote average desc
                    </div>
                </li>
            </ul>

        </div>
    )
}

export default MovieTabs;