import { GooglelinkFile, UploadFile, User } from "../types/common"
import { PRODUCTTYPE } from '../types/enumeration';

// id = 1
export const corporate_workflow_interview_video_steps = [
  {
    id: 1,
    name: 'Project Details'
  },
  {
    id: 2,
    name: 'Interview Video'
  },
  // {
  //   id: 3,
  //   name: 'Branding
  // },
  {
    id: 4,
    name: 'Pre-Production'
  },
  {
    id: 5,
    name: 'Post-Production'
  },
]

// id = 2
export const corporate_workflow_branding_steps = [
  {
    id: 1,
    name: 'Project Details'
  },
  // {
  //   id: 2,
  //   name: 'Interview Video'
  // },
  {
    id: 3,
    name: 'Branding'
  },
  {
    id: 4,
    name: 'Pre-Production'
  },
  {
    id: 5,
    name: 'Post-Production'
  },
]

// id = 3
export const commercial_branded_vidoes_steps = [
  {
    id: 1,
    name: 'Project Details'
  },
  {
    id: 6,
    name: 'Concept Development'
  },
  {
    id: 7,
    name: 'Feedback Loop'
  },
  {
    id: 4,
    name: 'Pre-Production'
  },
  {
    id: 5,
    name: 'Post-Production'
  },
]

// id = 4
export const events_live_stream_steps = [
  {
    id: 1,
    name: 'Project Details'
  },
  {
    id: 5,
    name: 'Post-Production'
  },
]

// id = 5
export const motion_graphics_steps = [
  {
    id: 1,
    name: 'Project Details'
  },
  {
    id: 8,
    name: 'Story Conceptualisation'
  },
  {
    id: 9,
    name: 'Feedback Loop'
  },
  {
    id: 5,
    name: 'Post-Production'
  },
]

export const project_detail_jr_form_list: UploadFile[] = [
  {
    fileId: '1',
    filename: 'JR Form September 2023 (Version 2)',
    fileUploadTime: new Date("22 September 2023"),
  },
  {
    fileId: '2',
    filename: 'JR Form September 2023 (Version 1)',
    fileUploadTime: new Date("2 August 2023"),
  }
]

export const project_detail_client_brief_list: UploadFile[] = [
  {
    fileId: '3',
    filename: 'Client Brief',
    fileUploadTime: new Date("1 August 2023"),
  },
]

export const profile_questions_attachment_list: UploadFile[] = [
  {
    fileId: '7',
    filename: 'Profile Question Briefing',
    fileUploadTime: new Date("1 August 2023"),
  },
]

export const profile_questions_google_link_list: GooglelinkFile[] = [
  {
    fileId: '8',
    filename: 'Profile Questions',
    googleDocLink: 'Google Document Link'
  },
]

export const concept_development_attachments: UploadFile[] = [
  {
    fileId: '11',
    filename: 'Client Specific Scripts',
    fileUploadTime: new Date("1 August 2023"),
  },
]

export const concept_development_google_links: GooglelinkFile[] = [
  {
    fileId: '12',
    filename: 'Client Specific Scripts',
    googleDocLink: 'Google Document Link'
  },
]

export const pre_production_google_links: GooglelinkFile[] = [
  {
    fileId: '13',
    filename: 'Client Specific Scripts',
    googleDocLink: 'Google Document Link'
  },
]

export const mock_attachment_list: UploadFile[] = [
  {
    fileId: '99',
    filename: 'Mock attachment',
    fileUploadTime: new Date("1 August 2023"),
  },
]

export const mock_googlelink_list: GooglelinkFile[] = [
  {
    fileId: '98',
    filename: 'Mock Google link',
    googleDocLink: 'Google Document Link'
  },
]

export const mock_vimeolink_list: GooglelinkFile[] = [
  {
    fileId: '101',
    filename: 'Mock Vimeo link',
    googleDocLink: 'Vimeo Link'
  },
]

export const script_list: UploadFile[] = [
  {
    fileId: '9',
    filename: 'Script FINAL Version',
    fileUploadTime: new Date("1 October 2023"),
  },
  {
    fileId: '10',
    filename: 'Proposed Script by Vicinity',
    fileUploadTime: new Date("29 September 2023"),
  },
]

export const post_production_attachment: UploadFile[] = [
  {
    fileId: '13',
    filename: 'Video V2',
    fileUploadTime: new Date("18 October 2023"),
  },
  {
    fileId: '14',
    filename: 'Video V1',
    fileUploadTime: new Date("16 October 2023"),
  },
]

export const post_production_product: UploadFile[] = [
  {
    fileId: '15',
    filename: 'Video FINAL VERSION',
    fileUploadTime: new Date("30 October 2023"),
  },
]

export const pre_production_proposed_talents: UploadFile[] = [
  {
    fileId: '16',
    filename: `Vicinity's Proposed Talents`,
    fileUploadTime: new Date("8 October 2023"),
  },
]

export const pre_production_call_sheets: UploadFile[] = [
  {
    fileId: '17',
    filename: `Call Sheet to be approved`,
    fileUploadTime: new Date("1 October 2023"),
  },
]

export const security_clearance_forms: UploadFile[] = [
  {
    fileId: '18',
    filename: `Security Clearance Form`,
    fileUploadTime: new Date("3 October 2023"),
  },
]

export const assigned_members: User[] = [
  {
    uguid: 'f01875a0-71b1-4a9d-8cb9-a6cf877e770f',
    username: 'Yoshua Tan',
    firstname: 'Yoshua',
    lastname: 'Tan',
    position: 'Team Lead',
  },
  {
    uguid: '577adce0-c4da-4e52-9ed9-bb124d2ca864',
    username: 'Michelle Susanto',
    firstname: 'Michelle',
    lastname: 'Susanto',
    position: 'Project Manager',
  },
  {
    uguid: '4479bc7a-b2d6-44d5-a390-67295580b86d',
    username: 'Yaputra He',
    firstname: 'Yaputra',
    lastname: 'He',
    position: 'Writer',
  },
  {
    uguid: 'e5e18f85-2510-41a0-8e75-4e005a681514',
    username: 'Sammy Smith',
    firstname: 'Sammy',
    lastname: 'Smith',
    position: 'Director',
  }
]

export const projectData = [
  {
    projID: 1,
    quotationID: "QU-1234",
    projName: "Project A",
    custName: "John Doe",
    custEmail: "jd@gmail.com",
    company: "Company A",
    defaultPassword: "7AZKy5*",
    productType: PRODUCTTYPE.COPORATE_VIDEO_BRANDING,
    pic: "Amanda Koh",
    dueDate: "08/12/2023",
    projStatus: "Pending",
  },
  {
    projID: 2,
    quotationID: "QU-5678",
    projName: "Project B",
    custName: "Sam Chui",
    custEmail: "sc@gmail.com",
    company: "Company B",
    defaultPassword: "7AZKy5*",
    productType: PRODUCTTYPE.COPORATE_VIDEO_INTERVIEW,
    pic: "Rachel Young",
    dueDate: "20/12/2023",
    projStatus: "In Progress",
  },
  {
    projID: 3,
    quotationID: "QU-1009",
    projName: "Project F",
    custName: "Sally Kim",
    custEmail: "sk@gmail.com",
    company: "Company C",
    defaultPassword: "7AZKy5*",
    productType: PRODUCTTYPE.COMMERICAL_BRANDED_VIDEO,
    pic: "Yusuf Joe",
    dueDate: "20/08/2024",
    projStatus: "Completed",
  },
  {
    projID: 4,
    quotationID: "QU-1019",
    projName: "Project E",
    custName: "Sally Kim",
    custEmail: "sk@gmail.com",
    company: "Company C",
    defaultPassword: "7AZKy5*",
    productType: PRODUCTTYPE.EVENTS_LIVE_STREAM,
    pic: "Yusuf Joe",
    dueDate: "20/08/2024",
    projStatus: "Completed",
  },
  {
    projID: 5,
    quotationID: "QU-1209",
    projName: "Project T",
    custName: "Sally Kim",
    custEmail: "sk@gmail.com",
    company: "Company C",
    defaultPassword: "7AZKy5*",
    productType: PRODUCTTYPE.MOTION_GRAPHICS,
    pic: "Yusuf Joe",
    dueDate: "20/08/2023",
    projStatus: "Completed",
  },
];

export const userProjectData = [
  {
    projID: 1,
    dueDate: "20/08/2023",
    projStatus: "In Progress",
    productType: PRODUCTTYPE.COMMERICAL_BRANDED_VIDEO
  },
  {
    projID: 2,
    dueDate: "20/12/2024",
    projStatus: "In Progress",
    productType: PRODUCTTYPE.EVENTS_LIVE_STREAM
  },
  {
    projID: 3,
    dueDate: "20/08/2023",
    projStatus: "Completed",
    productType: PRODUCTTYPE.MOTION_GRAPHICS
  },
  {
    projID: 4,
    dueDate: "20/09/2023",
    projStatus: "Completed",
    productType: PRODUCTTYPE.COMMERICAL_BRANDED_VIDEO
  },
  {
    projID: 5,
    dueDate: "20/3/2024",
    projStatus: "In Progress",
    productType: PRODUCTTYPE.COPORATE_VIDEO_BRANDING
  },
  {
    projID: 6,
    dueDate: "18/12/2023",
    projStatus: "In Progress",
    productType: PRODUCTTYPE.COPORATE_VIDEO_INTERVIEW
  },
  {
    projID: 7,
    dueDate: "20/10/2024",
    projStatus: "Pending",
    productType: PRODUCTTYPE.EVENTS_LIVE_STREAM
  },
];

export const teamMemberData = [
  {
    projID: 1,
    tmID: 1,
    name: "Yoshua Tan",
    position: "Team Lead",
    linkedin: "sample-link",
    porfolio: "sample-link",
  },
  {
    projID: 1,
    tmID: 2,
    name: "Michelle Susanto",
    position: "Project Manager",
    linkedin: "sample-link",
    porfolio: "sample-link",
  },
  {
    projID: 1,
    tmID: 3,
    name: "Yaputra He",
    position: "Writer",
    linkedin: "sample-link",
    porfolio: "sample-link",
  },
  {
    projID: 1,
    tmID: 4,
    name: "Sammy Smith",
    position: "Director",
    linkedin: "sample-link",
    porfolio: "sample-link",
  },
  {
    projID: 2,
    tmID: 5,
    name: "Jay Gray",
    position: "Team Lead",
    linkedin: "sample-link",
    porfolio: "sample-link",
  },
  {
    projID: 2,
    tmID: 6,
    name: "Carlos Logan",
    position: "Project Manager",
    linkedin: "sample-link",
    porfolio: "sample-link",
  },
  {
    projID: 2,
    tmID: 7,
    name: "Kathleen Bartlett",
    position: "Writer",
    linkedin: "sample-link",
    porfolio: "sample-link",
  },
  {
    projID: 2,
    tmID: 8,
    name: "Faiza Cline",
    position: "Director",
    linkedin: "sample-link",
    porfolio: "sample-link",
  },
];