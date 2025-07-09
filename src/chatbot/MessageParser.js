class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lower = message.toLowerCase();

    // Match based on keywords
    if (lower.includes("skill")) {
      this.actionProvider.handleSkills();
    } else if (lower.includes("project") || lower.includes("skillbridge")) {
      this.actionProvider.handleProjects();
    } else if (lower.includes("contact") || lower.includes("email") || lower.includes("phone")) {
      this.actionProvider.handleContact();
    } else if (lower.includes("achievement") || lower.includes("award") || lower.includes("win")) {
      this.actionProvider.handleAchievements();
    } else if (lower.includes("education") || lower.includes("study") || lower.includes("college")) {
      this.actionProvider.handleEducation();
    } else if (lower.includes("experience") || lower.includes("intern") || lower.includes("work")) {
      this.actionProvider.handleExperience();
    } else if (lower.includes("fun") || lower.includes("joke") || lower.includes("laugh")) {
      this.actionProvider.handleFun();
    } else {
      this.actionProvider.handleUnknown();
    }
  }
}

export default MessageParser;
