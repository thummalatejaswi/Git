function render(repo) {
    const svg = document.getElementById("graph");
    svg.innerHTML = "";
  
    const commits = repo.log();
    const minWidth = 1000;
    const spacing = 80;
    const startX = 100;
    const startY = 80;
    const currentBranch = repo.HEAD; 
    const laneSpacing = 50;     
    const positions = new Map();
    const branchLanes = new Map();
    let laneIndex = 0;
    console.log('commits', commits);

    svg.setAttribute(
      "width",
      Math.max(minWidth, commits.length * spacing + 200)
    );


    commits.forEach(commit => {
        if (!branchLanes.has(commit.branch)) {
          branchLanes.set(commit.branch, laneIndex++);
          console.log(branchLanes);
        }
    });
    
    commits.forEach((commit, index) => {
        const lane = branchLanes.get(commit.branch);
        console.log('branchlines', branchLanes);
    
        positions.set(commit, {
          x: startX + index * spacing,
          y: startY + lane * laneSpacing
        });
    });
  
    commits.forEach(commit => {
      if (!commit.parent) return;
  
      const from = positions.get(commit);
      const to = positions.get(commit.parent);
      drawLine(svg, from, to);
    });
  
    commits.forEach(commit => {
      const { x, y } = positions.get(commit);
      drawCommit(svg, x, y, commit.id);
      drawLabel(svg, x, y, commit.message);
    });

    svg.parentElement.scrollTo({
      left: svg.scrollWidth,
      behavior: "smooth"
    });
}
  
window.render = render;
  