/**
 * Profile Data Structure
 * Centralized personal information for the entire site
 * Designed to be extensible for future additions
 */

// ===== Type Definitions =====

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  youtube?: string;
  email?: string;
  website?: string;
  // Future: Add more platforms as needed
  // medium?: string;
  // devto?: string;
  // mastodon?: string;
}

export interface WorkExperience {
  company: string;
  position: {
    en: string;
    'zh-tw': string;
  };
  location: string;
  startDate: string; // Format: YYYY-MM
  endDate?: string; // undefined means "Present"
  description: {
    en: string[];
    'zh-tw': string[];
  };
  technologies?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  issueDate: string; // Format: YYYY-MM
  expiryDate?: string; // undefined means no expiry
  credentialId?: string;
  credentialUrl?: string; // Online verification link (e.g., Credly)
  certificateUrl?: string; // PDF certificate file path
}

export interface Speaking {
  title: {
    en: string;
    'zh-tw': string;
  };
  event: string;
  date: string; // Format: YYYY-MM-DD
  location: string;
  description?: {
    en: string;
    'zh-tw': string;
  };
  slidesUrl?: string;
  videoUrl?: string;
  // Future: Add more fields
  // language?: string;
  // attendees?: number;
}

export interface Education {
  school: string;
  degree: {
    en: string;
    'zh-tw': string;
  };
  field: {
    en: string;
    'zh-tw': string;
  };
  startDate: string;
  endDate?: string;
  gpa?: string;
  achievements?: {
    en: string[];
    'zh-tw': string[];
  };
}

export interface SkillCategory {
  name: {
    en: string;
    'zh-tw': string;
  };
  skills: string[];
}

export interface Profile {
  // Basic Info
  name: string;
  avatar?: string;
  title: {
    en: string;
    'zh-tw': string;
  };
  bio: {
    en: string;
    'zh-tw': string;
  };
  location: string;
  
  // Social & Contact
  social: SocialLinks;
  
  // Professional Info
  experience: WorkExperience[];
  certifications: Certification[];
  speaking: Speaking[];
  education: Education[];
  skills: SkillCategory[];
  
  // Future Expansions (commented for reference)
  // publications?: Publication[];
  // awards?: Award[];
  // volunteering?: Volunteering[];
  // languages?: SpokenLanguage[];
}

// ===== Profile Data =====

export const profile: Profile = {
  name: 'Tygrus Tsai',
  avatar: '/avatar.jpg',
  title: {
    en: 'Cybersecurity Expert & Full-Stack Developer',
    'zh-tw': '資安專家 & 全端開發者',
  },
  bio: {
    en: `Combining cybersecurity expertise with full-stack development for secure systems. 
    Focused on software development and cybersecurity, holding multiple international certifications. 
    Dedicated to integrating security into the development process to create safer and more stable software systems.`,
    'zh-tw': `結合資安專業與全端開發，打造安全的軟體系統。
    專注於軟體開發與資訊安全，持有多項國際認證。
    致力於將安全整合至開發流程，打造更安全穩定的軟體系統。`,
  },
  location: 'Taipei, Taiwan',

  social: {
    github: 'https://github.com/Lung-Yu',
    linkedin: 'https://www.linkedin.com/in/lung-yu-tsai-633865100/',
    email: 'workfile975@gmail.com',
    website: 'https://lung-yu.github.io/',
  },

  experience: [
    {
      company: 'Cloudforce Co., Ltd.',
      position: {
        en: 'Technical Manager of Technical Development Department II',
        'zh-tw': '技術開發二部 技術經理',
      },
      location: 'Taipei, Taiwan',
      startDate: '2025-04',
      description: {
        en: [
          'Product Owner & Technical Leadership',
          'Secure Development Standards',
        ],
        'zh-tw': [
          '產品負責人與技術領導',
          '安全開發標準制定',
        ],
      },
      technologies: ['DevSecOps', 'Security Architecture', 'Team Leadership'],
    },
    {
      company: 'AINetwork',
      position: {
        en: 'Teacher (Part-time)',
        'zh-tw': '講師（兼職）',
      },
      location: 'Taiwan',
      startDate: '2025-04',
      description: {
        en: [
          'Technical Training',
          'Curriculum Development',
        ],
        'zh-tw': [
          '技術培訓',
          '課程開發',
        ],
      },
      technologies: ['Technical Training', 'AI', 'Security'],
    },
    {
      company: 'Digicentre Co., Ltd.',
      position: {
        en: 'Deputy Manager of Technical Development Department II',
        'zh-tw': '技術開發二部 副理',
      },
      location: 'Taipei, Taiwan',
      startDate: '2024-08',
      endDate: '2025-03',
      description: {
        en: [
          'Product Owner & Technical Leadership',
          'Secure Development Standards',
        ],
        'zh-tw': [
          '產品負責人與技術領導',
          '安全開發標準制定',
        ],
      },
      technologies: ['Product Management', 'DevSecOps', 'Team Leadership'],
    },
    {
      company: 'Digicentre Co., Ltd.',
      position: {
        en: 'Deputy Manager of Software Development Security Department',
        'zh-tw': '軟體開發安全部 副理',
      },
      location: 'Taipei, Taiwan',
      startDate: '2021-09',
      endDate: '2024-07',
      description: {
        en: [
          'DevSecOps Process Optimization',
          'Security Tools Integration',
        ],
        'zh-tw': [
          'DevSecOps 流程優化',
          '安全工具整合',
        ],
      },
      technologies: ['DevSecOps', 'CI/CD', 'Security Automation'],
    },
    {
      company: 'PwC Taiwan',
      position: {
        en: 'Security Consultant',
        'zh-tw': '資安顧問',
      },
      location: 'Taipei, Taiwan',
      startDate: '2020-09',
      endDate: '2021-09',
      description: {
        en: [
          'Financial sector security assessment',
          'Enterprise security testing',
          'Security Testing & Automation',
          'Security Consulting & Compliance',
        ],
        'zh-tw': [
          '金融業資安評估',
          '企業安全測試',
          '安全測試與自動化',
          '資安諮詢與合規',
        ],
      },
      technologies: ['Penetration Testing', 'Security Assessment', 'Compliance'],
    },
  ],

  certifications: [
    {
      name: 'CISSP',
      issuer: 'ISC2',
      issueDate: '2022-11',
      expiryDate: '2025-10',
      credentialUrl: 'https://www.credly.com/badges/37b36bbe-cf5b-47fe-b697-71cca23bba6c',
      certificateUrl: '/certificates/isc2/isc_cissp.pdf',
    },
    {
      name: 'CSSLP',
      issuer: 'ISC2',
      issueDate: '2024-06',
      expiryDate: '2027-05',
      credentialUrl: 'https://www.credly.com/badges/4eab1fd1-b3ed-4989-b6e6-5189e00822ab',
      certificateUrl: '/certificates/isc2/isc_csslp.pdf',
    },
    {
      name: 'ISO 27001:2022 Lead Auditor',
      issuer: 'BSI',
      issueDate: '2023-11',
      certificateUrl: '/certificates/iso/ISO_27001_2022_LA.pdf',
    },
    {
      name: 'CEH (Certified Ethical Hacker)',
      issuer: 'EC-Council',
      issueDate: '2020-01',
      certificateUrl: '/certificates/ec-council/ceh.pdf',
    },
    {
      name: 'Google Cybersecurity',
      issuer: 'Google',
      issueDate: '2023-01',
      // No PDF available
    },
    {
      name: 'RHCVA',
      issuer: 'Red Hat',
      issueDate: '2018-01',
      certificateUrl: '/certificates/red-hat/rhcva.pdf',
    },
    {
      name: 'MCSD: Web Applications',
      issuer: 'Microsoft',
      issueDate: '2017-01',
      certificateUrl: '/certificates/microsoft/mcsd-web-applications.pdf',
    },
    {
      name: 'OCPJWCD',
      issuer: 'Oracle',
      issueDate: '2016-01',
      certificateUrl: '/certificates/oracle/ocpjwcd.pdf',
    },
    {
      name: 'OCJP',
      issuer: 'Oracle',
      issueDate: '2015-01',
      // Only image available, no PDF
    },
  ],

  speaking: [
    // 2025
    {
      title: {
        en: 'AI Era Team Management Challenges and Strategies',
        'zh-tw': 'AI 時代團隊管理的挑戰與策略',
      },
      event: 'Dev Conference 2025',
      date: '2025-10-14',
      location: '6F 603+604 Conference Room',
      description: {
        en: 'Discussing leadership, team management, and AI impact on software development',
        'zh-tw': '探討領導力、團隊管理與 AI 對軟體開發的影響',
      },
      slidesUrl: 'https://hwdc.ithome.com.tw/2025/session-page/4017',
    },
    {
      title: {
        en: 'Agile Adoption of DevSecOps and Automated Security Testing',
        'zh-tw': '敏捷導入 DevSecOps 與自動化安全測試',
      },
      event: 'CyberRes 2025 Taiwan Security Conference',
      date: '2025-04-17',
      location: 'Nangang Exhibition Center',
      description: {
        en: 'DevSecOps, automated security testing, and agile development practices',
        'zh-tw': 'DevSecOps、自動化安全測試與敏捷開發實務',
      },
      slidesUrl: 'https://cybersec.ithome.com.tw/2025/session-page/3607',
    },
    // 2024
    {
      title: {
        en: 'Common Software and Enterprise Security Threat Analysis',
        'zh-tw': '常見軟體與企業安全威脅分析',
      },
      event: 'OpenText & Cloudforce Joint Technology Sharing Session',
      date: '2024-09-25',
      location: 'Taiwan',
    },
    {
      title: {
        en: 'DevSecOps and AI: Challenges and Opportunities of a Double-Edged Sword',
        'zh-tw': 'DevSecOps 與 AI：雙面刃的挑戰與機會',
      },
      event: 'CISA Chinese Software Association',
      date: '2024-08-30',
      location: 'Live Stream',
      description: {
        en: 'Exploring DevSecOps, AI, and secure development practices',
        'zh-tw': '探討 DevSecOps、AI 與安全開發實務',
      },
    },
    {
      title: {
        en: 'DevOps + Sec: Powerful Ally or Disruptive Force?',
        'zh-tw': 'DevOps + Sec：強力盟友還是破壞力量？',
      },
      event: 'DevOpsDays Taipei 2024',
      date: '2024-07-10',
      location: 'Bottle Cap Factory',
      description: {
        en: 'DevOps, security, and development process integration',
        'zh-tw': 'DevOps、資安與開發流程整合',
      },
    },
    // 2023
    {
      title: {
        en: 'The Journey of Upgrading Enterprise Security Development Processes',
        'zh-tw': '企業安全開發流程升級之旅',
      },
      event: 'CyberRes 2023 Taiwan Cybersecurity Conference',
      date: '2023-05-09',
      location: 'Nangang Exhibition Center',
      description: {
        en: 'Secure development, process optimization, and enterprise practice',
        'zh-tw': '安全開發、流程優化與企業實務',
      },
      slidesUrl: 'https://cyber.ithome.com.tw/2023/session-page/1858',
    },
    {
      title: {
        en: 'Stories of Auditors and Auditees',
        'zh-tw': '稽核員與受稽者的故事',
      },
      event: 'BSI & KPMG & Digicentre Joint Technology Sharing Session',
      date: '2023-09-15',
      location: 'Taiwan',
      description: {
        en: 'Security audit, compliance, and audit experience sharing',
        'zh-tw': '資安稽核、合規與稽核經驗分享',
      },
      slidesUrl: 'https://www.ithome.com.tw/pr/159495',
    },
    {
      title: {
        en: 'Building Secure Software Starts with Effective Communication',
        'zh-tw': '建構安全軟體從有效溝通開始',
      },
      event: 'Digicentre Hacker Talk Forum',
      date: '2023-03-18',
      location: 'Taiwan',
      description: {
        en: 'Team communication, secure development, and cross-department collaboration',
        'zh-tw': '團隊溝通、安全開發與跨部門協作',
      },
      slidesUrl: 'https://www.ithome.com.tw/pr/156206',
    },
  ],

  education: [
    {
      school: 'National Yunlin University of Science and Technology',
      degree: {
        en: "Master's Degree",
        'zh-tw': '碩士',
      },
      field: {
        en: 'Computer Science and Information Engineering',
        'zh-tw': '資訊工程學系',
      },
      startDate: '2016',
      endDate: '2019',
      achievements: {
        en: [
          'Research areas: AI applications, image processing, audio recognition',
          'Thesis project: Baby cry detection and emotion recognition system',
          'Applied projects: License plate recognition and document scanning applications',
        ],
        'zh-tw': [
          '研究領域：AI 應用、影像處理、音訊辨識',
          '論文專題：嬰兒哭聲偵測與情緒辨識系統',
          '應用專案：車牌辨識與文件掃描應用',
        ],
      },
    },
    {
      school: 'Kun Shan University',
      degree: {
        en: "Bachelor's Degree",
        'zh-tw': '學士',
      },
      field: {
        en: 'Computer Science and Information Engineering',
        'zh-tw': '資訊工程學系',
      },
      startDate: '2012',
      endDate: '2016',
      achievements: {
        en: [
          'Core focus: System development, mobile application design',
          'Award: Excellence Award in National College Smart Electronics Integration Competition',
          'Applied projects: Cloud file management system, IoT indoor positioning applications',
        ],
        'zh-tw': [
          '核心專長：系統開發、行動應用設計',
          '獲獎：全國大專院校智慧電子整合競賽 優等獎',
          '應用專案：雲端檔案管理系統、IoT 室內定位應用',
        ],
      },
    },
  ],

  skills: [
    {
      name: {
        en: 'Security',
        'zh-tw': '資訊安全',
      },
      skills: [
        'Security Governance',
        'Compliance Management',
        'Penetration Testing',
        'Vulnerability Assessment',
        'Incident Response',
        'Security Architecture',
        'Risk Management',
        'Security Auditing',
      ],
    },
    {
      name: {
        en: 'Development',
        'zh-tw': '軟體開發',
      },
      skills: [
        'Full-Stack Development',
        'RESTful API Design',
        'Database Management',
        'Cloud Architecture',
        'On-premises Architecture',
        'Containerization',
        'CI/CD Pipeline',
      ],
    },
    {
      name: {
        en: 'Management & Communication',
        'zh-tw': '管理與溝通',
      },
      skills: [
        'Team Leadership',
        'Technical Training',
        'Project Management',
        'Cross-team Collaboration',
        'Requirements Analysis',
        'Technical Documentation',
        'Client Communication',
        'Public Speaking',
      ],
    },
  ],
};
