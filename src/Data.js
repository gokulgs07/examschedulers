export const formdata = {
  branchanddep: [
    {
      branch: "B.E",
      deps: ["ECE", "EEE", "MECH"],
    },
    {
      branch: "B.TECH",
      deps: ["IT", "CSE"],
    },
  ],
  semester: {
    EEE: [
      {
        exam: "Internals",
        subjects: {
          subjectcode: [
            "19QSA011",
            "19HSM002",
            "19ASR008",
            "19CTR105",
            "19MNS202",
          ],
          subjectname: [
            "Measurement and Instrumentation",
            "Electrical Machines",
            "Power Systems",
            "Microcontrollers",
            "Control Systems",
          ],
        },
        labs: {
          labcode: ["19QSA011", "19HSM002"],
          labname: ["Measurement and Instrumentation", "Electrical Machines"],
        },
      },

      {
        exam: "Model",
        subjects: [
          {
            code: "19QSA011",
            name: "Measurement and Instrumentation",
            date: "",
            isNoon: "",
          },
          {
            code: "19HSM002",
            name: "Electrical Machines",
            isNoon: "",
            date: "",
          },
          {
            code: "19ASR008",
            name: "Power Systems",
            isNoon: "",
            date: "",
          },
          {
            code: "19CTR105",
            name: "Microcontrollers",
            isNoon: "",
            date: "",
          },
          {
            code: "19MNS202",
            name: "Control Systems",
            isNoon: "",
            date: "",
          },
        ],
        labs: [
          {
            code: "19QSA011",
            name: "Measurement and Instrumentation",
            isNoon: "",
            date: "",
          },
          {
            code: "19HSM002",
            name: "Electrical Machines",
            isNoon: "",
            date: "",
          },
        ],
      },
    ],
  },
};
