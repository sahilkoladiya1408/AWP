var myApp = angular.module("resumeMod", []);

myApp.controller("resumeController", function ($scope) {
  $scope.name = "SAHIL KOLADIYA";
  $scope.email = "sahilkoladiya1408@gmail.com";
  $scope.phone = 79990011014;
  $scope.education = [
    {
      school: "Government Engineering College, Gandhinagar",
      year: "2020-2024",
      course: "B.E Information Technology",
      other: "CPI : 9.76/10",
    },
    {
      school: "Mauni International School",
      year: "2018-2020",
      course: "High School",
      other: "Percentage: 90.14% in 10th, 80.12% in 12th",
    },
  ];
  $scope.skills = [
    {
      type: "Programming Language",
      skill: ["C" , "JAVA"],
    },
    {
      type: "Web Development",
      skill: [
        "HTML",
        "CSS",
        "JavaScript",
        "ReactJs",
        "NodeJS",
        "ExpressJS",
        "AngularJS",
      ],
    },
    {
      type: "Database",
      skill: ["MongoDB"],
    },
  ];
  $scope.projects = [
    {
      title: "Wather API",
      desc: "This is a real time weather application. It provaied a realtime wather information according a loacation.",
    },
    {
      title: "Keep App",
      desc: "This is a clone of Google keep app.",
    },
  ];
});