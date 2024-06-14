import React from "react";
import "./agentsPage.scss";

const AgentsPage = () => {
  const agents = [
    {
      name: "John Doe",
      specialization: "Residential Properties",
      image:
        "https://camo.githubusercontent.com/0a283fdc0ffde203438747f59bede51e5cfd88ba6805b6416822627e01e64ab7/68747470733a2f2f6a656e737365676572732e636f6d2f7374617469632f6d656469612f6167656e742e706e67",
    },
    {
      name: "Jane Smith",
      specialization: "Commercial Properties",
      image: "https://janondras.files.wordpress.com/2020/11/agent.jpg",
    },
  ];

  return (
    <div className="agents-page">
      <div className="left">
        <h1>Our Agents</h1>
        {agents.map((agent, index) => (
          <div className="agent" key={index}>
            <img src={agent.image} alt={`Agent ${index + 1}`} />
            <h2>{agent.name}</h2>
            <p>
              <b>Specialization:</b> {agent.specialization}
            </p>
          </div>
        ))}
      </div>
      <div className="right"></div>
    </div>
  );
};

export default AgentsPage;
