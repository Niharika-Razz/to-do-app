export const PROJECTS = [
  "Freelance Project",
  "SBI Outsource",
  "HPCL Project 1",
];

export const TASK_STATUS = {
  TO_DO: "To Do",
  IN_PROGRSS: "In Progress",
  IN_REVIEW: "In-Review",
  COMPLETED: "Completed",
};

export const TASK_STATUS_STYLES = {
  [TASK_STATUS.TO_DO]: "to-do-badge",
  [TASK_STATUS.IN_PROGRSS]: "in-progress-badge",
  [TASK_STATUS.IN_REVIEW]: "in-review-badge",
  [TASK_STATUS.COMPLETED]: "completed-badge",
};

export const SAMPLE_TASKS = {
  [TASK_STATUS.TO_DO]: [
    {
      id: 1,
      name: "sample to do task 1",
      startDate: "07-04-2023",
      deadline: "12-21-2023",
      status: [TASK_STATUS.TO_DO],
    },
    {
      id: 2,
      name: "sample to do task 2",
      startDate: "07-05-2023",
      deadline: "12-01-2023",
      status: [TASK_STATUS.TO_DO],
    },
  ],
  [TASK_STATUS.IN_PROGRSS]: [
    {
      id: 2,
      name: "sample in progress task 1",
      startDate: "07-04-2023",
      deadline: "12-21-2023",
      status: [TASK_STATUS.IN_PROGRSS],
    },
  ],
};
