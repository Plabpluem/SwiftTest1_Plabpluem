import React from "react";
import "./home.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Flex } from "antd";

const App: React.FC = () => {
  const { t } = useTranslation("ns1");

  const dataBox: {
    title: "title" | "title2" | "title3";
    description:
      | "description.title1"
      | "description.title2"
      | "description.title3";
    direct: string;
  }[] = [
    {
      title: "title",
      description: "description.title1",
      direct: "/Layout",
    },
    {
      title: "title2",
      description: "description.title2",
      direct: "/",
    },
    {
      title: "title3",
      description: "description.title3",
      direct: "/",
    },
  ];

  return (
    <main className="listContainer">
      <Flex justify="center" align="center" gap={20} style={{height:"100%"}}>
        <h1>test</h1>
        {dataBox.map((item, index) => (
          <Link to={item.direct} key={index} className="box">
            <h3>{t(item.title)}</h3>
            <p>{t(item.description)}</p>
          </Link>
        ))}
      </Flex>
    </main>
  );
};

export default App;
