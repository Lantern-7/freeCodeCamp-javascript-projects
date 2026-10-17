// 1. Initialize the poll variable as a Map
const poll = new Map();

// 2. Function to add an option
function addOption(option) {
  if (!option || option.trim() === "") {
    return "Option cannot be empty.";
  }
  
  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }
  
  // Add the option with an empty Set to track voters
  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
}

// 3. Function to cast a vote
function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }
  
  const voters = poll.get(option);
  
  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }
  
  // Add the voter to the Set
  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

// 4. Function to display results
function displayResults() {
  let result = "Poll Results:\n";
  
  // poll.entries() gives us [key, value] pairs
  for (const [option, voters] of poll.entries()) {
    result += `${option}: ${voters.size} votes\n`;
  }
  
  // The tests require the exact string without a trailing newline
  return result.trimEnd();
}

// ==========================================
// Setup to satisfy the "at least 3 options and 3 votes" tests
// ==========================================
addOption("Turkey");
addOption("Morocco");
addOption("Spain");

vote("Turkey", "traveler1");
vote("Turkey", "traveler2");
vote("Morocco", "traveler3");

console.log(displayResults());