import { Col, Divider, Row } from "antd";
import "./layoutandstyle.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface NumberMove {
  firstPosition: number;
  secondPosition: number;
}

const LayoutAndStyle: React.FC = () => {
  const { t } = useTranslation("ns1");
  const [numberMovePosition, setNumberMovePosition] = useState<NumberMove>({
    firstPosition: 0,
    secondPosition: 3,
  });
  const [nameClass, setNameClass] = useState<string[]>([
    "buttonSquare",
    "buttonCircle",
    "buttonLCircle",
    "buttonTrapezoid",
    "buttonLSquare",
    "buttonLRSquare",
  ]);

  const onChangeMovePosition = () => {
    if (
      numberMovePosition.firstPosition === 0 &&
      numberMovePosition.secondPosition === 3
    ) {
      setNumberMovePosition({
        ...numberMovePosition,
        firstPosition: 3,
        secondPosition: 0,
      });
    } else {
      setNumberMovePosition({
        ...numberMovePosition,
        firstPosition: 0,
        secondPosition: 3,
      });
    }
  };
  const onChangeNextMoveShape = () => {
    const deleteLast = nameClass.filter(
      (item) => item !== nameClass[nameClass.length - 1]
    );
    const newNameClass = [nameClass[nameClass.length - 1]].concat(deleteLast);
    setNameClass(newNameClass);
  };

  const onChangePrevMoveShape = () => {
    const deleteFirst = nameClass.filter((item) => item !== nameClass[0]);
    const newNameClass = deleteFirst.concat(nameClass[0]);
    setNameClass(newNameClass);
  };

  const onRandomPosition = () => {
    const newGame = nameClass
      .map((item) => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((item) => item.item);
    setNameClass(newGame);
  };
  return (
    <div>
      <h1>{t("description.title1")}</h1>
      <section>
        <Row justify="center" gutter={[16, 16]}>
          <Col span={6}>
            <div className="boxContainer2" onClick={onChangePrevMoveShape}>
              <div className="buttonL"></div>
              <span className="move">{t("changeShape")}</span>
            </div>
          </Col>
          <Col span={12}>
            <div className="twoBox" onClick={onChangeMovePosition}>
              <div className="buttonT"></div>
              <div className="buttonB"></div>
              <span className="move">{t("changePosition")}</span>
            </div>
          </Col>
          <Col span={6}>
            <div className="boxContainer2" onClick={onChangeNextMoveShape}>
              <div className="buttonR"></div>
              <span className="move">{t("changeShape")}</span>
            </div>
          </Col>
        </Row>
        <Divider />
        <Row gutter={[16, 16]}>
          {nameClass.map((item, index) => (
            <Col
              span={6}
              offset={
                index === numberMovePosition.firstPosition
                  ? 6
                  : index === numberMovePosition.secondPosition
                  ? 3
                  : 0
              }
              onClick={onRandomPosition}
              key={index}
            >
              <div className="boxContainer2">
                <div className={item}></div>
              </div>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default LayoutAndStyle;
