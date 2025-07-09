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

    // Core logic routing
    if (m.includes("skill")) return this.handleSkills();
    if (m.includes("project")) return this.handleProjects();
    if (m.includes("contact") || m.includes("email") || m.includes("phone")) return this.handleContact();
    if (m.includes("achievement") || m.includes("award") || m.includes("win")) return this.handleAchievements();
    if (m.includes("education") || m.includes("study")) return this.handleEducation();
    if (m.includes("experience") || m.includes("intern") || m.includes("job")) return this.handleExperience();
    if (m.includes("fun") || m.includes("joke")) return this.handleFun();
    return this.handleUnknown();
  }

  handleSkills() {
    const msg = this.createChatBotMessage(
      "I'm experienced in ReactJS, Java, Spring Boot, MySQL, MongoDB, JavaScript, HTML, and CSS. Also proficient in communication, leadership, and teamwork."
    );
    this.updateBotState(msg);
  }

  handleProjects() {
    const msg = this.createChatBotMessage(
      "SkillBridge: A web app connecting daily wage workers to employers. Also built Vox-Helexia: an e-commerce site for sports gear using React + Spring Boot."
    );
    this.updateBotState(msg);
  }

  handleContact() {
    const msg = this.createChatBotMessage(
      "📧 Email: anandbabukonnackaparampil@gmail.com\n📱 Phone: +91 8078507058\n🔗 GitHub: github.com/anandbabuajce\n🔗 LinkedIn: linkedin.com/in/anand-babu-ajce"
    );
    this.updateBotState(msg);
  }

  handleAchievements() {
    const msg = this.createChatBotMessage(
      "🏅 Manager’s Honours Award (Sem 1–4), 🛰 NASA Space Apps 2023, 👨‍💻 SAP Hackfest 2024, 🧠 NACORE 2025 participant."
    );
    this.updateBotState(msg);
  }

  handleExperience() {
    const msg = this.createChatBotMessage(
      "💼 Full Stack Intern at Infospica, 👷‍♂️ NSS Road Safety Coordinator, 🧑‍💻 Developer of SkillBridge platform."
    );
    this.updateBotState(msg);
  }

  handleEducation() {
    const msg = this.createChatBotMessage(
      "🎓 B.Tech CSE at Amal Jyothi College (CGPA: 9.17), 📚 Plus Two (9.8 CGPA), 🏫 SSLC (10 CGPA) — all from Sreyas Public School."
    );
    this.updateBotState(msg);
  }

  handleFun() {
    const msg = this.createChatBotMessage(
      "😄 Why do programmers prefer dark mode? Because light attracts bugs! Want another one?"
    );
    this.updateBotState(msg);
  }

  handleUnknown() {
    const msg = this.createChatBotMessage(
      "I'm not sure how to help with that yet 🤔. Try asking about skills, projects, education, contact, or something fun!"
    );
    this.updateBotState(msg);
  }
}

export default ActionProvider;
