const voteCounts = {
  'Option A': 0,
  'Option B': 0,
  'Option C': 0
};

function vote(option) {
  // Prevent voting again
  /*if (localStorage.getItem("hasVoted")) {
    alert("You have already voted!");
    return;
  }
*/
  voteCounts[option]++;
  localStorage.setItem("hasVoted", true);

  document.getElementById("thank-you").style.display = "block";
  displayResults();
}

function displayResults() {
  const totalVotes = Object.values(voteCounts).reduce((a, b) => a + b, 0);
  const resultsList = document.getElementById('results-list');
  resultsList.innerHTML = '';

  for (let option in voteCounts) {
    const percentage = totalVotes === 0 ? 0 : ((voteCounts[option] / totalVotes) * 100).toFixed(1);
    
    const resultItem = document.createElement('div');
    resultItem.className = 'result-item';

    resultItem.innerHTML = `
      <strong>${option}:</strong> ${voteCounts[option]} vote(s) – ${percentage}%
      <div class="result-bar">
        <div class="result-fill" style="width: ${percentage}%;"></div>
      </div>
    `;

    resultsList.appendChild(resultItem);
  }
}

// Show initial empty result
displayResults();
