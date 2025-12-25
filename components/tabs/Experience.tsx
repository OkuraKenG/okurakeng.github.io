import React from 'react';
import { View, Text } from 'react-native';
import { ListRenderer } from './lists/ListRenderer';
import { ListType } from '@/types/ListTypes';

export const Experience = () => {
  const experiences: ListType[] = [
    {
      experience: {
        location: 'IBM',
        role: 'Software Development Intern',
        link: 'https://www.ibm.com/case-studies/cio-office-turbonomic',
      },
      dates: [
        {
          start: 'May 2025',
          end: 'Sept. 2025',
        },
        {
          start: 'Sept. 2025',
          end: 'Present',
        },
      ],
      description: 'Full stack developer for an internal project under F&O/CIO.',
    },
    {
      experience: {
        location: 'Blue CoLab',
        role: 'Senior Student Software Engineer',
        link: 'https://bluecolab.pace.edu/',
      },
      dates: [
        {
          start: 'January 2025',
          end: 'Present',
        },
      ],
      description:
        "Contributed to various projects, including app development, kiosk development, data analysis, and backend APIs. Playing a small part in helping you know what's in your water.",
    },
    {
      experience: {
        location: 'Phormulary',
        role: 'Full Stack Developer',
        link: 'https://www.phormulary.com/',
      },
      dates: [
        {
          start: 'March 2024',
          end: 'October 2024',
        },
      ],
      description:
        'Worked with a team to develop a full stack pharmaceutical database web application. Includes custom features to export to PDF for offline backups.',
    },
    {
      experience: {
        location: 'Iona University Science and Technology Entry Program (STEP)',
        role: 'Technical Instructor',
        link: 'https://www.iona.edu/admissions-financial-aid/high-school-student-programs-iona-university/science-and-technology-entry',
      },
      dates: [
        {
          start: 'July 2023',
          end: 'May 2025',
        },
      ],
      description:
        'Lead and instruct introductory classes in Java and data analytics in Python to approximately 6 to 10 high school students per class. Created lesson plans and exercises that provided students with a general knowledge of Java and data analysis in Python by the end of the semester.',
    },
    {
      experience: {
        location: 'Pace University Learning Commons',
        role: 'Computer Science Content Tutor',
        link: 'https://www.pace.edu/learning-commons',
      },
      dates: [
        {
          start: 'May 2022',
          end: 'May 2024',
        },
      ],
      description:
        'Promoted developing students’ own independence for success in college through sessions in questions and responses. Tutored computer science students in concepts and application of Python, Java, C, and web design to assignments, projects, and exam preparation.',
    },
  ];

  return (
    <View>
      <Text className="text-lg text-white">A few places I&apos;ve worked at...</Text>
      <ListRenderer data={experiences} />
    </View>
  );
};
