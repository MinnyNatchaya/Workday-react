import { useContext, useEffect, useState } from 'react';
import '../../AppReview.css';
import axios from '../../config/axios';
import { UserContext } from '../../contexts/userContext';
import Swal from 'sweetalert2';

function ReviewStar() {
  const { role } = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  const [star, setStar] = useState(0);

  // const [rate, setRate] = useState(0);
  // const [review, setReview] = useState();

  const [error, setError] = useState({});
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const callOrders = async () => {
      await axios
        .get(role === 'client' ? '/order' : '/service-type-worker')
        .then(res => {
          setOrders(res.data.orders);
        })
        .catch(err => {
          console.dir(err);
        });
    };
    callOrders();
  }, [toggle]);

  const handleClickChooseStar = e => {
    setStar(e);
    setError(curr => ({ ...curr, star: '' }));
  };

  // const updateReview = oldreview => {
  //   setReview(+oldreview + 1);
  // };

  // const updateRate = oldRate => {
  //   setRate(((+oldRate + star) / review).toFixed(1));
  // };

  const handleClickUpdateReview = async (e, id, oldRate, oldreview, userId) => {
    e.preventDefault();
    let isError = false;

    try {
      if (+star === 0) {
        setError(currErr => ({ ...currErr, star: '*Please choose Rating*' }));
        isError = true;
      }

      if (!isError) {
        const review = +oldreview + 1;
        const rate = ((+oldRate * +oldreview + +star) / +review).toFixed(1);
        console.dir(rate);

        //user
        await axios.put(`/profile/review/${userId}`, {
          rate,
          review
        });

        //orderItem
        await axios.put(role === 'client' ? `/order/review/${id}` : `/service-type-worker/review/${id}`);

        Swal.fire({
          icon: 'success',
          title: 'review success',
          showConfirmButton: false,
          timer: 1500
        });
        setToggle(curr => !curr);
      }
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <>
      <h3 className="reviewHeadText">ให้คะแนนบริการ</h3>

      {orders.map(item => (
        <>
          {item.status && (
            <>
              {(role === 'client' ? !item.isClientReview : !item.isWorkerReview) && (
                <div className="reviewBox">
                  <div className="reviewBoxUp">
                    <img src={item.SubCategory.Category.logoUrl} alt="" />

                    <div className="reviewBoxUpDetail">
                      <h3>{item.SubCategory.Category.name}</h3>
                      <p>{item.SubCategory.name}</p>
                      <p>วันที่ : {item.date}</p>
                      <p>ผู้บริการ : {role === 'client' ? item.worker.username : item.client.username}</p>
                    </div>
                  </div>

                  <hr />

                  <div className="reviewBoxDown">
                    <div className="reviewBoxDetail">
                      <fieldset className="rating">
                        {' '}
                        <input
                          type="radio"
                          id="star5"
                          name="rating"
                          value="5"
                          onClick={e => handleClickChooseStar(e.target.value)}
                        />
                        <label className="full" htmlFor="star5" title="Awesome - 5 stars"></label>{' '}
                        <input
                          type="radio"
                          id="star4half"
                          name="rating"
                          value="4.5"
                          onClick={e => handleClickChooseStar(e.target.value)}
                        />
                        <label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>{' '}
                        <input
                          type="radio"
                          id="star4"
                          name="rating"
                          value="4"
                          onClick={e => handleClickChooseStar(e.target.value)}
                        />
                        <label className="full" htmlFor="star4" title="Pretty good - 4 stars"></label>{' '}
                        <input
                          type="radio"
                          id="star3half"
                          name="rating"
                          value="3.5"
                          onClick={e => handleClickChooseStar(e.target.value)}
                        />
                        <label className="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>{' '}
                        <input
                          type="radio"
                          id="star3"
                          name="rating"
                          value="3"
                          onClick={e => handleClickChooseStar(e.target.value)}
                        />
                        <label className="full" htmlFor="star3" title="Meh - 3 stars"></label>{' '}
                        <input
                          type="radio"
                          id="star2half"
                          name="rating"
                          value="2.5"
                          onClick={e => handleClickChooseStar(e.target.value)}
                        />
                        <label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>{' '}
                        <input
                          type="radio"
                          id="star2"
                          name="rating"
                          value="2"
                          onClick={e => handleClickChooseStar(e.target.value)}
                        />
                        <label className="full" htmlFor="star2" title="Kinda bad - 2 stars"></label>{' '}
                        <input
                          type="radio"
                          id="star1half"
                          name="rating"
                          value="1.5"
                          onClick={e => handleClickChooseStar(e.target.value)}
                        />
                        <label className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>{' '}
                        <input
                          type="radio"
                          id="star1"
                          name="rating"
                          value="1"
                          onClick={e => handleClickChooseStar(e.target.value)}
                        />
                        <label className="full" htmlFor="star1" title="Sucks big time - 1 star"></label>{' '}
                        <input
                          type="radio"
                          id="starhalf"
                          name="rating"
                          value="0.5"
                          onClick={e => handleClickChooseStar(e.target.value)}
                        />
                        <label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>{' '}
                        <input
                          type="radio"
                          className="reset-option"
                          name="rating"
                          value="reset"
                          onClick={() => setStar(0)}
                        />{' '}
                      </fieldset>
                      <h4>( {star}/5 )</h4>
                    </div>

                    {error.star && <p className="errorMessage">{error.star}</p>}

                    <a>
                      <button
                        className="btnAcceptReview"
                        onClick={e =>
                          handleClickUpdateReview(
                            e,
                            item.id,
                            role === 'client' ? item.worker.rate : item.client.rate,
                            role === 'client' ? item.worker.review : item.client.review,
                            role === 'client' ? item.workerId : item.clientId
                          )
                        }
                      >
                        ยืนยัน
                      </button>
                    </a>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      ))}
    </>
  );
}

export default ReviewStar;
