import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Lahore,Multan,Islamabad"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1622546758596-f1f06ba11f58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=921&q=80"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Lahore</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://i0.wp.com/onedayitinerary.com/wp-content/uploads/2018/01/One-day-in-Multan-Itinerary.jpg?resize=723%2C542"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Multan</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://t3.ftcdn.net/jpg/03/84/72/34/360_F_384723442_NwXSiqY7ttZNaxGdE5RfGlWYg3cUqhE3.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Islamabad</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
