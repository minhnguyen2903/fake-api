const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser());
app.use(
  cors({
    origin: "*",
    credentials: true
  })
);
const port = process.env.PORT || 5000

// !important!
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.get("/api", (req, res) => {
  res.status(400).send("hello from simple server :)");
})

app.post('/api/questions', (req, res) => {
  console.log(req.body);
  return res.json([
    {
      questionId: "1",
      question: "this will be hide?",
    },
    {
      questionId: '21234',
      question: 'a question returned before this question is hidden because it is existed in the interview questions',
    },
    {
      questionId: '3sdf',
      question: 'erwer salary?'
    },
    {
      questionId: '412',
      question: 'What is RwerwfeactJS?'
    },
    {
      questionId: '524',
      question: 'What is sdfRedux?'
    },
    {
      questionId: '623',
      question: 'What is werJ1?'
    },
    {
      questionId: '754',
      question: 'How to increafwese performance?'
    },
    {
      questionId: '83',
      question: 'How to increweqase security?'
    },
    {
      questionId: '9654',
      question: 'explain about React lifecycle?'
    },
    {
      questionId: '1340',
      question: 'What is RefwwactJS?'
    }
  ])
})

app.get("/api/applicant/reference/:id", (req, res) => {
  console.log("init");
  res.json({
    applicantInfo: {
      id: req.params.id,
      firstName: "Minh",
      lastName: "Nguyen",
      age: "23",
      email: "minhnguyen@gmail.com",
      phone: "324123",
      address: "Minh Khai - Hanoi",
      interviewTime: "4/13/2022-12:00",
      notes: "",
      experiences: [
        {
          id: "1",
          position: "Software Engineer",
          durations: "1 year",
        },
      ],
      applyPosition: [
        {
          id: "1",
          position: "Software Engineer",
          level: "Junior",
        },
        {
          id: "2",
          position: "React JS",
          level: "J2",
        },
      ],
    },
    interviewQuestions: [
      {
        type: "Basic",
        questions: [
          {
            questionId: "1",
            question: "sdfdvbvcxb?",
          },
          {
            questionId: "2",
            question: "What is dsfasdfqwer age?",
          },
          {
            questionId: "3",
            question: "Expecteasdfwerd salary?",
          },
        ],
      },
      {
        type: "React J1",
        questions: [
          {
            questionId: "4",
            question: "What is ReacqwerqwertJS?",
          },
          {
            questionId: "5",
            question: "What is sdfqweRedux?",
          },
          {
            questionId: "6",
            question: "What qweris J1?",
          },
          {
            questionId: "9",
            question: "explain abfsfqewout React lifecycle?",
          },
        ],
      },
      {
        type: "Advanced",
        questions: [
          {
            questionId: "7",
            question: "How to increaseqwer performance?",
          },
          {
            questionId: "8",
            question: "How to incrfgwqerease security?",
          },
        ],
      },
    ],
  });
});

app.post("/api/interview-question", (req, res) => {
  console.log(req.body);
  if(req.body.email === 'denvl585@gmail.com') {
    res.status(409).send("Email is existed in database");
    return;
  }
  res.json({
    applicantInfo: req.body,
    interviewQuestions: [
      {
        type: "Basic",
        questions: [
          {
            questionId: "1",
            question: "sdfdvbvcxb?",
          },
          {
            questionId: "2",
            question: "What is dsfasdfqwer age?",
          },
          {
            questionId: "3",
            question: "Expecteasdfwerd salary?",
          },
        ],
      },
      {
        type: "React J1",
        questions: [
          {
            questionId: "4",
            question: "What is ReacqwerqwertJS?",
          },
          {
            questionId: "5",
            question: "What is sdfqweRedux?",
          },
          {
            questionId: "6",
            question: "What qweris J1?",
          },
          {
            questionId: "9",
            question: "explain abfsfqewout React lifecycle?",
          },
        ],
      },
      {
        type: "Advanced",
        questions: [
          {
            questionId: "7",
            question: "How to increaseqwer performance?",
          },
          {
            questionId: "8",
            question: "How to incrfgwqerease security?",
          },
        ],
      },
    ],
  });
});

app.post("/api/applicant", (req, res) => {
  console.log(req.body.interviewQuestions[2].questions);
  res.status("200").json({
    applicantId: "1232asdqS12"
  });
});

app.post("/api/referenceEvaluate", (req, res) => {
  console.log(req.body);
  res.json({
    totalQuestions: 12,
    passedQuestions: 8,
    failedQuestions: 4,
    passedPercentage: "60%",
    result: "passed",
    salary: 10000000,
  });
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
