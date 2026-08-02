import { GoStarFill ,GoStar} from "react-icons/go";

export default function Reviews()
{
    const reviews = [
      {
        id: 1,
        name: "Elliot",
        rating: 5,
        date: "December 1, 2022",
        review:
          "The beach bum is such an awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!"
      },
      {
        id: 2,
        name: "Sandy",
        rating: 4,
        date: "November 23, 2022",
        review:
          "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!"
      }
    ];
    let avg=0
    for(let i=0;i<reviews.length;i++)
    {
        avg+=reviews[i].rating
    }
    avg=(avg/reviews.length)
    return( 
        <div className="ReviewPage" style={{width:"548px"}}>   
            <div className="ReviewsHeading">
                <h1>Your reviews</h1>
                <p>Last <span style={{fontWeight:"bold", textDecoration:"underline",textUnderlineOffset:"4px"}}>30 days</span></p>
            </div>
            <div className="overAllRatingReview">
                <h1>{avg}</h1>
                <p><GoStarFill className="starReviewHost"/>overall rating</p>
            </div>
            {
                [...Array(5)].map((_,i)=>{
                    let count=reviews.filter((review)=>(review.rating===5-i)).length
                    return(
                        <div className="RatingPercentageReviews">
                            <p>{5-i} stars</p>
                            <div>
                                <div style={{width:`${(count/reviews.length)*100}%`}}></div>
                            </div>
                            <p>{`${(count/reviews.length)*100}%`}</p>
                        </div>
                    )
                })
            }
            <h3>Reviews ({reviews.length})</h3>
            <div>
                <div>
                {
                    reviews.map((review)=>(
                        <div className="ReviewsBox">
                        {    [...Array(5)].map((_,i)=>(
                                i<review.rating?
                                <GoStarFill className="starReviewHost"/>:
                                <GoStar style={{width: "25px",height: "24px"}}/>
                            ))
                        }
                            <div>
                            <p style={{fontWeight:"bold",color:"#161616"}}>{review.name} <span style={{color:"#8C8C8C"}}>{review.date}</span></p>
                            <p>{review.review}</p>
                            <hr/>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    ) 
}