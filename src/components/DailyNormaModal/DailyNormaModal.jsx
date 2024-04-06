import { useEffect, useState } from 'react'
import { DailyNormaModalContainer } from './DailyNormaModal.styled.js'
import { updateWaterRateThunk } from '../../redux/Auth/AuthOperations.jsx';
import { useDispatch } from 'react-redux';

const DailyNormaModal = () => {
  const [weight, setWeight] = useState(0);
  const [activity, setActivity] = useState(0);
  const [volume, setVolume] = useState(0);
  const [isChecked, setChecked] = useState(true)
  const [waterRate, setWaterRate] = useState(0)
  const [isOpen, setIsOpen] = useState(true)
  const dispatch = useDispatch()

  const handleChecked = () => {
    setChecked(!isChecked)
  }

  const handleWeight = (evt) => {
    setWeight(Number(evt.target.value));
  }

  const handleActivity = (evt) => {
    setActivity(Number(evt.target.value));
  }

  useEffect(() => {
    if (isChecked) setVolume(Math.ceil(((weight * 0.03) + (activity * 0.4)) * 100) / 100 <2 ? 2 : Math.ceil(((weight * 0.03) + (activity * 0.4)) * 100) / 100);
    else setVolume(Math.ceil(((weight * 0.04) + (activity * 0.6))*100)/100 <2 ? 2 : Math.ceil(((weight * 0.04) + (activity * 0.6))*100)/100);
  }, [isChecked, weight, activity])

  const handleWaterRate = (evt) => {
    setWaterRate(Number(evt.target.value));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(updateWaterRateThunk(waterRate))
    setIsOpen(!isOpen)
  }
  const handleClose = () => {
    setIsOpen(!isOpen)
  }

  return (
    isOpen && <div>
      <DailyNormaModalContainer>
        <div className='headerDaily'>
          <h2>My daily norma</h2>
          <button type="button" className='closeButton' onClick={handleClose}>
            <svg className="icon-Vector" width="24" height="24" >
              <use href="../../assets/images/sprite/horodiukIcons.svg#icon-close"></use>
            </svg>
          </button>
        </div>
        <div className='formulaContainer'>
          <div className='formula'>
            <div className='formulaText'>
              <p>For girl:</p><span className='formulaSpan'>V=(M*0,03) + (T*0,4)</span>
            </div>
            <div className='formulaText'>
              <p>For man:</p><span className='formulaSpan'>V=(M*0,04) + (T*0,6)</span>
            </div>
          </div>
          <p className='formulaDescription'><span className='formulaStar'>*</span> V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)</p>
        </div>

        <form onSubmit={handleSubmit}>
          <h3>Calculate your rate:</h3>
          <div className='checkBox'>
            <label><input type='radio' name='gender' value='woman' checked={isChecked} onChange={handleChecked} /> For woman</label>
            <label><input type='radio' name='gender' value='man' checked={!isChecked} onChange={handleChecked} /> For man</label>
          </div>

          <label className='inputDescription'>Your weight in kilograms:</label>
          <input className='inputForm' placeholder="0" onChange={handleWeight} />
          <label className='inputDescription'>The time of active participation in sports or other activities with a high physical. load in hours:</label>
          <input className='inputForm' placeholder="0" onChange={handleActivity} />
          <div className='requiredAmount'><p className='amountDescription'>The required amount of water in liters per day:</p><span className='amount'>{volume} L</span></div>
          <h3>Write down how much water you will drink:</h3>
          <input className='inputForm' placeholder="0" onChange={handleWaterRate} />
                                                 
          <button className='saveButton' type='submit'>Save</button>
        </form>
      </DailyNormaModalContainer>        
    </div>
  )
};

export default DailyNormaModal