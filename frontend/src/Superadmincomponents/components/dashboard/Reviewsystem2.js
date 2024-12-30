import React, {useState} from "react";
import Navbar from "../Navbar";
import Menu from "../Menu";
import Subnavbar from "./Subnavbar";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Reviewsystem2() {
  const {id} = useParams();

  const [activeIndexAccordion1, setActiveIndexAccordion1] = useState(0);
  const [activeIndexAccordion2, setActiveIndexAccordion2] = useState(0);
  const [activeIndexAccordion3, setActiveIndexAccordion3] = useState(0);
  const [activeIndexAccordion4, setActiveIndexAccordion4] = useState(0);
  const [activeIndexAccordion5, setActiveIndexAccordion5] = useState(0);
  const [activeIndexAccordion6, setActiveIndexAccordion6] = useState(0);

  const [accordionContents, setAccordionContents] = useState({
    review2_id: id,
    "Skin Changes" : "",
    "Masses/lumps" : "",
    "Breast Pain" : "",
    "Discharge" : "",
    "Self Exams" : "",
    "Shortness of Breath" : "",
    "Wheeze" : "",
    "Cough" : "",
    "Sputum" : "",
    "Hemoptysis" : "",
    "Pneumonia" : "",
    "Asthma" : "",
    "Bronchitis" : "",
    "Emphysema" : "",
    "Tuberculosis" : "",
    "Last Chest X-ray" : "",
    "Hypertension" : "",
    "Murmurs" : "",
    "Angina" : "",
    "Palpitation" : "",
    "Dyspnea on exertion" : "",
    "Orthopnea" : "",
    "Paroxysmal nocturnal dyspnea" : "",
    "Edema" : "",
    "Last EKG" : "",
    "Appetite" : "",
    "Nausea" : "",
    "Vomiting" : "",
    "Indigestion" : "",
    "Dysphagia" : "",
    "Bowel Movement" : "",
    "Frequency Change" : "",
    "Stool Color" : "",
    "Diarrhea" : "",
    "Constipation" : "",
    "Bleeding - Hemetemesis" : "",
    "Bleeding - Hemorrhoids" : "",
    "Bleeding - Melena or Hematechezia" : "",
    "Abdominal Pain" : "",
    "Jaundice" : "",
    "Hepatic" : "",
    "Frequency" : "",
    "Hesitancy" : "",
    "Urgency" : "",
    "Polyuria" : "",
    "Dysuria" : "",
    "Hematuria" : "",
    "Nocturia" : "",
    "Incontinence" : "",
    "Stones" : "",
    "Infection" : "",
    "Muscle Weakness" : "",
    "Musculoskeletal Pain" : "",
    "Joint Stiffness" : "",
    "Range of Motion" : "",
    "Instability" : "",
    "Redness" : "",
    "Swelling" : "",
    "Arthritis" : "",
    "Gout" : "",
  });

  const handleToggle = (index, accordion) => {
    if (accordion === 1) {
      setActiveIndexAccordion1(index);
    } else if (accordion === 2) {
      setActiveIndexAccordion2(index);
    } else if (accordion === 3) {
      setActiveIndexAccordion3(index);
    } else if (accordion === 4) {
      setActiveIndexAccordion4(index);
    } else if (accordion === 5) {
      setActiveIndexAccordion5(index);
    } else if (accordion === 6) {
      setActiveIndexAccordion6(index);
    }
  };

  const getTitleStyles = (currentIndex, titleIndex) => ({
    backgroundColor: currentIndex === titleIndex ? "#237a57" : "#f1f1f1",
    color: currentIndex === titleIndex ? "white" : "black",
    margin: "4px",
    border: "1px solid lightgray",
    padding: "5px",
    borderRadius: "4px",
    cursor: "pointer",
  });

  const handleSave = () => {
    const serverUrl = `${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/reviewsystem2`;

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

  const allAccordionTitles1 = [
    "Skin Changes",
    "Masses/lumps",
    "Breast Pain",
    "Discharge",
    "Self Exams",
  ];

  const allAccordionTitles2 = [
    "Shortness of Breath",
    "Wheeze",
    "Cough",
    "Sputum",
    "Hemoptysis",
    "Pneumonia",
    "Asthma",
    "Bronchitis",
    "Emphysema",
    "Tuberculosis",
    "Last Chest X-ray",
  ];

  const allAccordionTitles3 = [
    "Hypertension",
    "Murmurs",
    "Angina",
    "Palpitation",
    "Dyspnea on exertion",
    "Orthopnea",
    "Paroxysmal nocturnal dyspnea",
    "Edema",
    "Last EKG",
  ];

  const allAccordionTitles4 = [
    "Appetite",
    "Nausea",
    "Vomiting",
    "Indigestion",
    "Dysphagia",
    "Bowel Movement",
    "Frequency Change",
    "Stool Color",
    "Diarrhea",
    "Constipation",
    "Bleeding - Hemetemesis",
    "Bleeding - Hemorrhoids",
    "Bleeding - Melena or Hematechezia",
    "Abdominal Pain",
    "Jaundice",
    "Hepatic",
  ];

  const allAccordionTitles5 = [
    "Frequency",
    "Hesitancy",
    "Urgency",
    "Polyuria",
    "Dysuria",
    "Hematuria",
    "Nocturia",
    "Incontinence",
    "Stones",
    "Infection",
  ];

  const allAccordionTitles6 = [
    "Muscle Weakness",
    "Musculoskeletal Pain",
    "Joint Stiffness",
    "Range of Motion",
    "Instability",
    "Redness",
    "Swelling",
    "Arthritis",
    "Gout",
  ];


  return (
    <>
      <Navbar />
      <div>
        <div className="d-flex">
          <div className="col-2 p-0">
            <Menu />
          </div>

          <div className="col-sm-12 col-md-12 col-lg-10 p-0">
            <Subnavbar />
            <form className="rs1_accordion">
              <div className="accordion accordion-flush" id="accordionFlush">
                <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded">
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
                        <span className="fs-5"> Breasts</span>
                      </div>
                    </button>
                  </h2>

                  <div
                    id="flush-dropOne"
                    className="accordion-collapse collapse show pb-3"
                    aria-labelledby="flush-headOne"
                    data-bs-parent="#accordionFlush"
                  >
                    <div className="accordion-body d-md-flex p-0">
                    <div className="col-md-4 col-xs-5">
                        {/* {/ Accordion titles /} */}
                        {allAccordionTitles1.map((title, index) => (
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
                        {/* {/ Accordion textarea /} */}
                        <div className="eachAccordInputBlock">
                          <textarea
                            rows="3"
                            className="form-control mt-2"
                            placeholder={`${allAccordionTitles1[activeIndexAccordion1]}`}
                            value={
                              accordionContents[
                                `${allAccordionTitles1[activeIndexAccordion1]}`
                              ]
                            }
                            onChange={(e) => {
                              setAccordionContents({
                                ...accordionContents,
                                [`${allAccordionTitles1[activeIndexAccordion1]}`]:
                                  e.target.value,
                              });
                            }}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion accordion-flush" id="accordionFlush1">
                <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded">
                  <h2 className="accordion-header" id="flush-headTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-dropTwo"
                      aria-expanded="false"
                      aria-controls="flush-dropTwo"
                    >
                      <div>
                        <span className="fs-5"> Respiratory</span>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="flush-dropTwo"
                    className="accordion-collapse collapse show pb-3"
                    aria-labelledby="flush-headTwo"
                    data-bs-parent="#accordionFlush1"
                  >
                    <div className="accordion-body d-md-flex p-0">
                    <div className="col-md-4 col-xs-5">
                        {/* {/ Accordion titles /} */}
                        {allAccordionTitles2.map((title, index) => (
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
                        {/* {/ Accordion textarea /} */}
                        <div className="eachAccordInputBlock">
                          <textarea
                            rows="3"
                            className="form-control mt-2"
                            placeholder={`${allAccordionTitles2[activeIndexAccordion2]}`}
                            value={
                              accordionContents[
                                `${allAccordionTitles2[activeIndexAccordion2]}`
                              ]
                            }
                            onChange={(e) => {
                              setAccordionContents({
                                ...accordionContents,
                                [`${allAccordionTitles2[activeIndexAccordion2]}`]:
                                  e.target.value,
                              });
                            }}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion accordion-flush" id="accordionFlush2">
                <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded">
                  <h2 className="accordion-header" id="flush-headThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-dropThree"
                      aria-expanded="false"
                      aria-controls="flush-dropThree"
                    >
                      <div>
                        <span className="fs-5"> Cardiac</span>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="flush-dropThree"
                    className="accordion-collapse collapse show pb-3"
                    aria-labelledby="flush-headThree"
                    data-bs-parent="#accordionFlush2"
                  >
                    <div className="accordion-body d-md-flex p-0">
                    <div className="col-md-4 col-xs-5">
                        {/* {/ Accordion titles /} */}
                        {allAccordionTitles3.map((title, index) => (
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
                        {/* {/ Accordion textarea /} */}
                        <div className="eachAccordInputBlock">
                          <textarea
                            rows="3"
                            className="form-control mt-2"
                            placeholder={`${allAccordionTitles3[activeIndexAccordion3]}`}
                            value={
                              accordionContents[
                                `${allAccordionTitles3[activeIndexAccordion3]}`
                              ]
                            }
                            onChange={(e) => {
                              setAccordionContents({
                                ...accordionContents,
                                [`${allAccordionTitles3[activeIndexAccordion3]}`]:
                                  e.target.value,
                              });
                            }}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion accordion-flush" id="accordionFlush3">
                <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded">
                  <h2 className="accordion-header" id="flush-headFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-dropFour"
                      aria-expanded="false"
                      aria-controls="flush-dropFour"
                    >
                      <div>
                        <span className="fs-5"> GI</span>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="flush-dropFour"
                    className="accordion-collapse collapse show pb-3"
                    aria-labelledby="flush-headFour"
                    data-bs-parent="#accordionFlush3"
                  >
                    <div className="accordion-body d-md-flex p-0">
                      <div className="col-md-4 col-xs-5">
                        {/* {/ Accordion titles /} */}
                        {allAccordionTitles4.map((title, index) => (
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
                        {/* {/ Accordion textarea /} */}
                        <div className="eachAccordInputBlock">
                          <textarea
                            rows="3"
                            className="form-control mt-2"
                            placeholder={`${allAccordionTitles4[activeIndexAccordion4]}`}
                            value={
                              accordionContents[
                                `${allAccordionTitles4[activeIndexAccordion4]}`
                              ]
                            }
                            onChange={(e) => {
                              setAccordionContents({
                                ...accordionContents,
                                [`${allAccordionTitles4[activeIndexAccordion4]}`]:
                                  e.target.value,
                              });
                            }}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion accordion-flush" id="accordionFlush4">
                <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded">
                  <h2 className="accordion-header" id="flush-headFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-dropFive"
                      aria-expanded="false"
                      aria-controls="flush-dropFive"
                    >
                      <div>
                        <span className="fs-5"> Urinary</span>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="flush-dropFive"
                    className="accordion-collapse collapse show pb-3"
                    aria-labelledby="flush-headFive"
                    data-bs-parent="#accordionFlush4"
                  >
                    <div className="accordion-body d-md-flex p-0">
                    <div className="col-md-4 col-xs-5">
                        {/* {/ Accordion titles /} */}
                        {allAccordionTitles5.map((title, index) => (
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
                        {/* {/ Accordion textarea /} */}
                        <div className="eachAccordInputBlock">
                          <textarea
                            rows="3"
                            className="form-control mt-2"
                            placeholder={`${allAccordionTitles5[activeIndexAccordion5]}`}
                            value={
                              accordionContents[
                                `${allAccordionTitles5[activeIndexAccordion5]}`
                              ]
                            }
                            onChange={(e) => {
                              setAccordionContents({
                                ...accordionContents,
                                [`${allAccordionTitles5[activeIndexAccordion5]}`]:
                                  e.target.value,
                              });
                            }}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion accordion-flush" id="accordionFlush5">
                <div className="accordion-item border border-2 border-success border-bottom-0 border-end-0 border-start-0 m-2 shadow rounded">
                  <h2 className="accordion-header" id="flush-headSix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-dropSix"
                      aria-expanded="false"
                      aria-controls="flush-dropSix"
                    >
                      <div>
                        <span className="fs-5"> Musculoskeletal</span>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="flush-dropSix"
                    className="accordion-collapse collapse show pb-3"
                    aria-labelledby="flush-headSix"
                    data-bs-parent="#accordionFlush5"
                  >
                    <div className="accordion-body d-md-flex p-0">
                    <div className="col-md-4 col-xs-5">
                        {/* {/ Accordion titles /} */}
                        {allAccordionTitles6.map((title, index) => (
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
                        {/* {/ Accordion textarea /} */}
                        <div className="eachAccordInputBlock">
                          <textarea
                            rows="3"
                            className="form-control mt-2"
                            placeholder={`${allAccordionTitles6[activeIndexAccordion6]}`}
                            value={
                              accordionContents[
                                `${allAccordionTitles6[activeIndexAccordion6]}`
                              ]
                            }
                            onChange={(e) => {
                              setAccordionContents({
                                ...accordionContents,
                                [`${allAccordionTitles6[activeIndexAccordion6]}`]:
                                  e.target.value,
                              });
                            }}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button className="btn btn-success m-2 mb-5" onClick={handleSave}>
                Add Current Complaints
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
