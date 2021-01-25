export const newCustomers = {
    data: [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
        { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C', yAxisID: 'y-axis-1' }
      ],
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          // We use this empty structure as a placeholder for dynamic theming.
          xAxes: [{}],
          yAxes: [
            {
              id: 'y-axis-0',
              position: 'left',
            },
            {
              id: 'y-axis-1',
              position: 'right',
              gridLines: {
                color: 'rgba(255,0,0,0.3)',
              },
              ticks: {
                fontColor: 'red',
              }
            }
          ]
        },
        annotation: {
          annotations: [
            {
              type: 'line',
              mode: 'vertical',
              scaleID: 'x-axis-0',
              value: 'March',
              borderColor: 'orange',
              borderWidth: 2,
              label: {
                enabled: true,
                fontColor: 'orange',
                content: 'LineAnno'
              }
            },
          ],
        },
      }
}
export const newOrders = {
    options : {
        responsive: true,
        maintainAspectRatio: false
      },
      labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
       data:  [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
      ]
}
export const skillsRate = {
  options: {
    responsive: true,
    maintainAspectRatio: false
  },
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  
  data: [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
  ]
}

export const projects = [
  {
    name: "Tailwind",
    startDate: "16/12/2020",
    dueDate: "20/12/2020",
    status: "pending",
    assign: "Ahmed Abbas",
  },
  {
    name: "Angular",
    startDate: "1/11/2020",
    dueDate: "31/12/2020",
    status: "pending",
    assign: "Ahmed Mohamed",
  },
  {
    name: "Reactjs",
    startDate: "1/12/2020",
    dueDate: "10/12/2020",
    status: "released",
    assign: "Ahmed Sobh",
  },
  {
    name: "React Native",
    startDate: "10/12/2020",
    dueDate: "15/12/2020",
    status: "review",
    assign: "Ahmed Abbas",
  },
  {
    name: "Typescript",
    startDate: "10/12/2020",
    dueDate: "20/12/2020",
    status: "comming soon",
    assign: "Ahmed Mohamed",
  },
  {
    name: "Flutter",
    startDate: "13/12/2020",
    dueDate: "16/12/2020",
    status: "released",
    assign: "Ahmed Sobh",
  },
  {
    name: "Nextjs",
    startDate: "13/12/2020",
    dueDate: "16/12/2020",
    status: "pending",
    assign: "Ahmed Abbas",
  }
];