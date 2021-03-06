import React,{useEffect,useState}  from "react"
// import { Link } from "gatsby"
import Card from "../components/CardTwo"
import Masonry from "react-masonry-css"
import data from "../../../../data/GalleryCakes"

const TagButton = ({ name, handleSetTag, tagActive, children }) => {
  return (
    <button
      className={`tag btn-reset ${tagActive === name ? "active" : ""}`}
      onClick={() => handleSetTag(name)}
    >
      {children}
    </button>
  )
}
export default function MainContent() {
  const breakpointColumnsObj = {
    default: 4,
    1200: 4,
    992: 3,
    768: 2,
    576: 1,
  }

  const [tag, setTag] = useState("all")
  const [filteredImages, setFilteredImages] = useState([])


  useEffect(() => {
    tag === "all"
      ? setFilteredImages(data.masonryDetails2)
      : setFilteredImages(data.masonryDetails2.filter(image => image.tagi === tag))
  }, [tag])

  return (
    <>
      <div className="portfolio-section" id="gallery">
      <div className="container">
          <div className="row">
            <div className="col-lg-12 portfolio-navbar">
              <ul
                className="nav isotope-nav justify-content-center"
                id="isotope-mas-filters"
              >
                <li className="nav-item">
                  <TagButton name="all" tagActive={tag} handleSetTag={setTag}>
                    Tất cả
                  </TagButton>
                </li>
                <li className="nav-item">
                  <TagButton
                    name="set"
                    tagActive={tag}
                    handleSetTag={setTag}
                  >
                    Set bánh
                  </TagButton>
                </li>
                <li className="nav-item">
                  <TagButton
                    name="deo"
                    tagActive={tag}
                    handleSetTag={setTag}
                  >
                    Dẻo
                  </TagButton>
                </li>
                <li className="nav-item">
                  <TagButton name="modern" tagActive={tag} handleSetTag={setTag}>
                    Hiện đại
                  </TagButton>
                </li>
                <li className="nav-item">
                  <TagButton
                    name="photography"
                    tagActive={tag}
                    handleSetTag={setTag}
                  >
                    Nướng
                  </TagButton>
                </li>
                <li className="nav-item">
                  <TagButton
                    name="animal"
                    tagActive={tag}
                    handleSetTag={setTag}
                  >
                    Thú
                  </TagButton>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="iso-mas-grid-wrap">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="masonry-grid"
                  columnClassName="masonry-grid_column"
                >
                  {filteredImages.map(
                    ({ image, titleSmall, title,tagi,id }, index) => {
                      return (
                        <div className={`${tagi === tag | tag === "all" ?  "is-animated" :""} `}  key={index + "pm-c4"}>
                        <Card
                          image={image}
                          titleSmall={titleSmall}
                          title={title}
                          id={id}
                        />
                        </div>
                      )
                    }
                  )}
                </Masonry>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
