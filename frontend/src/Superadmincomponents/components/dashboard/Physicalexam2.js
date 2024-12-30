import React, { useState } from "react";
import Navbar from "../Navbar";
import Menu from "../Menu";
import Subnavbar from "./Subnavbar";
import axios from "axios";
import { useParams } from "react-router-dom";

const PhysicalExam2 = () => {
  const {id} = useParams();
  const [activeIndexAccordion1, setActiveIndexAccordion1] = useState(0);
  const [activeIndexAccordion2, setActiveIndexAccordion2] = useState(0);
  const [activeIndexAccordion3, setActiveIndexAccordion3] = useState(0);
  const [activeIndexAccordion4, setActiveIndexAccordion4] = useState(0);
  const [activeIndexAccordion5, setActiveIndexAccordion5] = useState(0);
  const [activeIndexAccordion6, setActiveIndexAccordion6] = useState(0);
  const [activeIndexAccordion7, setActiveIndexAccordion7] = useState(0);
  const [activeIndexAccordion8, setActiveIndexAccordion8] = useState(0);
  const [activeIndexAccordion9, setActiveIndexAccordion9] = useState(0);
  const [activeIndexAccordion10, setActiveIndexAccordion10] = useState(0);
  const [activeIndexAccordion11, setActiveIndexAccordion11] = useState(0);
  const [activeIndexAccordion12, setActiveIndexAccordion12] = useState(0);


  const handleToggle = (index, accordion) => {
    if (accordion === 1) {
      setActiveIndexAccordion1(index);
    } else if (accordion === 2) {
      setActiveIndexAccordion2(index);
    }else if(accordion ===3){
      setActiveIndexAccordion3(index)
    }else if(accordion ===4){
      setActiveIndexAccordion4(index)
    }else if(accordion === 5){
      setActiveIndexAccordion5(index)
    }else if(accordion === 6){
      setActiveIndexAccordion6(index)
    }else if(accordion === 7){
      setActiveIndexAccordion7(index)
    }else if(accordion === 8){
      setActiveIndexAccordion8(index)
    }else if(accordion === 9){
      setActiveIndexAccordion9(index)
    }else if(accordion === 10){
      setActiveIndexAccordion10(index)
    }else if(accordion === 11){
      setActiveIndexAccordion11(index)
    }else if(accordion === 12){
      setActiveIndexAccordion12(index)
    }
  };

  const getTitleStyles = (currentIndex, titleIndex) => ({
    backgroundColor: currentIndex === titleIndex ? '#237a57' : '#f1f1f1',
    color:currentIndex === titleIndex ? 'white' : 'black',
    margin: '4px',
    border:'1px solid lightgray',
    padding: '5px',
    borderRadius: '4px',
    cursor: 'pointer',
  });

  const handleSave = () => {
    const serverUrl = `${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/physicalexam2`;

    const data = {
      accordionContents: { ...accordionContents },
    };

    axios.post(serverUrl, data)
      .then(response => {
        alert('Data saved successfully:', response.data);
        window.location.reload(false);

        // Optionally, you can perform additional actions after a successful save
      })
      .catch(error => {
        console.error('Error saving data:', error);
        // Handle error, show the user a message, etc.
      });
  };

  const accordion1Titles = ['Masses', 'Range of Motion', 'Spine - trachea deviation', 'Thyroid size'];
  const accordion2Titles = ['Chest symmetry with respirations', 'Wheezes', 'Crackles', 'Vocal Ferritus'];
  const accordion3Titles = ['Rate', 'Rhythm', 'Murmurs', 'Rubs','Gallops','Clicks','Precordial Movements'];
  const accordion4Titles = ['Shape','Scars','Bowel sounds','Consistency (soft/firm)','Abdomen Tenderness','Rebound','Abdomen Masses','Gaurding','Spleen Size','Liver Span','Ercussion','Costovertebral Tenderness'];
  const accordion5Titles = ['Skin Changes','Symmetry','Breast Tenderness','Breasts Masses','Dimpling'];
  const accordion6Titles = ['Rashes','Ulcers','Genitourinary Scars','Nodules','Induration','Discharge','Scrotal Masses'];
  const accordion7Titles = ['Carotid','Radial','Femoral','Popliteal','Posterior tibial','Dorsalis pedis pulses','Carotid Bruits','Jugular Venous Distension','Edema','Varicosa Veins'];
  const accordion8Titles = ['Cervical Infraclavicular','Axillary','Trochlear'];
  const accordion9Titles = ['Cranial nerves','Sensation','Strength','Reflexes','Cerebellum','Neurologic Gait'];
  const accordion10Titles = ['Sphincter tone','Prostate consistency','Masses Occult Stool Bicod'];
  const accordion11Titles = ['Shape/Symmetry','Muscle Tone','Cyanosis','Clubbing'];
  const accordion12Titles = ['Muscle Atrophy','Weakness','Joint ange of motion','Instability','Redness','Swelling','Tenderness','Spine Deviation','Musculoskeletal Gait'];

  const [accordionContents, setAccordionContents] = useState({
    physical2_id: id,
    'Masses':'',
    'Range of Motion':'',
    'Spine - trachea deviation':'',
    'Thyroid size':'',
    'Chest symmetry with respirations':'',
    'Wheezes':'',
    'Crackles':'',
    'Vocal Ferritus':'',
    'Rate':'',
    'Rhythm':'',
    'Murmurs':'',
    'Rubs':'',
     'Gallops':'',
     'Clicks':'',
     'Precordial Movements':'',
     'Shape':'',
     'Scars':'',
     'Bowel sounds':'',
     'Consistency (soft/firm)':'',
     'Abdomen Tenderness':'',
     'Rebound':'',
     'Abdomen Masses':'',
     'Gaurding':'',
     'Spleen Size':'',
     'Liver Span':'',
     'Ercussion':'',
     'Costovertebral Tenderness':'',
     'Skin Changes':'',
     'Symmetry':'',
     'Breast Tenderness':'',
     'Breasts Masses':'',
     'Dimpling':'',
     'Rashes':'',
     'Ulcers':'',
     'Genitourinary Scars':'',
     'Nodules':'',
     'Induration':'',
     'Discharge':'',
     'Scrotal Masses':'',
     'Carotid':'',
     'Radial':'',
     'Femoral':'',
     'Popliteal':'',
     'Posterior tibial':'',
     'Dorsalis pedis pulses':'',
     'Carotid Bruits':'',
     'Jugular Venous Distension':'',
     'Edema':'',
     'Varicosa Veins':'',
     'Cervical Infraclavicular':'',
     'Axillary':'',
     'Trochlear':'',
     'Cranial nerves':'',
     'Sensation':'','Strength':'',
     'Reflexes':'',
     'Cerebellum':'',
     'Neurologic Gait':'',
     'Sphincter tone':'',
     'Prostate consistency':'',
     'Masses Occult Stool Bicod':'',
     'Muscle Atrophy':'',
     'Weakness':'',
     'Joint ange of motion':'',
     'Instability':'',
     'Redness':'',
     'Swelling':'',
     'Tenderness':'',
     'Spine Deviation':'',
     'Musculoskeletal Gait':''
  });
  function showNames() {
    document.getElementById('namesSection').classList.remove('hidden');
  }

  function hideNames() {
    document.getElementById('namesSection').classList.add('hidden');
  }


  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div className="col-2 p-0">
          <Menu />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-10 p-0">
        <Subnavbar />
          <p className="text-dark ml-2">Please fill the form carefully</p>
          <div className="rs1_accordion">
            <div className="accordion  accordion-flush mb-4"id="accordionFlush1">
              
                {/* Accordion header */}
                <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded" id="assessmentHeading1">
                  <h2 className="accordion-header" id="flush-headOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-dropOne"
                      aria-expanded="false"
                      aria-controls="flush-dropOne"
                    >
                      <div>
                        <span className="fs-5">Assessment</span>
                      </div>

                    </button>
                  </h2>

                {/* Accordion body */}
                <div id="flush-dropOne"
                    className="accordion-collapse collapse show pb-3"
                    aria-labelledby="flush-headOne"
                    data-bs-parent="#accordionFlush1"
>
                  <div className="accordion-body d-md-flex p-0">
                    <div className="col-md-4 col-xs-5">
                      {/* Accordion titles */}
                      {accordion1Titles.map((title, index) => (
                        <div
                          key={index}
                          className={`eachAccordTab`}
                          onClick={() => handleToggle(index, 1)}
                          style={getTitleStyles(activeIndexAccordion1, index)}
                        >
                          <div className={`eachAccordLink`}>{title}</div>
                        </div>
                      ))}
                    </div>
                    <div className="col-md-8 col-xs-7">
                      {/* Accordion textarea */}
                      <div className="eachAccordInputBlock">
                        <textarea
                          rows="3"
                          className="form-control mt-2"
                          placeholder={`${accordion1Titles[activeIndexAccordion1]}`}
                          value={
                            accordionContents[
                              `${accordion1Titles[activeIndexAccordion1]}`
                            ]
                          }
                          onChange={(e) => {
                            setAccordionContents({
                              ...accordionContents,
                              [`${accordion1Titles[activeIndexAccordion1]}`]: e.target.value,
                            });
                            console.log(accordionContents)
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
          
        
            <div className="accordion accordion-flush mb-4" id="accordionFlush2">
                <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded" id="assessmentHeading2">
                <h2 className="accordion-header" id="flush-headOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-droptwo"
                      aria-expanded="false"
                      aria-controls="flush-droptwo"
                    >
                      <div>
                        <span className="fs-5">Lungs</span>
                      </div>

                    </button>
                  </h2>

                {/* Accordion body */}
                <div id="flush-droptwo"

                    className="accordion-collapse collapse show pb-3"
                    aria-labelledby="flush-headOne"
                    data-bs-parent="#accordionFlush2"
>
                  <div className="accordion-body d-md-flex p-0">
                    <div className="col-md-4 col-xs-5">
                      {/* Accordion titles */}
                      {accordion2Titles.map((title, index) => (
                        <div
                          key={index}
                          className={`eachAccordTab`}
                          onClick={() => handleToggle(index, 2)}
                          style={getTitleStyles(activeIndexAccordion2, index)}
                        >
                          <div className={`eachAccordLink`}>{title}</div>
                        </div>
                      ))}
                    </div>
                    <div className="col-md-8 col-xs-7">
                      {/* Accordion textarea */}
                      <div className="eachAccordInputBlock">
                        <textarea
                          rows="3"
                          className="form-control mt-2"
                          placeholder={`${accordion2Titles[activeIndexAccordion2]}`}
                          value={accordionContents[`${accordion2Titles[activeIndexAccordion2]}`]}
                          onChange={(e) => {
                            setAccordionContents({
                              ...accordionContents,
                              [`${accordion2Titles[activeIndexAccordion2]}`]: e.target.value,
                            });
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                </div>

            </div>
        
        
            <div className="accordion accordion-flush mb-4" id="accordionFlush3">
                <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded" id="assessmentHeading2">
                <h2 className="accordion-header" id="flush-headOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-dropthree"
                      aria-expanded="false"
                      aria-controls="flush-dropthree"
                    >
                      <div>
                        <span className="fs-5">Heart</span>
                      </div>

                    </button>
                  </h2>

                {/* Accordion body */}
                <div id="flush-dropthree"

                    className="accordion-collapse collapse show pb-3"
                    aria-labelledby="flush-headOne"
                    data-bs-parent="#accordionFlush3"
>
                  <div className="accordion-body d-md-flex p-0">
                    <div className="col-md-4 col-xs-5">
                      {/* Accordion titles */}
                      {accordion3Titles.map((title, index) => (
                        <div
                          key={index}
                          className={`eachAccordTab`}
                          onClick={() => handleToggle(index, 3)}
                          style={getTitleStyles(activeIndexAccordion3, index)}
                        >
                          <div className={`eachAccordLink`}>{title}</div>
                        </div>
                      ))}
                    </div>
                    <div className="col-md-8 col-xs-7">
                      {/* Accordion textarea */}
                      <div className="eachAccordInputBlock">
                        <textarea
                          rows="3"
                          className="form-control mt-2"
                          placeholder={`${accordion3Titles[activeIndexAccordion3]}`}
                          value={accordionContents[`${accordion3Titles[activeIndexAccordion3]}`]}
                          onChange={(e) => {
                            setAccordionContents({
                              ...accordionContents,
                              [`${accordion3Titles[activeIndexAccordion3]}`]: e.target.value,
                            });
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                </div>

            </div>
        
        
            <div className="accordion accordion-flush mb-4" id="accordionFlush4">
                <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded" id="assessmentHeading2">
                <h2 className="accordion-header" id="flush-headOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-dropfour"
                      aria-expanded="false"
                      aria-controls="flush-dropfour"
                    >
                      <div>
                        <span className="fs-5">Abdomen</span>
                      </div>

                    </button>
                  </h2>

                {/* Accordion body */}
                <div id="flush-dropfour"

                    className="accordion-collapse collapse show pb-3"
                    aria-labelledby="flush-headOne"
                    data-bs-parent="#accordionFlush4"
>
                  <div className="accordion-body d-md-flex p-0">
                    <div className="col-md-4 col-xs-5">
                      {/* Accordion titles */}
                      {accordion4Titles.map((title, index) => (
                        <div
                          key={index}
                          className={`eachAccordTab`}
                          onClick={() => handleToggle(index, 4)}
                          style={getTitleStyles(activeIndexAccordion4, index)}
                        >
                          <div className={`eachAccordLink`}>{title}</div>
                        </div>
                      ))}
                    </div>
                    <div className="col-md-8 col-xs-7">
                      {/* Accordion textarea */}
                      <div className="eachAccordInputBlock">
                        <textarea
                          rows="3"
                          className="form-control mt-2"
                          placeholder={`${accordion4Titles[activeIndexAccordion4]}`}
                          value={accordionContents[`${accordion4Titles[activeIndexAccordion4]}`]}
                          onChange={(e) => {
                            setAccordionContents({
                              ...accordionContents,
                              [`${accordion4Titles[activeIndexAccordion4]}`]: e.target.value,
                            });
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                </div>

            </div>
    
        
            <div className="accordion accordion-flush mb-4" id="accordionFlush5">
                <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded" id="assessmentHeading2">
                <h2 className="accordion-header" id="flush-headOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-dropfive"
                      aria-expanded="false"
                      aria-controls="flush-dropfive"
                    >
                      <div>
                        <span className="fs-5">Breasts</span>
                      </div>

                    </button>
                  </h2>

                {/* Accordion body */}
                <div id="flush-dropfive"

                    className="accordion-collapse collapse show pb-3"
                    aria-labelledby="flush-headOne"
                    data-bs-parent="#accordionFlush5"
>
                  <div className="accordion-body d-md-flex p-0">
                    <div className="col-md-4 col-xs-5">
                      {/* Accordion titles */}
                      {accordion5Titles.map((title, index) => (
                        <div
                          key={index}
                          className={`eachAccordTab`}
                          onClick={() => handleToggle(index, 5)}
                          style={getTitleStyles(activeIndexAccordion5, index)}
                        >
                          <div className={`eachAccordLink`}>{title}</div>
                        </div>
                      ))}
                    </div>
                    <div className="col-md-8 col-xs-7">
                      {/* Accordion textarea */}
                      <div className="eachAccordInputBlock">
                        <textarea
                          rows="3"
                          className="form-control mt-2"
                          placeholder={`${accordion5Titles[activeIndexAccordion5]}`}
                          value={accordionContents[`${accordion5Titles[activeIndexAccordion5]}`]}
                          onChange={(e) => {
                            setAccordionContents({
                              ...accordionContents,
                              [`${accordion5Titles[activeIndexAccordion5]}`]: e.target.value,
                            });
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                </div>

            </div>
        
          
            <div className="accordion accordion-flush mb-4" id="accordionFlush6">
                <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded" id="assessmentHeading2">
                <h2 className="accordion-header" id="flush-headOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-dropsix"
                      aria-expanded="false"
                      aria-controls="flush-dropsix"
                    >
                      <div>
                        <span className="fs-5">Genitourinary - Male optional</span>
                      </div>

                    </button>
                  </h2>

                {/* Accordion body */}
                <div id="flush-dropsix"

                    className="accordion-collapse collapse show pb-3"
                    aria-labelledby="flush-headOne"
                    data-bs-parent="#accordionFlush6"
>
                  <div className="accordion-body d-md-flex p-0">
                    <div className="col-md-4 col-xs-5">
                      {/* Accordion titles */}
                      {accordion6Titles.map((title, index) => (
                        <div
                          key={index}
                          className={`eachAccordTab`}
                          onClick={() => handleToggle(index, 6)}
                          style={getTitleStyles(activeIndexAccordion6, index)}
                        >
                          <div className={`eachAccordLink`}>{title}</div>
                        </div>
                      ))}
                    </div>
                    <div className="col-md-8 col-xs-7">
                      {/* Accordion textarea */}
                      <div className="eachAccordInputBlock">
                        <textarea
                          rows="3"
                          className="form-control mt-2"
                          placeholder={`${accordion6Titles[activeIndexAccordion6]}`}
                          value={accordionContents[`${accordion6Titles[activeIndexAccordion6]}`]}
                          onChange={(e) => {
                            setAccordionContents({
                              ...accordionContents,
                              [`${accordion6Titles[activeIndexAccordion6]}`]: e.target.value,
                            });
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                </div>

            </div>
        
  
            <div className="accordion accordion-flush mb-4" id="accordionFlush7">
                <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded" id="assessmentHeading2">
                <h2 className="accordion-header" id="flush-headOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-dropseven"
                      aria-expanded="false"
                      aria-controls="flush-dropseven"
                    >
                      <div>
                        <span className="fs-5">Vascular</span>
                      </div>

                    </button>
                  </h2>

                {/* Accordion body */}
                <div id="flush-dropseven"

                    className="accordion-collapse collapse show pb-3"
                    aria-labelledby="flush-headOne"
                    data-bs-parent="#accordionFlush7"
>
                  <div className="accordion-body d-md-flex p-0">
                    <div className="col-md-4 col-xs-5">
                      {/* Accordion titles */}
                      {accordion7Titles.map((title, index) => (
                        <div
                          key={index}
                          className={`eachAccordTab`}
                          onClick={() => handleToggle(index, 7)}
                          style={getTitleStyles(activeIndexAccordion7, index)}
                        >
                          <div className={`eachAccordLink`}>{title}</div>
                        </div>
                      ))}
                    </div>
                    <div className="col-md-8 col-xs-7">
                      {/* Accordion textarea */}
                      <div className="eachAccordInputBlock">
                        <textarea
                          rows="3"
                          className="form-control mt-2"
                          placeholder={`${accordion7Titles[activeIndexAccordion7]}`}
                          value={accordionContents[`${accordion7Titles[activeIndexAccordion7]}`]}
                          onChange={(e) => {
                            setAccordionContents({
                              ...accordionContents,
                              [`${accordion7Titles[activeIndexAccordion7]}`]: e.target.value,
                            });
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                </div>

            </div>
        
    
            <div className="accordion accordion-flush mb-4" id="accordionFlush8">
                <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded" id="assessmentHeading2">
                <h2 className="accordion-header" id="flush-headOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-dropeight"
                      aria-expanded="false"
                      aria-controls="flush-dropeight"
                    >
                      <div>
                        <span className="fs-5">Lymphatic</span>
                      </div>

                    </button>
                  </h2>

                {/* Accordion body */}
                <div id="flush-dropeight"

                    className="accordion-collapse collapse show pb-3"
                    aria-labelledby="flush-headOne"
                    data-bs-parent="#accordionFlush8"
>
                  <div className="accordion-body d-md-flex p-0">
                    <div className="col-md-4 col-xs-5">
                      {/* Accordion titles */}
                      {accordion8Titles.map((title, index) => (
                        <div
                          key={index}
                          className={`eachAccordTab`}
                          onClick={() => handleToggle(index, 8)}
                          style={getTitleStyles(activeIndexAccordion8, index)}
                        >
                          <div className={`eachAccordLink`}>{title}</div>
                        </div>
                      ))}
                    </div>
                    <div className="col-md-8 col-xs-7">
                      {/* Accordion textarea */}
                      <div className="eachAccordInputBlock">
                        <textarea
                          rows="3"
                          className="form-control mt-2"
                          placeholder={`${accordion8Titles[activeIndexAccordion8]}`}
                          value={accordionContents[`${accordion8Titles[activeIndexAccordion8]}`]}
                          onChange={(e) => {
                            setAccordionContents({
                              ...accordionContents,
                              [`${accordion8Titles[activeIndexAccordion8]}`]: e.target.value,
                            });
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                </div>

            </div>
        
          
            <div className="accordion accordion-flush mb-4" id="accordionFlush9">
                <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded" id="assessmentHeading2">
                <h2 className="accordion-header" id="flush-headOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-dropnine"
                      aria-expanded="false"
                      aria-controls="flush-dropnine"
                    >
                      <div>
                        <span className="fs-5">Neurologic</span>
                      </div>

                    </button>
                  </h2>

                {/* Accordion body */}
                <div id="flush-dropnine"

                    className="accordion-collapse collapse show pb-3"
                    aria-labelledby="flush-headOne"
                    data-bs-parent="#accordionFlush9"
>
                  <div className="accordion-body d-md-flex p-0">
                    <div className="col-md-4 col-xs-5">
                      {/* Accordion titles */}
                      {accordion9Titles.map((title, index) => (
                        <div
                          key={index}
                          className={`eachAccordTab`}
                          onClick={() => handleToggle(index, 9)}
                          style={getTitleStyles(activeIndexAccordion9, index)}
                        >
                          <div className={`eachAccordLink`}>{title}</div>
                        </div>
                      ))}
                    </div>
                    <div className="col-md-8 col-xs-7">
                      {/* Accordion textarea */}
                      <div className="eachAccordInputBlock">
                        <textarea
                          rows="3"
                          className="form-control mt-2"
                          placeholder={`${accordion9Titles[activeIndexAccordion9]}`}
                          value={accordionContents[`${accordion9Titles[activeIndexAccordion9]}`]}
                          onChange={(e) => {
                            setAccordionContents({
                              ...accordionContents,
                              [`${accordion9Titles[activeIndexAccordion9]}`]: e.target.value,
                            });
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                </div>

            </div>
      
          
            <div className="accordion accordion-flush mb-4" id="accordionFlush10">
                <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded" id="assessmentHeading2">
                <h2 className="accordion-header" id="flush-headOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-dropten"
                      aria-expanded="false"
                      aria-controls="flush-dropten"
                    >
                      <div>
                        <span className="fs-5">Rectal</span>
                      </div>

                    </button>
                  </h2>

                <div id="flush-dropten"

                    className="accordion-collapse collapse show pb-3"
                    aria-labelledby="flush-headOne"
                    data-bs-parent="#accordionFlush10"
>
                  <div className="accordion-body d-md-flex p-0">
                    <div className="col-md-4 col-xs-5">
                      {accordion10Titles.map((title, index) => (
                        <div
                          key={index}
                          className={`eachAccordTab`}
                          onClick={() => handleToggle(index, 10)}
                          style={getTitleStyles(activeIndexAccordion10, index)}
                        >
                          <div className={`eachAccordLink`}>{title}</div>
                        </div>
                      ))}
                    </div>
                    <div className="col-md-8 col-xs-7">
                      {/* Accordion textarea */}
                      <div className="eachAccordInputBlock">
                        <textarea
                          rows="3"
                          className="form-control mt-2"
                          placeholder={`${accordion10Titles[activeIndexAccordion10]}`}
                          value={accordionContents[`${accordion10Titles[activeIndexAccordion10]}`]}
                          onChange={(e) => {
                            setAccordionContents({
                              ...accordionContents,
                              [`${accordion10Titles[activeIndexAccordion10]}`]: e.target.value,
                            });
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                </div>

            </div>
         
            <div className="accordion accordion-flush mb-4" id="accordionFlush11">
                <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded" id="assessmentHeading2">
                <h2 className="accordion-header" id="flush-headOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-dropelven"
                      aria-expanded="false"
                      aria-controls="flush-droptelven"
                    >
                      <div>
                        <span className="fs-5">Extremities</span>
                      </div>

                    </button>
                  </h2>

                {/* Accordion body */}
                <div id="flush-dropelven"

                    className="accordion-collapse collapse show pb-3"
                    aria-labelledby="flush-headOne"
                    data-bs-parent="#accordionFlush11"
>
                  <div className="accordion-body d-md-flex p-0">
                    <div className="col-md-4 col-xs-5">
                      {/* Accordion titles */}
                      {accordion11Titles.map((title, index) => (
                        <div
                          key={index}
                          className={`eachAccordTab`}
                          onClick={() => handleToggle(index, 11)}
                          style={getTitleStyles(activeIndexAccordion11, index)}
                        >
                          <div className={`eachAccordLink`}>{title}</div>
                          
                        </div>
                      ))}
                      <div className='d-flex  justify-content-evenly p-2'>
                            <div>Edema</div>
                            <div>
                            <label>
                              <input type="radio" name="yesNo" value="yes" onClick={showNames}/>&nbsp; Yes
                            </label>
                            <label>
                              <input type="radio" className="ml-2" name="yesNo" value="no" onClick={hideNames}/>&nbsp; No
                            </label>

                            </div>
                          </div>
                          <div id="namesSection" className="hidden radio-group text-center" style={{marginTop:'20px'}}>
                            <label>
                              <input type="radio" className="ml-5"  name="nameType" value="putting"/>&nbsp; Putting
                            </label>
                            <label>
                              <input type="radio" className="ml-2"  name="nameType" defaultChecked value="nonPutting"/>&nbsp;Non-Putting
                            </label>
                          </div>
                    </div>
                    <div className="col-md-8 col-xs-7">
                      {/* Accordion textarea */}
                      <div className="eachAccordInputBlock">
                        <textarea
                          rows="3"
                          className="form-control mt-2"
                          placeholder={`${accordion11Titles[activeIndexAccordion11]}`}
                          value={accordionContents[`${accordion11Titles[activeIndexAccordion11]}`]}
                          onChange={(e) => {
                            setAccordionContents({
                              ...accordionContents,
                              [`${accordion11Titles[activeIndexAccordion11]}`]: e.target.value,
                            });
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                </div>

            </div>
          
        
            <div className="accordion accordion-flush mb-4" id="accordionFlush12">
                <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded" id="assessmentHeading2">
                <h2 className="accordion-header" id="flush-headOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-droptwleve"
                      aria-expanded="false"
                      aria-controls="flush-droptwleve"
                    >
                      <div>
                        <span className="fs-5">Musculoskeletal</span>
                      </div>

                    </button>
                  </h2>

                {/* Accordion body */}
                <div id="flush-droptwleve"

                    className="accordion-collapse collapse show pb-3"
                    aria-labelledby="flush-headOne"
                    data-bs-parent="#accordionFlush12"
>
                  <div className="accordion-body d-md-flex p-0">
                    <div className="col-md-4 col-xs-5">
                      {/* Accordion titles */}
                      {accordion12Titles.map((title, index) => (
                        <div
                          key={index}
                          className={`eachAccordTab`}
                          onClick={() => handleToggle(index, 12)}
                          style={getTitleStyles(activeIndexAccordion12, index)}
                        >
                          <div className={`eachAccordLink`}>{title}</div>
                        </div>
                      ))}
                    </div>
                    <div className="col-md-8 col-xs-7">
                      {/* Accordion textarea */}
                      <div className="eachAccordInputBlock">
                        <textarea
                          rows="3"
                          className="form-control mt-2"
                          placeholder={`${accordion12Titles[activeIndexAccordion12]}`}
                          value={accordionContents[`${accordion12Titles[activeIndexAccordion12]}`]}
                          onChange={(e) => {
                            setAccordionContents({
                              ...accordionContents,
                              [`${accordion12Titles[activeIndexAccordion12]}`]: e.target.value,
                            });
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                </div>

            </div>
          </div>
          
          
          <button className='btn btn-success ml-4' onClick={handleSave}>Save</button>

          <hr></hr>
          <footer className="page-footer font-small bg-blue m-4">
            <div className="footer-copyright text-center">
              <span className="text-primary fs-6">PrevMed Sol&nbsp;</span>
              Copyrights © 2023
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default PhysicalExam2;
