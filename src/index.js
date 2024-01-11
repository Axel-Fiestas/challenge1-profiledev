import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import reportWebVitals from "./reportWebVitals";

const skills = [
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "beginner",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
  {
    skill: "Java",
    level: "advanced",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar image="me2.jpg" />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.image} alt="me"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Axel Fiestas</h1>
      <p>
        UPC Software Engineering Student. When not coding or studying, I like to
        play Honkai Star Rail :v, or watch some streamers on youtube or twitch
      </p>
    </div>
  );
}

function giveEmojiCodeBasedOnLevel(level) {
  switch (level) {
    case "beginner":
      return "👶";
    case "intermediate":
      return "👍";
    case "advanced":
      return "💪";
    default:
      return "👶";
  }
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          backgroundColor={skill.color}
          skillName={skill.skill}
          emojiCode={giveEmojiCodeBasedOnLevel(skill.level)}
        ></Skill>
      ))}
    </div>
    /*
    <div className="skill-list">
      <Skill backgroundColor="red" skillName="HTML+CSS" emojiCode="&#128186;" />
      <Skill
        backgroundColor="yellow"
        skillName="Javascript"
        emojiCode="&#128187;"
      />
      <Skill backgroundColor="orange" skillName="Java" emojiCode="&#128189;" />
      <Skill
        backgroundColor="Green"
        skillName="SpringBoot"
        emojiCode="&#128204;"
      />
      <Skill
        backgroundColor="brown"
        skillName="Git and Github"
        emojiCode="&#128513;"
      />
      <Skill
        backgroundColor="skyblue"
        skillName="React"
        emojiCode="&#128227;"
      />
    </div>*/
  );
}

function Skill({ backgroundColor, skillName, emojiCode }) {
  return (
    <div className="skill" style={{ background: backgroundColor }}>
      <p>
        {skillName} <span>{emojiCode}</span>
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
