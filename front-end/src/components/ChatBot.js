import React from "react";
import ChatBot from 'react-simple-chatbot';
import docs from "../media/page-under-construction.png"
const axios=require("axios");
function ComponentMssg() {
  return (
    <div style={{ width: 100, height: 100 }}>
      <img
        style={{ width: 100, height: 100 }}
        src={docs}
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
  const store_suggestion=(suggestion,name="visitor",email="visitor@none.com")=>{
    axios.post("/suggestion",{
      "text":suggestion,
      "name":name,
      "email":email
    })
    .then(res=>{
      console.log(res.data);
    }).catch(ex=>{
      console.log(ex)
    })
  }
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
      trigger: ()=>{
        store_suggestion("hola como estas");
        return "continue"
      }
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
