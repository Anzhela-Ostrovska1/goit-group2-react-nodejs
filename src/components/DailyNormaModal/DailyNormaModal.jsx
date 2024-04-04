import React from 'react'
import { DailyNormaModalContainer } from './DailyNormaModal.styled.js'

const DailyNormaModal = () => {
          return (
                    <div>
                              <DailyNormaModalContainer>
                                        <div className='headerDaily'>
                                                  <h2>My daily norma</h2>
                                                  <button type="button" data-modal-close>
                                                            <svg className="modal-icon" width="24" height="24">
                                                              <use href="/src/assets/images/sprite/icon-user"></use>
                                                            </svg>
                                                          </button>
                                        </div>
                                        <div className='formula'><p className='text'>For girl:<span>V=(M*0,03) + (T*0,4)</span></p>
                                                  <p>For man:<span>V=(M*0,04) + (T*0,6)</span></p>
                                        </div>
                                        
                                                  <p className='value'>* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)</p>
                                        <form>
                                        <h3>Calculate your rate:</h3>
                                                  <div className='checkBox'>
                                                            {/* <fieldset> */}
                                                                      
                                                                      <label><input type='radio'name='gender' value='w' />For woman</label>
                                                                      
                                                                      <label><input type='radio' name='gender' value='m' />For man</label>

                                                                      

                                                            {/* </fieldset> */}
                                                  </div>
                                        <label className='text'>Your weight in kilograms:</label>
                                        <input />
                                        <label className='text'>The time of active participation in sports or other activities with a high physical. load in hours:</label>
                                        <input />
                                        <div className='layout'><p className='text'>The required amount of water in liters per day:</p><span className='amount'>1.8 L</span></div>
                                        <h3>Write down how much water you will drink:</h3>
                                                  <input className='inputForm'/>
                                                 
                                                  <input className="button" type="submit" value="Save" />
                                                   </form>
                              </DailyNormaModalContainer>
                      
                    </div>
          )
}

export default DailyNormaModal