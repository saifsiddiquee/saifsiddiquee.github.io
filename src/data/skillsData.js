export const skillsCategories = [
  {
    category: 'Languages',
    skills: ['Kotlin', 'Java', 'Dart', 'Swift', 'TypeScript', 'JavaScript', 'C#', 'SQL']
  },
  {
    category: 'Mobile & Architecture',
    skills: ['Android SDK', 'Flutter', 'Jetpack Compose', 'MVVM & Clean Architecture', 'BLoC Pattern', 'Coroutines & Flow', 'WorkManager', 'Offline-First Sync']
  },
  {
    category: 'Backend & Cloud',
    skills: ['RESTful APIs', 'Node.js', 'Spring Boot', 'WebSockets', 'Firebase', 'Microservices', 'GraphQL']
  },
  {
    category: 'Data & Security',
    skills: ['Room SQLite', 'SQLCipher (Encryption)', 'MySQL', 'PostgreSQL', 'Redis', 'OAuth2 / Biometrics']
  },
  {
    category: 'Engineering Tools & DevOps',
    skills: ['Git & GitHub Actions', 'CI/CD Pipelines', 'Figma', 'Postman', 'Gradle', 'Android Studio Profiler', 'Unit & UI Testing']
  }
]

export const skillsData = skillsCategories.flatMap(c => c.skills)
