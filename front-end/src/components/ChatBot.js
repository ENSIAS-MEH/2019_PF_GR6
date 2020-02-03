import React from "react";
import ChatBot from 'react-simple-chatbot';

function ComponentMssg() {
  return (
    <div style={{ width: 100, height: 100 }}>
      <img
        style={{ width: 100, height: 100 }}
        src="data:image/jpeg;base64,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"
        alt=""
      />
    </div>
  );
}
function Link(props) {
  return (
    <a href={props.link} target="blank">
      {props.text}
    </a>
  );
}
export default function App() {
  const steps = [
    {
      id: "start",
      message: "How can we help you ?",
      trigger: "resolve"
    },
    {
      id: "resolve",
      options: [
        {
          value: 1,
          label: "how does it work",
          trigger: () => {
            console.log("show me !");
            return "work";
          }
        },
        { value: 2, label: "contact the creator", trigger: "contact" },
        { value: 3, label: "throw a suggestion!", trigger: "suggest" },
        { value: 4, label: "something else", trigger: "something_else" }
      ]
    },
    {
      id: "contact",
      component: (
        <Link link="https://github.com/BLemine" text="contact the creator" />
      ),
      trigger: "continue"
    },
    {
      id: "suggest",
      user: true,
      trigger: "suggestRes"
    },
    {
      id: "suggestRes",
      message: "Thanks for the suggestion",
      trigger: "continue"
    },
    {
      id: "work",
      component: <ComponentMssg />,
      trigger: "continue",
      asMessage: true
    },
    {
      id: "continue",
      options: [
        { value: 1, label: "ask more", trigger: "start" },
        { value: 2, label: "finish", trigger: "finish" }
      ]
    },
    {
      id: "finish",
      message: "see you later",
      end: true
    },
    {
      id: "something_else",
      message: "are you a user ?",
      trigger: "different_need"
    },
    {
      id: "different_need",
      options: [
        { value: 1, label: "yes", trigger: "help_user" },
        { value: 2, label: "No", trigger: "help_not_user" }
      ]
    },
    {
      id: "help_user",
      message: "please enter your name : ",
      trigger: "username"
    },
    {
      id: "username",
      user: true,
      trigger: e => {
        console.log("username : " + e.value);
        return "help_user_mail";
      }
    },
    {
      id: "help_user_mail",
      message: "your mail : ",
      trigger: "help_user_finish"
    },
    {
      id: "help_user_finish",
      user: true,
      trigger: e => {
        console.log("mail :" + e.value);
        return "continue";
      }
    },
    {
      id: "help_not_user",
      message: "ok got u"
    }
  ];

  return (
      <div>
        <ChatBot
          steps={steps}
          headerTitle="Clean env, Easy Cash"
          floating={true}
        />
      </div>

  );
}
