-- Seed file for WeMake database
-- This file populates all tables with sample data
-- Profile ID used throughout: 79ff5527-46c1-47e6-993c-481506cfebf4

-- Categories (5 rows)
INSERT INTO categories (name, description, created_at, updated_at) VALUES
('Web Development', 'Tools and platforms for building websites and web applications', NOW(), NOW()),
('Mobile Apps', 'iOS and Android applications and development tools', NOW(), NOW()),
('Developer Tools', 'IDEs, frameworks, libraries, and development utilities', NOW(), NOW()),
('AI & Machine Learning', 'Artificial intelligence, machine learning, and data science tools', NOW(), NOW()),
('Productivity', 'Tools to boost productivity and streamline workflows', NOW(), NOW());

-- Topics (5 rows)
INSERT INTO topics (topic, slug, created_at) VALUES
('JavaScript Frameworks', 'javascript-frameworks', NOW()),
('Career Advice', 'career-advice', NOW()),
('Startup Ideas', 'startup-ideas', NOW()),
('Tech News', 'tech-news', NOW()),
('Code Reviews', 'code-reviews', NOW());

-- Products (5 rows)
INSERT INTO products (name, tagline, description, how_it_works, icon, url, stats, profile_id, category_id, created_at, updated_at) VALUES
('DevTracker Pro', 'Track your development progress like never before', 'A comprehensive tool for developers to monitor their coding activities, track project milestones, and visualize productivity metrics across multiple repositories and technologies.', 'Connect your Git repositories, set project goals, and let DevTracker Pro automatically analyze your commits, code quality, and development patterns to provide insights and recommendations.', 'https://example.com/devtracker-icon.svg', 'https://devtracker.pro', '{"views": 1250, "visitors": 890}', '79ff5527-46c1-47e6-993c-481506cfebf4', 3, NOW(), NOW()),
('MobileUI Kit', 'Beautiful UI components for React Native', 'A comprehensive collection of pre-built, customizable UI components designed specifically for React Native applications, featuring modern design patterns and accessibility-first approach.', 'Install the package, import components, and customize them using our theme system. Each component comes with TypeScript support and extensive documentation with live examples.', 'https://example.com/mobileui-icon.svg', 'https://mobileuikit.dev', '{"views": 2100, "visitors": 1560}', '79ff5527-46c1-47e6-993c-481506cfebf4', 2, NOW(), NOW()),
('AI Code Assistant', 'Your intelligent coding companion', 'An AI-powered code completion and refactoring tool that understands your codebase context, suggests optimizations, and helps maintain consistent coding standards across your entire project.', 'Install as a VS Code extension, configure your project settings, and start coding. The AI learns from your patterns and provides contextual suggestions in real-time.', 'https://example.com/ai-assistant-icon.svg', 'https://aicode.assistant', '{"views": 3450, "visitors": 2100}', '79ff5527-46c1-47e6-993c-481506cfebf4', 4, NOW(), NOW()),
('TaskFlow', 'Streamline your workflow automation', 'A visual workflow builder that allows teams to create complex automation sequences without code, integrating with popular tools and services to eliminate repetitive tasks.', 'Drag and drop workflow components, connect your tools via APIs, set triggers and conditions, then deploy your automations to run continuously in the cloud.', 'https://example.com/taskflow-icon.svg', 'https://taskflow.io', '{"views": 1890, "visitors": 1340}', '79ff5527-46c1-47e6-993c-481506cfebf4', 5, NOW(), NOW()),
('WebSpeed Optimizer', 'Make your websites lightning fast', 'An automated web performance optimization tool that analyzes your website, identifies bottlenecks, and applies optimizations to improve loading speeds and Core Web Vitals scores.', 'Enter your website URL, run our comprehensive analysis, review optimization recommendations, and apply fixes either automatically or manually based on your preferences.', 'https://example.com/webspeed-icon.svg', 'https://webspeed.optimizer', '{"views": 980, "visitors": 720}', '79ff5527-46c1-47e6-993c-481506cfebf4', 1, NOW(), NOW());

-- Jobs (5 rows)
INSERT INTO jobs (position, overview, responsibilities, qualifications, benefits, skills, company_name, company_logo, company_location, apply_url, job_type, location, salary_range, created_at, updated_at) VALUES
('Senior Full Stack Developer', 'Join our innovative team building the next generation of cloud-native applications', 'Design and develop scalable web applications, collaborate with cross-functional teams, mentor junior developers, participate in architectural decisions, and contribute to our open-source initiatives.', 'Bachelor''s degree in Computer Science or equivalent experience, 5+ years of full-stack development, proficiency in React, Node.js, and cloud platforms, experience with microservices architecture.', 'Competitive salary, equity package, flexible work hours, unlimited PTO, health insurance, learning budget, conference attendance, remote work options.', 'React, Node.js, TypeScript, AWS, Docker, Kubernetes, PostgreSQL, GraphQL', 'TechFlow Solutions', 'https://example.com/techflow-logo.svg', 'San Francisco, CA', 'https://techflow.com/careers/senior-fullstack', 'full-time', 'hybrid', '$150,000 - $200,000', NOW(), NOW()),
('Product Designer', 'Shape the future of user experience in fintech', 'Lead design initiatives for our mobile and web platforms, conduct user research, create prototypes, collaborate with engineering teams, and establish design systems and guidelines.', 'Bachelor''s degree in Design or related field, 4+ years of product design experience, proficiency in Figma and design tools, experience with user research methodologies, portfolio demonstrating UX/UI skills.', 'Competitive salary, stock options, flexible schedule, remote work, professional development budget, top-tier equipment, team retreats, wellness programs.', 'Figma, Sketch, Prototyping, User Research, Design Systems, HTML/CSS, Usability Testing', 'FinanceForward', 'https://example.com/financeforward-logo.svg', 'New York, NY', 'https://financeforward.com/jobs/product-designer', 'full-time', 'hybrid', '$100,000 - $150,000', NOW(), NOW()),
('DevOps Engineer', 'Build and maintain infrastructure for high-scale applications', 'Design CI/CD pipelines, manage cloud infrastructure, implement monitoring and alerting systems, optimize deployment processes, and ensure security best practices across all environments.', 'Bachelor''s degree in Engineering or equivalent, 3+ years DevOps experience, expertise in AWS/Azure, strong scripting skills, experience with containerization and orchestration tools.', 'Competitive salary, performance bonuses, flexible hours, remote work options, learning stipend, conference budget, health benefits, retirement matching.', 'AWS, Terraform, Kubernetes, Jenkins, Prometheus, Grafana, Python, Bash, Docker', 'CloudScale Systems', 'https://example.com/cloudscale-logo.svg', 'Austin, TX', 'https://cloudscale.com/careers/devops-engineer', 'full-time', 'anywhere', '$100,000 - $150,000', NOW(), NOW()),
('Frontend Developer Intern', 'Learn and grow with our experienced development team', 'Assist in building user interfaces for web applications, participate in code reviews, learn modern frontend technologies, contribute to component libraries, and support testing initiatives.', 'Currently pursuing Computer Science degree or bootcamp graduate, basic knowledge of HTML, CSS, JavaScript, familiarity with React preferred, passion for frontend development, strong communication skills.', 'Competitive internship stipend, mentorship program, learning opportunities, potential for full-time offer, flexible schedule, modern office space, team events.', 'HTML, CSS, JavaScript, React, Git, Responsive Design, Testing Frameworks', 'StartupHub', 'https://example.com/startuphub-logo.svg', 'Seattle, WA', 'https://startuphub.com/internships/frontend-developer', 'internship', 'local', '$0 - $50,000', NOW(), NOW()),
('Mobile App Developer', 'Create amazing mobile experiences for millions of users', 'Develop native iOS and Android applications, implement new features, optimize app performance, collaborate with designers and backend teams, and maintain high code quality standards.', 'Bachelor''s degree or equivalent experience, 3+ years mobile development, proficiency in Swift/Kotlin or React Native, experience with app store deployment, understanding of mobile UX principles.', 'Competitive salary, equity participation, flexible work arrangements, comprehensive health coverage, professional development, modern equipment, team outings.', 'Swift, Kotlin, React Native, iOS, Android, REST APIs, Git, Agile Development', 'MobileFirst Inc', 'https://example.com/mobilefirst-logo.svg', 'Los Angeles, CA', 'https://mobilefirst.com/jobs/mobile-developer', 'full-time', 'hybrid', '$100,000 - $150,000', NOW(), NOW());

-- GPT Ideas (5 rows)
INSERT INTO gpt_ideas (idea, views, claimed_at, claimed_by, created_at) VALUES
('A browser extension that automatically generates alt text for images on websites using AI, making the web more accessible for visually impaired users', 45, NULL, NULL, NOW()),
('An AI-powered code documentation generator that analyzes your codebase and creates comprehensive documentation with examples and usage patterns', 78, NOW() - INTERVAL '2 days', '79ff5527-46c1-47e6-993c-481506cfebf4', NOW() - INTERVAL '5 days'),
('A platform that connects remote workers with local coworking spaces worldwide, featuring real-time availability, amenities, and community features', 23, NULL, NULL, NOW() - INTERVAL '1 day'),
('An app that gamifies household chores for families, with points, achievements, and rewards to encourage participation from all family members', 67, NULL, NULL, NOW() - INTERVAL '3 days'),
('A tool that converts natural language descriptions into SQL queries, helping non-technical users interact with databases more effectively', 34, NULL, NULL, NOW() - INTERVAL '4 days');

-- Posts (5 rows)
INSERT INTO posts (title, content, topic_id, profile_id, created_at, updated_at) VALUES
('The Future of React: Server Components and Beyond', 'React Server Components are revolutionizing how we think about frontend architecture. In this post, I''ll explore the benefits, challenges, and practical implementation strategies for adopting RSCs in your next project. We''ll cover performance implications, developer experience improvements, and real-world case studies from teams who have successfully migrated to this new paradigm.', 1, '79ff5527-46c1-47e6-993c-481506cfebf4', NOW() - INTERVAL '2 days', NOW() - INTERVAL '2 days'),
('From Bootcamp to Senior Developer: My 5-Year Journey', 'Five years ago, I was a complete beginner who had just graduated from a coding bootcamp. Today, I''m a senior developer at a Fortune 500 company. Here''s the honest truth about what it took to get here, including the struggles, breakthroughs, and key decisions that shaped my career trajectory.', 2, '79ff5527-46c1-47e6-993c-481506cfebf4', NOW() - INTERVAL '1 day', NOW() - INTERVAL '1 day'),
('Building a SaaS in 2024: Lessons from 6 Failed Attempts', 'After six failed startup attempts, I finally built a SaaS that generates $10K MRR. In this detailed retrospective, I''ll share the mistakes I made, the lessons I learned, and the strategies that finally worked. This isn''t another success story – it''s a raw account of entrepreneurial persistence.', 3, '79ff5527-46c1-47e6-993c-481506cfebf4', NOW() - INTERVAL '3 days', NOW() - INTERVAL '3 days'),
('The AI Revolution is Here: How ChatGPT Changed My Development Workflow', 'Like many developers, I was skeptical about AI coding assistants. Six months later, my productivity has increased by 40%. Here''s exactly how I integrate AI tools into my daily workflow, including specific prompts, workflows, and the tasks where AI excels vs. where human judgment is still essential.', 4, '79ff5527-46c1-47e6-993c-481506cfebf4', NOW() - INTERVAL '4 days', NOW() - INTERVAL '4 days'),
('Code Review Best Practices: What I Learned from 1000+ Reviews', 'After conducting over 1000 code reviews in the past two years, I''ve identified patterns that separate great reviews from mediocre ones. This comprehensive guide covers everything from technical aspects to communication strategies that foster team growth and maintain code quality.', 5, '79ff5527-46c1-47e6-993c-481506cfebf4', NOW() - INTERVAL '5 days', NOW() - INTERVAL '5 days');

-- Team (5 rows)
INSERT INTO team (product_name, team_size, equity_split, product_stage, roles, product_description, created_at, updated_at) VALUES
('EcoTrack', 3, 33, 'mvp', 'Full-stack Developer, UX Designer, Marketing Specialist', 'A mobile app that helps individuals track their carbon footprint and provides personalized recommendations for reducing environmental impact.', NOW() - INTERVAL '10 days', NOW() - INTERVAL '5 days'),
('CodeMentor AI', 2, 50, 'prototype', 'AI Engineer, Product Manager', 'An intelligent tutoring system that provides personalized coding lessons and real-time feedback for programming students.', NOW() - INTERVAL '8 days', NOW() - INTERVAL '3 days'),
('LocalFood Network', 4, 25, 'launched', 'Backend Developer, Frontend Developer, Business Development, Operations Manager', 'A platform connecting local farmers directly with consumers, eliminating middlemen and promoting sustainable agriculture.', NOW() - INTERVAL '15 days', NOW() - INTERVAL '1 day'),
('MindfulWork', 1, 100, 'idea', 'Solo Founder / Full-stack Developer', 'A workplace wellness app that provides guided meditation, stress tracking, and team-building exercises for remote teams.', NOW() - INTERVAL '5 days', NOW() - INTERVAL '2 days'),
('SmartHome Hub', 5, 20, 'mvp', 'IoT Engineer, Mobile Developer, Cloud Architect, Hardware Designer, Product Designer', 'An open-source home automation platform that works with any smart device and prioritizes user privacy and data security.', NOW() - INTERVAL '12 days', NOW() - INTERVAL '4 days');

-- Reviews (5 rows)
INSERT INTO reviews (product_id, profile_id, rating, review, created_at, updated_at) VALUES
(1, '79ff5527-46c1-47e6-993c-481506cfebf4', 5, 'DevTracker Pro has completely transformed how I manage my development projects. The insights into my coding patterns have helped me identify areas for improvement and boost my productivity significantly. The Git integration is seamless and the visualizations are incredibly helpful.', NOW() - INTERVAL '3 days', NOW() - INTERVAL '3 days'),
(2, '79ff5527-46c1-47e6-993c-481506cfebf4', 4, 'MobileUI Kit saved me weeks of development time. The components are well-designed and highly customizable. The TypeScript support is excellent. My only complaint is that some of the more complex components could use better documentation with more examples.', NOW() - INTERVAL '5 days', NOW() - INTERVAL '5 days'),
(3, '79ff5527-46c1-47e6-993c-481506cfebf4', 5, 'This AI Code Assistant is a game-changer. It understands context better than any other tool I''ve tried. The suggestions are relevant and the refactoring recommendations have helped me write cleaner, more maintainable code. Worth every penny.', NOW() - INTERVAL '1 day', NOW() - INTERVAL '1 day'),
(4, '79ff5527-46c1-47e6-993c-481506cfebf4', 4, 'TaskFlow has streamlined our team''s workflow automation. The visual builder is intuitive and the integrations work well. Setup was easier than expected. The only downside is the pricing for smaller teams, but the productivity gains justify the cost.', NOW() - INTERVAL '7 days', NOW() - INTERVAL '7 days'),
(5, '79ff5527-46c1-47e6-993c-481506cfebf4', 3, 'WebSpeed Optimizer identified several performance issues on our site that we missed. The automated fixes worked well for basic optimizations. However, some of the more complex recommendations required manual implementation. Good tool but not magic.', NOW() - INTERVAL '10 days', NOW() - INTERVAL '10 days');

-- Message Rooms (2 rooms for variety)
INSERT INTO "messageRoom" (created_at) VALUES
(NOW() - INTERVAL '5 days'),
(NOW() - INTERVAL '2 days');

-- Messages (5 messages across different rooms)
INSERT INTO messages (message_room_id, sender_id, content, seen_by, created_at) VALUES
(1, '79ff5527-46c1-47e6-993c-481506cfebf4', 'Hey! I saw your post about React Server Components. Really insightful stuff!', 1, NOW() - INTERVAL '5 days'),
(1, '79ff5527-46c1-47e6-993c-481506cfebf4', 'I''ve been experimenting with RSCs in a side project. Would love to hear about your experience with state management in this setup.', 1, NOW() - INTERVAL '4 days'),
(1, '79ff5527-46c1-47e6-993c-481506cfebf4', 'Also, have you tried the new Next.js app directory? The developer experience is quite smooth once you get used to the paradigm shift.', 1, NOW() - INTERVAL '4 days'),
(2, '79ff5527-46c1-47e6-993c-481506cfebf4', 'Thanks for reviewing my product! Your feedback about the documentation is spot on. We''re working on improving the examples section.', 1, NOW() - INTERVAL '2 days'),
(2, '79ff5527-46c1-47e6-993c-481506cfebf4', 'I''d love to get more specific feedback if you have time. What specific components would you like to see better documented?', 1, NOW() - INTERVAL '1 day');

-- Post Replies (5 replies)
INSERT INTO "postReplies" (post_id, profile_id, reply, parent_id, created_at, updated_at) VALUES
(1, '79ff5527-46c1-47e6-993c-481506cfebf4', 'Great points about RSCs! I''ve been hesitant to adopt them due to the learning curve, but your explanation of the benefits makes it clear why they''re worth the investment.', NULL, NOW() - INTERVAL '1 day', NOW() - INTERVAL '1 day'),
(2, '79ff5527-46c1-47e6-993c-481506cfebf4', 'Your journey is inspiring! I''m currently 2 years into my career and sometimes feel overwhelmed by how much there is to learn. This gives me hope that persistence pays off.', NULL, NOW() - INTERVAL '12 hours', NOW() - INTERVAL '12 hours'),
(3, '79ff5527-46c1-47e6-993c-481506cfebf4', 'Six failures before success - that''s real entrepreneurship right there. Most people give up after the first or second attempt. What kept you motivated through all those setbacks?', NULL, NOW() - INTERVAL '2 days', NOW() - INTERVAL '2 days'),
(4, '79ff5527-46c1-47e6-993c-481506cfebf4', 'I''ve been using GitHub Copilot for a few months now and the productivity gains are real. However, I sometimes worry about becoming too dependent on AI. How do you balance AI assistance with maintaining your own coding skills?', NULL, NOW() - INTERVAL '3 days', NOW() - INTERVAL '3 days'),
(1, '79ff5527-46c1-47e6-993c-481506cfebf4', 'Absolutely! The initial setup can be tricky, but once you understand the mental model, it becomes much more intuitive. I''d recommend starting with a simple project to get familiar with the concepts.', 1, NOW() - INTERVAL '6 hours', NOW() - INTERVAL '6 hours');

-- Notifications (5 notifications)
INSERT INTO notifications (source_id, target_id, product_id, post_id, notification_type, created_at) VALUES
('79ff5527-46c1-47e6-993c-481506cfebf4', '79ff5527-46c1-47e6-993c-481506cfebf4', 1, NULL, 'review', NOW() - INTERVAL '3 days'),
('79ff5527-46c1-47e6-993c-481506cfebf4', '79ff5527-46c1-47e6-993c-481506cfebf4', 2, NULL, 'review', NOW() - INTERVAL '5 days'),
('79ff5527-46c1-47e6-993c-481506cfebf4', '79ff5527-46c1-47e6-993c-481506cfebf4', NULL, 1, 'reply', NOW() - INTERVAL '1 day'),
('79ff5527-46c1-47e6-993c-481506cfebf4', '79ff5527-46c1-47e6-993c-481506cfebf4', NULL, 2, 'reply', NOW() - INTERVAL '12 hours'),
('79ff5527-46c1-47e6-993c-481506cfebf4', '79ff5527-46c1-47e6-993c-481506cfebf4', NULL, NULL, 'follow', NOW() - INTERVAL '7 days');

-- Bridge Tables with Composite Primary Keys (1 row each as requested)

-- Product Upvotes
INSERT INTO product_upvotes (product_id, profile_id) VALUES
(1, '79ff5527-46c1-47e6-993c-481506cfebf4');

-- Post Upvotes  
INSERT INTO "postUpvotes" (post_id, profile_id) VALUES
(1, '79ff5527-46c1-47e6-993c-481506cfebf4');

-- GPT Ideas Likes
INSERT INTO "gptIdeasLikes" (gpt_idea_id, profile_id) VALUES
(2, '79ff5527-46c1-47e6-993c-481506cfebf4');

-- Message Room Members
INSERT INTO "messageRoomMembers" (message_room_id, profile_id, created_at) VALUES
(1, '79ff5527-46c1-47e6-993c-481506cfebf4', NOW() - INTERVAL '5 days');

-- Follows (self-follow for demonstration, though typically this wouldn't happen)
INSERT INTO follows (follower_id, following_id, created_at) VALUES
('79ff5527-46c1-47e6-993c-481506cfebf4', '79ff5527-46c1-47e6-993c-481506cfebf4', NOW() - INTERVAL '10 days'); 