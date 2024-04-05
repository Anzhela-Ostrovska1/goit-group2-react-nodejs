import React from 'react'
import { DailyNormaModalContainer } from './DailyNormaModal.styled.js'

const DailyNormaModal = () => {
return (
    <div>
      <DailyNormaModalContainer>
        <div className='headerDaily'>
          <h2>My daily norma</h2>
          <button type="button" data-modal-close>
            <svg className="icon-Vector" width="24" height="24" >
              <use href="../../assets/images/sprite/sprite.svg#icon-Vector"></use>
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

        <form>
          <h3>Calculate your rate:</h3>
          <div className='checkBox'>
            <label><input type='radio' name='gender' value='woman' checked /> For woman</label>
            <label><input type='radio' name='gender' value='man' /> For man</label>
          </div>

          <label className='inputDescription'>Your weight in kilograms:</label>
          <input className='inputForm' placeholder="0" />
          <label className='inputDescription'>The time of active participation in sports or other activities with a high physical. load in hours:</label>
        <input className='inputForm' placeholder="0" />
          <div className='requiredAmount'><p className='amountDescription'>The required amount of water in liters per day:</p><span className='amount'>1.8 L</span></div>
          <h3>Write down how much water you will drink:</h3>
          <input className='inputForm' placeholder="0"/>
                                                 
          <input className="saveButton" type="submit" value="Save" />
        </form>
      </DailyNormaModalContainer>
                      
    </div>
  )
};

export default DailyNormaModal