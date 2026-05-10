class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  updateBotState = (message) => {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  respond(message) {
    const m = message.toLowerCase();

    // Routing
    if (m.includes("skill") || m.includes("technology"))
      return this.handleSkills();

    if (m.includes("project"))
      return this.handleProjects();

    if (
      m.includes("contact") ||
      m.includes("email") ||
      m.includes("phone") ||
      m.includes("linkedin") ||
      m.includes("github")
    )
      return this.handleContact();

    if (
      m.includes("achievement") ||
      m.includes("award") ||
      m.includes("certification")
    )
      return this.handleAchievements();

    if (
      m.includes("education") ||
      m.includes("study") ||
      m.includes("college")
    )
      return this.handleEducation();

    if (
      m.includes("experience") ||
      m.includes("intern") ||
      m.includes("job")
    )
      return this.handleExperience();

    if (
      m.includes("leadership") ||
      m.includes("nss")
    )
      return this.handleLeadership();

    if (
      m.includes("fun") ||
      m.includes("joke")
    )
      return this.handleFun();

    return this.handleUnknown();
  }

  handleSkills() {
    const msg = this.createChatBotMessage(
      "💻 Skills:\n\n" +
      "• Frontend: ReactJS, HTML, CSS, JavaScript\n" +
      "• Backend: Spring Boot\n" +
      "• Languages: Python, Java, C\n" +
      "• Database: MySQL\n" +
      "• AI/ML: YOLOv11, ResNet, Deep Learning\n" +
      "• Tools: Git, GitHub, VS Code, IntelliJ IDEA"
    );

    this.updateBotState(msg);
  }

  handleProjects() {
    const msg = this.createChatBotMessage(
      "📂 Projects:\n\n" +

      "• VENOMSHIELD-KERALA – A location-based web application to find nearby hospitals with anti-venom stock using ReactJS and Spring Boot.\n\n" +

      "• SkillBridge – A worker-employer connection platform built using Flask and MongoDB.\n\n" +

      "• Traffic Sign Recognition & Driver Alert System – AI-based traffic sign detection system developed using YOLOv11, ResNet, Python, and OpenCV."
    );

    this.updateBotState(msg);
  }

  handleContact() {
    const msg = this.createChatBotMessage(
      "📧 Email: anandbabukonnackaparampil@gmail.com\n\n" +
      "📱 Phone: +91 8078507058\n\n" +
      "🔗 GitHub: github.com/anandbabuajce\n\n" +
      "🔗 LinkedIn: linkedin.com/in/anand-babu-ajce"
    );

    this.updateBotState(msg);
  }

  handleAchievements() {
    const msg = this.createChatBotMessage(
      "🏆 Achievements & Certifications:\n\n" +

      "• Manager’s Honours Award for academic excellence (Semesters 1–4)\n\n" +

      "• Research paper accepted for presentation at IEEE RECCAP 2026\n\n" +

      "• Oracle Database Programming with SQL – Oracle\n\n" +

      "• Oracle Java Foundation & Programming using Java – Oracle & Infosys\n\n" +

      "• Database Management Systems – NPTEL (Certificate of Merit)"
    );

    this.updateBotState(msg);
  }

  handleExperience() {
    const msg = this.createChatBotMessage(
      "💼 Experience:\n\n" +

      "• Full Stack Development Intern at Infospica\n" +
      "Worked with ReactJS and Spring Boot for frontend and backend development.\n\n" +

      "• Academic and self-learning project experience in web development and AI-based applications."
    );

    this.updateBotState(msg);
  }

  handleEducation() {
    const msg = this.createChatBotMessage(
      "🎓 Education:\n\n" +

      "• B.Tech in Computer Science and Engineering\n" +
      "Amal Jyothi College of Engineering – CGPA: 9.07\n\n" +

      "• Senior Secondary Education (CBSE)\n" +
      "Sreyas Public School – 93.6%\n\n" +

      "• Higher Secondary Education (CBSE)\n" +
      "Sreyas Public School – 96.5%"
    );

    this.updateBotState(msg);
  }

  handleLeadership() {
    const msg = this.createChatBotMessage(
      "👨‍💼 Leadership:\n\n" +

      "• NSS Road Safety Flagship Coordinator\n\n" +

      "• Coordinated awareness activities and participated in team-based community programs."
    );

    this.updateBotState(msg);
  }

  handleFun() {
    const msg = this.createChatBotMessage(
      "😄 Why do programmers prefer dark mode?\n\nBecause light attracts bugs!"
    );

    this.updateBotState(msg);
  }

  handleUnknown() {
    const msg = this.createChatBotMessage(
      "🤖 I’m still learning. Try asking about my skills, projects, education, experience, certifications, or contact details."
    );

    this.updateBotState(msg);
  }
}

export default ActionProvider;