import axios from "axios";
import { useEffect, useState } from "react";
import CustomPagination from "../../components/pagination/CustomPagination";
import SingleComponent from "../../components/singleComponent/SingleComponent";
import './Trending.css'

export default function Trending() {

    const [content, setContent] = useState([])
    const [page, setPage] = useState(1)

    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
        // console.log(data)
        setContent(data.results)
    }

    useEffect(() => {
        fetchTrending();
        // eslint-disable-next-line
    }, [page])

    return (
      <div>
          {/* <div className="page-title">Trending</div> */}
          <div className="trending-page">
            {content && content.map(single => (
                <SingleComponent single = {single} key = {single.id} media_type = {single.media_type === "tv" ? "TV Series" : "Movie"}/>
            ))}
          </div>
          <CustomPagination setPage = {setPage} />
      </div>
    );
  }
  