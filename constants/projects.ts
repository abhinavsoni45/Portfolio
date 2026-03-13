export const projects = [
  {
    title: 'Dukan | All in-One Platform for Jewellers',
    slug: 'dukan',
    tagline:
      'Dukan is a comprehensive platform built with Nest.js, React, and MongoDB, designed to provide a seamless shopping experience for users and efficient management tools for sellers.',
    overview:
      'Backend infrastructure built with Nest.js, providing a robust and scalable foundation for the e-commerce platform. The frontend is built using React and Vite, focusing on performance and smooth navigation. Redux ensures efficient state management for cart operations and product handling, while Tailwind CSS provides a clean and responsive interface optimized for all devices.',
    features: [
      'Comprehensive product management system for sellers.',
      'Invoice generation and order tracking for customers.',
      'Inventory management tools to help sellers keep track of stock levels.',
      'Barcode generation for products to streamline inventory processes.',
      'User authentication and authorization for secure access.',
      'Responsive design ensuring a seamless shopping experience across devices.',
      'Optimized performance with Vite and efficient state management with Redux.',
    ],
    techStack: [
      'React',
      'Vite',
      'Redux',
      'Tailwind CSS',
      'Nest.js',
      'MongoDB',
      'Mongoose',
    ],
    challenges: [
      'Designing a scalable backend architecture with Nest.js.',
      'Implementing efficient state management for complex cart operations.',
      'Ensuring a responsive and user-friendly interface with Tailwind CSS.',
      'Optimizing performance and load times using Vite.',
      'Integrating secure authentication and authorization mechanisms.',
    ],
    learnings: [
      'Improved understanding of backend development with Nest.js.',
      'Enhanced knowledge of database design and management with MongoDB and Mongoose.',
      'Learned best practices for building scalable and maintainable full-stack applications.',
      'Gained experience in implementing secure authentication and authorization mechanisms.',
    ],
    feedback: true,
    links: {
      // live: 'https://freshmart-store.vercel.app',
      github: 'https://github.com/abhinavsoni45/dukan-bill/tree/main',
    },
  },
  {
    title: 'SOS Applicaton | Emergency Alert System',
    slug: 'sos-application',
    tagline:
      'A real-time emergency alert system built with Android Studio, Firebase, and Google Maps API.',
    overview:
      'SOS Application is a mobile-based emergency alert system designed to provide users with quick access to emergency services. Built using Android Studio, Firebase for backend services, and Google Maps API for location tracking, the app enables users to send real-time alerts and receive immediate assistance.',
    features: [
      'Real-time emergency alerts with location tracking.',
      'Integration with Google Maps API for accurate location data.',
      'Firebase backend for secure and scalable data management.',
      'User-friendly interface optimized for quick response in emergencies.',
      'Push notifications for immediate alert delivery.',
      'Responsive design for an optimal viewing experience on all devices.',
    ],
    techStack: ['Android Studio', 'Firebase', 'Google Maps API', 'Java'],
    challenges: [
      'Integrating and managing dynamic data from the Google Maps API.',
      'Designing a clean UI to handle real-time emergency alerts efficiently.',
      'Optimizing performance and build times using Android Studio.',
      'Ensuring responsiveness and accessibility across devices.',
    ],
    learnings: [
      'Improved understanding of working with external APIs in Android applications.',
      'Enhanced experience in using Java for mobile app development.',
      'Learned best practices for designing responsive and user-friendly mobile interfaces.',
      'Gained insights into real-time data handling and push notifications with Firebase.',
    ],
    feedback: true,
    links: {
      // live: 'https://news-hub-seven-chi.vercel.app/',
      github: 'https://github.com/abhinavsoni45/SOS-application',
    },
  },
  {
    title: 'Chat Application | Real-Time Messaging Platform',
    slug: 'chat-application',
    tagline:
      'A real-time messaging application built with React and Firebase, featuring instant communication and seamless user experience.',
    overview:
      'The Chat Application is a modern real-time messaging platform developed using React for the frontend and Firebase for the backend. It provides users with a smooth and intuitive interface for instant communication, supporting features like one-on-one chats, group conversations, and real-time notifications.',
    features: [
      'Instant messaging with real-time updates.',
      'User-friendly interface for seamless communication.',
      'Integration with Firebase for secure and scalable data management.',
      'Support for one-on-one and group conversations.',
      'Push notifications for immediate alert delivery.',
      'Responsive design for an optimal viewing experience on all devices.',
    ],
    techStack: [
      'React',
      'Firebase',
      'Tailwind CSS',
      'Vite',
      'Redux',
      'Nest.js',
    ],
    challenges: [
      'Fetching and managing API data efficiently with JavaScript.',
      'Designing a clean, minimal, and responsive interface.',
      'Handling errors for invalid or non-existent GitHub users.',
      'Ensuring smooth and fast data rendering without frameworks.',
    ],
    learnings: [
      'Strengthened understanding of API integration using JavaScript.',
      'Improved skills in building responsive layouts with pure CSS.',
      'Learned effective DOM manipulation and async handling.',
      'Enhanced ability to design lightweight, framework-free web apps.',
    ],
    feedback: true,
    links: {
      // live: 'https://abhin.github.io/GitHub-Profile-Viewer/',
      github: 'https://github.com/abhinavsoni45/chatter/',
    },
  },
  {
    title: 'Nike Reimagined | Modern Redesign Concept',
    slug: 'nike-reimagined',
    tagline:
      'A sleek and modern redesign of Nike’s official web experience built with React and Tailwind CSS.',
    overview:
      'Nike Reimagined is a creative redesign project focused on delivering a refined, high-performance web experience inspired by Nike’s global brand identity. It highlights a clean, minimal UI with smooth transitions, responsive layouts, and optimized performance across devices. The project demonstrates a balance of aesthetics and functionality for a real-world eCommerce feel.',
    features: [
      'Minimalist and modern user interface design',
      'Fully responsive layouts optimized for all devices',
      'Smooth page transitions and animations with Framer Motion',
      'Optimized build process with Vite for fast loading',
      'Deployed on Vercel for production-grade performance',
    ],
    techStack: ['React.js', 'Tailwind CSS', 'Vite', 'Framer Motion', 'Vercel'],
    challenges: [
      'Maintaining brand consistency while reimagining Nike’s design language.',
      'Achieving smooth animations without affecting performance.',
      'Ensuring pixel-perfect responsiveness across devices.',
      'Optimizing load times for a better user experience.',
    ],
    learnings: [
      'Mastered efficient UI composition with React and Tailwind CSS.',
      'Improved understanding of animation principles using Framer Motion.',
      'Enhanced deployment workflow using Vercel and Vite integration.',
      'Developed better practices for responsive and scalable frontend design.',
    ],
    feedback: false,
    links: {
      live: 'https://nike-reimagined-mu.vercel.app/',
      github: 'https://github.com/abhinavsoni45/nike-store',
    },
  },
  {
    title: 'Portfolio | Abhinav',
    slug: 'portfolio',
    tagline:
      'A dynamic portfolio showcasing my projects, skills, and contributions using the latest web technologies.',
    overview:
      'My personal portfolio is built to highlight my journey as a developer. It integrates advanced features like profile views tracking, a love count mechanism, and server-side actions for seamless interactivity and performance.',
    features: [
      'API to track and display profile views in real-time.',
      'Love count feature to allow visitors to express appreciation for the work.',
      'Implemented server actions using the latest Next.js features.',
      'Dynamic project listing with slug-based routing for detailed pages.',
      'Mobile-responsive and optimized for all devices.',
      'Integration with MongoDB using Mongoose for efficient data management.',
    ],
    techStack: [
      'Next.js',
      'SadCn/UI',
      'MongoDB',
      'Tailwind CSS',
      'Radix UI',
      'TypeScript',
    ],
    challenges: [
      'Implementing real-time tracking for profile views efficiently.',
      'Designing and integrating a scalable database schema with Mongoose.',
      'Utilizing server actions for seamless and performant interactions.',
      'Ensuring cross-browser and device compatibility for UI components.',
    ],
    learnings: [
      'Deepened knowledge of Next.js server actions and their use cases.',
      'Gained experience in designing interactive UI components.',
      'Enhanced understanding of MongoDB operations and ORM with Mongoose.',
      'Improved ability to optimize performance for web applications.',
    ],
    feedback: true,
    links: {
      github: 'https://github.com/abhinavsoni45/Portfolio',
    },
  },
];
