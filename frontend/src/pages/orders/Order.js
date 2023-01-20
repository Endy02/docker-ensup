import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Order = () => {
  const [width, setWidth] = useState(0);
  const slider = useRef();
  const [step, setStep] = useState(1);
  const [card, setCard] = useState('')
  const [cart, setCart] = useState([
    {
      name: "Veggie Burger",
      image: "",
      price: "",
    },
    {
      name: "Test Burger",
      image: "",
      price: "",
    },
    {
      name: "Peachy Burger",
      image: "",
      price: "",
    },
    {
      name: "Mama Burger",
      image: "",
      price: "",
    },
    {
      name: "Veggie Burger",
      image: "",
      price: "",
    },
    {
      name: "Test Burger",
      image: "",
      price: "",
    },
  ]);

  const handleAdd = (item) => {
    setCart(cart.push(item));
  };
  const handleClick = (e) => {};
  const handleStepForm = (e) => {};
  const nextStep = (data) => {
    setStep(step + 1);
  };
  const prevStep = (data) => {
    setStep(step - 1);
  };

  useEffect(() => {
    // TODO : get user from local storage
    document.title = "Commander" // Set the title of the page
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);
  return (
    <>
    {card}
      <div className="container">
        <div className="flex-col-center">
          <div className="full-gutter">
            {step === 1 ? (
              <>
                <motion.div
                  className="full-gutter flex-col-center pad-t-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.85 }}
                  id="step-1"
                >
                  <motion.div
                    ref={slider}
                    className="cart-selection"
                    whileTap={{ cursor: "grabbing" }}
                  >
                    <motion.div
                      drag="x"
                      dragConstraints={{ right: 0, left: -width }}
                      className="inner-selection"
                    >
                      {cart.map((item, i) => {
                        return (
                          <div key={i}>
                            <div className="c-card">
                              <img
                                className="img-cover"
                                src={require("../../images/burgercamere.jpg")}
                                alt="Burger de ouf"
                              />
                              <div className="c-card-ind">
                                <p className="small-text bold-text">{item.name}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </motion.div>
                  </motion.div>
                </motion.div>
                <div className="separator"></div>
                <div className="grid-2-2">
                  <div className="grid-item-t">
                    <div className="nav-card">
                      <ul className="nav-card-list">
                        <li className="nav-card-item-active">
                          <p className="medium-text bold-text">Burgers</p>
                        </li>
                        <li className="nav-card-item">
                          <p className="medium-text bold-text">Salade</p>
                        </li>
                        <li className="nav-card-item">
                          <p className="medium-text bold-text">Formule</p>
                        </li>
                        <li className="nav-card-item">
                          <p className="medium-text bold-text">Plats</p>
                        </li>
                        <li className="nav-card-item">
                          <p className="medium-text bold-text">Boissons</p>
                        </li>
                        <li className="nav-card-item">
                          <p className="medium-text bold-text">Dessert</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid-item-t">
                    <div className="flex-col-center full-width">
                      <div className="grid-4">
                        {/* TODO : Map All Burgers  */}
                        <div className="grid-item">
                          <div className="d-card">
                            <div
                              className="d-card-header"
                              onClick={(e) => {
                                handleClick(e);
                              }}
                            >
                              <img
                                className="img-cover"
                                src={require("../../images/burgercamere.jpg")}
                                alt="Image1"
                              />
                            </div>
                            <div className="d-card-content">
                              <p className="medium-text bold-text black-text pad-b-s">
                                Peachy Burger
                              </p>
                              <p className="small-text thin-text black-text pad-b-s">
                                Double steack, fromage, Bacon, Cornichon, Sauce
                                Maison, Pain Céréale.
                              </p>
                              <p className="medium-text bold-text black-text pad-b-s">
                                9,00 €
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div className="d-card">
                            <div
                              className="d-card-header"
                              onClick={(e) => {
                                handleClick(e);
                              }}
                            >
                              <img
                                className="img-cover"
                                src={require("../../images/burgercamere.jpg")}
                                alt="Image2"
                              />
                            </div>
                            <div className="d-card-content">
                              <p className="medium-text bold-text black-text pad-b-s">
                                Peachy Burger
                              </p>
                              <p className="small-text thin-text black-text pad-b-s">
                                Double steack, fromage, Bacon, Cornichon, Sauce
                                Maison, Pain Céréale.
                              </p>
                              <p className="medium-text bold-text black-text pad-b-s">
                                9,00 €
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div className="d-card">
                            <div
                              className="d-card-header"
                              onClick={(e) => {
                                handleClick(e);
                              }}
                            >
                              <img
                                className="img-cover"
                                src={require("../../images/burgercamere.jpg")}
                                alt="Image3"
                              />
                            </div>
                            <div className="d-card-content">
                              <p className="medium-text bold-text black-text pad-b-s">
                                Peachy Burger
                              </p>
                              <p className="small-text thin-text black-text pad-b-s">
                                Double steack, fromage, Bacon, Cornichon, Sauce
                                Maison, Pain Céréale.
                              </p>
                              <p className="medium-text bold-text black-text pad-b-s">
                                9,00 €
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div className="d-card">
                            <div
                              className="d-card-header"
                              onClick={(e) => {
                                handleClick(e);
                              }}
                            >
                              <img
                                className="img-cover"
                                src={require("../../images/burgercamere.jpg")}
                                alt="Image4"
                              />
                            </div>
                            <div className="d-card-content">
                              <p className="medium-text bold-text black-text pad-b-s">
                                Peachy Burger
                              </p>
                              <p className="small-text thin-text black-text pad-b-s">
                                Double steack, fromage, Bacon, Cornichon, Sauce
                                Maison, Pain Céréale.
                              </p>
                              <p className="medium-text bold-text black-text pad-b-s">
                                9,00 €
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div className="d-card">
                            <div
                              className="d-card-header"
                              onClick={(e) => {
                                handleClick(e);
                              }}
                            >
                              <img
                                className="img-cover"
                                src={require("../../images/burgercamere.jpg")}
                                alt="Image5"
                              />
                            </div>
                            <div className="d-card-content">
                              <p className="medium-text bold-text black-text pad-b-s">
                                Peachy Burger
                              </p>
                              <p className="small-text thin-text black-text pad-b-s">
                                Double steack, fromage, Bacon, Cornichon, Sauce
                                Maison, Pain Céréale.
                              </p>
                              <p className="medium-text bold-text black-text pad-b-s">
                                9,00 €
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div className="d-card">
                            <div
                              className="d-card-header"
                              onClick={(e) => {
                                handleClick(e);
                              }}
                            >
                              <img
                                className="img-cover"
                                src={require("../../images/burgercamere.jpg")}
                                alt="Image6"
                              />
                            </div>
                            <div className="d-card-content">
                              <p className="medium-text bold-text black-text pad-b-s">
                                Peachy Burger
                              </p>
                              <p className="small-text thin-text black-text pad-b-s">
                                Double steack, fromage, Bacon, Cornichon, Sauce
                                Maison, Pain Céréale.
                              </p>
                              <p className="medium-text bold-text black-text pad-b-s">
                                9,00 €
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div className="d-card">
                            <div
                              className="d-card-header"
                              onClick={(e) => {
                                handleClick(e);
                              }}
                            >
                              <img
                                className="img-cover"
                                src={require("../../images/burgercamere.jpg")}
                                alt="Image7"
                              />
                            </div>
                            <div className="d-card-content">
                              <p className="medium-text bold-text black-text pad-b-s">
                                Peachy Burger
                              </p>
                              <p className="small-text thin-text black-text pad-b-s">
                                Double steack, fromage, Bacon, Cornichon, Sauce
                                Maison, Pain Céréale.
                              </p>
                              <p className="medium-text bold-text black-text pad-b-s">
                                9,00 €
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div className="d-card">
                            <div
                              className="d-card-header"
                              onClick={(e) => {
                                handleClick(e);
                              }}
                            >
                              <img
                                className="img-cover"
                                src={require("../../images/burgercamere.jpg")}
                                alt="Image8"
                              />
                            </div>
                            <div className="d-card-content">
                              <p className="medium-text bold-text black-text pad-b-s">
                                Peachy Burger
                              </p>
                              <p className="small-text thin-text black-text pad-b-s">
                                Double steack, fromage, Bacon, Cornichon, Sauce
                                Maison, Pain Céréale.
                              </p>
                              <p className="medium-text bold-text black-text pad-b-s">
                                9,00 €
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div className="d-card">
                            <div
                              className="d-card-header"
                              onClick={(e) => {
                                handleClick(e);
                              }}
                            >
                              <img
                                className="img-cover"
                                src={require("../../images/burgercamere.jpg")}
                                alt="Image9"
                              />
                            </div>
                            <div className="d-card-content">
                              <p className="medium-text bold-text black-text pad-b-s">
                                Peachy Burger
                              </p>
                              <p className="small-text thin-text black-text pad-b-s">
                                Double steack, fromage, Bacon, Cornichon, Sauce
                                Maison, Pain Céréale.
                              </p>
                              <p className="medium-text bold-text black-text pad-b-s">
                                9,00 €
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div className="d-card">
                            <div
                              className="d-card-header"
                              onClick={(e) => {
                                handleClick(e);
                              }}
                            >
                              <img
                                className="img-cover"
                                src={require("../../images/burgercamere.jpg")}
                                alt="Image10"
                              />
                            </div>
                            <div className="d-card-content">
                              <p className="medium-text bold-text black-text pad-b-s">
                                Peachy Burger
                              </p>
                              <p className="small-text thin-text black-text pad-b-s">
                                Double steack, fromage, Bacon, Cornichon, Sauce
                                Maison, Pain Céréale.
                              </p>
                              <p className="medium-text bold-text black-text pad-b-s">
                                9,00 €
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div className="d-card">
                            <div
                              className="d-card-header"
                              onClick={(e) => {
                                handleClick(e);
                              }}
                            >
                              <img
                                className="img-cover"
                                src={require("../../images/burgercamere.jpg")}
                                alt="Image10"
                              />
                            </div>
                            <div className="d-card-content">
                              <p className="medium-text bold-text black-text pad-b-s">
                                Peachy Burger
                              </p>
                              <p className="small-text thin-text black-text pad-b-s">
                                Double steack, fromage, Bacon, Cornichon, Sauce
                                Maison, Pain Céréale.
                              </p>
                              <p className="medium-text bold-text black-text pad-b-s">
                                9,00 €
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid-item">
                          <div className="d-card">
                            <div
                              className="d-card-header"
                              onClick={(e) => {
                                handleClick(e);
                              }}
                            >
                              <img
                                className="img-cover"
                                src={require("../../images/burgercamere.jpg")}
                                alt="Image11"
                              />
                            </div>
                            <div className="d-card-content">
                              <p className="medium-text bold-text black-text pad-b-s">
                                Peachy Burger
                              </p>
                              <p className="small-text thin-text black-text pad-b-s">
                                Double steack, fromage, Bacon, Cornichon, Sauce
                                Maison, Pain Céréale.
                              </p>
                              <p className="medium-text bold-text black-text pad-b-s">
                                9,00 €
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="separator"></div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
            {step === 2 ? (
              <>
                <div className="step-form pad-t-xl">
                  <h2 className="large-text bold-text black-text pad-b-xl">
                    Paiement
                  </h2>
                  <input
                    className="input input-large input-text input-orange marg-b-l"
                    type="text"
                    name="card"
                    id="card"
                    placeholder="Numéro de carte"
                  />
                  <input
                    className="input input-large input-text input-orange marg-b-l"
                    type="text"
                    name="ccv"
                    id="ccv"
                    placeholder="CCV"
                  />
                  <div className="flex-row-between">
                    <input
                      className="input input-small input-number input-orange marg-b-l marg-r-l"
                      type="number"
                      name="month"
                      min="1"
                      max="12"
                      id="date"
                      placeholder="Mois"
                    />
                    <input
                      className="input input-small input-number input-orange marg-b-l"
                      type="number"
                      name="number"
                      min="2023"
                      max="4000"
                      id="year"
                      placeholder="Année"
                    />
                  </div>
                  <input
                    className="input input-large input-text input-orange marg-b-l"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nom et prénom du titulaire"
                  />
                </div>
              </>
            ) : null}
            {step === 3 ? (
              <>
                <div className="step-form pad-t-xl">
                  <h2 className="large-text bold-text black-text pad-b-xl">
                    Recapitulatif
                  </h2>
                  <div className="flex-row-between full-width pad-b-xl">
                    <div className="flex-col-center">
                      <h1 className="Large-text bold-text black-text">Commande N° 713702</h1>
                    </div>
                    <div className="flex-col-center">
                      <p className="medium-text regular-text black-text">En cours de traitement</p>
                    </div>
                  </div>
                  <div className="flex-col-center full-width">
                    <table className="table-base">
                      <thead className="t-head">
                          <td>
                            Produits
                          </td>
                          <td>
                            Quantité
                          </td>
                          <td>
                            Prix
                          </td>
                      </thead>
                      <tbody className="t-body">
                        <tr>
                          <td>
                            <p className="medium-text bold-text pad-b-s">Peachy Burger</p>
                            <p className="medium-text thin-text">Double Steack, Fromage, Bacon, Cornichon, Sauce Maison, Pain céréale.</p>
                          </td>
                          <td>
                            1
                          </td>
                          <td>
                            78,00 €
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="medium-text bold-text pad-b-s">Mama Burger</p>
                            <p className="medium-text thin-text">Double Steack, Fromage, Bacon, Cornichon, Sauce Maison, Pain céréale.</p>
                          </td>
                          <td>
                            1
                          </td>
                          <td>
                            55,00 €
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="separator"></div>
                    <table className="table-r-base">
                      <tbody className="t-r-body">
                        <tr>
                          <td>
                            <p className="medium-text bold-text pad-b-s">Prix HT</p>
                          </td>
                          <td>
                            55,00 €
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="medium-text bold-text pad-b-s">TVA</p>
                          </td>
                          <td>
                            20 %
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="medium-text bold-text pad-b-s">Prix TTC</p>
                          </td>
                          <td>
                            85,00 €
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="separator"></div>
                </div>
              </>
            ) : null}
            <div className="flex-row-between">
              {step > 1 ? (
                <p
                  onClick={prevStep}
                  className="btn btn-bordered btn-large btn-sand"
                >
                  Retour
                </p>
              ) : (
                <div></div>
              )}
              {step <= 2 ? (
                <p
                  onClick={nextStep}
                  className="btn btn-bordered btn-large btn-current"
                >
                  Suivant
                </p>
              ) : null}
              {step === 3 ? (
                <p
                  onClick={handleStepForm}
                  className="btn btn-bordered btn-large btn-current"
                >
                  Confirmer
                </p>
              ) : null}
            </div>
          </div>
          <div className="separator"></div>
        </div>
      </div>
    </>
  );
};

export default Order;
