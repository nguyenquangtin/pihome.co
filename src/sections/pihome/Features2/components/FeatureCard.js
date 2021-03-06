import React from "react"

const FeatureCard = ({iconImage,title,text,cardClass}) => {
  return (
    <>
      <div className={`card card--feature-l9 text-center  ${cardClass}`}>
        <div className="card--feature-l9__icon">
          <img src={iconImage} alt="feature" className="img-fluid" />
        </div>
        <div className="card--feature-l9__heading">
          <h4>{title}</h4>
        </div>
        <div className="card--feature-l9__content">
          <p dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
        <div className="card--feature-l9__btn">
          <button className="btn focus-reset">
            Đặt hàng
          </button>
        </div>
      </div>
    </>
  )
}

export default FeatureCard;