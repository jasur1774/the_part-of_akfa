import React from "react";
import { ReactComponent as Icon } from "../assets/icons/questionicon.svg";
import { ReactComponent as Icon1 } from "../assets/icons/firsttype.svg";
import { ReactComponent as Icon2 } from "../assets/icons/secondtype.svg";
import Akfaimg from "../assets/images/akfaimg.jpg";

import "../pages/Akfa.css";

export default class Akfa extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count1: 0, price: 0, count2: 0 };
  }
  render() {
    let handle = ({ target }) => {
      this.setState({
        price: target.checked ? this.state.price + 100 : this.state.price - 100,
      });
    };
    let handleSecond = ({ target }) => {
      this.setState({
        price: target.checked
          ? this.state.price * 0 + 150
          : this.state.price - 150,
      });
    };
    let handleSecond1 = ({ target }) => {
      this.setState({
        price: target.checked
          ? this.state.price * 0 + 100
          : this.state.price - 100,
      });
    };
    const handleChange = (event) => {
      this.setState({ count1: +event.target.value });
      this.setState({ price: this.state.count1 });
    };
    const handleChange2 = (event) => {
      this.setState({ count2: +event.target.value });
      this.setState({ price: this.state.count2 });
    };

    return (
      <div className="akfa">
        <h1>Калькулятор стоимости</h1>
        <div className="akfachoice">
          <button className="calc-btn">
            <p className="calc-text">Калькулятор окон</p>
          </button>
          <button className="calc-btn1">
            <p className="calc-text">Калькулятор балконов</p>
          </button>
        </div>
        <div className="windowtypes">
          <div className="akfa-left">
            <h2 className="title">Тип окна</h2>
            <div className="types">
              <button className="window-type-btn">
                <p>Двустворчатое</p>
              </button>
              <button className="window-type-btn">
                <p>Трехстворчатое</p>
              </button>
              <button className="window-type-btn">
                <p>Балконный блок</p>
              </button>
            </div>
            <div className="openingtype">
              <div className="openingtype-title">
                <h2 className="title">Тип открывания</h2>
                <span>
                  <Icon className="icon__quest" />
                </span>
              </div>
              <div className="romtypes">
                <input
                  type="radio"
                  id="rom1"
                  name="windows"
                  hidden
                  onClick={handleSecond}
                />
                <label htmlFor="rom1">
                  <Icon1 className="first_type" />
                </label>
                <input
                  type="radio"
                  id="rom2"
                  name="windows"
                  hidden
                  onClick={handleSecond1}
                />
                <label htmlFor="rom2">
                  <Icon2 className="first_type" />
                </label>
              </div>
            </div>
            <div className="hometype">
              <h2 className="title">Тип дома</h2>
              <div className="hometype-check">
                <div className="hometype-left">
                  <input
                    type="checkbox"
                    id="boxname1"
                    name="panel"
                    onClick={handle}
                  />
                  <label htmlFor="boxname1" className="names">
                    Панельный
                  </label>
                </div>
                <div className="hometype-right">
                  <input
                    type="checkbox"
                    id="boxname2"
                    name="panel"
                    onClick={handle}
                  />
                  <label htmlFor="boxname2" className="names">
                    Кирпичный
                  </label>
                </div>
              </div>
            </div>
            <div className="profiletype">
              <h2 className="title">Тип профиля</h2>
              <div className="profileboxes">
                <div className="profilebox1">
                  <div className="profilebox-right1">
                    <input
                      className="inputcolor"
                      type="checkbox"
                      id="boxname3"
                      name="panel"
                      onClick={handle}
                    />
                    <label htmlFor="boxname3" className="names">
                      Эконом (Alpenprof)
                    </label>
                  </div>
                  <div className="profilebox-right2">
                    <input
                      type="checkbox"
                      id="boxname4"
                      name="panel"
                      onClick={handle}
                    />
                    <label htmlFor="boxname4" className="names">
                      Стандарт (GoodWin, EXPROF)
                    </label>
                  </div>
                </div>
                <div className="profilebox2">
                  <div className="profilebox-left1">
                    <input
                      type="checkbox"
                      id="boxname5"
                      name="panel"
                      onClick={handle}
                    />
                    <label htmlFor="boxname5" className="names">
                      Комфорт (КБЕ, Grain)
                    </label>
                  </div>
                  <div className="profilebox-left2">
                    <input
                      type="checkbox"
                      id="boxname10"
                      name="panel"
                      onClick={handle}
                    />
                    <label htmlFor="boxname10" className="names">
                      Премиум (Veka, Rehau)
                    </label>
                  </div>
                </div>
              </div>
              <div className="add-and-lam">
                <div className="additionaly">
                  <h2>Дополнительно</h2>
                  <div className="additional">
                    <div className="additional1">
                      <input
                        className="inputcolor"
                        type="checkbox"
                        id="boxname6"
                        name="panel"
                        onClick={handle}
                      />
                      <label htmlFor="boxname6" className="names">
                        Монтажные работы
                      </label>
                    </div>
                    <div className="additional2">
                      <input
                        type="checkbox"
                        id="boxname7"
                        name="panel"
                        onClick={handle}
                      />
                      <label htmlFor="boxname7" className="names">
                        Подоконник, водоотлив
                      </label>
                    </div>
                  </div>
                </div>
                <div className="laminat">
                  <h2>Ламинация</h2>
                  <div className="lamination">
                    <div className="lamination1">
                      <input
                        type="checkbox"
                        id="boxname8"
                        name="panel"
                        onClick={handle}
                      />
                      <label htmlFor="boxname8" className="names">
                        Без ламинации
                      </label>
                    </div>
                    <div className="lamination2">
                      <input
                        type="checkbox"
                        id="boxname9"
                        name="panel"
                        onClick={handle}
                      />
                      <label htmlFor="boxname9" className="names">
                        С ламинацией
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="akfa-right">
            <div className="sizes">
              <h2>Размеры</h2>
              <div className="size-btns">
                <div className="wide-place">
                  <label htmlFor="wide">Ширина</label>
                  <input
                    type="text"
                    id="wide"
                    name="sizee"
                    value={this.state.count1}
                  />
                </div>
                <div className="height-place">
                  <label htmlFor="height">Высота</label>
                  <input
                    type="text"
                    id="height"
                    name="size"
                    value={this.state.count2}
                  />
                </div>
              </div>
            </div>
            <div className="akfa-range">
              <div className="range1">
                <label htmlFor="akfaimg"></label>
                <input
                  type="range"
                  id="akfaimg"
                  name="akfaimg"
                  className="wide"
                  min={0}
                  max={2500}
                  value={this.state.value}
                  onChange={handleChange}
                />
                <img src={Akfaimg} alt="" />
              </div>
              <input
                type="range"
                id="akfaimg1"
                name="akfaimg"
                className="height"
                min={0}
                max={2500}
                value={this.state.value}
                onChange={handleChange2}
              />
              <label htmlFor="akfaimg1">{this.state.value}</label>
            </div>
            <div className="totalprice">
              <div className="totalprice-tit">
                <h2>Стоимость</h2>
                <span>
                  <Icon className="icon__quest" />
                </span>
              </div>
              <h4>{this.state.price}$</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
