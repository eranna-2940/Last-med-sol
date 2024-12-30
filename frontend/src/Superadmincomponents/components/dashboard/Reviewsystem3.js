import React, { useState } from "react";
import Navbar from "../Navbar";
import Menu from "../Menu";
import Subnavbar from "./Subnavbar";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function Reviewsystem3() {
  const {id} = useParams();

  const [activeIndexAccordion1, setActiveIndexAccordion1] = useState(0);
  const [activeIndexAccordion2, setActiveIndexAccordion2] = useState(0);
  const [activeIndexAccordion3, setActiveIndexAccordion3] = useState(0);
  const [activeIndexAccordion4, setActiveIndexAccordion4] = useState(0);
  const [activeIndexAccordion5, setActiveIndexAccordion5] = useState(0);
  const [activeIndexAccordion6, setActiveIndexAccordion6] = useState(0);
  const [activeIndexAccordion7, setActiveIndexAccordion7] = useState(0);
  const [activeIndexAccordion8, setActiveIndexAccordion8] = useState(0);

  const [accordionContents, setAccordionContents] = useState({
    review3_id: id,
    "Penile discharge sore" : "",
    "Testicular pain or masses" : "",
    "Hernias" : "",
    "Menarch" : "",
    "Period regularity" : "",
    "Frequency" : "",
    "Duration" : "",
    "Dysmennorhea" : "",
    "Last Period" : "",
    "Itching" : "",
    "Discharge" : "",
    "Sores" : "",
    "Pregnancies and Complications" : "",
    "Miscarriages - Abortions" : "",
    "Birth Control" : "",
    "Menopause" : "",
    "Hot flashes - Sweats" : "",
    "STD History - treatment" : "",
    "Sex interest" : "",
    "Function problems" : "",
    "Contraception methods" : "",
    "Heat cold intolerance" : "",
    "Excessive Sweating" : "",
    "Polyuria" : "",
    "Polydipsia" : "",
    "Polyphagia" : "",
    "Thyroid Problems" : "",
    "Diabetes" : "",
    "Anaemia" : "",
    "Easy bruising - bleeding" : "",
    "Petechia" : "",
    "Purpura" : "",
    "Transfusions" : "",
    "Loss of sensation - numbness" : "",
    "Tingling" : "",
    "Tremors" : "",
    "Weakness" : "",
    "Paralysis Fainting" : "",
    "Blackouts" : "",
    "Seizures" : "",
    "Mood" : "",
    "Anxiety" : "",
    "Depression" : "",
    "Tension" : "",
    "Memory" : "",
    "Leg edema" : "",
    "Claudication" : "",
    "Varicose veins" : "",
    "Thromboses - emboli" : "",
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
    } else if (accordion === 7) {
      setActiveIndexAccordion7(index);
    } else if (accordion === 8) {
      setActiveIndexAccordion8(index);
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
    const serverUrl = `${process.env.REACT_APP_HOST}${process.env.REACT_APP_BACKEND_PORT}/reviewsystem3`;

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
    "Penile discharge sore",
    "Testicular pain or masses",
    "Hernias",
  ];

  const allAccordionTitles2 = [
    "Menarch",
    "Period regularity",
    "Frequency",
    "Duration",
    "Dysmennorhea",
    "Last Period",
    "Itching",
    "Discharge",
    "Sores",
    "Pregnancies and Complications",
    "Miscarriages - Abortions",
    "Birth Control",
    "Menopause",
    "Hot flashes - Sweats",
  ];

  const allAccordionTitles3 = [
    "STD History - treatment",
    "Sex interest",
    "Function problems",
    "Contraception methods",
  ];

  const allAccordionTitles4 = [
    "Heat cold intolerance",
    "Excessive Sweating",
    "Polyuria",
    "Polydipsia",
    "Polyphagia",
    "Thyroid Problems",
    "Diabetes",
  ];

  const allAccordionTitles5 = [
    "Anaemia",
    "Easy bruising - bleeding",
    "Petechia",
    "Purpura",
    "Transfusions",
  ];

  const allAccordionTitles6 = [
    "Loss of sensation - numbness",
    "Tingling",
    "Tremors",
    "Weakness",
    "Paralysis Fainting",
    "Blackouts",
    "Seizures",
  ];

  const allAccordionTitles7 = [
    "Mood",
    "Anxiety",
    "Depression",
    "Tension",
    "Memory",
  ];

  const allAccordionTitles8 = [
    "Leg edema",
    "Claudication",
    "Varicose veins",
    "Thromboses - emboli",
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
              <div className="accordion accordion-flush" id="accordionFlush1">
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
                        <span className="fs-5"> Genital - Male</span>
                      </div>
                    </button>
                  </h2>

                  <div
                    id="flush-dropOne"
                    className="accordion-collapse collapse show pb-3"
                    aria-labelledby="flush-headOne"
                    data-bs-parent="#accordionFlush1"
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
              <div className="accordion accordion-flush" id="accordionFlush2">
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
                        <span className="fs-5"> Genital - Female</span>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="flush-dropTwo"
                    className="accordion-collapse collapse show pb-3"
                    aria-labelledby="flush-headTwo"
                    data-bs-parent="#accordionFlush2"
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
              <div className="accordion accordion-flush" id="accordionFlush3">
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
                        <span className="fs-5"> Genital - General</span>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="flush-dropThree"
                    className="accordion-collapse collapse show pb-3"
                    aria-labelledby="flush-headThree"
                    data-bs-parent="#accordionFlush3"
                  >
                    <div className="accordion-body p-0">
                      <div class="col-xs-12">
                        <div class="form-group row eachFormRow">
                          <div class="accordTabs col-xs-12 d-md-flex">
                            <div className="col-md-4 col-xs-5">
                              {/* {/ Accordion titles /} */}
                              {allAccordionTitles3.map((title, index) => (
                                <div
                                  key={index}
                                  className={`eachAccordTab`}
                                  onClick={() => handleToggle(index, 3)}
                                  style={getTitleStyles(
                                    activeIndexAccordion3,
                                    index
                                  )}
                                >
                                  <div className={`eachAccordLink`}>
                                    {title}
                                  </div>
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
                        <div class="form-group row eachFormRow">
                          <div class="col-xs-12">
                            <div class="eachAccorRowHeading">
                              <span class="eachAccorHeadingTxt fs-5 ps-3">
                                Endocrine
                              </span>
                            </div>
                          </div>
                          <div class="accordTabs col-xs-12 pt-3 d-md-flex">
                            <div className="col-md-4 col-xs-5">
                              {/* {/ Accordion titles /} */}
                              {allAccordionTitles4.map((title, index) => (
                                <div
                                  key={index}
                                  className={`eachAccordTab`}
                                  onClick={() => handleToggle(index, 4)}
                                  style={getTitleStyles(
                                    activeIndexAccordion4,
                                    index
                                  )}
                                >
                                  <div className={`eachAccordLink`}>
                                    {title}
                                  </div>
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
                  </div>
                </div>
              </div>
              <div className="accordion accordion-flush" id="accordionFlush4">
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
                        <span className="fs-5"> Haematologic</span>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="flush-dropFour"
                    className="accordion-collapse collapse show pb-3"
                    aria-labelledby="flush-headFour"
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
                        <span className="fs-5"> Neurologic</span>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="flush-dropFive"
                    className="accordion-collapse collapse show pb-3"
                    aria-labelledby="flush-headFive"
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
              <div className="accordion accordion-flush" id="accordionFlush6">
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
                        <span className="fs-5"> Psychiatry</span>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="flush-dropSix"
                    className="accordion-collapse collapse show pb-3"
                    aria-labelledby="flush-headSix"
                    data-bs-parent="#accordionFlush6"
                  >
                    <div className="accordion-body p-0">
                      <div class="col-xs-12">
                        <div class="form-group row eachFormRow">
                          <div className=" d-md-flex">
                            <div className="col-md-4 col-xs-5">
                              {/* {/ Accordion titles /} */}
                              {allAccordionTitles7.map((title, index) => (
                                <div
                                  key={index}
                                  className={`eachAccordTab`}
                                  onClick={() => handleToggle(index, 7)}
                                  style={getTitleStyles(
                                    activeIndexAccordion7,
                                    index
                                  )}
                                >
                                  <div className={`eachAccordLink`}>
                                    {title}
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="col-md-8 col-xs-7">
                              {/* {/ Accordion textarea /} */}
                              <div className="eachAccordInputBlock">
                                <textarea
                                  rows="3"
                                  className="form-control mt-2"
                                  placeholder={`${allAccordionTitles7[activeIndexAccordion7]}`}
                                  value={
                                    accordionContents[
                                      `${allAccordionTitles7[activeIndexAccordion7]}`
                                    ]
                                  }
                                  onChange={(e) => {
                                    setAccordionContents({
                                      ...accordionContents,
                                      [`${allAccordionTitles7[activeIndexAccordion7]}`]:
                                        e.target.value,
                                    });
                                  }}
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group row eachFormRow">
                          <div class="col-xs-12">
                            <div class="eachAccorRowHeading mb-2">
                              <span class="eachAccorHeadingTxt fs-5 ps-3">
                                Circulatory
                              </span>
                            </div>
                          </div>
                          <div className="pt-0 d-md-flex">
                            <div className="col-md-4 col-xs-5">
                              {/* {/ Accordion titles /} */}
                              {allAccordionTitles8.map((title, index) => (
                                <div
                                  key={index}
                                  className={`eachAccordTab`}
                                  onClick={() => handleToggle(index, 8)}
                                  style={getTitleStyles(
                                    activeIndexAccordion8,
                                    index
                                  )}
                                >
                                  <div className={`eachAccordLink`}>
                                    {title}
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="col-md-8 col-xs-7">
                              {/* {/ Accordion textarea /} */}
                              <div className="eachAccordInputBlock">
                                <textarea
                                  rows="3"
                                  className="form-control mt-2"
                                  placeholder={`${allAccordionTitles8[activeIndexAccordion8]}`}
                                  value={
                                    accordionContents[
                                      `${allAccordionTitles8[activeIndexAccordion8]}`
                                    ]
                                  }
                                  onChange={(e) => {
                                    setAccordionContents({
                                      ...accordionContents,
                                      [`${allAccordionTitles8[activeIndexAccordion8]}`]:
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
