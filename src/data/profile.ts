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
  credentialUrl?: string;
  badgeUrl?: string; // Image URL for certification badge
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

// ===== Mock Profile Data =====

export const profile: Profile = {
  name: 'Tygrus Tsai',
  avatar: '/avatar.jpg',
  title: {
    en: 'Security Researcher & Full-Stack Developer',
    'zh-tw': '資安研究員 & 全端開發者',
  },
  bio: {
    en: `Passionate security researcher and developer with 5+ years of experience in penetration testing, 
    secure application development, and DevSecOps. I love exploring vulnerabilities, building secure 
    systems, and sharing knowledge with the community through talks and technical articles.`,
    'zh-tw': `熱衷於資安研究與開發，擁有超過 5 年的滲透測試、安全應用程式開發及 DevSecOps 經驗。
    喜歡探索漏洞、建構安全系統，並透過演講和技術文章與社群分享知識。`,
  },
  location: 'Taipei, Taiwan',

  social: {
    github: 'https://github.com/tygrus',
    linkedin: 'https://linkedin.com/in/tygrus',
    twitter: 'https://twitter.com/tygrus',
    youtube: 'https://youtube.com/@tygrus',
    email: 'tygrus@example.com',
  },

  experience: [
    {
      company: 'SecureTech Inc.',
      position: {
        en: 'Senior Security Engineer',
        'zh-tw': '資深資安工程師',
      },
      location: 'Taipei, Taiwan',
      startDate: '2022-03',
      description: {
        en: [
          'Lead penetration testing engagements for Fortune 500 clients',
          'Developed automated security scanning tools reducing assessment time by 40%',
          'Mentored junior team members and conducted internal security training',
          'Contributed to the company\'s bug bounty program, finding 15+ critical vulnerabilities',
        ],
        'zh-tw': [
          '主導財星 500 大企業客戶的滲透測試專案',
          '開發自動化安全掃描工具，將評估時間縮短 40%',
          '指導初階團隊成員並進行內部資安培訓',
          '參與公司漏洞獎勵計畫，發現 15+ 個重大漏洞',
        ],
      },
      technologies: ['Python', 'Burp Suite', 'Kubernetes', 'AWS', 'Terraform'],
    },
    {
      company: 'TechStartup Co.',
      position: {
        en: 'Full-Stack Developer',
        'zh-tw': '全端開發工程師',
      },
      location: 'Taipei, Taiwan',
      startDate: '2019-06',
      endDate: '2022-02',
      description: {
        en: [
          'Built and maintained microservices architecture handling 1M+ daily requests',
          'Implemented CI/CD pipelines with integrated security scanning',
          'Developed real-time monitoring and alerting systems',
          'Collaborated with security team to implement secure coding practices',
        ],
        'zh-tw': [
          '建構並維護處理每日 100 萬以上請求的微服務架構',
          '實作整合安全掃描的 CI/CD 流程',
          '開發即時監控與告警系統',
          '與資安團隊合作實施安全編碼實踐',
        ],
      },
      technologies: ['TypeScript', 'Node.js', 'React', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    },
    {
      company: 'CyberDefense Corp.',
      position: {
        en: 'Junior Security Analyst',
        'zh-tw': '初階資安分析師',
      },
      location: 'Taipei, Taiwan',
      startDate: '2017-09',
      endDate: '2019-05',
      description: {
        en: [
          'Performed vulnerability assessments and security audits',
          'Monitored SIEM systems and responded to security incidents',
          'Created security documentation and compliance reports',
          'Assisted in developing internal security policies',
        ],
        'zh-tw': [
          '執行弱點評估與安全稽核',
          '監控 SIEM 系統並回應資安事件',
          '撰寫安全文件與合規報告',
          '協助制定內部安全政策',
        ],
      },
      technologies: ['Splunk', 'Nessus', 'Wireshark', 'Linux'],
    },
  ],

  certifications: [
    {
      name: 'OSCP (Offensive Security Certified Professional)',
      issuer: 'Offensive Security',
      issueDate: '2021-06',
      credentialId: 'OS-XXXXX',
      credentialUrl: 'https://www.credential.net/xxxxx',
    },
    {
      name: 'AWS Certified Security - Specialty',
      issuer: 'Amazon Web Services',
      issueDate: '2022-03',
      expiryDate: '2025-03',
      credentialId: 'AWS-SEC-XXXXX',
    },
    {
      name: 'CEH (Certified Ethical Hacker)',
      issuer: 'EC-Council',
      issueDate: '2020-01',
      expiryDate: '2023-01',
      credentialId: 'ECC-CEH-XXXXX',
    },
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      issueDate: '2019-03',
      expiryDate: '2025-03',
      credentialId: 'COMP-SEC-XXXXX',
    },
    {
      name: 'CKA (Certified Kubernetes Administrator)',
      issuer: 'Cloud Native Computing Foundation',
      issueDate: '2023-01',
      expiryDate: '2026-01',
      credentialId: 'CKA-XXXXX',
    },
  ],

  speaking: [
    {
      title: {
        en: 'Breaking and Securing Modern Web Applications',
        'zh-tw': '現代 Web 應用程式的攻擊與防禦',
      },
      event: 'HITCON 2023',
      date: '2023-08-18',
      location: 'Taipei, Taiwan',
      description: {
        en: 'Deep dive into common web vulnerabilities and practical defense strategies',
        'zh-tw': '深入探討常見的 Web 漏洞及實用的防禦策略',
      },
      slidesUrl: 'https://slides.example.com/hitcon2023',
      videoUrl: 'https://youtube.com/watch?v=example',
    },
    {
      title: {
        en: 'DevSecOps: Integrating Security into CI/CD',
        'zh-tw': 'DevSecOps：將安全整合至 CI/CD 流程',
      },
      event: 'COSCUP 2023',
      date: '2023-07-29',
      location: 'Taipei, Taiwan',
      description: {
        en: 'Practical guide to implementing security automation in development pipelines',
        'zh-tw': '在開發流程中實施安全自動化的實用指南',
      },
      slidesUrl: 'https://slides.example.com/coscup2023',
    },
    {
      title: {
        en: 'Container Security Best Practices',
        'zh-tw': '容器安全最佳實踐',
      },
      event: 'Cloud Native Taiwan User Group Meetup',
      date: '2022-11-15',
      location: 'Online',
      description: {
        en: 'Security considerations for containerized applications and Kubernetes environments',
        'zh-tw': '容器化應用程式與 Kubernetes 環境的安全考量',
      },
    },
  ],

  education: [
    {
      school: 'National Taiwan University',
      degree: {
        en: 'Master of Science',
        'zh-tw': '碩士',
      },
      field: {
        en: 'Computer Science - Information Security',
        'zh-tw': '資訊工程學系 - 資訊安全組',
      },
      startDate: '2015-09',
      endDate: '2017-06',
      achievements: {
        en: [
          'Thesis: "Machine Learning Approaches to Network Intrusion Detection"',
          'Graduate Research Assistant at Security Lab',
        ],
        'zh-tw': [
          '論文：「機器學習在網路入侵偵測之應用」',
          '安全實驗室研究助理',
        ],
      },
    },
    {
      school: 'National Cheng Kung University',
      degree: {
        en: 'Bachelor of Science',
        'zh-tw': '學士',
      },
      field: {
        en: 'Computer Science and Information Engineering',
        'zh-tw': '資訊工程學系',
      },
      startDate: '2011-09',
      endDate: '2015-06',
      achievements: {
        en: [
          'Dean\'s List (Top 10%)',
          'CTF Team Member - Ranked Top 5 in Taiwan',
        ],
        'zh-tw': [
          '書卷獎（前 10%）',
          'CTF 校隊成員 - 全台排名前 5',
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
        'Penetration Testing',
        'Vulnerability Assessment',
        'Web Application Security',
        'Network Security',
        'Incident Response',
        'Threat Modeling',
        'SIEM/SOC',
        'Forensics',
      ],
    },
    {
      name: {
        en: 'Programming',
        'zh-tw': '程式語言',
      },
      skills: [
        'Python',
        'TypeScript/JavaScript',
        'Go',
        'Rust',
        'Bash',
        'SQL',
      ],
    },
    {
      name: {
        en: 'Development',
        'zh-tw': '軟體開發',
      },
      skills: [
        'React',
        'Node.js',
        'Next.js',
        'FastAPI',
        'PostgreSQL',
        'Redis',
        'GraphQL',
        'REST APIs',
      ],
    },
    {
      name: {
        en: 'DevOps & Cloud',
        'zh-tw': 'DevOps & 雲端',
      },
      skills: [
        'Docker',
        'Kubernetes',
        'AWS',
        'GCP',
        'Terraform',
        'GitHub Actions',
        'GitLab CI',
        'Prometheus/Grafana',
      ],
    },
    {
      name: {
        en: 'Security Tools',
        'zh-tw': '資安工具',
      },
      skills: [
        'Burp Suite',
        'Nmap',
        'Metasploit',
        'Wireshark',
        'OWASP ZAP',
        'Nessus',
        'Nuclei',
        'ffuf',
      ],
    },
  ],
};
